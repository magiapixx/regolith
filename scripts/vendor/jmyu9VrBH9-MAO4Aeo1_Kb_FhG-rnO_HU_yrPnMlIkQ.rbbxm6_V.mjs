import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  b as r,
  c as i,
  j as ee,
  l as a,
  o,
  p as s,
  s as c,
  w as l,
} from "./react.Dxe_2v0O.mjs";
import { i as u, o as te, t as ne, w as d } from "./motion.x14TTX80.mjs";
import {
  A as f,
  At as p,
  D as re,
  G as m,
  M as h,
  Ot as g,
  Q as _,
  R as v,
  St as ie,
  a as y,
  b as ae,
  f as b,
  ft as oe,
  ht as x,
  i as S,
  mt as se,
  n as ce,
  tt as C,
  ut as le,
  vt as ue,
  w as de,
  x as w,
  yt as fe,
  z as T,
} from "./framer.B_dFn1Dy.mjs";
import { i as E, n as D, r as O, t as pe } from "./BZfzxDIFj.BOz5J9aV.mjs";
import { i as k, n as A, r as me, t as he } from "./sgPoc0pBr.CzO-fPYl.mjs";
import { i as ge, n as _e, r as ve, t as ye } from "./QBH04D9Fp.Cxh61-Al.mjs";
import { n as be, t as j } from "./qZG6gxxYn.Cw3NaZi3.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./ZzaupDdQf.xsCiAEgE.mjs";
import { n as Te, t as M } from "./NoteContents.DBF69HPm.mjs";
import { n as Ee, t as De } from "./uEdeg38yY.CmMmnlpz.mjs";
import { n as Oe, r as ke } from "./UUY6KrXpr.GUNSDN_y.mjs";
var N, P, Ae, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, je;
function Me() {
  return (Me = e(() => {
    (c(),
      m(),
      ne(),
      l(),
      be(),
      Te(),
      Ee(),
      E(),
      ge(),
      k(),
      xe(),
      Oe(),
      (N = v(j)),
      (P = p(y)),
      (Ae = v(M)),
      (F = p(d.div)),
      (I = {
        dsob73OUL: `(min-width: 810px) and (max-width: 1199.98px)`,
        dztg5XiVT: `(min-width: 1200px)`,
        WKEQI_n9y: `(max-width: 809.98px)`,
      }),
      (L = () => typeof document < `u`),
      (R = []),
      (z = `framer-GloJv`),
      (B = {
        dsob73OUL: `framer-v-3ql9vm`,
        dztg5XiVT: `framer-v-gy9i21`,
        WKEQI_n9y: `framer-v-7jcyvu`,
      }),
      (V = (e, t, n) => (e && t ? `position` : n)),
      (H = {
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
      (U = { delay: 0, duration: 0.9, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (W = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: U,
        x: 0,
        y: 22,
      }),
      (G = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (K = () => ({
        from: { alias: `EqYtts6a6`, data: De, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `EqYtts6a6`, name: `FvQ7gny4C`, type: `Identifier` },
          { collection: `EqYtts6a6`, name: `eupFO3Ssh`, type: `Identifier` },
          { collection: `EqYtts6a6`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `EqYtts6a6`, name: `eupFO3Ssh`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `privacy` },
          type: `BinaryOperation`,
        },
      })),
      (q = ({ query: e, pageSize: t, children: n }) => n(ie(e))),
      (J = { Desktop: `dztg5XiVT`, Phone: `WKEQI_n9y`, Tablet: `dsob73OUL` }),
      (Y = ({ value: e }) =>
        x()
          ? null
          : /*#__PURE__*/ o(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (X = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: J[r.variant] ?? r.variant ?? `dztg5XiVT`,
      })),
      (Z = /*#__PURE__*/ s(function (e, s) {
        let c = r(null),
          l = s ?? c;
        n();
        let { activeLocale: ne, contentLocale: p, setLocale: re } = ue(),
          m = le(),
          { style: h, className: g, layoutId: _, variant: v, ...ie } = X(e),
          x = ee(() => ke({}, p), [p]);
        fe(x);
        let [C, T] = se(v, I, !1),
          E = f(z, we, he, pe, ye),
          D = t(b)?.isLayoutTemplate,
          O = !!t(te)?.transition?.layout,
          k = V(D, O),
          A = () => !L() || ![`dsob73OUL`, `WKEQI_n9y`].includes(C);
        return (
          oe({}),
          /*#__PURE__*/ o(b.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: J,
              primaryVariantId: `dztg5XiVT`,
              variantClassNames: B,
            },
            children: /*#__PURE__*/ a(u, {
              id: _ ?? `UUY6KrXpr`,
              children: [
                /*#__PURE__*/ o(Y, { value: `html body { background: rgb(243, 241, 236); }` }),
                /*#__PURE__*/ a(d.div, {
                  ...ie,
                  className: f(E, `framer-gy9i21`, g),
                  ref: l,
                  style: { ...h },
                  children: [
                    /*#__PURE__*/ o(d.section, {
                      className: `framer-eep38x`,
                      "data-framer-name": `Page Header`,
                      layout: k,
                      children: /*#__PURE__*/ o(`div`, {
                        className: `framer-wp7086`,
                        "data-framer-name": `Wrap`,
                        children: /*#__PURE__*/ o(w, {
                          breakpoint: C,
                          overrides: {
                            dsob73OUL: {
                              width: `calc(min(${m?.width || `100vw`}, 1356.8px) - 51.84px)`,
                              y: (m?.y || 0) + 132.06,
                            },
                            WKEQI_n9y: {
                              width: `calc(min(${m?.width || `100vw`}, 1356.8px) - 32px)`,
                              y: (m?.y || 0) + 123,
                            },
                          },
                          children: /*#__PURE__*/ o(S, {
                            height: 420,
                            width: `calc(min(${m?.width || `100vw`}, 1356.8px) - 76.8px)`,
                            y: (m?.y || 0) + 142.2,
                            children: /*#__PURE__*/ o(P, {
                              __framer__animate: { transition: U },
                              __framer__animateOnce: !0,
                              __framer__enter: H,
                              __framer__exit: W,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.1,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-w7p65y-container`,
                              nodeId: `bMToL3Kuo`,
                              rendersWithMotion: !0,
                              scopeId: `UUY6KrXpr`,
                              children: /*#__PURE__*/ o(w, {
                                breakpoint: C,
                                overrides: {
                                  dsob73OUL: { variant: G(`ZJj4b3Jj3`) },
                                  WKEQI_n9y: { variant: G(`M118LKJQE`) },
                                },
                                children: /*#__PURE__*/ o(j, {
                                  CGwlWG4ol: `Focus`,
                                  FG3t9FWa8: `hello@refolith.com`,
                                  HBTbh9G8O: !1,
                                  height: `100%`,
                                  hMZ105swj: `28 September 2026`,
                                  id: `bMToL3Kuo`,
                                  iSNc6W9hP: !1,
                                  layoutId: `bMToL3Kuo`,
                                  MK178g8ug: `Questions`,
                                  mSN3imh79: `Homes`,
                                  nlQbxAcuC: !1,
                                  OBv5F6rMT: `What we collect when you call, book or have work done, how we use it and the choices you have. In short: only what the job needs, never sold.`,
                                  oTs3glLJw: `Last updated`,
                                  p7daXTSXv: !1,
                                  pcZW_xPpm: `Discuss your project`,
                                  SgWelmIDH: `Discuss your project`,
                                  SRo9k93eF: `For questions about how Regolith Construction handles information shared through this website, contact hello@refolith.com.`,
                                  style: { width: `100%` },
                                  UBqoV3kz1: !0,
                                  variant: G(`QTVxuDfoy`),
                                  VO_ZPpF3b: `For questions about how Regolith Construction handles information shared through this website, contact hello@refolith.com.`,
                                  width: `100%`,
                                  YDXaX92M1: `For questions about how Regolith Construction handles information shared through this website, contact hello@refolith.com.`,
                                  ZFZUX5Tw2: `By agreement`,
                                  ZtLWbYge9: `Project terms`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ o(d.section, {
                      className: `framer-1djt0ld`,
                      "data-framer-name": `Legal`,
                      layout: k,
                      children: /*#__PURE__*/ a(`div`, {
                        className: `framer-1bd1q81`,
                        "data-framer-name": `Grid`,
                        children: [
                          /*#__PURE__*/ o(F, {
                            __framer__animate: { transition: U },
                            __framer__animateOnce: !0,
                            __framer__enter: H,
                            __framer__exit: W,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.1,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1dukcj6`,
                            "data-framer-name": `Contents Col`,
                            children: /*#__PURE__*/ o(S, {
                              children: /*#__PURE__*/ o(y, {
                                className: `framer-1ue7408-container`,
                                "data-code-component-plugin-id": `api`,
                                isAuthoredByUser: !0,
                                nodeId: `ofJgJYXQZ`,
                                scopeId: `UUY6KrXpr`,
                                children: /*#__PURE__*/ o(M, {
                                  height: `100%`,
                                  id: `ofJgJYXQZ`,
                                  ink: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                  layoutId: `ofJgJYXQZ`,
                                  line: `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                  muted: `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                                  style: { width: `100%` },
                                  title: `On this page`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          /*#__PURE__*/ o(F, {
                            __framer__animate: { transition: U },
                            __framer__animateOnce: !0,
                            __framer__enter: H,
                            __framer__exit: W,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.1,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1ixqts3`,
                            "data-framer-name": `Body List`,
                            children: /*#__PURE__*/ o(ce, {
                              children: /*#__PURE__*/ o(q, {
                                query: K(),
                                children: (e, t, n) =>
                                  /*#__PURE__*/ o(i, {
                                    children: e?.map(
                                      ({ eupFO3Ssh: e, FvQ7gny4C: t, id: n }, r) => (
                                        (t ??= ``),
                                        (e ??= ``),
                                        /*#__PURE__*/ o(
                                          u,
                                          {
                                            id: `EqYtts6a6-${n}`,
                                            children: /*#__PURE__*/ o(ae.Provider, {
                                              value: { eupFO3Ssh: e },
                                              children: /*#__PURE__*/ o(de, {
                                                __fromCanvasComponent: !0,
                                                children: t,
                                                className: `framer-2v3a2g`,
                                                "data-framer-name": `Prose`,
                                                fonts: [`Inter`],
                                                stylesPresetsClassNames: {
                                                  h1: `framer-styles-preset-pw9ik2`,
                                                  h2: `framer-styles-preset-15heldj`,
                                                  h3: `framer-styles-preset-14m2lu`,
                                                  p: `framer-styles-preset-kk75i9`,
                                                },
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          },
                                          n
                                        )
                                      )
                                    ),
                                  }),
                              }),
                            }),
                          }),
                          A() &&
                            /*#__PURE__*/ o(F, {
                              __framer__animate: { transition: U },
                              __framer__animateOnce: !0,
                              __framer__enter: H,
                              __framer__exit: W,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.1,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-162yvwu hidden-3ql9vm hidden-7jcyvu`,
                              "data-framer-name": `Empty`,
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Q = [
        `.framer-GloJv.framer-e8a1rs, .framer-GloJv .framer-e8a1rs { display: block; }`,
        `.framer-GloJv.framer-gy9i21 { align-content: flex-start; align-items: flex-start; background-color: #f3f1ec; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-GloJv .framer-eep38x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 142.2px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-GloJv .framer-wp7086 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1356.8px; padding: 0px 38.4px 0px 38.4px; position: relative; width: 100%; }`,
        `.framer-GloJv .framer-w7p65y-container, .framer-GloJv .framer-1ue7408-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-GloJv .framer-1djt0ld { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 84px 0px 84px 0px; position: relative; width: 100%; }`,
        `.framer-GloJv .framer-1bd1q81 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1356.8px; padding: 0px 38.4px 0px 38.4px; position: relative; width: 100%; }`,
        `.framer-GloJv .framer-1dukcj6 { align-content: flex-start; align-items: flex-start; display: flex; flex: 3 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; width: 1px; }`,
        `.framer-GloJv .framer-1ixqts3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 8 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-GloJv .framer-2v3a2g { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-GloJv .framer-162yvwu { flex: 1 0 0px; height: 1px; position: relative; width: 1px; }`,
        ...Se,
        ...A,
        ...D,
        ..._e,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-GloJv.framer-gy9i21 { width: 810px; } .framer-GloJv .framer-eep38x { padding: 132.06px 0px 0px 0px; } .framer-GloJv .framer-wp7086 { padding: 0px 25.92px 0px 25.92px; } .framer-GloJv .framer-1djt0ld { padding: 64px 0px 64px 0px; } .framer-GloJv .framer-1bd1q81 { flex-direction: column; gap: 40px; padding: 0px 25.92px 0px 25.92px; } .framer-GloJv .framer-1dukcj6 { flex: none; max-width: 520px; position: relative; width: 100%; } .framer-GloJv .framer-1ixqts3 { flex: none; max-width: 714px; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-GloJv.framer-gy9i21 { width: 390px; } .framer-GloJv .framer-eep38x { padding: 123px 0px 0px 0px; } .framer-GloJv .framer-wp7086 { padding: 0px 16px 0px 16px; } .framer-GloJv .framer-1djt0ld { padding: 64px 0px 64px 0px; } .framer-GloJv .framer-1bd1q81 { flex-direction: column; gap: 40px; padding: 0px 16px 0px 16px; } .framer-GloJv .framer-1dukcj6 { flex: none; max-width: 520px; position: relative; width: 100%; } .framer-GloJv .framer-1ixqts3 { flex: none; width: 100%; }}`,
      ]),
      ($ = g(Z, Q, `framer-GloJv`)),
      ($.displayName = `For questions about how Regolith Construction handles information shared through this website, contact hello@refolith.com.`),
      ($.defaultProps = { height: 4125, width: 1200 }),
      re(
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
          ...N,
          ...Ae,
          ...T(Ce),
          ...T(me),
          ...T(O),
          ...T(ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = _.get(K(), n, r);
          return C([() => i.preload(), () => h(j, {}, t)], t);
        },
      }),
      (je = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerUUY6KrXpr`,
            slots: [],
            annotations: {
              framerDisplayContentsDiv: `false`,
              framerIntrinsicWidth: `1200`,
              framerLayoutTemplateFlowEffect: `true`,
              framerAutoSizeImages: `true`,
              framerIntrinsicHeight: `4125`,
              framerScrollSections: `false`,
              framerAcceptsLayoutTemplate: `true`,
              framerContractVersion: `1`,
              framerColorSyntax: `true`,
              framerImmutableVariables: `true`,
              framerResponsiveScreen: `true`,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"dsob73OUL":{"layout":["fixed","auto"]},"WKEQI_n9y":{"layout":["fixed","auto"]}}}`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Me();
export { je as __FramerMetadata__, $ as default, R as queryParamNames };
//# sourceMappingURL=jmyu9VrBH9-MAO4Aeo1_Kb_FhG-rnO_HU_yrPnMlIkQ.rbbxm6_V.mjs.map
