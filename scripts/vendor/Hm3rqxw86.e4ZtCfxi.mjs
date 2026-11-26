import { n as e, t } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as n,
  C as r,
  I as i,
  P as a,
  R as o,
  b as s,
  d as c,
  j as l,
  l as u,
  m as d,
  o as f,
  p,
  s as m,
  w as h,
  y as ee,
} from "./react.Dxe_2v0O.mjs";
import { i as te, o as ne, t as re, w as g } from "./motion.x14TTX80.mjs";
import {
  A as ie,
  D as ae,
  Dt as oe,
  G as _,
  It as v,
  O as se,
  Ot as y,
  R as b,
  S as ce,
  Tt as le,
  g as x,
  o as S,
  r as C,
  st as ue,
  t as de,
  ut as fe,
  vt as pe,
  w as me,
  z as w,
} from "./framer.B_dFn1Dy.mjs";
import { a as he, c as ge, o as _e, s as ve } from "./vI2CBrBs4.COrWOcnr.mjs";
var T, ye, be, xe, Se, Ce, E;
function we() {
  return (we = t(() => {
    (m(),
      _(),
      h(),
      (T = `var(--framer-icon-mask)`),
      (ye = /*#__PURE__*/ p(function (e, t) {
        return /*#__PURE__*/ f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (be = g.create(ye)),
      (xe = /*#__PURE__*/ p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ f(be, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ f(`svg`, { ...a, ref: t, children: i });
      })),
      (Se = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 14 0" fill="transparent" height="1px" id="For6a1EEX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(5 12)" width="14px"/><path d="M 0 0 L 0 14" fill="transparent" height="14px" id="TzsgOXd8_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 5)" width="1px"/></svg>`),
      (Ce = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (E = y(
        /* @__PURE__ */ p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Ce(e),
            l = le(`3356954461`, Se);
          return /*#__PURE__*/ f(xe, {
            ...c,
            className: ie(`framer-K11hZ`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ f(`use`, { href: l }),
          });
        }),
        [
          `.framer-K11hZ { -webkit-mask: ${T}; aspect-ratio: 1; display: block; mask: ${T}; width: 24px; }`,
        ],
        `framer-K11hZ`
      )),
      (E.displayName = `Plus`),
      se(E, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: S.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: S.Number,
        },
      }));
  }))();
}
var Te = /* @__PURE__ */ e({ __FramerMetadata__: () => Be, default: () => D });
function Ee(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var De, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, D, Be;
function Ve() {
  return (Ve = t(() => {
    (m(),
      _(),
      re(),
      h(),
      we(),
      ge(),
      (De = b(E)),
      (Oe = { NJ9pi0pLT: { hover: !0 }, vdKvjbuDZ: { hover: !0 } }),
      (ke = [`vdKvjbuDZ`, `HvjPobRqN`, `NJ9pi0pLT`, `HUHzKTkYI`]),
      (Ae = `framer-8DzG4`),
      (je = {
        HUHzKTkYI: `framer-v-eg6t4a`,
        HvjPobRqN: `framer-v-v87ca9`,
        NJ9pi0pLT: `framer-v-11wqncq`,
        vdKvjbuDZ: `framer-v-vo9u8d`,
      }),
      (Me = { delay: 0, duration: 0.45, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (Ne = ({ value: e, children: t }) => {
        let r = n(ne),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ f(ne.Provider, { value: a, children: t });
      }),
      (Pe = {
        "Closed Small": `NJ9pi0pLT`,
        "Open Small": `HUHzKTkYI`,
        Closed: `vdKvjbuDZ`,
        Open: `HvjPobRqN`,
      }),
      (Fe = g.create(a)),
      (Ie = ({ answer: e, height: t, id: n, question: r, width: i, ...a }) => ({
        ...a,
        NmPqkQ8LH:
          e ??
          a.NmPqkQ8LH ??
          `Every home and project is different. A clear renovation plan should set out your priorities, scope, material choices, and next steps before work begins.`,
        variant: Pe[a.variant] ?? a.variant ?? `vdKvjbuDZ`,
        yB5foTvy8: r ?? a.yB5foTvy8 ?? `What affects a renovation schedule?`,
      })),
      (Le = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Re = /*#__PURE__*/ p(function (e, t) {
        let n = s(null),
          i = t ?? n,
          o = r(),
          { activeLocale: c, contentLocale: l, setLocale: d } = pe();
        fe();
        let {
            style: p,
            className: m,
            layoutId: h,
            variant: ee,
            yB5foTvy8: ne,
            NmPqkQ8LH: re,
            ...ae
          } = Ie(e),
          {
            baseVariant: _,
            classNames: v,
            clearLoadingGesture: se,
            gestureHandlers: y,
            gestureVariant: b,
            isLoading: ce,
            setGestureState: le,
            setVariant: x,
            variants: S,
          } = oe({
            cycleOrder: ke,
            defaultVariant: `vdKvjbuDZ`,
            enabledGestures: Oe,
            ref: i,
            variant: ee,
            variantClassNames: je,
          }),
          C = Le(e, S),
          de = ie(Ae, he),
          { activeVariantCallback: w, delay: ge } = ue(_),
          _e = w(async (...e) => {
            x(`HvjPobRqN`);
          }),
          ve = w(async (...e) => {
            x(`vdKvjbuDZ`);
          }),
          T = w(async (...e) => {
            x(`HUHzKTkYI`);
          }),
          ye = w(async (...e) => {
            x(`NJ9pi0pLT`);
          });
        return /*#__PURE__*/ f(te, {
          id: h ?? o,
          children: /*#__PURE__*/ f(Fe, {
            animate: S,
            initial: !1,
            children: /*#__PURE__*/ f(Ne, {
              value: Me,
              children: /*#__PURE__*/ u(g.div, {
                ...ae,
                ...y,
                className: ie(de, `framer-vo9u8d`, m, v),
                "data-border": !0,
                "data-framer-name": `Closed`,
                layoutDependency: C,
                layoutId: `vdKvjbuDZ`,
                ref: i,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                  "--border-left-width": `0px`,
                  "--border-right-width": `0px`,
                  "--border-style": `solid`,
                  "--border-top-width": `0px`,
                  ...p,
                },
                ...Ee(
                  {
                    "NJ9pi0pLT-hover": { "data-framer-name": void 0 },
                    "vdKvjbuDZ-hover": { "data-framer-name": void 0 },
                    HUHzKTkYI: { "data-framer-name": `Open Small` },
                    HvjPobRqN: { "data-framer-name": `Open` },
                    NJ9pi0pLT: { "data-framer-name": `Closed Small` },
                  },
                  _,
                  b
                ),
                children: [
                  /*#__PURE__*/ u(g.div, {
                    className: `framer-1lvz4tr`,
                    "data-framer-name": `Summary`,
                    "data-highlight": !0,
                    layoutDependency: C,
                    layoutId: `qO5mwX5qy`,
                    onTap: _e,
                    ...Ee(
                      {
                        HUHzKTkYI: { onTap: ye },
                        HvjPobRqN: { onTap: ve },
                        NJ9pi0pLT: { onTap: T },
                      },
                      _,
                      b
                    ),
                    children: [
                      /*#__PURE__*/ f(me, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ f(a, {
                          children: /*#__PURE__*/ f(g.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                              "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                              "--framer-font-size": `19px`,
                              "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                              "--framer-letter-spacing": `-0.0296em`,
                              "--framer-line-height": `1.2726em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                            },
                            children: `What affects a renovation schedule?`,
                          }),
                        }),
                        className: `framer-947v50`,
                        fonts: [`FS;Manrope-variable`],
                        layoutDependency: C,
                        layoutId: `j8fhLeZoV`,
                        style: {
                          "--extracted-2gg91v": `"wght" 500`,
                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                        },
                        text: ne,
                        variants: {
                          "NJ9pi0pLT-hover": {
                            "--extracted-r6o4lv": `var(--token-d1796b10-ed0a-4c44-bd3b-b2d8b366f17b)`,
                          },
                          "vdKvjbuDZ-hover": {
                            "--extracted-r6o4lv": `var(--token-d1796b10-ed0a-4c44-bd3b-b2d8b366f17b)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Ee(
                          {
                            "NJ9pi0pLT-hover": {
                              children: /*#__PURE__*/ f(a, {
                                children: /*#__PURE__*/ f(g.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                    "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1.3em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d1796b10-ed0a-4c44-bd3b-b2d8b366f17b))`,
                                  },
                                  children: `What affects a renovation schedule?`,
                                }),
                              }),
                            },
                            "vdKvjbuDZ-hover": {
                              children: /*#__PURE__*/ f(a, {
                                children: /*#__PURE__*/ f(g.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                    "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                    "--framer-font-size": `19px`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                    "--framer-letter-spacing": `-0.0296em`,
                                    "--framer-line-height": `1.2726em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d1796b10-ed0a-4c44-bd3b-b2d8b366f17b))`,
                                  },
                                  children: `What affects a renovation schedule?`,
                                }),
                              }),
                            },
                            HUHzKTkYI: {
                              children: /*#__PURE__*/ f(a, {
                                children: /*#__PURE__*/ f(g.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                    "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1.3em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                  },
                                  children: `What affects a renovation schedule?`,
                                }),
                              }),
                            },
                            NJ9pi0pLT: {
                              children: /*#__PURE__*/ f(a, {
                                children: /*#__PURE__*/ f(g.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                    "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1.3em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                  },
                                  children: `What affects a renovation schedule?`,
                                }),
                              }),
                            },
                          },
                          _,
                          b
                        ),
                      }),
                      /*#__PURE__*/ f(E, {
                        animated: !0,
                        className: `framer-x09y7i`,
                        "data-framer-name": `Plus`,
                        layoutDependency: C,
                        layoutId: `C8RcbwWx1`,
                        style: {
                          "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                          "--js9iwy": 1.9,
                          rotate: 0,
                        },
                        variants: {
                          "vdKvjbuDZ-hover": { rotate: 0 },
                          HUHzKTkYI: { rotate: 45 },
                          HvjPobRqN: { rotate: 45 },
                          NJ9pi0pLT: { rotate: 0 },
                        },
                      }),
                    ],
                  }),
                  /*#__PURE__*/ f(g.div, {
                    className: `framer-1u6208k`,
                    "data-framer-name": `Answer`,
                    layoutDependency: C,
                    layoutId: `vnYZU6nV2`,
                    style: { opacity: 0 },
                    variants: { HUHzKTkYI: { opacity: 1 }, HvjPobRqN: { opacity: 1 } },
                    children: /*#__PURE__*/ f(g.div, {
                      className: `framer-jy7k2u`,
                      "data-framer-name": `Answer Measure`,
                      layoutDependency: C,
                      layoutId: `zIifPbSuH`,
                      children: /*#__PURE__*/ f(me, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ f(a, {
                          children: /*#__PURE__*/ f(g.p, {
                            className: `framer-styles-preset-12clcwd`,
                            "data-styles-preset": `tR22IXYs0`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `start`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                            },
                            children: `Every home and project is different. A clear renovation plan should set out your priorities, scope, material choices, and next steps before work begins.`,
                          }),
                        }),
                        className: `framer-oyeoxz`,
                        fonts: [`Inter`],
                        layoutDependency: C,
                        layoutId: `IH4B0WrSl`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                        },
                        text: re,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (ze = [
        `.framer-8DzG4.framer-403r5l, .framer-8DzG4 .framer-403r5l { display: block; }`,
        `.framer-8DzG4.framer-vo9u8d { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 1px 0px; position: relative; width: 613px; }`,
        `.framer-8DzG4 .framer-1lvz4tr { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 24px 0px 24px 0px; position: relative; width: 100%; }`,
        `.framer-8DzG4 .framer-947v50 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-8DzG4 .framer-x09y7i { flex: none; height: auto; position: relative; width: 22px; }`,
        `.framer-8DzG4 .framer-1u6208k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 0px; justify-content: flex-start; padding: 0px 48px 0px 0px; position: relative; width: 100%; }`,
        `.framer-8DzG4 .framer-jy7k2u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 672.4px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-8DzG4 .framer-oyeoxz { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-8DzG4.framer-v-v87ca9.framer-vo9u8d { cursor: unset; }`,
        `.framer-8DzG4.framer-v-v87ca9 .framer-1u6208k, .framer-8DzG4.framer-v-eg6t4a .framer-1u6208k { height: min-content; padding: 0px 48px 26px 0px; }`,
        `.framer-8DzG4.framer-v-11wqncq.framer-vo9u8d { width: 358px; }`,
        `.framer-8DzG4.framer-v-eg6t4a.framer-vo9u8d { cursor: unset; width: 358px; }`,
        ..._e,
        `.framer-8DzG4[data-border="true"]::after, .framer-8DzG4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (D = y(Re, ze, `framer-8DzG4`)),
      (D.displayName = `FAQ Item`),
      (D.defaultProps = { height: 73, width: 613 }),
      se(D, {
        variant: {
          options: [`vdKvjbuDZ`, `HvjPobRqN`, `NJ9pi0pLT`, `HUHzKTkYI`],
          optionTitles: [`Closed`, `Open`, `Closed Small`, `Open Small`],
          title: `Variant`,
          type: S.Enum,
        },
        yB5foTvy8: {
          defaultValue: `What affects a renovation schedule?`,
          title: `Question`,
          type: S.String,
        },
        onyB5foTvy8Change: { changes: `yB5foTvy8`, type: S.ChangeHandler },
        NmPqkQ8LH: {
          defaultValue: `Every home and project is different. A clear renovation plan should set out your priorities, scope, material choices, and next steps before work begins.`,
          title: `Answer`,
          type: S.String,
        },
        onNmPqkQ8LHChange: { changes: `NmPqkQ8LH`, type: S.ChangeHandler },
      }),
      ae(
        D,
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
          ...De,
          ...w(ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Be = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerwkWkBKDlL`,
            slots: [],
            annotations: {
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
              framerAutoSizeImages: `true`,
              framerIntrinsicHeight: `73`,
              framerColorSyntax: `true`,
              framerVariables: `{"yB5foTvy8":"question","NmPqkQ8LH":"answer"}`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"HvjPobRqN":{"layout":["fixed","auto"]},"NJ9pi0pLT":{"layout":["fixed","auto"]},"HUHzKTkYI":{"layout":["fixed","auto"]},"ztINbBON4":{"layout":["fixed","auto"]},"xGyoVpFjg":{"layout":["fixed","auto"]}}}`,
              framerContractVersion: `1`,
              framerIntrinsicWidth: `613`,
              framerImmutableVariables: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
function He(e, t) {
  return /*#__PURE__*/ p((n, r) => {
    let i = s(null);
    return (
      ee(() => {
        let e = i.current?.firstElementChild;
        if (!e || o.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
        let n = () =>
            [...e.children].find((e) => e.getAttribute(`data-framer-name`) === t.panel) || null,
          r = (e) => !!e && e.offsetParent !== null && e.offsetHeight > 1,
          a = () => {
            let i = n(),
              a = r(i);
            return {
              h: e.offsetHeight,
              open: a,
              panel: a && t.ghost ? i : null,
              top: i ? i.offsetTop : 0,
              left: i ? i.offsetLeft : 0,
              w: i ? i.offsetWidth : 0,
            };
          },
          s = a(),
          c = null,
          l = null,
          u = () => {
            (l && l.parentElement && l.parentElement.removeChild(l), (l = null));
          },
          d = new MutationObserver(() => {
            let i = n(),
              o = r(i);
            if (o === s.open) {
              c || (s = a());
              return;
            }
            let d = c ? e.getBoundingClientRect().height : s.h;
            (c && c.cancel(), u());
            let f = e.offsetHeight,
              p = s;
            if (((s = a()), Math.abs(f - d) < 1)) return;
            e.style.overflow = `hidden`;
            let m = e.animate({ height: [d + `px`, f + `px`] }, { duration: t.dur, easing: O });
            ((c = m),
              o && i
                ? (i.animate(
                    { opacity: [0, 1] },
                    { duration: t.inDur * 0.7, delay: t.inDelay, easing: O, fill: `backwards` }
                  ),
                  i.animate(
                    { transform: [`translateY(${-t.dy}px)`, `none`] },
                    { duration: t.inDur, delay: t.inDelay, easing: O, fill: `backwards` }
                  ))
                : !o &&
                  p.panel &&
                  ((l = p.panel.isConnected ? p.panel.cloneNode(!0) : p.panel),
                  Object.assign(l.style, {
                    position: `absolute`,
                    top: p.top + `px`,
                    left: p.left + `px`,
                    width: p.w + `px`,
                    margin: `0`,
                    pointerEvents: `none`,
                    display: ``,
                    visibility: `visible`,
                    opacity: `1`,
                    height: `auto`,
                  }),
                  l.setAttribute(`aria-hidden`, `true`),
                  e.appendChild(l),
                  l.animate(
                    { opacity: [1, 0] },
                    { duration: t.outDur, easing: O, fill: `forwards` }
                  ),
                  l.animate(
                    { transform: [`none`, `translateY(${-t.dy}px)`] },
                    { duration: t.outDur * 1.4, easing: O, fill: `forwards` }
                  )),
              (m.onfinish = () => {
                c === m && ((c = null), (e.style.overflow = ``), u(), (s = a()));
              }));
          });
        return (
          d.observe(e, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: [`class`, `style`, `data-framer-name`],
          }),
          () => {
            (d.disconnect(), c && c.cancel(), u());
          }
        );
      }, []),
      /*#__PURE__*/ f(`div`, {
        ref: i,
        style: { display: `contents` },
        children: /*#__PURE__*/ f(e, { ...n, ref: r }),
      })
    );
  });
}
function Ue(e) {
  return He(e, {
    dur: 700,
    panel: `Panel`,
    ghost: !0,
    inDelay: 180,
    inDur: 500,
    outDur: 350,
    dy: 8,
  });
}
function We(e) {
  return He(e, {
    dur: 520,
    panel: `Answer`,
    ghost: !1,
    inDelay: 0,
    inDur: 450,
    outDur: 300,
    dy: 6,
  });
}
var O;
function Ge() {
  return (Ge = t(() => {
    (i(), m(), h(), (O = `cubic-bezier(.22,.7,.2,1)`));
  }))();
}
function k(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function A(e) {
  return typeof e == `function` ? e() : e;
}
function Ke(e, t) {
  return Zt[e] > Zt[t];
}
function qe(e) {
  let t;
  for (let n of e) {
    let e = A(n);
    if (((t === void 0 || Ke(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function Je(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function j(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function M(e) {
  throw Error(`Unexpected value: ${e}`);
}
function N(e, t, n, r) {
  (j(e >= t, e, `outside lower bound for`, r), j(e <= n, e, `outside upper bound for`, r));
}
function P(e) {
  return typeof e == `string`;
}
function F(e) {
  return Number.isFinite(e);
}
function I(e) {
  return e === null;
}
function L(e) {
  if (I(e)) return 0;
  switch (e.type) {
    case `array`:
      return 1;
    case `boolean`:
      return 2;
    case `color`:
      return 3;
    case `date`:
      return 4;
    case `enum`:
      return 5;
    case `file`:
      return 6;
    case `responsiveimage`:
      return 10;
    case `link`:
      return 7;
    case `number`:
      return 8;
    case `object`:
      return 9;
    case `richtext`:
      return 11;
    case `string`:
      return 12;
    case `vectorsetitem`:
      return 13;
    default:
      M(e);
  }
}
function Ye(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = R.read(e);
    n.push(t);
  }
  return { type: `array`, value: n };
}
function Xe(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) R.write(e, n);
}
function Ze(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = R.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Qe(e) {
  return { type: `boolean`, value: e.readUint8() !== 0 };
}
function $e(e, t) {
  e.writeUint8(+!!t.value);
}
function et(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function tt(e) {
  return { type: `color`, value: e.readString() };
}
function nt(e, t) {
  e.writeString(t.value);
}
function rt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function it(e) {
  let t = e.readInt64();
  return { type: `date`, value: new Date(t).toISOString() };
}
function at(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function ot(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function st(e) {
  return { type: `enum`, value: e.readString() };
}
function ct(e, t) {
  e.writeString(t.value);
}
function lt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ut(e) {
  return { type: `file`, value: e.readString() };
}
function dt(e, t) {
  e.writeString(t.value);
}
function ft(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function pt(e) {
  return { type: `link`, value: e.readJson() };
}
function mt(e, t) {
  e.writeJson(t.value);
}
function ht(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function gt(e) {
  return { type: `number`, value: e.readFloat64() };
}
function _t(e, t) {
  e.writeFloat64(t.value);
}
function vt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function yt(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = R.read(e);
  }
  return { type: `object`, value: n };
}
function bt(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), R.write(e, r));
}
function xt(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = R.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function St(e) {
  return { type: `responsiveimage`, value: e.readJson() };
}
function Ct(e, t) {
  e.writeJson(t.value);
}
function wt(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Tt(e) {
  let t = e.readInt8();
  if (t === 0) return { type: `richtext`, value: e.readUint32() };
  if (t === 1) return { type: `richtext`, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Et(e, t) {
  if (F(t.value)) (e.writeInt8(0), e.writeUint32(t.value));
  else if (P(t.value)) (e.writeInt8(1), e.writeString(t.value));
  else throw Error(`Invalid rich text pointer`);
}
function Dt(e, t) {
  let n = e.value,
    r = t.value;
  if ((F(n) && F(r)) || (P(n) && P(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function Ot(e) {
  return { type: `string`, value: e.readString() };
}
function kt(e, t) {
  e.writeString(t.value);
}
function At(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function jt(e) {
  return { type: `vectorsetitem`, value: e.readUint32() };
}
function Mt(e, t) {
  e.writeUint32(t.value);
}
function Nt(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Pt(e) {
  let t = Math.floor(rn * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function Ft(e, t) {
  let n = Lt(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await on(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new sn(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function It(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Lt(e) {
  j(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function Rt(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = R.read(e);
  }
  return t;
}
function* zt(e) {
  for (let t of e) yield* t.prioritySources;
}
var Bt,
  R,
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
  z,
  B,
  Qt,
  $t,
  V,
  H,
  U,
  W,
  G,
  en,
  K,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  q,
  cn,
  ln;
function un() {
  return (un = t(() => {
    (_(),
      (Vt = Object.create),
      (Ht = Object.defineProperty),
      (Ut = Object.getOwnPropertyDescriptor),
      (Wt = Object.getOwnPropertyNames),
      (Gt = Object.getPrototypeOf),
      (Kt = Object.prototype.hasOwnProperty),
      (qt = (e, t) =>
        function () {
          try {
            return (t || (0, e[Wt(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (Jt = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of Wt(t))
            Kt.call(e, i) ||
              i === n ||
              Ht(e, i, { get: () => t[i], enumerable: !(r = Ut(t, i)) || r.enumerable });
        return e;
      }),
      (Yt = (e, t, n) => (
        (n = e == null ? {} : Vt(Gt(e))),
        Jt(!t && e && e.__esModule ? n : Ht(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (Xt = Yt(
        qt({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = /* @__PURE__ */ (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (e && !1 === e.batch) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (e && !1 === e.cache) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return /* @__PURE__ */ new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) o(t);
                              else {
                                try {
                                  n = e._batchLoadFn(t.keys);
                                } catch (n) {
                                  return a(
                                    e,
                                    t,
                                    TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                        String(n) +
                                        `.`
                                    )
                                  );
                                }
                                if (!n || typeof n.then != `function`)
                                  return a(
                                    e,
                                    t,
                                    TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                        String(n) +
                                        `.`
                                    )
                                  );
                                n.then(function (e) {
                                  if (!s(e))
                                    throw TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                        String(e) +
                                        `.`
                                    );
                                  if (e.length !== t.keys.length)
                                    throw TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                        String(t.keys) +
                                        `

Values:
` +
                                        String(e)
                                    );
                                  o(t);
                                  for (var n = 0; n < t.callbacks.length; n++) {
                                    var r = e[n];
                                    r instanceof Error
                                      ? t.callbacks[n].reject(r)
                                      : t.callbacks[n].resolve(r);
                                  }
                                }).catch(function (n) {
                                  a(e, t, n);
                                });
                              }
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (Zt = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (z = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (B =
        ((Bt = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = z.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = z.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = z.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = z.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = z.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = z.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = z.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = z.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = z.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = z.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            (k(this, `bytes`, void 0),
              k(this, `offset`, 0),
              k(this, `view`, void 0),
              (this.bytes = e),
              (this.view = Je(this.bytes)));
          }
        }),
        k(Bt, `textDecoder`, new TextDecoder()),
        Bt)),
      (Qt = 1024),
      ($t = 1.5),
      (V = (e) => 2 ** e - 1),
      (H = (e) => -(2 ** (e - 1))),
      (U = (e) => 2 ** (e - 1) - 1),
      (W = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: H(8),
        Int16: H(16),
        Int32: H(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (G = {
        Uint8: V(8),
        Uint16: V(16),
        Uint32: V(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: U(8),
        Int16: U(16),
        Int32: U(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (en = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * $t) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = Je(n)));
        }
        writeUint8(e) {
          N(e, W.Uint8, G.Uint8, `Uint8`);
          let t = z.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          N(e, W.Uint16, G.Uint16, `Uint16`);
          let t = z.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          N(e, W.Uint32, G.Uint32, `Uint32`);
          let t = z.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          N(e, W.Uint64, G.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          N(e, W.BigUint64, G.BigUint64, `BigUint64`);
          let t = z.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          N(e, W.Int8, G.Int8, `Int8`);
          let t = z.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          N(e, W.Int16, G.Int16, `Int16`);
          let t = z.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          N(e, W.Int32, G.Int32, `Int32`);
          let t = z.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          N(e, W.Int64, G.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          N(e, W.BigInt64, G.BigInt64, `BigInt64`);
          let t = z.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = z.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = z.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (k(this, `offset`, 0),
            k(this, `bytes`, new Uint8Array(Qt)),
            k(this, `view`, Je(this.bytes)),
            k(this, `encoder`, new TextEncoder()),
            k(this, `encodedStrings`, /* @__PURE__ */ new Map()));
        }
      }),
      (K = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            j(F(n), `Invalid chunkId`),
            j(F(r), `Invalid offset`),
            j(F(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (j(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (k(this, `chunkId`, void 0),
            k(this, `offset`, void 0),
            k(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return Ye(e);
            case 2:
              return Qe(e);
            case 3:
              return tt(e);
            case 4:
              return it(e);
            case 5:
              return st(e);
            case 6:
              return ut(e);
            case 7:
              return pt(e);
            case 8:
              return gt(e);
            case 9:
              return yt(e);
            case 10:
              return St(e);
            case 11:
              return Tt(e);
            case 12:
              return Ot(e);
            case 13:
              return jt(e);
            default:
              M(t);
          }
        }),
          (e.write = function (e, t) {
            let n = L(t);
            if ((e.writeUint8(n), !I(t)))
              switch (t.type) {
                case `array`:
                  return Xe(e, t);
                case `boolean`:
                  return $e(e, t);
                case `color`:
                  return nt(e, t);
                case `date`:
                  return at(e, t);
                case `enum`:
                  return ct(e, t);
                case `file`:
                  return dt(e, t);
                case `link`:
                  return mt(e, t);
                case `number`:
                  return _t(e, t);
                case `object`:
                  return bt(e, t);
                case `responsiveimage`:
                  return Ct(e, t);
                case `richtext`:
                  return Et(e, t);
                case `vectorsetitem`:
                  return Mt(e, t);
                case `string`:
                  return kt(e, t);
                default:
                  M(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = L(e),
              i = L(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (I(e) || I(t)) return 0;
            switch (e.type) {
              case `array`:
                return (j(t.type === `array`), Ze(e, t, n));
              case `boolean`:
                return (j(t.type === `boolean`), et(e, t));
              case `color`:
                return (j(t.type === `color`), rt(e, t));
              case `date`:
                return (j(t.type === `date`), ot(e, t));
              case `enum`:
                return (j(t.type === `enum`), lt(e, t));
              case `file`:
                return (j(t.type === `file`), ft(e, t));
              case `link`:
                return (j(t.type === `link`), ht(e, t));
              case `number`:
                return (j(t.type === `number`), vt(e, t));
              case `object`:
                return (j(t.type === `object`), xt(e, t, n));
              case `responsiveimage`:
                return (j(t.type === `responsiveimage`), wt(e, t));
              case `richtext`:
                return (j(t.type === `richtext`), Dt(e, t));
              case `vectorsetitem`:
                return (j(t.type === `vectorsetitem`), Nt(e, t));
              case `string`:
                return (j(t.type === `string`), At(e, t, n));
              default:
                M(e);
            }
          }));
      })((R ||= {})),
      (tn = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = R.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static async deserialize(t, n) {
          let r = new B(t),
            i = r.readJson(),
            a = r.readUint8(),
            o = [];
          for (let e = 0; e < a; e++) {
            let e = r.readString();
            o.push(e);
          }
          let s = new e(o, { collation: i }),
            c = r.readUint32(),
            l = () => {
              let e = [];
              for (let t = 0; t < a; t++) {
                let t = R.read(r);
                e.push(t);
              }
              let t = K.read(r);
              s.entries.push({ values: e, pointer: t });
            };
          for (let e = 0; e < c; e++) {
            let e = n?.();
            (e && (await e), l());
          }
          return s;
        }
        serialize() {
          let e = new en();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) R.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          (k(this, `fieldNames`, void 0),
            k(this, `options`, void 0),
            k(this, `entries`, []),
            (this.fieldNames = e),
            (this.options = t));
        }
      }),
      (nn = 3),
      (rn = 250),
      (an = [408, 429, 500, 502, 503, 504]),
      (on = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!an.includes(r.status) || ++n > nn) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > nn) throw e;
          }
          await Pt(n);
        }
      }),
      (sn = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((j(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = It(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((j(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = It(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          k(this, `chunks`, []);
        }
      }),
      (q = class {
        async loadModel() {
          let [e] = await Ft(this.options.url, [this.options.range]);
          return (
            j(e, `Failed to load model`),
            tn.deserialize(e, () => {
              let e = qe(this.modelPrioritySources);
              if (e) return v({ batch: !0, priority: e });
            })
          );
        }
        async getModel(e) {
          return (
            this.model ||
              (e && this.modelPrioritySources.add(e),
              (this.modelPromise ??= this.loadModel().finally(() => {
                this.modelPrioritySources.clear();
              })),
              (this.model ??= await this.modelPromise)),
            this.model
          );
        }
        async lookupItems(e, t) {
          j(e.length === this.fields.length, `Invalid query length`);
          let n = [(await this.getModel(t)).entries];
          for (let [r, i] of e.entries()) {
            let e = [];
            for (let a of n) {
              let n,
                o = t ? v({ batch: !0, priority: A(t) }) : void 0;
              switch ((o && (await o), i.type)) {
                case `All`:
                  n = [a];
                  break;
                case `Equals`:
                  n = this.queryEquals(a, i, r);
                  break;
                case `NotEquals`:
                  n = this.queryNotEquals(a, i, r);
                  break;
                case `LessThan`:
                  n = this.queryLessThan(a, i, r);
                  break;
                case `GreaterThan`:
                  n = this.queryGreaterThan(a, i, r);
                  break;
                case `Contains`:
                  n = await this.queryContains(a, i, r, t);
                  break;
                case `StartsWith`:
                  n = await this.queryStartsWith(a, i, r, t);
                  break;
                case `EndsWith`:
                  n = await this.queryEndsWith(a, i, r, t);
                  break;
                default:
                  M(i);
              }
              e.push(...n);
            }
            n = e;
          }
          let r = [];
          for (let e of n)
            for (let n of e) {
              let e = t ? v({ batch: !0, priority: A(t) }) : void 0;
              e && (await e);
              let i = {};
              for (let e = 0; e < this.options.fieldNames.length; e++) {
                let t = this.options.fieldNames[e];
                i[t] = n.values[e];
              }
              r.push({ pointer: n.pointer.toString(), data: i });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== S.String || t.value?.type !== S.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== S.String || t.value?.type !== S.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== S.String || t.value?.type !== S.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > R.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            R.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        async findItems(e, t, n, r) {
          let i = [],
            a = 0;
          for (let o = 0; o < e.length; o++) {
            let s = n ? v({ batch: !0, priority: A(n) }) : void 0;
            s && (await s);
            let c = e[o].values[t];
            if (!r(c)) {
              if (a < o) {
                let t = e.slice(a, o);
                i.push(t);
              }
              a = o + 1;
            }
          }
          if (a < e.length) {
            let t = e.slice(a);
            i.push(t);
          }
          return i;
        }
        constructor(e) {
          (k(this, `options`, void 0),
            k(this, `schema`, void 0),
            k(this, `fields`, void 0),
            k(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            k(this, `modelPromise`, void 0),
            k(this, `model`, void 0),
            k(this, `modelPrioritySources`, /* @__PURE__ */ new Set()),
            k(this, `collation`, void 0),
            (this.options = e));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (j(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (cn = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = on(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new B(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = qe(this.scanPrioritySources),
                        t = e ? v({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = Rt(n),
                        o = n.getOffset() - i,
                        s = new K(this.id, i, o).toString(),
                        c = { pointer: s, data: a };
                      (this.itemLoader.prime(
                        { pointer: s, prioritySources: /* @__PURE__ */ new Set() },
                        c
                      ),
                        r.push(c));
                    }
                    return r;
                  })
                  .finally(() => {
                    ((this.isScanning = !1), this.scanPrioritySources.clear());
                  }))),
            this.itemsPromise
          );
        }
        resolveItem(e, t) {
          let n = this.itemPrioritySources.get(e);
          (n || ((n = /* @__PURE__ */ new Set()), this.itemPrioritySources.set(e, n)),
            t && n.add(t));
          let r = this.itemLoader.load({ pointer: e, prioritySources: n }),
            i = () => this.itemPrioritySources.delete(e);
          return (r.then(i, i), r);
        }
        constructor(e, t) {
          (k(this, `id`, void 0),
            k(this, `url`, void 0),
            k(this, `itemsPromise`, void 0),
            k(this, `isScanning`, !1),
            k(this, `scanPrioritySources`, /* @__PURE__ */ new Set()),
            k(this, `itemPrioritySources`, /* @__PURE__ */ new Map()),
            k(
              this,
              `itemLoader`,
              new Xt.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = K.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await Ft(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = qe(zt(e)),
                      a = i ? v({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    j(o, `Missing range bytes`);
                    let s = Rt(new B(o)),
                      c = e[t]?.pointer;
                    (j(c, `Missing pointer`), r.push({ pointer: c, data: s }));
                  }
                  return r;
                },
                { maxBatchSize: 250, cacheKeyFn: (e) => e.pointer }
              )
            ),
            (this.id = e),
            (this.url = t));
        }
      }),
      (ln = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = K.fromString(e),
                r = this.chunks[n.chunkId];
              return (j(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = K.fromString(e.pointer),
            r = K.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return R.compare(e, t, n);
        }
        constructor(e) {
          (k(this, `options`, void 0),
            k(this, `id`, void 0),
            k(this, `schema`, void 0),
            k(this, `indexes`, void 0),
            k(this, `resolveRichText`, void 0),
            k(this, `resolveVectorSetItem`, void 0),
            k(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new cn(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  }))();
}
function dn(e) {
  return typeof e == `object` && !!e && !(/*#__PURE__*/ d(e)) && gn in e;
}
function fn(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function pn(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    typeof i == `number` ? (e[r] = n(i, t)) : mn(t, i, n);
  }
}
function mn(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : mn(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || pn(e, t, n);
  }
}
function hn(e) {
  let t = /* @__PURE__ */ new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let i = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n,
            r = e.map(t);
          return /*#__PURE__*/ c(a, void 0, ...r);
        }
        case 2: {
          let [, e, ...r] = n,
            i = r.map(t);
          return /*#__PURE__*/ c(x, e, ...i);
        }
        case 3: {
          let [, r, i, a] = n;
          pn(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (dn(i) && i.preload(), i) : r;
          });
          let o = e[r];
          return (
            fn(o, `Module not found`),
            dn(o) && o.preload(),
            /*#__PURE__*/ f(C, {
              componentIdentifier: r,
              children: (e) => /*#__PURE__*/ f(de, { component: o, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return c(e === `a` ? g.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, i), i);
  };
}
var J, Y, gn, _n, vn;
function yn() {
  return (yn = t(() => {
    (m(),
      _(),
      h(),
      (gn = `preload`),
      (_n =
        (((J = _n || {})[(J.Fragment = 1)] = `Fragment`),
        (J[(J.Link = 2)] = `Link`),
        (J[(J.Module = 3)] = `Module`),
        (J[(J.Tag = 4)] = `Tag`),
        (J[(J.Text = 5)] = `Text`),
        J)),
      (vn =
        (((Y = vn || {})[(Y.RichText = 1)] = `RichText`),
        (Y[(Y.VectorSetItem = 2)] = `VectorSetItem`),
        Y)));
  }))();
}
var X, Z, bn, Q, xn, Sn, Cn, wn, $, Tn, En, Dn, On, kn, An, jn, Mn, Nn;
function Pn() {
  return (Pn = t(() => {
    (_(),
      un(),
      yn(),
      (X = {
        cH8pMxoUF: { isNullable: !0, type: S.String },
        createdAt: { isNullable: !0, type: S.Date },
        id: { isNullable: !1, type: S.String },
        m6NyOvlbB: { isNullable: !0, type: S.String },
        nextItemId: { isNullable: !0, type: S.String },
        previousItemId: { isNullable: !0, type: S.String },
        updatedAt: { isNullable: !0, type: S.Date },
        VHyAvN8g1: { isNullable: !0, type: S.Number },
        vQV8VkTtG: { isNullable: !0, type: S.String },
        wshiDBIYS: { isNullable: !0, type: S.String },
      }),
      (Z = new URL(
        `./Hm3rqxw86-indexes-default-0.framercms`,
        `https://framerusercontent.com/modules/5ZCI31p0B4uia7IQ3dHT/KQCuHVSlhg8NYAHFcYSP/Hm3rqxw86.js`
      ).href.replace(`/modules/`, `/cms/`)),
      (bn = [`id`]),
      (Q = { type: 1 }),
      (xn = [`previousItemId`]),
      (Sn = [`nextItemId`]),
      (Cn = [`id`, `wshiDBIYS`]),
      (wn = [`wshiDBIYS`, `id`]),
      ($ = { type: 0 }),
      (Tn = [`m6NyOvlbB`]),
      (En = [`wshiDBIYS`]),
      (Dn = [`vQV8VkTtG`]),
      (On = [`cH8pMxoUF`]),
      (kn = [`VHyAvN8g1`]),
      (An = []),
      (jn = (e) => {
        let t = An[e];
        if (t) return t().then((e) => e.default);
      }),
      (Mn = hn({})),
      new ce(),
      (Nn = {
        collectionByLocaleId: {
          default: new ln({
            chunks: [
              new URL(
                `./Hm3rqxw86-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/5ZCI31p0B4uia7IQ3dHT/KQCuHVSlhg8NYAHFcYSP/Hm3rqxw86.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `0bd31d87-bf76-4ade-af22-78d9b5514f2edefault`,
            indexes: [
              new q({
                collation: Q,
                collectionSchema: X,
                fieldNames: bn,
                range: { from: 0, to: 1105 },
                url: Z,
              }),
              new q({
                collation: Q,
                collectionSchema: X,
                fieldNames: xn,
                range: { from: 1105, to: 2209 },
                url: Z,
              }),
              new q({
                collation: Q,
                collectionSchema: X,
                fieldNames: Sn,
                range: { from: 2209, to: 3309 },
                url: Z,
              }),
              new q({
                collation: Q,
                collectionSchema: X,
                fieldNames: Cn,
                range: { from: 3309, to: 6173 },
                url: Z,
              }),
              new q({
                collation: $,
                collectionSchema: X,
                fieldNames: wn,
                range: { from: 6173, to: 9037 },
                url: Z,
              }),
              new q({
                collation: $,
                collectionSchema: X,
                fieldNames: Tn,
                range: { from: 9037, to: 11473 },
                url: Z,
              }),
              new q({
                collation: $,
                collectionSchema: X,
                fieldNames: En,
                range: { from: 11473, to: 13701 },
                url: Z,
              }),
              new q({
                collation: $,
                collectionSchema: X,
                fieldNames: Dn,
                range: { from: 13701, to: 21280 },
                url: Z,
              }),
              new q({
                collation: $,
                collectionSchema: X,
                fieldNames: On,
                range: { from: 21280, to: 22489 },
                url: Z,
              }),
              new q({
                collation: $,
                collectionSchema: X,
                fieldNames: kn,
                range: { from: 22489, to: 23376 },
                url: Z,
              }),
            ],
            resolveRichText: Mn,
            resolveVectorSetItem: jn,
            schema: X,
          }),
        },
        displayName: `FAQs`,
        id: `0bd31d87-bf76-4ade-af22-78d9b5514f2e`,
      }),
      se(Nn, {
        m6NyOvlbB: { defaultValue: ``, title: `Question`, type: S.String },
        wshiDBIYS: { preventLocalization: !1, title: `Slug`, type: S.String },
        vQV8VkTtG: { defaultValue: ``, displayTextArea: !0, title: `Answer`, type: S.String },
        cH8pMxoUF: { defaultValue: ``, title: `Page`, type: S.String },
        VHyAvN8g1: { defaultValue: 0, title: `Order`, type: S.Number },
        createdAt: { title: `Created`, type: S.Date },
        updatedAt: { title: `Updated`, type: S.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/Hm3rqxw86:default`,
          title: `Previous`,
          type: S.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/Hm3rqxw86:default`,
          title: `Next`,
          type: S.CollectionReference,
        },
      }));
  }))();
}
export { Ue as a, Te as c, We as i, E as l, Pn as n, D as o, Ge as r, Ve as s, Nn as t, we as u };
//# sourceMappingURL=Hm3rqxw86.e4ZtCfxi.mjs.map
