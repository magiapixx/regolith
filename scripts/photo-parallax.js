(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const observed = new Set();
  const visible = new Set();
  const styled = new Set();
  const originalStyles = new WeakMap();
  let frame = 0;
  let intersectionObserver;

  const isPhoto = (image) => {
    const source = image.currentSrc || image.src;
    if (!source || /\.svg(?:$|[?#])/i.test(source) || /^data:image\/svg/i.test(source)) return false;
    if (image.closest("svg")) return false;
    if (/\b(?:logo|logotype|icon|symbol|badge|arrow|star)\b/i.test(image.alt)) return false;

    const { width, height } = image.getBoundingClientRect();
    return !(width > 0 && height > 0 && width <= 80 && height <= 48 && width / height >= 1.5);
  };

  const isNearViewport = (image) => {
    const viewportHeight = document.documentElement.clientHeight;
    const { top, bottom } = image.getBoundingClientRect();
    return bottom >= -viewportHeight * 1.5 && top <= viewportHeight * 2.5;
  };

  const rememberStyles = (image) => {
    if (originalStyles.has(image)) return;
    originalStyles.set(image, {
      translate: image.style.getPropertyValue("translate"),
      translatePriority: image.style.getPropertyPriority("translate"),
      scale: image.style.getPropertyValue("scale"),
      scalePriority: image.style.getPropertyPriority("scale"),
    });
  };

  const restoreStyles = (image) => {
    const original = originalStyles.get(image);
    if (!original) return;
    if (original.translate) image.style.setProperty("translate", original.translate, original.translatePriority);
    else image.style.removeProperty("translate");
    if (original.scale) image.style.setProperty("scale", original.scale, original.scalePriority);
    else image.style.removeProperty("scale");
    originalStyles.delete(image);
    styled.delete(image);
  };

  const clearEffects = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    visible.clear();
    styled.forEach(restoreStyles);
  };

  const update = () => {
    frame = 0;
    if (reducedMotion.matches) return;

    const viewportHeight = document.documentElement.clientHeight;
    visible.forEach((image) => {
      if (!image.isConnected) {
        visible.delete(image);
        observed.delete(image);
        restoreStyles(image);
        return;
      }

      if (!isPhoto(image)) {
        restoreStyles(image);
        return;
      }

      const { top, height } = image.getBoundingClientRect();
      if (!height) return;

      const distanceFromCenter = Math.max(0, viewportHeight / 2 - (top + height / 2));
      const offset = -Math.min(44, height * 0.06, distanceFromCenter * 0.065);
      const scale = 1 + Math.min(0.12, (Math.abs(offset) * 2) / height);
      rememberStyles(image);
      image.style.setProperty("translate", `0 ${offset.toFixed(2)}px`);
      image.style.setProperty("scale", scale.toFixed(4));
      styled.add(image);
    });
  };

  const scheduleUpdate = () => {
    if (!frame && !reducedMotion.matches) {
      frame = requestAnimationFrame(update);
    }
  };

  const observeImage = (image) => {
    if (observed.has(image)) return;
    observed.add(image);
    if (intersectionObserver) {
      intersectionObserver.observe(image);
      if (isNearViewport(image) && isPhoto(image)) visible.add(image);
    }
    else if (isPhoto(image)) visible.add(image);
  };

  const scan = (node) => {
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.matches("img")) observeImage(node);
    node.querySelectorAll("img").forEach(observeImage);
  };

  const start = () => {
    if (reducedMotion.matches) return;
    scan(document.documentElement);
    if (window.IntersectionObserver) {
      intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isPhoto(entry.target)) visible.add(entry.target);
          else visible.delete(entry.target);
        });
        scheduleUpdate();
      }, { rootMargin: "150% 0px 150% 0px" });
      observed.forEach((image) => {
        intersectionObserver.observe(image);
        if (isNearViewport(image) && isPhoto(image)) visible.add(image);
      });
    } else observed.forEach((image) => {
      if (isPhoto(image)) visible.add(image);
    });
    scheduleUpdate();
  };

  const observer = new MutationObserver((records) => {
    records.forEach((record) => record.addedNodes.forEach(scan));
    scheduleUpdate();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate, { passive: true });
  document.addEventListener("visibilitychange", scheduleUpdate);

  const onMotionChange = () => {
    if (reducedMotion.matches) {
      if (intersectionObserver) intersectionObserver.disconnect();
      clearEffects();
    } else {
      if (!intersectionObserver) {
        start();
        return;
      }
      if (window.IntersectionObserver) observed.forEach((image) => {
        intersectionObserver.observe(image);
        if (isNearViewport(image) && isPhoto(image)) visible.add(image);
      });
      else observed.forEach((image) => {
        if (isPhoto(image)) visible.add(image);
      });
      scheduleUpdate();
    }
  };
  if (reducedMotion.addEventListener) reducedMotion.addEventListener("change", onMotionChange);
  else reducedMotion.addListener(onMotionChange);

  start();
})();
