import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  D as r,
  E as i,
  F as a,
  I as o,
  L as s,
  M as c,
  N as l,
  O as u,
  P as d,
  R as f,
  S as p,
  T as m,
  _ as h,
  a as g,
  b as _,
  c as v,
  d as y,
  f as b,
  h as x,
  i as S,
  j as C,
  l as w,
  m as T,
  o as E,
  p as D,
  s as O,
  u as k,
  v as A,
  w as j,
  x as M,
  y as N,
} from "./react.Dxe_2v0O.mjs";
import {
  $ as ee,
  A as P,
  B as F,
  C as te,
  D as ne,
  E as re,
  F as ie,
  G as ae,
  H as oe,
  I as se,
  J as ce,
  K as le,
  L as ue,
  M as de,
  N as fe,
  O as pe,
  P as me,
  Q as he,
  R as I,
  S as ge,
  T as L,
  U as _e,
  V as ve,
  W as R,
  X as ye,
  Y as be,
  Z as xe,
  _ as Se,
  a as Ce,
  b as we,
  c as Te,
  d as Ee,
  f as De,
  g as Oe,
  h as ke,
  i as Ae,
  j as je,
  k as Me,
  l as Ne,
  m as Pe,
  n as Fe,
  o as Ie,
  p as Le,
  q as Re,
  r as ze,
  s as Be,
  u as Ve,
  v as He,
  w as Ue,
  x as We,
  y as Ge,
  z as Ke,
} from "./motion.x14TTX80.mjs";
function qe(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function Je(e) {
  return typeof e == `function`;
}
function Ye(e) {
  return typeof e == `boolean`;
}
function z(e) {
  return typeof e == `string`;
}
function B(e) {
  return Number.isFinite(e);
}
function Xe(e) {
  return Array.isArray(e);
}
function V(e) {
  return typeof e == `object` && !!e && !Xe(e);
}
function Ze(e) {
  for (let t in e) return !1;
  return !0;
}
function Qe(e) {
  return e === void 0;
}
function $e(e) {
  return e === null;
}
function et(e) {
  return e == null;
}
function tt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function nt(e) {
  return V(e) && Je(e.return);
}
function rt(e) {
  return V(e) && Je(e.then);
}
function it(e) {
  return e instanceof Promise;
}
function at(e) {
  return `url('${qe(e)}')`;
}
function ot(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${e ? `${e}\n` : ``}In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${n ? `:\n${n}` : `.`}`;
}
function H(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function U(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function st() {
  return Ot.location.origin === `https://screenshot.framer.invalid`;
}
function ct(e, t, n = At) {
  if (e && !n.has(e) && typeof document < `u`) {
    if ((n.add(e), !t)) {
      if (!jt) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) jt = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = jt;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function lt(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? K.variable(e) : e === `` ? `""` : e;
}
function ut(e) {
  return e !== Ht && e !== Ut;
}
function dt(e) {
  for (let t in e) if (ut(t) && e?.[t] === !0) return !0;
  return !1;
}
function ft(e, t, n, r, i) {
  let a = M.useRef(null),
    o = M.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = M.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !dt(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = M.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        dt(n) ? o(e) : r?.(e);
      },
      [o, r, t]
    );
  return M.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function pt(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return mt(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return ht(r);
    case `lower-roman`:
    case `upper-roman`:
      return _t(r);
    default:
      return mt(r);
  }
}
function mt(e) {
  return String(e).length;
}
function ht(e) {
  let t = 1;
  for (; gt(t) < e;) t++;
  return t;
}
function gt(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function _t(e) {
  let t = 0;
  for (let n of qt) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function vt(e, t) {
  return K.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function yt(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
var bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  W,
  At,
  jt,
  Mt,
  G,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  K,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn;
function cn() {
  return (cn = e(() => {
    (o(),
      j(),
      (bt = () => {}),
      (xt = f !== void 0),
      (St =
        xt &&
        (s.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(s.userAgent))),
      (Ct = xt && typeof f.requestIdleCallback == `function`),
      (wt = Ct ? f.requestIdleCallback : setTimeout),
      (Tt = () => bt),
      (Et = () => !0),
      (Dt = () => !1),
      (Ot = xt
        ? f
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (kt = { target: st() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (W = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => kt.target,
        hasRestrictions: () => {
          let e = kt.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (At = /* @__PURE__ */ new Set()),
      (Mt = /* @__PURE__ */ (function (e) {
        return (
          (e.Padding = `--framer-input-padding`),
          (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
          (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
          (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
          (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
          (e.CornerShape = `--framer-input-corner-shape`),
          (e.BorderColor = `--framer-input-border-color`),
          (e.BorderTopWidth = `--framer-input-border-top-width`),
          (e.BorderRightWidth = `--framer-input-border-right-width`),
          (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
          (e.BorderLeftWidth = `--framer-input-border-left-width`),
          (e.BorderStyle = `--framer-input-border-style`),
          (e.Background = `--framer-input-background`),
          (e.FontFamily = `--framer-input-font-family`),
          (e.FontWeight = `--framer-input-font-weight`),
          (e.FontSize = `--framer-input-font-size`),
          (e.FontColor = `--framer-input-font-color`),
          (e.FontStyle = `--framer-input-font-style`),
          (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
          (e.FontTextAlignment = `--framer-input-font-text-alignment`),
          (e.FontLineHeight = `--framer-input-font-line-height`),
          (e.FontOpenType = `--framer-input-font-open-type-features`),
          (e.FontVariationAxes = `--framer-input-font-variation-axes`),
          (e.PlaceholderColor = `--framer-input-placeholder-color`),
          (e.BoxShadow = `--framer-input-box-shadow`),
          (e.FocusedBorderColor = `--framer-input-focused-border-color`),
          (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
          (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
          (e.FocusedBackground = `--framer-input-focused-background`),
          (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
          (e.FocusedTransition = `--framer-input-focused-transition`),
          (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
          (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
          (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
          (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
          (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
          (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
          (e.InvalidTextColor = `--framer-input-invalid-text-color`),
          (e.IconBackgroundImage = `--framer-input-icon-image`),
          (e.IconMaskImage = `--framer-input-icon-mask-image`),
          (e.IconColor = `--framer-input-icon-color`),
          (e.IconContent = `--framer-input-icon-content`),
          (e.WrapperHeight = `--framer-input-wrapper-height`),
          e
        );
      })({})),
      (G = Mt),
      (Nt = `framer-form-input`),
      (Pt = `framer-form-input-wrapper`),
      (Ft = `framer-form-input-empty`),
      (It = `framer-form-input-forced-focus`),
      (Lt = `framer-form-input-forced-checked`),
      (K = /* @__PURE__ */ (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (H(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${lt(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            H(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (Rt = [
        K(`.${Nt}`, {
          padding: K.variable(G.Padding),
          background: `transparent`,
          fontFamily: K.variable(G.FontFamily),
          fontWeight: K.variable(G.FontWeight),
          fontSize: K.variable(G.FontSize),
          fontStyle: K.variable(G.FontStyle),
          color: K.variable(G.FontColor),
          fontFeatureSettings: K.variable(G.FontOpenType),
          fontVariationSettings: K.variable(G.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: K.variable(G.WrapperHeight, `100%`),
          letterSpacing: K.variable(G.FontLetterSpacing),
          textAlign: K.variable(G.FontTextAlignment),
          lineHeight: K.variable(G.FontLineHeight),
        }),
        K(`.${Nt}:focus-visible`, { outline: `none` }),
      ]),
      (zt = [K(`.${Pt}`, { overflow: `hidden` })]),
      (Bt = `var(${G.BorderTopWidth}) var(${G.BorderRightWidth}) var(${G.BorderBottomWidth}) var(${G.BorderLeftWidth})`),
      (Vt = [
        `.${Pt}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${G.BorderRadiusTopLeft});
        border-top-right-radius: var(${G.BorderRadiusTopRight});
        border-bottom-right-radius: var(${G.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${G.BorderRadiusBottomLeft});
        corner-shape: var(${G.CornerShape});
        border-color: var(${G.BorderColor});
        border-top-width: var(${G.BorderTopWidth});
        border-right-width: var(${G.BorderRightWidth});
        border-bottom-width: var(${G.BorderBottomWidth});
        border-left-width: var(${G.BorderLeftWidth});
        border-style: var(${G.BorderStyle});
        transition: var(${G.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (Ht = `customError`),
      (Ut = `valid`),
      (Wt = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `16px`,
        maskRepeat: `no-repeat`,
        maskSize: `16px`,
        backgroundColor: K.variable(G.IconColor),
      }),
      (Gt = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `16px`,
        boxSizing: `content-box`,
        padding: K.variable(G.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...Wt,
      }),
      (Kt = `--max-list-digits`),
      (qt = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (Jt = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Yt = { display: `inline-block` }),
      (Xt = `--framer-text-fill-shadow`),
      (Zt = `--framer-text-fill-text-shadow`),
      (Qt = { display: `block` }),
      ($t = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${Jt.display};
            flex-direction: ${Jt.flexDirection};
            justify-content: ${Jt.justifyContent};
            outline: none;
            flex-shrink: 0;
            /* Stops the variables of an outer text layer from reaching the gradient text fills of
               a text layer nested in it that doesn't set its own. */
            ${Xt}: initial;
            ${Zt}: initial;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${vt([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${vt([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${vt([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${Yt.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
            /* An inherited text-shadow would paint on top of the gradient, so layers with shadows
               set these variables to render them as a filter here. Without the variables the
               text-shadow declaration is invalid and keeps inheriting. */
            text-shadow: var(${Zt});
            filter: var(${Xt}, initial);
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${vt([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${vt([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${vt([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${vt([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${vt([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        /* Linked images keep the radius and padding of their image style. */
        a.framer-text:where(:not(.framer-image)):hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${vt([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${vt([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${vt([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${vt([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${vt([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${vt([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${vt([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${vt([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${vt([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${vt([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${vt([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${vt([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${vt([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${vt([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${Qt.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        /* A linked image gets its image style on both the link and the image; only the image draws the border and shadow. */
        a.framer-image.framer-text {
            border: none;
            box-shadow: none;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${Kt}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${yt(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (en = `--text-truncation-display-inline-for-safari-16`),
      (tn = `--text-truncation-display-none-for-safari-16`),
      (nn = `--text-truncation-line-break-for-safari-16`),
      (rn = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (an = `(background: -webkit-named-image(i))`),
      (on = `(contain-intrinsic-size: inherit)`),
      (sn = [
        `@supports ${an} and (not ${on}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${rn.join(`, `)} { display: var(${en}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${rn.map((e) => `${e}::after`).join(`, `)} { content: var(${nn}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${tn}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${en}, ${Yt.display}) }
    }`,
      ]));
  }))();
}
function ln(e, t, n) {
  if (fv.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (fv.set(e, t), t))
    .catch((t) => {
      throw (fv.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(bt), fv.set(e, r));
}
function un(e, t) {
  xt && (pv.set(e, t), mv.has(e) && ln(e, t, `registered loader ${e}`));
}
function dn() {
  if (!xt) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(hv),
      i = r ? e.slice(1) : e;
    if (!i) continue;
    mv.add(i);
    let a = pv.get(i);
    a
      ? ln(i, a, `registered loader ${i}`)
      : r &&
        ln(
          i,
          () =>
            import(
              /* @vite-ignore */
              n
            ),
          n
        );
  }
}
function fn(e) {
  return typeof e == `object` && !!e && !T(e) && _v in e;
}
function pn(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function mn(e, t = `default`, n) {
  n && un(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !fv.has(n)) return;
      let e = fv.get(n);
      it(e) ? s(() => e) : (i = pn(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = pn(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = D(function (t, r) {
      if (
        (N(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && gv !== void 0 && gv.add(n), !i)) throw s(e);
      return /* @__PURE__ */ E(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function hn(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function gn(e) {
  return e === null || !(yv in e) ? !1 : typeof e.equals == `function`;
}
function _n(e, t) {
  return e === t || (e !== e && t !== t);
}
function vn(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!_n(e[r], t[r])) return !1;
  return !0;
}
function yn(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Tn(e[r], t[r], !0)) return !1;
  return !0;
}
function bn(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!_n(r, t.get(n))) return !1;
  return !0;
}
function xn(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Tn(r, t.get(n), !0)) return !1;
  return !0;
}
function Sn(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Cn(e, t) {
  let n = vv(e);
  if (n.length !== vv(t).length) return !1;
  for (let r of n)
    if (!hn(t, r) || (!(r === `_owner` && hn(e, `$$typeof`) && e.$$typeof) && !_n(e[r], t[r])))
      return !1;
  return !0;
}
function wn(e, t) {
  let n = vv(e);
  if (n.length !== vv(t).length) return !1;
  for (let r of n)
    if (!hn(t, r) || (!(r === `_owner` && hn(e, `$$typeof`) && e.$$typeof) && !Tn(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Tn(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? yn(e, t) : vn(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? xn(e, t) : bn(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return Sn(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? gn(e) && gn(t)
        ? e.equals(t)
        : n
          ? wn(e, t)
          : Cn(e, t)
      : !1;
}
function En(e, t, n = !0) {
  try {
    return Tn(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Dn(e) {
  return M.useCallback((t) => e[t], [e]);
}
function On({ api: e, children: t }) {
  return /* @__PURE__ */ E(bv.Provider, { value: e, children: t });
}
function kn() {
  return M.useContext(bv);
}
function An({ routes: e, children: t }) {
  let n = Dn(e),
    r = C(() => ({ getRoute: n }), [n]);
  return /* @__PURE__ */ E(bv.Provider, { value: r, children: t });
}
function jn() {
  let e = kn(),
    n = t(xv),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = n?.routeId ? void 0 : e.currentCanonicalPathVariables,
    o = r ? e.getRoute?.(r) : void 0;
  return C(() => {
    if (r && o) return { ...o, id: r, pathVariables: i, canonicalPathVariables: a };
  }, [a, r, i, o]);
}
function Mn() {
  let e = jn();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Nn(e) {
  let t = jn(),
    n = M.useRef(t);
  !En(n.current, t) && t && ((n.current = t), e(t));
}
function Pn(e) {
  let t = kn();
  if (e) return t.getRoute?.(e);
}
function Fn(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function In(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Ln(e, t) {
  let n = jn(),
    r = Pn(t) ?? n;
  return M.useMemo(() => (r ? Fn(r, e) : e), [e, r]);
}
function Rn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Dv);
}
function zn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Ev);
}
function Bn(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function Vn(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function Hn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function Un(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function Wn(e, t, n) {
  return Gn(JSON.parse(e), t, n);
}
function Gn(e, t, n) {
  let r = Un(Nv, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === -1) return r.fromPrimitive(void 0);
    if (e === -3) return r.fromPrimitive(NaN);
    if (e === -4) return r.fromPrimitive(1 / 0);
    if (e === -5) return r.fromPrimitive(-1 / 0);
    if (e === -6) return r.fromPrimitive(-0);
    if (n || typeof e != `number`) throw Error(`Invalid input`);
    if (e in a) return a[e];
    if (e >= i.length) throw Error(`Invalid input`);
    let c = i[e];
    if (!c || typeof c != `object`) a[e] = r.fromPrimitive(c);
    else if (Array.isArray(c)) {
      if (typeof c[0] == `string`) {
        let n = c[0],
          l = t && Object.hasOwn(t, n) ? t[n] : void 0;
        if (l) {
          let t = c[1];
          if ((typeof t != `number` && (t = i.push(c[1]) - 1), Object.hasOwn(a, t)))
            return (a[e] = l(a[t]));
          if (((o ??= /* @__PURE__ */ new Set()), o.has(t)))
            throw Error(`Invalid circular reference`);
          return (o.add(t), (a[e] = l(s(t))), o.delete(t), a[e]);
        }
        switch (n) {
          case `Date`:
            a[e] = r.fromISOString(c[1]);
            break;
          case `Set`:
            let t = r.createSet();
            a[e] = t;
            for (let e = 1; e < c.length; e += 1) r.addValue(t, s(c[e]));
            break;
          case `Map`:
            let o = r.createMap();
            a[e] = o;
            for (let e = 1; e < c.length; e += 2) r.addEntry(o, s(c[e]), s(c[e + 1]));
            break;
          case `RegExp`:
            a[e] = r.fromRegExpInfo(c[1], c[2]);
            break;
          case `Object`: {
            let t = c[1];
            if (typeof i[t] == `object` && i[t][0] !== `BigInt`) throw Error(`Invalid input`);
            a[e] = r.box(s(t));
            break;
          }
          case `BigInt`:
            a[e] = r.fromPrimitive(BigInt(c[1]));
            break;
          case `null`:
            let l = r.createNullPrototypeObject();
            a[e] = l;
            for (let e = 1; e < c.length; e += 2) {
              let t = c[e];
              if (typeof t != `string`) throw Error(`Cannot parse an object with a non-string key`);
              if (t === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              r.set(l, t, s(c[e + 1]));
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (i[c[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = s(c[1]);
            a[e] = r.fromViewInfo(n, t, c[2], c[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = c[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            a[e] = r.fromArrayBuffer(Av(t));
            break;
          }
          case `URL`:
          case `URLSearchParams`:
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`:
            a[e] = r.fromStringValue(n, c[1]);
            break;
          default:
            throw Error(`Unknown type ${n}`);
        }
      } else if (c[0] === -7) {
        let t = c[1];
        if (!zn(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!Rn(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== -2 && r.set(t, e, s(n));
        }
      }
    } else {
      let t = r.createObject();
      a[e] = t;
      for (let e of Object.keys(c)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        r.set(t, e, s(c[e]));
      }
    }
    return a[e];
  }
  return s(0);
}
function Kn(e, t, n = `lazy`) {
  switch ((Ot.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function qn(e) {
  return z(e) && (e === `` || Pv.test(e));
}
function Jn() {
  return {
    [Fv.QueryCache]: /* @__PURE__ */ new Map(),
    [Fv.CollectionUtilsCache]: /* @__PURE__ */ new Map(),
  };
}
function Yn() {
  if (!xt) return;
  if (Iv !== void 0) return Iv;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      Iv = Wn(e.text) ?? Jn();
    } catch (e) {
      ((Iv = Jn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      wt(() => {
        (e?.remove(), (e = null));
      }),
      Iv
    );
  }
}
function Xn(e, t) {
  if (
    (console.warn(
      ot(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    Kn(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function Zn(e, t) {
  let n = Yn();
  return n ? n[e].has(t) : !1;
}
function Qn(e, t) {
  let n = Yn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function $n(e) {
  return e?.id ?? `default`;
}
function er(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function tr(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Bv.has(n)) return Bv.get(n);
    let r = new Hv(n, t);
    return (Bv.set(n, r), r);
  };
}
function nr({ children: e, collectionUtils: t }) {
  let n = C(() => ({ get: tr(t) }), [t]);
  return /* @__PURE__ */ E(Vv.Provider, { value: n, children: e });
}
function rr() {
  return t(Vv);
}
function ir(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function ar() {
  return s === void 0 ? void 0 : s;
}
function or() {
  let e = ar();
  return e ? Uv.test(e.platform) : !1;
}
function sr() {
  let e = ar();
  return e
    ? Wv.test(e.platform)
      ? !0
      : Gv.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function cr() {
  return or() || sr();
}
function lr() {
  let e = ar();
  return e ? Kv.test(e.userAgent) : !1;
}
function ur() {
  let e = ar();
  return e ? qv.test(e.userAgent) && Jv.test(e.vendor) && !lr() : !1;
}
function dr() {
  let e = ar();
  return e ? Yv.test(e.userAgent) && Xv.test(e.vendor) : !1;
}
function fr() {
  let e = ar();
  return e ? Zv.test(e.userAgent) : !1;
}
function pr() {
  return typeof document == `object`;
}
function mr() {
  let e = ar();
  if (!e) return -1;
  let t = Qv.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function hr() {
  let e = ar();
  return e ? $v.test(e.userAgent) : !1;
}
function gr() {
  return !1;
}
function _r() {
  let e = ar();
  return e && ey.test(e.userAgent) ? `tablet` : e && ty.test(e.userAgent) ? `phone` : `desktop`;
}
function vr() {
  return _r() === `desktop`;
}
function yr(e) {
  return cr() ? e.metaKey : e.ctrlKey;
}
function br() {}
async function xr() {}
function Sr(e) {
  return typeof e == `function` ? e() : e;
}
function Cr(e, t) {
  return ay[e] > ay[t];
}
function wr() {
  if (typeof scheduler < `u`) return scheduler;
}
function Tr(e, t) {
  let n = e?.priority,
    r = wr();
  return n === `background`
    ? (t?.() ?? ir(1))
    : r?.yield
      ? r.yield(e).catch(br)
      : r?.postTask
        ? r.postTask(br, e).catch(br)
        : t
          ? t()
          : n === `user-blocking`
            ? oy
            : ir(0);
}
function Er(e, t, n) {
  let r = -1 / 0,
    i,
    a = /* @__PURE__ */ new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    pr() && (document.addEventListener(`visibilitychange`, s), f.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, sy),
        e(() => {
          Tr(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return pr()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : Tr(a, t);
    return i ? u(o) : o;
  }
  function p(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function m(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? ny : ry),
        s = pr() && document.hidden ? iy : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return p(a, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !pr() && !t ? (n ? void 0 : oy) : n ? m(i, r) : d(i);
  }
  return h;
}
function Dr(e, t = !1) {
  let n = ``;
  if (f !== void 0) {
    if (t) n = f.location.search;
    else {
      let e = f.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? f.location.search : e === `` ? `` : `?${e}`;
    }
  }
  return n ? Or(n, e) : e;
}
function Or(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== uy && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function kr(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(dy)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !z(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = it(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = it(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = it(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    t &&
      n &&
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function Ar(e, t) {
  return t ? `/${t}${e}` : e;
}
async function jr({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await kr(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Ar(u.path, t.slug)),
    o && u.path && (u.path = Dr(u.path, !0)),
    u
  );
}
async function Mr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(dy)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (z(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Nr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === "default") return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await Mr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function Pr({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await Nr({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await jr({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return En(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function Fr() {
  return M.useContext(my);
}
function Ir() {
  return Fr().activeLocale?.code ?? `en-US`;
}
function Lr() {
  return M.useContext(hy);
}
function Rr() {
  let e = rr(),
    { getRoute: t } = kn(),
    { activeLocale: n, locales: r } = Fr();
  return u(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return Br(
        s,
        {
          routeId: i,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: r,
          collectionUtils: e,
        },
        o
      );
    },
    [t, e, n, r]
  );
}
function zr(e, t = !0) {
  let n = Rr();
  N(() => {
    if (t && gy) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Br(e, t, n = {}) {
  if (!gy || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !fn(o)) return;
  let s = a && !!t;
  if (!o.getStatus().hasLoaded || s) {
    i && (await ly({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await Vr(n, e, t, r));
    } catch {}
  }
}
async function Vr(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await Pr({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === Cv),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function Hr() {
  if (_y) return;
  _y = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (f.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((f.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), Kn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function Ur({ children: e, value: t }) {
  return /* @__PURE__ */ E(vy.Provider, { value: t, children: e });
}
function Wr() {
  return M.useContext(vy);
}
function Gr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function Kr(e) {
  let t = yy,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < by;) ((n = e.next(t)), r.push(n.value), (t += yy));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - yy }
  );
}
function qr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Jr(e) {
  let { innerWidth: t, innerHeight: n } = f,
    [r, i] = qr(e.x),
    [a, o] = qr(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function Yr(e) {
  let [t, n] = qr(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function Xr(e) {
  let { x: t, y: n } = Jr(e);
  return Math.hypot(Math.max(t, f.innerWidth - t), Math.max(n, f.innerHeight - n));
}
function Zr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function Qr(e) {
  return e ? Cy[e] : void 0;
}
function $r(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (ei(t)) {
    let { easing: e, duration: n } = Kr(
      je({ keyframes: [0, 1], ...ti(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = Qr(n?.mask?.type),
    o = Zr(n, `start`, e, a),
    s = Zr({ ...wy, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function ei(e) {
  return e.type === `spring`;
}
function ti(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function ni({ exit: e = Ey, enter: t }) {
  let n = document.createElement(`style`);
  n.id = Ty;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += $r(`exit`, e)),
    (r += $r(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function ri() {
  wt(() => {
    He.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(Ty);
      e && document.head.removeChild(e);
    });
  });
}
function ii() {
  return !!document.startViewTransition;
}
function ai(e) {
  return new Promise((t) => {
    He.render(() => {
      (performance.mark(`framer-vt-style`), ni(e), t());
    });
  });
}
async function oi(e, t, n) {
  if (!ii()) {
    e();
    return;
  }
  if ((await ai(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(Dy),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), ri());
      })
      .catch(Dy),
    r
  );
}
function si() {
  let e = Wr(),
    t = _(void 0);
  return (
    N(() => {
      t.current &&= (t.current(), void 0);
    }),
    u(
      (n, r, i, a) => {
        let o = Gr(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return oi(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function ci(e, t) {
  wt(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function li(e, t) {
  wt(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function ui(e) {
  wt(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = /* @__PURE__ */ new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = /* @__PURE__ */ new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
//! Credit to Astro | MIT License
function di(e, t, n, r = i) {
  r(() => {
    let t = async (e) => (await ly({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function fi(e) {
  let t = _(/* @__PURE__ */ new Set());
  return (
    di(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    u(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function pi(e) {
  return V(e) && `routeId` in e;
}
function mi(e = f.history.state) {
  return pi(e) ? e : void 0;
}
function hi(e) {
  return e?.entryId;
}
function gi(e) {
  Ay = e;
}
function _i() {
  return Ay;
}
function vi() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function yi(e, t) {
  return bi(e, hi(e) ?? hi(t));
}
function bi(e, t = vi()) {
  return { ...e, entryId: t };
}
function xi(e, t) {
  (performance.mark(`framer-history-replace`), gi(yi(e, mi())), t && ci(t, f.location.href));
  let n =
    !t || t === f.location.href
      ? f.History.prototype.replaceState.bind(f.history)
      : f.history.replaceState.bind(f.history);
  try {
    n(Ay, ``, t);
  } catch {}
}
function Si(e) {
  (performance.mark(`framer-history-replace`),
    gi(bi(e)),
    History.prototype.replaceState.call(f.history, Ay, ``, void 0));
}
function Ci(e, t) {
  (performance.mark(`framer-history-push`), gi(bi(e)), ci(t, f.location.href), Hr());
  try {
    f.history.pushState(Ay, ``, t);
  } catch {}
}
function wi({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
  initialContentLocaleId: a,
  initialCanonicalPathVariables: o,
}) {
  i(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = f.location.hash ? f.location.hash.slice(1) : void 0;
    xi({
      ...mi(),
      routeId: t,
      hash: i,
      pathVariables: n,
      localeId: r,
      contentLocaleId: a,
      canonicalPathVariables: o,
    });
  }, []);
}
function Ti(e, t, n) {
  let r = si(),
    i = fi(`framer-route-change`),
    { onHistoryTraversal: a, usesCustomScrollRestoration: o } = e,
    s = o ? `manual` : `after-transition`,
    c = _(void 0),
    l = u(() => {
      (c.current?.resolve(), (c.current = void 0));
    }, []),
    d = u(
      async ({ state: e }) => {
        if (!pi(e)) return;
        let o = i({ popstate: !0 }),
          c = In();
        (o.promise.finally(c), hi(_i()) !== (hi(e) ?? hi(mi())) && a(), gi(e));
        let {
            routeId: u,
            hash: d,
            pathVariables: p,
            localeId: m,
            contentLocaleId: h,
            canonicalPathVariables: g,
          } = e,
          _ = z(d) ? d : f.location.hash ? f.location.hash.slice(1) : void 0,
          v = !1,
          y = () => {
            v ||=
              (n(
                u,
                z(m) ? m : void 0,
                _,
                f.location.pathname + f.location.search + f.location.hash,
                V(p) ? p : void 0,
                h,
                g,
                !0,
                o,
                !1
              ),
              !0);
          },
          b = s === `after-transition`;
        (await Promise.resolve(r(t.current, u, y))
          .then((e) => e?.updateCallbackDone)
          .catch(y)
          .finally(() => {
            b || l();
          }),
          await o.promise,
          b && l(),
          await f.navigation?.transition?.finished.catch(bt),
          ky(),
          ci(f.location.href));
      },
      [t, i, a, l, n, r, s]
    ),
    p = u(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        pi(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                c.current = { resolve: e, reject: t };
              }),
                (c.current = void 0));
            },
            scroll: s,
          });
      },
      [s]
    );
  N(
    () => (
      f.addEventListener(`popstate`, d),
      jy && f.navigation.addEventListener(`navigate`, p),
      () => {
        (f.removeEventListener(`popstate`, d),
          jy && f.navigation.removeEventListener(`navigate`, p));
      }
    ),
    [d, p]
  );
}
async function Ei(e) {
  return (
    (await fetch(e, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect` &&
    ((f.location.href = f.location.origin + e), !0)
  );
}
function Di() {
  let e = rr();
  return u((t) => Oi({ ...t, collectionUtils: e }), [e]);
}
async function Oi({ sitePrefix: e, ...t }) {
  let n = await jr(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!z(n.path)) throw Error(`Expected result.path to be a string`);
      if (
        (n.isMissingInLocale ||
          (t.route.includedLocales && !t.route.includedLocales.includes(t.nextLocale.id))) &&
        (await Ei(e + n.path))
      )
        return;
    } catch {}
    return n;
  }
}
function ki(e) {
  let t = _(Promise.resolve()),
    n = _(),
    r = u(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return u(
    (e, i, a) => {
      jy
        ? ((t.current = e),
          (n.current = i),
          f.navigation.addEventListener(`navigate`, r),
          a?.(),
          e.finally(() => {
            t.current === e &&
              ((n.current = void 0), f.navigation.removeEventListener(`navigate`, r));
          }))
        : a?.();
    },
    [r]
  );
}
function Ai(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function ji(e) {
  return Ai(e.trim().toLowerCase().replace(My, `-`));
}
function Mi({ children: e, value: t }) {
  return /* @__PURE__ */ E(Py.Provider, { value: t, children: e });
}
function Ni() {
  return t(Py);
}
function Pi(e, t) {
  let n = h(() => ({ inputs: t, result: e() }))[0],
    r = _(!0),
    i = _(n),
    a =
      r.current || (t && i.current.inputs && En(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    N(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function Fi(e, t) {
  return Pi(() => e, t);
}
function Ii() {
  return f.location.search;
}
function Li() {
  return ``;
}
function Ri(e) {
  return (
    Iy.add(e),
    f.addEventListener(`popstate`, e),
    () => {
      (Iy.delete(e), f.removeEventListener(`popstate`, e));
    }
  );
}
function zi() {
  for (let e of Iy) e();
}
function Bi({ children: e, routerRenderKey: t, currentRouteId: n, isNavigationCommitPending: i }) {
  let a = Ni() === `preview`,
    [o, s] = h({ routeId: n, search: `` });
  o.routeId !== n && s({ routeId: n, search: `` });
  let c = o.search,
    d = _(t);
  Fy(() => {
    d.current = t;
  }, [t]);
  let p = r(Ri, Ii, Li),
    m = A(p),
    g = t !== A(t),
    v = a ? c : g ? p : m,
    y = u(
      async (e) => {
        if (a) {
          l(() => {
            s((t) =>
              t.routeId === n
                ? { routeId: n, search: e(new URLSearchParams(t.search)).toString() }
                : t
            );
          });
          return;
        }
        let r = i(),
          o = t;
        if ((await ly({ continueAfter: `paint` }), r || i() || d.current !== o)) return;
        let c = mi();
        if (!c) return;
        let u = new URL(f.location.href),
          p = e(u.searchParams).toString();
        u.search = p;
        let m = c.queryParamBackAnchorSearch,
          h = f.location.search.slice(1),
          g = m === void 0 && p !== h,
          _ = m !== void 0 && p === m,
          v = { ...c, queryParamBackAnchorSearch: _ ? void 0 : (m ?? (g ? h : void 0)) },
          y = u.toString();
        (g || _ ? Ci(v, y) : xi(v, y), zi());
      },
      [n, i, a, t]
    ),
    b = Pi(() => ({ urlSearchParams: new URLSearchParams(v), replaceSearchParams: y }), [v, y]);
  return /* @__PURE__ */ E(Ly.Provider, { value: b, children: e });
}
function Vi({ parameterName: e }) {
  let n = _(e),
    { urlSearchParams: r, replaceSearchParams: i } = t(Ly);
  return [
    C(() => r.getAll(n.current), [r]),
    u(
      async (e) => {
        Xe(e) &&
          (await i((t) => {
            let r = n.current,
              i = new URLSearchParams(),
              a = !1;
            for (let [n, o] of t.entries())
              if (n !== r) i.append(n, o);
              else if (!a) {
                a = !0;
                for (let t of e) z(t) && i.append(r, t);
              }
            if (!a) for (let t of e) z(t) && i.append(r, t);
            return i;
          }));
      },
      [i]
    ),
  ];
}
function Hi({ initialValue: e, parameterName: t, optional: n }) {
  let r = _(n ? void 0 : z(e) ? e : ``),
    [i, a] = Vi({ parameterName: t });
  return [
    C(() => (i.length === 0 ? r.current : (i[0] ?? ``)), [i]),
    u(
      async (e) => {
        if (e === r.current) return a(Sv);
        if (z(e)) return a([e]);
      },
      [a]
    ),
  ];
}
function Ui({ initialValue: e, parameterName: t, optional: n }) {
  let r = _(n ? void 0 : e ? Ry : zy),
    [i, a] = Hi({ initialValue: r.current, parameterName: t, optional: n });
  return [
    C(() => {
      if (i === Ry) return !0;
      if (i === zy) return !1;
      if (!Qe(i)) {
        if (r.current === Ry) return !0;
        if (r.current === zy) return !1;
      }
    }, [i]),
    u(
      async (e) => {
        if (Qe(e)) return a(void 0);
        if (Ye(e)) return a(e ? Ry : zy);
      },
      [a]
    ),
  ];
}
function Wi(e) {
  let t = e.includes(`,`),
    n = e.includes(`.`);
  if (t && n) return;
  let r = t ? e.replace(`,`, `.`) : e,
    i = Number(r);
  if (B(i)) return i;
}
function Gi(e) {
  return String(e);
}
function Ki({ initialValue: e, parameterName: t, optional: n }) {
  let r = _(n ? void 0 : B(e) ? e : 0),
    [i, a] = Hi({
      initialValue: _(B(r.current) ? Gi(r.current) : void 0).current,
      parameterName: t,
      optional: n,
    });
  return [
    C(() => {
      if (Qe(i)) return;
      let e = Wi(i);
      return B(e) ? e : r.current;
    }, [i]),
    u(async (e) => (B(e) ? a(Gi(e)) : a(void 0)), [a]),
  ];
}
function qi({ collectionId: e, initialValue: t, parameterName: n, optional: r }) {
  let i = rr(),
    a = Fr().activeLocale ?? void 0,
    o = _(r ? void 0 : t),
    [s, c] = Hi({ initialValue: void 0, parameterName: n, optional: !0 });
  return [
    C(() => (z(s) ? Yi(Ji(i, e).getRecordIdBySlug(s, a)) : o.current), [i, e, a, s]),
    u(
      async (t) => {
        if (Qe(t)) return c(void 0);
        let n = await Ji(i, e).getSlugByRecordId(t, a);
        z(n) && (await c(n));
      },
      [i, e, a, c]
    ),
  ];
}
function Ji(e, t) {
  let n = e?.get(t);
  return (H(n, () => `CollectionUtilsCache not found for collectionId: ${t}`), n);
}
function Yi(e) {
  if (it(e)) throw e;
  return e;
}
function Xi(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Zi(e),
    [r, i] = Zi(t),
    a = Qi(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Zi(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Qi(e, t) {
  if (e === t || ((e = `/` + $i(e)), (t = `/` + $i(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Hy(e, 1 + s);
    if (n !== Hy(t, 1 + s)) break;
    n === Vy && (o = s);
  }
  if (s === a) {
    if (i > a) {
      if (Hy(t, 1 + s) === Vy) return Wy(t, 1 + s + 1);
      if (s === 0) return Wy(t, 1 + s);
    } else r > a && (Hy(e, 1 + s) === Vy ? (o = s) : s === 0 && (o = 0));
  }
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Hy(e, s) === Vy) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Wy(t, 1 + o)}`;
}
function $i(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Hy(e, o);
    else if (Ky(a)) break;
    else a = Vy;
    if (Ky(a)) {
      if (r !== o - 1 && i !== 1) {
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Hy(t, t.length - 1) !== By || Hy(t, t.length - 2) !== By) {
            if (t.length > 2) {
              let e = Uy(t, Gy);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = Wy(t, 0, e)), (n = t.length - 1 - Uy(t, Gy))),
                (r = o),
                (i = 0));
              continue;
            }
            if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
        } else
          (t.length > 0 ? (t += `${Gy}${Wy(e, r + 1, o)}`) : (t = Wy(e, r + 1, o)),
            (n = o - r - 1));
      }
      ((r = o), (i = 0));
    } else a === By && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function ea(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || f.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function ta(e, t) {
  let n = e.replace(dy, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function na(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return ta(i, r);
  }
  if (e.includes(`:`)) return ta(e, r);
  let i = t.elements?.[e];
  return i ? ta(i, r) : e;
}
function ra(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
    localeSlug: p,
  }
) {
  let m;
  if ((i && e && (m = na(i, e, o)), l)) return m ?? ``;
  let h = t ?? `/`;
  (n && d && (h = n[d] ?? h), r && (h = h.replace(dy, (e, t) => String(r[t] || e))));
  let g = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (g = g.replace(dy, (e, t) => String(a[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (s) {
    if (qy.has(h) && f !== void 0) {
      let e = ea(u);
      g = Xi(f.location.pathname, e + g);
    } else g = Xi(h, g);
  } else g = Ar(g, p);
  let y = _ || v;
  return ((c || y) && (g = Dr(g, y)), m && (g = `${g}#${m}`), g);
}
function ia(e, t) {
  let n = document.currentScript?.parentElement;
  n &&
    n.addEventListener(`submit`, (r) => {
      n.hasAttribute(e) || (r.preventDefault(), n.setAttribute(t, ``));
    });
}
function aa() {
  return `(${ia.toString()})("${Xy}","${Zy}")`;
}
function oa(e, t) {
  N(() => {
    let n = e.current;
    if (!n || (n.setAttribute(Xy, ``), !n.hasAttribute(Zy))) return;
    n.removeAttribute(Zy);
    let r = !1;
    return (
      queueMicrotask(() => {
        r || (n.reportValidity() && t(n));
      }),
      () => {
        r = !0;
      }
    );
  }, []);
}
function sa() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[Jy] = 1), e);
}
function ca() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[Jy] = 1), e);
}
function la(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function ua(e) {
  return Jy in e && e[Jy] === 1;
}
function da(e) {
  return Yy in e.nativeEvent && e.nativeEvent[Yy] === 1;
}
function fa(e) {
  let t = _(!1),
    n = _(null),
    i = r(Tt, Dt, Qy);
  return (
    N(() => {
      if (!i) return;
      let r = n.current;
      if (t.current || !r) return;
      t.current = !0;
      let a = la(r),
        o = r[a];
      if (o === (a === `checked` ? !!e : e)) return;
      if (r.type === `radio` && o === !0) {
        ((r.checked = !1), r.dispatchEvent(ca()));
        return;
      }
      if (a === `checked`) {
        let e = ca();
        ((e[Yy] = 1), r.dispatchEvent(e), r.dispatchEvent(ca()));
        return;
      }
      if (r.nodeName === `SELECT`) {
        r.dispatchEvent(sa());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(r), a)?.set;
      if (!s) return;
      s.call(r, ``);
      let c = sa();
      ((c[Yy] = 1),
        r.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(r, o), r.dispatchEvent(sa()));
        }));
    }, [i]),
    n
  );
}
function pa() {
  if (!$y) return;
  ((tb = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  $y.forEach((n) => t.addEventListener(n, eb, e));
}
function ma() {
  return (
    N(() => {
      if (!tb || !$y) return;
      let e = { capture: !0 },
        t = document.body;
      ($y.forEach((n) => t.removeEventListener(n, eb, e)),
        ($y = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function ha(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function ga(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function _a() {
  ((rb = new nb()), rb.render.markStart());
}
function va() {
  (c(() => {
    rb?.useInsertionEffects.markRouterStart();
  }, []),
    i(() => {
      rb?.useLayoutEffects.markRouterStart();
    }, []),
    N(() => {
      rb?.useEffects.markRouterStart();
    }, []));
}
function ya() {
  (c(() => {
    (rb?.render.markEnd(), rb?.useInsertionEffects.markStart());
  }, []),
    i(() => {
      (rb?.useLayoutEffects.markStart(),
        document.visibilityState === `visible`
          ? He.read(() => {
              (rb?.browserRendering.requestAnimationFrame.markStart(),
                rb?.unattributedHydrationOverhead.measure());
            })
          : (ib = !0));
    }, []),
    N(() => {
      (rb?.useEffects.markStart(),
        rb?.browserRendering.hasStarted ||
          (rb?.mutationEffects.measure(), rb?.useEffects.markAreSynchronous()));
    }, []));
}
function ba() {
  (c(() => {
    rb?.useInsertionEffects.markEnd();
  }, []),
    i(() => {
      (rb?.useLayoutEffects.markEnd(),
        !(ib || document.visibilityState !== `visible`) &&
          He.read(() => {
            (rb?.browserRendering.requestAnimationFrame.markEnd(),
              ly().then(() => {
                rb?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    N(() => {
      rb?.useEffects.markEnd();
    }, []));
}
function xa() {
  return (ya(), null);
}
function Sa() {
  return (ba(), null);
}
function Ca(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return M.isValidElement(e) ? M.cloneElement(e, n) : /* @__PURE__ */ E(e, { ...n });
}
function wa() {
  return cb;
}
function Ta(e) {
  if (lb?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      H(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Oa(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          H(t, `localizedPath must be defined`);
          let i = Oa(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    lb = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: lb.pathRoutes,
    paths: lb.paths,
    pathRoutesLocalized: lb.pathRoutesLocalized,
    pathsLocalized: lb.pathsLocalized,
  };
}
function Ea(e, t, n = !0, r = wa()) {
  return Da(e, t, r, n);
}
function Da(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Ta(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = ka(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = ka(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = ka(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = ka(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Oa(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function ka(e, t) {
  let n = [],
    r = Aa(t).replace(dy, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
    } else {
      if (r === void 0) throw Error(`Path variable values cannot be undefined`);
      o[t] = r;
    }
  }
  return { isMatch: !0, pathVariables: o };
}
function Aa(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
async function ja({
  routes: e,
  routeId: t,
  pathVariables: n,
  localeId: r,
  locales: i,
  collectionUtils: a,
}) {
  let o = e[t],
    s = i ?? [],
    c = { get: tr(a) },
    l = s.find(({ id: e }) => e === Cv),
    u = s.find(({ id: e }) => e === (r ?? `default`)) ?? null,
    d = (
      o?.collectionId
        ? Mr({ activeLocale: u, collectionUtils: c, currentRoute: o, pathVariables: n })
        : Promise.resolve(void 0)
    )
      .then((e) => e ?? null)
      .catch(
        (e) => (console.error(ot(`Failed to resolve the initial collection item id.`, e)), null)
      );
  return {
    ...(await Pr({
      activeLocale: u,
      defaultLocale: l,
      collectionUtilsCache: c,
      locales: s,
      pathVariables: n,
      route: o,
      routeId: t,
    })),
    collectionItemId: d,
  };
}
function Ma(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function Na(e) {
  let t = /* @__PURE__ */ new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = Ma(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function Pa(e, t) {
  let n = e.toLowerCase(),
    r = Na(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function Fa(e) {
  if (f === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in f)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function Ia() {
  let e = Fa(`abtests`);
  return new URLSearchParams(e?.description);
}
function La(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0,
    l =
      a.elementPatterns || r.elementPatterns
        ? { ...a.elementPatterns, ...r.elementPatterns }
        : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    elementPatterns: l,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Ra(e, t) {
  for (let [n, r] of t) La(e, n, r);
}
function za(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Ba(e) {
  let t = /* @__PURE__ */ new Map();
  for (let n in e) {
    let r = e[n]?.abTestingVariantId;
    r && !e[r] && t.set(r, n);
  }
  return (e) => t.get(e) ?? e;
}
function Va(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0,
    s =
      r?.elementPatterns || a.elementPatterns
        ? { ...r?.elementPatterns, ...a.elementPatterns }
        : void 0;
  e[n] = {
    ...a,
    includedLocales: r?.includedLocales,
    elements: o,
    elementPatterns: s,
    abTestingVariantId: t,
  };
}
function Ha(e, t) {
  if ((t && Va(e, t), f === void 0)) return t;
  let n = t;
  if (t) {
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Ra(e, Ia()), za(e), n);
}
function Ua(e) {
  (N(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    c(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Wa(e, ...t) {
  ub.has(e) || (ub.add(e), console.warn(e, ...t));
}
function Ga(e, t, n) {
  Wa(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Ka(e) {
  return (
    typeof e == `object` &&
    !!e &&
    pb in e &&
    e[pb] instanceof Function &&
    mb in e &&
    e[mb] instanceof Function
  );
}
function qa(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = fb(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function Ja(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Ya(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Xa(e) {
  return Math.round(e * 2) / 2;
}
function Za(e, t) {
  return { x: e, y: t };
}
function Qa(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0) {
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  }
  return u;
}
function $a(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function eo(e) {
  let t = to(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function to(e) {
  let t = /\d?\.?\d+/u.exec(e);
  if (t) return Number(t[0]);
}
function no(e, t, n) {
  return (
    (vb.rgb_r = e / 255),
    (vb.rgb_g = t / 255),
    (vb.rgb_b = n / 255),
    vb.rgbToHsluv(),
    { h: vb.hsluv_h, s: vb.hsluv_s, l: vb.hsluv_l }
  );
}
function ro(e, t, n, r = 1) {
  return (
    (vb.hsluv_h = e),
    (vb.hsluv_s = t),
    (vb.hsluv_l = n),
    vb.hsluvToRgb(),
    { r: vb.rgb_r * 255, g: vb.rgb_g * 255, b: vb.rgb_b * 255, a: r }
  );
}
function io(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function ao(e, t, n) {
  return {
    r: $a(e) ? po(e, 255) * 255 : 0,
    g: $a(t) ? po(t, 255) * 255 : 0,
    b: $a(n) ? po(n, 255) * 255 : 0,
  };
}
function oo(e, t, n, r) {
  let i = [
    go(Math.round(e).toString(16)),
    go(Math.round(t).toString(16)),
    go(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function so(e, t, n) {
  let r,
    i,
    a = po(e, 255),
    o = po(t, 255),
    s = po(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function co(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function lo(e, t, n) {
  let r, i, a;
  if (((e = po(e, 360)), (t = po(t * 100, 100)), (n = po(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = co(s, o, e + 1 / 3)), (i = co(s, o, e)), (a = co(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function uo(e, t, n) {
  ((e = po(e, 255)), (t = po(t, 255)), (n = po(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function fo(e, t, n) {
  ((e = po(e, 360) * 6), (t = po(t * 100, 100)), (n = po(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function po(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    mo(e) && (e = `100%`);
    let t = ho(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function mo(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function ho(e) {
  return typeof e == `string` && e.includes(`%`);
}
function go(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function _o(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = gb[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = yb.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = yb.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = yb.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: eo(r[2] ?? ``), l: eo(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = yb.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: eo(r[2] ?? ``),
              l: eo(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = yb.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: eo(r[2] ?? ``), v: eo(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = yb.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: eo(r[2] ?? ``),
                  v: eo(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = yb.hex8.exec(t))
                ? {
                    r: vo(r[1] ?? ``),
                    g: vo(r[2] ?? ``),
                    b: vo(r[3] ?? ``),
                    a: yo(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = yb.hex6.exec(t))
                  ? {
                      r: vo(r[1] ?? ``),
                      g: vo(r[2] ?? ``),
                      b: vo(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = yb.hex4.exec(t))
                    ? {
                        r: vo(`${r[1]}${r[1]}`),
                        g: vo(`${r[2]}${r[2]}`),
                        b: vo(`${r[3]}${r[3]}`),
                        a: yo(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = yb.hex3.exec(t))
                      ? {
                          r: vo(`${r[1]}${r[1]}`),
                          g: vo(`${r[2]}${r[2]}`),
                          b: vo(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function vo(e) {
  return parseInt(e, 16);
}
function yo(e) {
  return vo(e) / 255;
}
function bo(e) {
  let t = bb.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function xo(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function So({ r: e, g: t, b: n, a: r }) {
  return { r: xo(e), g: xo(t), b: xo(n), a: r };
}
function Co(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function wo({ r: e, g: t, b: n, a: r }) {
  return { r: Co(e), g: Co(t), b: Co(n), a: r };
}
function To({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Eo(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Do({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Eo(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Oo(e) {
  return wb(Cb(e));
}
function ko(e) {
  return Sb(xb(e));
}
function Ao(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = No({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = jo(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? No(e)
              : Po(e)),
    i
  );
}
function jo(e) {
  let t = _o(e);
  if (t) return t.format === `hsl` ? Po(t) : t.format === `hsv` ? Mo(t) : No(t);
}
function Mo(e) {
  let t = fo(e.h, e.s, e.v);
  return { ...so(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Fo(e.a) };
}
function No(e) {
  let t = ao(e.r, e.g, e.b);
  return { ...so(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Fo(e.a) };
}
function Po(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = $a(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = $a(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = to(e.s)),
    (r = $a(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = to(e.l)),
    (i = lo(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Fo(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Io({ children: e }) {
  if (t(Rb).top) return /* @__PURE__ */ E(v, { children: e });
  let n = _({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = _({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = _(/* @__PURE__ */ new Set()).current,
    a = u(({ id: e, name: t, duplicatedFrom: a }) => {
      if (!e) return null;
      let o = t ? `byName` : `byId`,
        s = n.current[o][e];
      if (s) return s;
      let c = t || e;
      if (!a && !i.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
        return (
          n.current.count[o][c] === void 0 &&
            ((n.current.count[o][c] = 0), (n.current.byLayoutId[c] = c), (r.current[o][e] = c)),
          i.add(c),
          c
        );
      let l;
      if (a?.length)
        for (let s = a.length - 1; s >= 0; s--) {
          let c = a[s];
          H(!!c, `duplicatedId must be defined`);
          let u = n.current[o][c],
            d = n.current.byLastId[c];
          if (d && !l) {
            let e = n.current.byLayoutId[d],
              r = !e || e === t;
            d && !i.has(d) && (!t || r) && (l = [d, c]);
          }
          let f = u ? n.current.byLayoutId[u] : void 0,
            p = !f || f === t;
          if (u && !i.has(u) && (!t || p))
            return ((r.current[o][e] = u), (r.current.byLastId[c] = u), i.add(u), u);
        }
      let u = n.current.byLastId[e];
      if (u && !i.has(u)) return (i.add(u), (r.current.byId[e] = u), u);
      if (l) {
        let [t, n] = l;
        return ((r.current[o][e] = t), (r.current.byLastId[n] = t), i.add(t), t);
      }
      let d = n.current.byPossibleId[e];
      if (d && !i.has(d)) return (i.add(d), (r.current.byId[e] = d), d);
      let f = a?.[0],
        p = t || f || e,
        { layoutId: m, value: h } = Lo(p, (n.current.count[o][p] ?? -1) + 1, i);
      if (((n.current.count[o][p] = h), (r.current[o][e] = m), a?.length && !t)) {
        let e = a[a.length - 1];
        if ((e && (r.current.byLastId[e] = m), a.length > 1))
          for (let e = 0; e < a.length - 1; e++) {
            let t = a[e];
            t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
          }
      }
      return ((r.current.byLayoutId[m] = c), i.add(m), m);
    }, []),
    o = u(() => {
      ((n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        i.clear());
    }, []),
    s = _({ getLayoutId: a, persistLayoutIdCache: o, top: !0, enabled: !0 }).current;
  return /* @__PURE__ */ E(Rb.Provider, { value: s, children: e });
}
function Lo(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Ro({ enabled: e = !0, ...n }) {
  let r = t(Rb),
    i = C(() => ({ ...r, enabled: e }), [e]);
  return /* @__PURE__ */ E(Rb.Provider, { ...n, value: i });
}
function zo(e) {
  let t = _(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Bo(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Vo(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return /* @__PURE__ */ w(`div`, {
    style: Bb,
    children: [
      /* @__PURE__ */ E(`div`, { className: `text`, style: Hb, children: r }),
      i && /* @__PURE__ */ E(`div`, { className: `text`, style: Ub, children: i }),
    ],
  });
}
function Vo(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function Ho() {
  let e = W.current();
  return e === W.canvas || e === W.export;
}
function Uo() {
  let [e] = h(() => Ho());
  return e;
}
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function Wo(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Go(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of tx) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Ko(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function qo(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < 512) continue;
    let n = Ko(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Ko(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Jo(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of ex) {
    let n = Ko(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Yo(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Jo(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  }
  return { src: n, srcSet: qo(n, t, Go(t.pixelWidth, t.pixelHeight)) };
}
function Xo() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: at(Zb.imagePlaceholderSvg),
  };
}
function Zo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Qo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function $o(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...$b,
    objectPosition: Qo(e.positionX, e.positionY),
    objectFit: Zo(e.fit),
  };
}
function es(e) {
  let t = M.useRef(e ? `auto` : `async`),
    n = u((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = u(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = u(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function ts({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = Zb.useImageSource(e, t, n),
    s = $o(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = es(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Yo(e.nodeFixedSize, e, o);
  return /* @__PURE__ */ E(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function ns({ image: e, containerSize: t, nodeId: n }) {
  let r = M.useRef(null),
    i = Zb.useImageElement(e, t, n),
    a = $o(e);
  return (
    M.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    /* @__PURE__ */ E(`div`, { ref: r, style: { display: `contents`, ...$b } })
  );
}
function rs({ nodeId: e, image: t, containerSize: n }) {
  let r = M.useRef(null),
    i = Zb.useImageSource(t, n, e);
  return (
    M.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = $o(t);
      Zb.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    /* @__PURE__ */ E(`div`, { ref: r, style: { display: `contents`, ...$b } })
  );
}
function is({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (z(t.src)) {
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = B(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Xa(e * (t.pixelWidth / 2)),
        s = Zb.useImageSource(t, n);
      ((r = {
        ...nx,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Qo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        W.current() === W.canvas
          ? Zb.canRenderOptimizedCanvasImage(Zb.useImageSource(t))
            ? /* @__PURE__ */ E(rs, { image: t, ...n })
            : /* @__PURE__ */ E(ns, { image: t, ...n })
          : /* @__PURE__ */ E(ts, { image: t, avoidAsyncDecoding: W.current() === W.export, ...n });
  }
  let o = a ? nx : (r ?? { ...nx, ...Xo() });
  return i
    ? /* @__PURE__ */ E(Ue.div, {
        layoutId: e,
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      })
    : /* @__PURE__ */ E(`div`, {
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      });
}
function as(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  (typeof r == `number`
    ? (o = s = c = l = r)
    : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    (o !== 0 || s !== 0 || c !== 0 || l !== 0) &&
      (n && o === s && o === c && o === l
        ? (t.border = `${o}px ${i} ${a}`)
        : ((t.borderStyle = e.borderStyle),
          (t.borderColor = e.borderColor),
          (t.borderTopWidth = `${o}px`),
          (t.borderBottomWidth = `${s}px`),
          (t.borderLeftWidth = `${c}px`),
          (t.borderRightWidth = `${l}px`))));
}
function os(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...$b,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), /* @__PURE__ */ E(Ue.div, { style: n }))
    : (as(e, n, !1), /* @__PURE__ */ E(Ue.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function ss(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function cs(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !ix.isImageObject(t)) return;
  let r = null;
  if (((r = z(n) ? { alt: ``, src: n } : fb.get(t, null)), ix.isImageObject(r))) return ss(r, e);
}
function ls(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function us(e) {
  return typeof e != `string` && typeof e != `number`;
}
function ds(e) {
  return e != null && typeof e != `boolean` && !ls(e);
}
function q(e) {
  return Number.isFinite(e);
}
function fs(e) {
  return (Math.PI / 180) * e;
}
function ps(e) {
  return Qe(e) ? !1 : e === 2 || e === 5;
}
function ms(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function hs(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return gs(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function gs(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      U(e, `unknown constraint key`);
  }
}
function _s(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(hs(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(hs(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function vs(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(hs(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(hs(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function ys(e, t, n, r, i) {
  let a = vs(q(e) ? e : lx, n, r, i),
    o = _s(q(t) ? t : ux, n, r, i);
  return (
    q(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (q(n.left) && q(n.right)
        ? (o = a / n.aspectRatio)
        : (q(n.top) && q(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function bs(e, t) {
  return !q(e) || !q(t) ? null : e + t;
}
function xs(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Ss(e) {
  return !e._constraints || xs(e) ? !1 : e._constraints.enabled;
}
function Cs(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    q(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    q(n) && q(r) ? { width: n, height: r } : null
  );
}
function ws(e) {
  let t = Cs(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return q(n) && q(r) ? { x: n, y: r, ...t } : null;
}
function Ts(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Ss(e) || r) return ws(e);
  let i = Es(e),
    a = Ds(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return cx.toRect(i, o, null, n, null);
}
function Es(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = sx.quickfix({
      left: q(t),
      right: q(n),
      top: q(r),
      bottom: q(i),
      widthType: ms(c),
      heightType: ms(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function Ds(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Os() {
  return M.useContext(dx).parentSize;
}
function ks(e) {
  return typeof e == `object`;
}
function As(e) {
  return ks(e) ? e.width : e;
}
function js(e) {
  return ks(e) ? e.height : e;
}
function Ms(e, t) {
  return /* @__PURE__ */ E(fx, { parentSize: t, children: e });
}
function Ns(e) {
  return Ts(e, Os(), !0);
}
function Ps({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Fs(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Is(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? Ue[e] : Ue.div;
}
function Ls() {
  return !1;
}
function Rs() {
  return st() ? W.preview : W.current();
}
function zs() {
  return (bx ??= import("./chunk.Dy1d_AYg.PPYzz18Z.mjs").then((e) => {
    if (((xx = e.getCombinedCSSRules), pr())) for (let e of xx()) ct(e, void 0);
    return e;
  }));
}
function Bs() {
  return xx ? xx() : (pr() && zs(), []);
}
function Vs(e) {
  return _x(e, Bs, `framer-lib-combinedCSSRules`);
}
function Hs(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function Us(e, t) {
  let n = {};
  return (
    W.current() === W.canvas &&
      Hs(n, Sx ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function Ws(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Gs(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = M.Children.map(t, (e) =>
        M.isValidElement(e) ? M.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function Ks(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function qs(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = t(Rb);
  return C(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function Js() {
  let [e, t] = M.useState(0);
  return M.useCallback(() => t((e) => e + 1), []);
}
function Ys(e) {
  let t = Js();
  N(() => {
    let n = e?.current;
    if (n)
      return (
        Tx?.observeElementWithCallback(e.current, t),
        () => {
          Tx?.unobserve(n);
        }
      );
  }, [e, t]);
}
function Xs(e) {
  return [
    ...(e.firstElementChild &&
    e.firstElementChild.hasAttribute(`data-framer-size-compatibility-wrapper`)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Zs)
    .map(Qs);
}
function Zs(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Qs(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(Zs);
  return t ? Qs(t) : e;
}
function $s(e, n, r = () => [], i = {}) {
  let { id: a, visible: o, _needsMeasure: s } = e,
    { skipHook: c = !1 } = i,
    l = t(Cx),
    u = W.current() === W.canvas;
  Fy(() => {
    !u ||
      l ||
      c ||
      (n.current && a && o && s && Zb.queueMeasureRequest(Ws(a), n.current, r(n.current)));
  });
}
function ec(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && Zb.queueMeasureRequest(Ws(t.id), t, Xs(t));
}
function tc(e) {
  e.willChange = `transform`;
  let t = W.current() === W.canvas;
  Ox && t && (e.translateZ = Ex);
}
function nc(e) {
  ((e.willChange = `transform`), rc(e, !0));
}
function rc(e, t) {
  let n = W.current() === W.canvas;
  if (!Ox || !n) return;
  let r = (z(e.transform) && e.transform) || ``;
  t ? r.includes(Dx) || (e.transform = r + Dx) : (e.transform = r.replace(Dx, ``));
}
function ic(e, t, n, r = !0) {
  if (!e) return;
  let i = Wb(e.style),
    a = n || i[t],
    o = () => {
      ac(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function ac(e) {
  return z(e) || B(e) || $e(e);
}
function oc(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function sc(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  oc(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function cc(e, t) {
  let n = [e, t];
  return Mx.test(e) ? e : sc(1e3, Nx, n, () => jx.multiplyAlpha(e, t));
}
function lc(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: cc(e.value, t) }))
  );
}
function uc(e, t) {
  let n = 0;
  return (
    lc(e, t).forEach((e) => {
      n ^= Ax(e.value) ^ e.position;
    }),
    n
  );
}
function dc(e) {
  return e && Px.every((t) => t in e);
}
function fc(e) {
  return e && Fx.every((t) => t in e);
}
function pc({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || Db(t)
      ? (n.backgroundColor = t)
      : X.isColorObject(e) && (n.backgroundColor = e.initialValue || X.toRgbString(e))
    : e &&
      ((e = fb.get(e, null)),
      typeof e == `string` || Db(e)
        ? (n.background = e)
        : Lx.isLinearGradient(e)
          ? (n.background = Lx.toCSS(e))
          : zx.isRadialGradient(e)
            ? (n.background = zx.toCSS(e))
            : X.isColorObject(e) && (n.backgroundColor = e.initialValue || X.toRgbString(e)));
}
function J(e, t, n, r) {
  (r === void 0 && (r = t), e[t] !== void 0 && (n[r] = e[t]));
}
function mc(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function hc(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function gc(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    ge(n)
      ? (t.cornerShape = me(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    J(e, `size`, t),
    J(e, `width`, t),
    J(e, `height`, t),
    J(e, `minWidth`, t),
    J(e, `minHeight`, t),
    J(e, `top`, t),
    J(e, `right`, t),
    J(e, `bottom`, t),
    J(e, `left`, t),
    J(e, `position`, t),
    J(e, `overflow`, t),
    J(e, `opacity`, t),
    e._border?.borderWidth || J(e, `border`, t),
    J(e, `borderRadius`, t),
    J(e, `radius`, t, `borderRadius`),
    J(e, `color`, t),
    J(e, `shadow`, t, `boxShadow`),
    J(e, `x`, t),
    J(e, `y`, t),
    J(e, `z`, t),
    J(e, `rotate`, t),
    J(e, `rotateX`, t),
    J(e, `rotateY`, t),
    J(e, `rotateZ`, t),
    J(e, `scale`, t),
    J(e, `scaleX`, t),
    J(e, `scaleY`, t),
    J(e, `skew`, t),
    J(e, `skewX`, t),
    J(e, `skewY`, t),
    J(e, `originX`, t),
    J(e, `originY`, t),
    J(e, `originZ`, t),
    pc(e, t),
    t
  );
}
function _c(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Wb(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function vc(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (Vx.has(t)) return `pointer`;
}
function yc(e) {
  return bc(e) ? !0 : e.style ? !!bc(e.style) : !1;
}
function bc(e) {
  return Hx in e && (e[Hx] === `scroll` || e[Hx] === `auto`);
}
function xc(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = Me(e.minWidth),
    h = Me(e.minHeight),
    g = Me(e.maxWidth),
    _ = Me(e.maxHeight);
  return {
    top: Me(n),
    left: Me(t),
    bottom: Me(r),
    right: Me(i),
    width: Me(a),
    height: Me(o),
    size: Me(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function Sc(e) {
  let n = t(Cx),
    { style: r, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = xc(e),
    c = Ns(s),
    l = {
      display: `block`,
      flex: r?.flex ?? `0 0 auto`,
      userSelect: W.current() === W.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !_c(e) && !e.__fromCanvasComponent && !yc(e),
    d = !e.style || !(`pointerEvents` in e.style);
  u && d && (l.pointerEvents = `none`);
  let f = M.Children.count(e.children) > 0 &&
      M.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = gc(e);
  (o === void 0 && !a && (mc(p) || (l.width = Ux.width), hc(p) || (l.height = Ux.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let m = {};
  (Ss(s) &&
    c &&
    !Ps(e) &&
    (m = { left: c.x, top: c.y, width: c.width, height: c.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, i, p, m, r),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    kx.applyWillChange(e, l, !0));
  let h = l;
  l.transform || (h = { x: 0, y: 0, ...l });
  let g = Ho();
  return (
    e.positionSticky
      ? (!g || Zb.isOnPageCanvas || n) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = Zb.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, c]
  );
}
function Cc(e) {
  let t = {};
  for (let n in e)
    (te(n) || Kb(n)) && !Wx.has(n)
      ? (t[n] = Wb(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Wb(e)[n] != `boolean` && !e.transition && (t.transition = Wb(e)[n]));
  return t;
}
function wc(e) {
  return `data-framer-name` in e;
}
function Tc(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Ec(e) {
  return /* @__PURE__ */ E(Ue.div, { layoutId: qx, style: Xx, children: e.children });
}
function Dc(e, t) {
  Je(e) ? e(t) : Oc(e) && (e.current = t);
}
function Oc(e) {
  return V(e) && `current` in e;
}
function kc() {
  let e = zo(() => /* @__PURE__ */ new Set()),
    t = zo(() => /* @__PURE__ */ new Map());
  return zo(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      i !== n.current &&
        ((n.current = i),
        r && r(i),
        t.forEach((e, t) => {
          e ? e() : t(null);
        }),
        i === null
          ? (t.clear(), e.clear())
          : e.forEach((e) => {
              let n = e(i);
              t.set(e, n);
            }));
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Ac(e) {
  let t = _(null),
    n = kc();
  return zo(() => (Oc(e) ? n(e) : Je(e) ? n(t, e) : n(t)));
}
function jc(e, t, n) {
  let r = _(),
    i = _();
  (Pi(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Mc(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Zx({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Nc(e, n, r) {
  let i = zo(() => `${r.rootMargin}`),
    a = t(Qx),
    { enabled: o, root: s, rootMargin: c, threshold: l } = r;
  jc(
    e,
    (e) => {
      if (o && e !== null) return Mc(a, i, e, s, n, c, l);
    },
    [o, n, s, c, l]
  );
}
function Pc(e, t, n) {
  let r = M.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n,
    c = M.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Ic(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
        } else if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
        }
      },
      [a, o?.y, t]
    );
  $x(e, c, { threshold: eS, rootMargin: s, enabled: i ?? !0 });
}
function Fc(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, Ot.innerHeight);
}
function Ic({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Fc(t, e) >= r;
}
function Lc() {
  return /* @__PURE__ */ new Map();
}
function Rc() {
  return zo(Lc);
}
function zc(e, n = []) {
  let { register: r, deregister: i } = t(aS);
  N(() => {
    if (e) return (r(e), () => i(e));
  }, [r, i, ...n]);
}
function Bc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Vc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (q(t.originX) && (r.originX = t.originX),
      q(t.originY) && (r.originY = t.originY),
      q(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (q(n.originX) && (r.originX = n.originX),
      q(n.originY) && (r.originY = n.originY),
      q(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Hc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Uc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return dS.PushLeft;
    case `left`:
      return dS.PushRight;
    case `bottom`:
      return dS.PushUp;
    case `top`:
      return dS.PushDown;
  }
}
function Wc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return dS.OverlayLeft;
    case `left`:
      return dS.OverlayRight;
    case `bottom`:
      return dS.OverlayUp;
    case `top`:
      return dS.OverlayDown;
  }
}
function Gc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return dS.FlipLeft;
    case `left`:
      return dS.FlipRight;
    case `bottom`:
      return dS.FlipUp;
    case `top`:
      return dS.FlipDown;
  }
}
function Kc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return Jc(e, t.transition, t.component);
    case `removeOverlay`:
      return Yc(e);
    case `add`:
      return Xc(e, t.key, t.transition, t.component);
    case `remove`:
      return $c(e);
    case `update`:
      return qc(e, t.key, t.component);
    case `back`:
      return Zc(e);
    case `forward`:
      return Qc(e);
    default:
      return;
  }
}
function qc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function Jc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function Yc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function Xc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? il(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = nl(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = el(e, t, c),
    p = rl(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function Zc(e) {
  let t = { ...e.containers },
    n = $c(e);
  if (n) return ((n.containers = t), n);
}
function Qc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Xc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function $c(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (H(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = tl(e, r, n),
    u = rl(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function el(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function tl(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function nl(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function rl(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = al(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function il(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).some((t) => t.key === e)
        ? !0
        : !r.slice(0, t - 1).some((t) => t.key === e);
}
function al(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (e === n || e === r) {
    if (e === n && n > r) {
      let t = i[e];
      return ol(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return ol(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return ol(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return ol(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function ol(e, t, n) {
  let r = {},
    i = {};
  return (
    pS.forEach((e) => {
      ((r[e] = cS[e]), (i[e] = { ...n, from: cS[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Wb(cS)[a]}%` : Wb(cS)[a];
        ((Wb(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function sl(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function cl({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function ll({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : _S;
}
function ul({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function dl(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function fl(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
  if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  }
  {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function pl(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function ml(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function hl(e, t) {
  let { current: n, history: r } = t;
  if (e !== n) {
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
  }
}
function gl(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return _S;
}
function _l(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function vl(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function yl(e) {
  return M.Children.map(e.component, (t) => {
    if (!ds(t) || !us(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? V(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      M.cloneElement(t, n)
    );
  });
}
function bl(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function xl(e, t) {
  let n = ce(),
    r = F();
  return /* @__PURE__ */ E(gS, {
    ref: (e) => {
      t && (typeof t == `function` ? t(e) : (t.current = e));
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Sl(e) {
  return V(e) && bS in e;
}
function Cl(e) {
  return V(e) || Je(e);
}
function wl(e) {
  return !!e && xS in e && e[xS] === !0;
}
function Tl(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
      case `dimension`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `sharedtype`: {
        if (!(`definition` in e) || !Sl(e.definition)) return;
        let { definition: t } = e;
        switch (t.kind) {
          case `enum`:
            return z(e.defaultValue) && t.options.includes(e.defaultValue)
              ? e.defaultValue
              : void 0;
          default:
            t.kind;
            return;
        }
      }
      case `boolean`:
        return Ye(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return Qe(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = V(e.defaultValue) ? e.defaultValue : {};
        return (V(e.controls) && El(t, e.controls), t);
      }
      case `array`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `motionvalue`:
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `ref`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function El(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Qe(i) || wl(r)) continue;
    let a = Tl(r);
    Qe(a) || (e[n] = a);
  }
}
function Dl(e) {
  if (V(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Ol(e, t) {
  Cl(e) && El(Dl(e), t);
}
function kl(e, t) {
  Object.assign(e, { [SS]: t });
}
function Al(e, t, n) {
  (Object.assign(e, { propertyControls: t }), jl(t), Ol(e, t), n !== void 0 && kl(e, n));
}
function jl(e) {
  for (let t of Object.values(e))
    t?.type === `sharedtype` &&
      `definition` in t &&
      Sl(t.definition) &&
      Object.isExtensible(t) &&
      Object.defineProperty(t, "options", { value: t.definition.options, configurable: !0 });
}
function Ml(e) {
  return e.propertyControls;
}
function Nl(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Pl(e) {
  return e.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
}
function Fl(e, t) {
  e.shadows && e.shadows.length !== 0 && (t.textShadow = Pl(e.shadows));
}
function Il(e, t) {
  let n = [];
  (q(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    q(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    q(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    q(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    q(e.invert) && n.push(`invert(${e.invert / 100})`),
    q(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    q(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    q(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Nl(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Ll(e, t) {
  q(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Rl(e, t) {
  (Ll(e, t), Il(e, t));
}
function zl(e, t) {
  let n,
    r = (...r) => {
      (Ot.clearTimeout(n), (n = Ot.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      Ot.clearTimeout(n);
    }),
    r
  );
}
function Bl(...e) {
  return e.filter(Boolean).join(` `);
}
function Vl(e) {
  if (e.startsWith(MS)) return e.substr(NS);
}
function Hl(e, t, n) {
  let r = m.map(e, (e) => (T(e) ? a(e, t) : e));
  return n ? r : /* @__PURE__ */ E(v, { children: r });
}
function Ul(e) {
  let t = zo(() => Wl(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Wl(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Gl(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Gl(t)));
    },
    r = !1;
  function i(i, o) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      m.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      m.map(i, (e) => {
        if (T(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Je(o) ? o(e.props) : o;
          return a(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return /* @__PURE__ */ E(v, { children: i(e, t) });
  };
  return (
    (o.cloneAsArray = i),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: o,
    }
  );
}
function Gl(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Dc(n, e), Dc(t, e));
  };
}
function Kl(e, t, n, r, i, a, o, s) {
  let c = M.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !M.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !Xl(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = Yl([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = Yl([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = /* @__PURE__ */ E(
        FS.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = Jl(e, a, r);
    (f.length
      ? (H(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = /* @__PURE__ */ E(
          `div`,
          { className: `${IS} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : H(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    H(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, /* @__PURE__ */ E(`div`, { className: LS }, `property-overrides-separator`)]
  );
}
function ql(e) {
  return e.split(`-`)[2];
}
function Jl(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${ql(a)}`);
  }
  return r;
}
function Yl(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Xl(e, t) {
  for (let n of Object.keys(t)) if (!En(e[n], t[n], !0)) return !0;
  return !1;
}
function Zl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Ql(e) {
  return M.forwardRef(({ optimized: t, ...n }, r) => {
    let i = M.useContext(PS),
      a = M.useContext(FS)?.variants,
      o = n[GS];
    o && !pr() && US.setAll(o, a, t ? n : null, i);
    let s = qS(n);
    return /* @__PURE__ */ E(e, { ref: r, ...n, ...s });
  });
}
function $l(e) {
  return z(e) || Array.isArray(e);
}
function eu(e) {
  return e in XS;
}
function tu(e, t) {
  let n = zo(() => ({ values: YS(t ? e : void 0) }));
  return (
    M.useEffect(() => {
      if (!t)
        for (let e of JS) {
          let t = XS[e];
          Qe(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function nu(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  o
) {
  let s = Re(),
    c = zo(YS),
    d = _(!1),
    f = eC(),
    p = _(null),
    m = u(async () => {
      if (!i) return;
      let e = n || void 0,
        t = d.current && r === `mirror`,
        a = t ? XS : i,
        o = t ? i : XS;
      return (
        (d.current = !d.current),
        (p.current = Promise.all(
          JS.map((t) => {
            if (!(s && t !== `opacity`))
              return (
                c[t].jump(o[t] ?? XS[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && Pe(c[t], i, r);
                })
              );
          })
        )),
        p.current
      );
    }, [i, r, n, s]),
    [g, v] = h(!1),
    y = _(!1),
    b = u(async () => {
      e && y.current && (await m(), await f(t ?? 0), b());
    }, [m, f, e, t]),
    x = u(() => {
      y.current || ((y.current = !0), l(() => v(!0)), b());
    }, [b]),
    S = u((e = !0) => {
      (JS.forEach((e) => {
        c[e].stop();
      }),
        JS.forEach((e) => {
          c[e].set(XS[e]);
        }),
        (d.current = !1),
        e && ((y.current = !1), l(() => v(!1))));
    }, []),
    w = e && i,
    T = u(() => {
      document.hidden ? S(!1) : y.current && ((y.current = !1), x());
    }, [x, S]);
  (N(() => {
    if (w)
      return (
        document.addEventListener(`visibilitychange`, T),
        () => {
          document.removeEventListener(`visibilitychange`, T);
        }
      );
  }, [w, T]),
    N(() => {
      (w && a) || (w ? x() : S());
    }, [x, S, a, w]),
    N(() => () => S(), [S]));
  let E = _(!1),
    D = u(async () => {
      p.current && (await p.current, !E.current && S());
    }, [S]),
    O = u(
      (e) => {
        e.isIntersecting ? ((E.current = !0), x()) : ((E.current = !1), D());
      },
      [x, D]
    );
  $x(o, O, { enabled: w && a });
  let k = g || !a;
  return C(() => ({ values: c, style: w && k ? ZS : QS }), [w, k]);
}
function ru(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function iu(e, n, r) {
  let { speed: i = 100, offset: a = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e,
    c = M.useRef(null),
    l = Re(),
    u = M.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : ru(e, c.current, i, a, o)),
      [i, a, o]
    ),
    { scrollY: d } = be(),
    f = xe(d, u),
    p = _e(o && c.current === null ? `hidden` : r),
    m = _e(0),
    h = t(Qx);
  return (
    jc(
      n,
      (e) => {
        if (e === null || !s) return;
        let t = Mc(h, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            He.update(() => {
              (f.set(u(d.get())), o && p.set(r ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s]
    ),
    Nn(() => {
      s && f.set(0);
    }),
    { values: { y: l || !s ? m : f }, style: s ? { ...ZS, visibility: p } : QS }
  );
}
function au(e) {
  return typeof e == `object` && !!e;
}
function ou(e) {
  if (au(e)) return e?.transition;
}
function su(e, t, n, r, i, a) {
  let o = ou(e);
  return Promise.all(
    JS.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = au(e) ? (e?.[s] ?? XS[s]) : XS[s];
          if ((ge(u) && (u = u.get()), !B(u))) return c();
          let d = he.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (z(i) && !l?.hasAnimated && Ot.MotionHandoffAnimation) {
            let e = Ot.MotionHandoffAnimation(i, s, He);
            e && (f = e);
          } else z(i) && Ot.MotionCancelOptimisedAnimation?.(i, s, He);
          a ? l.set(u) : Pe(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function cu(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  l
) {
  let u = r ?? e,
    d = i ?? t,
    f = a ?? n,
    [p, m] = le(),
    h = _({ lastPresence: !1, lastAnimate: d, hasMounted: !1, running: !1 }),
    g = zo(() => {
      let e = u ?? c;
      if (!V(e)) return { values: YS() };
      let t = {};
      for (let n in e) {
        let r = V(e) ? e[n] : void 0;
        B(r) && (t[n] = r);
      }
      return { values: YS(t) };
    });
  jc(
    o,
    (e) => {
      let { hasMounted: t } = h.current;
      if (t && d) return;
      let n = he.get(e);
      if (n) {
        Object.assign(h.current, { hasMounted: !0 });
        for (let e in g.values) {
          if (!eu(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, B(t) ? t : XS[e]);
        }
      }
    },
    [d]
  );
  let v = Re();
  jc(o, (e) => {
    if (!s) {
      m?.();
      return;
    }
    if (e === null) return;
    if (p !== h.current.lastPresence) {
      (Object.assign(h.current, { lastPresence: p }),
        p
          ? u &&
            d &&
            (Object.assign(h.current, { running: !0 }),
            su(d, g, v, o, l).then(() => Object.assign(h.current, { running: !1 })))
          : f
            ? (Object.assign(h.current, { running: !0 }),
              su(f, g, v, o, l)
                .then(() => Object.assign(h.current, { running: !1 }))
                .then(() => m()))
            : m());
      return;
    }
    let { lastAnimate: t, running: n } = h.current;
    !En(d, t) &&
      d &&
      (Object.assign(h.current, { lastAnimate: d }),
      su(d, g, v, o, l, !n).then(() => Object.assign(h.current, { running: !1 })));
  });
  let y = s && d;
  return C(() => ({ values: g.values, style: y ? ZS : QS }), [y]);
}
function lu(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function uu(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = lu(o.current, document.documentElement) - rC - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function du(e, t = 0) {
  return e < t ? `up` : `down`;
}
function fu(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Mn();
  M.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return P((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = du(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < iC) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function pu(e, t, n) {
  let r = uu(e, t),
    i = [...oC],
    a = r[0];
  if (!B(a)) return sC;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!B(e)) return sC;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function mu(e) {
  return {
    x: e?.x ?? XS.x,
    y: e?.y ?? XS.y,
    scale: e?.scale ?? XS.scale,
    opacity: e?.opacity ?? XS.opacity,
    transformPerspective: e?.transformPerspective ?? XS.transformPerspective,
    rotate: e?.rotate ?? XS.rotate,
    rotateX: e?.rotateX ?? XS.rotateX,
    rotateY: e?.rotateY ?? XS.rotateY,
    skewX: e?.skewX ?? XS.skewX,
    skewY: e?.skewY ?? XS.skewY,
    transition: e?.transition ?? void 0,
  };
}
function hu({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return M.useMemo(
    () => ({
      initial: r ?? mu({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? mu({ opacity: t }),
      exit: i ?? mu(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function gu(e, t) {
  let n = Re(),
    r = hu(e),
    i = e.styleAppearEffectEnabled,
    a = tu(i ? r.initial : r.animate, i),
    o = M.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Mn(),
    c = M.useRef(),
    l = M.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = he.get(t.current);
      c.current = Promise.all(
        JS.map((e) => {
          s && a.values[e].set(r.initial[e] ?? XS[e]);
          let t = o[e] ?? XS[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (B(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && Pe(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    u = e.animateOnce && o.current.lastAppearState === !0;
  Pc(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      t
        ? (o.current.scheduledAppearState = e)
        : ((o.current.scheduledAppearState = void 0),
          (o.current.lastAppearState = e),
          n !== e && l(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !u,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let d = e.targets && i && !e.scrollDirection;
  return (
    M.useEffect(() => {
      if (!d) return;
      let t = { initial: !0 },
        n = `initial`;
      return P((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = pu(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = fe(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = Wb(r)[u];
        d && l(d);
      });
    }, [s, d]),
    fu(e.scrollDirection, (e) => void l(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Nn(() => {
      if (i && (e.targets || e.scrollDirection))
        for (let e of JS) a.values[e].set(r.initial?.[e] ?? XS[e]);
    }),
    C(() => ({ values: a.values, style: i ? ZS : QS }), [i])
  );
}
function _u(e, t) {
  let n = M.useRef({});
  M.useEffect(() => {
    if (t !== void 0)
      for (let r of vv(e)) {
        let i = e[r],
          a,
          o;
        function s() {
          let e = n.current[r];
          (e && e.stop(),
            (n.current[r] = ke({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: a,
            })));
        }
        i.attach((e, t) => ((o = e), (a = t), He.postRender(s), i.get()));
      }
  }, [JSON.stringify(t)]);
}
function vu(e, t) {
  let n = uC();
  return {
    inputRange: uu(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of JS) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function yu(e) {
  let t = uC();
  for (let { target: n } of e) for (let e of JS) t[e]?.push(n[e]);
  return t;
}
function bu(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = Re(),
    c = tu(lC(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = Mn();
  return (
    i(() => {
      if (!l && u)
        return P((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = vu(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of JS)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(fe(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    jc(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = yu(n);
        return P(
          (e, { y: t }) => {
            for (let e of JS)
              (s && e !== `opacity`) ||
                (dC.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(fe(t.progress, dC, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, n, l]
    ),
    _u(c.values, r),
    Nn(() => {
      if (l) return;
      let e = lC(n, s);
      for (let t of JS) c.values[t].set(e?.[t] ?? XS[t]);
    }),
    M.useMemo(() => ({ values: c.values, style: t ? ZS : QS }), [t])
  );
}
function xu(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Su(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Vl(n);
    if (r) {
      for (let i of pC)
        if (fC[i]?.has(r)) {
          t[i][r] = Wb(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Wb(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = xu(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = xu(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Cu(e) {
  return V(e) && gC in e;
}
function wu(e, t) {
  if (!e || !V(e)) return t;
  for (let n in e) {
    let r = e[n];
    ge(r) && eu(n) && B(r.get()) && t[n].push(r);
  }
}
function Tu(e) {
  return z(e) || Array.isArray(e);
}
function Eu({ componentIdentifier: e, children: n }) {
  return n(t(vC)[e] ?? {});
}
function Du() {
  return M.useContext(yC);
}
function Ou(e) {
  let t = qs(e),
    { layoutIdKey: n, duplicatedFrom: r, ...i } = e;
  return { layoutId: t, ...i };
}
function ku(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Au() {
  if (f === void 0 || TC)
    return /* @__PURE__ */ E(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw DC;
}
function ju({ children: e }) {
  return t(kC)
    ? /* @__PURE__ */ E(v, { children: e })
    : /* @__PURE__ */ E(x, { fallback: OC, children: e });
}
function Mu() {
  return /* @__PURE__ */ E(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Nu(e, t) {
  if (!xt || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  Kn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Pu(...e) {
  console.error(...e);
}
function Fu() {
  return W.current() !== W.canvas;
}
function Iu({ getErrorMessage: e, fallback: t, children: n }) {
  return Fu()
    ? /* @__PURE__ */ E(Lu, {
        fallback: t,
        children: /* @__PURE__ */ E(jC, { fallback: t, getErrorMessage: e, children: n }),
      })
    : n;
}
function Lu({ children: e, fallback: t = AC }) {
  return f === void 0
    ? /* @__PURE__ */ E(x, { fallback: t, children: e })
    : /* @__PURE__ */ E(ju, { children: e });
}
function Ru() {
  return /* @__PURE__ */ E(`div`, {
    style: {
      padding: `12px 16px`,
      borderWidth: 1,
      borderRadius: 6,
      borderStyle: `solid`,
      borderColor: `rgba(149, 149, 149, 0.15)`,
      backgroundColor: `rgba(149, 149, 149, 0.1)`,
      fontSize: 12,
      color: `#a5a5a5`,
    },
    children: `Code component disabled`,
  });
}
function zu() {
  return M.useContext(NC);
}
function Bu() {
  let e = zu();
  return M.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function Vu({ children: e, scopeId: t, nodeId: n }) {
  let r = zu(),
    i = M.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return /* @__PURE__ */ E(NC.Provider, { value: i, children: e });
}
function Hu(e, t) {
  return `${PC}${e}:${t}`;
}
function Uu(e, t) {
  return Gu(`component`, e, t);
}
function Wu(e, t) {
  return Gu(`override`, e, t);
}
function Gu(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor → open Quick Actions (press Cmd+K or Ctrl+K) → paste this: ${Hu(t, n)} → click “Show Layer”.`;
}
function Ku(e, t, n, r, i, a) {
  let o = Ju(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function qu(e, t, n, r) {
  return Ju(e, t, n, r);
}
function Ju(e, t, n, r) {
  return !!(Qe(n) || (n === 1 && r && e === t));
}
function Yu(e, t, n, r, i, a) {
  let o = zu();
  if (Qe(t) || Qe(n)) return /* @__PURE__ */ E(MC, { children: e });
  let { disableCustomCode: s } = CC();
  return s && r
    ? /* @__PURE__ */ E(Ru, {})
    : (Ku(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = /* @__PURE__ */ E(Iu, {
          getErrorMessage: Uu.bind(null, t, n),
          fallback: null,
          children: e,
        })),
      i && (e = /* @__PURE__ */ E(Vu, { scopeId: t, nodeId: n, children: e })),
      e);
}
function Xu() {
  if (LC !== void 0 || f === void 0) return;
  let e = Ot.matchMedia(`(any-hover: hover)`);
  ((LC = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== LC) {
        LC = t;
        for (let e of RC) e();
      }
    }));
}
function Zu() {
  return (Xu(), Qu());
}
function Qu() {
  return LC ?? !1;
}
function $u(e) {
  return (
    RC.add(e),
    Xu(),
    () => {
      RC.delete(e);
    }
  );
}
function ed(e = !1) {
  let [t, n] = h(e);
  return (
    Fy(function () {
      function e(e = !0) {
        let t = Qu();
        e ? l(() => n(t)) : n(t);
      }
      let t = $u(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function td(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function nd(e) {
  return !(!e || e.placement || e.alignment);
}
function rd(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      U(e);
  }
}
function id(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${rd(t)}, -100%`;
    case `right`:
      return `0%, ${rd(t)}`;
    case `bottom`:
      return `${rd(t)}, 0%`;
    case `left`:
      return `-100%, ${rd(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function ad(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(`data-framer-portal-id`)) {
      let e = n.getAttribute(GC);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function od(e) {
  let { registerCursors: r } = t(zC),
    a = zo(() => e),
    o = n();
  i(() => r(a, o), [r, o]);
}
function sd(e) {
  return !!(e && typeof e == `object` && qC in e);
}
function cd(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function ld() {
  return W.current() === W.canvas;
}
function ud(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function dd(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function fd(e, t, n, r) {
  if (z(e)) {
    let i = ud(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = Ea(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function pd(e) {
  return z(e) && e.startsWith(`data:${ew}`);
}
function md(e) {
  if (pd(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(17),
        r = t.searchParams,
        i = r.has(XC) ? r.get(XC) : void 0,
        a,
        o = r.get(ZC),
        s = r.get(QC),
        c = r.get($C);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function hd(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = md(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function gd(e) {
  if (!pd(e)) return e;
  let t = md(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: _d(i) };
}
function _d(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function vd(e, n, r, i, a, o) {
  let s = t(tw),
    c = Bu(),
    l = C(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: c }), [n, r, c]),
    d = kn(),
    f = jn(),
    { locales: p } = Fr(),
    h = C(() => {
      let e = sd(i) ? i : gd(i);
      if (e) return fd(e, d, f, p);
    }, [f, i, d, p]),
    g = !!(!ld() && s?.nodeId && l.nodeId),
    _ = u(
      (e) => {
        a.href &&
          (e.preventDefault(),
          e.stopPropagation(),
          yr(e) ? xd(a.href, ``, `_blank`) : h ? a.navigate?.() : xd(a.href, a.rel, a.target));
      },
      [a, h]
    ),
    v = u(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), xd(a.href, ``, `_blank`));
      },
      [a]
    ),
    b = u(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          h ? a.navigate?.() : xd(a.href, a.rel, a.target));
      },
      [a, h]
    );
  jc(
    o,
    (e) => {
      e !== null && g && (e.dataset.hydrated = `true`);
    },
    [g]
  );
  let x = e;
  return (
    g &&
      (m.forEach(e, (e) => {
        bd(e) &&
          (H(
            yd(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          H(
            yd(l),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          YC.collectNestedLink(s, l));
      }),
      (x = m.map(e, (e) => {
        if (!bd(e)) return e;
        let t = Sd(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: _,
            onAuxClick: v,
            onKeyDown: b,
            as: r.as && Sd(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return y(t, { ...i, ref: a }, n);
      }))),
    /* @__PURE__ */ E(tw.Provider, { value: l, children: x })
  );
}
function yd(e) {
  return !Qe(e?.nodeId);
}
function bd(e) {
  return T(e) && (Sd(e.type) !== e.type || Sd(e.props.as) !== e.props.as);
}
function xd(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Sd(e) {
  return e === `a` ? `span` : We(e) && ie(e) === `a` ? Ue.span : e;
}
function Cd({ component: e, props: n }) {
  let r = t(PS),
    i = y(e, n);
  if ((`variant` in n && n.variant != null) || !r) return i;
  let { activeVariantId: a, humanReadableVariantMap: o } = r;
  if (!a || !o) return i;
  let s = {};
  for (let [e, t] of Object.entries(o)) s[t] = { variant: e };
  return /* @__PURE__ */ E(zS, { overrides: s, breakpoint: a, children: i });
}
function wd(e) {
  rw = e;
}
function Td() {
  return rw;
}
function Ed(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Ed(e.parentElement, t)
      : null;
}
function Dd({ children: e }) {
  return /* @__PURE__ */ E(ju, { children: e });
}
function Od(e) {
  return D(function (t, n) {
    return /* @__PURE__ */ E(Dd, { children: /* @__PURE__ */ E(e, { ...t, ref: n }) });
  });
}
function kd(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return jd(e, t, o, s, a, c, l, i, r);
}
function Ad(e, t, n, r) {
  if (e.routes && e.getRoute && ud(t))
    try {
      let [i, a] = t.split(`#`, 2);
      H(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      H(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = Ea(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function jd(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = ra(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Md() {
  let e = t(aw),
    n = jn()?.pathVariables;
  return e || n;
}
function Nd(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(iw)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Pd() {
  return !!Fa(`ss-only-routes`);
}
function Fd(e) {
  if (f === void 0) return;
  let t = f.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function Id(e) {
  return Pa(`rewrite`, e)?.description === `external`;
}
function Ld() {
  if (!CC().checkServerSideRouter) return !1;
  if (lw === void 0) {
    let e = Pd();
    ((uw = !e && dr() && mr() < 16.4), (lw = e || uw));
  }
  return lw;
}
function Rd(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: Id(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === Td() ? `client` : `server` };
}
async function zd(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (uw &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((uw = !1), Pa(`ss-only-routes`, t.headers.get(`server-timing`)) || (lw = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return Rd(t, e);
}
function Bd(e, t) {
  ow.has(e) && ow.set(e, t);
}
async function Vd(e) {
  await ir(sw);
  try {
    Bd(e, await zd(e));
  } catch {
    ow.delete(e);
  }
}
async function Hd(e) {
  try {
    let t = await zd(e);
    return (Bd(e, t), t);
  } catch {
    return (Vd(e), { decision: `server` });
  }
}
function Ud(e) {
  if (!Ld()) return;
  let t = Fd(e);
  if (!t || t.origin !== f.location.origin) return;
  let n = t.href;
  ow.has(n) || ow.set(n, Hd(n));
}
function Wd(e) {
  let t = Fd(e);
  if (!t) return;
  let n = ow.get(t.href);
  return n && !it(n) ? n : void 0;
}
async function Gd(e) {
  let t = Fd(e);
  if (!t) return;
  let n = ow.get(t.href);
  if (n) return it(n) ? Promise.race([n, ir(cw).then(() => void 0)]) : n;
}
function Kd() {
  let e = s.connection || s.mozConnection || s.webkitConnection || {},
    t = s.deviceMemory && s.deviceMemory < pw,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? mw : hw));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(u, { threshold: fw }),
    c = 0;
  async function l(e, t) {
    if (r) return;
    Ud(e.navigationUrl);
    let { id: n, preload: a } = e,
      s = vw.get(n);
    if (!s?.size || _w.has(n)) return;
    if (c >= i) {
      setTimeout(() => l(e, t), dw);
      return;
    }
    (++c, _w.add(n));
    let u = a()?.catch(() => {});
    (o.unobserve(t), gw.delete(t));
    for (let e of s) (o.unobserve(e), gw.delete(e));
    (s.clear(), vw.delete(n), await u, --c);
  }
  function u(e) {
    for (let t of e) {
      let e = t.target,
        n = gw.get(e);
      if (!n || _w.has(n.id)) {
        (o.unobserve(e), gw.delete(e));
        continue;
      }
      let r = n.id,
        i = vw.get(r),
        a = vw.get(r)?.size ?? 0;
      t.isIntersecting
        ? (i ? i.add(e) : vw.set(r, /* @__PURE__ */ new Set([e])), setTimeout(() => l(n, e), dw))
        : (i && i.delete(e), a <= 1 && vw.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!_w.has(n))
      return (
        gw.set(e, { id: n, preload: t, navigationUrl: r }),
        o.observe(e),
        () => {
          (gw.delete(e), o.unobserve(e));
        }
      );
  };
}
function qd(e, t) {
  let n = ud(e),
    r = {
      href: e === `` || dd(e, n) ? e : `https://${e}`,
      target: Jd(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Dr(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Jd(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Yd(e, t) {
  console.warn(
    ot(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Xd(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Yd(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return it(i) ? i.catch(Yd) : i;
  } catch (e) {
    Yd(e);
  }
}
async function Zd(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      H(a, `unresolvedSlug should be defined`);
      let o = Xd(a, r, n),
        s = it(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function Qd(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Xd(o, r, n);
      it(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function $d() {
  let e = rr();
  return u((t, n, r, i = []) => Qd(t, n, r, e, i), [e]);
}
function ef({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = rr();
  return u(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = sd(r) ? r : gd(r);
      if (!sd(c))
        return Kn(
          `published_site_click`,
          {
            ...s,
            href: o ? tf(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (z(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (it(n) ? await n : n) ?? null;
        }
      }
      return Kn(
        `published_site_click`,
        {
          ...s,
          href: o ? tf(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function tf(e) {
  try {
    let t = new URL(e, Ot.document.baseURI);
    return t.origin === Ot.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function nf(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function rf(e, t, n) {
  return async (r) => {
    let i = yr(r),
      a = Ed(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    s
      ? (r.preventDefault(), n(c))
      : (await ly({
          priority: `user-blocking`,
          ensureContinueBeforeUnload: !0,
          continueAfter: `paint`,
        }),
        c());
  };
}
function af(e, t, n) {
  return async (r) => {
    let i = await of(t);
    i.decision === `client` ? n(r) : sf(t ?? e, r, i.redirectUrl);
  };
}
async function of(e) {
  return !e || !Ld()
    ? { decision: `client` }
    : Wd(e) || (Ud(e), (await Gd(e)) ?? { decision: `server` });
}
async function sf(e, t, n) {
  (await ly({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    f.location.assign(cf(e, n)));
}
function cf(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, f.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function lf(e) {
  let t = ea(e);
  if (t && f.location.pathname === t) {
    let e = new URL(f.location.href);
    return ((e.pathname = `${t}/`), e.href);
  }
  return f.location.href;
}
function uf(e, t, n) {
  if (t || f === void 0) return;
  let r = lf(n),
    i;
  try {
    i = new URL(e, r);
  } catch {
    return;
  }
  let a = new URL(r);
  if (i.origin === a.origin && (i.pathname !== a.pathname || i.search !== a.search)) return i.href;
}
function df(e, t, n, r, i, a, o, s) {
  if (!n) return qd(e, r);
  let c = Ad(t, e, s, o);
  if (!c) return qd(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return qd(e, r);
  let m = ra(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !St,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Jd(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = uf(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = af(m, _, (e) =>
      nf(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      )
    );
  return {
    href: m,
    target: h,
    onClick: rf(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Nd(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function ff(e, t, n) {
  let r = pf(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Je(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Je(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function pf(e, t) {
  let n = V(e) ? e : void 0,
    r = n && !Ze(n),
    i = t && !Ze(t);
  if (r || i) return { ...n, ...t };
}
function mf(e, t, n) {
  if (!(t && sr())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: hf } : { ...i, onTap: r }) : e;
}
function hf(e) {
  let t = Ed(e.target);
  t && t.getAttribute(`target`) !== `_blank` && e.preventDefault();
}
function gf(e, t, n, r, i, a) {
  let o = sd(e) ? e : gd(e);
  if (!sd(o)) return z(e) ? qd(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (it(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return ra(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function _f() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62)
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l;) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function vf() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, _f(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: xw, difficulty: Sw, tokenLength: Cw, maxTime: ww }));
  });
}
function yf(e) {
  let t = /* @__PURE__ */ new Set();
  for (let n of e.elements)
    bf(n) && !n.disabled && n.name && (n.name.startsWith(`__framer`) || t.add(n.name));
  return Array.from(t);
}
function bf(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function xf(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function Sf(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        }
      );
    }
  } catch {}
}
function Cf() {
  let e = M.useContext(Rw),
    t = M.useMemo(
      () =>
        Dw.map((e) => ({
          inputRef: M.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: M.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${Tw}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: M.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [kw.name]: e.originalName,
                [kw.value]: o,
                [kw.setAttribute]: e.methodsUsed.setAttribute,
                [kw.valueProperty]: e.methodsUsed.valueProperty,
                [kw.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [kw.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [kw.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${Tw}_${Aw.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${Tw}_${Aw.fieldCount}`, r.toString()),
          n.append(`${Tw}_${Aw.fieldFilledCount}`, i.toString()),
          n.append(`${Tw}_${Aw.hpVersion}`, Ew),
          n.append(`${Tw}_${Aw.siteId}`, e || ``),
          n.append(`${Tw}_${Aw.timeToSubmissionSinceModuleLoad}`, jw()));
      },
      [t, e]
    ),
  };
}
function wf({ states: e }) {
  return /* @__PURE__ */ E(v, {
    children: e.map((e) => /* @__PURE__ */ E(Mw, { inputStateRef: e }, `hp_${e.originalName}`)),
  });
}
function Tf({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          Ef(e, t, n);
        })
      : Ef(e.pageviewEventData.current, t, n));
}
function Ef(e, t, n) {
  return Kn(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function Df({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? Lw : Iw;
    case `incomplete`:
      return e === `error` ? Lw : Fw;
    case `submit`:
      return Nw;
    case `success`:
      return Pw;
    case `error`:
      return Lw;
    default:
      U(t);
  }
}
function Of({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function kf(e) {
  e.preventDefault();
}
function Af(e, t) {
  let n = dd(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function jf(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (jf(t)) return !0;
  return !1;
}
async function Mf(e, t, n, r) {
  let i = await vf();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": xf(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw Nf(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function Nf(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    V(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function Pf({ EditorBar: e, fast: n = !1 }) {
  let i = t(Rw),
    a = r(Tt, n ? Hw : Uw, Dt),
    o = CC(),
    s = C(() => {
      let e = {},
        t;
      for (t in o)
        o.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = o[t]);
      return e;
    }, [o]);
  return !e || !i || !a
    ? null
    : /* @__PURE__ */ E(Vw, {
        children: /* @__PURE__ */ E(x, {
          children: /* @__PURE__ */ E(e, { framerSiteId: i, features: s }),
        }),
      });
}
function Ff(e, t) {
  return e.replace(dy, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function If({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = _(),
    i = _(),
    a = _(t),
    o = _(null);
  ((a.current = t),
    N(() => {
      e && ((r.current ??= /* @__PURE__ */ new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = h(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? /* @__PURE__ */ new Set(),
      getCurrentRoutePath: () =>
        a.current ? Rf(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? Rf(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && Lf(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return /* @__PURE__ */ E(Ww.Provider, { value: s, children: n });
}
async function Lf(e, t) {
  if (!qn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    Kn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Rf(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? Ff(r.path, n) : r.path) : ``;
}
function zf(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Bf() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((Gw = e.timeZone), (Kw = e.locale));
}
function Vf({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Ci(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: mi()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function Hf(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = mi();
  Ci(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function Uf(e, t, n, r) {
  let i = mi();
  t.path &&
    i?.hash !== n.hash &&
    (r?.(),
    Ci(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      ra(t, n)
    ));
}
function Wf() {
  return mr() >= 17 ? Xw : Yw;
}
function Gf(e = Zf) {
  let t = (e) => {
    e.persisted && ep();
  };
  dr() && (f.addEventListener(`pageshow`, t), (Jw = Date.now() - Wf()));
  let n = Kf(),
    r = Qf(e);
  return function () {
    (f.removeEventListener(`pageshow`, t), n(), r());
  };
}
function Kf() {
  let e = f.history.scrollRestoration;
  return (
    (f.history.scrollRestoration = `manual`),
    function () {
      f.history.scrollRestoration = e;
    }
  );
}
function qf(e) {
  return V(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Jf() {
  return { x: f.scrollX, y: f.scrollY };
}
function Yf() {
  let e = mi();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (qf(t)) return t;
}
function Xf(e) {
  let t = mi();
  t && (xi({ ...t, scrollPosition: e }), dr() && (Jw = Date.now()));
}
function Zf(e, t = !1) {
  let n = Yf();
  if (!(n && n.x === e.x && n.y === e.y)) {
    if (dr() && !t) {
      let e = Wf();
      if (Date.now() - Jw < e) return;
    }
    Xf(e);
  }
}
function Qf(e) {
  let t = () => {
      e(Jf());
    },
    n = () => {
      e(Jf(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), f.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), f.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in f)) {
    let e = $f(t);
    return function () {
      (i(), e());
    };
  }
  return (
    f.addEventListener(`scrollend`, t),
    function () {
      (i(), f.removeEventListener(`scrollend`, t));
    }
  );
}
function $f(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), t !== void 0 && hi(mi()) === t && e());
    },
    a = () => {
      let e = hi(mi());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = dr() ? Wf() : 100;
      t = f.setTimeout(i, a);
    };
  return (
    f.addEventListener(`scroll`, a),
    function () {
      (f.removeEventListener(`scroll`, a), r());
    }
  );
}
function ep() {
  let e = Yf();
  return e ? (f.scrollTo(e.x, e.y), !0) : !1;
}
function tp(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function np(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (tp(n, t), !0);
}
function rp(e, t, n) {
  n !== `preserve-scroll-position` &&
    He.render(
      () => {
        (n === `restore-scroll-position` && ep()) || np(e, t) || f.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function ip(e, t) {
  He.read(() => {
    f.scrollY === 0 &&
      f.scrollX === 0 &&
      He.render(
        () => {
          ep() || np(e, t);
        },
        !1,
        !0
      );
  });
}
function ap(e) {
  let t = CC().scrollRestoration,
    n = _(void 0),
    r = _(!1),
    a = !(!t || e),
    o = u(
      (e) => {
        ((n.current = e), a && (r.current = !0));
      },
      [a]
    ),
    s = u((e, t = !1) => {
      r.current || Zf(e, t);
    }, []),
    c = u(() => {
      a && (r.current = !0);
    }, [a]),
    l = u(() => n.current !== void 0 || r.current, []),
    d = u((e, t) => {
      let i = n.current;
      i &&
        i.routeId === e &&
        i.remountKey === t &&
        ((n.current = void 0), (r.current = !1), rp(i.hash, i.shouldSmoothScroll, i.behavior));
    }, []);
  return (
    i(() => {
      if (a) return Gf(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: d,
    }
  );
}
function op({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: a } = n;
  return (
    i(() => {
      r(e, t);
    }),
    N(() => {
      a && ip(f.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function sp() {
  let [e, t] = M.useState(0);
  return [e, M.useCallback(() => t((e) => e + 1), [])];
}
function cp({ children: e, loadSnippetsModule: t }) {
  return /* @__PURE__ */ E(sT.Provider, { value: t, children: e });
}
function lp() {
  return M.useContext(sT);
}
function up(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function dp(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (H(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (H(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      U(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await fp(a.createContextualFragment(e), r, i));
}
async function fp(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = pp(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await fp(r, e, null)));
  }
}
function pp(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return mp(r, t, n);
}
function mp(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function hp(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = rT), (n = iT));
      break;
    case `bodyEnd`:
      ((t = aT), (n = oT));
      break;
    case `headStart`:
      ((t = $w), (n = eT));
      break;
    case `headEnd`:
      ((t = tT), (n = nT));
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function gp(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = up(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function _p(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = hp(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = gp(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((vp(t, o), s)) {
      await dp(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = up(e.id),
      u = `${c}\n${e.code}\n${l}`,
      d = bp(e.id, n, r, i);
    d ? await dp(u, d, `afterend`) : await dp(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function vp(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (yp(n) && n.remove(), (n = e));
  }
}
function yp(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function bp(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = gp(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function xp() {
  let e = lp();
  return u(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(Zw)?.dataset[Qw] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await _p(t, n, r);
      }
    },
    [e]
  );
}
function Sp(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function Cp({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: s,
}) {
  if (!e || !t || !n || !r) return;
  let c,
    l = [],
    u = o.find((e) => e.id === Cv),
    { path: d } = await jr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
  d && (c = Sp(d, e));
  let p;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o, isMissingInLocale: c } = await jr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
    if (!o || c) continue;
    let d = Sp(o, e);
    (l.push({ href: d, hrefLang: n.code }), n.id === "default" && (p = d));
  }
  return (
    p && l.push({ href: p, hrefLang: `x-default` }),
    () => {
      (li(c, f.location.href), ui(l));
    }
  );
}
function wp({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = rr(),
    l = xp();
  N(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && Nu(e);
        }),
        d)
      : ((e.id === t.id
          ? /* @__PURE__ */ xr()
          : jr({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === Cv),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: c,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!u) return;
            let f = d ? d.pathVariables : n;
            if ((await l(i, f ?? {}, t, a), !u)) return;
            let p = await Cp({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: c,
            });
            u && p?.();
          })
          .catch((e) => {
            u && Nu(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function Tp(e) {
  if (!e) return bt;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Ep(e) {
  let t = ki(e),
    n = _(void 0),
    r = u(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: u(
      async (e, i, a, o = !0) => {
        r();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = In(c);
        if ((i.promise.finally(l), a === void 0)) return (e(c), i.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(bt);
        if ((t(d, s, a), e(c), await i.promise, c?.aborted)) return;
        let p = f.navigation?.transition;
        u();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || ky();
      },
      [r, t]
    ),
    cancelPendingNavigation: r,
  };
}
function Dp({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: a,
  collectionUtils: o,
  routes: s,
  initialLocaleId: c,
  initialCollectionItemId: p,
  initialContentLocaleIdOverride: m,
  locales: h = Sv,
  initialCanonicalPathVariables: g,
  preserveQueryParams: v = !1,
  LayoutTemplate: y,
  EditorBar: b,
  siteCanonicalURL: x,
  adaptLayoutToTextDirection: S,
}) {
  va();
  let T = C(() => Ba(s), [s]),
    D = u((e) => s[T(e)], [s, T]);
  wi({
    disabled: t,
    routeId: r,
    initialPathVariables: n,
    initialLocaleId: c,
    initialContentLocaleId: m,
    initialCanonicalPathVariables: g,
  });
  let O = si(),
    [k, A] = sp(),
    j = fi(`framer-route-change`),
    M = C(() => (!CC().synchronousNavigationOnDesktop || !vr() ? l : (e) => e()), []),
    ee = _(!0),
    P = _(),
    F = _(0),
    te = _(r),
    ne = _(n),
    re = _(),
    ie = _(c),
    ae = ap(t),
    { isNavigationCommitPending: oe, usesCustomScrollRestoration: se } = ae,
    { startNavigation: ce, cancelPendingNavigation: le } = Ep(se),
    ue = rr(),
    de = ae.scheduleScroll,
    fe = ie.current,
    pe = te.current,
    me = ne.current,
    he = s[pe],
    I = he?.path;
  if (!he) throw Error(`Router cannot find route for ${pe}`);
  let ge = C(() => h.find(({ id: e }) => e === Cv), [h]),
    L = C(() => h.find(({ id: e }) => (fe ? e === fe : e === "default")) ?? null, [fe, h]),
    {
      contentLocale: _e,
      currentCanonicalPathVariables: ve,
      pageExistsInCurrentLocale: R,
      setRouteContentState: ye,
    } = kp({
      activeLocale: L,
      currentRoute: he,
      initialCanonicalPathVariables: g,
      initialContentLocaleIdOverride: m,
      locales: h,
      routes: s,
    }),
    be = L?.textDirection ?? `ltr`,
    xe = S ? be : `ltr`;
  i(() => {
    S && document.documentElement.setAttribute(`dir`, be);
  }, [be, S]);
  let Se = L?.code;
  i(() => {
    Se && document.documentElement.setAttribute(`lang`, Se);
  }, [Se]);
  let Ce = Di(),
    we = C(
      () => ({
        activeLocale: L,
        contentLocale: _e,
        locales: h,
        setLocale: async (e) => {
          let n = ++F.current,
            r = j({ localized: !0 });
          if ((await ly({ priority: `user-blocking`, continueAfter: `paint` }), n !== F.current)) {
            r.ignore?.();
            return;
          }
          let i;
          z(e) ? (i = e) : V(e) && (i = e.id);
          let a = h.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = te.current,
            c = s[o];
          if (!c) {
            r.ignore?.();
            return;
          }
          let l = ea(x);
          try {
            let e = await Ce({
              currentLocale: L,
              nextLocale: a,
              route: c,
              routeId: o,
              defaultLocale: ge,
              pathVariables: ne.current,
              preserveQueryParams: v,
              sitePrefix: l,
            });
            if (!e || n !== F.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && l + e.path,
              { contentLocaleId: s, canonicalPathVariables: u } = await Pr({
                activeLocale: a,
                defaultLocale: ge,
                collectionUtilsCache: ue,
                locales: h,
                pathVariables: e.pathVariables,
                route: c,
                routeId: o,
              });
            if (n !== F.current) {
              r.ignore?.();
              return;
            }
            ((ee.current = !1),
              (ie.current = a.id),
              (P.current = i),
              (ne.current = e.pathVariables),
              ye(s, u));
            let d = c.path && e.pathVariables ? Ff(c.path, e.pathVariables) : c.path;
            (de({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              ce(
                () => {
                  O(o, o, () => M(A));
                },
                r,
                t
                  ? void 0
                  : i
                    ? () => {
                        Vf({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: s,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [L, ge, _e, t, A, h, v, ye, s, de, ce, O, j, M, Ce, ue, x]
    ),
    Te = u(
      (e, t, n, r, i, a, o, c, l, u, d) => {
        ee.current = !1;
        let f = te.current,
          p = s[e],
          m = Fn(p, n),
          h = p?.path && i ? Ff(p.path, i) : p?.path;
        ((te.current = e),
          (ie.current = t),
          (ne.current = i),
          (re.current = void 0),
          ye(a, o),
          (P.current = r),
          de({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: u ?? !1,
            behavior: c
              ? se
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          c
            ? (le(), M(A))
            : ce(
                (t) => {
                  O(f, e, () => M(A), t);
                },
                l,
                d,
                !0
              ));
      },
      [A, ye, s, se, de, ce, O, M, le]
    );
  (Ti(ae, te, Te),
    N(() => {
      if (t) return;
      let e = () => {
        let e = mi(),
          t = f.location.hash === `` ? void 0 : f.location.hash.slice(1);
        (e && Fn(s[e.routeId], e.hash) === t) ||
          Si({
            ...(e ||
              (_i() ?? { routeId: te.current, pathVariables: ne.current, localeId: ie.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (f.addEventListener(`hashchange`, e), () => f.removeEventListener(`hashchange`, e));
    }, [t, s]));
  let Ee = u(
      async (e, n, r, i, a) => {
        let o = T(e),
          c = s[o],
          l = fn(c?.page) ? c.page.getStatus() : void 0,
          u = l?.hasRendered,
          d = j({ cached: u, preloaded: u ? void 0 : l?.hasLoaded }),
          f = Tp(a);
        if (
          (ly({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(f),
          await ly({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = /* @__PURE__ */ new Set(),
            t = c?.path ?? `/`;
          for (let n of t.matchAll(dy)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let p = Fn(c, n),
          m = ne.current,
          g = ie.current;
        if (
          re.current === void 0 &&
          zf({ routeId: te.current, pathVariables: m }, { routeId: o, pathVariables: r })
        ) {
          let e = oe();
          if (e) {
            let e = c?.path && r ? Ff(c.path, r) : c?.path;
            de({
              routeId: o,
              remountKey: `${g}${e}`,
              hash: p,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else le();
          (d.ignore?.(), !e && se && rp(p, i, `scroll-to-hash-or-top`));
          let a = s[o];
          (!t &&
            a &&
            Uf(
              o,
              a,
              {
                currentRoutePath: a.path,
                currentRoutePathLocalized: a.pathLocalized,
                currentPathVariables: m,
                pathVariables: r,
                hash: n,
                localeId: g,
                preserveQueryParams: v,
                siteCanonicalURL: x,
              },
              f
            ),
            !e && !se && rp(p, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!c) return;
        let _ = s[te.current],
          y =
            ea(x) +
            ra(c, {
              currentRoutePath: _?.path,
              currentRoutePathLocalized: _?.pathLocalized,
              currentPathVariables: m,
              hash: n,
              pathVariables: r,
              localeId: g,
              localeSlug: h.find(({ id: e }) => e === g)?.slug,
              preserveQueryParams: v,
              relative: !1,
              siteCanonicalURL: x,
            }),
          b = {};
        re.current = b;
        let { contentLocaleId: S, canonicalPathVariables: C } = await Pr({
          activeLocale: L,
          defaultLocale: ge,
          collectionUtilsCache: ue,
          locales: h,
          pathVariables: r,
          route: c,
          routeId: o,
        });
        re.current === b &&
          Te(
            o,
            g,
            n,
            y,
            r,
            S,
            C,
            !1,
            d,
            i,
            t
              ? void 0
              : () => {
                  (f(),
                    Hf(o, c, {
                      historyPath: y,
                      currentRoutePath: _?.path,
                      hash: n,
                      pathVariables: r,
                      contentLocaleId: S,
                      canonicalPathVariables: C,
                      localeId: g,
                    }));
                }
          );
      },
      [le, T, s, h, Te, t, v, x, j, se, oe, de, ue, ge, L]
    ),
    De = P.current,
    Oe = qw(he, pe, De, me, L, p),
    ke = ee.current;
  wp({
    activeLocale: L,
    contentLocale: _e,
    currentPathVariables: me,
    currentRoute: he,
    currentRouteId: pe,
    isInitialNavigation: ke,
    locales: h,
    siteCanonicalURL: x,
  });
  let Ae = C(
      () => ({
        navigate: Ee,
        getRoute: D,
        currentRouteId: pe,
        currentPathVariables: me,
        currentCanonicalPathVariables: ve,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: v,
        pageviewEventData: Oe,
        siteCanonicalURL: x,
        isInitialNavigation: ke,
      }),
      [Ee, D, pe, me, ve, s, o, v, x, Oe, ke]
    ),
    je = I && me ? Ff(I, me) : I,
    Me = `${fe}${je}`,
    Ne = zo(() => ({ ...e, display: `contents` }));
  return /* @__PURE__ */ E(On, {
    api: Ae,
    children: /* @__PURE__ */ E(my.Provider, {
      value: we,
      children: /* @__PURE__ */ E(hy.Provider, {
        value: xe,
        children: /* @__PURE__ */ E(UC, {
          children: /* @__PURE__ */ E(Bi, {
            routerRenderKey: k,
            currentRouteId: pe,
            isNavigationCommitPending: ae.isNavigationCommitPending,
            children: /* @__PURE__ */ w(If, {
              currentRoutePath: je,
              routerAPI: Ae,
              children: [
                b && /* @__PURE__ */ E(Pf, { EditorBar: b, fast: !0 }),
                /* @__PURE__ */ E(EC, {
                  children: /* @__PURE__ */ w(ju, {
                    children: [
                      /* @__PURE__ */ E(ab.Start, {}),
                      /* @__PURE__ */ E(op, {
                        currentRouteId: pe,
                        remountKey: Me,
                        scrollRestoration: ae,
                      }),
                      /* @__PURE__ */ E(sb, {
                        notFoundPage: a,
                        defaultPageStyle: e,
                        routerRenderKey: k,
                        children: /* @__PURE__ */ E(Op, {
                          LayoutTemplate: y,
                          webPageId: he?.abTestingVariantId ?? pe,
                          style: e,
                          children: (t) =>
                            /* @__PURE__ */ E(
                              d,
                              { children: R ? Ca(he.page, t ? Ne : e) : a && Ca(a, e) },
                              Me
                            ),
                        }),
                      }),
                      b && /* @__PURE__ */ E(Pf, { EditorBar: b }),
                      /* @__PURE__ */ E(ma, {}),
                      /* @__PURE__ */ E(ab.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function Op({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? /* @__PURE__ */ E(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function kp({
  activeLocale: e,
  currentRoute: t,
  initialCanonicalPathVariables: n,
  initialContentLocaleIdOverride: r,
  locales: i,
  routes: a,
}) {
  let o = _(n),
    s = _(r),
    c = s.current,
    l = !e || !t.includedLocales || t.includedLocales.includes(e.id),
    d = C(() => {
      if (!e) return null;
      let n;
      return (
        (n = l
          ? (c ?? t?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(a).find((e) => e.path && qy.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        n ? (i.find(({ id: e }) => e === n) ?? e) : e
      );
    }, [e, t, i, c, l, a]),
    f = u((e, t) => {
      ((s.current = e), (o.current = t));
    }, []);
  return {
    contentLocale: d,
    currentCanonicalPathVariables: o.current,
    pageExistsInCurrentLocale: l,
    setRouteContentState: f,
  };
}
function Ap(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function jp(e) {
  return typeof e == `object` && !!e;
}
function Mp(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!jp(r)) return;
    r = r[e];
  }
  return r;
}
function Np(e) {
  return `${e.credentials}:${e.url}`;
}
function Pp(e) {
  return z(e) && !Number.isNaN(Number(e));
}
function Fp(e, t) {
  switch (e) {
    case `string`:
      return z(t) || B(t);
    case `color`:
      return z(t);
    case `boolean`:
      return Ye(t);
    case `number`:
      return B(t) || Pp(t);
    case `link`:
    case `image`:
      return z(t) && dd(t, !1);
    default:
      return !1;
  }
}
function Ip(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = Mp(e.data, t.resultKeyPath);
  if (Qe(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Fp(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Lp(e) {
  return Math.max(e * 1e3, lT);
}
function Rp(e, t) {
  if (W.current() === W.canvas) return !1;
  let n = Lp(t);
  return Date.now() >= e + n;
}
function zp({ client: e, children: t }) {
  return /* @__PURE__ */ E(hT.Provider, { value: e, children: t });
}
function Bp(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: d,
    isReducedMotion: f = !1,
    skipAnimations: p = !1,
    includeDataObserver: m = !1,
    localeId: h,
    locales: g,
    preserveQueryParams: _,
    EditorBar: v,
    defaultPageStyle: y,
    disableHistory: b,
    LayoutTemplate: x,
    siteCanonicalURL: S,
    adaptLayoutToTextDirection: C,
    loadSnippetsModule: w,
    initialCollectionItemId: T,
    initialContentLocaleIdOverride: D,
  } = e;
  if (
    (M.useEffect(() => {
      n || Ib.start();
    }, []),
    n)
  )
    return /* @__PURE__ */ E(Mi, {
      value: r ?? `preview`,
      children: /* @__PURE__ */ E(Ce, {
        reducedMotion: p ? `always` : f ? `user` : `never`,
        skipAnimations: p,
        children: /* @__PURE__ */ E(nr, {
          collectionUtils: l,
          children: /* @__PURE__ */ E(zp, {
            client: u,
            children: /* @__PURE__ */ E(mT, {
              children: /* @__PURE__ */ E(Rw.Provider, {
                value: a,
                children: /* @__PURE__ */ E(cp, {
                  loadSnippetsModule: w,
                  children: /* @__PURE__ */ E(Dp, {
                    initialRoute: i,
                    initialPathVariables: o,
                    initialCanonicalPathVariables: s,
                    initialLocaleId: h,
                    initialCollectionItemId: T,
                    initialContentLocaleIdOverride: D,
                    routes: c,
                    collectionUtils: l,
                    notFoundPage: d,
                    locales: g,
                    defaultPageStyle: y ?? { minHeight: `100vh`, width: `auto` },
                    preserveQueryParams: _,
                    EditorBar: v,
                    disableHistory: b,
                    LayoutTemplate: x,
                    siteCanonicalURL: S,
                    adaptLayoutToTextDirection: C,
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  {
    let e = m ? jS : M.Fragment;
    return /* @__PURE__ */ E(e, {
      children: /* @__PURE__ */ E(An, {
        routes: c,
        children: /* @__PURE__ */ E(vS, {
          children: M.isValidElement(t) ? t : M.createElement(t, { key: i }),
        }),
      }),
    });
  }
}
function Vp(e, t) {
  let n = kn(),
    { activeLocale: r } = Fr(),
    i = $d();
  return Pi(() => {
    let t = [],
      a = (e) => {
        if (e)
          return z(e) || sd(e)
            ? gf(e, n, void 0, void 0, r, o)
            : gf(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function Hp(e) {
  return {
    trace(...t) {
      return Zb.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return Zb.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return Zb.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return Zb.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return Zb.getLogger(e)?.error(...t);
    },
    get enabled() {
      return Zb.getLogger(e) !== void 0;
    },
  };
}
function Up() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function Wp() {
  var e =
      typeof SuppressedError == `function`
        ? SuppressedError
        : function (e, t) {
            var n = Error();
            return ((n.name = `SuppressedError`), (n.error = e), (n.suppressed = t), n);
          },
    t = {},
    n = [];
  function r(e, t) {
    if (t != null) {
      if (Object(t) !== t)
        throw TypeError(
          `using declarations can only be used with objects, functions, null, or undefined.`
        );
      if (e) var r = t[Symbol.asyncDispose || Symbol.for(`Symbol.asyncDispose`)];
      if (r === void 0 && ((r = t[Symbol.dispose || Symbol.for(`Symbol.dispose`)]), e)) var i = r;
      if (typeof r != `function`) throw TypeError(`Object is not disposable.`);
      (i &&
        (r = function () {
          try {
            i.call(t);
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        n.push({ v: t, d: r, a: e }));
    } else e && n.push({ d: t, a: e });
    return t;
  }
  return {
    e: t,
    u: r.bind(null, !1),
    a: r.bind(null, !0),
    d: function () {
      var r,
        i = this.e,
        a = 0;
      function o() {
        for (; (r = n.pop());)
          try {
            if (!r.a && a === 1) return ((a = 0), n.push(r), Promise.resolve().then(o));
            if (r.d) {
              var e = r.d.call(r.v);
              if (r.a) return ((a |= 2), Promise.resolve(e).then(o, s));
            } else a |= 1;
          } catch (e) {
            return s(e);
          }
        if (a === 1) return i === t ? Promise.resolve() : Promise.reject(i);
        if (i !== t) throw i;
      }
      function s(n) {
        return ((i = i === t ? n : new e(n, i)), o());
      }
      return o();
    },
  };
}
function Gp() {
  return _T.priority;
}
function Kp(e) {
  let t = _T;
  return (
    (_T = e),
    {
      [Up()]() {
        _T = t;
      },
    }
  );
}
function qp(e = _T.priority, t = _T.canYield) {
  if (!t || e === void 0) return;
  let n = Sr(e);
  return ly({ batch: !0, priority: n });
}
function Jp(e) {
  try {
    var t = Wp();
    t.u(Kp({ priority: _T.priority, canYield: !1 }));
    let n = e.next();
    return (H(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    t.e = e;
  } finally {
    t.d();
  }
}
async function Yp(e, t, n = _T.priority, r = _T.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0)
    try {
      var o = Wp();
      (o.u(Kp(i)), (a = e.next()));
    } catch (e) {
      o.e = e;
    } finally {
      o.d();
    }
  for (; !a.done;)
    try {
      var s = Wp();
      let t = await a.value,
        o = qp(n, r);
      (o && (await o), s.u(Kp(i)), (a = e.next(t)));
    } catch (e) {
      s.e = e;
    } finally {
      s.d();
    }
  return a.value;
}
function Xp(e, t = _T.priority, n = _T.canYield) {
  try {
    var r = Wp();
    r.u(Kp({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : Yp(e, i, t, n);
  } catch (e) {
    r.e = e;
  } finally {
    r.d();
  }
}
function* Zp(e, t = _T.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (nt(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Yp(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Qp(e, t = _T.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = qp(t);
    r && (yield r);
    let o = e[a];
    if (nt(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Yp(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function $p(e) {
  return nm(e) || am(e);
}
function em(e) {
  return Xe(e) && e.every(V);
}
function tm(e) {
  return V(e) && Je(e.read) && Je(e.preload);
}
function nm(e) {
  return em(e) || tm(e);
}
function rm(e) {
  return V(e) && V(e.schema);
}
function im(e) {
  return V(e) && V(e.collectionByLocaleId);
}
function am(e) {
  return rm(e) || im(e);
}
async function om(e, t) {
  return tm(e) ? (await e.preload(t), e.read(t)) : e;
}
function sm(e) {
  return e.includes(xT);
}
function cm(e) {
  if (!am(e) || !e.id) return;
  let t = yT.get(e.id);
  if (!t) return (yT.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function lm(e) {
  let t = cm(e);
  if (t) return t;
  let n = bT.get(e);
  if (n) return n;
  let r = `${xT}${Math.random().toString(16).slice(2)}`;
  return (bT.set(e, r), r);
}
function um(e, t) {
  let n = e.from;
  for (; n?.type === `LeftJoin`;) n = n.left;
  if (n?.type === `Collection`) return dm(n.data, t);
}
function dm(e, t) {
  if (nm(e)) {
    let n = lm(e) + (t?.id ?? `default`),
      r = ST.get(n);
    if (r) return r;
    let i = new vT(e, t);
    return (ST.set(n, i), i);
  }
  if (rm(e)) return e;
  if (im(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  U(e, `Unsupported collection type`);
}
function fm(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Vm(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function pm(e, t) {
  return e?.type === `array`
    ? { type: `array`, value: e.value.map((e) => CT.cast(e, t.definition)) }
    : null;
}
function mm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function hm(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function gm(e) {
  return hm(e)?.value ?? !1;
}
function _m(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function vm(e) {
  return e?.type === `color` ? e : null;
}
function ym(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function bm(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return tt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function xm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Sm(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Cm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function wm(e) {
  return e?.type === `file` ? e : null;
}
function Tm(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Em(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Dm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Om(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function km(e) {
  return Om(e)?.value ?? null;
}
function Am(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = Vm(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function jm(e, t) {
  if (e?.type === `object`) {
    let n = {},
      r = Object.entries(t.definitions);
    for (let [t, i] of r) {
      let r = e.value[t] ?? null;
      n[t] = CT.cast(r, i);
    }
    return { type: `object`, value: n };
  }
  return null;
}
function Mm(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Nm(e) {
  return e?.type === `responsiveimage` ? e : null;
}
function Pm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Fm(e) {
  return e?.type === `richtext` ? e : null;
}
function Im(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Lm(e) {
  return e?.type === `vectorsetitem` ? e : null;
}
function Rm(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function zm(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Bm(e) {
  return zm(e)?.value ?? null;
}
function Vm(e, t, n) {
  if ($e(e) || $e(t)) return (H(e === t), 0);
  switch (e.type) {
    case `array`:
      return (H(e.type === t.type), fm(e, t, n));
    case `boolean`:
      return (H(e.type === t.type), mm(e, t));
    case `color`:
      return (H(e.type === t.type), _m(e, t));
    case `date`:
      return (H(e.type === t.type), ym(e, t));
    case `enum`:
      return (H(e.type === t.type), xm(e, t));
    case `file`:
      return (H(e.type === t.type), Cm(e, t));
    case `link`:
      return (H(e.type === t.type), Tm(e, t));
    case `number`:
      return (H(e.type === t.type), Dm(e, t));
    case `object`:
      return (H(e.type === t.type), Am(e, t, n));
    case `responsiveimage`:
      return (H(e.type === t.type), Mm(e, t));
    case `richtext`:
      return (H(e.type === t.type), Pm(e, t));
    case `vectorsetitem`:
      return (H(e.type === t.type), Im(e, t));
    case `string`:
      return (H(e.type === t.type), Rm(e, t, n));
    default:
      U(e);
  }
}
function Hm(e) {
  return e;
}
function Um(e) {
  return Je(e.getHash);
}
function Y(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    V(r) && Um(r) ? (n += r.getHash()) : (n += JSON.stringify(r) ?? ``);
  }
  return Hm(`${n})`);
}
function Wm(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function Gm(e) {
  if (e !== void 0) return Sr(e);
}
function Km(e, t) {
  return { collectionId: lm(e), pointer: t };
}
function qm(e) {
  return V(e) && z(e.collectionId);
}
function Jm(e, t) {
  return { collectionId: lm(e), pointer: t };
}
function Ym(e) {
  return V(e) && z(e.collectionId);
}
function Xm(e, t) {
  let n = /* @__PURE__ */ new Map();
  function r(e) {
    if (V(e)) {
      if (e.type === `Collection` && $p(e.data)) {
        let r = dm(e.data, t),
          i = lm(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    } else if (Xe(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Zm(e) {
  return e;
}
function Qm(e) {
  return e;
}
function $m(e) {
  return e;
}
function eh() {
  return 25;
}
function th() {
  return 12500;
}
function nh(e) {
  return Array(e).fill({ type: `All` });
}
function rh(e) {
  return e;
}
function ih(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new jE(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function ah(e) {
  let t = /* @__PURE__ */ new Set();
  if (!e) return t;
  ih(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (ih(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function oh(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) oh(n, t);
      return;
    case `object`:
      for (let n in e.value) oh(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function sh(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function ch(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function lh(e) {
  return `${e.functionName}(${e.arguments.map((e) => mh(e)).join(`, `)})`;
}
function uh(e) {
  let t = `CASE`;
  e.value && (t += ` ${mh(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${mh(n.when)} THEN ${mh(n.then)}`;
  return (e.else && (t += ` ELSE ${mh(e.else)}`), (t += ` END`), t);
}
function dh(e) {
  let t = mh(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function fh(e) {
  let t = mh(e.left),
    n = mh(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function ph(e) {
  return `CAST(${mh(e.value)} as ${e.dataType})`;
}
function mh(e) {
  switch (e.type) {
    case `Identifier`:
      return sh(e);
    case `LiteralValue`:
      return ch(e);
    case `FunctionCall`:
      return lh(e);
    case `Case`:
      return uh(e);
    case `UnaryOperation`:
      return dh(e);
    case `BinaryOperation`:
      return fh(e);
    case `TypeCast`:
      return ph(e);
    case `Select`:
      return `${yh(e)}`;
    default:
      U(e);
  }
}
function hh(e) {
  return rm(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function gh(e) {
  let t = `${_h(e.left)} LEFT JOIN ${_h(e.right)}`;
  return (e.constraint && (t += ` ON ${mh(e.constraint)}`), t);
}
function _h(e) {
  switch (e.type) {
    case `Collection`:
      return hh(e);
    case `LeftJoin`:
      return gh(e);
    default:
      U(e);
  }
}
function vh(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `\n${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `\n\t${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function yh(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = mh(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${_h(e.from)}`),
    e.where && (t += ` WHERE ${mh(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${mh(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${mh(e.limit)}`),
    e.offset && (t += ` OFFSET ${mh(e.offset)}`),
    vh(t)
  );
}
function bh(e) {
  return V(e) && e.type === `Collection`;
}
function xh(e, t) {
  return bh(t) && $p(t.data) ? lm(t.data) : t;
}
function Sh(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, xh) + n;
}
function Ch(e) {
  let { activeLocale: t } = Fr();
  return YE.get(e, t).use();
}
function wh(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(Qe(e) || V(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function Th(e) {
  let t = _(e.variableType);
  return $E[t.current](e);
}
function Eh({
  allItemsLabel: e,
  booleanTrueLabel: t,
  booleanFalseLabel: n,
  isOptional: r,
  setValue: i,
  value: a,
}) {
  return [
    C(() => (a === !0 ? ZE : a === !1 ? QE : r ? XE : ZE), [r, a]),
    C(
      () =>
        jh(
          [
            { disabled: !1, title: t, type: `option`, value: ZE },
            { disabled: !1, title: n, type: `option`, value: QE },
          ],
          r,
          e,
          !1
        ),
      [e, t, n, r]
    ),
    u(
      (e) => {
        if (!(e.target instanceof HTMLSelectElement)) return;
        let t = e.target.value;
        l(() => {
          t === XE ? i(void 0) : t === ZE ? i(!0) : t === QE && i(!1);
        });
      },
      [i]
    ),
  ];
}
function Dh({
  allItemsLabel: e,
  collectionData: t,
  isOptional: n,
  slugId: r,
  titleId: i,
  setValue: a,
  value: o,
}) {
  return Ah({
    allItemsLabel: e,
    isOptional: n,
    selectOptions: kh({ collectionData: t, slugId: r, titleId: i }),
    setValue: a,
    value: Ye(o) ? void 0 : o,
  });
}
function Oh({
  allItemsLabel: e,
  options: t,
  getOptionTitle: n,
  isOptional: r,
  setValue: i,
  value: a,
}) {
  let { activeLocale: o } = Fr();
  return Ah({
    allItemsLabel: e,
    isOptional: r,
    selectOptions: C(() => {
      if (t) return t.map((e) => ({ type: `option`, value: e, title: n?.(e, o) ?? `` }));
    }, [o, t, n]),
    setValue: i,
    value: z(a) ? a : void 0,
  });
}
function kh({ collectionData: e, slugId: t, titleId: n }) {
  let r = Ch(
    C(
      () => ({
        from: { type: `Collection`, data: e },
        select: [
          { type: `Identifier`, name: `id` },
          { type: `Identifier`, name: t },
          ...(n ? [{ type: `Identifier`, name: n }] : []),
        ],
      }),
      [e, t, n]
    )
  );
  return C(() => {
    if (Array.isArray(r) && r.length !== 0)
      return r
        .filter((e) => typeof e?.id == `string`)
        .flatMap((e) => {
          let r = e.id,
            i = n && z(e[n]) ? e[n] : void 0,
            a = z(e[t]) ? e[t] : void 0,
            o = i || a;
          return o ? [{ type: `option`, value: r, title: o }] : [];
        });
  }, [r, n, t]);
}
function Ah({ allItemsLabel: e, isOptional: t, selectOptions: n, setValue: r, value: i }) {
  return [
    i === void 0 ? XE : i,
    C(() => jh(n, t, e), [e, t, n]),
    u(
      (e) => {
        if (!(e.target instanceof HTMLSelectElement)) return;
        let t = e.target.value;
        l(() => {
          r(t === XE ? void 0 : t);
        });
      },
      [r]
    ),
  ];
}
function jh(e, t, n, r = !0) {
  if (t !== !0 || !n) return e;
  let i = { title: n, type: `option`, value: XE };
  return !e || e.length === 0 ? [i] : r ? [i, { type: `divider` }, ...e] : [i, ...e];
}
function Mh(e) {
  let t = _(e);
  return (
    c(() => {
      t.current = e;
    }, [e]),
    Fi((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function Nh(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function Ph() {
  return /* @__PURE__ */ new Set();
}
function Fh(e) {
  let t = zo(Ph),
    n = zo(Ph);
  return (
    zc(() => () => Nh(n, t)),
    N(() => () => Nh(n, t), []),
    N(() => {
      Nh(n, t);
    }, [e]),
    _({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Ih(e, t, n) {
  return M.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Lh(e) {
  for (let [t, n] of Object.entries(e)) if (Ot.matchMedia(n).matches) return t;
}
function Rh(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && Ot.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function zh(e, n, r = !0) {
  let i = t(hS),
    a = Uo(),
    o = st(),
    s = pr() && (!a || o),
    c = _(s ? (Lh(n) ?? e) : e),
    d = _(r && i ? e : c.current),
    f = Js(),
    p = ve(),
    m = u(
      (e) => {
        if (e !== c.current || e !== d.current) {
          function t() {
            ((c.current = d.current = e),
              l(() => {
                f();
              }));
          }
          a
            ? t()
            : p(() => {
                t();
              });
        }
      },
      [p, f, a]
    );
  return (
    Fy(() => {
      a && m(o ? (Lh(n) ?? e) : e);
    }, [e, o, a, n, m]),
    Fy(() => {
      r && i === !0 && m(c.current);
    }, []),
    N(() => {
      if (!s || o) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = Ot.matchMedia(r),
          i = (e) => {
            e.matches && m(t);
          };
        (Bh(n, i), e.push([n, i]));
      }
      let t = Lh(n);
      return (t && m(t), () => e.forEach(([e, t]) => Vh(e, t)));
    }, [o, n, m, s]),
    [c.current, d.current]
  );
}
function Bh(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Vh(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Hh(e) {
  setTimeout(e, 1);
}
function Uh(e) {
  let t = /* @__PURE__ */ new Set(),
    n = Rh(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Wh(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (Ct ? Ot.requestIdleCallback : Hh)(() => {
    document.querySelector(eD)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Wh(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Gh(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Wh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Gh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Kh(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function qh(e, t) {
  if (Ho()) return;
  let n = M.useRef(!0),
    r = M.useRef(t);
  (zc((t, i) => {
    let a = t && !i;
    if (!n.current && a) {
      let t = Kh(r.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    M.useEffect(() => {
      if (n.current) {
        let t = Kh(r.current, e);
        t && t();
      }
    }, [e]));
}
function Jh(e) {
  return V(e) && tD in e && e.page !== void 0;
}
function Yh(e, t) {
  return `${e}-${t}`;
}
function Xh(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (H(r !== void 0, `nextVariant should be defined`), r);
}
function Zh(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Qh(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function $h(e, t) {
  return t[e] || `framer-v-${e}`;
}
function eg(e, t, n) {
  return e && n.has(e) ? e : t;
}
function tg() {
  let e = _(),
    t = _(),
    n = u(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    N(
      () => () => {
        n();
      },
      [n]
    ),
    u(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function ng() {
  let e = _(),
    n = _(!1),
    r = _(),
    i = t(Qx);
  return (
    N(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    u(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = Mc(i, `undefined`, a.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function rg(e) {
  let t = tg(),
    n = ng();
  return u(
    (r, i = !1) => {
      St ? r() : t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function ig() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (iD = () => {
        (e(), (t = void 0));
      }));
  });
}
function ag(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (rD = ig()));
}
function og() {
  (performance.mark(`click-received-listener`), (rD = void 0), iD?.(), (iD = void 0));
}
function sg(e = !1) {
  N(() => {
    e &&
      (document.addEventListener(`pointerup`, ag, !0),
      document.__proto__.addEventListener.call(document, `click`, og, !0));
  }, [e]);
}
function cg({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: s,
}) {
  let c = Js(),
    d = ld(),
    f = zo(() => new Set(i));
  sg(CC().yieldOnTap);
  let p = rg(s),
    m = _({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: eg(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    h = u((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = eg(e, a, f),
        s = Qh(i?.[o], t, n, !1, r);
      return [o, s ? Yh(o, s) : void 0];
    }, []),
    g = u(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = h(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let u = CC().yieldOnTap && m.current.isPressedHasUpdated;
        (u &&
          rD &&
          (performance.mark(`wait-for-tap-start`),
          await rD,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          u &&
            (performance.mark(`yield-on-tap-start`),
            await ly({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: d,
          isPressed: f,
          isHoveredHasUpdated: g,
          isPressedHasUpdated: _,
        } = m.current;
        d || g || f || _ ? l(c) : p(() => l(c), i);
      },
      [h, c, p]
    ),
    v = u(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !d && CC().disableHoverOnMobile && !Zu() && (e = !1);
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          g(a, o, s, a, !1));
      },
      [g, d]
    ),
    y = u(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = m.current,
          o = e === nD ? Xh(r || [], i || n) : e;
        g(i, a, n, o, t, !0);
      },
      [g]
    ),
    b = u(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => l(c), !0));
    }, [c, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = h(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: O,
      loadedBaseVariant: k,
    } = m.current,
    A = Ih(m.current.baseVariant, m.current.gestureVariant, a);
  return C(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !O && !d && !!t && !k[x],
      r = n ? Yh(x, `loading`) : S;
    r && e.push(r);
    let i = T?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: Zh(m.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: A,
        gestureHandlers: a,
        classNames: Bl($h(x, o), Qh(i, E, D, n, O)),
      }
    );
  }, [x, S, E, D, k, A, y, w, T, v, b, o]);
}
function lg(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (CC().disableCustomCode) return e;
  if (!Fu()) return dg(e, r, t, n);
  let a = ug(e, r, t, n),
    o = !1;
  function s(r, s) {
    let c = zu();
    if (qu(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? /* @__PURE__ */ E(Ny.Provider, {
            value: n,
            children: /* @__PURE__ */ E(Iu, {
              getErrorMessage: Wu.bind(null, t, n),
              fallback: /* @__PURE__ */ E(e, { ...r, ref: s }),
              children: /* @__PURE__ */ E(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Pu(a.error), Pu(Wu(t, n)), Nu(a.error), !0)),
          /* @__PURE__ */ E(e, { ...r, ref: s }));
    if (a.status === `success`)
      return /* @__PURE__ */ E(Ny.Provider, {
        value: n,
        children: /* @__PURE__ */ E(a.Component, { ...r, ref: s }),
      });
    throw a.error;
  }
  return M.forwardRef(s);
}
function ug(e, t, n, r) {
  try {
    return { status: `success`, Component: dg(e, t, n, r) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function dg(e, t, n, r) {
  let i = aD.get(t);
  i || ((i = /* @__PURE__ */ new WeakMap()), aD.set(t, i));
  let a = i.get(e);
  a || ((a = /* @__PURE__ */ new Map()), i.set(e, a));
  let o = `${n}:${r}`;
  if (a.has(o)) return a.get(o);
  let s = t(e);
  return (a.set(o, s), s);
}
function fg(e) {
  let t = [];
  return (
    m.forEach(e, (e) => {
      T(e) && e.type === d ? t.push(...fg(e.props.children)) : e && t.push(e);
    }),
    t
  );
}
function pg(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function mg(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = pg(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[ee(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function hg(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = pg(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[ee(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function gg() {
  let e = t(oD);
  return (Ag(e, `useTicker must be used within a Ticker component`), e);
}
function _g() {
  let e = t(sD);
  return (Ag(e, `useTickerItem must be used within a TickerItem`), e);
}
function vg(e, t) {
  return (t?.offsetWidth ?? f.innerWidth) - (e.offsetLeft + e.offsetWidth);
}
function yg(e, t) {
  return e === `y` ? uD : t === `ltr` ? lD : dD;
}
function bg({
  children: e,
  offset: t,
  axis: n,
  listSize: r = 0,
  numItems: i,
  itemIndex: a,
  positionInSet: o,
  cloneIndex: s,
  bounds: c,
  alignItems: l,
  reproject: u = !0,
  size: d = `auto`,
  safeMargin: f,
}) {
  let { start: p, end: m } = c,
    { visibleLength: h, direction: g, inset: _ } = gg(),
    { sign: v } = yg(n, g),
    y = xe(() => {
      if (!u) return 0;
      let e = t.get();
      if ((!p && !m) || !r) return 0;
      if (e * v + c.end <= -_ - f) return r * v;
      if (f > 0) {
        let t = h - f - _;
        if (e * v + c.start >= t) return -r * v;
      }
      return 0;
    }),
    b = xe(() => {
      let e = t.get(),
        n = y.get();
      return (!p && !m) || !r ? 0 : e * v + p + n * v;
    }),
    x =
      s === void 0
        ? {
            "aria-hidden": !1,
            "aria-posinset": o ?? a + 1,
            "aria-setsize": i,
            "data-item-index": a,
          }
        : { "aria-hidden": !0 },
    S = d === `fill`,
    C = l === `stretch` ? `100%` : `fit-content`,
    w = {
      className: s === void 0 ? `ticker-item` : `clone-item`,
      style: {
        flexGrow: 0,
        flexShrink: 0,
        position: `relative`,
        flexBasis: d === `fill` ? `100%` : void 0,
        display: S ? `grid` : void 0,
        gridTemplateColumns: S ? `1fr` : void 0,
        gridTemplateRows: S ? `1fr` : void 0,
        minWidth: S ? 0 : void 0,
        minHeight: S ? 0 : void 0,
        height: n === `x` ? C : void 0,
        width: n === `y` ? C : void 0,
        x: n === `x` ? y : 0,
        y: n === `y` ? y : 0,
      },
      ...x,
    };
  return /* @__PURE__ */ E(sD.Provider, {
    value: { start: p, end: m, offset: b, projection: y, itemIndex: a, cloneIndex: s, props: w },
    children: d === `manual` ? e : /* @__PURE__ */ E(xg, { children: e }),
  });
}
function xg({ children: e }) {
  let { props: t } = _g();
  return /* @__PURE__ */ E(Ue.li, { ...t, children: e });
}
function Sg(e, t, n, r, i) {
  let a = _(!1);
  N(() => {
    let o = e.current;
    if (!o) return;
    let s = !1,
      c = new AbortController(),
      l = { signal: c.signal },
      u = { ...l, capture: !0 },
      d = t === `x` ? `scrollLeft` : `scrollTop`,
      p = t === `x` ? `offsetLeft` : `offsetTop`,
      m = t === `x` ? `ArrowLeft` : `ArrowUp`,
      h = t === `x` ? `ArrowRight` : `ArrowDown`,
      g = [],
      _ = 0,
      v = () => {
        let e = g[_];
        e &&
          (e.focus({ preventScroll: !0 }),
          n.set(-e[p]),
          (o[d] = 0),
          He.render(() => {
            o[d] = 0;
          }));
      },
      y = (e) => {
        if (e.key === `Tab`) {
          (e.preventDefault(), S());
          let t = Array.from(
            document.querySelectorAll(
              `a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`
            )
          ).filter(wg);
          t.sort(Cg);
          let n = t[e.shiftKey ? 0 : t.length - 1],
            r = e.shiftKey ? t.length - 1 : 0;
          if (o.contains(n)) {
            t[r].focus();
            return;
          }
          {
            let n = t.indexOf(g[_]),
              r = e.shiftKey ? -1 : 1;
            for (let e = n; e < t.length && e >= 0; e += r) {
              let n = t[e];
              if (!o.contains(n)) {
                n.focus();
                return;
              }
            }
          }
        } else (e.key === m ? _-- : e.key === h && _++, (_ = ee(0, g.length, _)), v());
      },
      b = () => {
        a.current ||
          ((g = Array.from(
            o.querySelectorAll(
              `.ticker-item a, .ticker-item button, .ticker-item input, .ticker-item textarea, .ticker-item select, .ticker-item [tabindex]:not([tabindex="-1"]), .ticker-item [contenteditable="true"]`
            )
          ).filter(wg)),
          (_ = 0),
          g.length &&
            (i(!0),
            (a.current = !0),
            v(),
            f.addEventListener(`focus`, x, u),
            f.addEventListener(`blur`, x, u),
            o.addEventListener(`keydown`, y, l)));
      },
      x = (e) => {
        (!e.target || !(e.target instanceof HTMLElement) || !o.contains(e.target)) && S();
      },
      S = () => {
        a.current &&
          ((a.current = !1),
          i(!1),
          r.set(n.get()),
          f.removeEventListener(`focus`, x),
          f.removeEventListener(`blur`, x),
          o.removeEventListener(`keydown`, y));
      },
      C = (e) => {
        let { target: t } = e;
        wg(t) && (a.current || b());
      },
      w = () => {
        s || ((s = !0), o.addEventListener(`focus`, C, u), f.addEventListener(`pointermove`, T, l));
      },
      T = () => {
        s &&
          ((s = !1),
          o.removeEventListener(`focus`, C, !0),
          f.removeEventListener(`pointermove`, T, l));
      };
    return (
      f.addEventListener(`keydown`, w, l),
      o.addEventListener(
        `pointerdown`,
        (e) => {
          let t = e.target.closest(`[aria-hidden="true"]`);
          t && t.removeAttribute(`aria-hidden`);
        },
        l
      ),
      o.addEventListener(
        `scroll`,
        () => {
          ((o.scrollLeft = 0), (o.scrollTop = 0));
        },
        l
      ),
      () => {
        (c.abort(), S());
      }
    );
  }, []);
}
function Cg(e, t) {
  return e.tabIndex >= 1 && t.tabIndex >= 1
    ? e.tabIndex - t.tabIndex
    : e.tabIndex >= 1 && t.tabIndex <= 0
      ? -1
      : +(t.tabIndex >= 1 && e.tabIndex <= 0);
}
function wg(e) {
  return e instanceof HTMLElement;
}
function Tg(e) {
  return e.end - e.start;
}
function Eg(e) {
  return e[e.length - 1].end - e[0].start;
}
function Dg(e, t, n) {
  let r = Eg(t),
    i = Math.max(...t.map(Tg)),
    a = 0,
    o = 0;
  for (; o < e;) ((o = (r + n) * (a + 1) - i), a++);
  return Math.max(a - 1, 0);
}
function Og(
  {
    items: e,
    velocity: t = 50,
    hoverFactor: n = 1,
    gap: r = 10,
    axis: i = `x`,
    align: a = `center`,
    offset: o,
    isStatic: s = !1,
    itemSize: c = `auto`,
    overflow: l = !1,
    loop: d = !0,
    children: p,
    as: m = `div`,
    snap: g,
    safeMargin: v = 0,
    fade: y = 0,
    fadeTransition: b,
    pageTransition: x,
    ...S
  },
  w
) {
  let T = _(null),
    D = I(w, T),
    O = _(null),
    [k, A] = h({
      direction: `ltr`,
      visibleLength: 0,
      inset: 0,
      totalItemLength: 0,
      containerLength: 0,
      itemPositions: [],
      itemBounds: [],
      itemSetPositions: [],
      isMeasured: !1,
      maxInset: null,
    }),
    j = fD[a] || a,
    { sign: M } = yg(i, k.direction);
  if (s) {
    let t = _e(0),
      n = C(() => ({ ...k, gap: r, clampOffset: re, offset: t, renderedOffset: t }), [k, r, t]);
    return /* @__PURE__ */ E(oD.Provider, {
      value: n,
      children: /* @__PURE__ */ E(kg, {
        containerProps: S,
        containerRef: D,
        gap: r,
        axis: i,
        alignItems: j,
        offset: t,
        renderedOffset: t,
        items: e,
        itemSize: c,
        state: k,
        overflow: l,
        safeMargin: v,
        isStatic: !0,
        as: m,
        fade: y,
        sign: M,
        children: p,
      }),
    });
  }
  let [N, P] = h(!1),
    F = _e(1),
    te = _e(0);
  o ??= te;
  let ne = xe(() =>
      k.direction === `rtl` && i === `x`
        ? ee(k.totalItemLength + r + k.inset, k.inset, o.get())
        : ee(-k.totalItemLength - r - k.inset, -k.inset, o.get())
    ),
    ie = _e(0),
    se = N ? ie : d ? ne : o,
    ce = Ke(T, { margin: `100px` }),
    le = ae(),
    de = ce && le,
    fe = Re(),
    me = () => {
      if (!T.current || !O.current) return;
      let e = f.getComputedStyle(T.current).direction,
        { measureItem: t, lengthProp: n, viewportLengthProp: r, getCumulativeInset: a } = yg(i, e),
        o = i === `x` ? `paddingLeft` : `paddingTop`,
        s = i === `x` ? `paddingRight` : `paddingBottom`,
        c = T.current,
        u = O.current.querySelectorAll(`.ticker-item`);
      if (!u.length) return;
      let p = [],
        m = [],
        h = [];
      for (let e = 0; e < u.length; e++) {
        let n = u[e],
          r = Number(n.dataset.itemIndex),
          i = t(n, c);
        (p.push(i), (m[r] = i), (h[r] = p.length));
      }
      let g = Math.min(c[n], f[r]),
        _ = l ? f[r] : g;
      v > 0 && (_ += v * 2);
      let y = Eg(p),
        b = f.getComputedStyle(c),
        x = parseInt(b[o] ?? 0),
        S = parseInt(b[s] ?? 0),
        C = l ? a(u[0]) : x,
        w = f[r];
      l && C > w && ((C = w), (_ += w + g));
      let E = d === !1 ? Math.max(0, y - g + x + S) : null;
      A((t) =>
        e === t.direction &&
        _ === t.visibleLength &&
        y === t.totalItemLength &&
        C === t.inset &&
        g === t.containerLength &&
        E === t.maxInset &&
        p.length === t.itemPositions.length &&
        !m.some((e, n) => {
          let r = t.itemBounds[n];
          return e?.start !== r?.start || e?.end !== r?.end;
        })
          ? t
          : {
              direction: e,
              visibleLength: _,
              itemPositions: p,
              itemBounds: m,
              itemSetPositions: h,
              totalItemLength: y,
              inset: C,
              containerLength: g,
              maxInset: E,
              isMeasured: !0,
            }
      );
    };
  oe(() => {
    if (!de || !T.current) return;
    me();
    let e = l ? pe(me) : void 0,
      t = pe(T.current, me);
    return () => {
      (e?.(), t());
    };
  }, [e, de, l]);
  let he = k.totalItemLength > 0;
  ue(
    he && de && o === te && !fe
      ? (e, n) => {
          let r = (n / 1e3) * (t * M * F.get());
          o.set(o.get() - r);
        }
      : re
  );
  let ge = C(
      () => (!he || !k.visibleLength ? 0 : Dg(k.visibleLength, k.itemPositions, r)),
      [he, k, r]
    ),
    L = k.totalItemLength === 0 ? 0 : (k.totalItemLength + r) * (ge + 1),
    ve = [];
  if (d)
    for (let t = 0; t < ge; t++) {
      let n = [];
      e.forEach((a, o) => {
        let s = k.itemBounds[o],
          l = (k.totalItemLength + r) * (t + 1),
          u = s ? { start: s.start + l, end: s.end + l } : mD;
        n.push(
          /* @__PURE__ */ E(
            bg,
            {
              offset: se,
              axis: i,
              listSize: L,
              itemIndex: o,
              cloneIndex: o,
              bounds: u,
              alignItems: j,
              size: c,
              safeMargin: v,
              numItems: k.isMeasured ? k.itemPositions.length : e.length,
              children: a,
            },
            `clone-${t}-${o}`
          )
        );
      });
      let a = `ticker-group-${t}`;
      ve.push(/* @__PURE__ */ E(Ae, { id: a, children: n }, a));
    }
  Sg(T, i, ie, o, P);
  let R = u((e) => (k.maxInset === null ? e : Se(-k.maxInset, 0, e)), [k.maxInset]),
    ye = C(
      () => ({ ...k, gap: r, clampOffset: R, offset: o, renderedOffset: se }),
      [k, r, R, o, se]
    );
  return /* @__PURE__ */ E(oD.Provider, {
    value: ye,
    children: /* @__PURE__ */ E(kg, {
      containerProps: S,
      containerRef: D,
      listRef: O,
      gap: r,
      axis: i,
      alignItems: j,
      isMeasured: he,
      isInView: de,
      offset: o,
      renderedOffset: se,
      items: e,
      itemSize: c,
      clonedItems: ve,
      clampOffset: R,
      snap: g,
      safeMargin: v,
      onPointerEnter: () => {
        Pe(F, n);
      },
      onPointerLeave: () => {
        Pe(F, 1);
      },
      totalListSize: L,
      state: k,
      overflow: l,
      loop: d,
      as: m,
      fade: y,
      sign: M,
      fadeTransition: b,
      pageTransition: x,
      children: p,
    }),
  });
}
function kg({
  children: e,
  containerProps: t,
  containerRef: n,
  listRef: r,
  gap: i,
  axis: a,
  alignItems: o,
  isMeasured: s,
  isInView: c,
  isStatic: l,
  items: u,
  offset: d,
  clonedItems: f,
  clampOffset: p,
  renderedOffset: m,
  onPointerEnter: h,
  onPointerLeave: g,
  totalListSize: y,
  itemSize: b,
  overflow: x,
  state: S,
  safeMargin: T,
  snap: D,
  loop: O,
  as: k,
  fade: A,
  sign: j,
  fadeTransition: M = _D,
  pageTransition: N,
}) {
  let ee = C(() => Ue.create(k), [k]),
    P = {},
    { maxInset: F } = S;
  F !== null &&
    (P =
      a === `x`
        ? j > 0
          ? { left: F * -1, right: 0 }
          : { right: F, left: 0 }
        : { top: F * -1, bottom: 0 });
  let {
      drag: te,
      _dragX: ne,
      _dragY: re,
      dragMomentum: ie = !1,
      onDragEnd: ae,
      onPointerDown: oe,
      ...se
    } = t,
    ce = ae,
    le = oe,
    ue = a === `x` ? ne : re,
    de = _(null),
    fe = () => {
      de.current &&= (de.current.stop(), null);
    };
  !ce &&
    te &&
    ue &&
    ((le = () => {
      (ue.jump(d.get()), fe());
    }),
    (ce = (e, { velocity: t }) => {
      let n = d.get();
      (fe(),
        He.postRender(() => {
          let e = n + t[a] * (D ? 0.3 : 0.8);
          if (D) {
            if (t[a] < 0) e = -mg(-n, S.itemPositions, i, -e);
            else if (t[a] > 0) e = -hg(-n, S.itemPositions, i, -e, S.containerLength);
            else {
              let t = -mg(-n, S.itemPositions, i, -n),
                r = -hg(-n, S.itemPositions, i, -n, S.containerLength);
              e = Math.abs(n - t) < Math.abs(n - r) ? t : r;
            }
          }
          let r = O
            ? {}
            : j > 0
              ? { max: 0, min: P[a === `x` ? `left` : `top`] }
              : { min: 0, max: P.right };
          de.current = Pe(
            ue,
            p(e * j) * j,
            D
              ? N
              : {
                  type: `inertia`,
                  velocity: t[a],
                  modifyTarget: () => e,
                  bounceDamping: 40,
                  bounceStiffness: 400,
                  ...r,
                }
          );
        }));
    }));
  let pe = _e(+!O),
    me = _e(0),
    he = yg(a, S.direction),
    I = typeof A == `number` ? `px` : ``,
    ge = xe(
      () =>
        `linear-gradient(to ${he.direction}, rgba(0,0,0,${pe.get()}) 0px, black ${A}${I}, black calc(100% - ${A}${I}), rgba(0,0,0,${me.get()}) 100%)`
    ),
    L = A ? { maskImage: ge, WebkitMaskImage: ge } : {},
    ve = _({ start: !0, end: !1 });
  return (
    R(m, `change`, (e) => {
      if (F === null) return;
      let t = F * -1;
      ((e *= j),
        e < 0
          ? ve.current.start && (Pe(pe, 0, M), (ve.current.start = !1))
          : ve.current.start || (Pe(pe, 1, M), (ve.current.start = !0)),
        e > t
          ? ve.current.end && (Pe(me, 0, M), (ve.current.end = !1))
          : ve.current.end || (Pe(me, 1, M), (ve.current.end = !0)));
    }),
    /* @__PURE__ */ w(v, {
      children: [
        /* @__PURE__ */ E(ee, {
          ...se,
          ref: n,
          style: {
            overflowX: !x && a === `x` ? `clip` : void 0,
            overflowY: !x && a === `y` ? `clip` : void 0,
            ...hD,
            ...t.style,
            ...L,
          },
          onPointerEnter: h,
          onPointerLeave: g,
          drag: te,
          _dragX: ne,
          _dragY: re,
          dragConstraints: P,
          dragMomentum: ie,
          onPointerDown: le,
          onDragEnd: ce,
          children: /* @__PURE__ */ w(Ue.ul, {
            ref: r,
            style: {
              ...gD,
              flexDirection: a === `x` ? `row` : `column`,
              gap: `${i}px`,
              x: a === `x` ? m : 0,
              y: a === `y` ? m : 0,
              opacity: s || l ? 1 : 0,
              alignItems: o,
              willChange: s && c ? `transform` : void 0,
              width: `100%`,
              height: `100%`,
              maxHeight: `100%`,
              maxWidth: `100%`,
            },
            children: [
              u.map((e, t) =>
                /* @__PURE__ */ E(
                  bg,
                  {
                    axis: a,
                    offset: m,
                    listSize: y,
                    itemIndex: t,
                    bounds: S.itemBounds[t] ?? mD,
                    alignItems: o,
                    size: b,
                    reproject: O,
                    safeMargin: T,
                    positionInSet: S.itemSetPositions[t],
                    numItems: S.isMeasured ? S.itemPositions.length : u.length,
                    children: e,
                  },
                  `original-` + t
                )
              ),
              f || null,
            ],
          }),
        }),
        ` `,
        e,
      ],
    })
  );
}
function Ag(e, t) {
  if (!e) throw Error(t);
}
function jg(e) {
  return -Math.sign(e);
}
function Mg(
  e,
  {
    axis: t = `y`,
    onWheel: n,
    onSwipe: r,
    swipeThreshold: i = 100,
    swipeTimeout: a = 150,
    jitterThreshold: o = 2,
    lineHeight: s = 16,
  }
) {
  let c = `IDLE`,
    l = 0,
    u = 0,
    d = 0,
    f = !1,
    p = 0,
    m = !1,
    h = null,
    g = (e) => {
      let g = t === `x` && !e.shiftKey ? e.deltaX : e.deltaY,
        _ = t === `x` && !e.shiftKey ? e.deltaY : e.deltaX;
      if (Math.abs(g) < Math.abs(_)) return;
      (n || r) && e.preventDefault();
      let v = -(e.deltaMode === WheelEvent.DOM_DELTA_LINE ? g * s : g);
      if (v === 0) return;
      (h && clearTimeout(h),
        (h = setTimeout(() => {
          ((c = `IDLE`), (m = !1), (l = 0));
        }, a)),
        c === `IDLE` && (c = `WHEELING`));
      let y = jg(v);
      function b(e, t) {
        ((c = `SWIPING`),
          (m = !0),
          (u = jg(t)),
          (f = !1),
          (p = 0),
          (d = Math.abs(e)),
          r?.(u),
          (l = (Math.abs(t) % i) * u));
      }
      switch (c) {
        case `WHEELING`: {
          let e = l + v;
          r && !m && Math.abs(e) >= i ? b(v, e) : ((l = e), n?.(v));
          break;
        }
        case `SWIPING`: {
          let e = Math.abs(v),
            t = y !== u,
            a = !1;
          if (d > 0) {
            let t = e - d;
            (t < 0 && (f = !0), f && t > o ? (p++, p > 2 && (a = !0)) : (p = 0));
          }
          if (t || a) {
            m = !1;
            let e = v;
            r && !m && Math.abs(e) >= i ? b(v, e) : ((c = `WHEELING`), (l = e), n?.(v));
            break;
          }
          d = e;
          break;
        }
      }
    };
  return (
    e.addEventListener(`wheel`, g, { passive: !1 }),
    () => {
      (h && clearTimeout(h), e.removeEventListener(`wheel`, g));
    }
  );
}
function Ng() {
  let e = t(vD);
  return (Ug(!!e, `useCarousel must be used within a Carousel component`), e);
}
function Pg(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function Fg(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = Pg(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[ee(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c >= e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function Ig(e, t, n, r, i) {
  return Fg(e, n, r, e - t, i);
}
function Lg(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = Pg(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[ee(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function Rg(e, t, n, r) {
  return Lg(e, n, r, e + t);
}
function zg(e, t, n, r = !0) {
  let i = { insets: [], visibleLength: t };
  if (e.length === 0) return i;
  let a = [e[0].start];
  for (let r = 1; r < e.length; r++) {
    let { start: i, end: o } = e[r];
    if (a[a.length - 1] + t < o) {
      if (n !== null) {
        if (i <= n) a.push(i);
        else {
          a.push(n);
          break;
        }
      } else a.push(i);
    }
  }
  if (r && n !== null && a.length > 1) {
    let r = a[a.length - 1],
      i = [];
    for (let e = 0; e < a.length - 1; e++) i.push(a[e + 1] - a[e]);
    let o = i.reduce((e, t) => e + t, 0) / i.length;
    if (n - r < o * 0.5) {
      let r = zg(e, t * 0.75, n, !1);
      if (r.insets.length === a.length) return r;
    }
  }
  return { insets: a, visibleLength: t };
}
function Bg(e, t, n, r, i) {
  let a = -e;
  if (i) {
    let e = t[0] ?? 0,
      i = a + yD,
      o = r === null && n > 0 ? ee(e, e + n, i) : i,
      s = t.findLastIndex((e) => e <= o);
    return Math.max(0, s);
  }
  let o = r === null ? Math.floor(a / n) : 0,
    s = o * n;
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e] + s,
      i = ee(0, t.length, e - 1),
      c = (e === 0 ? o - 1 : o) * n,
      l = t[i] + c,
      u = (r - l) / 2,
      d = ee(0, t.length, e + 1),
      f = (e === t.length - 1 ? o + 1 : o) * n,
      p = t[d] + f;
    if (a < p - (p - r) / 2 && a >= l + u) return e;
  }
  return 0;
}
function Vg({
  children: e,
  offset: t,
  targetOffset: n,
  tugOffset: r,
  loop: i = !0,
  transition: a,
  tickerRef: o,
  axis: s = `x`,
  snap: c = `page`,
  page: l,
  wheelSwipeThreshold: u,
}) {
  let d = _(void 0),
    f = Re(),
    {
      clampOffset: p,
      totalItemLength: m,
      itemPositions: g,
      containerLength: v,
      gap: y,
      maxInset: b,
      direction: x,
      isMeasured: S,
    } = gg(),
    w = m + y,
    { sign: T } = yg(s, x),
    D = i ? w : 0,
    O = C(() => ({ ...zg(g, v, b), itemPositions: g, sign: T, loopLength: D }), [g, v, b, T, D]),
    k = O.insets.length,
    A = _(null),
    j = _(void 0),
    M = _(void 0),
    P = (e) => ({
      current: Bg(e * T, O.insets, w, b, M.current === e),
      isNextActive: i ? !0 : e * -T < b,
      isPrevActive: i ? !0 : e * -T > 0,
    }),
    [F, te] = h(() => P(n.get())),
    ne = () => {
      let e = P(n.get());
      (e.current !== F.current ||
        e.isNextActive !== F.isNextActive ||
        e.isPrevActive !== F.isPrevActive) &&
        te(e);
    };
  (R(n, `change`, (e) => {
    (M.current !== e && (M.current = void 0), t.set(e), ne());
  }),
    oe(() => {
      let e,
        n = () => {
          (e?.stop(), (e = void 0));
        };
      return (
        t.attach((r, i) => {
          n();
          let a = d.current;
          ((d.current = void 0),
            a
              ? (e = new ze({
                  keyframes: [t.get(), r],
                  velocity: Se(-2e3, 2e3, t.getVelocity()),
                  ...a,
                  duration: a.duration === void 0 ? void 0 : a.duration * 1e3,
                  delay: a.delay === void 0 ? void 0 : a.delay * 1e3,
                  repeatDelay: a.repeatDelay === void 0 ? void 0 : a.repeatDelay * 1e3,
                  onUpdate: i,
                  onComplete: () => {
                    e = void 0;
                  },
                }))
              : i(r));
        }, n),
        n
      );
    }, [t]),
    oe(() => {
      let e = A.current;
      A.current = S && k > 0 ? O : null;
      let r = n.get(),
        i,
        a;
      if (S && k > 0) {
        if (l !== void 0 && j.current !== l) {
          ((j.current = l), (M.current = void 0));
          let e = Se(0, k - 1, l);
          i = O.insets[e] * -T;
        } else if (e && e !== O) {
          let n = r * -e.sign,
            o = e.loopLength ? Math.floor((n - e.insets[0] + yD) / e.loopLength) : 0,
            s = n - o * e.loopLength;
          if (e.insets.some((e) => Math.abs(s - e) < yD) || M.current === r) {
            let c = Math.max(
                0,
                e.itemPositions.findLastIndex((e) => e.start <= s + yD)
              ),
              l = e.itemPositions[c],
              u = n + (g[Math.min(c, g.length - 1)].start - l.start + o * (D - e.loopLength)),
              d = p(-u) * T;
            if (((M.current = d), d !== r && ((i = d), !f))) {
              let n = t.get() * e.sign + o * (e.loopLength - D);
              a = {
                from: (D ? -u + ee(-D / 2, D / 2, n + u) : p(n)) * T,
                velocity: t.getVelocity() * e.sign * T,
              };
            }
          }
        }
      }
      (i !== void 0 &&
        (a &&
          (Math.abs(a.from - t.get()) > yD && t.jump(a.from),
          Math.abs(a.from - i) > yD &&
            (d.current = { ...xD, velocity: Se(-2e3, 2e3, a.velocity) })),
        n.jump(i),
        a || t.jump(i)),
        (i === void 0 || i === r) && ne());
    }, [S, l, O, n, t, w, p, f]));
  let re = (e) => {
      let t = p(e);
      (n.stop(), (d.current = a), n.set(t * T), (d.current = void 0));
    },
    ie = (e, t) => {
      let i = -e(-n.get() * T, O.visibleLength, g, y, v),
        a = p(i);
      a * T === n.get() ? Pe(r, 0, { velocity: t * T * 400, ...SD }) : re(a);
    },
    ae = () => ie(Rg, -1),
    se = () => ie(Ig, 1),
    ce = (e) => {
      let t = (i ? Math.floor((-n.get() * T) / w) : 0) * -w;
      re(-O.insets[e] + t);
    },
    le = _({ nextPage: ae, prevPage: se, clampOffset: p });
  return (
    N(() => {
      le.current = { nextPage: ae, prevPage: se, clampOffset: p };
    }, [ae, se, p]),
    N(() => {
      let e = o.current;
      if (e)
        return Mg(e, {
          axis: s,
          swipeThreshold: u,
          onSwipe: c
            ? (e) => {
                let { nextPage: t, prevPage: n } = le.current;
                e * T === 1 ? t() : n();
              }
            : void 0,
          onWheel: (e) => {
            let { clampOffset: r } = le.current,
              i = t.get() + e,
              a = T > 0 ? r(i) : Se(0, b, i);
            n.jump(b ? a : i);
          },
        });
    }, [s, c, t, T]),
    /* @__PURE__ */ E(vD.Provider, {
      value: {
        currentPage: F.current,
        isNextActive: F.isNextActive,
        isPrevActive: F.isPrevActive,
        totalPages: k,
        nextPage: ae,
        prevPage: se,
        gotoPage: ce,
        offset: t,
        targetOffset: n,
      },
      children: e,
    })
  );
}
function Hg({
  children: e,
  loop: t = !0,
  transition: n = bD,
  axis: r = `x`,
  snap: i = `page`,
  page: a,
  wheelSwipeThreshold: o,
  ...s
}) {
  let c = _(null),
    l = _e(0),
    u = _e(0),
    d = _e(0),
    f = xe(() => d.get() + u.get());
  return /* @__PURE__ */ E(pD, {
    role: `region`,
    "aria-roledescription": `carousel`,
    offset: f,
    loop: t,
    ref: c,
    axis: r,
    drag: r,
    _dragX: r === `x` && l,
    _dragY: r === `y` && l,
    snap: i,
    pageTransition: n,
    ...s,
    children: /* @__PURE__ */ E(Vg, {
      tickerRef: c,
      loop: t,
      offset: u,
      tugOffset: d,
      targetOffset: l,
      transition: n,
      snap: i,
      axis: r,
      page: a,
      wheelSwipeThreshold: o,
      children: e,
    }),
  });
}
function Ug(e, t) {
  if (!e) throw Error(t);
}
function Wg({ intervalSeconds: e }) {
  let { nextPage: t, currentPage: n, isNextActive: r } = Ng();
  return (
    N(() => {
      if (!r) return;
      let n = new ze({ keyframes: [0, 1], duration: e * 1e3, ease: `linear`, onComplete: t });
      return () => n.stop();
    }, [e, n, r, t]),
    null
  );
}
function Gg(e, t) {
  if (typeof e == `number` && Number.isFinite(e)) return e;
  if (!z(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0],
    a = t === `x` ? i : r;
  if (!a) return;
  let o = parseInt(a);
  return Number.isNaN(o) ? void 0 : o;
}
function Kg(e, t) {
  if (q(e)) return e;
  if (!z(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0];
  if (t === `x` && i) return qg(parseInt(i));
  if (t === `y` && r) return qg(parseInt(r));
}
function qg(e) {
  return Number.isNaN(e) ? void 0 : e;
}
function Jg(e) {
  let {
    carouselEffectEnabled: t,
    carouselEffectAlign: n,
    carouselEffectAutoPlay: r,
    carouselEffectControls: i,
    carouselEffectGap: a,
    carouselEffectInterval: o,
    carouselEffectLoop: s,
    carouselEffectOverflow: c,
    carouselEffectSnap: l,
    carouselEffectStackDirection: u,
    carouselEffectTransition: d,
    carouselEffectXOverflow: f,
    carouselEffectYOverflow: p,
    tickerEffectEnabled: m,
    tickerEffectAlign: h,
    tickerEffectDirectionModifier: g,
    tickerEffectDraggable: _,
    tickerEffectGap: v,
    tickerEffectHoverModifier: y,
    tickerEffectIsDataRepeater: b,
    tickerEffectOverflow: x,
    tickerEffectPosition: S,
    tickerEffectStackDirection: C,
    tickerEffectVelocity: w,
    tickerEffectXOverflow: T,
    tickerEffectYOverflow: E,
    ...D
  } = e;
  return {
    carouselEffectProps: {
      carouselEffectAlign: n,
      carouselEffectAutoPlay: r,
      carouselEffectControls: i,
      carouselEffectGap: a,
      carouselEffectInterval: o,
      carouselEffectLoop: s,
      carouselEffectOverflow: c,
      carouselEffectSnap: l,
      carouselEffectStackDirection: u,
      carouselEffectTransition: d,
      carouselEffectXOverflow: f,
      carouselEffectYOverflow: p,
    },
    tickerEffectProps: {
      tickerEffectAlign: h,
      tickerEffectDirectionModifier: g,
      tickerEffectDraggable: _,
      tickerEffectGap: v,
      tickerEffectHoverModifier: y,
      tickerEffectIsDataRepeater: b,
      tickerEffectOverflow: x,
      tickerEffectPosition: S,
      tickerEffectStackDirection: C,
      tickerEffectVelocity: w,
      tickerEffectXOverflow: T,
      tickerEffectYOverflow: E,
    },
    domProps: D,
  };
}
function Yg(e) {
  let t = e.__FramerMetadata__.exports.default.annotations?.framerVariables;
  if (t)
    try {
      return JSON.parse(t);
    } catch {
      return;
    }
}
function Xg(e, t) {
  return (n) => {
    let r = {},
      i = Yg(t);
    for (let e in n) Wb(r)[i?.[e] ?? e] = n[e];
    return /* @__PURE__ */ E(e, { ...r });
  };
}
function Zg(e, t, n, r = MD) {
  let [i, a] = M.useState(e),
    [o, s] = M.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      M.useCallback(
        (e) => {
          da(e) ||
            (t && a(r(e)),
            n &&
              M.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function Qg(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function $g() {
  return /* @__PURE__ */ E(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: /* @__PURE__ */ E(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function e_(e, t = !0) {
  let [n, r] = h(e);
  return (n !== t && n !== e && r(e), n);
}
function t_(e) {
  return e === void 0 ? `__undefined__` : B(e) ? String(e) : e === `` ? `__empty__` : e;
}
function n_(e, t) {
  switch (e) {
    case `left`:
      return !1;
    case `right`:
      return !0;
    case `end`:
      return t === `ltr`;
    case void 0:
    case `start`:
    case `center`:
    case `justify`:
      return t === `rtl`;
    default:
      return U(e);
  }
}
function r_(e, t) {
  N(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (f.addEventListener(`keyup`, n), () => f.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function i_(e, t, n, r) {
  let i = f.innerHeight - r,
    a = Math.min(f.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function a_(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new f.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function o_() {
  return (
    document.getElementById(`template-overlay`) ??
    document.getElementById(`overlay`) ??
    document.body
  );
}
function s_(e, t) {
  return B(e) ? e : (t ?? 0);
}
function c_(e) {
  return s_(e?.paddingTop, e?.padding) + s_(e?.paddingBottom, e?.padding);
}
function l_(e) {
  return s_(e?.paddingLeft, e?.padding) + s_(e?.paddingRight, e?.padding);
}
function u_(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - l_(e)}px)`,
      srcSet: Yo(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function d_(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in nO)) continue;
    let n = nO[t],
      r = e[t];
    if (B(n) && B(r) && n !== r) return !0;
  }
  return !1;
}
function f_(e) {
  let t = he.get(e.current);
  if (!t) return !1;
  if (d_(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (d_(e.latestValues)) return !0;
  return !1;
}
function p_(e) {
  return D(function ({ lightbox: r, lightboxClassName: i, onClick: a, ...o }, s) {
    let c = t(Ie),
      f = t(DD),
      p = !!f,
      m = _(null),
      g = s ?? m,
      y = _(),
      b = C(() => u_(r, o.background), [r, o.background]),
      [x, T] = h(!1),
      [D, O] = h(),
      k = u(() => {
        r &&
          (x
            ? l(() => {
                T(!0);
              })
            : He.read(() => {
                if (!g.current) return;
                let e = getComputedStyle(g.current),
                  t =
                    g.current.getAttribute(`data-border`) === `true`
                      ? getComputedStyle(g.current, `::after`)
                      : void 0,
                  n = g.current.offsetWidth ?? 1,
                  i = g.current.offsetHeight ?? 1,
                  a = f_(g) || p ? { duration: 0 } : r.transition;
                l(() => {
                  (O({
                    borderRadius: e.borderRadius,
                    aspectRatio: n / (i || 1),
                    borderTop: t?.borderTopWidth,
                    borderRight: t?.borderRightWidth,
                    borderBottom: t?.borderBottomWidth,
                    borderLeft: t?.borderLeftWidth,
                    borderStyle: t?.borderStyle,
                    borderColor: t?.borderColor,
                    transition: a,
                    imageRendering: e.imageRendering,
                    filter: e.filter,
                  }),
                    T(!0),
                    f?.stop());
                });
              }));
      }, [r, x, g, f?.stop, p]),
      A = D?.aspectRatio ?? 1,
      j = Mh(() => {
        if (!r || !b?.src) return;
        let e = y.current?.[b.src];
        if (e) return e;
        let t = i_(A, r.maxWidth, l_(r), c_(r)),
          n = a_(b, { width: t, height: t * A });
        return ((y.current = { [b.src]: n }), n);
      }),
      M = u(
        async (e) => {
          (a?.(e), !x && r && b && (await j(), k()));
        },
        [a, k, x, b, r, j]
      ),
      ee = u((e) => {
        (e?.stopPropagation(),
          l(() => {
            T(!1);
          }));
      }, []);
    (r_(x, ee),
      N(() => {
        if (!r) return;
        let e;
        function t() {
          e = setTimeout(() => {
            j();
          }, 50);
        }
        function n() {
          clearTimeout(e);
        }
        let i = g.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, n),
          i?.addEventListener(`pointerdown`, j),
          () => {
            (n(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, n),
              i?.removeEventListener(`pointerdown`, j));
          }
        );
      }, [j, g, r]));
    let P = n(),
      F = D?.transition ?? o.transition ?? c.transition,
      te = D?.borderRadius,
      ne = D?.imageRendering,
      re = D?.filter,
      ie = D?.borderTop,
      ae = D?.borderRight,
      oe = D?.borderBottom,
      se = D?.borderLeft,
      ce = D?.borderStyle,
      le = D?.borderColor,
      ue = !!(ie || ae || oe || se || ce || le),
      de = ue
        ? {
            "--border-top-width": ie,
            "--border-right-width": ae,
            "--border-bottom-width": oe,
            "--border-left-width": se,
            "--border-style": ce,
            "--border-color": le,
          }
        : void 0,
      fe = { [GC]: o.id },
      pe = s_(r?.paddingTop, r?.padding),
      me = s_(r?.paddingBottom, r?.padding),
      he = s_(r?.paddingLeft, r?.padding),
      I = s_(r?.paddingRight, r?.padding),
      ge = D?.borderRadius ? { ...o.style, borderRadius: D.borderRadius } : o.style,
      L = x ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      _e = p && x ? void 0 : (o.layoutId ?? (r ? P : void 0));
    return /* @__PURE__ */ w(v, {
      children: [
        /* @__PURE__ */ E(e, {
          ...o,
          style: ge,
          onClick: M,
          layoutId: _e,
          ref: g,
          layoutDependency: L,
          transition: F,
        }),
        /* @__PURE__ */ E(Fe, {
          onExitComplete: () => {
            l(() => {
              (O(void 0), f?.start());
            });
          },
          children:
            x &&
            r &&
            b &&
            /* @__PURE__ */ E(
              d,
              {
                children: S(
                  /* @__PURE__ */ w(v, {
                    children: [
                      /* @__PURE__ */ E(Ue.div, {
                        ...fe,
                        className: i,
                        onClick: ee,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: r.zIndex,
                          backgroundColor: r.backdrop ?? `transparent`,
                        },
                        transition: F,
                        initial: rO,
                        animate: iO,
                        exit: rO,
                      }),
                      /* @__PURE__ */ E(Ue.div, {
                        ...fe,
                        className: i,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${pe}px ${I}px ${me}px ${he}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: r.zIndex,
                        },
                        children: /* @__PURE__ */ E(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: A,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: r.maxWidth,
                          },
                          children: /* @__PURE__ */ E(Ue.div, {
                            layoutId: _e,
                            transition: F,
                            onClick: k,
                            className: `framer-lightbox-container`,
                            "data-border": ue,
                            style: {
                              aspectRatio: A,
                              borderRadius: te,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ne,
                              filter: re,
                              ...de,
                            },
                            children: /* @__PURE__ */ E(is, {
                              image: b,
                              alt: b.alt,
                              draggable: o.draggable,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  o_()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function m_(e) {
  let t = {};
  for (let n in e) (te(n) || Kb(n)) && (t[n] = e[n]);
  return t;
}
function h_(e, t) {
  return sO && !t
    ? Document.parseHTMLUnsafe(e)
    : ((oO ??= new DOMParser()), oO.parseFromString(e, t ?? `text/html`));
}
function g_(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function __(e, t, n, r) {
  return e.replace(cO, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = md(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!Jh(f) || !Jh(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Fn(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = gd(u);
    if (!_ || z(_)) return e;
    Nd(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(iw, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Xi(m, v)), i + o + `"${g_(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function v_(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function y_(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function b_(e, t, n) {
  let r = _([]);
  v_(r.current, e) ||
    ((r.current = e),
    Zb.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      t && n.current && W.current() === W.canvas && e > 0 && ec(n.current);
    }));
}
function x_() {
  return { current: null };
}
async function S_(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        ((n = e), e === null ? t.abort() : r(e));
      },
      configurable: !0,
    }),
    i
  );
}
function C_(e) {
  return e in fO;
}
function w_(e, t) {
  let n = {};
  for (let r in e) {
    if (!C_(r)) continue;
    let i = e[r],
      a = fO[r];
    Qe(i) || Qe(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function T_(e, t = `character`, n, r, i) {
  if (r) {
    let t = x_();
    return (n.add(t), /* @__PURE__ */ E(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = e.length <= 12;
        return /* @__PURE__ */ w(
          d,
          {
            children: [
              /* @__PURE__ */ E(`span`, {
                style: { whiteSpace: o ? `nowrap` : `unset` },
                children: e.match(pO)?.map((e, t) => {
                  let r = x_();
                  return (
                    n.add(r),
                    /* @__PURE__ */ E(`span`, { ref: r, style: i, children: e }, e + t)
                  );
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = x_();
        return (
          n.add(o),
          /* @__PURE__ */ w(
            d,
            {
              children: [
                /* @__PURE__ */ E(`span`, { ref: o, style: i, children: e }),
                a ? null : ` `,
              ],
            },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function E_(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      U(t);
  }
}
function D_(e) {
  let t = [];
  return (
    B(e.x) && t.push(`translateX(${e.x}px)`),
    B(e.y) && t.push(`translateY(${e.y}px)`),
    B(e.scale) && t.push(`scale(${e.scale})`),
    B(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    B(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    B(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    B(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    B(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function O_(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : D_(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : D_(n.effect),
              };
      }
    default:
      U(i);
  }
}
function k_(e, t, n) {
  let r = zo(() => /* @__PURE__ */ new Set()),
    i = Ho(),
    a = n || !i,
    o = Re(),
    s = _({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let c = e?.trigger ?? `onMount`,
    l = e?.target,
    u = e?.threshold;
  N(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            j_(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          U(t);
      }
    }
    switch (c) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? Ge(n, e, { amount: u ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = l?.ref?.current;
        return t
          ? Ge(t, e, {
              amount: u ?? 0,
              root: document,
              margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        U(c);
    }
  }, [a, r, n, t, l, u, c]);
  let d = !!e,
    f = e ? E_(e) : void 0;
  return C(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !d)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = O_(a, n || A_(e, t, i), s.current.effect, o);
        return {
          text: (e) => T_(e, f, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = x_();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            j_(f, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            U(t);
        }
      },
    }),
    [a, d, r, n, f]
  );
}
function A_(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function j_(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = w_(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await M_(n, u);
      if (
        e === null ||
        (Pe(e, l, { ...r, restDelta: 0.001, delay: de(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Pe(e, n, { ...r, restDelta: 0.001, delay: de(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await S_(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (He.read(() => {
          ((e = N_(n)),
            e.length !== 0 &&
              He.update(() => {
                let t = e.map((e, t) =>
                  Pe(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Pe(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      U(e);
  }
}
async function M_(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await S_(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function N_(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function P_(e) {
  return e.type === d;
}
function F_(e) {
  return e.type === `br`;
}
function I_(e, t, n, r, i = {}, o, s = P_(e) ? -1 : 0) {
  let c = m.toArray(e.props.children);
  Qe(n) || (c = c.slice(0, 1));
  let l = !0;
  c = c.map((e) => {
    if (((!T(e) || !F_(e)) && (l = !1), T(e))) return I_(e, t, n, r, i, o, s + 1);
    let a = Qe(n) ? e : n;
    return z(a) && o ? o.text(a) : a;
  });
  let { "data-preset-tag": u, ...d } = e.props;
  if (z(e.type) || We(e.type)) {
    let n = ie(e.type) || e.type,
      a = u || n,
      f = z(a) ? t?.[a] : void 0;
    ((d.className = Bl(`framer-text`, d.className, f)),
      o && s === 0 && !l && Object.assign(d, o.props(d.style)));
    let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (p && h) {
      let e = L_(c, i);
      d.id = e;
      let t = Bl(`framer-text`, h),
        n = /* @__PURE__ */ E(`a`, { href: `#${e}`, className: t, children: c });
      ((d.style = { ...d.style, scrollMarginTop: r }), (c = [n]));
    }
    a === `ol` &&
      (d.style = {
        ...d.style,
        [Kt]: z_(d.start ?? 1, m.count(d.children), d.style?.[`--list-style-type`] ?? ``),
      });
  }
  return a(e, d, ...c);
}
function L_(e, t) {
  let n = ji(e.map(R_).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function R_(e) {
  return z(e) || B(e)
    ? e.toString()
    : T(e)
      ? R_(e.props.children)
      : Array.isArray(e)
        ? e.map(R_).join(``)
        : ``;
}
function z_(e, t, n) {
  return pt(Number(e) || 1, t, n);
}
function B_(e, t) {
  return (N(() => TO.subscribeToTemplate(e), [e]), TO.template(e, t));
}
function V_(e) {
  try {
    let t = h_(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function H_(e, t) {
  W_(e, U_(t));
}
function U_(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function W_(e, t) {
  (G_(e, t),
    Array.from(e.children).forEach((e) => {
      W_(e, t);
    }));
}
function G_(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function K_(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (t?.[1] !== void 0 && t?.[2] !== void 0 && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (EO[t[2]] || 1));
}
function q_(e) {
  let t = K_(e.getAttribute(`width`)),
    n = K_(e.getAttribute(`height`));
  if (typeof t == `number` && typeof n == `number` && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function J_({ height: e, width: t, isCarouselControl: n, children: r }) {
  let i = Y_();
  if (n) return null;
  if (!i || !r) return r;
  let { props: a } = i;
  return /* @__PURE__ */ E(Ue.li, {
    ...a,
    style: { ...a.style, width: t ?? `fit-content`, height: e ?? `fit-content` },
    children: r,
  });
}
function Y_() {
  try {
    return _g();
  } catch {
    return;
  }
}
function X_(e) {
  return e > DO ? `lazy` : void 0;
}
function Z_(e, t, n) {
  let r = ev(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Q_(e) {
  return e ? (e.fonts ?? wa()) : wa();
}
function $_(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : ev(e);
}
function ev(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    tv(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(nv) })
      : t.fonts.push(nv(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function tv(e) {
  return kO in e;
}
function nv(e) {
  let t = rv(e) || iv(e) ? e : av(e);
  return iv(t) ? t : ov(t);
}
function rv(e) {
  return `source` in e;
}
function iv(e) {
  return `cssFamilyName` in e;
}
function av(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function ov(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${OO}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function sv(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function cv(e, t) {
  let n = ly({ batch: !0, priority: t.priority, signal: t.signal });
  return n ? n.then(e) : e();
}
async function lv(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = ly({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e })
        )
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function uv(e) {
  return e.loader;
}
function dv(e, t, n) {
  let r = uv(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  X,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  Z,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  Q,
  MT,
  NT,
  PT,
  FT,
  IT,
  $,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO,
  sO,
  cO,
  lO,
  uO,
  dO,
  fO,
  pO,
  mO,
  hO,
  gO,
  _O,
  vO,
  yO,
  bO,
  xO,
  SO,
  CO,
  wO,
  TO,
  EO,
  DO,
  OO,
  kO;
function AO() {
  return (AO = e(() => {
    (o(),
      we(),
      cn(),
      j(),
      O(),
      g(),
      (fv = /* @__PURE__ */ new Map()),
      (pv = /* @__PURE__ */ new Map()),
      (mv = /* @__PURE__ */ new Set()),
      (hv = `:`),
      (gv = xt ? void 0 : /* @__PURE__ */ new Set()),
      (_v = `preload`),
      (vv = Object.keys),
      (yv = `equals`),
      (bv = /* @__PURE__ */ M.createContext({})),
      (xv = /* @__PURE__ */ M.createContext({})),
      (Sv = []),
      (Cv = `default`),
      (wv = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (Tv = class e {
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = wv.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && un(t, e));
        }
        then(e, t) {
          return this.promiseState === wv.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === wv.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== wv.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && gv !== void 0 && gv.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = wv.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = wv.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && fv.has(this.cacheHash) ? fv.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!it(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === wv.Fulfilled) return this.value;
          throw this.promiseState === wv.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (Ev = 2 ** 32 - 1),
      (Dv = Ev - 1),
      (Ov = typeof Uint8Array.fromBase64 == `function`),
      (kv = typeof process == `object` && process.versions?.node !== void 0),
      (Av = Ov ? Bn : kv ? Vn : Hn),
      (jv = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, `byteLength`).get),
      (Mv =
        typeof SharedArrayBuffer > `u`
          ? void 0
          : Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, `byteLength`).get),
      (Nv = /* @__PURE__ */ Object.freeze({
        fromPrimitive: (e) => e,
        fromISOString: (e) => new Date(e),
        fromStringValue: (e, t) =>
          e === `URL`
            ? new URL(t)
            : e === `URLSearchParams`
              ? new URLSearchParams(t)
              : Temporal[e.slice(9)].from(t),
        fromArrayBuffer: (e) => e,
        fromRegExpInfo: (e, t) => new RegExp(e, t),
        fromViewInfo: (e, t, n, r) => {
          try {
            jv.call(t);
          } catch (e) {
            if (!Mv) throw e;
            Mv.call(t);
          }
          let i = globalThis[e];
          return n === void 0 ? new i(t) : new i(t, n, r);
        },
        box: (e) => Object(e),
        createArray: (e) => Array(e),
        createSparseArray: (e) => {
          let t = [];
          return ((t[Dv] = void 0), delete t[Dv], (t.length = e), t);
        },
        createObject: () => ({}),
        createNullPrototypeObject: () => Object.create(null),
        createSet: () => /* @__PURE__ */ new Set(),
        createMap: () => /* @__PURE__ */ new Map(),
        set: (e, t, n) => {
          e[t] = n;
        },
        addValue: (e, t) => {
          e.add(t);
        },
        addEntry: (e, t, n) => {
          e.set(t, n);
        },
      })),
      (Pv = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (Fv = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Lv = class {
        payload = Jn();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        getPayload() {
          return this.isEmpty ? void 0 : this.payload;
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (Rv = xt ? void 0 : new Lv()),
      (zv = Fv.CollectionUtilsCache),
      (Bv = /* @__PURE__ */ new WeakMap()),
      (Vv = /* @__PURE__ */ k(void 0)),
      (Hv = class {
        collectionId;
        module;
        cacheMap = /* @__PURE__ */ new Map();
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new Tv(async () => {
              try {
                let t = await e();
                return (H(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(ot(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = $n(n),
            i = er(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (Rv !== void 0) {
              if (it(e)) return e.then((e) => (Rv.set(zv, i, e), e));
              Rv.set(zv, i, e);
            }
            return e;
          }
          if (Zn(zv, i)) {
            let e = Qn(zv, i);
            return (this.cacheMap.set(i, new Tv(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = it(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(ot(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (Rv !== void 0 && Rv.set(zv, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new Tv(async () => {
            try {
              let e = it(s) ? await s : s;
              return (Rv !== void 0 && Rv.set(zv, i, e), e);
            } catch (e) {
              console.error(ot(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (Uv = /Mac/u),
      (Wv = /iPhone|iPod|iPad/iu),
      (Gv = /MacIntel/iu),
      (Kv = /Edg\//u),
      (qv = /Chrome/u),
      (Jv = /Google Inc/u),
      (Yv = /Safari/u),
      (Xv = /Apple Computer/u),
      (Zv = /Firefox\/\d+\.\d+$/u),
      (Qv = /Version\/([\d.]+)/u),
      ($v = /FramerX/u),
      (ey = /tablet|iPad|Nexus 9/iu),
      (ty = /mobi/iu),
      (ny = 1e3 / 60),
      (ry = 40),
      (iy = 500),
      (ay = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (oy = /* @__PURE__ */ Promise.resolve()),
      (sy = 100),
      (cy = (e) => {
        He.read(e, !1, !0);
      }),
      (ly = /* @__PURE__ */ Er(cy)),
      (uy = `framer_variant`),
      (dy = /* @__PURE__ */ RegExp(`:([a-z]\\w*)`, `gi`)),
      (fy = async () => {}),
      (py = { contentLocale: null, activeLocale: null, locales: [], setLocale: fy }),
      (my = /* @__PURE__ */ (() => {
        let e = M.createContext(py);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (hy = /* @__PURE__ */ (() => {
        let e = M.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (gy = !St),
      (_y = !1),
      (vy = /* @__PURE__ */ M.createContext({ global: void 0, routes: {} })),
      (yy = 10),
      (by = 1e4),
      (xy = (e) => `--view-transition-${e}`),
      (Sy = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${xy(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${xy(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${xy(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (Cy = {
        circle: {
          makeKeyframe: (e, t) => `${xy(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${xy(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${Xr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${xy(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: Sy,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${Yr(e.x)} ${Yr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = qr(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${xy(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${xy(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${xy(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${xy(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${xy(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${xy(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (wy = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (Ty = `view-transition-styles`),
      (Ey = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (Dy = () => {}),
      (ky = () => {
        let e = document.title;
        e &&
          (document.ariaNotify
            ? document.ariaNotify(e, { priority: `high` })
            : (Oy ||
                ((Oy = document.createElement(`div`)),
                Oy.setAttribute(`aria-live`, `assertive`),
                Oy.setAttribute(`aria-atomic`, `true`),
                (Oy.style.position = `absolute`),
                (Oy.style.transform = `scale(0)`),
                document.body.append(Oy)),
              setTimeout(() => {
                Oy.textContent = e;
              }, 60)));
      }),
      (jy =
        xt &&
        typeof f.navigation?.back == `function` &&
        !(
          /* @__PURE__ */ (() => {
            if (s === void 0) return !1;
            let e = s.userAgent,
              t = e.indexOf(`Chrome/`),
              n = +e.slice(t + 7, e.indexOf(`.`, t));
            return n > 101 && n < 128;
          })()
        ) &&
        !dr()),
      (My = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (Ny = /* @__PURE__ */ M.createContext(null)),
      (Py = /* @__PURE__ */ (() => {
        let e = k(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (Fy = typeof document < `u` ? i : N),
      (Iy = /* @__PURE__ */ new Set()),
      (Ly = /* @__PURE__ */ (() => {
        let e = k({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Ry = `yes`),
      (zy = `no`),
      (By = 46),
      (Vy = 47),
      (Hy = (e, t) => e.charCodeAt(t)),
      (Uy = (e, t) => e.lastIndexOf(t)),
      (Wy = (e, t, n) => e.slice(t, n)),
      (Gy = `/`),
      (Ky = (e) => e === Vy),
      (qy = /* @__PURE__ */ new Set([`/404.html`, `/404`, `/404/`])),
      (Jy = `__f_replay`),
      (Yy = `__f_replay_ignore`),
      (Xy = `data-framer-form-hydrated`),
      (Zy = `data-framer-form-pending-submit`),
      (Qy = () => xt),
      ($y =
        /* @__PURE__ */ `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (eb = (e) => {
        e.target?.closest?.(`#main`) &&
          (ua(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (tb = !1),
      (nb = class {
        markRenderStart = ha(() => {
          performance.mark(`framer-hydration-start`);
        });
        markRenderEnd = ha(() => {
          (performance.mark(`framer-hydration-render-end`),
            ga(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        });
        markUseInsertionEffectsStart = ha(() => {
          performance.mark(`framer-hydration-insertion-effects-start`);
        });
        markUseInsertionEffectRouterStart = ha(() => {
          performance.mark(`framer-hydration-router-insertion-effect`);
        });
        markUseInsertionEffectsEnd = ha(() => {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            ga(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        });
        markUseLayoutEffectsStart = ha(() => {
          performance.mark(`framer-hydration-layout-effects-start`);
        });
        markRouterUseLayoutEffectStart = ha(() => {
          performance.mark(`framer-hydration-router-layout-effect`);
        });
        markUseLayoutEffectsEnd = ha(() => {
          (performance.mark(`framer-hydration-layout-effects-end`),
            ga(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        });
        markUseEffectsStart = ha(() => {
          performance.mark(`framer-hydration-effects-start`);
        });
        markUseEffectsRouterStart = ha(() => {
          performance.mark(`framer-hydration-router-effect`);
        });
        markUseEffectsAreSynchronous = ha(() => {
          performance.mark(`framer-hydration-effects-sync`);
        });
        markUseEffectsEnd = ha(() => {
          (performance.mark(`framer-hydration-effects-end`),
            ga(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        });
        markRafStart = ha(() => {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        });
        markRafEnd = ha(() => {
          (performance.mark(`framer-hydration-browser-raf-end`),
            ga(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        });
        markLayoutStylePaintEnd = ha(() => {
          (performance.mark(`framer-hydration-first-paint`),
            ga(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            ga(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        });
        measureMutationEffects = ha(() => {
          ga(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        });
        measureUnattributedHydrationOverhead = ha(() => {
          ga(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        });
        render = { markStart: () => this.markRenderStart(), markEnd: () => this.markRenderEnd() };
        mutationEffects = { measure: () => this.measureMutationEffects() };
        useInsertionEffects = {
          markStart: () => this.markUseInsertionEffectsStart(),
          markRouterStart: () => this.markUseInsertionEffectRouterStart(),
          markEnd: () => this.markUseInsertionEffectsEnd(),
        };
        useLayoutEffects = {
          markStart: () => this.markUseLayoutEffectsStart(),
          markRouterStart: () => this.markRouterUseLayoutEffectStart(),
          markEnd: () => this.markUseLayoutEffectsEnd(),
        };
        useEffects = {
          markStart: () => this.markUseEffectsStart(),
          markRouterStart: () => this.markUseEffectsRouterStart(),
          markEnd: () => this.markUseEffectsEnd(),
          markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
        };
        browserRendering = {
          hasStarted: !1,
          requestAnimationFrame: {
            markStart: () => this.markRafStart(),
            markEnd: () => this.markRafEnd(),
          },
          layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
        };
        unattributedHydrationOverhead = {
          measure: () => this.measureUnattributedHydrationOverhead(),
        };
      }),
      (ib = !1),
      (ab = { Start: xa, End: Sa }),
      (ob = class extends Error {}),
      (sb = class extends b {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof ob)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Ca(e, t);
        }
      }),
      (cb = /* @__PURE__ */ Object.freeze([])),
      (ub = /* @__PURE__ */ new Set()),
      (db = class {
        observers = /* @__PURE__ */ new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (fb = /* @__PURE__ */ (() => {
        function e(e) {
          return (
            Ga(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Ka(e) ? e : new hb(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = /* @__PURE__ */ new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : Ka(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              t[n] = Ka(r) ? r.get() : r;
            }
            return t;
          }),
          e
        );
      })()),
      (pb = `onUpdate`),
      (mb = `finishTransaction`),
      (hb = class {
        value;
        observers = new db();
        constructor(e) {
          this.value = e;
        }
        static interpolationFor(e, t) {
          if (Ka(e)) return qa(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Ka(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      (function (e) {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Ya(e.x, t.x), y: Ya(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(e) {
          let t = Za.centroid(e),
            n = /* @__PURE__ */ new Map();
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            i && n.set(i, Math.atan2(i.y - t.y, i.x - t.x));
          }
          return e.sort((e, t) => (n.get(e) ?? 0) - (n.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((Za ||= {})),
      (gb = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (_b = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
            (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (_b.hexChars = `0123456789abcdef`),
      (_b.refY = 1),
      (_b.refU = 0.19783000664283),
      (_b.refV = 0.46831999493879),
      (_b.kappa = 903.2962962),
      (_b.epsilon = 0.0088564516),
      (_b.m_r0 = 3.240969941904521),
      (_b.m_r1 = -1.537383177570093),
      (_b.m_r2 = -0.498610760293),
      (_b.m_g0 = -0.96924363628087),
      (_b.m_g1 = 1.87596750150772),
      (_b.m_g2 = 0.041555057407175),
      (_b.m_b0 = 0.055630079696993),
      (_b.m_b1 = -0.20397695888897),
      (_b.m_b2 = 1.056971514242878),
      (vb = /* @__PURE__ */ new _b()),
      (yb = /* @__PURE__ */ (() => {
        let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
          t = `[\\s|\\(]+(` + e + `)[,|\\s]+(` + e + `)[,|\\s]+(` + e + `)\\s*\\)?`,
          n =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)\\s*\\)?`;
        return {
          rgb: RegExp(`rgb` + t),
          rgba: RegExp(`rgba` + n),
          hsl: RegExp(`hsl` + t),
          hsla: RegExp(`hsla` + n),
          hsv: RegExp(`hsv` + t),
          hsva: RegExp(`hsva` + n),
          hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
          hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
          hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
          hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        };
      })()),
      (bb =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (xb = (e) => {
        let { r: t, g: n, b: r, a: i } = So(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Sb = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        wo({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Cb = (e) => {
        let { r: t, g: n, b: r, a: i } = So(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (wb = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        wo({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Tb = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return To(this);
        }
        rgb() {
          return ko(this);
        }
        hsl() {
          return so(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Do(t));
            case `srgb`:
              return new e(Oo(Do(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Oo({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = X(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = bo(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!z(t) || !X.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Eb = /* @__PURE__ */ new Map()),
      (X = /* @__PURE__ */ (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Eb.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Eb.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Ao(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          }
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && _o(e) !== !1),
          (e.isColorObject = (e) =>
            V(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => oo(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && Tb.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...no(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = uo(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = uo(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = oo(e.r, e.g, e.b, !0);
            for (let e of Object.keys(gb)) if (gb[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Qa(i, [0, 1], [t.r, r.r], a),
                g: Qa(i, [0, 1], [t.g, r.g], a),
                b: Qa(i, [0, 1], [t.b, r.b], a),
                a: Qa(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Qa(i, [0, 1], [u, u + f], a),
                s: Qa(i, [0, 1], [c.s, l.s], a),
                l: Qa(i, [0, 1], [c.l, l.l], a),
                a: Qa(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(ro(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => so(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !(
              (t.toLowerCase().slice(-5) !== `color` && t !== `fill` && t !== `stroke`) ||
              typeof n != `string` ||
              !e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (Db = (e) => e instanceof Te),
      (Ob = /* @__PURE__ */ De((e, t) => {
        var n = Object.prototype.hasOwnProperty,
          r = `~`;
        function i() {}
        Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
        function a(e, t, n) {
          ((this.fn = e), (this.context = t), (this.once = n || !1));
        }
        function o(e, t, n, i, o) {
          if (typeof n != `function`) throw TypeError(`The listener must be a function`);
          var s = new a(n, i || e, o),
            c = r ? r + t : t;
          return (
            e._events[c]
              ? e._events[c].fn
                ? (e._events[c] = [e._events[c], s])
                : e._events[c].push(s)
              : ((e._events[c] = s), e._eventsCount++),
            e
          );
        }
        function s(e, t) {
          --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
        }
        function c() {
          ((this._events = new i()), (this._eventsCount = 0));
        }
        ((c.prototype.eventNames = function () {
          var e = [],
            t,
            i;
          if (this._eventsCount === 0) return e;
          for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
          return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
        }),
          (c.prototype.listeners = function (e) {
            var t = r ? r + e : e,
              n = this._events[t];
            if (!n) return [];
            if (n.fn) return [n.fn];
            for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
            return o;
          }),
          (c.prototype.listenerCount = function (e) {
            var t = r ? r + e : e,
              n = this._events[t];
            return n ? (n.fn ? 1 : n.length) : 0;
          }),
          (c.prototype.emit = function (e, t, n, i, a, o) {
            var s = r ? r + e : e;
            if (!this._events[s]) return !1;
            var c = this._events[s],
              l = arguments.length,
              u,
              d;
            if (c.fn) {
              switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                case 1:
                  return (c.fn.call(c.context), !0);
                case 2:
                  return (c.fn.call(c.context, t), !0);
                case 3:
                  return (c.fn.call(c.context, t, n), !0);
                case 4:
                  return (c.fn.call(c.context, t, n, i), !0);
                case 5:
                  return (c.fn.call(c.context, t, n, i, a), !0);
                case 6:
                  return (c.fn.call(c.context, t, n, i, a, o), !0);
              }
              for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
              c.fn.apply(c.context, u);
            } else {
              var f = c.length,
                p;
              for (d = 0; d < f; d++)
                switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                  case 1:
                    c[d].fn.call(c[d].context);
                    break;
                  case 2:
                    c[d].fn.call(c[d].context, t);
                    break;
                  case 3:
                    c[d].fn.call(c[d].context, t, n);
                    break;
                  case 4:
                    c[d].fn.call(c[d].context, t, n, i);
                    break;
                  default:
                    if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                    c[d].fn.apply(c[d].context, u);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (e, t, n) {
            return o(this, e, t, n, !1);
          }),
          (c.prototype.once = function (e, t, n) {
            return o(this, e, t, n, !0);
          }),
          (c.prototype.removeListener = function (e, t, n, i) {
            var a = r ? r + e : e;
            if (!this._events[a]) return this;
            if (!t) return (s(this, a), this);
            var o = this._events[a];
            if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
            else {
              for (var c = 0, l = [], u = o.length; c < u; c++)
                (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
              l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (e) {
            var t;
            return (
              e
                ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                : ((this._events = new i()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = r),
          (c.EventEmitter = c),
          t !== void 0 && (t.exports = c));
      })),
      (kb = Ob().EventEmitter),
      (Ab = class {
        _emitter = new kb();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (jb = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Mb = Ot.requestAnimationFrame || jb),
      (Nb = (e) => Mb(e)),
      (Pb = 1 / 60),
      (Fb = class extends Ab {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          Pb = e;
        }
        static get TimeStep() {
          return Pb;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return (this._started || ((this._frame = 0), (this._started = !0), Nb(this.tick)), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Pb;
        }
        tick = () => {
          this._started &&
            (Nb(this.tick),
            this.emit(`update`, this._frame, Pb),
            this.emit(`render`, this._frame, Pb),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (Ib = /* @__PURE__ */ new Fb()),
      (Lb = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Le({
        borderTopWidth: Lb(`y`),
        borderLeftWidth: Lb(`x`),
        borderRightWidth: Lb(`x`),
        borderBottomWidth: Lb(`y`),
      }),
      (Rb = /* @__PURE__ */ M.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (zb = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (Bb = {
        ...zb,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (Vb = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Hb = { ...Vb, fontWeight: 500 }),
      (Ub = {
        ...Vb,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Wb = (e) => e),
      (Gb =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Kb = /* #__PURE__ */ Wo(
        (e) =>
          Gb.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (qb = (e) => () => {
        Wa(e);
      }),
      (Jb = () => () => {}),
      (Yb = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = Zb.useImageSource(e, t, n);
          return C(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        fontStore: {
          isSelectorLoaded() {
            return !0;
          },
          async loadFonts() {
            return { newlyLoadedFontCount: 0 };
          },
          async loadWebFontsFromSelectors() {
            return [];
          },
          async loadMissingFonts() {},
        },
        isOnPageCanvas: !1,
      }),
      (Xb = !1),
      (Zb = /* @__PURE__ */ new Proxy(Yb, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? Jb()
              : qb(
                  Xb
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (Qb = {
        isSelectorLoaded(e) {
          return Zb.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return Zb.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return Zb.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return Zb.fontStore.loadMissingFonts(e, t);
        },
      }),
      ($b = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (ex = [1, 2, 2.2]),
      (tx = [512, 1024, 2048, 4096]),
      (nx = { position: `absolute`, ...$b, top: 0, right: 0, bottom: 0, left: 0 }),
      (rx = `src`),
      (ix = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && rx in e;
        },
      }),
      (ax = /* @__PURE__ */ (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = fs(Za.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(Za(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => Za.distance(e.a, e.b)),
          e
        );
      })()),
      (Z = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => Z.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: Ja(e.x, t),
          y: Ja(e.y, t),
          width: Ja(e.width, t),
          height: Ja(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: Z.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Z.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: Za.distance(t, n), height: Za.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(Z.minX)), y: Math.min(...e.map(Z.minY)) },
            n = { x: Math.max(...e.map(Z.maxX)), y: Math.max(...e.map(Z.maxY)) };
          return Z.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Z.minX(e), y: Z.minY(e) },
          { x: Z.minX(e), y: Z.maxY(e) },
          { x: Z.maxX(e), y: Z.minY(e) },
          { x: Z.maxX(e), y: Z.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < Z.minX(e) ||
            t.x > Z.maxX(e) ||
            t.y < Z.minY(e) ||
            t.y > Z.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Z.points(t)) if (!Z.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= Z.maxX(e) || Z.maxX(t) <= e.x || t.y >= Z.maxY(e) || Z.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = Z.maxX(e),
            r = Z.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Z.maxY(e),
            r = Z.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => !t.some((t) => Z.intersects(t, e)),
        isEqual: (e, t) => Z.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > Z.maxX(e) && (n = t.x - Z.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > Z.maxY(e) && (r = t.y - Z.maxY(e)),
            Za.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Z.minX(e), y: Z.minY(e) },
            r = { x: Z.minX(t), y: Z.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = Z.minX(e),
            r = Z.minY(e),
            i = Z.maxX(e),
            a = Z.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Z.cornerPoints(e);
          return [ax(t, n), ax(n, r), ax(r, i), ax(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  U(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              U(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  U(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              U(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = Z.center(e),
            r = ax(t, n),
            i = Z.edges(e);
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if (t && ax.intersection(r, t, !0)) {
              let n = ox[e];
              return (H(n, () => `Invalid edge name: ${JSON.stringify(ox)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          H(r, `Rect array is empty`);
          let i = Z.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            H(o);
            let s = Z.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (ox = [`top`, `right`, `bottom`, `left`]),
      (sx = {
        quickfix: (e) => (
          (ps(e.widthType) || ps(e.heightType)) && (e.aspectRatio = null),
          q(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || ps(e.widthType) || q(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || ps(e.heightType) || q(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (cx = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = sx.quickfix({
              left: q(t) || Ka(t),
              right: q(n) || Ka(n),
              top: q(r) || Ka(r),
              bottom: q(i) || Ka(i),
              widthType: ms(a),
              heightType: ms(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = fb.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = fb.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? fb.getNumber(t) : null,
              right: d.right ? fb.getNumber(n) : null,
              top: d.top ? fb.getNumber(r) : null,
              bottom: d.bottom ? fb.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? fb.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? fb.getNumber(t?.sizing.height) : null,
            c = bs(e.left, e.right);
          if (o && q(c)) i = o - c;
          else if (n && ps(e.widthType)) i = n.width;
          else if (q(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                U(e.widthType);
            }
          let l = bs(e.top, e.bottom);
          if (s && q(l)) a = s - l;
          else if (n && ps(e.heightType)) a = n.height;
          else if (q(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                U(e.heightType);
            }
          return ys(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = cx.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? fb.getNumber(l.width) : null,
            d = l ? fb.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? Z.pixelAligned(f) : f;
        },
      }),
      (lx = 200),
      (ux = 200),
      (dx = /* @__PURE__ */ M.createContext({ parentSize: 0 })),
      (fx = (e) => {
        let t = Os(),
          { parentSize: n, children: r } = e,
          i = M.useMemo(() => ({ parentSize: n }), [As(n), js(n)]);
        return t === 1
          ? r
            ? /* @__PURE__ */ E(v, { children: r })
            : null
          : /* @__PURE__ */ E(dx.Provider, { value: i, children: r });
      }),
      (px = /* @__PURE__ */ M.createContext(void 0)),
      (mx = `style[data-framer-css-ssr-minified]`),
      (hx = /* #__PURE__ */ (() => {
        if (!pr()) return /* @__PURE__ */ new Set();
        let e = document.querySelector(mx)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : /* @__PURE__ */ new Set();
      })()),
      (gx = `data-framer-css-ssr`),
      (_x = (e, t, n) => (
        Ls() &&
          n !== void 0 &&
          !Je(t) &&
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).filter(Boolean),
        M.forwardRef((r, i) => {
          let { sheet: a, cache: o } = M.useContext(px) ?? {},
            s = n;
          if (!pr()) {
            Je(t) && (t = t(Rs(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            yx.add(e, s);
          }
          return (
            c(() => {
              (s && hx.has(s)) ||
                (Je(t)
                  ? t(Rs(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && ct(e, a, o));
            }, []),
            /* @__PURE__ */ E(e, { ...r, ref: i })
          );
        })
      )),
      (vx = class {
        styles = /* @__PURE__ */ new Set();
        componentIds = /* @__PURE__ */ new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (yx = /* @__PURE__ */ new vx()),
      (Sx = /* @__PURE__ */ ur()),
      (Cx = /* @__PURE__ */ M.createContext(!1)),
      (wx = class {
        sharedResizeObserver;
        callbacks = /* @__PURE__ */ new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (Tx = pr() ? new wx() : void 0),
      (Ex = `0.000001px`),
      (Dx = ` translateZ(${Ex})`),
      (Ox = hr() || dr() || gr()),
      (kx = /* @__PURE__ */ (() => {
        class e extends b {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? tc(t) : nc(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !En(this.props, e);
          }
          componentDidUpdate(e) {
            Wb(this.props).clip &&
              Wb(this.props).radius === 0 &&
              Wb(e).radius !== 0 &&
              ic(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (Ax = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (jx = {
        hueRotate: (e, t) => X.toHslString(X.hueRotate(X(e), t)),
        setAlpha: (e, t) => X.toRgbString(X.alpha(X(e), t)),
        getAlpha: (e) => {
          let t = _o(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => X.toRgbString(X.multiplyAlpha(X(e), t)),
        toHexValue: (e) => X.toHex(X(e)).toUpperCase(),
        toHex: (e) => X.toHexString(X(e)).toUpperCase(),
        toRgb: (e) => X.toRgb(X(e)),
        toRgbString: (e) => X.toRgbString(X(e)),
        toHSV: (e) => X.toHsv(X(e)),
        toHSL: (e) => X.toHsl(X(e)),
        toHslString: (e) => X.toHslString(X(e)),
        toHsvString: (e) => X.toHsvString(X(e)),
        hsvToHSLString: (e) => X.toHslString(X(io(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => X.toHex(X(io(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => X.toHexString(X(io(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => X.toRgbString(X(io(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => io(e.h, e.s, e.v),
        rgbaToString: (e) => X.toRgbString(X(e)),
        rgbToHexValue: (e) => X.toHex(X(e)),
        rgbToHexString: (e) => X.toHexString(X(e)),
        hslToString: (e) => X.toHslString(X(e)),
        hslToRgbString: (e) => X.toRgbString(X(e)),
        toColorPickerSquare: (e) => X.toRgbString(X({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => X(e).isValid !== !1,
        equals: (e, t) =>
          X.isP3String(e) || X.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = X(e)),
              typeof t == `string` && (t = X(t)),
              X.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = X(e);
          return t.a === 1 ? X.toHexString(t) : X.toRgbString(t);
        },
        toFormatString: (e) => (X.isP3String(e) ? e : X.toRgbString(X(e))),
      }),
      (Mx = /var\(.+\)/u),
      (Nx = /* @__PURE__ */ new Map()),
      (Px = [`stops`]),
      (Fx = [`start`, `end`]),
      (Ix = [`angle`, `alpha`]),
      (Lx = {
        isLinearGradient: (e) => V(e) && Ix.every((t) => t in e) && (fc(e) || dc(e)),
        hash: (e) => e.angle ^ uc(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = lc(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (Rx = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (zx = {
        isRadialGradient: (e) => V(e) && Rx.every((t) => t in e) && (fc(e) || dc(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ uc(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = lc(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (Bx = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (Vx = /* @__PURE__ */ new Set([...Bx, ...Bx.map((e) => `${e}Capture`)])),
      (Hx = `overflow`),
      (Ux = { x: 0, y: 0, width: 200, height: 200 }),
      (Wx = /* @__PURE__ */ new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (Gx = /* @__PURE__ */ D(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: l } = Gs(e),
          u = Cc(c),
          d = qs(e),
          f = vc(e),
          p = _(null),
          m = n ?? p,
          h = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": f,
            "data-framer-highlight": f === `pointer` || void 0,
            "data-layoutid": d,
            "data-framer-offset-parent-id": Wb(e)[`data-framer-offset-parent-id`],
          };
        !wc(e) && r && (Wb(h)[`data-framer-name`] = r);
        let [g, y] = Sc(c),
          b = xc(c),
          x = Ps(b),
          S = i && !(y && !x && Ss(b)) ? i : void 0;
        (S ? (u.transformTemplate ||= Ks(i)) : (u.transformTemplate ||= void 0),
          Object.assign(h, Us(S, c.style)),
          $s(e, m));
        let C = cs(e),
          T = Tc(c, b, y, t(Cx)),
          D = Ms(
            /* @__PURE__ */ w(v, {
              children: [
                C
                  ? /* @__PURE__ */ E(is, {
                      alt: e.alt ?? ``,
                      image: C,
                      containerSize: y ?? void 0,
                      nodeId: e.id && Ws(e.id),
                      layoutId: d,
                    })
                  : null,
                l,
                /* @__PURE__ */ E(os, { ...o, border: a, layoutId: d }),
              ],
            }),
            T
          ),
          O = Is(e.as),
          k = Fs(C);
        return (
          e.fitImageDimension &&
            k &&
            ((g[e.fitImageDimension] = `auto`), (g.aspectRatio = k.width / k.height)),
          /* @__PURE__ */ w(O, { ...h, ...u, layoutId: d, style: g, ref: m, children: [D, s] })
        );
      })),
      (Kx = /* @__PURE__ */ Vs(
        /* @__PURE__ */ D(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? /* @__PURE__ */ E(Gx, { ...e, ref: t }) : null;
        })
      )),
      (qx = `__LAYOUT_TREE_ROOT`),
      (Jx = /* @__PURE__ */ M.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (Yx = class extends b {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity:
                  t.options.layoutId === `__LAYOUT_TREE_ROOT` && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return /* @__PURE__ */ E(Jx.Provider, {
            value: this.sharedLayoutContext,
            children: this.props.children,
          });
        }
      }),
      (Xx = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Zx = class {
        sharedIntersectionObserver;
        callbacks = /* @__PURE__ */ new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (Qx = /* @__PURE__ */ k(/* @__PURE__ */ new Map())),
      ($x = typeof IntersectionObserver > `u` ? bt : Nc),
      (eS = /* @__PURE__ */ Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (tS = /* @__PURE__ */ M.createContext(null)),
      (nS = class extends b {
        layoutMaybeMutated = !1;
        projectionNodes = /* @__PURE__ */ new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) =>
          e.options.layoutId === `__LAYOUT_TREE_ROOT` && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return /* @__PURE__ */ E(Ve.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (rS = (e) => {
        let t = M.useContext(Jx);
        return /* @__PURE__ */ E(nS, { ...e, sharedLayoutContext: t });
      }),
      (iS = /* @__PURE__ */ M.createContext(!0)),
      (aS = /* @__PURE__ */ k({ register: () => {}, deregister: () => {} })),
      (oS = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = Rc(),
          i = u(
            (e) => {
              r.has(e)
                ? console.warn(`NavigationTargetWrapper: already registered`)
                : r.set(e, void 0);
            },
            [r]
          ),
          a = u(
            (e) => {
              (r.get(e)?.(), r.delete(e));
            },
            [r]
          ),
          o = _({ register: i, deregister: a }).current;
        return (
          N(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, Je(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          /* @__PURE__ */ E(aS.Provider, { value: o, children: n })
        );
      }),
      (sS = /* @__PURE__ */ M.memo(function ({
        isLayeredContainer: e,
        isCurrent: n,
        isPrevious: r,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: c,
        onTapBackdrop: l,
        backfaceVisible: u,
        exitBackfaceVisible: d,
        animation: f,
        exitAnimation: p,
        instant: m,
        initialProps: h,
        exitProps: g,
        position: v = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: y,
        index: b,
        areMagicMotionLayersPresent: x,
        id: S,
        isInitial: C,
      }) {
        let T = se(),
          D = t(Ne),
          { persistLayoutIdCache: O } = t(Rb),
          k = _({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Vc({}, h, o),
          }),
          A = _(null),
          j = D !== null && !D.isPresent;
        (n && k.current.wasCurrent === void 0 && O(),
          N(() => {
            if (e || !T) return;
            if (j) {
              k.current = { ...k.current, wasBeingRemoved: j };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = k.current,
              a = (n && !i) || (!j && k.current.wasBeingRemoved && n),
              s = r && !t,
              c = Vc(k.current.origins, h, o),
              l = k.current.wasReset;
            (a || s
              ? (T.stop(), T.start({ zIndex: b, ...c, ...o }), (l = !1))
              : l === !1 && (T.stop(), T.set({ zIndex: b, ...cS, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, j]));
        let M = m ? { type: !1 } : `velocity` in f ? { ...f, velocity: 0 } : f,
          ee = m ? { type: !1 } : p || f,
          P = { ...v };
        ((P.left === void 0 || P.right === void 0) && (P.width = `auto`),
          (P.top === void 0 || P.bottom === void 0) && (P.height = `auto`));
        let F = (Hc(o) || Hc(h)) && (e || n || r) ? 1200 : void 0,
          te = { ...cS, ...k.current.origins },
          ne = e
            ? {
                initial: { ...te, ...h },
                animate: { ...te, ...o, transition: M },
                exit: { ...te, ...g, transition: f },
              }
            : { animate: T, exit: { ...te, ...g, transition: ee } },
          re = !(j || x === !1),
          ie = !!n && re,
          ae = n && C;
        return /* @__PURE__ */ w(Kx, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || j || (n && y) ? b : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: F,
          },
          children: [
            e &&
              /* @__PURE__ */ E(Kx, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: f,
                initial: { opacity: m && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: c || `transparent`,
                onTap: j ? void 0 : l,
              }),
            /* @__PURE__ */ E(Kx, {
              ...P,
              ...ne,
              transition: {
                default: M,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: j ? d : u,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: { pointerEvents: void 0, opacity: ae || e || (n && y) ? 1 : 0 },
              "data-is-present": re ? void 0 : !1,
              ref: A,
              children: /* @__PURE__ */ E(tS.Provider, {
                value: A,
                children: /* @__PURE__ */ E(iS.Provider, {
                  value: ie,
                  children: /* @__PURE__ */ E(oS, {
                    isCurrent: ie,
                    isOverlayed: i,
                    children: /* @__PURE__ */ E(rS, {
                      isLead: n,
                      animatesLayout: !!y,
                      transition: M,
                      isExiting: !re,
                      isOverlayed: i,
                      id: S,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, Bc)),
      (cS = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (lS = class {
        warning = () => {
          Wa(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (uS = /* @__PURE__ */ k(/* @__PURE__ */ new lS())),
      (dS = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (fS = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (pS = /* @__PURE__ */ vv(cS)),
      (mS = /* @__PURE__ */ M.createContext(void 0)),
      (hS = /* @__PURE__ */ M.createContext(void 0)),
      (gS = /* @__PURE__ */ (() => {
        class e extends b {
          #e = null;
          state = fS();
          static defaultProps = { enabled: !0 };
          static contextType = mS;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !ds(t) || !us(t)) return;
            let n = { ...dS.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = Kc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!ds(t) || !us(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, dS.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = Kc(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !ds(e) || !us(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, dS.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, dS.Fade, t);
          }
          push(e, t) {
            this.#i(e, Uc(t), t);
          }
          modal(e, t) {
            this.#i(e, dS.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, Wc(t), t);
          }
          flip(e, t) {
            this.#i(e, Gc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, dS.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = sl(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              H(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              H(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                /* @__PURE__ */ E(
                  sS,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: _l(o, e),
                    transitionProps: u,
                    animation: gl(o, e),
                    backfaceVisible: ml(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: /* @__PURE__ */ E(Ec, {
                      children: yl({ component: n, transition: l?.transition }),
                    }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              /* @__PURE__ */ E(
                sS,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: pl(n, t),
                  transitionProps: hl(n, t),
                  instant: _l(n, t, !0),
                  animation: gl(n, t),
                  exitProps: e.transition.enter,
                  visible: vl(n, t),
                  backdropColor: dl(e.transition),
                  backfaceVisible: fl(n, t),
                  onTapBackdrop: bl(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: yl({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return /* @__PURE__ */ E(Kx, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: /* @__PURE__ */ E(uS.Provider, {
                value: this,
                children: /* @__PURE__ */ w(hS.Provider, {
                  value: i,
                  children: [
                    /* @__PURE__ */ E(sS, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: cl(n),
                      animation: ll(n),
                      backfaceVisible: ul(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: /* @__PURE__ */ E(Io, {
                        children: /* @__PURE__ */ E(Yx, {
                          children: /* @__PURE__ */ E(Fe, {
                            presenceAffectsLayout: !1,
                            children: a,
                          }),
                        }),
                      }),
                    }),
                    /* @__PURE__ */ E(Fe, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (_S = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (vS = /* @__PURE__ */ Vs(/* @__PURE__ */ M.forwardRef(xl))),
      (yS = /* @__PURE__ */ (function (e) {
        return (
          (e.Boolean = `boolean`),
          (e.Number = `number`),
          (e.MotionValue = `motionvalue`),
          (e.Dimension = `dimension`),
          (e.String = `string`),
          (e.RichText = `richtext`),
          (e.FusedNumber = `fusednumber`),
          (e.Enum = `enum`),
          (e.SegmentedEnum = `segmentedenum`),
          (e.Color = `color`),
          (e.Image = `image`),
          (e.ResponsiveImage = `responsiveimage`),
          (e.File = `file`),
          (e.ComponentInstance = `componentinstance`),
          (e.Slot = `slot`),
          (e.Array = `array`),
          (e.EventHandler = `eventhandler`),
          (e.ChangeHandler = `changehandler`),
          (e.Transition = `transition`),
          (e.BoxShadow = `boxshadow`),
          (e.Link = `link`),
          (e.Date = `date`),
          (e.Object = `object`),
          (e.Font = `font`),
          (e.PageScope = `pagescope`),
          (e.ScrollSectionRef = `scrollsectionref`),
          (e.Ref = `ref`),
          (e.CustomCursor = `customcursor`),
          (e.Border = `border`),
          (e.Cursor = `cursor`),
          (e.Padding = `padding`),
          (e.BorderRadius = `borderradius`),
          (e.Gap = `gap`),
          (e.CollectionReference = `collectionreference`),
          (e.MultiCollectionReference = `multicollectionreference`),
          (e.TrackingId = `trackingid`),
          (e.VectorSetItem = `vectorsetitem`),
          (e.LinkRelValues = `linkrelvalues`),
          (e.Location = `location`),
          (e.SharedType = `sharedtype`),
          e
        );
      })({})),
      (bS = /* @__PURE__ */ Symbol.for(`framer.sharedEnum`)),
      (xS = `optional`),
      (SS = `outputControls`),
      (CS = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (wS = /* @__PURE__ */ Symbol(`private`)),
      (TS = /* @__PURE__ */ (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [wS]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new db(),
                reset() {
                  for (let t in i)
                    if (CS(i, t)) {
                      let n = CS(e, t) ? Wb(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: /* @__PURE__ */ new Set(),
              },
            },
            i = new Proxy(r, DS);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[wS].reset()),
          (e.addObserver = (e, t) => e[wS].observers.add(t)),
          e
        );
      })()),
      (ES = class {
        set = (e, t, n, r) => {
          if (t === wS) return !1;
          let i = e[wS],
            a,
            o;
          if (
            (Ka(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = fb(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = Wb(e)[t];
          if (l !== void 0) {
            Ka(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Wb(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === wS) return Wb(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[wS].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(wS);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== wS) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (DS = /* @__PURE__ */ new ES()),
      (OS = /* @__PURE__ */ (() => {
        function e(t = {}) {
          let n = TS(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => TS.resetObject(e));
          }),
          (e.addObserver = (e, t) => TS.addObserver(e, t)),
          e
        );
      })()),
      (kS = { update: 0 }),
      (AS = /* @__PURE__ */ M.createContext({ update: NaN })),
      (jS = class extends b {
        observers = [];
        state = kS;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), Ib.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), OS.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            OS._stores.forEach((e) => {
              let t = OS.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            /* @__PURE__ */ E(AS.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      (MS = `__framer__`),
      (NS = 10),
      (PS = /* @__PURE__ */ M.createContext(void 0)),
      (FS = /* @__PURE__ */ M.createContext(void 0)),
      (IS = `ssr-variant`),
      (LS = `ssr-variant-group-separator`),
      (RS = /* @__PURE__ */ M.forwardRef(function (e, t) {
        let n = Ul(t),
          r = M.useContext(FS),
          i = M.useSyncExternalStore(Tt, Dt, Et),
          a = zo(() => (i ? (pr() ? 1 : 2) : 0)),
          o = M.useContext(PS);
        return Pi(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, Zl(t, c, i));
            case 1:
              return Kl(i, s, c, u, l, d, n, t);
            case 2:
              return Kl(i, s, c, u, l, d, Hl, void 0);
            default:
              U(a);
          }
        }, [o, r, n, e]);
      })),
      (zS = /* @__PURE__ */ _x(RS, `.${IS} { display: contents }`, `PropertyOverrides`)),
      (BS = `default`),
      (VS = /* @__PURE__ */ new Set([BS])),
      (HS = class {
        entries = /* @__PURE__ */ new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (H(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (H(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
          }
        }
        setHash(e, t = BS, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return BS;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = ql(r)) : BS;
        }
        setAll(e, t = VS, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Je(n.transformTemplate) ? n.transformTemplate?.({}, WS) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: V(a) ? a : void 0,
              animate: V(o) ? o : void 0,
              transformTemplate: z(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (US = /* @__PURE__ */ new HS()),
      (WS = `__Appear_Animation_Transform__`),
      (GS = `data-framer-appear-id`),
      (KS = `data-framer-appear-animation`),
      (qS = (e) => {
        if (Ho())
          return {
            animate: $l(e.animate) ? e.animate : void 0,
            initial: $l(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (JS = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (YS = (e) => ({
        x: L(e?.x ?? 0),
        y: L(e?.y ?? 0),
        opacity: L(e?.opacity ?? 1),
        scale: L(e?.scale ?? 1),
        rotate: L(e?.rotate ?? 0),
        rotateX: L(e?.rotateX ?? 0),
        rotateY: L(e?.rotateY ?? 0),
        skewX: L(e?.skewX ?? 0),
        skewY: L(e?.skewY ?? 0),
        transformPerspective: L(e?.transformPerspective ?? 0),
      })),
      (XS = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (ZS = /* @__PURE__ */ Object.freeze({ willChange: `transform` })),
      (QS = /* @__PURE__ */ Object.freeze({})),
      ($S = /* @__PURE__ */ new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (eC = () => {
        let e = _();
        return (
          N(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (tC = /* @__PURE__ */ new Set([
        `speed`,
        `adjustPosition`,
        `offset`,
        `parallaxTransformEnabled`,
      ])),
      (nC = /* @__PURE__ */ new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (rC = 1),
      (iC = 4),
      (aC = /* @__PURE__ */ new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (oC = [`animate`, `animate`]),
      (sC = { inputRange: [], outputRange: [] }),
      (cC = /* @__PURE__ */ new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (lC = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (uC = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (dC = [0, 1]),
      (fC = { parallax: tC, styleAppear: aC, styleTransform: cC, loop: $S, presence: nC }),
      (pC = /* @__PURE__ */ vv(fC)),
      (mC = (e) => e.reduce((e, t) => (e += t), 0)),
      (hC = (e) => e.reduce((e, t) => (e *= t), 1)),
      (gC = `current`),
      (_C = (e) =>
        M.forwardRef((t, n) => {
          let r = !We(e);
          if (t.__withFX) {
            let i = { ...t };
            return (
              r || Reflect.deleteProperty(i, `__withFX`),
              /* @__PURE__ */ E(e, { ...i, animate: void 0, initial: void 0, exit: void 0, ref: n })
            );
          }
          let i = qS(t);
          if (i) return /* @__PURE__ */ E(e, { ...Su(t).forwardedProps, ...i, ref: n });
          let {
              parallax: a = {},
              styleAppear: o = {},
              styleTransform: s = {},
              presence: c = {},
              loop: l = {},
              forwardedProps: u,
              targetOpacityValue: d,
              withPerspective: f,
              inSmartComponent: p = !1,
            } = Su(t),
            m = Ac(n),
            { values: h, style: g } = cu(
              c,
              m,
              p,
              Qe(d) ? t.style : { ...t.style, opacity: void 0 },
              t[ne]
            ),
            { values: _, style: v } = iu(a, m, t.style?.visibility),
            { values: y, style: b } = bu(s, m),
            { values: x, style: S } = gu(o, m),
            { values: C, style: w } = nu(l, m),
            T = M.useMemo(() => {
              let e = new Te(d ?? 1);
              return {
                scale: [x.scale, C.scale, h.scale, y.scale],
                opacity: [x.opacity, C.opacity, h.opacity, e, y.opacity],
                x: [x.x, C.x, h.x, y.x],
                y: [x.y, C.y, _.y, h.y, y.y],
                rotate: [x.rotate, C.rotate, h.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, h.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, h.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, h.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, h.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [d, y, _, x, C, h]);
          wu(t.style, T);
          let D = xe(T.scale, hC),
            O = xe(T.opacity, hC),
            k = xe(T.x, mC),
            A = xe(T.y, mC),
            j = xe(T.rotate, mC),
            N = xe(T.rotateX, mC),
            ee = xe(T.rotateY, mC),
            P = xe(T.skewX, mC),
            F = xe(T.skewY, mC),
            te = xe(T.transformPerspective, mC),
            { drag: re, dragConstraints: ie } = u;
          Ys(re && Cu(ie) ? ie : void 0);
          let ae = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: j,
            rotateX: N,
            rotateY: ee,
            skewX: P,
            skewY: F,
          };
          Qe(f) && (ae.transformPerspective = te);
          let oe = Tu(t.animate) ? t.animate : void 0,
            se = Tu(t.initial) ? t.initial : void 0,
            ce = Tu(t.exit) ? t.exit : void 0,
            le = p && !c.presenceInitial ? { initial: se, animate: oe, exit: ce } : {},
            ue = r ? { __withFX: !0 } : {};
          return /* @__PURE__ */ E(e, {
            ...u,
            ...le,
            ...ue,
            style: { ...t.style, ...v, ...b, ...w, ...ae, ...S, ...g },
            values: h,
            ref: m,
          });
        })),
      (vC = /* @__PURE__ */ k({})),
      (yC = /* @__PURE__ */ M.createContext({})),
      (bC = /* @__PURE__ */ M.forwardRef(function (
        { width: e, height: t, y: n, children: r, ...i },
        a
      ) {
        let o = M.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Ul(a);
        return /* @__PURE__ */ E(yC.Provider, { value: o, children: s(r, i) });
      })),
      (xC = (e) =>
        M.forwardRef((t, n) => {
          let r = Ou(t);
          return /* @__PURE__ */ E(e, { ...r, ref: n });
        })),
      (SC = {}),
      (CC = () => SC),
      (wC = (e) => {
        SC = e;
      }),
      (TC = !1),
      (EC = class extends b {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!ku(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              ot(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          Kn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!ku(e)) throw e;
          return ((TC = !0), this.props.children);
        }
      }),
      (DC = f === void 0 ? null : new Promise(() => {})),
      (OC = /* @__PURE__ */ E(Au, {})),
      (kC = /* @__PURE__ */ (() => {
        let e = k(!1);
        return ((e.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`), e);
      })()),
      (AC = /* @__PURE__ */ E(Mu, {})),
      (jC = class extends b {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Pu(this.props.getErrorMessage(), t?.componentStack), Nu(e, t));
        }
        render() {
          let { children: e, fallback: t = AC } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (MC = class extends b {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Nu(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (NC = /* @__PURE__ */ M.createContext(void 0)),
      (PC = `code-crash:`),
      (FC = /* @__PURE__ */ xC(
        /* @__PURE__ */ M.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            rendersWithMotion: c,
            __withFX: l,
            ...u
          },
          d
        ) {
          let f = zo(() => (t ? `${t}-container` : void 0)),
            p = Is(n),
            m = M.useId(),
            h = Yu(
              M.Children.map(e, (e) =>
                M.isValidElement(e) ? M.cloneElement(e, { layoutId: t ?? e.props.layoutId }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return /* @__PURE__ */ E(p, {
            layoutId: f,
            ...u,
            ref: d,
            children: /* @__PURE__ */ E(Cx.Provider, {
              value: !0,
              children: /* @__PURE__ */ E(Ny.Provider, {
                value: i ?? null,
                children: /* @__PURE__ */ E(Ro, {
                  enabled: !1,
                  children: /* @__PURE__ */ E(Ae, {
                    id: t ?? (s ? m : ``),
                    inherit: u.layout ? !0 : `id`,
                    children: h,
                  }),
                }),
              }),
            }),
          });
        })
      )),
      (IC = /* @__PURE__ */ M.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = Yu(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Is(f);
          return /* @__PURE__ */ E(Ny.Provider, {
            value: a ?? null,
            children: /* @__PURE__ */ E(n, { ...u, ref: t, style: e.style, children: d }),
          });
        }
        {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return /* @__PURE__ */ E(Ny.Provider, {
            value: a ?? null,
            children: /* @__PURE__ */ E(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (RC = /* @__PURE__ */ new Set()),
      (zC = /* @__PURE__ */ k({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (BC = `framer-cursor-none`),
      (VC = `framer-pointer-events-none`),
      (HC = /* @__PURE__ */ p(function ({ children: e }) {
        let t = zo(() => {
            let e = /* @__PURE__ */ new Set(),
              t = {},
              n = /* @__PURE__ */ new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = td(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = Re();
        return /* @__PURE__ */ w(zC.Provider, {
          value: t,
          children: [e, !n && /* @__PURE__ */ E(KC, {})],
        });
      })),
      (UC = /* @__PURE__ */ _x(
        HC,
        [
          `.${BC}, .${BC} * { cursor: none !important; }`,
          `.${VC}, .${VC} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (WC = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (GC = `data-framer-portal-id`),
      (KC = /* @__PURE__ */ p(function () {
        let { onRegisterCursors: e } = t(zC),
          n = ed(!1),
          r = _e(0),
          a = _e(0),
          o = _e(0),
          s = _(null),
          c = _({ cursors: {}, cursorHash: void 0 }),
          l = Js();
        (N(() => {
          if (!n) return;
          let e = 0,
            t = 0;
          function i() {
            (r.set(e), a.set(t), Pe(o, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (Ze(c.current.cursors)) return;
            let n = ad(e, t);
            n !== c.current.cursorHash && ((c.current.cursorHash = n), He.update(() => l()));
          };
          function d(n) {
            n.pointerType === `touch`
              ? Oe(u)
              : (He.read(u, !0), (e = n.clientX), (t = n.clientY), He.update(i));
          }
          function f(e) {
            if (e.target === s.current || !s.current) return;
            let t = new PointerEvent(e.type, {
              bubbles: !0,
              cancelable: e.cancelable,
              pointerType: e.pointerType,
              pointerId: e.pointerId,
              composed: e.composed,
              isPrimary: e.isPrimary,
              buttons: e.buttons,
              button: e.button,
            });
            He.update(() => {
              s.current?.dispatchEvent(t);
            });
          }
          return (
            Ot.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            He.read(u, !0),
            () => {
              (Ot.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                Oe(u));
            }
          );
        }, [o, r, a, l, n]),
          N(() => {
            if (!n) return;
            function e() {
              Pe(o, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              Ot.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), Ot.removeEventListener(`blur`, e));
              }
            );
          }, [o, n]),
          i(() => {
            function t(e) {
              ((c.current.cursors = e),
                (c.current.cursorHash = Ze(e) ? null : ad(r.get(), a.get())),
                l());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(BC, !1));
            };
          }, [r, a, e, l]));
        let { cursors: d, cursorHash: f } = c.current,
          p = f ? d[f] : null,
          m = nd(p);
        i(() => {
          n && document.body.classList.toggle(BC, m);
        }, [m, n]);
        let h = p?.component,
          g = p?.transition ?? { duration: 0 },
          v = g.duration === void 0 ? g : { ...g, duration: g.duration * 1e3 },
          y = ye(r, v),
          b = ye(a, v),
          S = xe(() => y.get() + (p?.offset?.x ?? 0)),
          C = xe(() => b.get() + (p?.offset?.y ?? 0)),
          w = p?.alignment,
          T = p?.placement,
          D = u((e, t) => `translate(${id(T, w)}) ${t}`, [w, T]);
        return !n || !p || !h
          ? null
          : /* @__PURE__ */ E(x, {
              children: /* @__PURE__ */ E(h, {
                transformTemplate: D,
                style: { ...WC, x: S, y: C, opacity: o },
                globalTapTarget: !0,
                variant: p?.variant,
                ref: s,
                className: VC,
              }),
            });
      })),
      (qC = `webPageId`),
      (JC = class {
        collectedLinks = /* @__PURE__ */ new Map();
        nestingInfo = /* @__PURE__ */ new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = /* @__PURE__ */ new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            H(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (H(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((xt && !gr()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(cd(e), e), this.collectedLinks.set(cd(t), t));
          let n = this.nestingInfo.get(cd(e)) ?? /* @__PURE__ */ new Set();
          (n.add(cd(t)), this.nestingInfo.set(cd(e), n));
        }
      }),
      (YC = /* @__PURE__ */ new JC()),
      (XC = `element`),
      (ZC = `collection`),
      (QC = `collectionItemId`),
      ($C = `pathVariables`),
      (ew = `framer/page-link,`),
      (tw = /* @__PURE__ */ k(void 0)),
      (nw = class extends b {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((f.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(ot(St ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          Kn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (St && document.getElementById(`main`)?.innerHTML) || ``;
          return /* @__PURE__ */ E(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${ot()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (iw = /:([a-z]\w*)/gi),
      (aw = /* @__PURE__ */ k(void 0)),
      (ow = /* @__PURE__ */ new Map()),
      (sw = 500),
      (cw = 500),
      (uw = !1),
      (dw = 500),
      (fw = 0.9),
      (pw = 1.7),
      (mw = 4),
      (hw = 1 / 0),
      (gw = /* @__PURE__ */ new WeakMap()),
      (_w = /* @__PURE__ */ new Set()),
      (vw = /* @__PURE__ */ new Map()),
      (yw = !gy || typeof IntersectionObserver > `u` ? null : /* @__PURE__ */ Kd()),
      (bw = /* @__PURE__ */ Od(
        /* @__PURE__ */ D(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...u
          },
          d
        ) {
          let f = kn(),
            p = jn(),
            m = Md(),
            { activeLocale: h, locales: g } = Fr(),
            _ = $d(),
            v = Rr(),
            y = ld(),
            b = ef({ nodeId: s, clickTrackingId: i, router: f, href: t, activeLocale: h }),
            x = C(() => {
              if (!t) return {};
              let e = sd(t) ? t : gd(t);
              if (!e) return {};
              if (z(e))
                return df(
                  e,
                  f,
                  p,
                  {
                    openInNewTab: n,
                    trackLinkClick: b,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  v,
                  h?.id,
                  g,
                  m
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = _(i, s, h);
              if (it(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: y,
                  locale: x,
                } = kd(f, p, e, h, c, m),
                S = Jd(n, !0),
                C = S === `_blank`,
                w = uf(u, C, f.siteCanonicalURL),
                T = { pathVariables: y, locale: x },
                E = af(u, w, (e) =>
                  nf(
                    f,
                    l,
                    () =>
                      v(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    y,
                    r,
                    e
                  )
                );
              return {
                href: u,
                target: S,
                onClick: rf(u, b, E),
                "data-framer-page-link-current": (p && Nd(p, e, m)) || void 0,
                navigate: E,
                preload: () =>
                  v(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: y,
                _locale: x,
                _navigationUrl: w,
              };
            }, [t, f, h, m, n, p, r, b, a, g, o, _, v]),
            S = Ac(T(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: w,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              _navigationUrl: A,
              ...j
            } = x;
          jc(
            S,
            (e) => {
              if (e !== null && D && E && A && !y)
                return yw?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`, A);
            },
            [E, D, O, k, A, y]
          );
          let M = !!w;
          return vd(
            Ul(d).cloneAsArray(e, (e) => ff(e, { ...u, ...mf(j, l, M) }, S)),
            c,
            s,
            t,
            x,
            S
          );
        })
      )),
      (xw = `framer`),
      (Sw = 3),
      (Cw = 30),
      (ww = 1e4),
      (Tw = `__framer`),
      (Ew = `3`),
      (Dw = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (Ow = /* @__PURE__ */ Date.now()),
      (kw = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (Aw = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (jw = () => ((Date.now() - Ow) / 1e3).toFixed(2)),
      (Mw = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          M.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          M.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = jw())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = jw()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = jw()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          /* @__PURE__ */ E(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (Nw = { state: `pending` }),
      (Pw = { state: `success` }),
      (Fw = { state: `incomplete` }),
      (Iw = { state: `complete` }),
      (Lw = { state: `error` }),
      (Rw = /* @__PURE__ */ M.createContext(void 0)),
      (zw = /* @__PURE__ */ M.forwardRef(function (
        {
          action: e,
          children: n,
          redirectUrl: r,
          onSuccess: i,
          onError: a,
          onLoading: o,
          submitTrackingId: s,
          nodeId: c,
          ...u
        },
        d
      ) {
        let f = M.useRef(null),
          p = I(d, f),
          {
            states: m,
            convertHoneypotFieldsForSubmission: h,
            replaceHoneypotWithMetadata: g,
          } = Cf(),
          _ = kn(),
          v = jn(),
          y = Md(),
          b = rr(),
          [x, S] = M.useReducer(Df, Fw),
          { activeLocale: C, locales: T } = Fr(),
          D = t(Rw),
          O = M.useRef({ onSuccess: i, onError: a, onLoading: o });
        O.current = { onSuccess: i, onError: a, onLoading: o };
        let k = M.useRef(!1);
        async function A(e) {
          if (z(e)) {
            let t = Ad(_, e, y, T);
            if (!t) {
              Af(e, f);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            _.navigate?.(n, r, i);
            return;
          }
          H(
            sd(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await Zd(e.unresolvedPathSlugs, e.unresolvedHashSlugs, C, b),
            { routeId: n, elementId: r, pathVariables: i } = kd(_, v, e, C, t, y);
          _.navigate?.(n, r, i);
        }
        let j = (e) => {
          (e.preventDefault(), N(e.currentTarget));
        };
        async function N(t) {
          if (!e || !D || k.current) return;
          ((k.current = !0), h());
          let n = new FormData(t),
            i = yf(t);
          (await ly({ priority: `user-visible`, continueAfter: `paint` }),
            g(n),
            l(() => S({ type: `submit` })),
            Sf(n, Ot.document));
          for (let [e, t] of n) t instanceof File && n.delete(e);
          try {
            (O.current.onLoading?.(),
              Tf({ router: _, nodeId: c, submitTrackingId: s, activeLocale: C }),
              await Mf(e, n, i, D),
              l(() => S({ type: `success` })),
              O.current.onSuccess?.(),
              r && (await A(r)));
          } catch (e) {
            (l(() => S({ type: `error` })), O.current.onError?.(), console.error(e));
          }
          k.current = !1;
        }
        let ee = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), j(e)));
          },
          P = async (e) => {
            let t = e.currentTarget;
            (await ly({ priority: `background`, continueAfter: `paint` }),
              l(() => S({ type: jf(t) ? `incomplete` : `complete` })));
          };
        oa(f, (e) => void N(e));
        let F = M.useMemo(() => n(x), [n, x]);
        return /* @__PURE__ */ w(Ue.form, {
          ...u,
          method: `post`,
          "data-framer-form": ``,
          onSubmit: Of(x) ? j : kf,
          onKeyDown: ee,
          onChange: P,
          ref: p,
          children: [
            F,
            /* @__PURE__ */ E(wf, { states: m }),
            /* @__PURE__ */ E(`script`, { dangerouslySetInnerHTML: { __html: aa() } }),
            /* @__PURE__ */ w(`noscript`, {
              children: [
                /* @__PURE__ */ E(`style`, {
                  children: `[data-framer-form] input[name=framer-noscript] { position: absolute; transform: scale(0); }`,
                }),
                /* @__PURE__ */ E(`input`, {
                  required: !0,
                  pattern: `(?!)`,
                  name: `framer-noscript`,
                  tabIndex: -1,
                  "aria-label": `Enable JavaScript to submit this form`,
                  title: `Enable JavaScript to submit this form`,
                }),
                /* @__PURE__ */ E(`p`, { children: `Enable JavaScript to submit this form.` }),
              ],
            }),
          ],
        });
      })),
      (Bw = `__framer_force_showing_editorbar_since`),
      (Vw = class extends b {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (Hw = () => {
        try {
          return !!localStorage[Bw];
        } catch {
          return !1;
        }
      }),
      (Uw = () => !Hw()),
      (Ww = /* @__PURE__ */ (() => {
        let e = k(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (Gw = null),
      (Kw = null),
      wt(Bf),
      (qw = (e, n, r, i, a, o) => {
        let s = t(Rw),
          c = _(),
          l = rr(),
          u = _(!0);
        return (
          N(() => {
            function t() {
              (!Gw || !Kw) && Bf();
              let t = r ? new URL(r, Ot.location.href) : Ot.location,
                c = {
                  version: 2,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: Gw,
                  locale: Kw,
                },
                d = u.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && l?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && z(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (it(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (c.current = t()),
                n = e instanceof Promise ? await e : e;
              ((c.current = n),
                u.current ? (u.current = !1) : Kn(`published_site_pageview`, n, `eager`));
            })();
            let d = async (e) => {
              if (e.persisted) {
                let e = (c.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((c.current = n), Kn(`published_site_pageview`, n, `eager`));
              }
            };
            return (
              f.addEventListener(`pageshow`, d),
              () => {
                f.removeEventListener(`pageshow`, d);
              }
            );
          }, [e, n, r, i, a, s, l, o]),
          c
        );
      }),
      (Jw = 0),
      (Yw = 500),
      (Xw = 200),
      (Zw = `main`),
      (Qw = `framerGeneratedPage`),
      ($w = `<!-- Start of headStart -->`),
      (eT = `<!-- End of headStart -->`),
      (tT = `<!-- Start of headEnd -->`),
      (nT = `<!-- End of headEnd -->`),
      (rT = `<!-- Start of bodyStart -->`),
      (iT = `<!-- End of bodyStart -->`),
      (aT = `<!-- Start of bodyEnd -->`),
      (oT = `<!-- End of bodyEnd -->`),
      (sT = /* @__PURE__ */ M.createContext(void 0)),
      (cT = { status: `loading`, data: void 0 }),
      (lT = 5e3),
      (uT = () => {}),
      (dT = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = /* @__PURE__ */ new Map();
        #e = /* @__PURE__ */ new Map();
        #t = /* @__PURE__ */ new Set();
        #n = /* @__PURE__ */ new Map();
        #r = /* @__PURE__ */ new Map();
        #i = /* @__PURE__ */ new Map();
        #a = /* @__PURE__ */ new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = Np(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = Np(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = Math.min(Lp(r), 2 ** 31 - 1),
            a = Ot.setInterval(() => {
              if (document.visibilityState === `hidden`) return;
              let n = this.#r.get(t);
              r && n && this.fetchWithCache({ ...e, cacheDuration: r });
            }, i);
          this.#a.set(t, a);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Rp(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = zl(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && Rp(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!pr() || !dd(e.url, !1)) return;
          let t = Np(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = Ip(n, e);
          return (e.resultOutputType === `image` && z(i) && (await Ap(i).catch(uT)), i);
        }
        async fetchWithCache(e) {
          if (!pr()) return;
          let t = Np(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Rp(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, cT);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: /* @__PURE__ */ Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!t || this.#t.has(e)) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!dd(r, !1)) return uT;
          let a = Np(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? /* @__PURE__ */ new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n && (n.delete(t), n.size === 0 && (this.#e.delete(a), this.stopQueryRefetching(e)));
            }
          );
        }
      }),
      (fT = /* @__PURE__ */ k(void 0)),
      (pT = /* @__PURE__ */ k(!0)),
      (mT = ({ children: e, client: t }) => {
        let [n] = h(() => t ?? new dT()),
          [r, i] = h(!0);
        return (
          N(
            () => (
              n.hydrateCache(),
              l(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          /* @__PURE__ */ E(pT.Provider, {
            value: r,
            children: /* @__PURE__ */ E(fT.Provider, { value: n, children: e }),
          })
        );
      }),
      (hT = /* @__PURE__ */ (() => {
        let e = k(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (Be.WillChange = class extends Ee {
        add(e) {
          e !== `backgroundColor` && super.add(e);
        }
      }),
      (gT = /* @__PURE__ */ Od(
        /* @__PURE__ */ D(function ({ links: e, children: t, ...n }, r) {
          return Ul(r)(t(Vp((t) => e.map(t), [e])), n);
        })
      )),
      (_T = { priority: void 0, canYield: !0 }),
      (vT = class {
        collection;
        locale;
        schema;
        indexes = [];
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = Ml(e);
          H(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (H(n !== `array`, `Array properties are not supported`),
              H(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (et(i)) continue;
            let a = this.schema[t];
            Qe(a) ||
              (H(a.type !== `unknown`, `Invalid definition type`),
              (n[t] =
                a.type === `richtext`
                  ? { type: a.type, value: { itemIndex: r, key: t } }
                  : { type: a.type, value: i }));
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await om(this.collection, this.locale))[t]?.[n];
          return Tv.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await om(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = qp(e);
            i && (await i);
            let a = t[r];
            H(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await om(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = qp(t);
            e && (await e);
            let a = n[Number(i)];
            (H(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (yT = /* @__PURE__ */ new Map()),
      (bT = /* @__PURE__ */ new WeakMap()),
      (xT = `$r_`),
      (ST = /* @__PURE__ */ new Map()),
      (CT = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return pm(e, t);
            case `boolean`:
              return hm(e);
            case `color`:
              return vm(e);
            case `date`:
              return bm(e);
            case `enum`:
              return Sm(e);
            case `file`:
              return wm(e);
            case `link`:
              return Em(e);
            case `number`:
              return Om(e);
            case `object`:
              return jm(e, t);
            case `responsiveimage`:
              return Nm(e);
            case `richtext`:
              return Fm(e);
            case `string`:
              return zm(e);
            case `vectorsetitem`:
              return Lm(e);
            case `unknown`:
              return e;
            default:
              U(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Ye(e)
            ? { type: `boolean`, value: e }
            : tt(e)
              ? { type: `date`, value: e.toISOString() }
              : B(e)
                ? { type: `number`, value: e }
                : z(e)
                  ? { type: `string`, value: e }
                  : Xe(e)
                    ? { type: `array`, value: e.map(CT.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && Vm(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && Vm(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && Vm(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && Vm(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && Vm(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => CT.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => CT.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Bm(e),
            i = Bm(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Bm(e),
            i = Bm(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Bm(e),
            i = Bm(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          return e?.type === `array` ? e.value.length : 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(CT.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return z(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              U(e);
          }
        },
      }),
      (wT = { type: `unknown`, isNullable: !0 }),
      (TT = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Xm(e, t)), (this.priority = Wm(n)));
        }
        *resolveArrayValue(e) {
          return yield* Qp(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* Zp(t);
        }
        richTextCache = /* @__PURE__ */ new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          H(qm(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          H(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? /* @__PURE__ */ new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return rt(t) ? yield t : t;
        }
        vectorSetItemCache = /* @__PURE__ */ new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          H(Ym(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (H(n, `Can't find collection for vector set item pointer`),
            H(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? /* @__PURE__ */ new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return rt(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (ET = `index`),
      (DT = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), Y(this.name, ...e));
        }
      }),
      (OT = class {
        id;
        name;
        data;
        indexes = new AT();
        fields = new Q();
        fieldByName = /* @__PURE__ */ new Map();
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (kT = class {
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
      }),
      (AT = class extends DT {
        name = `Indexes`;
      }),
      (jT = class {
        id;
        name;
        definition;
        collection;
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        isProvidedByScan() {
          let e = this.collection?.data.scannedFields;
          return !e || (this.name !== void 0 && this.name in e);
        }
        getValue(e) {
          H(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                H(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Km(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                H(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Jm(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends DT {
        name = `Fields`;
      }),
      (MT = class {
        field;
        direction;
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        getHash() {
          return Y(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (NT = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return Y(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== `index`) return !1;
          return !0;
        }
      }),
      (PT = class {
        ordering;
        resolvedFields;
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        getHash() {
          return Y(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (FT = class e {
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (H(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (H(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = /* @__PURE__ */ new Map();
        constructor(e) {
          this.parent = e;
        }
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new NT();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new PT(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          H(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (H(e, `Field must exist`), e.field);
        }
      }),
      (IT = 1e3),
      ($ = class e {
        network;
        constructor(e) {
          this.network = e;
        }
        static estimate(t, n) {
          let r = eh(),
            i = th(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (LT = class {
        pointers = /* @__PURE__ */ new Map();
        values = /* @__PURE__ */ new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (RT = class e {
        fields;
        tuples;
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = /* @__PURE__ */ new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = /* @__PURE__ */ new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (zT = class {
        isSynchronous;
        constructor(e) {
          this.isSynchronous = e;
        }
      }),
      (BT = class extends zT {
        group;
        getGroup() {
          return (H(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (H(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Jp(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return Yp(this.evaluate(void 0), void 0, e);
        }
      }),
      (VT = class {
        input;
        field;
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        getHash() {
          return Y(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (HT = class e extends BT {
        input;
        projections;
        passthrough;
        inputGroup;
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new PT(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new VT(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Qp(
              n.tuples.map((t) =>
                Qp(
                  this.projections.map((n) => Zp({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new LT();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            H(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (UT = { type: 0 }),
      (WT = class extends zT {
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        evaluateSync() {
          return Jp(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Yp(this.evaluate(void 0, void 0));
        }
      }),
      (GT = { type: 0 }),
      (KT = class {
        when;
        then;
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        getHash() {
          return Y(`CaseCondition`, this.when, this.then);
        }
      }),
      (qT = class e extends WT {
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        getHash() {
          return Y(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new KT(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* Zp({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Qp(
              this.conditions.map((n) =>
                Zp({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (CT.equal(n, e, GT)) return t;
          } else for (let { when: e, then: t } of r) if (gm(e)) return t;
          return i;
        }
      }),
      (JT = class {
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        build() {
          let e = new FT();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new NT();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (Qe(t)) continue;
                a.add(t.field);
                let r = new MT(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new jT($m(this.fieldId++), void 0, t.definition, void 0),
                  a = new VT(t, r);
                i.push(a);
                let s = new MT(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (Qe(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              H(n.alias, `Subqueries should have an alias`);
              let r = $m(this.fieldId++),
                a = n.alias,
                s = new jT(r, a, t.definition, void 0),
                c = new VT(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              U(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = dm(t.data, this.locale),
            i = t.alias,
            a = new OT(Zm(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new jT($m(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new jT($m(this.fieldId++), ET, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: ET, collectionName: i });
            let t = new NT(),
              r = new MT(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new NT(),
              o = new kT(Qm(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new NT(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              U(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              U(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(wT, null);
        }
        buildLiteralValue(e) {
          let t = CT.parse(e.value);
          return this.normalizer.newScalarConstant(wT, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (H(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              U(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new YT(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new YT(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new KT(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              U(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              U(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (YT = class {
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
        constructor(e) {
          this.inScope = e;
        }
      }),
      (XT = class e extends BT {
        input;
        predicate;
        inputGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new PT(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Qp(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => gm(n[t] ?? null));
        }
      }),
      (ZT = class e extends BT {
        index;
        query;
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        getHash() {
          return Y(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return $.estimate(1, e ? 100 * IT : 50 * IT);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, Gp()),
            i = Gp(),
            a = [];
          for (let n of r) {
            let r = qp(i);
            r && (yield r);
            let o = new LT();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new RT(n, a);
        }
      }),
      (QT = class e extends BT {
        left;
        right;
        leftGroup;
        rightGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return Y(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new PT(new NT(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Zp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      ($T = class e extends BT {
        collection;
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        getHash() {
          return Y(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        getScanFields() {
          return this.collection.data.scannedFields
            ? new Q(Array.from(this.collection.fields).filter((e) => e.isProvidedByScan()))
            : this.collection.fields;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.getScanFields());
        }
        optimize() {
          return $.estimate(1, 200 * IT);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = this.getScanFields(),
            r = yield e.data.scanItems(Gp()),
            i = Gp(),
            a = [];
          for (let t of r) {
            let r = qp(i);
            r && (yield r);
            let o = new LT();
            for (let r of n) {
              let n = r.getValue(t);
              (o.addPointer(e, t.pointer), o.addValue(r, n));
            }
            a.push(o);
          }
          return new RT(t, a);
        }
      }),
      (eE = class e extends BT {
        left;
        right;
        leftGroup;
        rightGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return Y(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new PT(new NT(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Zp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (tE = class e extends WT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Zp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: gm(n) && gm(r) };
        }
      }),
      (nE = class extends WT {
        definition;
        value;
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        getHash() {
          return Y(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (rE = { type: 0 }),
      (iE = class e extends WT {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Zp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: CT.contains(n, r, rE) };
        }
      }),
      (aE = { type: 0 }),
      (oE = class e extends WT {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Zp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: CT.endsWith(n, r, aE) };
        }
      }),
      (sE = class e extends WT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Zp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: CT.equal(n, r, UT) };
        }
      }),
      (cE = class e extends WT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Zp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: CT.greaterThan(n, r, UT) };
        }
      }),
      (lE = class e extends WT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Zp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: CT.greaterThanOrEqual(n, r, UT) };
        }
      }),
      (uE = class e extends WT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Zp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: CT.lessThan(n, r, UT) };
        }
      }),
      (dE = class e extends WT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Zp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: CT.lessThanOrEqual(n, r, UT) };
        }
      }),
      (fE = class e extends WT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Zp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !CT.equal(n, r, UT) };
        }
      }),
      (pE = class e extends WT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Zp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: gm(n) || gm(r) };
        }
      }),
      (mE = { type: 0 }),
      (hE = class e extends WT {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Zp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: CT.startsWith(n, r, mE) };
        }
      }),
      (gE = class {
        normalizer;
        memo;
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof XT) {
            if (e.predicate instanceof tE) {
              let n = new QT(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof pE) {
              let n = new eE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof $T)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new ZT(n, nh(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof XT) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof $T)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof sE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof nE &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = nh(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new ZT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof fE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof nE &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = nh(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new ZT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof uE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof nE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = nh(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new ZT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof dE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof nE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = nh(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new ZT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof cE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof nE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = nh(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new ZT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof lE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof nE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = nh(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new ZT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof iE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof nE &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = nh(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new ZT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof hE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof nE &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = nh(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new ZT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof oE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof nE &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = nh(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new ZT(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (_E = class {
        id;
        relational;
        nodes = [];
        winners = /* @__PURE__ */ new Map();
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new vE();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          H(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (vE = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (yE = class {
        outputFields;
        constructor(e) {
          this.outputFields = e;
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (bE = class {
        nodes = /* @__PURE__ */ new Map();
        groups = [];
        addGroup(e) {
          let t = new _E(rh(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new yE(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            H(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (xE = class e extends BT {
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return Y(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Q();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new PT(new NT(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = /* @__PURE__ */ new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new RT(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new LT();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Zp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof sE) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new RT(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new LT();
              (n.merge(i),
                n.merge(a),
                gm(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (SE = class e extends BT {
        input;
        limit;
        ordering;
        inputGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields(e) {
          return Array.from(e).every((e) => e.isProvidedByScan());
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new PT(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* Zp({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = km(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (CE = class e extends BT {
        input;
        offset;
        ordering;
        inputGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new PT(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* Zp({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = km(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (wE = class e extends WT {
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return Y(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) Qe(n.collection) || e.add(n);
          return new PT(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new LT();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (TE = class e extends WT {
        input;
        definition;
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            H(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return Y(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return CT.cast(n, this.definition);
        }
      }),
      (EE = class e extends WT {
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return Y(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return (Qe(this.field.collection) || e.add(this.field), new PT(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new LT();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (DE = { type: 0 }),
      (OE = class e extends WT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Zp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: CT.in(n, r, DE) };
        }
      }),
      (kE = { type: 1 }),
      (AE = class e extends WT {
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Zp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: CT.indexOf(n, r, kE) };
        }
      }),
      (jE = class extends Error {}),
      (ME = class e extends WT {
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Zp({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = ah(n),
            a = ah(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (NE = class e extends WT {
        input;
        definition = { type: `number`, isNullable: !1 };
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        getHash() {
          return Y(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: CT.length(n) };
        }
      }),
      (PE = class e extends WT {
        input;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        getHash() {
          return Y(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !gm(yield* this.input.evaluate(e, t)) };
        }
      }),
      (FE = { type: 0 }),
      (IE = class e extends WT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Zp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !CT.in(n, r, FE) };
        }
      }),
      (LE = class extends WT {
        field;
        isOuterField;
        definition;
        constructor(e, t) {
          H(e.name !== ET, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        getHash() {
          return Y(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (H(e, `Context must exist`), e.getValue(this.field))
            : (H(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (RE = class {
        memo;
        constructor(e) {
          this.memo = e;
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new $T(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new ZT(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new xE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof nE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof xE && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new XT(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new HT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof HT &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new SE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new CE(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof nE) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new LE(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new nE(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof PE)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof sE) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof fE) return this.newScalarEquals(e.left, e.right);
          if (e instanceof uE) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof dE) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof cE) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof lE) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof tE) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof pE) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new PE(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof nE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof nE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof nE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof nE && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new tE(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof nE && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof nE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof nE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof nE && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new pE(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof LE;
          if (t instanceof LE && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new sE(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof LE;
          if (t instanceof LE && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new fE(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof LE;
          if (t instanceof LE && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new uE(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof LE;
          if (t instanceof LE && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new dE(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof LE;
          if (t instanceof LE && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new cE(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof LE;
          if (t instanceof LE && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new lE(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new OE(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new IE(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new KT(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new qT(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new iE(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new hE(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new oE(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new NE(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new AE(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new wE(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new EE(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new ME(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new TE(e, t);
          return this.finishScalar(n);
        }
      }),
      (zE = class extends BT {}),
      (BE = class e extends zE {
        input;
        fields;
        resolver;
        inputGroup;
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Q();
          return new PT(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * IT).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          H(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = /* @__PURE__ */ new Map();
          for (let e of this.fields) {
            H(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) oh(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                H(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new LT();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (H(s, `Item not found`), H(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (VE = { type: 0 }),
      (HE = class e extends zE {
        input;
        ordering;
        inputGroup;
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== `index` && (Qe(e.collection) || t.add(e));
          return new PT(new NT(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === `index`) {
                let r = n.collection;
                H(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                H(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                H(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!CT.equal(a, o, VE)) {
                if ($e(a) || CT.lessThan(a, o, VE)) return i ? -1 : 1;
                if ($e(o) || CT.greaterThan(a, o, VE)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (UE = class {
        query;
        locale;
        resolver;
        memo = new bE();
        normalizer = new RE(this.memo);
        explorer = new gE(this.normalizer);
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        optimize(e) {
          let t = new JT(this.normalizer, this.query, this.locale).build(),
            n = qp(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (H(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new BE(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new HE(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (WE = /* @__PURE__ */ Hp(`query-engine`)),
      (GE = class {
        async evalQuery(e, t, n, r, i) {
          let a = um(e, t);
          if (a?.query) {
            let o = await a.query(e, t),
              s = await this.resolveSerializableQueryResult(o, e, t, r, i);
            return n ? [s, o] : s;
          }
          WE.enabled && WE.debug(`Query:\n${yh(e)}`);
          let o = new TT(e, t, r),
            s = new UE(e, t, o),
            c = qp(o.priority);
          c && (await c);
          let l = s.optimize(r),
            [u, d] = it(l) ? await l : l,
            f = qp(r);
          f && (await f);
          let p = await u.evaluateAsync(r),
            m = Object.entries(d),
            h = [],
            g = [];
          for (let e of p.tuples) {
            let t = qp(r);
            t && (await t);
            let i = {},
              a = {};
            for (let [t, r] of m) {
              let s = e.getValue(r);
              ((i[t] = o.resolveValue(s)), n && (a[t] = s));
            }
            (n && h.push(a), g.push(Zp(i, r)));
          }
          let _ = Xp(Qp(g, r), r);
          return n ? [it(_) ? await _ : _, h] : _;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n, r) {
          return this.evalQuery(e, t, !1, n, r);
        }
        resolveSerializableQueryResult(e, t, n, r, i) {
          let a = new TT(t, n, r);
          return Xp(
            Qp(
              e.map(function* (e) {
                let t = i?.get(e);
                if (t) return t;
                let n = {},
                  r;
                for (r in e) {
                  let t = e[r];
                  n[r] = a.resolveValue(t);
                }
                let o = yield* Zp(n);
                return (i?.set(e, o), o);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (KE = Fv.QueryCache),
      (qE = /* @__PURE__ */ Hp(`query-cache`)),
      (JE = class {
        queryEngine;
        maxSize;
        cache = /* @__PURE__ */ new Map();
        serializedCache = Rv === void 0 ? void 0 : /* @__PURE__ */ new Map();
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        clear() {
          for (let e of this.cache.values()) (clearTimeout(e.eviction), e.unsubscribe?.());
          (this.cache.clear(), this.serializedCache?.clear());
        }
        async scheduleEviction(e, t) {
          (await t.value.preload(),
            clearTimeout(t.eviction),
            (t.eviction = setTimeout(() => {
              this.cache.get(e) !== t ||
                t.listeners?.size ||
                (t.unsubscribe?.(), this.cache.delete(e), this.serializedCache?.delete(e));
            }, 1e3)));
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.value.state === `pending` ||
                t.listeners?.size ||
                (clearTimeout(t.eviction), this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t, n) {
          return this.getEntry(e, t, Sh(e, t), n).value;
        }
        getEntry(e, t, n, r) {
          let i = this.cache.get(n);
          if (i) {
            let a = Gm(r) ?? `user-visible`,
              o = Gm(i.priority);
            if (o === void 0 && r !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(n), this.getEntry(e, t, n, r));
            if (o !== void 0 && Cr(a, o) && i.value.state === `pending`)
              return (this.cache.delete(n), this.getEntry(e, t, n, a));
            if (
              (this.cache.delete(n),
              this.cache.set(n, i),
              Rv !== void 0 &&
                this.serializedCache !== void 0 &&
                !sm(n) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(n);
              e !== void 0 && Rv.set(KE, n, e);
            }
            return i;
          }
          let a = {
            value: new Tv(() => {
              let i = sm(n),
                o = i ? void 0 : Qn(KE, n);
              if (o)
                try {
                  return this.queryEngine.resolveSerializableQueryResult(o, e, t);
                } catch (e) {
                  Xn(e, n);
                }
              return (
                (a.rows = um(e, t)?.subscribe ? /* @__PURE__ */ new WeakMap() : void 0),
                a.rows && Promise.resolve().then(() => this.scheduleEviction(n, a)),
                Rv !== void 0 && !i
                  ? this.queryEngine
                      .serializeableQuery(e, t, r)
                      .then(([e, t]) => (this.serializedCache?.set(n, t), Rv.set(KE, n, t), e))
                  : this.queryEngine.query(e, t, r, a.rows)
              );
            }),
            priority: r,
          };
          return (this.cache.set(n, a), this.prune(), a);
        }
        getStore(e, t) {
          let n = Sh(e, t),
            r = this.getEntry(e, t, n);
          return (r.store ??= {
            getSnapshot: () => r.value,
            subscribe: (i) => {
              let a = um(e, t);
              if (!a?.subscribe) return () => {};
              let o = this.cache.get(n) ?? r;
              ((r = o), this.cache.set(n, o), clearTimeout(o.eviction));
              let s = (o.listeners ??= /* @__PURE__ */ new Set());
              if ((s.add(i), s.size === 1)) {
                let r = async () => {
                  let r = (o.revision = (o.revision ?? 0) + 1),
                    i;
                  try {
                    i = await this.queryEngine.query(e, t, void 0, o.rows);
                  } catch (e) {
                    qE.error(e);
                    return;
                  }
                  if (this.cache.get(n) !== o || o.revision !== r || !s.size) return;
                  let a = new Tv(() => i);
                  (a.preload(), (o.value = a), this.serializedCache?.delete(n));
                  for (let e of s) e();
                };
                o.unsubscribe = a.subscribe(e, t, () => void r());
              }
              return () => {
                (s.delete(i),
                  s.size ||
                    ((o.revision = (o.revision ?? 0) + 1),
                    o.unsubscribe?.(),
                    (o.unsubscribe = void 0),
                    this.scheduleEviction(n, o)));
              };
            },
          });
        }
      }),
      (YE = /* @__PURE__ */ new JE(/* @__PURE__ */ new GE())),
      (XE = `__all__`),
      (ZE = `__true__`),
      (QE = `__false__`),
      ($E = { boolean: Eh, collectionreference: Dh, enum: Oh }),
      (eD = `style[data-framer-breakpoint-css]`),
      (tD = `page`),
      (nD = /* @__PURE__ */ Symbol(`cycle`)),
      (aD = /* @__PURE__ */ new WeakMap()),
      (oD = /* @__PURE__ */ (() => {
        let e = k(null);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (sD = /* @__PURE__ */ (() => {
        let e = k(void 0);
        return ((e.displayName = `TickerItemContext`), e);
      })()),
      (cD = (e, t, n, r, i) => ({
        sign: 1,
        direction: i,
        lengthProp: t,
        viewportLengthProp: n,
        paddingStartProp: r,
        measureItem: (n) => ({ start: n[e], end: n[e] + n[t] }),
        getCumulativeInset: (t) => {
          let n = 0,
            r = t;
          for (; r;) ((n += r[e]), (r = r.offsetParent));
          return n;
        },
      })),
      (lD = /* @__PURE__ */ cD(`offsetLeft`, `offsetWidth`, `innerWidth`, `paddingLeft`, `right`)),
      (uD = /* @__PURE__ */ cD(`offsetTop`, `offsetHeight`, `innerHeight`, `paddingTop`, `bottom`)),
      (dD = {
        ...lD,
        sign: -1,
        direction: `left`,
        paddingStartProp: `paddingRight`,
        measureItem: (e, t) => {
          let n = e.offsetWidth,
            r = vg(e, t);
          return { start: r, end: r + n };
        },
        getCumulativeInset: (e) => {
          let t = 0,
            n = e;
          for (; n;) ((t += vg(n, n.offsetParent)), (n = n.offsetParent));
          return t;
        },
      }),
      (fD = { start: `flex-start`, end: `flex-end` }),
      (pD = /* @__PURE__ */ D(Og)),
      (mD = { start: 0, end: 0 }),
      (hD = { display: `flex`, position: `relative` }),
      (gD = {
        display: `flex`,
        position: `relative`,
        willChange: `transform`,
        listStyleType: `none`,
        padding: 0,
        margin: 0,
        justifyContent: `flex-start`,
      }),
      (_D = { duration: 0.2, ease: `linear` }),
      (vD = /* @__PURE__ */ (() => {
        let e = k(null);
        return ((e.displayName = `CarouselContext`), e);
      })()),
      (yD = 0.001),
      (bD = { type: `spring`, stiffness: 200, damping: 40 }),
      (xD = { type: `spring`, stiffness: 700, damping: 53 }),
      (SD = { type: `spring`, stiffness: 80, damping: 10 }),
      (CD = { height: `100%`, width: `100%` }),
      (wD = /* @__PURE__ */ D(function (e, t) {
        let {
            children: n,
            carouselEffectStackDirection: r,
            carouselEffectAlign: i,
            carouselEffectGap: a,
            carouselEffectXOverflow: o,
            carouselEffectYOverflow: s,
            carouselEffectOverflow: c,
            carouselEffectLoop: l,
            carouselEffectAutoPlay: u,
            carouselEffectInterval: d,
            carouselEffectSnap: f,
            carouselEffectTransition: p,
            carouselEffectControls: m,
            as: h,
            ...g
          } = e,
          _ = Uo(),
          v = r?.startsWith(`column`) ? `y` : `x`,
          y = (v === `x` ? (o ?? c ?? `visible`) : (s ?? c ?? `visible`)) === `visible`,
          b = Gg(a, v),
          x = f === !0 ? `page` : f,
          S = fg(n),
          T = C(() => Ue.create(h), [h]);
        return /* @__PURE__ */ E(T, {
          ...g,
          ref: t,
          children: /* @__PURE__ */ w(Hg, {
            axis: v,
            align: i ?? `center`,
            gap: b,
            isStatic: _,
            itemSize: `manual`,
            overflow: y,
            loop: l,
            snap: x,
            transition: p,
            items: S,
            style: CD,
            children: [u && /* @__PURE__ */ E(Wg, { intervalSeconds: d ?? 1.5 }), m],
          }),
        });
      })),
      (TD = /* @__PURE__ */ D(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? Ue.div,
          m = Uo(),
          h = (d === `paused` ? 0 : (i ?? 100)) * s;
        return /* @__PURE__ */ E(pD, {
          ref: t,
          as: p,
          ...f,
          gap: l,
          axis: o,
          align: a ?? `center`,
          isStatic: m,
          velocity: h,
          hoverFactor: c,
          itemSize: `manual`,
          overflow: u,
        });
      })),
      (ED = /* @__PURE__ */ D(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? Ue.div,
          m = _(null),
          h = I(t, m),
          g = Ke(m, { margin: `100px` }),
          v = ae(),
          y = g && v,
          b = Lr() === `rtl` && o === `x` ? -1 : 1,
          x = (d === `paused` ? 0 : (i ?? 100)) * s * b,
          S = _e(0),
          C = _(0),
          w = _(!1),
          T = _(!1),
          D = _(!1),
          O = (e) => {
            D.current &&
              e.target &&
              e.target !== e.currentTarget &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (
          ue(
            y
              ? (e, t) => {
                  let n = Math.abs(S.getVelocity()),
                    r = T.current ? x * c : x;
                  if (performance.now() > C.current && (!w.current || n < Math.abs(r))) {
                    let e = (t / 1e3) * r,
                      n = S.get() - e;
                    ((w.current &&= (S.stop(), !1)), S.set(n));
                  }
                }
              : re
          ),
          N(() => {
            d === `paused` && S.stop();
          }, [d, S]),
          /* @__PURE__ */ E(pD, {
            ref: h,
            as: p,
            ...f,
            gap: l,
            axis: o,
            align: a ?? `center`,
            itemSize: `manual`,
            overflow: u,
            _dragX: o === `x` ? S : void 0,
            _dragY: o === `y` ? S : void 0,
            offset: S,
            drag: o,
            dragMomentum: !0,
            onClickCapture: O,
            onDragStart: () => {
              D.current = !0;
            },
            onDragEnd: () => {
              ((C.current = performance.now()),
                (w.current = !0),
                setTimeout(() => {
                  D.current = !1;
                }, 5));
            },
            onMouseEnter: () => {
              T.current = !0;
            },
            onMouseLeave: () => {
              T.current = !1;
            },
          })
        );
      })),
      (DD = /* @__PURE__ */ (() => {
        let e = k(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (OD = ({ onPlayStateChange: e, children: t }) => {
        let n = C(
          () => ({ start: () => l(() => e(`running`)), stop: () => l(() => e(`paused`)) }),
          [e]
        );
        return /* @__PURE__ */ E(DD.Provider, { value: n, children: t });
      }),
      (kD = /* @__PURE__ */ D(function (e, t) {
        let {
            children: n,
            tickerEffectDraggable: r,
            tickerEffectStackDirection: i,
            tickerEffectXOverflow: a,
            tickerEffectYOverflow: o,
            tickerEffectOverflow: s,
            tickerEffectGap: c,
            tickerEffectDirectionModifier: l,
            tickerEffectHoverModifier: u,
            tickerEffectPosition: d,
            tickerEffectIsDataRepeater: f,
            style: p,
            ...m
          } = e,
          g = Uo(),
          [_, v] = h(`running`),
          y = i?.startsWith(`column`) ? `y` : `x`,
          b = l === `reverse` ? -1 : 1,
          x = q(u) ? u / 100 : 1,
          S = (y === `x` ? (a ?? s ?? `visible`) : (o ?? s ?? `visible`)) === `visible`,
          C = Kg(c, y),
          w = fg(n),
          T = { ...p, "--ticker-cms-total-children": f ? w.length : void 0, position: d };
        return g || !r
          ? /* @__PURE__ */ E(OD, {
              onPlayStateChange: v,
              children: /* @__PURE__ */ E(TD, {
                ...m,
                style: T,
                ref: t,
                axis: y,
                gap: C,
                overflow: S,
                directionModifier: b,
                hoverModifier: x,
                items: w,
                playState: _,
              }),
            })
          : /* @__PURE__ */ E(OD, {
              onPlayStateChange: v,
              children: /* @__PURE__ */ E(ED, {
                ...m,
                style: T,
                ref: t,
                axis: y,
                gap: C,
                overflow: S,
                directionModifier: b,
                hoverModifier: x,
                items: w,
                playState: _,
              }),
            });
      })),
      (AD = (e) => (t) => {
        let { carouselEffectProps: n, tickerEffectProps: r, domProps: i } = Jg(t);
        return t.carouselEffectEnabled
          ? /* @__PURE__ */ E(wD, { ...n, ...i, as: e })
          : t.tickerEffectEnabled
            ? /* @__PURE__ */ E(kD, { ...r, ...i, as: e })
            : /* @__PURE__ */ E(e, { ...i });
      }),
      (jD = (e) =>
        M.forwardRef((t, n) => {
          let {
              flowEffectEnabled: r,
              flowEffectTransition: i,
              isNestedFlowEffect: a,
              transition: o,
              ...s
            } = t,
            c = C(() => (i ? { default: o, layout: i } : o), [o, i]);
          if (!r) return /* @__PURE__ */ E(e, { ...s, ref: n, transition: o });
          let l = /* @__PURE__ */ E(e, { ...s, ref: n });
          return (
            i && (l = /* @__PURE__ */ E(Ce, { transition: c, children: l })),
            a || (l = /* @__PURE__ */ E(Ae, { children: l })),
            l
          );
        })),
      (MD = (e) => e.target.value),
      (ND = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (PD = /* @__PURE__ */ D(function (e, t) {
        let {
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            autoFocus: a,
            className: o,
            inputName: s,
            max: c,
            min: d,
            placeholder: f,
            required: p,
            step: m,
            style: h,
            type: g,
            maxLength: _,
            value: v,
            defaultValue: y,
            autofillEnabled: b,
            onChange: x,
            onBlur: S,
            onInvalid: C,
            onFocus: T,
            onValid: D,
            onClear: O,
            ...k
          } = e,
          A = Qg(v ?? y, g),
          [j, M, N] = Zg(A ?? ``, !0, x),
          ee = fa(A),
          P = u(() => {
            (M(``), O && l(() => O()));
          }, [O, M]),
          F = ft(D, C, N, S, T),
          te = u(
            (e) => {
              e.target === e.currentTarget && ee.current?.focus();
            },
            [ee]
          );
        if (g === `hidden`)
          return /* @__PURE__ */ E(Ue.input, { type: `hidden`, name: s, defaultValue: y });
        let ne = b === !1 ? ND : void 0,
          re = !!j,
          ie = !!O && re,
          ae = Bl(FD, Pt, o, g === `text` && ID, g === `textarea` && LD);
        return /* @__PURE__ */ w(Ue.div, {
          ref: t,
          onClick: te,
          style: h,
          className: ae,
          ...k,
          children: [
            g === `textarea`
              ? /* @__PURE__ */ E(Ue.textarea, {
                  ref: ee,
                  ...ne,
                  ...F,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  required: p,
                  autoFocus: a,
                  name: s,
                  placeholder: f,
                  className: Nt,
                  value: j,
                  maxLength: _,
                })
              : /* @__PURE__ */ E(Ue.input, {
                  ref: ee,
                  ...ne,
                  ...F,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  type: g,
                  required: p,
                  autoFocus: a,
                  name: s,
                  placeholder: f,
                  className: Bl(Nt, !re && `framer-form-input-empty`),
                  value: j,
                  min: d,
                  max: c,
                  step: m,
                  maxLength: _,
                }),
            ie &&
              /* @__PURE__ */ E(`button`, {
                type: `button`,
                className: RD,
                onClick: P,
                "aria-label": `Clear`,
                children: /* @__PURE__ */ E($g, {}),
              }),
          ],
        });
      })),
      (FD = `framer-form-text-input`),
      (ID = `framer-form-text-input-type`),
      (LD = `framer-form-textarea-input-type`),
      (RD = `framer-form-text-input-clear`),
      (zD = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (BD = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (VD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (HD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (UD = /* @__PURE__ */ _x(
        PD,
        [
          ...Rt,
          ...Vt,
          ...zt,
          K(`.${Pt}`, {
            boxShadow: K.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: K.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: K.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: K.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: K.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: K.variable(`--framer-input-corner-shape`),
            background: K.variable(`--framer-input-background`),
            transition: K.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          K(`.${FD} .${Nt}::placeholder`, {
            color: K.variable(`--framer-input-placeholder-color`),
          }),
          K(`.${FD}`, {
            display: `flex`,
            alignItems: `center`,
            padding: K.variable(`--framer-input-padding`),
          }),
          K(`.${FD} .${Nt}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          K(`.${FD}.${LD}`, { padding: 0 }),
          K(`.${FD}.${LD} textarea.${Nt}`, {
            width: `100%`,
            padding: K.variable(`--framer-input-padding`),
          }),
          K(`.${FD} .${Nt}[type="date"], .${FD} .${Nt}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          K(`.${FD} .${Nt}::-webkit-date-and-time-value`, { textAlign: `start` }),
          K(`.${FD} textarea`, {
            display: `flex`,
            resize: K.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          K(`.${FD} textarea::-webkit-resizer`, { background: `no-repeat ${at(zD)}` }),
          K(`.${FD}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${at(BD)}` }),
          K(`.${FD} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          K(`.${FD} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          K(`.${FD} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          K(`.${FD} .${Nt}::-webkit-datetime-edit`, {
            height: K.variable(`--framer-input-font-line-height`),
          }),
          K(`.${FD} .${Nt}.${Ft}::-webkit-datetime-edit`, {
            color: K.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": K.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          K(`.${FD}.${ID}::before`, {
            content: K.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `16px`,
            height: `16px`,
            marginRight: `8px`,
            ...Wt,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: K.variable(`--framer-input-icon-mask-image`),
            backgroundImage: K.variable(`--framer-input-icon-image`),
          }),
          K(`.${FD} .${Nt}[type="date"]::before, .${FD} .${Nt}[type="time"]::before`, {
            ...Gt,
            paddingLeft: `10px`,
            maskPosition: `10px center`,
            backgroundPosition: `10px center`,
          }),
          K(`.${FD} .${Nt}[type="date"]::before`, {
            maskImage: K.variable(`--framer-input-icon-mask-image`, at(VD)),
            backgroundImage: K.variable(`--framer-input-icon-image`),
          }),
          K(`.${FD} .${Nt}[type="time"]::before`, {
            maskImage: K.variable(`--framer-input-icon-mask-image`, at(HD)),
            backgroundImage: K.variable(`--framer-input-icon-image`),
          }),
          K(`.${FD} .${Nt}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: K.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `16px`,
            height: `100%`,
          }),
          K(`.${FD}:focus-within, .${FD}.${It}`, {
            boxShadow: K.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: K.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          K(`.${FD}:focus-within::after, .${FD}.${It}::after`, {
            borderColor: K.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: K.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: K.variable(`--framer-input-focused-border-width`, Bt),
          }),
          K(`.${RD}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `16px`,
            height: `16px`,
            marginLeft: `8px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: K.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          K(`.${RD}:hover, .${RD}:focus-visible`, {
            color: K.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (WD = `framer-form-boolean-input`),
      (GD = (e) => e.target.checked),
      (KD = /* @__PURE__ */ M.forwardRef(function (e, t) {
        let {
            inputName: n,
            type: r = `checkbox`,
            defaultChecked: i,
            checked: a,
            onValid: o,
            onChange: s,
            onBlur: c,
            onFocus: l,
            onInvalid: u,
            ...d
          } = e,
          f = ld(),
          p = e_(!f && a !== void 0),
          m = a ?? !1,
          [h, , g] = Zg(m, p, s, GD),
          _ = fa(p ? m : i),
          v = ft(o, u, g, c, l),
          y = f ? { checked: i } : p ? { checked: h } : { defaultChecked: i },
          b = M.useCallback(
            (e) => {
              (Dc(t, e), Dc(_, e));
            },
            [t, _]
          );
        return /* @__PURE__ */ E(Ue.input, {
          ...d,
          ...y,
          ...v,
          readOnly: f,
          ref: b,
          type: r,
          name: n,
          className: Bl(WD, e.className),
        });
      })),
      (qD = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M 4 8 L 6.5 10.5 L 11.5 5.5" fill="transparent" stroke-width="2" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`),
      (JD = `var(--framer-input-border-radius-top-left) var(--framer-input-border-radius-top-right) var(--framer-input-border-radius-bottom-right) var(--framer-input-border-radius-bottom-left)`),
      (YD = /* @__PURE__ */ _x(
        KD,
        [
          K(`.${WD}`, {
            "-webkit-appearance": `none`,
            alignItems: `center`,
            appearance: `none`,
            backgroundColor: `#fff`,
            background: `--framer-input-background`,
            borderRadius: JD,
            cornerShape: K.variable(`--framer-input-corner-shape`),
            boxShadow: `--framer-input-box-shadow`,
            display: `flex`,
            justifyContent: `center`,
            margin: 0,
            overflow: `hidden`,
            position: `relative`,
            transition: `--framer-input-boolean-checked-transition`,
            transitionProperty: `box-shadow, background`,
          }),
          K(`.${WD}::after`, {
            background: `transparent`,
            borderColor: K.variable(`--framer-input-border-color`, `transparent`),
            borderRadius: JD,
            cornerShape: K.variable(`--framer-input-corner-shape`),
            borderStyle: `--framer-input-border-style`,
            borderWidth: Bt,
            boxSizing: `border-box`,
            content: ``,
            display: `block`,
            inset: 0,
            position: `absolute`,
            transition: `--framer-input-boolean-checked-transition`,
            transitionProperty: `border-color, border-width, border-style`,
          }),
          K(`.${WD}::before`, {
            ...Gt,
            backgroundPosition: `center`,
            backgroundSize: `contain`,
            maskPosition: `center`,
            maskSize: `contain`,
            height: `100%`,
            opacity: 0,
            transition: `--framer-input-boolean-checked-transition`,
            transitionProperty: `opacity`,
            width: `100%`,
          }),
          K(`.${WD}[type="checkbox"]::before`, {
            backgroundImage: K.variable(`--framer-input-icon-image`),
            maskImage: K.variable(`--framer-input-icon-mask-image`, `url('${qD}')`),
          }),
          K(`.${WD}[type="radio"]::before`, {
            backgroundImage: K.variable(`--framer-input-icon-image`),
            maskImage: K.variable(`--framer-input-icon-mask-image`),
          }),
          K(`.${WD}:checked, .${WD}.${Lt}`, {
            backgroundColor: K.variable(
              `--framer-input-boolean-checked-background`,
              `--framer-input-background`
            ),
            boxShadow: K.variable(
              `--framer-input-boolean-checked-box-shadow`,
              `--framer-input-box-shadow`
            ),
          }),
          K(`.${WD}:checked::before, .${WD}.${Lt}::before`, { opacity: 1 }),
          K(`.${WD}:checked::after, .${WD}.${Lt}::after`, {
            borderColor: K.variable(
              `--framer-input-boolean-checked-border-color`,
              `--framer-input-border-color`,
              `transparent`
            ),
            borderStyle: K.variable(
              `--framer-input-boolean-checked-border-style`,
              `--framer-input-border-style`,
              `solid`
            ),
            borderWidth: K.variable(`--framer-input-boolean-checked-border-width`, Bt),
          }),
          K(`.${WD}:focus, .${WD}.${It}`, {
            backgroundColor: K.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
            boxShadow: K.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
          }),
          K(`.${WD}:focus-visible`, { outline: `none` }),
          K(`.${WD}:focus::after, .${WD}.${It}::after`, {
            borderColor: K.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`,
              `transparent`
            ),
            borderStyle: K.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`,
              `solid`
            ),
            borderWidth: K.variable(`--framer-input-focused-border-width`, Bt),
          }),
          K(`.${WD}:focus:checked`, {
            backgroundColor: K.variable(
              `--framer-input-focused-background`,
              `--framer-input-boolean-checked-background`,
              `--framer-input-background`
            ),
            boxShadow: K.variable(
              `--framer-input-focused-box-shadow`,
              `--framer-input-boolean-checked-box-shadow`,
              `--framer-input-box-shadow`
            ),
          }),
          K(`.${WD}:focus:checked::after`, {
            borderStyle: K.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-boolean-checked-border-style`,
              `--framer-input-border-style`,
              `solid`
            ),
            borderWidth: K.variable(
              `--framer-input-focused-border-width`,
              `--framer-input-boolean-checked-border-width`,
              Bt
            ),
          }),
        ],
        `framer-lib-form-boolean-input`
      )),
      (XD = /* @__PURE__ */ M.forwardRef(function (e, t) {
        let {
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            autoFocus: a,
            className: o,
            inputName: s,
            required: c,
            hidden: l,
            defaultValue: u,
            value: d,
            selectOptions: f,
            textAlignment: p,
            style: m,
            onValid: h,
            onChange: g,
            onBlur: _,
            onInvalid: v,
            onFocus: y,
            ...b
          } = e,
          x = ld(),
          S = Lr(),
          C = !x && d !== void 0,
          w = d ?? ``,
          [T, , D] = Zg(w, C, g),
          O = fa(C ? w : u),
          k = ft(h, v, D, _, y);
        return l
          ? /* @__PURE__ */ E(Ue.input, { type: `hidden`, name: s, defaultValue: u })
          : /* @__PURE__ */ E(Ue.div, {
              ref: t,
              style: m,
              className: Bl(Pt, ZD, n_(p, S) && QD, o),
              ...b,
              children: /* @__PURE__ */ E(
                Ue.select,
                {
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  ref: O,
                  name: s,
                  autoFocus: a,
                  required: c,
                  className: Nt,
                  defaultValue: u,
                  value: C ? T : void 0,
                  ...k,
                  children: f?.map((e, t) => {
                    switch (e.type) {
                      case `divider`:
                        return /* @__PURE__ */ E(`hr`, {}, t);
                      case `option`:
                        return /* @__PURE__ */ E(
                          `option`,
                          {
                            value: e.value ?? e.title,
                            disabled: e.disabled,
                            children: e.title ?? e.value,
                          },
                          t
                        );
                      default:
                        return U(e);
                    }
                  }),
                },
                x ? t_(u) : void 0
              ),
            });
      })),
      (ZD = `framer-form-select-wrapper`),
      (QD = `framer-form-select-caret-left`),
      ($D = 16),
      (eO = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${$D}" height="${$D}"><path d="M 3.5 6 L 8 10.5 L 12.5 6" fill="transparent" stroke-width="1.5" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`),
      (tO = /* @__PURE__ */ _x(
        XD,
        [
          ...Rt,
          ...Vt,
          ...zt,
          K(`.${ZD}`, {
            padding: K.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            background: K.variable(`--framer-input-background`),
            borderTopLeftRadius: K.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: K.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: K.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: K.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: K.variable(`--framer-input-corner-shape`),
            boxShadow: K.variable(`--framer-input-box-shadow`),
            transition: K.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          K(`.${ZD} select`, {
            appearance: `none`,
            "-webkit-appearance": `none`,
            padding: K.variable(`--framer-input-padding`),
            background: `transparent`,
          }),
          K(`.${ZD}::before`, {
            ...Gt,
            paddingLeft: `10px`,
            backgroundPosition: `10px center`,
            maskPosition: `10px center`,
            backgroundImage: K.variable(`--framer-input-icon-image`),
            maskImage: K.variable(`--framer-input-icon-mask-image`, `url('${eO}')`),
          }),
          K(`.${QD}`, {
            padding: K.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
          }),
          K(`.${QD}::before`, {
            left: 0,
            right: `auto`,
            padding: K.variable(`--framer-input-padding`),
            paddingRight: `10px`,
            backgroundPosition: `right 10px center`,
            maskPosition: `right 10px center`,
          }),
          K(`.${ZD} select:required:invalid`, {
            color: K.variable(`--framer-input-invalid-text-color`),
          }),
          K(`.${ZD}:focus-within, .${ZD}.${It}`, {
            background: K.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
            boxShadow: K.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
          }),
          K(`.${ZD}:focus-within::after, .${ZD}.${It}::after`, {
            borderColor: K.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: K.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: K.variable(`--framer-input-focused-border-width`, Bt),
          }),
          K(`.${ZD} select option`, { color: `#000` }),
          K(`.${ZD} select option:disabled`, { color: `rgba(0, 0, 0, 0.4)` }),
        ],
        `framer-lib-form-select`
      )),
      (nO = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (rO = { opacity: 0 }),
      (iO = { opacity: 1 }),
      (aO = /* @__PURE__ */ p_(
        /* @__PURE__ */ M.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: o,
              style: s,
              ...c
            } = e,
            u = { ...s },
            d = C(() => Fs(n), [n]),
            [f, p] = h();
          M.useEffect(() => {
            if (!n?.src || !o || d) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                l(() => p({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, o, d]);
          let m = d ?? f;
          (o && m && ((u[o] = `auto`), (u.aspectRatio = m.width / m.height)),
            n && delete u.background);
          let g = Is(e.as);
          return /* @__PURE__ */ w(g, {
            ...c,
            style: u,
            ref: t,
            draggable: a,
            children: [n && /* @__PURE__ */ E(is, { image: n, alt: i, draggable: a }), r],
          });
        })
      )),
      (sO = !fr() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (cO =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (lO = `{{ text-placeholder }}`),
      (uO = `rich-text-wrapper`),
      (dO = /* @__PURE__ */ Vs(
        /* @__PURE__ */ D(function (e, n) {
          let {
              id: r,
              name: i,
              html: a,
              htmlFromDesign: o,
              text: s,
              textFromDesign: c,
              fonts: l = [],
              width: u,
              height: d,
              left: f,
              right: p,
              top: m,
              bottom: h,
              center: g,
              className: v,
              stylesPresetsClassName: y,
              visible: b = !0,
              opacity: x,
              rotation: S = 0,
              verticalAlignment: w = `top`,
              isEditable: T = !1,
              environment: D = W.current,
              withExternalLayout: O = !1,
              positionSticky: k,
              positionStickyTop: A,
              positionStickyRight: j,
              positionStickyBottom: M,
              positionStickyLeft: ee,
              __htmlStructure: P,
              __fromCanvasComponent: F = !1,
              _forwardedOverrideId: te,
              _forwardedOverrides: ne,
              _usesDOMRect: re,
              children: ie,
              ...ae
            } = e,
            oe = Os(),
            se = qs(e),
            ce = _(null),
            le = n ?? ce,
            { navigate: ue, getRoute: de } = kn(),
            fe = jn();
          (zr(e.preload ?? []), $s(e, le));
          let pe = t(Cx),
            me = ld(),
            he = s,
            I = te ?? r;
          if (I && ne) {
            let e = ne[I];
            typeof e == `string` && (he = e);
          }
          let ge = ``;
          if (he) {
            let e = g_(he);
            ge = P ? P.replace(lO, e) : `<p>${e}</p>`;
          } else if (a) ge = a;
          else if (c) {
            let e = g_(c);
            ge = P ? P.replace(lO, e) : `<p>${e}</p>`;
          } else o && (ge = o);
          let L = Md(),
            _e = C(() => (me || !de || !fe ? ge : __(ge, de, fe, L)), [ge, de, fe, L]);
          if (
            (N(() => {
              let e = le.current;
              if (e === null) return;
              function t(e) {
                let t = Ed(e.target, le.current);
                !yr(e) &&
                  ue &&
                  t &&
                  t.getAttribute(`target`) !== `_blank` &&
                  hd(ue, t, L) &&
                  e.preventDefault();
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [ue, L]),
            b_(l, F, le),
            !b)
          )
            return null;
          let ve = T && D() === W.canvas,
            R = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: y_(w),
              opacity: ve ? 0 : x,
              flexShrink: 0,
            },
            ye = W.hasRestrictions(),
            be = Ts(e, oe || 0, !1),
            xe = re && (u === `auto` || d === `auto`),
            Se = !!e.transformTemplate || !be || !ye || F || xe,
            Ce = Se ? (e.transformTemplate ?? Ks(g)) : void 0;
          if (!O) {
            if (be && ye && !xe) {
              let e = fb.getNumber(S).toFixed(4);
              ((R.transform = `translate(${be.x}px, ${be.y}px) rotate(${e}deg)`),
                (R.width = be.width),
                (R.minWidth = be.width),
                (R.height = be.height));
            } else
              ((R.left = f),
                (R.right = p),
                (R.top = m),
                (R.bottom = h),
                (R.width = u),
                (R.height = d),
                (R.rotate = S));
            k
              ? (!me || pe) &&
                ((R.position = `sticky`),
                (R.willChange = `transform`),
                (R.top = A),
                (R.right = j),
                (R.bottom = M),
                (R.left = ee))
              : me && (e.positionFixed || e.positionAbsolute) && (R.position = `absolute`);
          }
          return (
            Rl(e, R),
            Fl(e, R),
            Object.assign(R, e.style),
            /* @__PURE__ */ E(Ue.div, {
              id: r,
              ref: le,
              ...m_(Wb(ae)),
              ...Us(Se ? g : void 0, e.style),
              style: R,
              layoutId: se,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": g,
              className: Bl(v, y, uO),
              transformTemplate: Ce,
              dangerouslySetInnerHTML: { __html: _e },
            })
          );
        })
      )),
      (fO = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (pO =
        /\p{Regional_Indicator}{2}|\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?(?:\u{200d}\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?)*|./gu),
      (mO = /* @__PURE__ */ D(function (e, t) {
        return /* @__PURE__ */ E(`svg`, { ...e, ref: t, children: e.children });
      })),
      (hO = /* @__PURE__ */ Ue.create(mO)),
      (gO = /* @__PURE__ */ D(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return /* @__PURE__ */ E(hO, {
          ...r,
          ref: i,
          viewBox: t,
          children: /* @__PURE__ */ E(Ue.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (_O = []),
      (vO = `RichTextContainer`),
      (yO = /* @__PURE__ */ D(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: c,
            bottom: l,
            center: u,
            children: d,
            environment: f = W.current,
            fonts: p = _O,
            height: m,
            isEditable: h = !1,
            left: g,
            name: v,
            opacity: y,
            positionSticky: b,
            positionStickyBottom: x,
            positionStickyLeft: S,
            positionStickyRight: w,
            positionStickyTop: T,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: M,
            top: N,
            verticalAlignment: ee = `top`,
            visible: P = !0,
            width: F,
            withExternalLayout: te = !1,
            viewBox: ne,
            viewBoxScale: re = 1,
            effect: ie,
            ...ae
          } = e,
          oe = Os(),
          se = f(),
          ce = se === W.canvas,
          le = ce || se === W.export,
          ue = t(Cx),
          de = qs(e),
          fe = _(null),
          pe = n ?? fe;
        ($s(e, pe), b_(p, r, pe));
        let me = k_(ie, pe),
          he = C(() => {
            if (d) return I_(d, j, M, s, void 0, me.getTokenizer());
          }, [d, j, M, s, me]);
        if (!P) return null;
        let I = { opacity: h && ce ? 0 : y },
          ge = y_(ee);
        ge !== Jt.justifyContent && (I.justifyContent = ge);
        let L = {},
          _e = W.hasRestrictions(),
          ve = Ts(e, oe || 0, !1),
          R = o && (F === `auto` || m === `auto`),
          ye = !!e.transformTemplate || !ve || !_e || r || R,
          be = ye ? (e.transformTemplate ?? Ks(u)) : void 0;
        (te ||
          (ve && _e && !R
            ? ((L.x = ve.x + (B(k?.x) ? k.x : 0)),
              (L.y = ve.y + (B(k?.y) ? k.y : 0)),
              (L.left = 0),
              (L.top = 0),
              (I.rotate = fb.getNumber(O)),
              (I.width = ve.width),
              (I.minWidth = ve.width),
              (I.height = ve.height))
            : ((I.left = g),
              (I.right = D),
              (I.top = N),
              (I.bottom = l),
              (I.width = F),
              (I.height = m),
              (I.rotate = O)),
          b
            ? (!le || ue) &&
              ((I.position = `sticky`),
              (I.willChange = `transform`),
              (I.top = T),
              (I.right = w),
              (I.bottom = x),
              (I.left = S))
            : ce && (e.positionFixed || e.positionAbsolute) && (I.position = `absolute`)),
          Rl(e, I),
          Fl(e, I),
          Object.assign(I, A, k, L),
          de && (ae.layout = `preserve-aspect`));
        let xe = Is(e.as),
          Se = ae[`data-framer-name`] ?? v,
          Ce = m_(Wb(ae)),
          we = Us(ye ? u : void 0, k);
        return z(e.viewBox)
          ? e.as === void 0
            ? /* @__PURE__ */ E(gO, {
                ...Ce,
                ...we,
                ref: pe,
                style: I,
                layoutId: de,
                viewBox: ne,
                viewBoxScale: re,
                transformTemplate: be,
                "data-framer-name": Se,
                "data-framer-component-type": vO,
                children: he,
              })
            : /* @__PURE__ */ E(xe, {
                ...Ce,
                ...we,
                ref: pe,
                style: I,
                layoutId: de,
                transformTemplate: be,
                "data-framer-name": Se,
                "data-framer-component-type": vO,
                children: /* @__PURE__ */ E(gO, {
                  viewBox: ne,
                  viewBoxScale: re,
                  style: { width: `100%`, height: `100%` },
                  children: he,
                }),
              })
          : /* @__PURE__ */ E(xe, {
              ...Ce,
              ...we,
              ref: pe,
              style: I,
              layoutId: de,
              transformTemplate: be,
              "data-framer-name": Se,
              "data-framer-component-type": vO,
              children: he,
            });
      })),
      (bO = /* @__PURE__ */ Vs(
        /* @__PURE__ */ D(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (z(a)) {
            !r.stylesPresetsClassName &&
              V(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [z(t) ? `html` : `htmlFromDesign`]: a };
            return /* @__PURE__ */ E(dO, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && z(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return /* @__PURE__ */ E(yO, { ...r, ref: i, children: T(a) ? a : void 0 });
        })
      )),
      (xO = /* @__PURE__ */ pr()),
      (SO = class {
        id;
        svg;
        innerHTML;
        viewBox;
        count;
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
      }),
      (CO = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (wO = class {
        entries = /* @__PURE__ */ new Map();
        vectorSetItems = /* @__PURE__ */ new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(Ax(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = V_(e);
            (s &&
              (t && H_(s, n),
              (s.id = n),
              (o = q_(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (e && e !== ``) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          xO && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = CO),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          xO && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new SO(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !xO) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        xO && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${CO}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (TO = /* @__PURE__ */ new wO()),
      (EO = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 16,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (DO = 1e3),
      (OO = `Variable`),
      (kO = `explicitInter`),
      (Te.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = L(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  }))();
}
export {
  Uh as $,
  Bl as A,
  _C as At,
  X_ as B,
  $t as Bt,
  gT as C,
  Ln as Ct,
  Z_ as D,
  cg as Dt,
  J_ as E,
  Hi as Et,
  GS as F,
  AD as Ft,
  AO as G,
  Rv as H,
  WS as I,
  ly as It,
  zs as J,
  mn as K,
  gx as L,
  W as Lt,
  dv as M,
  Xg as Mt,
  KS as N,
  Ql as Nt,
  Al as O,
  _x as Ot,
  US as P,
  sv as Pt,
  YE as Q,
  Q_ as R,
  cn as Rt,
  GE as S,
  Ch as St,
  IC as T,
  B_ as Tt,
  Ea as U,
  wh as V,
  sn as Vt,
  dn as W,
  YC as X,
  _a as Y,
  Ha as Z,
  ob as _,
  Ir as _t,
  FC as a,
  TO as at,
  aw as b,
  Ki as bt,
  YD as c,
  Ui as ct,
  tO as d,
  jn as dt,
  ja as et,
  PS as f,
  od as ft,
  bw as g,
  Uo as gt,
  Tv as h,
  ld as ht,
  bC as i,
  wC as it,
  Qb as j,
  jD as jt,
  yx as k,
  lg as kt,
  zw as l,
  qi as lt,
  aO as m,
  zh as mt,
  Dd as n,
  cv as nt,
  yS as o,
  pa as ot,
  nw as p,
  Th as pt,
  gv as q,
  Eu as r,
  wd as rt,
  Bo as s,
  Fh as st,
  Cd as t,
  lv as tt,
  UD as u,
  Du as ut,
  Ur as v,
  Fr as vt,
  bO as w,
  kn as wt,
  zS as x,
  qh as xt,
  Bp as y,
  Ua as yt,
  $_ as z,
  ct as zt,
};
//# sourceMappingURL=framer.B_dFn1Dy.mjs.map
