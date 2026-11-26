let activeHeader;
let activeNav;
let activePanel;
let activeButton;
let activeMode;
let updateQueued = false;

function setExpanded(expanded, restoreFocus = false) {
  if (!activeButton || !activePanel) return;
  activeButton.setAttribute('aria-expanded', String(expanded));
  activeButton.setAttribute('aria-label', expanded ? 'Close navigation menu' : 'Open navigation menu');
  activeButton.classList.toggle('is-open', expanded);
  activePanel.hidden = !expanded;
  activePanel.classList.toggle('is-open', expanded);
  if (restoreFocus) activeButton.focus();
}

function makeButton(header) {
  const button = document.createElement('button');
  button.className = 'regolith-menu-toggle';
  button.type = 'button';
  button.setAttribute('aria-label', 'Open navigation menu');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-haspopup', 'true');

  const icon = document.createElement('span');
  icon.className = 'regolith-menu-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.innerHTML = '<span></span><span></span><span></span><span></span>';
  button.append(icon);

  header.append(button);

  button.addEventListener('click', () => {
    setExpanded(activeButton.getAttribute('aria-expanded') !== 'true');
  });
  return button;
}

function makeServicesLink(item) {
  const link = document.createElement('a');
  link.className = item.className;
  link.dataset.framerName = 'Services';
  link.href = location.pathname.includes('/subpages/')
    ? './services.html'
    : './subpages/services.html';
  link.setAttribute('aria-label', 'Services');
  link.style.cssText = item.style.cssText;
  [...item.childNodes].forEach((child) => {
    if (!(child.nodeType === Node.ELEMENT_NODE && child.matches('[data-framer-name="Chevron"]'))) {
      link.append(child);
    }
  });
  return link;
}

function configureHeader() {
  const header = [...document.querySelectorAll('#main .framer-1yxfl7z-container')]
    .find((element) => element.getClientRects().length);
  if (!header) return;

  const nav = [...header.querySelectorAll('[data-framer-name="Nav"].framer-1ujb8oj')]
    .find((element) => element.getClientRects().length);
  const nativePanel = header.querySelector('[data-framer-name="Menu Panel"]');
  const mode = nav ? 'desktop' : nativePanel ? 'phone' : null;
  if (!mode) return;

  header.classList.add('regolith-header-enhanced');
  header.classList.toggle('regolith-home-header', Boolean(document.querySelector('#main .framer-vXaY5')));

  const changed = header !== activeHeader || mode !== activeMode || (mode === 'desktop' && nav !== activeNav);
  if (!changed) return;

  const previousPanel = activePanel;
  const panel = previousPanel || (mode === 'phone' ? nativePanel : document.createElement('nav'));

  if (mode === 'desktop') {
    const bounds = nav.getBoundingClientRect();
    const linkNodes = [...nav.childNodes]
      .filter((node) => node !== activeButton)
      .map((node) => node instanceof Element && node.matches('[data-framer-name="Services"]')
        ? makeServicesLink(node)
        : node);
    if (linkNodes.length) panel.replaceChildren(...linkNodes);
    nav.classList.add('regolith-nav-source');
    nav.style.width = `${bounds.width}px`;
    nav.style.height = `${bounds.height}px`;
    header.append(panel);
  } else {
    if (nativePanel && nativePanel !== panel) {
      panel.replaceChildren(...nativePanel.childNodes);
      nativePanel.remove();
    }
    header.querySelectorAll('[data-framer-name="Menu Button"]').forEach((element) => {
      element.classList.add('regolith-native-menu-button');
    });
    header.append(panel);
  }

  panel.classList.add('regolith-menu-panel');
  panel.id = 'regolith-primary-navigation';
  panel.setAttribute('role', 'navigation');
  panel.setAttribute('aria-label', 'Primary navigation');
  panel.hidden = true;
  panel.classList.remove('is-open');
  if (mode === 'phone') panel.classList.add('regolith-phone-menu-panel');
  else panel.classList.remove('regolith-phone-menu-panel');

  if (activeButton && activeButton.isConnected) activeButton.remove();
  activeHeader = header;
  activeNav = nav;
  activePanel = panel;
  activeMode = mode;
  activeButton = makeButton(header);
  activeButton.setAttribute('aria-controls', panel.id);

  panel.addEventListener('click', (event) => {
    if (event.target.closest('a')) setExpanded(false);
  });
}

function scheduleUpdate() {
  if (updateQueued) return;
  updateQueued = true;
  requestAnimationFrame(() => {
    updateQueued = false;
    configureHeader();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && activeButton?.getAttribute('aria-expanded') === 'true') {
    event.preventDefault();
    setExpanded(false, true);
  }
});

document.addEventListener('pointerdown', (event) => {
  if (
    activeButton?.getAttribute('aria-expanded') === 'true' &&
    !activeButton.contains(event.target) &&
    !activePanel.contains(event.target)
  ) {
    setExpanded(false);
  }
});

window.addEventListener('resize', scheduleUpdate, { passive: true });
document.addEventListener('DOMContentLoaded', () => {
  configureHeader();
  const root = document.querySelector('#main') || document.body;
  new MutationObserver(scheduleUpdate).observe(root, { childList: true, subtree: true });
}, { once: true });
