import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  P as r,
  _ as i,
  b as a,
  j as o,
  l as s,
  o as c,
  p as l,
  s as ee,
  w as u,
} from "./react.Dxe_2v0O.mjs";
import { i as te, o as d, t as f, w as p } from "./motion.x14TTX80.mjs";
import {
  A as ne,
  B as re,
  D as m,
  Dt as ie,
  G as h,
  M as g,
  O as _,
  Ot as v,
  R as y,
  T as ae,
  i as oe,
  m as se,
  o as b,
  tt as ce,
  ut as le,
  vt as ue,
  w as x,
  z as S,
} from "./framer.B_dFn1Dy.mjs";
import { H as C, U as w, V as de, W as T, i as E, r as D } from "./toplevel-deps.CDw6GExF.mjs";
import {
  a as fe,
  c as O,
  i as k,
  n as A,
  o as j,
  r as M,
  s as N,
  t as pe,
} from "./vI2CBrBs4.COrWOcnr.mjs";
import { i as P, n as F, r as me, t as he } from "./sgPoc0pBr.CzO-fPYl.mjs";
function I(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var L, R, z, B, V, H, U, W, G, ge, K, _e, ve, q, J, Y;
function X() {
  return (X = e(() => {
    (ee(),
      h(),
      f(),
      u(),
      P(),
      O(),
      k(),
      T(),
      E(),
      (L = y(D)),
      (R = [`V3cWFf9iM`, `jVhZG9xO5`, `Frx_p7cag`]),
      (z = `framer-FsFhM`),
      (B = {
        Frx_p7cag: `framer-v-28b2wj`,
        jVhZG9xO5: `framer-v-k3a0e3`,
        V3cWFf9iM: `framer-v-drdi2z`,
      }),
      (V = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (U = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (W = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(d.Provider, { value: a, children: n });
      }),
      (G = { Desktop: `V3cWFf9iM`, Phone: `Frx_p7cag`, Tablet: `jVhZG9xO5` }),
      (ge = p.create(r)),
      (K = (e, t) => {
        let [n, r] = i(e),
          [a, o] = i(e);
        return t ? [e, t] : (e !== a && (r(e), o(e)), [n, r]);
      }),
      (_e = ({
        button1: e,
        button1Link: t,
        button2: n,
        button2Arrow: r,
        button2Link: i,
        height: a,
        id: o,
        image: s,
        label: c,
        showButton2: l,
        text: ee,
        title: u,
        width: te,
        ...d
      }) => ({
        ...d,
        c90VE0r4p: l ?? d.c90VE0r4p ?? !0,
        egt2DgeHC:
          ee ??
          d.egt2DgeHC ??
          `A free 45-minute inspection, a photo report within 24 hours and, if you want one, a fixed written price within 48.`,
        eWOxqccVh: i ?? d.eWOxqccVh,
        IeWSqieKT: r ?? d.IeWSqieKT ?? !1,
        kO8dlAD8T: n ?? d.kO8dlAD8T ?? `Call (406) 555-0142`,
        lpx6Y7_Ie: t ?? d.lpx6Y7_Ie,
        spYOD0ZH5: u ?? d.spYOD0ZH5 ?? `Get your roof looked at before the next storm does.`,
        V_MeO9hxh: e ?? d.V_MeO9hxh ?? `Book a free inspection`,
        variant: G[d.variant] ?? d.variant ?? `V3cWFf9iM`,
        VtZC0VDH4: c ?? d.VtZC0VDH4 ?? `(Free inspection)`,
        Y7gwfGTSN: s ??
          d.Y7gwfGTSN ?? {
            pixelHeight: 1350,
            pixelWidth: 2400,
            src: `https://framerusercontent.com/images/Q0oeCiKgFo5t5Gu5sCekJSuOB8.webp?width=2400&height=1350`,
            srcSet: `https://framerusercontent.com/images/Q0oeCiKgFo5t5Gu5sCekJSuOB8.webp?scale-down-to=512&width=2400&height=1350 512w,https://framerusercontent.com/images/Q0oeCiKgFo5t5Gu5sCekJSuOB8.webp?scale-down-to=1024&width=2400&height=1350 1024w,https://framerusercontent.com/images/Q0oeCiKgFo5t5Gu5sCekJSuOB8.webp?scale-down-to=2048&width=2400&height=1350 2048w,https://framerusercontent.com/images/Q0oeCiKgFo5t5Gu5sCekJSuOB8.webp?width=2400&height=1350 2400w`,
          },
      })),
      (ve = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = /*#__PURE__*/ l(function (e, t) {
        let i = a(null),
          o = t ?? i,
          l = n(),
          { activeLocale: ee, contentLocale: u, setLocale: d } = ue(),
          f = le(),
          {
            style: m,
            className: h,
            layoutId: g,
            variant: _,
            VtZC0VDH4: v,
            spYOD0ZH5: y,
            egt2DgeHC: b,
            V_MeO9hxh: ce,
            onV_MeO9hxhChange: S,
            lpx6Y7_Ie: C,
            kO8dlAD8T: w,
            onkO8dlAD8TChange: T,
            eWOxqccVh: E,
            c90VE0r4p: O,
            IeWSqieKT: k,
            onIeWSqieKTChange: A,
            Y7gwfGTSN: j,
            ...M
          } = _e(e),
          [N, P] = K(ce, S),
          [F, me] = K(w, T),
          [L, G] = K(k, A),
          {
            baseVariant: q,
            classNames: J,
            clearLoadingGesture: Y,
            gestureHandlers: X,
            gestureVariant: Z,
            isLoading: ye,
            setGestureState: be,
            setVariant: xe,
            variants: Q,
          } = ie({
            cycleOrder: R,
            defaultVariant: `V3cWFf9iM`,
            ref: o,
            variant: _,
            variantClassNames: B,
          }),
          $ = ve(e, Q),
          Se = ne(z, de, he, fe, pe);
        return /*#__PURE__*/ c(te, {
          id: g ?? l,
          children: /*#__PURE__*/ c(ge, {
            animate: Q,
            initial: !1,
            children: /*#__PURE__*/ c(W, {
              value: V,
              children: /*#__PURE__*/ s(p.div, {
                ...M,
                ...X,
                className: ne(Se, `framer-drdi2z`, h, J),
                "data-framer-name": `Desktop`,
                layoutDependency: $,
                layoutId: `V3cWFf9iM`,
                ref: o,
                style: {
                  backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                  borderBottomLeftRadius: 22,
                  borderBottomRightRadius: 22,
                  borderTopLeftRadius: 22,
                  borderTopRightRadius: 22,
                  ...m,
                },
                ...I(
                  {
                    Frx_p7cag: { "data-framer-name": `Phone` },
                    jVhZG9xO5: { "data-framer-name": `Tablet` },
                  },
                  q,
                  Z
                ),
                children: [
                  /*#__PURE__*/ c(se, {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      loading: re(f?.y || 0),
                      pixelHeight: 1350,
                      pixelWidth: 2400,
                      sizes: f?.width || `100vw`,
                      ...H(j),
                    },
                    className: `framer-1exaawj`,
                    "data-framer-name": `Photo`,
                    layoutDependency: $,
                    layoutId: `Hc0WOKYfZ`,
                    style: { opacity: 0.42 },
                  }),
                  /*#__PURE__*/ c(p.div, {
                    className: `framer-zxx6v4`,
                    "data-framer-name": `Shade`,
                    layoutDependency: $,
                    layoutId: `nyjAyoieX`,
                    style: {
                      background: `linear-gradient(90deg, rgba(14, 14, 16, 0.92) 0%, rgba(14, 14, 16, 0.7) 55.00000000000001%, rgba(14, 14, 16, 0.5) 100%)`,
                    },
                  }),
                  /*#__PURE__*/ s(p.div, {
                    className: `framer-xb0i2w`,
                    "data-framer-name": `Inner`,
                    layoutDependency: $,
                    layoutId: `UZTUWbA5N`,
                    children: [
                      /*#__PURE__*/ s(p.div, {
                        className: `framer-10k4tft`,
                        "data-framer-name": `Heading`,
                        layoutDependency: $,
                        layoutId: `zrWUOreeJ`,
                        children: [
                          /*#__PURE__*/ c(x, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ c(r, {
                              children: /*#__PURE__*/ c(p.p, {
                                className: `framer-styles-preset-47y0yi`,
                                "data-styles-preset": `WcNYxFkzx`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d))`,
                                },
                                children: `Label`,
                              }),
                            }),
                            className: `framer-1jfcrxp`,
                            "data-framer-name": `Label`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `oobdNTXnb`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                            },
                            text: v,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ c(x, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ c(r, {
                              children: /*#__PURE__*/ c(p.h2, {
                                className: `framer-styles-preset-15heldj`,
                                "data-styles-preset": `sgPoc0pBr`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-1of0zx5, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                },
                                children: `Get your roof looked at before the next storm does.`,
                              }),
                            }),
                            className: `framer-j1nn0q`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `TsLO7LaVL`,
                            style: {
                              "--extracted-1of0zx5": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                            },
                            text: y,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      /*#__PURE__*/ s(p.div, {
                        className: `framer-1iv4zb5`,
                        "data-framer-name": `Side`,
                        layoutDependency: $,
                        layoutId: `I25ot8nCX`,
                        children: [
                          /*#__PURE__*/ c(x, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ c(r, {
                              children: /*#__PURE__*/ c(p.p, {
                                className: `framer-styles-preset-12clcwd`,
                                "data-styles-preset": `tR22IXYs0`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.76))`,
                                },
                                children: `A free 45-minute inspection, a photo report within 24 hours and, if you want one, a fixed written price within 48.`,
                              }),
                            }),
                            className: `framer-jweb55`,
                            "data-framer-name": `Side Text`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `WEuthhgww`,
                            style: { "--extracted-r6o4lv": `rgba(255, 255, 255, 0.76)` },
                            text: b,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...I(
                              {
                                Frx_p7cag: {
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(p.p, {
                                      className: `framer-styles-preset-1eflcgp`,
                                      "data-styles-preset": `vI2CBrBs4`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.76))`,
                                      },
                                      children: `A free 45-minute inspection, a photo report within 24 hours and, if you want one, a fixed written price within 48.`,
                                    }),
                                  }),
                                },
                              },
                              q,
                              Z
                            ),
                          }),
                          /*#__PURE__*/ s(p.div, {
                            className: `framer-bashp5`,
                            "data-framer-name": `Buttons`,
                            layoutDependency: $,
                            layoutId: `tvSD4YkAE`,
                            children: [
                              /*#__PURE__*/ c(oe, {
                                height: 56,
                                ...I(
                                  {
                                    Frx_p7cag: {
                                      width: `calc(min(${f?.width || `100vw`}, 1356.8px) - 32px)`,
                                    },
                                  },
                                  q,
                                  Z
                                ),
                                children: /*#__PURE__*/ c(ae, {
                                  className: `framer-1e5qdue-container`,
                                  layoutDependency: $,
                                  layoutId: `kOdsz7820-container`,
                                  nodeId: `kOdsz7820`,
                                  rendersWithMotion: !0,
                                  scopeId: `V5piL6kpl`,
                                  children: /*#__PURE__*/ c(D, {
                                    A7Od1mPPH: !1,
                                    height: `100%`,
                                    id: `kOdsz7820`,
                                    KLKq8yi1U: C,
                                    l9aoY6pHx: N,
                                    layoutId: `kOdsz7820`,
                                    onl9aoY6pHxChange: P,
                                    SbaAZw1tX: !0,
                                    style: { height: `100%` },
                                    variant: U(`YPxHtS2ti`),
                                    width: `100%`,
                                    ...I(
                                      { Frx_p7cag: { style: { height: `100%`, width: `100%` } } },
                                      q,
                                      Z
                                    ),
                                  }),
                                }),
                              }),
                              O !== !1 &&
                                /*#__PURE__*/ c(oe, {
                                  height: 56,
                                  ...I(
                                    {
                                      Frx_p7cag: {
                                        width: `calc(min(${f?.width || `100vw`}, 1356.8px) - 32px)`,
                                      },
                                    },
                                    q,
                                    Z
                                  ),
                                  children: /*#__PURE__*/ c(ae, {
                                    className: `framer-4ahxln-container`,
                                    layoutDependency: $,
                                    layoutId: `LcciM6BpL-container`,
                                    nodeId: `LcciM6BpL`,
                                    rendersWithMotion: !0,
                                    scopeId: `V5piL6kpl`,
                                    children: /*#__PURE__*/ c(D, {
                                      A7Od1mPPH: !1,
                                      height: `100%`,
                                      id: `LcciM6BpL`,
                                      KLKq8yi1U: E,
                                      l9aoY6pHx: F,
                                      layoutId: `LcciM6BpL`,
                                      onl9aoY6pHxChange: me,
                                      onSbaAZw1tXChange: G,
                                      SbaAZw1tX: L,
                                      style: { height: `100%` },
                                      variant: U(`yIUj2lyo3`),
                                      width: `100%`,
                                      ...I(
                                        { Frx_p7cag: { style: { height: `100%`, width: `100%` } } },
                                        q,
                                        Z
                                      ),
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (J = [
        `.framer-FsFhM.framer-r1o1lw, .framer-FsFhM .framer-r1o1lw { display: block; }`,
        `.framer-FsFhM.framer-drdi2z { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 96px 0px 96px 0px; position: relative; width: 1176px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-FsFhM .framer-1exaawj { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-FsFhM .framer-zxx6v4 { bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; }`,
        `.framer-FsFhM .framer-xb0i2w { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-start; max-width: 1356.8px; padding: 0px 38.4px 0px 38.4px; position: relative; width: 100%; }`,
        `.framer-FsFhM .framer-10k4tft { align-content: flex-start; align-items: flex-start; display: flex; flex: 7 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-FsFhM .framer-1jfcrxp { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-FsFhM .framer-j1nn0q { flex: none; height: auto; max-width: 554px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-FsFhM .framer-1iv4zb5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-FsFhM .framer-jweb55 { flex: none; height: auto; max-width: 462px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-FsFhM .framer-bashp5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-FsFhM .framer-1e5qdue-container, .framer-FsFhM .framer-4ahxln-container { flex: none; height: 56px; position: relative; width: auto; }`,
        `.framer-FsFhM.framer-v-k3a0e3.framer-drdi2z { padding: 64.8px 0px 64.8px 0px; width: 786px; }`,
        `.framer-FsFhM.framer-v-k3a0e3 .framer-xb0i2w { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; padding: 0px 25.92px 0px 25.92px; }`,
        `.framer-FsFhM.framer-v-k3a0e3 .framer-10k4tft, .framer-FsFhM.framer-v-k3a0e3 .framer-1iv4zb5, .framer-FsFhM.framer-v-28b2wj .framer-10k4tft, .framer-FsFhM.framer-v-28b2wj .framer-1iv4zb5 { flex: none; width: 100%; }`,
        `.framer-FsFhM.framer-v-k3a0e3 .framer-j1nn0q { max-width: 374px; }`,
        `.framer-FsFhM.framer-v-28b2wj.framer-drdi2z { padding: 64px 0px 64px 0px; width: 374px; }`,
        `.framer-FsFhM.framer-v-28b2wj .framer-xb0i2w { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; padding: 0px 16px 0px 16px; }`,
        `.framer-FsFhM.framer-v-28b2wj .framer-j1nn0q { max-width: 342px; }`,
        `.framer-FsFhM.framer-v-28b2wj .framer-1e5qdue-container, .framer-FsFhM.framer-v-28b2wj .framer-4ahxln-container { width: 100%; }`,
        ...C,
        ...F,
        ...j,
        ...A,
      ]),
      (Y = v(q, J, `framer-FsFhM`)),
      (Y.displayName = `CTA Band`),
      (Y.defaultProps = { height: 422, width: 1176 }),
      _(Y, {
        variant: {
          options: [`V3cWFf9iM`, `jVhZG9xO5`, `Frx_p7cag`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: b.Enum,
        },
        VtZC0VDH4: { defaultValue: `(Free inspection)`, title: `Label`, type: b.String },
        onVtZC0VDH4Change: { changes: `VtZC0VDH4`, type: b.ChangeHandler },
        spYOD0ZH5: {
          defaultValue: `Get your roof looked at before the next storm does.`,
          title: `Title`,
          type: b.String,
        },
        onspYOD0ZH5Change: { changes: `spYOD0ZH5`, type: b.ChangeHandler },
        egt2DgeHC: {
          defaultValue: `A free 45-minute inspection, a photo report within 24 hours and, if you want one, a fixed written price within 48.`,
          title: `Text`,
          type: b.String,
        },
        onegt2DgeHCChange: { changes: `egt2DgeHC`, type: b.ChangeHandler },
        V_MeO9hxh: { defaultValue: `Book a free inspection`, title: `Button 1`, type: b.String },
        onV_MeO9hxhChange: { changes: `V_MeO9hxh`, type: b.ChangeHandler },
        lpx6Y7_Ie: { title: `Button 1 Link`, type: b.Link },
        kO8dlAD8T: { defaultValue: `Call (406) 555-0142`, title: `Button 2`, type: b.String },
        onkO8dlAD8TChange: { changes: `kO8dlAD8T`, type: b.ChangeHandler },
        eWOxqccVh: { title: `Button 2 Link`, type: b.Link },
        c90VE0r4p: { defaultValue: !0, title: `Show Button 2`, type: b.Boolean },
        onc90VE0r4pChange: { changes: `c90VE0r4p`, type: b.ChangeHandler },
        IeWSqieKT: { defaultValue: !1, title: `Button 2 Arrow`, type: b.Boolean },
        onIeWSqieKTChange: { changes: `IeWSqieKT`, type: b.ChangeHandler },
        Y7gwfGTSN: {
          __defaultAssetReference: `data:framer/asset-reference,Q0oeCiKgFo5t5Gu5sCekJSuOB8.webp?originalFilename=imported.webp&width=2400&height=1350`,
          title: `Image`,
          type: b.ResponsiveImage,
        },
      }),
      m(
        Y,
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
          ...L,
          ...S(w),
          ...S(me),
          ...S(N),
          ...S(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = { load: (e, t) => ce([() => g(D, {}, t)], t) }));
  }))();
}
export { X as n, Y as t };
//# sourceMappingURL=V5piL6kpl.B6Yi6Dm0.mjs.map
