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
import { n as Oe, r as ke } from "./MzTQNt8iJ.CCHc-KHv.mjs";
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
        jAFvv0LTy: `(min-width: 810px) and (max-width: 1199.98px)`,
        jBAtE6IG4: `(max-width: 809.98px)`,
        mpESRITBa: `(min-width: 1200px)`,
      }),
      (L = () => typeof document < `u`),
      (R = []),
      (z = `framer-8XBlJ`),
      (B = {
        jAFvv0LTy: `framer-v-1qyds9d`,
        jBAtE6IG4: `framer-v-1uhhx73`,
        mpESRITBa: `framer-v-1gqgml9`,
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
        from: { alias: `Dcd9lpK_b`, data: De, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `Dcd9lpK_b`, name: `FvQ7gny4C`, type: `Identifier` },
          { collection: `Dcd9lpK_b`, name: `eupFO3Ssh`, type: `Identifier` },
          { collection: `Dcd9lpK_b`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `Dcd9lpK_b`, name: `eupFO3Ssh`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `accessibility` },
          type: `BinaryOperation`,
        },
      })),
      (q = ({ query: e, pageSize: t, children: n }) => n(ie(e))),
      (J = { Desktop: `mpESRITBa`, Phone: `jBAtE6IG4`, Tablet: `jAFvv0LTy` }),
      (Y = ({ value: e }) =>
        x()
          ? null
          : /*#__PURE__*/ o(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (X = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: J[r.variant] ?? r.variant ?? `mpESRITBa`,
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
          A = () => !L() || ![`jAFvv0LTy`, `jBAtE6IG4`].includes(C);
        return (
          oe({}),
          /*#__PURE__*/ o(b.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: J,
              primaryVariantId: `mpESRITBa`,
              variantClassNames: B,
            },
            children: /*#__PURE__*/ a(u, {
              id: _ ?? `MzTQNt8iJ`,
              children: [
                /*#__PURE__*/ o(Y, { value: `html body { background: rgb(243, 241, 236); }` }),
                /*#__PURE__*/ a(d.div, {
                  ...ie,
                  className: f(E, `framer-1gqgml9`, g),
                  ref: l,
                  style: { ...h },
                  children: [
                    /*#__PURE__*/ o(d.section, {
                      className: `framer-108cjvj`,
                      "data-framer-name": `Page Header`,
                      layout: k,
                      children: /*#__PURE__*/ o(`div`, {
                        className: `framer-17jlv75`,
                        "data-framer-name": `Wrap`,
                        children: /*#__PURE__*/ o(w, {
                          breakpoint: C,
                          overrides: {
                            jAFvv0LTy: {
                              width: `calc(min(${m?.width || `100vw`}, 1356.8px) - 51.84px)`,
                              y: (m?.y || 0) + 132.06,
                            },
                            jBAtE6IG4: {
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
                              className: `framer-h8qond-container`,
                              nodeId: `pQMnHnnzP`,
                              rendersWithMotion: !0,
                              scopeId: `MzTQNt8iJ`,
                              children: /*#__PURE__*/ o(w, {
                                breakpoint: C,
                                overrides: {
                                  jAFvv0LTy: { variant: G(`ZJj4b3Jj3`) },
                                  jBAtE6IG4: { variant: G(`M118LKJQE`) },
                                },
                                children: /*#__PURE__*/ o(j, {
                                  CGwlWG4ol: `Focus`,
                                  FG3t9FWa8: `hello@haldenroofing.example`,
                                  HBTbh9G8O: !1,
                                  height: `100%`,
                                  hMZ105swj: `28 September 2026`,
                                  id: `pQMnHnnzP`,
                                  iSNc6W9hP: !1,
                                  layoutId: `pQMnHnnzP`,
                                  MK178g8ug: `Questions`,
                                  mSN3imh79: `Homes`,
                                  nlQbxAcuC: !1,
                                  OBv5F6rMT: `How this website is built to work for everyone, where it falls short, and how to reach us without it.`,
                                  oTs3glLJw: `Last updated`,
                                  p7daXTSXv: !1,
                                  pcZW_xPpm: `Estimate a replacement`,
                                  SgWelmIDH: `Discuss your project`,
                                  SRo9k93eF: `Accessibility statement`,
                                  style: { width: `100%` },
                                  UBqoV3kz1: !0,
                                  variant: G(`QTVxuDfoy`),
                                  VO_ZPpF3b: `Accessibility statement`,
                                  width: `100%`,
                                  YDXaX92M1: `(Accessibility)`,
                                  ZFZUX5Tw2: `By agreement`,
                                  ZtLWbYge9: `Warranty`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ o(d.section, {
                      className: `framer-ywfoj9`,
                      "data-framer-name": `Legal`,
                      layout: k,
                      children: /*#__PURE__*/ a(`div`, {
                        className: `framer-1xs73la`,
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
                            className: `framer-1oznmbu`,
                            "data-framer-name": `Contents Col`,
                            children: /*#__PURE__*/ o(S, {
                              children: /*#__PURE__*/ o(y, {
                                className: `framer-htgxtk-container`,
                                "data-code-component-plugin-id": `api`,
                                isAuthoredByUser: !0,
                                nodeId: `q6RtlHXqS`,
                                scopeId: `MzTQNt8iJ`,
                                children: /*#__PURE__*/ o(M, {
                                  height: `100%`,
                                  id: `q6RtlHXqS`,
                                  ink: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                  layoutId: `q6RtlHXqS`,
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
                            className: `framer-gqo8md`,
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
                                            id: `Dcd9lpK_b-${n}`,
                                            children: /*#__PURE__*/ o(ae.Provider, {
                                              value: { eupFO3Ssh: e },
                                              children: /*#__PURE__*/ o(de, {
                                                __fromCanvasComponent: !0,
                                                children: t,
                                                className: `framer-1vpzam3`,
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
                              className: `framer-ju4e8d hidden-1qyds9d hidden-1uhhx73`,
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
        `.framer-8XBlJ.framer-1s32tlo, .framer-8XBlJ .framer-1s32tlo { display: block; }`,
        `.framer-8XBlJ.framer-1gqgml9 { align-content: flex-start; align-items: flex-start; background-color: #f3f1ec; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-8XBlJ .framer-108cjvj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 142.2px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-8XBlJ .framer-17jlv75 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1356.8px; padding: 0px 38.4px 0px 38.4px; position: relative; width: 100%; }`,
        `.framer-8XBlJ .framer-h8qond-container, .framer-8XBlJ .framer-htgxtk-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-8XBlJ .framer-ywfoj9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 84px 0px 84px 0px; position: relative; width: 100%; }`,
        `.framer-8XBlJ .framer-1xs73la { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1356.8px; padding: 0px 38.4px 0px 38.4px; position: relative; width: 100%; }`,
        `.framer-8XBlJ .framer-1oznmbu { align-content: flex-start; align-items: flex-start; display: flex; flex: 3 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; width: 1px; }`,
        `.framer-8XBlJ .framer-gqo8md { align-content: flex-start; align-items: flex-start; display: flex; flex: 8 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-8XBlJ .framer-1vpzam3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-8XBlJ .framer-ju4e8d { flex: 1 0 0px; height: 1px; position: relative; width: 1px; }`,
        ...Se,
        ...A,
        ...D,
        ..._e,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-8XBlJ.framer-1gqgml9 { width: 810px; } .framer-8XBlJ .framer-108cjvj { padding: 132.06px 0px 0px 0px; } .framer-8XBlJ .framer-17jlv75 { padding: 0px 25.92px 0px 25.92px; } .framer-8XBlJ .framer-ywfoj9 { padding: 64px 0px 64px 0px; } .framer-8XBlJ .framer-1xs73la { flex-direction: column; gap: 40px; padding: 0px 25.92px 0px 25.92px; } .framer-8XBlJ .framer-1oznmbu { flex: none; max-width: 520px; position: relative; width: 100%; } .framer-8XBlJ .framer-gqo8md { flex: none; max-width: 714px; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-8XBlJ.framer-1gqgml9 { width: 390px; } .framer-8XBlJ .framer-108cjvj { padding: 123px 0px 0px 0px; } .framer-8XBlJ .framer-17jlv75 { padding: 0px 16px 0px 16px; } .framer-8XBlJ .framer-ywfoj9 { padding: 64px 0px 64px 0px; } .framer-8XBlJ .framer-1xs73la { flex-direction: column; gap: 40px; padding: 0px 16px 0px 16px; } .framer-8XBlJ .framer-1oznmbu { flex: none; max-width: 520px; position: relative; width: 100%; } .framer-8XBlJ .framer-gqo8md { flex: none; width: 100%; }}`,
      ]),
      ($ = g(Z, Q, `framer-8XBlJ`)),
      ($.displayName = `Accessibility`),
      ($.defaultProps = { height: 2874, width: 1200 }),
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
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerMzTQNt8iJ`,
            slots: [],
            annotations: {
              framerAcceptsLayoutTemplate: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicHeight: `2874`,
              framerAutoSizeImages: `true`,
              framerIntrinsicWidth: `1200`,
              framerScrollSections: `false`,
              framerDisplayContentsDiv: `false`,
              framerContractVersion: `1`,
              framerColorSyntax: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"jAFvv0LTy":{"layout":["fixed","auto"]},"jBAtE6IG4":{"layout":["fixed","auto"]}}}`,
              framerImmutableVariables: `true`,
              framerResponsiveScreen: `true`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Me();
export { je as __FramerMetadata__, $ as default, R as queryParamNames };
//# sourceMappingURL=t1poIHwEDXqMZ_9ZF9jAnZUfJQ_jlcXqXc_FZlWR0kw.CotabkdS.mjs.map
