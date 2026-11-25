import { n as e, t } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as n,
  C as r,
  I as i,
  P as a,
  R as o,
  _ as s,
  b as c,
  c as ee,
  j as l,
  l as u,
  o as d,
  p as f,
  s as p,
  w as m,
  y as h,
} from "./react.Dxe_2v0O.mjs";
import { i as g, o as _, t as v, w as y } from "./motion.x14TTX80.mjs";
import {
  A as b,
  D as x,
  Dt as te,
  G as S,
  O as C,
  Ot as w,
  R as T,
  Tt as E,
  gt as ne,
  o as D,
  st as O,
  ut as re,
  vt as ie,
  w as ae,
  xt as k,
  z as A,
} from "./framer.B_dFn1Dy.mjs";
import { N as j, P as M, a as oe, c as N, o as P, s as F } from "./toplevel-deps.CDw6GExF.mjs";
import { a as I, c as L, o as R, s as se } from "./nER_k8qot.2UZVgHtT.mjs";
var z, B, V, H, U, W, G;
function K() {
  return (K = t(() => {
    (p(),
      S(),
      m(),
      (z = `var(--framer-icon-mask)`),
      (B = /*#__PURE__*/ f(function (e, t) {
        return /*#__PURE__*/ d(`svg`, { ...e, ref: t, children: e.children });
      })),
      (V = y.create(B)),
      (H = /*#__PURE__*/ f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ d(V, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ d(`svg`, { ...a, ref: t, children: i });
      })),
      (U = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16 0 L 5 11 L 0 6" fill="transparent" height="11px" id="RhWX5SVPv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 6)" width="16px"/></svg>`),
      (W = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (G = w(
        /* @__PURE__ */ f(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = W(e),
            ee = E(`3338047389`, U);
          return /*#__PURE__*/ d(H, {
            ...c,
            className: b(`framer-FCBgc`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ d(`use`, { href: ee }),
          });
        }),
        [
          `.framer-FCBgc { -webkit-mask: ${z}; aspect-ratio: 1; display: block; mask: ${z}; width: 24px; }`,
        ],
        `framer-FCBgc`
      )),
      (G.displayName = `Check`),
      C(G, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: D.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: D.Number,
        },
      }));
  }))();
}
var ce = /* @__PURE__ */ e({ __FramerMetadata__: () => ye, default: () => X });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var J, Y, le, ue, de, fe, pe, me, he, ge, _e, ve, X, ye;
function be() {
  return (be = t(() => {
    (p(),
      S(),
      v(),
      m(),
      L(),
      (J = { bkwJ_fmbb: { hover: !0 }, P8w6NXcRA: { hover: !0 } }),
      (Y = [`bkwJ_fmbb`, `ERXa_gnJc`, `P8w6NXcRA`, `lTk39eHnu`]),
      (le = `framer-SEzwx`),
      (ue = {
        bkwJ_fmbb: `framer-v-116fxdi`,
        ERXa_gnJc: `framer-v-135m03b`,
        lTk39eHnu: `framer-v-1v23cb9`,
        P8w6NXcRA: `framer-v-13f2tak`,
      }),
      (de = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (fe = ({ value: e, children: t }) => {
        let r = n(_),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ d(_.Provider, { value: a, children: t });
      }),
      (pe = {
        "Slot Checked": `lTk39eHnu`,
        Checked: `ERXa_gnJc`,
        Default: `bkwJ_fmbb`,
        Slot: `P8w6NXcRA`,
      }),
      (me = y.create(a)),
      (he = ({ height: e, id: t, label: n, width: r, ...i }) => ({
        ...i,
        OTgweugJ9: n ?? i.OTgweugJ9 ?? `Storm damage`,
        variant: pe[i.variant] ?? i.variant ?? `bkwJ_fmbb`,
      })),
      (ge = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (_e = /*#__PURE__*/ f(function (e, t) {
        let n = c(null),
          i = t ?? n,
          o = r(),
          { activeLocale: s, contentLocale: ee, setLocale: l } = ie();
        re();
        let { style: u, className: f, layoutId: p, variant: m, OTgweugJ9: h, ..._ } = he(e),
          {
            baseVariant: v,
            classNames: x,
            clearLoadingGesture: S,
            gestureHandlers: C,
            gestureVariant: w,
            isLoading: T,
            setGestureState: E,
            setVariant: ne,
            variants: D,
          } = te({
            cycleOrder: Y,
            defaultVariant: `bkwJ_fmbb`,
            enabledGestures: J,
            ref: i,
            variant: m,
            variantClassNames: ue,
          }),
          O = ge(e, D),
          k = b(le, I);
        return /*#__PURE__*/ d(g, {
          id: p ?? o,
          children: /*#__PURE__*/ d(me, {
            animate: D,
            initial: !1,
            children: /*#__PURE__*/ d(fe, {
              value: de,
              children: /*#__PURE__*/ d(y.div, {
                ..._,
                ...C,
                className: b(k, `framer-116fxdi`, f, x),
                "data-border": !0,
                "data-framer-name": `Default`,
                layoutDependency: O,
                layoutId: `bkwJ_fmbb`,
                ref: i,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                  "--border-left-width": `1px`,
                  "--border-right-width": `1px`,
                  "--border-style": `solid`,
                  "--border-top-width": `1px`,
                  backgroundColor: `rgba(0, 0, 0, 0)`,
                  borderBottomLeftRadius: 999,
                  borderBottomRightRadius: 999,
                  borderTopLeftRadius: 999,
                  borderTopRightRadius: 999,
                  ...u,
                },
                variants: {
                  "bkwJ_fmbb-hover": {
                    "--border-color": `rgba(20, 21, 23, 0.4)`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                  },
                  "P8w6NXcRA-hover": { "--border-color": `rgba(20, 21, 23, 0.4)` },
                  ERXa_gnJc: {
                    "--border-color": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                    backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                  },
                  lTk39eHnu: {
                    "--border-color": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                    backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                  },
                  P8w6NXcRA: { backgroundColor: `rgba(0, 0, 0, 0)` },
                },
                ...q(
                  {
                    "bkwJ_fmbb-hover": { "data-framer-name": void 0 },
                    "P8w6NXcRA-hover": { "data-framer-name": void 0 },
                    ERXa_gnJc: { "data-framer-name": `Checked` },
                    lTk39eHnu: { "data-framer-name": `Slot Checked` },
                    P8w6NXcRA: { "data-framer-name": `Slot` },
                  },
                  v,
                  w
                ),
                children: /*#__PURE__*/ d(ae, {
                  __fromCanvasComponent: !0,
                  children: /*#__PURE__*/ d(a, {
                    children: /*#__PURE__*/ d(y.p, {
                      className: `framer-styles-preset-secjb5`,
                      "data-styles-preset": `pDF49uOxv`,
                      dir: `auto`,
                      style: {
                        "--framer-text-alignment": `start`,
                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                      },
                      children: `Storm damage`,
                    }),
                  }),
                  className: `framer-jph5xg`,
                  fonts: [`Inter`],
                  layoutDependency: O,
                  layoutId: `Yi_w1ujyF`,
                  style: {
                    "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                  },
                  text: h,
                  variants: {
                    ERXa_gnJc: {
                      "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                    },
                    lTk39eHnu: {
                      "--extracted-2gg91v": `"wght" 550`,
                      "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                    },
                    P8w6NXcRA: { "--extracted-2gg91v": `"wght" 550` },
                  },
                  verticalAlignment: `top`,
                  withExternalLayout: !0,
                  ...q(
                    {
                      ERXa_gnJc: {
                        children: /*#__PURE__*/ d(a, {
                          children: /*#__PURE__*/ d(y.p, {
                            className: `framer-styles-preset-secjb5`,
                            "data-styles-preset": `pDF49uOxv`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `start`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                            },
                            children: `Storm damage`,
                          }),
                        }),
                      },
                      lTk39eHnu: {
                        children: /*#__PURE__*/ d(a, {
                          children: /*#__PURE__*/ d(y.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVMU1BPT0=`,
                              "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                              "--framer-font-open-type-features": `'tnum' on`,
                              "--framer-font-size": `14px`,
                              "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 550)`,
                              "--framer-letter-spacing": `-0.0172em`,
                              "--framer-line-height": `1.5429em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                            },
                            children: `Storm damage`,
                          }),
                        }),
                        fonts: [`FS;Manrope-variable`],
                      },
                      P8w6NXcRA: {
                        children: /*#__PURE__*/ d(a, {
                          children: /*#__PURE__*/ d(y.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVMU1BPT0=`,
                              "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                              "--framer-font-open-type-features": `'tnum' on`,
                              "--framer-font-size": `14px`,
                              "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 550)`,
                              "--framer-letter-spacing": `-0.0172em`,
                              "--framer-line-height": `1.5429em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                            },
                            children: `Storm damage`,
                          }),
                        }),
                        fonts: [`FS;Manrope-variable`],
                      },
                    },
                    v,
                    w
                  ),
                }),
              }),
            }),
          }),
        });
      })),
      (ve = [
        `.framer-SEzwx.framer-8jaxev, .framer-SEzwx .framer-8jaxev { display: block; }`,
        `.framer-SEzwx.framer-116fxdi { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 38px; justify-content: flex-start; padding: 0px 15px 0px 15px; position: relative; width: min-content; }`,
        `.framer-SEzwx .framer-jph5xg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...R,
        `.framer-SEzwx[data-border="true"]::after, .framer-SEzwx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (X = w(_e, ve, `framer-SEzwx`)),
      (X.displayName = `Choice Pill`),
      (X.defaultProps = { height: 38, width: 127 }),
      C(X, {
        variant: {
          options: [`bkwJ_fmbb`, `ERXa_gnJc`, `P8w6NXcRA`, `lTk39eHnu`],
          optionTitles: [`Default`, `Checked`, `Slot`, `Slot Checked`],
          title: `Variant`,
          type: D.Enum,
        },
        OTgweugJ9: { defaultValue: `Storm damage`, title: `Label`, type: D.String },
        onOTgweugJ9Change: { changes: `OTgweugJ9`, type: D.ChangeHandler },
      }),
      x(
        X,
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
          ...A(se),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (ye = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerMl8Bjuh4A`,
            slots: [],
            annotations: {
              framerImmutableVariables: `true`,
              framerContractVersion: `1`,
              framerIntrinsicHeight: `38`,
              framerVariables: `{"OTgweugJ9":"label"}`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["auto","fixed"]},"ERXa_gnJc":{"layout":["auto","fixed"]},"P8w6NXcRA":{"layout":["auto","fixed"]},"lTk39eHnu":{"layout":["auto","fixed"]},"kil9aF7hN":{"layout":["auto","fixed"]},"T3AbKNHCZ":{"layout":["auto","fixed"]}}}`,
              framerComponentViewportWidth: `true`,
              framerColorSyntax: `true`,
              framerIntrinsicWidth: `127`,
              framerDisplayContentsDiv: `false`,
              framerAutoSizeImages: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
function xe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Se, Ce, we, Te, Ee, De, Oe, ke, Z, Ae, je, Me, Ne, Q;
function Pe() {
  return (Pe = t(() => {
    (p(),
      S(),
      v(),
      m(),
      M(),
      N(),
      (Se = T(j)),
      (Ce = { mys33k4Oy: { hover: !0 } }),
      (we = [`mys33k4Oy`, `uIVVFU3Ws`, `iUY86CFSe`]),
      (Te = `framer-njQVQ`),
      (Ee = {
        iUY86CFSe: `framer-v-1g41fka`,
        mys33k4Oy: `framer-v-80u496`,
        uIVVFU3Ws: `framer-v-nt0nr3`,
      }),
      (De = { delay: 0, duration: 0.5, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (Oe = ({ value: e, children: t }) => {
        let r = n(_),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ d(_.Provider, { value: a, children: t });
      }),
      (ke = { Default: `mys33k4Oy`, Pending: `uIVVFU3Ws`, Success: `iUY86CFSe` }),
      (Z = y.create(a)),
      (Ae = ({ height: e, id: t, label: n, sent: r, width: i, ...a }) => ({
        ...a,
        QcXTGtqDc: r ?? a.QcXTGtqDc,
        QVtfb921k: n ?? a.QVtfb921k ?? `Request inspection`,
        variant: ke[a.variant] ?? a.variant ?? `mys33k4Oy`,
      })),
      (je = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Me = /*#__PURE__*/ f(function (e, t) {
        let n = c(null),
          i = t ?? n,
          o = r(),
          { activeLocale: s, contentLocale: ee, setLocale: l } = ie();
        re();
        let {
            style: f,
            className: p,
            layoutId: m,
            variant: h,
            QVtfb921k: _,
            QcXTGtqDc: v,
            ...x
          } = Ae(e),
          {
            baseVariant: S,
            classNames: C,
            clearLoadingGesture: w,
            gestureHandlers: T,
            gestureVariant: E,
            isLoading: ne,
            setGestureState: D,
            setVariant: A,
            variants: M,
          } = te({
            cycleOrder: we,
            defaultVariant: `mys33k4Oy`,
            enabledGestures: Ce,
            ref: i,
            variant: h,
            variantClassNames: Ee,
          }),
          N = je(e, M),
          P = b(Te, oe),
          { activeVariantCallback: F, delay: I } = O(S),
          L = F(async (...e) => {
            if (v && (await I(() => {}, 900), (await v(...e)) === !1)) return !1;
          }),
          R = () => ![`uIVVFU3Ws`, `iUY86CFSe`].includes(S);
        return (
          k(S, { iUY86CFSe: L }),
          /*#__PURE__*/ d(g, {
            id: m ?? o,
            children: /*#__PURE__*/ d(Z, {
              animate: M,
              initial: !1,
              children: /*#__PURE__*/ d(Oe, {
                value: De,
                children: /*#__PURE__*/ u(y.button, {
                  ...x,
                  ...T,
                  className: b(P, `framer-80u496`, p, C),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: N,
                  layoutId: `mys33k4Oy`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    opacity: 1,
                    ...f,
                  },
                  variants: {
                    "mys33k4Oy-hover": {
                      backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                      opacity: 1,
                    },
                    iUY86CFSe: { opacity: 1 },
                    uIVVFU3Ws: { opacity: 0.75 },
                  },
                  ...xe(
                    {
                      "mys33k4Oy-hover": { "data-framer-name": void 0 },
                      iUY86CFSe: { "data-framer-name": `Success`, "data-highlight": !0 },
                      uIVVFU3Ws: { "data-framer-name": `Pending` },
                    },
                    S,
                    E
                  ),
                  children: [
                    /*#__PURE__*/ d(ae, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ d(a, {
                        children: /*#__PURE__*/ d(y.p, {
                          className: `framer-styles-preset-gpz1b`,
                          "data-styles-preset": `V5yNGnWxg`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `start`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                          },
                          children: `Request inspection`,
                        }),
                      }),
                      className: `framer-shbhgy`,
                      "data-framer-name": `Label`,
                      fonts: [`Inter`],
                      layoutDependency: N,
                      layoutId: `RVHefafB5`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                      },
                      text: _,
                      variants: {
                        "mys33k4Oy-hover": {
                          "--extracted-r6o4lv": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...xe(
                        {
                          "mys33k4Oy-hover": {
                            children: /*#__PURE__*/ d(a, {
                              children: /*#__PURE__*/ d(y.p, {
                                className: `framer-styles-preset-gpz1b`,
                                "data-styles-preset": `V5yNGnWxg`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d))`,
                                },
                                children: `Request inspection`,
                              }),
                            }),
                          },
                          iUY86CFSe: { text: void 0 },
                          uIVVFU3Ws: { text: void 0 },
                        },
                        S,
                        E
                      ),
                    }),
                    R() &&
                      /*#__PURE__*/ u(y.div, {
                        className: `framer-ixemi2`,
                        "data-framer-name": `Arrow`,
                        layoutDependency: N,
                        layoutId: `fVy400d0n`,
                        children: [
                          /*#__PURE__*/ d(j, {
                            animated: !0,
                            className: `framer-pg7vr7`,
                            "data-framer-name": `Arrow A`,
                            layoutDependency: N,
                            layoutId: `UmhmqDiFR`,
                            style: {
                              "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                              "--js9iwy": 2,
                              opacity: 1,
                            },
                            variants: {
                              "mys33k4Oy-hover": {
                                "--1m973uw": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                                opacity: 0,
                              },
                            },
                          }),
                          /*#__PURE__*/ d(j, {
                            animated: !0,
                            className: `framer-1mmzvoc`,
                            "data-framer-name": `Arrow B`,
                            layoutDependency: N,
                            layoutId: `ztraIX1UP`,
                            style: {
                              "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                              "--js9iwy": 2,
                              opacity: 0,
                            },
                            variants: {
                              "mys33k4Oy-hover": {
                                "--1m973uw": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                                opacity: 1,
                              },
                            },
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          })
        );
      })),
      (Ne = [
        `.framer-njQVQ.framer-1xieg5v, .framer-njQVQ .framer-1xieg5v { display: block; }`,
        `.framer-njQVQ.framer-80u496 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: 56px; justify-content: center; padding: 0px 23px 0px 27px; position: relative; width: 404px; }`,
        `.framer-njQVQ .framer-shbhgy { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-njQVQ .framer-ixemi2 { flex: none; height: 18px; position: relative; width: 18px; }`,
        `.framer-njQVQ .framer-pg7vr7 { flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: 18px; }`,
        `.framer-njQVQ .framer-1mmzvoc { flex: none; height: auto; left: -12px; position: absolute; top: 0px; width: 18px; }`,
        `.framer-njQVQ.framer-v-80u496.hover .framer-pg7vr7 { left: 14px; }`,
        `.framer-njQVQ.framer-v-80u496.hover .framer-1mmzvoc { left: 0px; }`,
        ...P,
      ]),
      (Q = w(Me, Ne, `framer-njQVQ`)),
      (Q.displayName = `Submit Button`),
      (Q.defaultProps = { height: 56, width: 404 }),
      C(Q, {
        variant: {
          options: [`mys33k4Oy`, `uIVVFU3Ws`, `iUY86CFSe`],
          optionTitles: [`Default`, `Pending`, `Success`],
          title: `Variant`,
          type: D.Enum,
        },
        QVtfb921k: { defaultValue: `Request inspection`, title: `Label`, type: D.String },
        onQVtfb921kChange: { changes: `QVtfb921k`, type: D.ChangeHandler },
        QcXTGtqDc: { title: `Sent`, type: D.EventHandler },
      }),
      x(
        Q,
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
          ...Se,
          ...A(F),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Fe(e) {
  let t = e.split(`/`).filter(Boolean);
  return t.length
    ? t
        .map((e) => {
          let t = e;
          try {
            t = decodeURIComponent(e);
          } catch {}
          return ((t = t.replace(/-/g, ` `)), t.charAt(0).toUpperCase() + t.slice(1));
        })
        .join(` / `)
    : `Home`;
}
function $(e) {
  let { website: t, form: n, source: r } = e,
    i = ne(),
    [a, c] = s(``);
  return (
    h(() => {
      if (o === void 0) return;
      let e = o.location.pathname || `/`;
      c(`${e} \xb7 ${Fe(e)}`);
    }, []),
    i
      ? /*#__PURE__*/ d(`span`, {
          style: {
            display: `inline-block`,
            padding: `2px 6px`,
            borderRadius: 4,
            background: `rgba(20,21,23,.08)`,
            color: `#5d6066`,
            font: `11px/1.4 sans-serif`,
            whiteSpace: `nowrap`,
          },
          children: `Sent with form: ${[n, r].filter(Boolean).join(` · `)}`,
        })
      : /*#__PURE__*/ u(ee, {
          children: [
            /*#__PURE__*/ d(`input`, { type: `hidden`, name: `Website`, value: t, readOnly: !0 }),
            /*#__PURE__*/ d(`input`, { type: `hidden`, name: `Form`, value: n, readOnly: !0 }),
            /*#__PURE__*/ d(`input`, { type: `hidden`, name: `Page`, value: a, readOnly: !0 }),
            r
              ? /*#__PURE__*/ d(`input`, { type: `hidden`, name: `Source`, value: r, readOnly: !0 })
              : null,
          ],
        })
  );
}
function Ie() {
  return (Ie = t(() => {
    (i(),
      p(),
      m(),
      S(),
      ($.defaultProps = {
        website: `Halden Roofing Co. · halden-visuvate.framer.website`,
        form: `Booking request · Home`,
        source: `HLD-home`,
      }),
      C($, {
        website: {
          type: D.String,
          title: `Website`,
          description: `Your site's name and address, sent with every submission`,
        },
        form: {
          type: D.String,
          title: `Form`,
          description: `Which form this is, e.g. Booking request · Contact`,
        },
        source: {
          type: D.String,
          title: `Source`,
          description: `Optional short code for filtering, e.g. HLD-contact. Leave empty to skip.`,
        },
      }));
  }))();
}
export { X as a, G as c, Pe as i, K as l, Ie as n, ce as o, Q as r, be as s, $ as t };
//# sourceMappingURL=FormSource.BWwpLW8o.mjs.map
