import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  P as r,
  b as i,
  c as a,
  j as o,
  l as s,
  o as c,
  p as l,
  s as u,
  w as d,
} from "./react.Dxe_2v0O.mjs";
import { i as f, o as p, t as m, w as h } from "./motion.x14TTX80.mjs";
import {
  A as g,
  At as _,
  C as v,
  D as y,
  Dt as b,
  G as x,
  M as S,
  Mt as C,
  O as w,
  Ot as T,
  Q as E,
  R as D,
  St as O,
  a as k,
  b as ee,
  f as te,
  ft as ne,
  g as A,
  ht as j,
  i as M,
  j as re,
  kt as N,
  mt as P,
  n as ie,
  nt as ae,
  o as F,
  tt as oe,
  ut as I,
  vt as L,
  w as R,
  wt as se,
  x as z,
  yt as ce,
  z as B,
} from "./framer.B_dFn1Dy.mjs";
import {
  D as le,
  E as ue,
  H as de,
  N as V,
  O as fe,
  P as pe,
  T as me,
  U as he,
  V as ge,
  W as _e,
} from "./toplevel-deps.CDw6GExF.mjs";
import { n as ve, t as ye } from "./e741EY288.DL5B2HNh.mjs";
import {
  c as be,
  i as xe,
  n as Se,
  o as Ce,
  r as we,
  s as Te,
  t as Ee,
} from "./Hm3rqxw86.e4ZtCfxi.mjs";
import { i as De, n as Oe, r as ke, t as Ae } from "./vI2CBrBs4.COrWOcnr.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./XoUykaZIy.e7NFHGiv.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./sgPoc0pBr.CzO-fPYl.mjs";
import { n as ze, t as H } from "./XiY6uOdUd.Bm61z7Fk.mjs";
import { i as Be, r as Ve } from "./eHfc5JU5K.HTuxaPYs.mjs";
import { n as He, t as Ue } from "./qZG6gxxYn.Cw3NaZi3.mjs";
import { n as We, t as U } from "./UhBaDh7qR.OzPy8NNH.mjs";
import { n as Ge, t as Ke } from "./V5piL6kpl.B6Yi6Dm0.mjs";
import { n as qe, r as Je } from "./N22VkyVPW.CBOUk-Z-.mjs";
function Ye(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, W;
function lt() {
  return (lt = e(() => {
    (u(),
      x(),
      m(),
      d(),
      pe(),
      fe(),
      (Xe = D(V)),
      (Ze = { q80W6rtcC: { hover: !0 }, QfMV6oyGw: { hover: !0 }, qfSkuwf0b: { hover: !0 } }),
      (Qe = [`QfMV6oyGw`, `q80W6rtcC`, `qfSkuwf0b`]),
      ($e = `framer-X8uy9`),
      (et = {
        q80W6rtcC: `framer-v-151zstz`,
        QfMV6oyGw: `framer-v-18sv3sl`,
        qfSkuwf0b: `framer-v-1cx0vwi`,
      }),
      (tt = { delay: 0, duration: 0.25, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (nt = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(p.Provider, { value: a, children: n });
      }),
      (rt = { Desktop: `QfMV6oyGw`, Phone: `qfSkuwf0b`, Tablet: `q80W6rtcC` }),
      (it = h.create(r)),
      (at = ({ answer: e, height: t, id: n, link: r, question: i, width: a, ...o }) => ({
        ...o,
        bCWdmTC6l: r ?? o.bCWdmTC6l,
        CXO8sDnSZ: e ?? o.CXO8sDnSZ ?? `Repairs & leak tracing`,
        variant: rt[o.variant] ?? o.variant ?? `QfMV6oyGw`,
        Xzzg9CJWv: i ?? o.Xzzg9CJWv ?? `There is a water stain on a ceiling`,
      })),
      (ot = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (st = /*#__PURE__*/ l(function (e, t) {
        let a = i(null),
          o = t ?? a,
          l = n(),
          { activeLocale: u, contentLocale: d, setLocale: p } = L();
        I();
        let {
            style: m,
            className: _,
            layoutId: v,
            variant: y,
            Xzzg9CJWv: x,
            CXO8sDnSZ: S,
            bCWdmTC6l: C,
            ...w
          } = at(e),
          {
            baseVariant: T,
            classNames: E,
            clearLoadingGesture: D,
            gestureHandlers: O,
            gestureVariant: k,
            isLoading: ee,
            setGestureState: te,
            setVariant: ne,
            variants: j,
          } = b({
            cycleOrder: Qe,
            defaultVariant: `QfMV6oyGw`,
            enabledGestures: Ze,
            ref: o,
            variant: y,
            variantClassNames: et,
          }),
          M = ot(e, j),
          re = g($e, me);
        return /*#__PURE__*/ c(f, {
          id: v ?? l,
          children: /*#__PURE__*/ c(it, {
            animate: j,
            initial: !1,
            children: /*#__PURE__*/ c(nt, {
              value: tt,
              children: /*#__PURE__*/ c(A, {
                href: C,
                motionChild: !0,
                nodeId: `QfMV6oyGw`,
                scopeId: `OkQNyX7_n`,
                children: /*#__PURE__*/ s(h.a, {
                  ...w,
                  ...O,
                  className: `${g(re, `framer-18sv3sl`, _, E)} framer-1cxa92r`,
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: M,
                  layoutId: `QfMV6oyGw`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    ...m,
                  },
                  ...Ye(
                    {
                      "q80W6rtcC-hover": { "data-framer-name": void 0 },
                      "QfMV6oyGw-hover": { "data-framer-name": void 0 },
                      "qfSkuwf0b-hover": { "data-framer-name": void 0 },
                      q80W6rtcC: { "data-framer-name": `Tablet` },
                      qfSkuwf0b: { "data-framer-name": `Phone` },
                    },
                    T,
                    k
                  ),
                  children: [
                    /*#__PURE__*/ s(h.div, {
                      className: `framer-5xkf7u`,
                      "data-framer-name": `Content`,
                      layoutDependency: M,
                      layoutId: `gx3PsUWdZ`,
                      children: [
                        /*#__PURE__*/ c(R, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ c(r, {
                            children: /*#__PURE__*/ c(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                "--framer-font-size": `17px`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                "--framer-letter-spacing": `-0.02em`,
                                "--framer-line-height": `1.6em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                              },
                              children: `Question`,
                            }),
                          }),
                          className: `framer-18ga600`,
                          "data-framer-name": `Question`,
                          fonts: [`FS;Manrope-variable`],
                          layoutDependency: M,
                          layoutId: `XwfyzP4Fk`,
                          style: {
                            "--extracted-2gg91v": `"wght" 500`,
                            "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                          },
                          text: x,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        /*#__PURE__*/ c(h.div, {
                          className: `framer-bgf5eg`,
                          "data-framer-name": `Answer Wrap`,
                          layoutDependency: M,
                          layoutId: `m12aVoLm5`,
                          children: /*#__PURE__*/ c(R, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ c(r, {
                              children: /*#__PURE__*/ c(h.p, {
                                className: `framer-styles-preset-1o6gk2k`,
                                "data-styles-preset": `eH8Vy20RR`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                },
                                children: `Repairs & leak tracing`,
                              }),
                            }),
                            className: `framer-10379p0`,
                            "data-framer-name": `Answer`,
                            fonts: [`Inter`],
                            layoutDependency: M,
                            layoutId: `mzzaCGesb`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                            },
                            text: S,
                            variants: {
                              "q80W6rtcC-hover": {
                                "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                              },
                              "QfMV6oyGw-hover": {
                                "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                              },
                              "qfSkuwf0b-hover": {
                                "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Ye(
                              {
                                "q80W6rtcC-hover": {
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(h.p, {
                                      className: `framer-styles-preset-1o6gk2k`,
                                      "data-styles-preset": `eH8Vy20RR`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                      },
                                      children: `Repairs & leak tracing`,
                                    }),
                                  }),
                                },
                                "QfMV6oyGw-hover": {
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(h.p, {
                                      className: `framer-styles-preset-1o6gk2k`,
                                      "data-styles-preset": `eH8Vy20RR`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                      },
                                      children: `Repairs & leak tracing`,
                                    }),
                                  }),
                                },
                                "qfSkuwf0b-hover": {
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(h.p, {
                                      className: `framer-styles-preset-1o6gk2k`,
                                      "data-styles-preset": `eH8Vy20RR`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                      },
                                      children: `Repairs & leak tracing`,
                                    }),
                                  }),
                                },
                              },
                              T,
                              k
                            ),
                          }),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ c(h.div, {
                      className: `framer-h4qr9u`,
                      "data-framer-name": `Icon`,
                      layoutDependency: M,
                      layoutId: `X9JTrh0yj`,
                      children: /*#__PURE__*/ c(V, {
                        animated: !0,
                        className: `framer-f88xs3`,
                        layoutDependency: M,
                        layoutId: `j7tQji0iZ`,
                        style: {
                          "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                          "--js9iwy": 2,
                        },
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (ct = [
        `.framer-X8uy9.framer-1cxa92r, .framer-X8uy9 .framer-1cxa92r { display: block; }`,
        `.framer-X8uy9.framer-18sv3sl { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 18px 0px 19px 0px; position: relative; text-decoration: none; width: 613px; }`,
        `.framer-X8uy9 .framer-5xkf7u { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-X8uy9 .framer-18ga600 { flex: 6 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-X8uy9 .framer-bgf5eg { align-content: flex-start; align-items: flex-start; display: flex; flex: 4 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 3px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-X8uy9 .framer-10379p0 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-X8uy9 .framer-h4qr9u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 24px; }`,
        `.framer-X8uy9 .framer-f88xs3 { flex: none; height: auto; position: relative; width: 20px; }`,
        `.framer-X8uy9.framer-v-151zstz.framer-18sv3sl { width: 758px; }`,
        `.framer-X8uy9.framer-v-1cx0vwi.framer-18sv3sl { gap: 12px 24px; width: 358px; }`,
        `.framer-X8uy9.framer-v-1cx0vwi .framer-5xkf7u { flex-direction: column; gap: 12px; }`,
        `.framer-X8uy9.framer-v-1cx0vwi .framer-18ga600 { flex: none; width: 100%; }`,
        `.framer-X8uy9.framer-v-1cx0vwi .framer-bgf5eg { flex: none; padding: 0px; width: 100%; }`,
        ...ue,
        `.framer-X8uy9[data-border="true"]::after, .framer-X8uy9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (W = T(st, ct, `framer-X8uy9`)),
      (W.displayName = `Finder Row`),
      (W.defaultProps = { height: 64, width: 613 }),
      w(W, {
        variant: {
          options: [`QfMV6oyGw`, `q80W6rtcC`, `qfSkuwf0b`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: F.Enum,
        },
        Xzzg9CJWv: {
          defaultValue: `There is a water stain on a ceiling`,
          title: `Question`,
          type: F.String,
        },
        onXzzg9CJWvChange: { changes: `Xzzg9CJWv`, type: F.ChangeHandler },
        CXO8sDnSZ: { defaultValue: `Repairs & leak tracing`, title: `Answer`, type: F.String },
        onCXO8sDnSZChange: { changes: `CXO8sDnSZ`, type: F.ChangeHandler },
        bCWdmTC6l: { title: `Link`, type: F.Link },
      }),
      y(
        W,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Manrope Variable`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Manrope`,
                url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
                variationAxes: [
                  { defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` },
                ],
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Xe,
          ...B(le),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function ut(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, G;
function wt() {
  return (wt = e(() => {
    (u(),
      x(),
      m(),
      d(),
      pe(),
      _e(),
      je(),
      (dt = D(V)),
      (ft = { AV27vcY0B: { hover: !0 }, GYZML5iCP: { hover: !0 }, MSdq62QzX: { hover: !0 } }),
      (pt = [`AV27vcY0B`, `MSdq62QzX`, `GYZML5iCP`]),
      (mt = `framer-bg4gQ`),
      (ht = {
        AV27vcY0B: `framer-v-x29gjo`,
        GYZML5iCP: `framer-v-18rqy5i`,
        MSdq62QzX: `framer-v-18diuv0`,
      }),
      (gt = { delay: 0, duration: 0.3, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (_t = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(p.Provider, { value: a, children: n });
      }),
      (vt = { Desktop: `AV27vcY0B`, Phone: `GYZML5iCP`, Tablet: `MSdq62QzX` }),
      (yt = h.create(r)),
      (bt = ({
        height: e,
        id: t,
        link: n,
        number: r,
        price: i,
        priceNote: a,
        summary: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        Ah7RNqXBG: i ?? l.Ah7RNqXBG ?? `From $11,800`,
        Ap_Ks1P0V: r ?? l.Ap_Ks1P0V ?? `01`,
        HCFMyccsV:
          o ??
          l.HCFMyccsV ??
          `Full tear-off to the deck, new underlayment and the roof system of your choice.`,
        miqEAjk8Y: s ?? l.miqEAjk8Y ?? `Roof replacement`,
        THnXRckrc: a ?? l.THnXRckrc ?? `guide price`,
        variant: vt[l.variant] ?? l.variant ?? `AV27vcY0B`,
        XJTskpmRP: n ?? l.XJTskpmRP,
      })),
      (xt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (St = /*#__PURE__*/ l(function (e, t) {
        let a = i(null),
          o = t ?? a,
          l = n(),
          { activeLocale: u, contentLocale: d, setLocale: p } = L();
        I();
        let {
            style: m,
            className: _,
            layoutId: v,
            variant: y,
            Ap_Ks1P0V: x,
            miqEAjk8Y: S,
            HCFMyccsV: C,
            Ah7RNqXBG: w,
            THnXRckrc: T,
            XJTskpmRP: E,
            ...D
          } = bt(e),
          {
            baseVariant: O,
            classNames: k,
            clearLoadingGesture: ee,
            gestureHandlers: te,
            gestureVariant: ne,
            isLoading: j,
            setGestureState: M,
            setVariant: re,
            variants: N,
          } = b({
            cycleOrder: pt,
            defaultVariant: `AV27vcY0B`,
            enabledGestures: ft,
            ref: o,
            variant: y,
            variantClassNames: ht,
          }),
          P = xt(e, N),
          ie = g(mt, ge, Pe);
        return /*#__PURE__*/ c(f, {
          id: v ?? l,
          children: /*#__PURE__*/ c(yt, {
            animate: N,
            initial: !1,
            children: /*#__PURE__*/ c(_t, {
              value: gt,
              children: /*#__PURE__*/ c(A, {
                href: E,
                motionChild: !0,
                nodeId: `AV27vcY0B`,
                scopeId: `PAZHEo0dB`,
                children: /*#__PURE__*/ s(h.a, {
                  ...D,
                  ...te,
                  className: `${g(ie, `framer-x29gjo`, _, k)} framer-1eybwfs`,
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: P,
                  layoutId: `AV27vcY0B`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    ...m,
                  },
                  ...ut(
                    {
                      "AV27vcY0B-hover": { "data-framer-name": void 0 },
                      "GYZML5iCP-hover": { "data-framer-name": void 0 },
                      "MSdq62QzX-hover": { "data-framer-name": void 0 },
                      GYZML5iCP: { "data-framer-name": `Phone` },
                      MSdq62QzX: { "data-framer-name": `Tablet` },
                    },
                    O,
                    ne
                  ),
                  children: [
                    /*#__PURE__*/ c(h.div, {
                      className: `framer-1svenym`,
                      "data-framer-name": `Number Wrap`,
                      layoutDependency: P,
                      layoutId: `m6Kn4Fb4s`,
                      children: /*#__PURE__*/ c(R, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ c(r, {
                          children: /*#__PURE__*/ c(h.p, {
                            className: `framer-styles-preset-47y0yi`,
                            "data-styles-preset": `WcNYxFkzx`,
                            dir: `auto`,
                            style: { "--framer-text-alignment": `start` },
                            children: `01`,
                          }),
                        }),
                        className: `framer-1p71enm`,
                        "data-framer-name": `Number`,
                        fonts: [`Inter`],
                        layoutDependency: P,
                        layoutId: `JCRDMESk3`,
                        text: x,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    /*#__PURE__*/ s(h.div, {
                      className: `framer-nrh18w`,
                      "data-framer-name": `Main`,
                      layoutDependency: P,
                      layoutId: `eb2xaNaSp`,
                      children: [
                        /*#__PURE__*/ c(R, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ c(r, {
                            children: /*#__PURE__*/ c(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                "--framer-font-size": `29px`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                "--framer-letter-spacing": `-0.038em`,
                                "--framer-line-height": `1.0924em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                              },
                              children: `Roof replacement`,
                            }),
                          }),
                          className: `framer-11lo0qa`,
                          "data-framer-name": `Title`,
                          fonts: [`FS;Manrope-variable`],
                          layoutDependency: P,
                          layoutId: `UP6W4ZID1`,
                          style: {
                            "--extracted-2gg91v": `"wght" 500`,
                            "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                          },
                          text: S,
                          variants: {
                            "AV27vcY0B-hover": {
                              "--extracted-r6o4lv": `var(--token-d1796b10-ed0a-4c44-bd3b-b2d8b366f17b)`,
                            },
                            "GYZML5iCP-hover": {
                              "--extracted-r6o4lv": `var(--token-d1796b10-ed0a-4c44-bd3b-b2d8b366f17b)`,
                            },
                            "MSdq62QzX-hover": {
                              "--extracted-r6o4lv": `var(--token-d1796b10-ed0a-4c44-bd3b-b2d8b366f17b)`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...ut(
                            {
                              "AV27vcY0B-hover": {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                      "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                      "--framer-font-size": `29px`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                      "--framer-letter-spacing": `-0.038em`,
                                      "--framer-line-height": `1.0924em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d1796b10-ed0a-4c44-bd3b-b2d8b366f17b))`,
                                    },
                                    children: `Roof replacement`,
                                  }),
                                }),
                              },
                              "GYZML5iCP-hover": {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                      "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                      "--framer-font-size": `24px`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                      "--framer-letter-spacing": `-0.035em`,
                                      "--framer-line-height": `1.1em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d1796b10-ed0a-4c44-bd3b-b2d8b366f17b))`,
                                    },
                                    children: `Roof replacement`,
                                  }),
                                }),
                              },
                              "MSdq62QzX-hover": {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                      "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                      "--framer-font-size": `24px`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                      "--framer-letter-spacing": `-0.035em`,
                                      "--framer-line-height": `1.1em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d1796b10-ed0a-4c44-bd3b-b2d8b366f17b))`,
                                    },
                                    children: `Roof replacement`,
                                  }),
                                }),
                              },
                              GYZML5iCP: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                      "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                      "--framer-font-size": `24px`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                      "--framer-letter-spacing": `-0.035em`,
                                      "--framer-line-height": `1.1em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                    },
                                    children: `Roof replacement`,
                                  }),
                                }),
                              },
                              MSdq62QzX: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(h.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                      "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                      "--framer-font-size": `24px`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                      "--framer-letter-spacing": `-0.035em`,
                                      "--framer-line-height": `1.1em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                    },
                                    children: `Roof replacement`,
                                  }),
                                }),
                              },
                            },
                            O,
                            ne
                          ),
                        }),
                        /*#__PURE__*/ c(h.div, {
                          className: `framer-m2qjpa`,
                          "data-framer-name": `Summary Wrap`,
                          layoutDependency: P,
                          layoutId: `bim0xESYg`,
                          children: /*#__PURE__*/ c(R, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ c(r, {
                              children: /*#__PURE__*/ c(h.p, {
                                className: `framer-styles-preset-1u2960c`,
                                "data-styles-preset": `XoUykaZIy`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                },
                                children: `Full tear-off to the deck, new underlayment and the roof system of your choice.`,
                              }),
                            }),
                            className: `framer-kq93b0`,
                            "data-framer-name": `Summary`,
                            fonts: [`Inter`],
                            layoutDependency: P,
                            layoutId: `RmkJRBfOh`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                            },
                            text: C,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        /*#__PURE__*/ s(h.div, {
                          className: `framer-101b8nd`,
                          "data-framer-name": `Price`,
                          layoutDependency: P,
                          layoutId: `ngwZntZ70`,
                          children: [
                            /*#__PURE__*/ c(R, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ c(r, {
                                children: /*#__PURE__*/ c(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                                    "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'tnum' on`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                                    "--framer-letter-spacing": `-0.015em`,
                                    "--framer-line-height": `1.6em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                  },
                                  children: `Price`,
                                }),
                              }),
                              className: `framer-rmjdyi`,
                              "data-framer-name": `Price`,
                              fonts: [`FS;Manrope-variable`],
                              layoutDependency: P,
                              layoutId: `tRzfcRR4S`,
                              style: {
                                "--extracted-2gg91v": `"wght" 600`,
                                "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                              },
                              text: w,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ c(R, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ c(r, {
                                children: /*#__PURE__*/ c(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                                    "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                    "--framer-font-size": `13px`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                                    "--framer-letter-spacing": `-0.0187em`,
                                    "--framer-line-height": `1.7231em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                  },
                                  children: `guide price`,
                                }),
                              }),
                              className: `framer-hpryn5`,
                              "data-framer-name": `Note`,
                              fonts: [`FS;Manrope-variable`],
                              layoutDependency: P,
                              layoutId: `cM0FRaolX`,
                              style: {
                                "--extracted-2gg91v": `"wght" 600`,
                                "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                              },
                              text: T,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ c(V, {
                      animated: !0,
                      className: `framer-1pf6e7i`,
                      layoutDependency: P,
                      layoutId: `rXHeqUXvU`,
                      style: {
                        "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                        "--js9iwy": 2,
                      },
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Ct = [
        `.framer-bg4gQ.framer-1eybwfs, .framer-bg4gQ .framer-1eybwfs { display: block; }`,
        `.framer-bg4gQ.framer-x29gjo { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 28.8px; height: min-content; justify-content: flex-start; padding: 20px 0px 21px 0px; position: relative; text-decoration: none; width: 1123px; }`,
        `.framer-bg4gQ .framer-1svenym { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 44px; }`,
        `.framer-bg4gQ .framer-1p71enm, .framer-bg4gQ .framer-rmjdyi, .framer-bg4gQ .framer-hpryn5 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bg4gQ .framer-nrh18w { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 28.8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bg4gQ .framer-11lo0qa { flex: 4 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bg4gQ .framer-m2qjpa { align-content: flex-start; align-items: flex-start; display: flex; flex: 4 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bg4gQ .framer-kq93b0 { flex: none; height: auto; max-width: 383px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bg4gQ .framer-101b8nd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 140px; }`,
        `.framer-bg4gQ .framer-1pf6e7i { flex: none; height: auto; position: relative; width: 22px; }`,
        `.framer-bg4gQ.framer-v-18diuv0.framer-x29gjo { gap: 19.44px; width: 758px; }`,
        `.framer-bg4gQ.framer-v-18diuv0 .framer-nrh18w { gap: 19.44px; }`,
        `.framer-bg4gQ.framer-v-18diuv0 .framer-kq93b0, .framer-bg4gQ.framer-v-18rqy5i .framer-kq93b0, .framer-bg4gQ.framer-v-18diuv0.hover .framer-kq93b0, .framer-bg4gQ.framer-v-18rqy5i.hover .framer-kq93b0 { max-width: unset; }`,
        `.framer-bg4gQ.framer-v-18diuv0 .framer-101b8nd { width: 110px; }`,
        `.framer-bg4gQ.framer-v-18rqy5i.framer-x29gjo { align-content: flex-start; align-items: flex-start; gap: 16px; width: 358px; }`,
        `.framer-bg4gQ.framer-v-18rqy5i .framer-1svenym { padding: 6px 0px 0px 0px; width: 32px; }`,
        `.framer-bg4gQ.framer-v-18rqy5i .framer-1p71enm { width: 32px; }`,
        `.framer-bg4gQ.framer-v-18rqy5i .framer-nrh18w { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 6px; }`,
        `.framer-bg4gQ.framer-v-18rqy5i .framer-11lo0qa { flex: none; min-height: 28px; width: 100%; }`,
        `.framer-bg4gQ.framer-v-18rqy5i .framer-m2qjpa { flex: none; width: 100%; }`,
        `.framer-bg4gQ.framer-v-18rqy5i .framer-101b8nd { width: 100%; }`,
        ...de,
        ...Me,
        `.framer-bg4gQ[data-border="true"]::after, .framer-bg4gQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (G = T(St, Ct, `framer-bg4gQ`)),
      (G.displayName = `Service Index Row`),
      (G.defaultProps = { height: 92, width: 1123 }),
      w(G, {
        variant: {
          options: [`AV27vcY0B`, `MSdq62QzX`, `GYZML5iCP`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: F.Enum,
        },
        Ap_Ks1P0V: { defaultValue: `01`, title: `Number`, type: F.String },
        onAp_Ks1P0VChange: { changes: `Ap_Ks1P0V`, type: F.ChangeHandler },
        miqEAjk8Y: { defaultValue: `Roof replacement`, title: `Title`, type: F.String },
        onmiqEAjk8YChange: { changes: `miqEAjk8Y`, type: F.ChangeHandler },
        HCFMyccsV: {
          defaultValue: `Full tear-off to the deck, new underlayment and the roof system of your choice.`,
          title: `Summary`,
          type: F.String,
        },
        onHCFMyccsVChange: { changes: `HCFMyccsV`, type: F.ChangeHandler },
        Ah7RNqXBG: { defaultValue: `From $11,800`, title: `Price`, type: F.String },
        onAh7RNqXBGChange: { changes: `Ah7RNqXBG`, type: F.ChangeHandler },
        THnXRckrc: { defaultValue: `guide price`, title: `Price Note`, type: F.String },
        onTHnXRckrcChange: { changes: `THnXRckrc`, type: F.ChangeHandler },
        XJTskpmRP: { title: `Link`, type: F.Link },
      }),
      y(
        G,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Manrope Variable`,
                openType: !0,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Manrope`,
                url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
                variationAxes: [
                  { defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` },
                ],
                weight: `400`,
              },
            ],
          },
          ...dt,
          ...B(he),
          ...B(Ne),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, K;
function Pt() {
  return (Pt = e(() => {
    (u(),
      x(),
      m(),
      d(),
      je(),
      (Tt = `framer-Yba5U`),
      (Et = { vRRyzHpga: `framer-v-1siif6x` }),
      (Dt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ot = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(p.Provider, { value: a, children: n });
      }),
      (kt = h.create(r)),
      (At = ({ height: e, id: t, number: n, text: r, title: i, width: a, ...o }) => ({
        ...o,
        e20pFL5YS: n ?? o.e20pFL5YS ?? `01`,
        ISVNTeKwb:
          r ??
          o.ISVNTeKwb ??
          `20 to 40 labelled photos and a plain answer, repair it, watch it or replace it, within 24 hours.`,
        lA7_MKTiF: i ?? o.lA7_MKTiF ?? `Photo inspection report`,
      })),
      (jt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Mt = /*#__PURE__*/ l(function (e, t) {
        let a = i(null),
          o = t ?? a,
          l = n(),
          { activeLocale: u, contentLocale: d, setLocale: p } = L();
        I();
        let {
            style: m,
            className: _,
            layoutId: v,
            variant: y,
            e20pFL5YS: x,
            lA7_MKTiF: S,
            ISVNTeKwb: C,
            ...w
          } = At(e),
          {
            baseVariant: T,
            classNames: E,
            clearLoadingGesture: D,
            gestureHandlers: O,
            gestureVariant: k,
            isLoading: ee,
            setGestureState: te,
            setVariant: ne,
            variants: A,
          } = b({ defaultVariant: `vRRyzHpga`, ref: o, variant: y, variantClassNames: Et }),
          j = jt(e, A),
          M = g(Tt, Pe);
        return /*#__PURE__*/ c(f, {
          id: v ?? l,
          children: /*#__PURE__*/ c(kt, {
            animate: A,
            initial: !1,
            children: /*#__PURE__*/ c(Ot, {
              value: Dt,
              children: /*#__PURE__*/ s(h.div, {
                ...w,
                ...O,
                className: g(M, `framer-1siif6x`, _, E),
                "data-border": !0,
                "data-framer-name": `Strong`,
                layoutDependency: j,
                layoutId: `vRRyzHpga`,
                ref: o,
                style: {
                  "--border-bottom-width": `0px`,
                  "--border-color": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                  "--border-left-width": `0px`,
                  "--border-right-width": `0px`,
                  "--border-style": `solid`,
                  "--border-top-width": `2px`,
                  ...m,
                },
                children: [
                  /*#__PURE__*/ c(R, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ c(r, {
                      children: /*#__PURE__*/ c(h.p, {
                        dir: `auto`,
                        style: {
                          "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                          "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                          "--framer-font-open-type-features": `'tnum' on`,
                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                          "--framer-letter-spacing": `-0.0103em`,
                          "--framer-line-height": `1.55em`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                        },
                        children: `01`,
                      }),
                    }),
                    className: `framer-15ji18w`,
                    "data-framer-name": `Number`,
                    fonts: [`FS;Manrope-variable`],
                    layoutDependency: j,
                    layoutId: `HrMgjcNFc`,
                    style: {
                      "--extracted-2gg91v": `"wght" 600`,
                      "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                    },
                    text: x,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                  /*#__PURE__*/ c(R, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ c(r, {
                      children: /*#__PURE__*/ c(h.p, {
                        dir: `auto`,
                        style: {
                          "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                          "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                          "--framer-font-size": `19px`,
                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                          "--framer-letter-spacing": `-0.025em`,
                          "--framer-line-height": `1.25em`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                        },
                        children: `Title`,
                      }),
                    }),
                    className: `framer-2k74id`,
                    "data-framer-name": `Title`,
                    fonts: [`FS;Manrope-variable`],
                    layoutDependency: j,
                    layoutId: `TJiTprrHu`,
                    style: {
                      "--extracted-2gg91v": `"wght" 500`,
                      "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                    },
                    text: S,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                  /*#__PURE__*/ c(R, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ c(r, {
                      children: /*#__PURE__*/ c(h.p, {
                        className: `framer-styles-preset-1u2960c`,
                        "data-styles-preset": `XoUykaZIy`,
                        dir: `auto`,
                        style: {
                          "--framer-text-alignment": `start`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                        },
                        children: `20 to 40 labelled photos and a plain answer, repair it, watch it or replace it, within 24 hours.`,
                      }),
                    }),
                    className: `framer-ppnt1o`,
                    "data-framer-name": `Strong Text`,
                    fonts: [`Inter`],
                    layoutDependency: j,
                    layoutId: `HLfp9nVsL`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                    },
                    text: C,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (Nt = [
        `.framer-Yba5U.framer-1gbckgx, .framer-Yba5U .framer-1gbckgx { display: block; }`,
        `.framer-Yba5U.framer-1siif6x { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 22px 0px 0px 0px; position: relative; width: 342px; }`,
        `.framer-Yba5U .framer-15ji18w, .framer-Yba5U .framer-2k74id, .framer-Yba5U .framer-ppnt1o { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ...Me,
        `.framer-Yba5U[data-border="true"]::after, .framer-Yba5U [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (K = T(Mt, Nt, `framer-Yba5U`)),
      (K.displayName = `Column`),
      (K.defaultProps = { height: 140, width: 342 }),
      w(K, {
        e20pFL5YS: { defaultValue: `01`, title: `Number`, type: F.String },
        one20pFL5YSChange: { changes: `e20pFL5YS`, type: F.ChangeHandler },
        lA7_MKTiF: { defaultValue: `Photo inspection report`, title: `Title`, type: F.String },
        onlA7_MKTiFChange: { changes: `lA7_MKTiF`, type: F.ChangeHandler },
        ISVNTeKwb: {
          defaultValue: `20 to 40 labelled photos and a plain answer, repair it, watch it or replace it, within 24 hours.`,
          title: `Text`,
          type: F.String,
        },
        onISVNTeKwbChange: { changes: `ISVNTeKwb`, type: F.ChangeHandler },
      }),
      y(
        K,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Manrope Variable`,
                openType: !0,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Manrope`,
                url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
                variationAxes: [
                  { defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` },
                ],
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...B(Ne),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var Ft, It, Lt, Rt;
function zt() {
  return (zt = e(() => {
    (x(),
      re.loadFonts([`FS;Manrope-variable`]),
      (Ft = [{ defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` }]),
      (It = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
              variationAxes: Ft,
              weight: `400`,
            },
          ],
        },
      ]),
      (Lt = [
        `.framer-Hxy6S .framer-styles-preset-1ttoich:not(.rich-text-wrapper), .framer-Hxy6S .framer-styles-preset-1ttoich.rich-text-wrapper p { --framer-font-family: "Manrope Variable", "Manrope Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 500; --framer-font-weight: 400; --framer-letter-spacing: -0.015em; --framer-line-height: 1.35em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Rt = `framer-Hxy6S`));
  }))();
}
var Bt,
  q,
  Vt,
  J,
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
  Y,
  X,
  Z,
  Q,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  $,
  fn;
function pn() {
  return (pn = e(() => {
    (u(),
      x(),
      m(),
      d(),
      ve(),
      lt(),
      wt(),
      He(),
      We(),
      Ge(),
      Te(),
      Pt(),
      ze(),
      we(),
      Ve(),
      Se(),
      zt(),
      Fe(),
      De(),
      _e(),
      qe(),
      (Bt = D(Ue)),
      (q = _(k)),
      (Vt = D(G)),
      (J = _(h.div)),
      (Ht = D(H)),
      (Ut = D(K)),
      (Wt = D(W)),
      (Gt = D(U)),
      (Kt = D(ye)),
      (qt = D(Ce)),
      (Jt = N(Ce, { nodeId: `q5UT2k5uY`, override: xe, scopeId: `N22VkyVPW` })),
      (Yt = C(Jt, be)),
      (Xt = D(Ke)),
      (Zt = {
        HWMD34D6d: `(min-width: 1200px)`,
        JI2Av1XiA: `(max-width: 809.98px)`,
        pJGa2zM46: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (Qt = []),
      ($t = `framer-fIAu3`),
      (en = {
        HWMD34D6d: `framer-v-dkdjc`,
        JI2Av1XiA: `framer-v-h1hloe`,
        pJGa2zM46: `framer-v-1om8l5z`,
      }),
      (tn = (e, t, n) => (e && t ? `position` : n)),
      (Y = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 22,
      }),
      (X = { delay: 0, duration: 0.9, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (Z = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: X,
        x: 0,
        y: 22,
      }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (nn = () => ({
        from: { alias: `zCsKOKtN9`, data: Be, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        orderBy: [{ collection: `zCsKOKtN9`, name: `CCNna_4AP`, type: `Identifier` }],
        select: [
          { collection: `zCsKOKtN9`, name: `CCNna_4AP`, type: `Identifier` },
          { collection: `zCsKOKtN9`, name: `e5xOKDTAc`, type: `Identifier` },
          { collection: `zCsKOKtN9`, name: `jBhbH9Gl0`, type: `Identifier` },
          { collection: `zCsKOKtN9`, name: `ffmqj1bGZ`, type: `Identifier` },
          { collection: `zCsKOKtN9`, name: `W_w2jHBi2`, type: `Identifier` },
          { collection: `zCsKOKtN9`, name: `Uq4dgDOpK`, type: `Identifier` },
          { collection: `zCsKOKtN9`, name: `id`, type: `Identifier` },
        ],
      })),
      (rn = ({ query: e, pageSize: t, children: n }) => n(O(e))),
      (an = () => ({
        from: { alias: `N88f6hOhX`, data: Ee, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        orderBy: [{ collection: `N88f6hOhX`, name: `VHyAvN8g1`, type: `Identifier` }],
        select: [
          { collection: `N88f6hOhX`, name: `m6NyOvlbB`, type: `Identifier` },
          { collection: `N88f6hOhX`, name: `vQV8VkTtG`, type: `Identifier` },
          { collection: `N88f6hOhX`, name: `wshiDBIYS`, type: `Identifier` },
          { collection: `N88f6hOhX`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `N88f6hOhX`, name: `cH8pMxoUF`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `services` },
          type: `BinaryOperation`,
        },
      })),
      (on = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (sn = { Desktop: `HWMD34D6d`, Phone: `JI2Av1XiA`, Tablet: `pJGa2zM46` }),
      (cn = ({ value: e }) =>
        j()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (ln = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: sn[r.variant] ?? r.variant ?? `HWMD34D6d`,
      })),
      (un = /*#__PURE__*/ l(function (e, l) {
        let u = i(null),
          d = l ?? u;
        n();
        let { activeLocale: m, contentLocale: _, setLocale: y } = L(),
          b = I(),
          { style: x, className: S, layoutId: C, variant: w, ...T } = ln(e),
          E = o(() => Je({}, _), [_]);
        ce(E);
        let [D, O] = P(w, Zt, !1),
          A = g($t, ge, Re, Ae, Rt),
          j = t(te)?.isLayoutTemplate,
          re = !!t(p)?.transition?.layout,
          N = tn(j, re);
        return (
          se(),
          ne({}),
          /*#__PURE__*/ c(te.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: sn,
              primaryVariantId: `HWMD34D6d`,
              variantClassNames: en,
            },
            children: /*#__PURE__*/ s(f, {
              id: C ?? `N22VkyVPW`,
              children: [
                /*#__PURE__*/ c(cn, { value: `html body { background: rgb(243, 241, 236); }` }),
                /*#__PURE__*/ s(h.div, {
                  ...T,
                  className: g(A, `framer-dkdjc`, S),
                  ref: d,
                  style: { ...x },
                  children: [
                    /*#__PURE__*/ c(h.section, {
                      className: `framer-1ptyrrc`,
                      "data-framer-name": `Page Header`,
                      layout: N,
                      children: /*#__PURE__*/ c(`div`, {
                        className: `framer-tasz8h`,
                        "data-framer-name": `Wrap`,
                        children: /*#__PURE__*/ c(v, {
                          links: [
                            {
                              href: { hash: `:L5uklZlsi`, webPageId: `nrqqIZ5lY` },
                              implicitPathVariables: void 0,
                            },
                            { href: { webPageId: `Fytl0baD3` }, implicitPathVariables: void 0 },
                            {
                              href: { hash: `:L5uklZlsi`, webPageId: `nrqqIZ5lY` },
                              implicitPathVariables: void 0,
                            },
                            { href: { webPageId: `Fytl0baD3` }, implicitPathVariables: void 0 },
                            {
                              href: { hash: `:L5uklZlsi`, webPageId: `nrqqIZ5lY` },
                              implicitPathVariables: void 0,
                            },
                            { href: { webPageId: `Fytl0baD3` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            /*#__PURE__*/ c(z, {
                              breakpoint: D,
                              overrides: {
                                JI2Av1XiA: {
                                  width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 32px)`,
                                  y: (b?.y || 0) + 123,
                                },
                                pJGa2zM46: {
                                  width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 51.84px)`,
                                  y: (b?.y || 0) + 132.06,
                                },
                              },
                              children: /*#__PURE__*/ c(M, {
                                height: 420,
                                width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 76.8px)`,
                                y: (b?.y || 0) + 142.2,
                                children: /*#__PURE__*/ c(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Y,
                                  __framer__exit: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.1,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-yax916-container`,
                                  nodeId: `WLHnduvRc`,
                                  rendersWithMotion: !0,
                                  scopeId: `N22VkyVPW`,
                                  children: /*#__PURE__*/ c(z, {
                                    breakpoint: D,
                                    overrides: {
                                      JI2Av1XiA: {
                                        It28Y5X9j: e[4],
                                        PJ2M0LKvw: e[5],
                                        variant: Q(`uICggN2du`),
                                      },
                                      pJGa2zM46: {
                                        It28Y5X9j: e[2],
                                        PJ2M0LKvw: e[3],
                                        variant: Q(`TfkArrr5A`),
                                      },
                                    },
                                    children: /*#__PURE__*/ c(Ue, {
                                      CGwlWG4ol: `Focus`,
                                      FG3t9FWa8: `Project-led`,
                                      HBTbh9G8O: !0,
                                      height: `100%`,
                                      hMZ105swj: `2004`,
                                      id: `WLHnduvRc`,
                                      iSNc6W9hP: !0,
                                      It28Y5X9j: e[0],
                                      layoutId: `WLHnduvRc`,
                                      MK178g8ug: `Crew`,
                                      mSN3imh79: `Homes`,
                                      nlQbxAcuC: !0,
                                      OBv5F6rMT: `Build a new home, make room for a growing family or rethink the spaces you already have. We start by understanding what you want to change.`,
                                      oTs3glLJw: `Since`,
                                      p7daXTSXv: !0,
                                      pcZW_xPpm: `Estimate a replacement`,
                                      PJ2M0LKvw: e[1],
                                      SgWelmIDH: `Discuss your project`,
                                      SRo9k93eF: `Space to build. Room to improve.`,
                                      style: { width: `100%` },
                                      UBqoV3kz1: !0,
                                      variant: Q(`qNqoNGiMK`),
                                      VO_ZPpF3b: `Services`,
                                      width: `100%`,
                                      YDXaX92M1: `(Services)`,
                                      ZFZUX5Tw2: `By agreement`,
                                      ZtLWbYge9: `Warranty`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ c(h.section, {
                      className: `framer-1kg373v`,
                      "data-framer-name": `Services`,
                      layout: N,
                      children: /*#__PURE__*/ c(`div`, {
                        className: `framer-6w1pgc`,
                        "data-framer-name": `Wrap`,
                        children: /*#__PURE__*/ c(J, {
                          __framer__animate: { transition: X },
                          __framer__animateOnce: !0,
                          __framer__enter: Y,
                          __framer__exit: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.1,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1cpmjdj`,
                          "data-border": !0,
                          "data-framer-name": `Service List`,
                          children: /*#__PURE__*/ c(ie, {
                            children: /*#__PURE__*/ c(rn, {
                              query: nn(),
                              children: (e, t, n) =>
                                /*#__PURE__*/ c(a, {
                                  children: e?.map(
                                    (
                                      {
                                        CCNna_4AP: e,
                                        e5xOKDTAc: t,
                                        ffmqj1bGZ: n,
                                        id: r,
                                        jBhbH9Gl0: i,
                                        Uq4dgDOpK: a,
                                        W_w2jHBi2: o,
                                      },
                                      s
                                    ) => (
                                      (e ??= ``),
                                      (t ??= ``),
                                      (i ??= ``),
                                      (n ??= ``),
                                      (o ??= ``),
                                      (a ??= ``),
                                      /*#__PURE__*/ c(
                                        f,
                                        {
                                          id: `zCsKOKtN9-${r}`,
                                          children: /*#__PURE__*/ c(ee.Provider, {
                                            value: { Uq4dgDOpK: a },
                                            children: /*#__PURE__*/ c(v, {
                                              links: [
                                                {
                                                  href: {
                                                    pathVariables: { Uq4dgDOpK: a },
                                                    webPageId: `tO8VmqOLs`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: { Uq4dgDOpK: a },
                                                    webPageId: `tO8VmqOLs`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                                {
                                                  href: {
                                                    pathVariables: { Uq4dgDOpK: a },
                                                    webPageId: `tO8VmqOLs`,
                                                  },
                                                  implicitPathVariables: void 0,
                                                },
                                              ],
                                              children: (r) =>
                                                /*#__PURE__*/ c(z, {
                                                  breakpoint: D,
                                                  overrides: {
                                                    JI2Av1XiA: {
                                                      width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 32px)`,
                                                      y: (b?.y || 0) + 1068,
                                                    },
                                                    pJGa2zM46: {
                                                      width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 51.84px)`,
                                                      y: (b?.y || 0) + 1077.06,
                                                    },
                                                  },
                                                  children: /*#__PURE__*/ c(M, {
                                                    height: 92,
                                                    width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 76.8px)`,
                                                    y: (b?.y || 0) + 1107.2,
                                                    children: /*#__PURE__*/ c(k, {
                                                      className: `framer-avovph-container`,
                                                      nodeId: `pp9lzSxKs`,
                                                      scopeId: `N22VkyVPW`,
                                                      children: /*#__PURE__*/ c(z, {
                                                        breakpoint: D,
                                                        overrides: {
                                                          JI2Av1XiA: {
                                                            variant: Q(`GYZML5iCP`),
                                                            XJTskpmRP: r[2],
                                                          },
                                                          pJGa2zM46: {
                                                            variant: Q(`MSdq62QzX`),
                                                            XJTskpmRP: r[1],
                                                          },
                                                        },
                                                        children: /*#__PURE__*/ c(G, {
                                                          Ah7RNqXBG: n,
                                                          Ap_Ks1P0V: e,
                                                          HCFMyccsV: i,
                                                          height: `100%`,
                                                          id: `pp9lzSxKs`,
                                                          layoutId: `pp9lzSxKs`,
                                                          miqEAjk8Y: t,
                                                          style: { width: `100%` },
                                                          THnXRckrc: o,
                                                          variant: Q(`AV27vcY0B`),
                                                          width: `100%`,
                                                          XJTskpmRP: r[0],
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                          }),
                                        },
                                        r
                                      )
                                    )
                                  ),
                                }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ c(h.section, {
                      className: `framer-1bolzjf`,
                      "data-framer-name": `On Every Job`,
                      layout: N,
                      children: /*#__PURE__*/ c(`div`, {
                        className: `framer-1hvw5kw`,
                        "data-framer-name": `Card`,
                        children: /*#__PURE__*/ s(`div`, {
                          className: `framer-1x2118g`,
                          "data-framer-name": `Wrap`,
                          children: [
                            /*#__PURE__*/ c(z, {
                              breakpoint: D,
                              overrides: {
                                JI2Av1XiA: {
                                  width: `calc(min(${b?.width || `100vw`} - 16px, 1356.8px) - 32px)`,
                                  y: (b?.y || 0) + 1304,
                                },
                                pJGa2zM46: {
                                  width: `calc(min(${b?.width || `100vw`} - 24px, 1356.8px) - 51.84px)`,
                                  y: (b?.y || 0) + 1314.06,
                                },
                              },
                              children: /*#__PURE__*/ c(M, {
                                height: 143,
                                width: `calc(min(${b?.width || `100vw`} - 24px, 1356.8px) - 76.8px)`,
                                y: (b?.y || 0) + 1403.2,
                                children: /*#__PURE__*/ c(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Y,
                                  __framer__exit: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.1,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-fhhfyq-container`,
                                  nodeId: `yaSIkxLFl`,
                                  rendersWithMotion: !0,
                                  scopeId: `N22VkyVPW`,
                                  children: /*#__PURE__*/ c(z, {
                                    breakpoint: D,
                                    overrides: {
                                      JI2Av1XiA: { variant: Q(`W6wLLkRCi`) },
                                      pJGa2zM46: { variant: Q(`syl1CxqTK`) },
                                    },
                                    children: /*#__PURE__*/ c(H, {
                                      cO_7kDcz9: `The paperwork is the same on a $340 repair as on a full replacement. Each step ends with something you can keep.`,
                                      GVGapXMTF: `What you get, whichever service you book`,
                                      height: `100%`,
                                      iBbAGSAx0: `All building notes`,
                                      id: `yaSIkxLFl`,
                                      kkEGpeu2q: !0,
                                      layoutId: `yaSIkxLFl`,
                                      style: { width: `100%` },
                                      variant: Q(`eQYT3Wyid`),
                                      W3yUiq7Nb: `(On every job)`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            /*#__PURE__*/ s(J, {
                              __framer__animate: { transition: X },
                              __framer__animateOnce: !0,
                              __framer__enter: Y,
                              __framer__exit: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.1,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1hqu2xu`,
                              "data-framer-name": `Columns`,
                              children: [
                                /*#__PURE__*/ c(z, {
                                  breakpoint: D,
                                  overrides: {
                                    JI2Av1XiA: {
                                      width: `max(min(${b?.width || `100vw`} - 16px, 1356.8px) - 32px, 50px)`,
                                      y: (b?.y || 0) + 1487,
                                    },
                                    pJGa2zM46: {
                                      width: `max((min(${b?.width || `100vw`} - 24px, 1356.8px) - 100.44px) / 3, 50px)`,
                                      y: (b?.y || 0) + 1497.56,
                                    },
                                  },
                                  children: /*#__PURE__*/ c(M, {
                                    height: 140,
                                    width: `max((min(${b?.width || `100vw`} - 24px, 1356.8px) - 148.8px) / 3, 50px)`,
                                    y: (b?.y || 0) + 1606.2,
                                    children: /*#__PURE__*/ c(k, {
                                      className: `framer-vqu5yh-container`,
                                      nodeId: `LgC2OlTZc`,
                                      scopeId: `N22VkyVPW`,
                                      children: /*#__PURE__*/ c(K, {
                                        e20pFL5YS: `01`,
                                        height: `100%`,
                                        id: `LgC2OlTZc`,
                                        ISVNTeKwb: `20 to 40 labelled photos and a plain answer, repair it, watch it or replace it, within 24 hours.`,
                                        lA7_MKTiF: `Site assessment`,
                                        layoutId: `LgC2OlTZc`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(z, {
                                  breakpoint: D,
                                  overrides: {
                                    JI2Av1XiA: {
                                      width: `max(min(${b?.width || `100vw`} - 16px, 1356.8px) - 32px, 50px)`,
                                      y: (b?.y || 0) + 1667,
                                    },
                                    pJGa2zM46: {
                                      width: `max((min(${b?.width || `100vw`} - 24px, 1356.8px) - 100.44px) / 3, 50px)`,
                                      y: (b?.y || 0) + 1497.56,
                                    },
                                  },
                                  children: /*#__PURE__*/ c(M, {
                                    height: 140,
                                    width: `max((min(${b?.width || `100vw`} - 24px, 1356.8px) - 148.8px) / 3, 50px)`,
                                    y: (b?.y || 0) + 1606.2,
                                    children: /*#__PURE__*/ c(k, {
                                      className: `framer-bma2hu-container`,
                                      nodeId: `KPmmaFcla`,
                                      scopeId: `N22VkyVPW`,
                                      children: /*#__PURE__*/ c(K, {
                                        e20pFL5YS: `02`,
                                        height: `100%`,
                                        id: `KPmmaFcla`,
                                        ISVNTeKwb: `Every line item priced, deck sheets at a fixed $88 each, valid for 30 days. No ranges.`,
                                        lA7_MKTiF: `Fixed written price`,
                                        layoutId: `KPmmaFcla`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(z, {
                                  breakpoint: D,
                                  overrides: {
                                    JI2Av1XiA: {
                                      width: `max(min(${b?.width || `100vw`} - 16px, 1356.8px) - 32px, 50px)`,
                                      y: (b?.y || 0) + 1847,
                                    },
                                    pJGa2zM46: {
                                      width: `max((min(${b?.width || `100vw`} - 24px, 1356.8px) - 100.44px) / 3, 50px)`,
                                      y: (b?.y || 0) + 1497.56,
                                    },
                                  },
                                  children: /*#__PURE__*/ c(M, {
                                    height: 140,
                                    width: `max((min(${b?.width || `100vw`} - 24px, 1356.8px) - 148.8px) / 3, 50px)`,
                                    y: (b?.y || 0) + 1606.2,
                                    children: /*#__PURE__*/ c(k, {
                                      className: `framer-gjagdd-container`,
                                      nodeId: `wi3jCMOcP`,
                                      scopeId: `N22VkyVPW`,
                                      children: /*#__PURE__*/ c(K, {
                                        e20pFL5YS: `03`,
                                        height: `100%`,
                                        id: `wi3jCMOcP`,
                                        ISVNTeKwb: `Nothing until materials reach the house. Then 40% on delivery and the balance at sign-off.`,
                                        lA7_MKTiF: `No deposit until delivery`,
                                        layoutId: `wi3jCMOcP`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(z, {
                                  breakpoint: D,
                                  overrides: {
                                    JI2Av1XiA: {
                                      width: `max(min(${b?.width || `100vw`} - 16px, 1356.8px) - 32px, 50px)`,
                                      y: (b?.y || 0) + 2027,
                                    },
                                    pJGa2zM46: {
                                      width: `max((min(${b?.width || `100vw`} - 24px, 1356.8px) - 100.44px) / 3, 50px)`,
                                      y: (b?.y || 0) + 1677.56,
                                    },
                                  },
                                  children: /*#__PURE__*/ c(M, {
                                    height: 140,
                                    width: `max((min(${b?.width || `100vw`} - 24px, 1356.8px) - 148.8px) / 3, 50px)`,
                                    y: (b?.y || 0) + 1786.2,
                                    children: /*#__PURE__*/ c(k, {
                                      className: `framer-kwhan2-container`,
                                      nodeId: `gry7HGpGG`,
                                      scopeId: `N22VkyVPW`,
                                      children: /*#__PURE__*/ c(K, {
                                        e20pFL5YS: `04`,
                                        height: `100%`,
                                        id: `gry7HGpGG`,
                                        ISVNTeKwb: `A text at 18:00 on every build day, with photos of what was done and the plan for tomorrow.`,
                                        lA7_MKTiF: `A daily build log`,
                                        layoutId: `gry7HGpGG`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(z, {
                                  breakpoint: D,
                                  overrides: {
                                    JI2Av1XiA: {
                                      width: `max(min(${b?.width || `100vw`} - 16px, 1356.8px) - 32px, 50px)`,
                                      y: (b?.y || 0) + 2207,
                                    },
                                    pJGa2zM46: {
                                      width: `max((min(${b?.width || `100vw`} - 24px, 1356.8px) - 100.44px) / 3, 50px)`,
                                      y: (b?.y || 0) + 1677.56,
                                    },
                                  },
                                  children: /*#__PURE__*/ c(M, {
                                    height: 140,
                                    width: `max((min(${b?.width || `100vw`} - 24px, 1356.8px) - 148.8px) / 3, 50px)`,
                                    y: (b?.y || 0) + 1786.2,
                                    children: /*#__PURE__*/ c(k, {
                                      className: `framer-uycibk-container`,
                                      nodeId: `veGl4rXfx`,
                                      scopeId: `N22VkyVPW`,
                                      children: /*#__PURE__*/ c(K, {
                                        e20pFL5YS: `05`,
                                        height: `100%`,
                                        id: `veGl4rXfx`,
                                        ISVNTeKwb: `A named foreman and roofers employed by Regolith. We never subcontract a roof.`,
                                        lA7_MKTiF: `Our own crews`,
                                        layoutId: `veGl4rXfx`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(z, {
                                  breakpoint: D,
                                  overrides: {
                                    JI2Av1XiA: {
                                      width: `max(min(${b?.width || `100vw`} - 16px, 1356.8px) - 32px, 50px)`,
                                      y: (b?.y || 0) + 2387,
                                    },
                                    pJGa2zM46: {
                                      width: `max((min(${b?.width || `100vw`} - 24px, 1356.8px) - 100.44px) / 3, 50px)`,
                                      y: (b?.y || 0) + 1677.56,
                                    },
                                  },
                                  children: /*#__PURE__*/ c(M, {
                                    height: 140,
                                    width: `max((min(${b?.width || `100vw`} - 24px, 1356.8px) - 148.8px) / 3, 50px)`,
                                    y: (b?.y || 0) + 1786.2,
                                    children: /*#__PURE__*/ c(k, {
                                      className: `framer-1rjla0p-container`,
                                      nodeId: `h0m99CUYJ`,
                                      scopeId: `N22VkyVPW`,
                                      children: /*#__PURE__*/ c(K, {
                                        e20pFL5YS: `06`,
                                        height: `100%`,
                                        id: `h0m99CUYJ`,
                                        ISVNTeKwb: `25 years on workmanship for a new roof, transferable once. 2 years on every repair.`,
                                        lA7_MKTiF: `A written warranty`,
                                        layoutId: `h0m99CUYJ`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    /*#__PURE__*/ c(h.section, {
                      className: `framer-1qpi0hv`,
                      "data-framer-name": `Finder`,
                      layout: N,
                      children: /*#__PURE__*/ c(`div`, {
                        className: `framer-1kx18sf`,
                        "data-framer-name": `Wrap`,
                        children: /*#__PURE__*/ s(`div`, {
                          className: `framer-xm97x1`,
                          "data-framer-name": `Split`,
                          children: [
                            /*#__PURE__*/ s(J, {
                              __framer__animate: { transition: X },
                              __framer__animateOnce: !0,
                              __framer__enter: Y,
                              __framer__exit: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.1,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-cr6ww2`,
                              "data-framer-name": `Side`,
                              children: [
                                /*#__PURE__*/ c(R, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(`p`, {
                                      className: `framer-styles-preset-47y0yi`,
                                      "data-styles-preset": `WcNYxFkzx`,
                                      dir: `auto`,
                                      children: `(Not sure?)`,
                                    }),
                                  }),
                                  className: `framer-3c8lje`,
                                  "data-framer-name": `Label`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ c(`div`, {
                                  className: `framer-x960o1`,
                                  "data-framer-name": `Space`,
                                }),
                                /*#__PURE__*/ c(R, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(`h2`, {
                                      className: `framer-styles-preset-15heldj`,
                                      "data-styles-preset": `sgPoc0pBr`,
                                      dir: `auto`,
                                      children: `Start with what you can see`,
                                    }),
                                  }),
                                  className: `framer-pd3y7`,
                                  "data-framer-name": `Title`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ c(`div`, {
                                  className: `framer-1f2yv9v`,
                                  "data-framer-name": `Space`,
                                }),
                                /*#__PURE__*/ c(R, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(`p`, {
                                      className: `framer-styles-preset-1eflcgp`,
                                      "data-styles-preset": `vI2CBrBs4`,
                                      dir: `auto`,
                                      children: `Pick the line closest to what is happening at your house. If none fits, book an inspection and we will tell you.`,
                                    }),
                                  }),
                                  className: `framer-c65xdv`,
                                  "data-framer-name": `Lede`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ c(`div`, {
                                  className: `framer-10tfs17`,
                                  "data-framer-name": `Space`,
                                }),
                              ],
                            }),
                            /*#__PURE__*/ c(J, {
                              __framer__animate: { transition: X },
                              __framer__animateOnce: !0,
                              __framer__enter: Y,
                              __framer__exit: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.1,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-70gosj`,
                              "data-framer-name": `Main`,
                              children: /*#__PURE__*/ s(`div`, {
                                className: `framer-8e8z12`,
                                "data-border": !0,
                                "data-framer-name": `Finder List`,
                                children: [
                                  /*#__PURE__*/ c(v, {
                                    links: [
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `roof-repair` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `jkBHcuwuq`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `roof-repair` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `jkBHcuwuq`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `roof-repair` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `jkBHcuwuq`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      /*#__PURE__*/ c(z, {
                                        breakpoint: D,
                                        overrides: {
                                          JI2Av1XiA: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 32px)`,
                                            y: (b?.y || 0) + 3076.1507,
                                          },
                                          pJGa2zM46: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 51.84px)`,
                                            y: (b?.y || 0) + 2368.7107,
                                          },
                                        },
                                        children: /*#__PURE__*/ c(M, {
                                          height: 64,
                                          width: `max((min(${b?.width || `100vw`}, 1356.8px) - 148.8px) / 1.7143, 1px)`,
                                          y: (b?.y || 0) + 2167.2,
                                          children: /*#__PURE__*/ c(k, {
                                            className: `framer-biphwe-container`,
                                            nodeId: `J7cyuj2nY`,
                                            scopeId: `N22VkyVPW`,
                                            children: /*#__PURE__*/ c(z, {
                                              breakpoint: D,
                                              overrides: {
                                                JI2Av1XiA: {
                                                  bCWdmTC6l: e[2],
                                                  variant: Q(`qfSkuwf0b`),
                                                },
                                                pJGa2zM46: {
                                                  bCWdmTC6l: e[1],
                                                  variant: Q(`q80W6rtcC`),
                                                },
                                              },
                                              children: /*#__PURE__*/ c(W, {
                                                bCWdmTC6l: e[0],
                                                CXO8sDnSZ: `Home renovations`,
                                                height: `100%`,
                                                id: `J7cyuj2nY`,
                                                layoutId: `J7cyuj2nY`,
                                                style: { width: `100%` },
                                                variant: Q(`QfMV6oyGw`),
                                                width: `100%`,
                                                Xzzg9CJWv: `There is a water stain on a ceiling`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  /*#__PURE__*/ c(v, {
                                    links: [
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `storm-damage` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `m7vmN2vm5`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `storm-damage` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `m7vmN2vm5`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `storm-damage` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `m7vmN2vm5`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      /*#__PURE__*/ c(z, {
                                        breakpoint: D,
                                        overrides: {
                                          JI2Av1XiA: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 32px)`,
                                            y: (b?.y || 0) + 3140.1507,
                                          },
                                          pJGa2zM46: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 51.84px)`,
                                            y: (b?.y || 0) + 2432.7107,
                                          },
                                        },
                                        children: /*#__PURE__*/ c(M, {
                                          height: 64,
                                          width: `max((min(${b?.width || `100vw`}, 1356.8px) - 148.8px) / 1.7143, 1px)`,
                                          y: (b?.y || 0) + 2231.2,
                                          children: /*#__PURE__*/ c(k, {
                                            className: `framer-4hj5zl-container`,
                                            nodeId: `AiPhUuawl`,
                                            scopeId: `N22VkyVPW`,
                                            children: /*#__PURE__*/ c(z, {
                                              breakpoint: D,
                                              overrides: {
                                                JI2Av1XiA: {
                                                  bCWdmTC6l: e[2],
                                                  variant: Q(`qfSkuwf0b`),
                                                },
                                                pJGa2zM46: {
                                                  bCWdmTC6l: e[1],
                                                  variant: Q(`q80W6rtcC`),
                                                },
                                              },
                                              children: /*#__PURE__*/ c(W, {
                                                bCWdmTC6l: e[0],
                                                CXO8sDnSZ: `Home extensions`,
                                                height: `100%`,
                                                id: `AiPhUuawl`,
                                                layoutId: `AiPhUuawl`,
                                                style: { width: `100%` },
                                                variant: Q(`QfMV6oyGw`),
                                                width: `100%`,
                                                Xzzg9CJWv: `Hail or high wind came through last night`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  /*#__PURE__*/ c(v, {
                                    links: [
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `roof-inspection` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `s3aYe7sdM`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `roof-inspection` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `s3aYe7sdM`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `roof-inspection` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `s3aYe7sdM`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      /*#__PURE__*/ c(z, {
                                        breakpoint: D,
                                        overrides: {
                                          JI2Av1XiA: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 32px)`,
                                            y: (b?.y || 0) + 3204.1507,
                                          },
                                          pJGa2zM46: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 51.84px)`,
                                            y: (b?.y || 0) + 2496.7107,
                                          },
                                        },
                                        children: /*#__PURE__*/ c(M, {
                                          height: 64,
                                          width: `max((min(${b?.width || `100vw`}, 1356.8px) - 148.8px) / 1.7143, 1px)`,
                                          y: (b?.y || 0) + 2295.2,
                                          children: /*#__PURE__*/ c(k, {
                                            className: `framer-gtvs7j-container`,
                                            nodeId: `Kr8BScJcQ`,
                                            scopeId: `N22VkyVPW`,
                                            children: /*#__PURE__*/ c(z, {
                                              breakpoint: D,
                                              overrides: {
                                                JI2Av1XiA: {
                                                  bCWdmTC6l: e[2],
                                                  variant: Q(`qfSkuwf0b`),
                                                },
                                                pJGa2zM46: {
                                                  bCWdmTC6l: e[1],
                                                  variant: Q(`q80W6rtcC`),
                                                },
                                              },
                                              children: /*#__PURE__*/ c(W, {
                                                bCWdmTC6l: e[0],
                                                CXO8sDnSZ: `A free inspection first`,
                                                height: `100%`,
                                                id: `Kr8BScJcQ`,
                                                layoutId: `Kr8BScJcQ`,
                                                style: { width: `100%` },
                                                variant: Q(`QfMV6oyGw`),
                                                width: `100%`,
                                                Xzzg9CJWv: `The roof is over 20 years old and I do not know its condition`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  /*#__PURE__*/ c(v, {
                                    links: [
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `roof-inspection` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `s3aYe7sdM`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `roof-inspection` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `s3aYe7sdM`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `roof-inspection` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `s3aYe7sdM`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      /*#__PURE__*/ c(z, {
                                        breakpoint: D,
                                        overrides: {
                                          JI2Av1XiA: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 32px)`,
                                            y: (b?.y || 0) + 3268.1507,
                                          },
                                          pJGa2zM46: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 51.84px)`,
                                            y: (b?.y || 0) + 2560.7107,
                                          },
                                        },
                                        children: /*#__PURE__*/ c(M, {
                                          height: 64,
                                          width: `max((min(${b?.width || `100vw`}, 1356.8px) - 148.8px) / 1.7143, 1px)`,
                                          y: (b?.y || 0) + 2359.2,
                                          children: /*#__PURE__*/ c(k, {
                                            className: `framer-3rptxb-container`,
                                            nodeId: `RlKdQud1H`,
                                            scopeId: `N22VkyVPW`,
                                            children: /*#__PURE__*/ c(z, {
                                              breakpoint: D,
                                              overrides: {
                                                JI2Av1XiA: {
                                                  bCWdmTC6l: e[2],
                                                  variant: Q(`qfSkuwf0b`),
                                                },
                                                pJGa2zM46: {
                                                  bCWdmTC6l: e[1],
                                                  variant: Q(`q80W6rtcC`),
                                                },
                                              },
                                              children: /*#__PURE__*/ c(W, {
                                                bCWdmTC6l: e[0],
                                                CXO8sDnSZ: `Planning & site visits`,
                                                height: `100%`,
                                                id: `RlKdQud1H`,
                                                layoutId: `RlKdQud1H`,
                                                style: { width: `100%` },
                                                variant: Q(`QfMV6oyGw`),
                                                width: `100%`,
                                                Xzzg9CJWv: `We are buying or selling a house`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  /*#__PURE__*/ c(v, {
                                    links: [
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `roof-replacement` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `ofJC7h_jM`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `roof-replacement` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `ofJC7h_jM`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `roof-replacement` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `ofJC7h_jM`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      /*#__PURE__*/ c(z, {
                                        breakpoint: D,
                                        overrides: {
                                          JI2Av1XiA: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 32px)`,
                                            y: (b?.y || 0) + 3332.1507,
                                          },
                                          pJGa2zM46: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 51.84px)`,
                                            y: (b?.y || 0) + 2624.7107,
                                          },
                                        },
                                        children: /*#__PURE__*/ c(M, {
                                          height: 64,
                                          width: `max((min(${b?.width || `100vw`}, 1356.8px) - 148.8px) / 1.7143, 1px)`,
                                          y: (b?.y || 0) + 2423.2,
                                          children: /*#__PURE__*/ c(k, {
                                            className: `framer-ew6v77-container`,
                                            nodeId: `U6Qwomb3l`,
                                            scopeId: `N22VkyVPW`,
                                            children: /*#__PURE__*/ c(z, {
                                              breakpoint: D,
                                              overrides: {
                                                JI2Av1XiA: {
                                                  bCWdmTC6l: e[2],
                                                  variant: Q(`qfSkuwf0b`),
                                                },
                                                pJGa2zM46: {
                                                  bCWdmTC6l: e[1],
                                                  variant: Q(`q80W6rtcC`),
                                                },
                                              },
                                              children: /*#__PURE__*/ c(W, {
                                                bCWdmTC6l: e[0],
                                                CXO8sDnSZ: `New homes`,
                                                height: `100%`,
                                                id: `U6Qwomb3l`,
                                                layoutId: `U6Qwomb3l`,
                                                style: { width: `100%` },
                                                variant: Q(`QfMV6oyGw`),
                                                width: `100%`,
                                                Xzzg9CJWv: `Shingles are curling or bare across a whole slope`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  /*#__PURE__*/ c(v, {
                                    links: [
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `gutters` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `N4_4utRrp`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `gutters` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `N4_4utRrp`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `gutters` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `N4_4utRrp`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      /*#__PURE__*/ c(z, {
                                        breakpoint: D,
                                        overrides: {
                                          JI2Av1XiA: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 32px)`,
                                            y: (b?.y || 0) + 3396.1507,
                                          },
                                          pJGa2zM46: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 51.84px)`,
                                            y: (b?.y || 0) + 2688.7107,
                                          },
                                        },
                                        children: /*#__PURE__*/ c(M, {
                                          height: 64,
                                          width: `max((min(${b?.width || `100vw`}, 1356.8px) - 148.8px) / 1.7143, 1px)`,
                                          y: (b?.y || 0) + 2487.2,
                                          children: /*#__PURE__*/ c(k, {
                                            className: `framer-1epolzz-container`,
                                            nodeId: `J8Wie7nW8`,
                                            scopeId: `N22VkyVPW`,
                                            children: /*#__PURE__*/ c(z, {
                                              breakpoint: D,
                                              overrides: {
                                                JI2Av1XiA: {
                                                  bCWdmTC6l: e[2],
                                                  variant: Q(`qfSkuwf0b`),
                                                },
                                                pJGa2zM46: {
                                                  bCWdmTC6l: e[1],
                                                  variant: Q(`q80W6rtcC`),
                                                },
                                              },
                                              children: /*#__PURE__*/ c(W, {
                                                bCWdmTC6l: e[0],
                                                CXO8sDnSZ: `Exterior improvements`,
                                                height: `100%`,
                                                id: `J8Wie7nW8`,
                                                layoutId: `J8Wie7nW8`,
                                                style: { width: `100%` },
                                                variant: Q(`QfMV6oyGw`),
                                                width: `100%`,
                                                Xzzg9CJWv: `Gutters overflow or pull away from the fascia`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  /*#__PURE__*/ c(v, {
                                    links: [
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `ventilation-skylights` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `DCOICLA27`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `ventilation-skylights` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `DCOICLA27`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `ventilation-skylights` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `DCOICLA27`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      /*#__PURE__*/ c(z, {
                                        breakpoint: D,
                                        overrides: {
                                          JI2Av1XiA: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 32px)`,
                                            y: (b?.y || 0) + 3460.1507,
                                          },
                                          pJGa2zM46: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 51.84px)`,
                                            y: (b?.y || 0) + 2752.7107,
                                          },
                                        },
                                        children: /*#__PURE__*/ c(M, {
                                          height: 64,
                                          width: `max((min(${b?.width || `100vw`}, 1356.8px) - 148.8px) / 1.7143, 1px)`,
                                          y: (b?.y || 0) + 2551.2,
                                          children: /*#__PURE__*/ c(k, {
                                            className: `framer-19r1kar-container`,
                                            nodeId: `qD6kcnOrN`,
                                            scopeId: `N22VkyVPW`,
                                            children: /*#__PURE__*/ c(z, {
                                              breakpoint: D,
                                              overrides: {
                                                JI2Av1XiA: {
                                                  bCWdmTC6l: e[2],
                                                  variant: Q(`qfSkuwf0b`),
                                                },
                                                pJGa2zM46: {
                                                  bCWdmTC6l: e[1],
                                                  variant: Q(`q80W6rtcC`),
                                                },
                                              },
                                              children: /*#__PURE__*/ c(W, {
                                                bCWdmTC6l: e[0],
                                                CXO8sDnSZ: `Interiors & finishing`,
                                                height: `100%`,
                                                id: `qD6kcnOrN`,
                                                layoutId: `qD6kcnOrN`,
                                                style: { width: `100%` },
                                                variant: Q(`QfMV6oyGw`),
                                                width: `100%`,
                                                Xzzg9CJWv: `Ice builds up along the eaves every winter`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  /*#__PURE__*/ c(v, {
                                    links: [
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `ventilation-skylights` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `DCOICLA27`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `ventilation-skylights` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `DCOICLA27`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { Uq4dgDOpK: `ventilation-skylights` },
                                          unresolvedPathSlugs: {
                                            Uq4dgDOpK: {
                                              collectionId: `eHfc5JU5K`,
                                              collectionItemId: `DCOICLA27`,
                                            },
                                          },
                                          webPageId: `tO8VmqOLs`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      /*#__PURE__*/ c(z, {
                                        breakpoint: D,
                                        overrides: {
                                          JI2Av1XiA: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 32px)`,
                                            y: (b?.y || 0) + 3524.1507,
                                          },
                                          pJGa2zM46: {
                                            width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 51.84px)`,
                                            y: (b?.y || 0) + 2816.7107,
                                          },
                                        },
                                        children: /*#__PURE__*/ c(M, {
                                          height: 64,
                                          width: `max((min(${b?.width || `100vw`}, 1356.8px) - 148.8px) / 1.7143, 1px)`,
                                          y: (b?.y || 0) + 2615.2,
                                          children: /*#__PURE__*/ c(k, {
                                            className: `framer-mpif68-container`,
                                            nodeId: `KafDIWKiz`,
                                            scopeId: `N22VkyVPW`,
                                            children: /*#__PURE__*/ c(z, {
                                              breakpoint: D,
                                              overrides: {
                                                JI2Av1XiA: {
                                                  bCWdmTC6l: e[2],
                                                  variant: Q(`qfSkuwf0b`),
                                                },
                                                pJGa2zM46: {
                                                  bCWdmTC6l: e[1],
                                                  variant: Q(`q80W6rtcC`),
                                                },
                                              },
                                              children: /*#__PURE__*/ c(W, {
                                                bCWdmTC6l: e[0],
                                                CXO8sDnSZ: `Interiors & finishing`,
                                                height: `100%`,
                                                id: `KafDIWKiz`,
                                                layoutId: `KafDIWKiz`,
                                                style: { width: `100%` },
                                                variant: Q(`QfMV6oyGw`),
                                                width: `100%`,
                                                Xzzg9CJWv: `The skylight leaks in heavy rain`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    /*#__PURE__*/ c(h.section, {
                      className: `framer-yap1wn`,
                      "data-framer-name": `How A Job Runs`,
                      layout: N,
                      children: /*#__PURE__*/ c(`div`, {
                        className: `framer-1d30fzr`,
                        "data-framer-name": `Card`,
                        children: /*#__PURE__*/ s(`div`, {
                          className: `framer-sr7yf0`,
                          "data-framer-name": `Wrap`,
                          children: [
                            /*#__PURE__*/ c(z, {
                              breakpoint: D,
                              overrides: {
                                JI2Av1XiA: {
                                  width: `calc(min(${b?.width || `100vw`} - 16px, 1356.8px) - 32px)`,
                                  y: (b?.y || 0) + 3748.1507,
                                },
                                pJGa2zM46: {
                                  width: `calc(min(${b?.width || `100vw`} - 24px, 1356.8px) - 51.84px)`,
                                  y: (b?.y || 0) + 3042.7107,
                                },
                              },
                              children: /*#__PURE__*/ c(M, {
                                height: 143,
                                width: `calc(min(${b?.width || `100vw`} - 24px, 1356.8px) - 76.8px)`,
                                y: (b?.y || 0) + 2919.2,
                                children: /*#__PURE__*/ c(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Y,
                                  __framer__exit: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.1,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1j8qz00-container`,
                                  nodeId: `OGaFR6LHc`,
                                  rendersWithMotion: !0,
                                  scopeId: `N22VkyVPW`,
                                  children: /*#__PURE__*/ c(z, {
                                    breakpoint: D,
                                    overrides: {
                                      JI2Av1XiA: { variant: Q(`JX2N5a0ll`) },
                                      pJGa2zM46: { variant: Q(`ChEElW0U7`) },
                                    },
                                    children: /*#__PURE__*/ c(H, {
                                      cO_7kDcz9: `A practical path from your first ideas to your finished space.`,
                                      GVGapXMTF: `You see the paperwork before you see the crew`,
                                      height: `100%`,
                                      iBbAGSAx0: `All building notes`,
                                      id: `OGaFR6LHc`,
                                      kkEGpeu2q: !0,
                                      layoutId: `OGaFR6LHc`,
                                      style: { width: `100%` },
                                      variant: Q(`LjbruUu3n`),
                                      W3yUiq7Nb: `(How a job runs)`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            /*#__PURE__*/ s(J, {
                              __framer__animate: { transition: X },
                              __framer__animateOnce: !0,
                              __framer__enter: Y,
                              __framer__exit: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.1,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-ct4wcc`,
                              "data-border": !0,
                              "data-framer-name": `Timeline`,
                              children: [
                                /*#__PURE__*/ c(z, {
                                  breakpoint: D,
                                  overrides: {
                                    JI2Av1XiA: {
                                      width: `calc(min(${b?.width || `100vw`} - 16px, 1356.8px) - 32px)`,
                                      y: (b?.y || 0) + 3932.1507,
                                    },
                                    pJGa2zM46: {
                                      width: `calc(min(${b?.width || `100vw`} - 24px, 1356.8px) - 51.84px)`,
                                      y: (b?.y || 0) + 3227.2107,
                                    },
                                  },
                                  children: /*#__PURE__*/ c(M, {
                                    height: 103,
                                    width: `calc(min(${b?.width || `100vw`} - 24px, 1356.8px) - 76.8px)`,
                                    y: (b?.y || 0) + 3123.2,
                                    children: /*#__PURE__*/ c(k, {
                                      className: `framer-y15y2-container`,
                                      nodeId: `n65iWxVCX`,
                                      scopeId: `N22VkyVPW`,
                                      children: /*#__PURE__*/ c(z, {
                                        breakpoint: D,
                                        overrides: {
                                          JI2Av1XiA: { variant: Q(`FdvBY57XN`) },
                                          pJGa2zM46: { variant: Q(`JX3TcMgjX`) },
                                        },
                                        children: /*#__PURE__*/ c(U, {
                                          fgmaQTdQF: `45 minutes on the roof, in the attic and along the gutters. The report reaches your inbox within 24 hours.`,
                                          height: `100%`,
                                          id: `n65iWxVCX`,
                                          kmJWzLIXH: `Site assessment`,
                                          layoutId: `n65iWxVCX`,
                                          style: { width: `100%` },
                                          UmQRyzSMX: `Day 1`,
                                          variant: Q(`ODKidVH79`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(z, {
                                  breakpoint: D,
                                  overrides: {
                                    JI2Av1XiA: {
                                      width: `calc(min(${b?.width || `100vw`} - 16px, 1356.8px) - 32px)`,
                                      y: (b?.y || 0) + 4035.1507,
                                    },
                                    pJGa2zM46: {
                                      width: `calc(min(${b?.width || `100vw`} - 24px, 1356.8px) - 51.84px)`,
                                      y: (b?.y || 0) + 3330.2107,
                                    },
                                  },
                                  children: /*#__PURE__*/ c(M, {
                                    height: 103,
                                    width: `calc(min(${b?.width || `100vw`} - 24px, 1356.8px) - 76.8px)`,
                                    y: (b?.y || 0) + 3226.2,
                                    children: /*#__PURE__*/ c(k, {
                                      className: `framer-1b7vcvp-container`,
                                      nodeId: `m15WHm6CH`,
                                      scopeId: `N22VkyVPW`,
                                      children: /*#__PURE__*/ c(z, {
                                        breakpoint: D,
                                        overrides: {
                                          JI2Av1XiA: { variant: Q(`FdvBY57XN`) },
                                          pJGa2zM46: { variant: Q(`JX3TcMgjX`) },
                                        },
                                        children: /*#__PURE__*/ c(U, {
                                          fgmaQTdQF: `Every line priced. You choose the material and colour with samples held up against the house.`,
                                          height: `100%`,
                                          id: `m15WHm6CH`,
                                          kmJWzLIXH: `Written scope and fixed price`,
                                          layoutId: `m15WHm6CH`,
                                          style: { width: `100%` },
                                          UmQRyzSMX: `Within 48 hours`,
                                          variant: Q(`ODKidVH79`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(z, {
                                  breakpoint: D,
                                  overrides: {
                                    JI2Av1XiA: {
                                      width: `calc(min(${b?.width || `100vw`} - 16px, 1356.8px) - 32px)`,
                                      y: (b?.y || 0) + 4138.1507,
                                    },
                                    pJGa2zM46: {
                                      width: `calc(min(${b?.width || `100vw`} - 24px, 1356.8px) - 51.84px)`,
                                      y: (b?.y || 0) + 3433.2107,
                                    },
                                  },
                                  children: /*#__PURE__*/ c(M, {
                                    height: 103,
                                    width: `calc(min(${b?.width || `100vw`} - 24px, 1356.8px) - 76.8px)`,
                                    y: (b?.y || 0) + 3329.2,
                                    children: /*#__PURE__*/ c(k, {
                                      className: `framer-1jb54ta-container`,
                                      nodeId: `OCG07yqLA`,
                                      scopeId: `N22VkyVPW`,
                                      children: /*#__PURE__*/ c(z, {
                                        breakpoint: D,
                                        overrides: {
                                          JI2Av1XiA: { variant: Q(`FdvBY57XN`) },
                                          pJGa2zM46: { variant: Q(`JX3TcMgjX`) },
                                        },
                                        children: /*#__PURE__*/ c(U, {
                                          fgmaQTdQF: `Materials arrive the day before. A text with photos every evening, and the site swept every night.`,
                                          height: `100%`,
                                          id: `OCG07yqLA`,
                                          kmJWzLIXH: `One crew, one foreman`,
                                          layoutId: `OCG07yqLA`,
                                          style: { width: `100%` },
                                          UmQRyzSMX: `Build days`,
                                          variant: Q(`ODKidVH79`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(z, {
                                  breakpoint: D,
                                  overrides: {
                                    JI2Av1XiA: {
                                      width: `calc(min(${b?.width || `100vw`} - 16px, 1356.8px) - 32px)`,
                                      y: (b?.y || 0) + 4241.1507,
                                    },
                                    pJGa2zM46: {
                                      width: `calc(min(${b?.width || `100vw`} - 24px, 1356.8px) - 51.84px)`,
                                      y: (b?.y || 0) + 3536.2107,
                                    },
                                  },
                                  children: /*#__PURE__*/ c(M, {
                                    height: 103,
                                    width: `calc(min(${b?.width || `100vw`} - 24px, 1356.8px) - 76.8px)`,
                                    y: (b?.y || 0) + 3432.2,
                                    children: /*#__PURE__*/ c(k, {
                                      className: `framer-ddji3i-container`,
                                      nodeId: `zzxYGFYlo`,
                                      scopeId: `N22VkyVPW`,
                                      children: /*#__PURE__*/ c(z, {
                                        breakpoint: D,
                                        overrides: {
                                          JI2Av1XiA: { variant: Q(`FdvBY57XN`) },
                                          pJGa2zM46: { variant: Q(`JX3TcMgjX`) },
                                        },
                                        children: /*#__PURE__*/ c(U, {
                                          fgmaQTdQF: `We walk the finished roof with you, or send you the photos, and the warranty arrives the same day.`,
                                          height: `100%`,
                                          id: `zzxYGFYlo`,
                                          kmJWzLIXH: `Walkthrough and warranty`,
                                          layoutId: `zzxYGFYlo`,
                                          style: { width: `100%` },
                                          UmQRyzSMX: `Last day`,
                                          variant: Q(`ODKidVH79`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    /*#__PURE__*/ c(h.section, {
                      className: `framer-u4bfza`,
                      "data-framer-name": `FAQ`,
                      layout: N,
                      children: /*#__PURE__*/ s(`div`, {
                        className: `framer-13rv94c`,
                        "data-framer-name": `Grid`,
                        children: [
                          /*#__PURE__*/ s(J, {
                            __framer__animate: { transition: X },
                            __framer__animateOnce: !0,
                            __framer__enter: Y,
                            __framer__exit: Z,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.1,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-497e85`,
                            "data-framer-name": `Side`,
                            children: [
                              /*#__PURE__*/ c(R, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(`p`, {
                                    className: `framer-styles-preset-47y0yi`,
                                    "data-styles-preset": `WcNYxFkzx`,
                                    dir: `auto`,
                                    children: `(Questions)`,
                                  }),
                                }),
                                className: `framer-j2qnv4`,
                                "data-framer-name": `Label`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-1vif0gx`,
                                "data-framer-name": `Space`,
                              }),
                              /*#__PURE__*/ c(R, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(`h2`, {
                                    className: `framer-styles-preset-15heldj`,
                                    "data-styles-preset": `sgPoc0pBr`,
                                    dir: `auto`,
                                    children: `Straight answers before you call`,
                                  }),
                                }),
                                className: `framer-gn057l`,
                                "data-framer-name": `Title`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-1bpeiit`,
                                "data-framer-name": `Space`,
                              }),
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-iio2z7`,
                                "data-framer-name": `Card`,
                                children: [
                                  /*#__PURE__*/ c(R, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(`p`, {
                                        className: `framer-styles-preset-1ttoich`,
                                        "data-styles-preset": `lXTQADOr3`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                        },
                                        children: `Not sure what your project needs?`,
                                      }),
                                    }),
                                    className: `framer-1uejvpx`,
                                    "data-framer-name": `Card Text`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(v, {
                                    links: [
                                      {
                                        href: { hash: `:L5uklZlsi`, webPageId: `nrqqIZ5lY` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:L5uklZlsi`, webPageId: `nrqqIZ5lY` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:L5uklZlsi`, webPageId: `nrqqIZ5lY` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      /*#__PURE__*/ c(z, {
                                        breakpoint: D,
                                        overrides: {
                                          JI2Av1XiA: { y: (b?.y || 0) + 4871.8014 },
                                          pJGa2zM46: { y: (b?.y || 0) + 4168.8614 },
                                        },
                                        children: /*#__PURE__*/ c(M, {
                                          height: 29,
                                          y: (b?.y || 0) + 4142.8507,
                                          children: /*#__PURE__*/ c(k, {
                                            className: `framer-8y75fk-container`,
                                            nodeId: `gokiwMtyv`,
                                            scopeId: `N22VkyVPW`,
                                            children: /*#__PURE__*/ c(z, {
                                              breakpoint: D,
                                              overrides: {
                                                JI2Av1XiA: { DEzUmrPW8: e[2] },
                                                pJGa2zM46: { DEzUmrPW8: e[1] },
                                              },
                                              children: /*#__PURE__*/ c(ye, {
                                                DEzUmrPW8: e[0],
                                                height: `100%`,
                                                id: `gokiwMtyv`,
                                                layoutId: `gokiwMtyv`,
                                                rSCTVchPX: `Discuss your project`,
                                                variant: Q(`DNypnEf1e`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /*#__PURE__*/ c(J, {
                            __framer__animate: { transition: X },
                            __framer__animateOnce: !0,
                            __framer__enter: Y,
                            __framer__exit: Z,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.1,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1v6gtvf`,
                            "data-border": !0,
                            "data-framer-name": `FAQ List`,
                            children: /*#__PURE__*/ c(ie, {
                              children: /*#__PURE__*/ c(rn, {
                                query: an(),
                                children: (e, t, n) =>
                                  /*#__PURE__*/ c(a, {
                                    children: e?.map(
                                      ({ id: e, m6NyOvlbB: t, vQV8VkTtG: n, wshiDBIYS: r }, i) => (
                                        (t ??= ``),
                                        (n ??= ``),
                                        (r ??= ``),
                                        /*#__PURE__*/ c(
                                          f,
                                          {
                                            id: `N88f6hOhX-${e}`,
                                            children: /*#__PURE__*/ c(ee.Provider, {
                                              value: { wshiDBIYS: r },
                                              children: /*#__PURE__*/ c(z, {
                                                breakpoint: D,
                                                overrides: {
                                                  JI2Av1XiA: {
                                                    width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 32px)`,
                                                    y: (b?.y || 0) + 4957.8014,
                                                  },
                                                  pJGa2zM46: {
                                                    width: `calc(min(${b?.width || `100vw`}, 1356.8px) - 51.84px)`,
                                                    y: (b?.y || 0) + 4271.4614,
                                                  },
                                                },
                                                children: /*#__PURE__*/ c(M, {
                                                  height: 73,
                                                  width: `max((min(${b?.width || `100vw`}, 1356.8px) - 148.8px) / 1.7143, 1px)`,
                                                  y: (b?.y || 0) + 3776.2,
                                                  children: /*#__PURE__*/ c(k, {
                                                    className: `framer-16qrahh-container`,
                                                    nodeId: `q5UT2k5uY`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `N22VkyVPW`,
                                                    children: /*#__PURE__*/ c(z, {
                                                      breakpoint: D,
                                                      overrides: {
                                                        JI2Av1XiA: { variant: Q(`NJ9pi0pLT`) },
                                                        pJGa2zM46: { variant: Q(`NJ9pi0pLT`) },
                                                      },
                                                      children: /*#__PURE__*/ c(Yt, {
                                                        height: `100%`,
                                                        id: `q5UT2k5uY`,
                                                        layoutId: `q5UT2k5uY`,
                                                        NmPqkQ8LH: n,
                                                        style: { width: `100%` },
                                                        variant: Q(`vdKvjbuDZ`),
                                                        width: `100%`,
                                                        yB5foTvy8: t,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                          e
                                        )
                                      )
                                    ),
                                  }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ c(h.section, {
                      className: `framer-qu7oaw`,
                      "data-framer-name": `CTA`,
                      layout: N,
                      children: /*#__PURE__*/ c(v, {
                        links: [
                          {
                            href: { hash: `:L5uklZlsi`, webPageId: `nrqqIZ5lY` },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: { hash: `:L5uklZlsi`, webPageId: `nrqqIZ5lY` },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: { hash: `:L5uklZlsi`, webPageId: `nrqqIZ5lY` },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          /*#__PURE__*/ c(z, {
                            breakpoint: D,
                            overrides: {
                              JI2Av1XiA: {
                                width: `calc(${b?.width || `100vw`} - 16px)`,
                                y: (b?.y || 0) + 5122.8014,
                              },
                              pJGa2zM46: { y: (b?.y || 0) + 4437.4614 },
                            },
                            children: /*#__PURE__*/ c(M, {
                              height: 422,
                              width: `calc(${b?.width || `100vw`} - 24px)`,
                              y: (b?.y || 0) + 4327.8507,
                              children: /*#__PURE__*/ c(q, {
                                __framer__animate: { transition: X },
                                __framer__animateOnce: !0,
                                __framer__enter: Y,
                                __framer__exit: Z,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-6p8pne-container`,
                                nodeId: `Wv232c6HR`,
                                rendersWithMotion: !0,
                                scopeId: `N22VkyVPW`,
                                children: /*#__PURE__*/ c(z, {
                                  breakpoint: D,
                                  overrides: {
                                    JI2Av1XiA: { lpx6Y7_Ie: e[2], variant: Q(`Frx_p7cag`) },
                                    pJGa2zM46: { lpx6Y7_Ie: e[1], variant: Q(`jVhZG9xO5`) },
                                  },
                                  children: /*#__PURE__*/ c(Ke, {
                                    c90VE0r4p: !0,
                                    egt2DgeHC: `Tell us about your plans, your priorities and the space you want to create. We will help you work out the next step.`,
                                    eWOxqccVh: `tel:+14065550142`,
                                    height: `100%`,
                                    id: `Wv232c6HR`,
                                    IeWSqieKT: !1,
                                    kO8dlAD8T: `Call (406) 555-0142`,
                                    layoutId: `Wv232c6HR`,
                                    lpx6Y7_Ie: e[0],
                                    spYOD0ZH5: `Ready to make more of your home?`,
                                    style: { width: `100%` },
                                    V_MeO9hxh: `Discuss your project`,
                                    variant: Q(`V3cWFf9iM`),
                                    VtZC0VDH4: `(Free inspection)`,
                                    width: `100%`,
                                    Y7gwfGTSN: on(
                                      {
                                        pixelHeight: 1024,
                                        pixelWidth: 1536,
                                        src: `../../assets/images/pVk9lBlU3uOltsCvKKNvDuFU.png`,
                                      },
                                      ``
                                    ),
                                  }),
                                }),
                              }),
                            }),
                          }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (dn = [
        `.framer-fIAu3.framer-181t46f, .framer-fIAu3 .framer-181t46f { display: block; }`,
        `.framer-fIAu3.framer-dkdjc { align-content: flex-start; align-items: flex-start; background-color: #f3f1ec; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-fIAu3 .framer-1ptyrrc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 142.2px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-tasz8h, .framer-fIAu3 .framer-6w1pgc, .framer-fIAu3 .framer-1kx18sf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1356.8px; padding: 0px 38.4px 0px 38.4px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-yax916-container, .framer-fIAu3 .framer-avovph-container, .framer-fIAu3 .framer-fhhfyq-container, .framer-fIAu3 .framer-biphwe-container, .framer-fIAu3 .framer-4hj5zl-container, .framer-fIAu3 .framer-gtvs7j-container, .framer-fIAu3 .framer-3rptxb-container, .framer-fIAu3 .framer-ew6v77-container, .framer-fIAu3 .framer-1epolzz-container, .framer-fIAu3 .framer-19r1kar-container, .framer-fIAu3 .framer-mpif68-container, .framer-fIAu3 .framer-1j8qz00-container, .framer-fIAu3 .framer-y15y2-container, .framer-fIAu3 .framer-1b7vcvp-container, .framer-fIAu3 .framer-1jb54ta-container, .framer-fIAu3 .framer-ddji3i-container, .framer-fIAu3 .framer-16qrahh-container, .framer-fIAu3 .framer-6p8pne-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-1kg373v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 84px 0px 84px 0px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-1cpmjdj, .framer-fIAu3 .framer-8e8z12 { --border-bottom-width: 0px; --border-color: var(--token-b56b0928-74bd-4162-b937-f92541288cb8); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 1px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-1bolzjf, .framer-fIAu3 .framer-yap1wn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 12px 0px 12px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-1hvw5kw { align-content: center; align-items: center; background-color: var(--token-571d0275-548e-46dc-a0e1-ca98ff460da3); border-bottom-left-radius: 22px; border-bottom-right-radius: 22px; border-top-left-radius: 22px; border-top-right-radius: 22px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 120px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-1x2118g, .framer-fIAu3 .framer-sr7yf0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 1356.8px; padding: 0px 38.4px 0px 38.4px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-1hqu2xu { display: grid; flex: none; gap: 40px 36px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-vqu5yh-container, .framer-fIAu3 .framer-bma2hu-container, .framer-fIAu3 .framer-gjagdd-container, .framer-fIAu3 .framer-kwhan2-container, .framer-fIAu3 .framer-uycibk-container, .framer-fIAu3 .framer-1rjla0p-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-1qpi0hv, .framer-fIAu3 .framer-u4bfza { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 120px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-xm97x1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-cr6ww2 { align-content: flex-start; align-items: flex-start; display: flex; flex: 5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; width: 1px; }`,
        `.framer-fIAu3 .framer-3c8lje, .framer-fIAu3 .framer-pd3y7, .framer-fIAu3 .framer-j2qnv4, .framer-fIAu3 .framer-gn057l, .framer-fIAu3 .framer-1uejvpx { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-fIAu3 .framer-x960o1, .framer-fIAu3 .framer-1vif0gx { flex: none; height: 18px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-1f2yv9v { flex: none; height: 20px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-c65xdv { flex: none; height: auto; max-width: 435px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-fIAu3 .framer-10tfs17 { flex: none; height: 26px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-70gosj { align-content: flex-start; align-items: flex-start; display: flex; flex: 7 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-fIAu3 .framer-1d30fzr { align-content: center; align-items: center; background-color: var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9); border-bottom-left-radius: 22px; border-bottom-right-radius: 22px; border-top-left-radius: 22px; border-top-right-radius: 22px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 120px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-ct4wcc { --border-bottom-width: 0px; --border-color: var(--token-55e28825-0d6b-412c-8907-93458bc9b8dd); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 1px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-13rv94c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-start; max-width: 1356.8px; padding: 0px 38.4px 0px 38.4px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-497e85 { align-content: flex-start; align-items: flex-start; display: flex; flex: 5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-fIAu3 .framer-1bpeiit { flex: none; height: 32px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-iio2z7 { align-content: flex-start; align-items: flex-start; background-color: var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9); border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 380px; padding: 24px; position: relative; width: 100%; }`,
        `.framer-fIAu3 .framer-8y75fk-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-fIAu3 .framer-1v6gtvf { --border-bottom-width: 0px; --border-color: var(--token-b56b0928-74bd-4162-b937-f92541288cb8); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: 7 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 1px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-fIAu3 .framer-qu7oaw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 12px 12px 0px 12px; position: relative; width: 100%; }`,
        ...de,
        ...Ie,
        ...Oe,
        ...Lt,
        `.framer-fIAu3[data-border="true"]::after, .framer-fIAu3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-fIAu3.framer-dkdjc { width: 810px; } .framer-fIAu3 .framer-1ptyrrc { padding: 132.06px 0px 0px 0px; } .framer-fIAu3 .framer-tasz8h, .framer-fIAu3 .framer-6w1pgc, .framer-fIAu3 .framer-1kx18sf { padding: 0px 25.92px 0px 25.92px; } .framer-fIAu3 .framer-1kg373v { padding: 64px 0px 64px 0px; } .framer-fIAu3 .framer-1hvw5kw, .framer-fIAu3 .framer-1qpi0hv, .framer-fIAu3 .framer-1d30fzr, .framer-fIAu3 .framer-u4bfza { padding: 81px 0px 81px 0px; } .framer-fIAu3 .framer-1x2118g, .framer-fIAu3 .framer-sr7yf0 { gap: 40.5px; padding: 0px 25.92px 0px 25.92px; } .framer-fIAu3 .framer-1hqu2xu { gap: 40px 24.3px; } .framer-fIAu3 .framer-xm97x1 { flex-direction: column; gap: 40px; } .framer-fIAu3 .framer-cr6ww2 { flex: none; position: relative; width: 100%; } .framer-fIAu3 .framer-70gosj, .framer-fIAu3 .framer-497e85, .framer-fIAu3 .framer-1v6gtvf { flex: none; width: 100%; } .framer-fIAu3 .framer-13rv94c { flex-direction: column; gap: 48.6px; padding: 0px 25.92px 0px 25.92px; }}`,
        `@media (max-width: 809.98px) { .framer-fIAu3.framer-dkdjc { width: 390px; } .framer-fIAu3 .framer-1ptyrrc { padding: 123px 0px 0px 0px; } .framer-fIAu3 .framer-tasz8h, .framer-fIAu3 .framer-6w1pgc, .framer-fIAu3 .framer-1kx18sf { padding: 0px 16px 0px 16px; } .framer-fIAu3 .framer-1kg373v { padding: 64px 0px 64px 0px; } .framer-fIAu3 .framer-1bolzjf, .framer-fIAu3 .framer-yap1wn { padding: 0px 8px 0px 8px; } .framer-fIAu3 .framer-1hvw5kw, .framer-fIAu3 .framer-1qpi0hv, .framer-fIAu3 .framer-1d30fzr, .framer-fIAu3 .framer-u4bfza { padding: 80px 0px 80px 0px; } .framer-fIAu3 .framer-1x2118g, .framer-fIAu3 .framer-sr7yf0 { gap: 40px; padding: 0px 16px 0px 16px; } .framer-fIAu3 .framer-1hqu2xu { gap: 40px 20px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-fIAu3 .framer-xm97x1 { flex-direction: column; gap: 40px; } .framer-fIAu3 .framer-cr6ww2 { flex: none; position: relative; width: 100%; } .framer-fIAu3 .framer-70gosj, .framer-fIAu3 .framer-497e85, .framer-fIAu3 .framer-1v6gtvf { flex: none; width: 100%; } .framer-fIAu3 .framer-13rv94c { flex-direction: column; gap: 32px; padding: 0px 16px 0px 16px; } .framer-fIAu3 .framer-iio2z7 { max-width: unset; } .framer-fIAu3 .framer-qu7oaw { padding: 12px 8px 0px 8px; }}`,
      ]),
      ($ = T(un, dn, `framer-fIAu3`)),
      ($.displayName = `Services`),
      ($.defaultProps = { height: 5613, width: 1200 }),
      y(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Bt,
          ...Vt,
          ...Ht,
          ...Ut,
          ...Wt,
          ...Gt,
          ...Kt,
          ...qt,
          ...Xt,
          ...B(he),
          ...B(Le),
          ...B(ke),
          ...B(It),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = E.get(nn(), n, r),
            a = E.get(an(), n, r);
          return oe(
            [
              () => i.preload(),
              () => a.preload(),
              () => S(Ue, {}, t),
              () => S(H, {}, t),
              () => S(K, {}, t),
              () => S(W, {}, t),
              () => S(U, {}, t),
              () => S(ye, {}, t),
              () => S(Ke, {}, t),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`jkBHcuwuq`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`m7vmN2vm5`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`s3aYe7sdM`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`ofJC7h_jM`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`N4_4utRrp`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`DCOICLA27`, t.locale),
              async () => {
                let e = (await ae(() => i.readMaybeAsync(), t)) ?? [];
                return oe(
                  e.flatMap((e) => () => S(G, {}, t)),
                  t
                );
              },
              async () => {
                let e = (await ae(() => a.readMaybeAsync(), t)) ?? [];
                return oe(
                  e.flatMap((e) => () => S(Ce, {}, t)),
                  t
                );
              },
            ],
            t
          );
        },
      }),
      (fn = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerN22VkyVPW`,
            slots: [],
            annotations: {
              framerLayoutTemplateFlowEffect: `true`,
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
              framerColorSyntax: `true`,
              framerResponsiveScreen: `true`,
              framerIntrinsicHeight: `5613`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `1200`,
              framerScrollSections: `false`,
              framerAcceptsLayoutTemplate: `true`,
              framerImmutableVariables: `true`,
              framerDisplayContentsDiv: `false`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"pJGa2zM46":{"layout":["fixed","auto"]},"JI2Av1XiA":{"layout":["fixed","auto"]}}}`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
pn();
export { fn as __FramerMetadata__, $ as default, Qt as queryParamNames };
//# sourceMappingURL=4kI1kNGahzYkIQ9fwIFa0HEg9u70AqJLsKV9O5M5Ow0.D3yNY6mS.mjs.map
