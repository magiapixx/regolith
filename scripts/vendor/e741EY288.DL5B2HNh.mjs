import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  P as r,
  b as i,
  j as a,
  l as o,
  o as s,
  p as c,
  s as l,
  w as u,
} from "./react.Dxe_2v0O.mjs";
import { i as d, o as f, t as p, w as m } from "./motion.x14TTX80.mjs";
import {
  A as h,
  D as g,
  Dt as _,
  G as v,
  O as y,
  Ot as b,
  R as x,
  g as S,
  o as C,
  ut as w,
  vt as T,
  w as E,
} from "./framer.B_dFn1Dy.mjs";
import { N as D, P as O } from "./toplevel-deps.CDw6GExF.mjs";
function k(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var A, j, M, N, P, F, I, L, R, z, B, V;
function H() {
  return (H = e(() => {
    (l(),
      v(),
      p(),
      u(),
      O(),
      (A = x(D)),
      (j = { DNypnEf1e: { hover: !0 }, PYIYwpqhe: { hover: !0 }, Zqwx6QUiP: { hover: !0 } }),
      (M = [`Zqwx6QUiP`, `PYIYwpqhe`, `DNypnEf1e`]),
      (N = `framer-gKhae`),
      (P = {
        DNypnEf1e: `framer-v-k90ncj`,
        PYIYwpqhe: `framer-v-10lhymh`,
        Zqwx6QUiP: `framer-v-1m1twcu`,
      }),
      (F = { delay: 0, duration: 0.55, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (I = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(f.Provider, { value: o, children: n });
      }),
      (L = { Hi: `DNypnEf1e`, Ink: `Zqwx6QUiP`, Light: `PYIYwpqhe` }),
      (R = m.create(r)),
      (z = ({ height: e, id: t, label: n, link: r, width: i, ...a }) => ({
        ...a,
        DEzUmrPW8: r ?? a.DEzUmrPW8,
        rSCTVchPX: n ?? a.rSCTVchPX ?? `Estimate a replacement`,
        variant: L[a.variant] ?? a.variant ?? `Zqwx6QUiP`,
      })),
      (B = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = b(
        /* @__PURE__ */ c(function (e, t) {
          let a = i(null),
            c = t ?? a,
            l = n(),
            { activeLocale: u, contentLocale: f, setLocale: p } = T();
          w();
          let {
              style: g,
              className: v,
              layoutId: y,
              variant: b,
              rSCTVchPX: x,
              DEzUmrPW8: C,
              ...O
            } = z(e),
            {
              baseVariant: A,
              classNames: L,
              clearLoadingGesture: V,
              gestureHandlers: H,
              gestureVariant: U,
              isLoading: W,
              setGestureState: G,
              setVariant: K,
              variants: q,
            } = _({
              cycleOrder: M,
              defaultVariant: `Zqwx6QUiP`,
              enabledGestures: j,
              ref: c,
              variant: b,
              variantClassNames: P,
            }),
            J = B(e, q),
            Y = h(N);
          return /*#__PURE__*/ s(d, {
            id: y ?? l,
            children: /*#__PURE__*/ s(R, {
              animate: q,
              initial: !1,
              children: /*#__PURE__*/ s(I, {
                value: F,
                children: /*#__PURE__*/ s(S, {
                  href: C,
                  motionChild: !0,
                  nodeId: `Zqwx6QUiP`,
                  scopeId: `e741EY288`,
                  children: /*#__PURE__*/ o(m.a, {
                    ...O,
                    ...H,
                    className: `${h(Y, `framer-1m1twcu`, v, L)} framer-5u2udj`,
                    "data-border": !0,
                    "data-framer-name": `Ink`,
                    layoutDependency: J,
                    layoutId: `Zqwx6QUiP`,
                    ref: c,
                    style: {
                      "--border-bottom-width": `1.5px`,
                      "--border-color": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      ...g,
                    },
                    variants: {
                      DNypnEf1e: {
                        "--border-color": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                      },
                      PYIYwpqhe: {
                        "--border-color": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                      },
                    },
                    ...k(
                      {
                        "DNypnEf1e-hover": { "data-framer-name": void 0 },
                        "PYIYwpqhe-hover": { "data-framer-name": void 0 },
                        "Zqwx6QUiP-hover": { "data-framer-name": void 0 },
                        DNypnEf1e: { "data-framer-name": `Hi` },
                        PYIYwpqhe: { "data-framer-name": `Light` },
                      },
                      A,
                      U
                    ),
                    children: [
                      /*#__PURE__*/ s(E, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ s(r, {
                          children: /*#__PURE__*/ s(m.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                              "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                              "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                              "--framer-letter-spacing": `-0.0152em`,
                              "--framer-line-height": `1.55em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                            },
                            children: `Estimate a replacement`,
                          }),
                        }),
                        className: `framer-9s65cu`,
                        "data-framer-name": `Label`,
                        fonts: [`FS;Manrope-variable`],
                        layoutDependency: J,
                        layoutId: `sJduZaMq6`,
                        style: {
                          "--extracted-2gg91v": `"wght" 600`,
                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                        },
                        text: x,
                        variants: {
                          DNypnEf1e: {
                            "--extracted-r6o4lv": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                          },
                          PYIYwpqhe: {
                            "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...k(
                          {
                            DNypnEf1e: {
                              children: /*#__PURE__*/ s(r, {
                                children: /*#__PURE__*/ s(m.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                                    "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                                    "--framer-letter-spacing": `-0.0152em`,
                                    "--framer-line-height": `1.55em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d))`,
                                  },
                                  children: `Estimate a replacement`,
                                }),
                              }),
                            },
                            PYIYwpqhe: {
                              children: /*#__PURE__*/ s(r, {
                                children: /*#__PURE__*/ s(m.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                                    "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                                    "--framer-letter-spacing": `-0.0152em`,
                                    "--framer-line-height": `1.55em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                  },
                                  children: `Estimate a replacement`,
                                }),
                              }),
                            },
                          },
                          A,
                          U
                        ),
                      }),
                      /*#__PURE__*/ o(m.div, {
                        className: `framer-1p8citz`,
                        "data-framer-name": `Arrow`,
                        layoutDependency: J,
                        layoutId: `ltICJjrnE`,
                        children: [
                          /*#__PURE__*/ s(D, {
                            animated: !0,
                            className: `framer-108veg2`,
                            "data-framer-name": `Arrow A`,
                            layoutDependency: J,
                            layoutId: `HxV26Z467`,
                            style: {
                              "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                              "--js9iwy": 2,
                              opacity: 1,
                            },
                            variants: {
                              "DNypnEf1e-hover": { opacity: 0 },
                              "PYIYwpqhe-hover": { opacity: 0 },
                              "Zqwx6QUiP-hover": { opacity: 0 },
                              DNypnEf1e: {
                                "--1m973uw": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                              },
                              PYIYwpqhe: {
                                "--1m973uw": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                              },
                            },
                          }),
                          /*#__PURE__*/ s(D, {
                            animated: !0,
                            className: `framer-17r7uok`,
                            "data-framer-name": `Arrow B`,
                            layoutDependency: J,
                            layoutId: `WxNlZJqKP`,
                            style: {
                              "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                              "--js9iwy": 2,
                              opacity: 0,
                            },
                            variants: {
                              "DNypnEf1e-hover": { opacity: 1 },
                              "PYIYwpqhe-hover": { opacity: 1 },
                              "Zqwx6QUiP-hover": { opacity: 1 },
                              DNypnEf1e: {
                                "--1m973uw": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                              },
                              PYIYwpqhe: {
                                "--1m973uw": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                              },
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-gKhae.framer-5u2udj, .framer-gKhae .framer-5u2udj { display: block; }`,
          `.framer-gKhae.framer-1m1twcu { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px 0px 4.5px 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-gKhae .framer-9s65cu { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-gKhae .framer-1p8citz { flex: none; height: 17px; position: relative; width: 17px; }`,
          `.framer-gKhae .framer-108veg2 { flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: 17px; }`,
          `.framer-gKhae .framer-17r7uok { flex: none; height: auto; left: -12px; position: absolute; top: 0px; width: 17px; }`,
          `.framer-gKhae.framer-v-1m1twcu.hover .framer-108veg2, .framer-gKhae.framer-v-10lhymh.hover .framer-108veg2, .framer-gKhae.framer-v-k90ncj.hover .framer-108veg2 { left: 14px; }`,
          `.framer-gKhae.framer-v-1m1twcu.hover .framer-17r7uok, .framer-gKhae.framer-v-10lhymh.hover .framer-17r7uok, .framer-gKhae.framer-v-k90ncj.hover .framer-17r7uok { left: 0px; }`,
          `.framer-gKhae[data-border="true"]::after, .framer-gKhae [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-gKhae`
      )),
      (V.displayName = `Text Link`),
      (V.defaultProps = { height: 29, width: 200 }),
      y(V, {
        variant: {
          options: [`Zqwx6QUiP`, `PYIYwpqhe`, `DNypnEf1e`],
          optionTitles: [`Ink`, `Light`, `Hi`],
          title: `Variant`,
          type: C.Enum,
        },
        rSCTVchPX: { defaultValue: `Estimate a replacement`, title: `Label`, type: C.String },
        onrSCTVchPXChange: { changes: `rSCTVchPX`, type: C.ChangeHandler },
        DEzUmrPW8: { title: `Link`, type: C.Link },
      }),
      g(
        V,
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
            ],
          },
          ...A,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { H as n, V as t };
//# sourceMappingURL=e741EY288.DL5B2HNh.mjs.map
