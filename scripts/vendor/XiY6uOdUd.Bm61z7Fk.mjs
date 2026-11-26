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
  w as te,
} from "./react.Dxe_2v0O.mjs";
import { i as ne, o as u, t as d, w as f } from "./motion.x14TTX80.mjs";
import {
  A as p,
  D as m,
  Dt as re,
  G as h,
  M as g,
  O as _,
  Ot as v,
  R as y,
  T as ie,
  i as b,
  o as x,
  tt as S,
  ut as ae,
  vt as oe,
  w as C,
  z as w,
} from "./framer.B_dFn1Dy.mjs";
import { H as T, U as E, V as se, W as D, i as O, r as k } from "./toplevel-deps.CDw6GExF.mjs";
import { i as A, n as j, r as M, t as N } from "./vI2CBrBs4.COrWOcnr.mjs";
import { i as P, n as F, r as I, t as ce } from "./sgPoc0pBr.CzO-fPYl.mjs";
function L(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (ee(),
      h(),
      d(),
      te(),
      P(),
      A(),
      D(),
      O(),
      (R = y(k)),
      (z = [
        `eQYT3Wyid`,
        `syl1CxqTK`,
        `W6wLLkRCi`,
        `LjbruUu3n`,
        `sRQoD276W`,
        `ChEElW0U7`,
        `JX2N5a0ll`,
        `FWnPq53TS`,
        `p904sGRDS`,
        `I864ns9fl`,
        `vxCz1KbYc`,
        `ztBzKzLMi`,
      ]),
      (B = `framer-XxZPw`),
      (V = {
        ChEElW0U7: `framer-v-2fgb8h`,
        eQYT3Wyid: `framer-v-11kqfd8`,
        FWnPq53TS: `framer-v-y4sunm`,
        I864ns9fl: `framer-v-mxarr7`,
        JX2N5a0ll: `framer-v-15rdwvd`,
        LjbruUu3n: `framer-v-p2qbxi`,
        p904sGRDS: `framer-v-pw6pjm`,
        sRQoD276W: `framer-v-u0m66f`,
        syl1CxqTK: `framer-v-7bn7wm`,
        vxCz1KbYc: `framer-v-9av3ty`,
        W6wLLkRCi: `framer-v-1clr04s`,
        ztBzKzLMi: `framer-v-wcqnph`,
      }),
      (H = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (U = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (W = ({ value: e, children: n }) => {
        let r = t(u),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(u.Provider, { value: a, children: n });
      }),
      (G = {
        "Desktop Button": `sRQoD276W`,
        "Desktop Dark Button": `I864ns9fl`,
        "Desktop Dark": `LjbruUu3n`,
        "Phone Button": `p904sGRDS`,
        "Phone Dark Button": `ztBzKzLMi`,
        "Phone Dark": `JX2N5a0ll`,
        "Tablet Button": `FWnPq53TS`,
        "Tablet Dark Button": `vxCz1KbYc`,
        "Tablet Dark": `ChEElW0U7`,
        Desktop: `eQYT3Wyid`,
        Phone: `W6wLLkRCi`,
        Tablet: `syl1CxqTK`,
      }),
      (K = f.create(r)),
      (q = (e, t) => {
        let [n, r] = i(e),
          [a, o] = i(e);
        return t ? [e, t] : (e !== a && (r(e), o(e)), [n, r]);
      }),
      (J = ({
        buttonLabel: e,
        buttonLink: t,
        height: n,
        id: r,
        label: i,
        lede: a,
        showLede: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        AWeBIsUcD: t ?? l.AWeBIsUcD,
        cO_7kDcz9:
          a ??
          l.cO_7kDcz9 ??
          `Regolith Construction offers whole-home renovations, kitchen and bathroom updates, extensions, interior finishing, exterior improvements, and consultation.`,
        GVGapXMTF: s ?? l.GVGapXMTF ?? `Your Regolith project team can discuss priorities, project scope, and practical next steps.`,
        iBbAGSAx0: e ?? l.iBbAGSAx0 ?? `All renovation advice`,
        kkEGpeu2q: o ?? l.kkEGpeu2q ?? !0,
        variant: G[l.variant] ?? l.variant ?? `eQYT3Wyid`,
        W3yUiq7Nb: i ?? l.W3yUiq7Nb ?? `(Services)`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = /*#__PURE__*/ l(function (e, t) {
        let i = a(null),
          o = t ?? i,
          l = n(),
          { activeLocale: ee, contentLocale: te, setLocale: u } = oe(),
          d = ae(),
          {
            style: m,
            className: h,
            layoutId: g,
            variant: _,
            W3yUiq7Nb: v,
            GVGapXMTF: y,
            cO_7kDcz9: x,
            kkEGpeu2q: S,
            iBbAGSAx0: w,
            oniBbAGSAx0Change: T,
            AWeBIsUcD: E,
            ...D
          } = J(e),
          [O, A] = q(w, T),
          {
            baseVariant: j,
            classNames: M,
            clearLoadingGesture: P,
            gestureHandlers: F,
            gestureVariant: I,
            isLoading: R,
            setGestureState: G,
            setVariant: X,
            variants: Z,
          } = re({
            cycleOrder: z,
            defaultVariant: `eQYT3Wyid`,
            ref: o,
            variant: _,
            variantClassNames: V,
          }),
          Q = Y(e, Z),
          $ = p(B, se, ce, N),
          le = (e) =>
            ![
              `sRQoD276W`,
              `FWnPq53TS`,
              `p904sGRDS`,
              `I864ns9fl`,
              `vxCz1KbYc`,
              `ztBzKzLMi`,
            ].includes(j) && e,
          ue = () =>
            !![
              `sRQoD276W`,
              `FWnPq53TS`,
              `p904sGRDS`,
              `I864ns9fl`,
              `vxCz1KbYc`,
              `ztBzKzLMi`,
            ].includes(j);
        return /*#__PURE__*/ c(ne, {
          id: g ?? l,
          children: /*#__PURE__*/ c(K, {
            animate: Z,
            initial: !1,
            children: /*#__PURE__*/ c(W, {
              value: H,
              children: /*#__PURE__*/ s(f.div, {
                ...D,
                ...F,
                className: p($, `framer-11kqfd8`, h, M),
                "data-framer-name": `Desktop`,
                layoutDependency: Q,
                layoutId: `eQYT3Wyid`,
                ref: o,
                style: { ...m },
                ...L(
                  {
                    ChEElW0U7: { "data-framer-name": `Tablet Dark` },
                    FWnPq53TS: { "data-framer-name": `Tablet Button` },
                    I864ns9fl: { "data-framer-name": `Desktop Dark Button` },
                    JX2N5a0ll: { "data-framer-name": `Phone Dark` },
                    LjbruUu3n: { "data-framer-name": `Desktop Dark` },
                    p904sGRDS: { "data-framer-name": `Phone Button` },
                    sRQoD276W: { "data-framer-name": `Desktop Button` },
                    syl1CxqTK: { "data-framer-name": `Tablet` },
                    vxCz1KbYc: { "data-framer-name": `Tablet Dark Button` },
                    W6wLLkRCi: { "data-framer-name": `Phone` },
                    ztBzKzLMi: { "data-framer-name": `Phone Dark Button` },
                  },
                  j,
                  I
                ),
                children: [
                  /*#__PURE__*/ c(f.div, {
                    className: `framer-zt7ula`,
                    "data-framer-name": `Heading`,
                    layoutDependency: Q,
                    layoutId: `d0GXQWH6j`,
                    children: /*#__PURE__*/ s(f.div, {
                      className: `framer-18p0y2`,
                      "data-framer-name": `Heading In`,
                      layoutDependency: Q,
                      layoutId: `Saj8T5cis`,
                      children: [
                        /*#__PURE__*/ c(C, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ c(r, {
                            children: /*#__PURE__*/ c(f.p, {
                              className: `framer-styles-preset-47y0yi`,
                              "data-styles-preset": `WcNYxFkzx`,
                              dir: `auto`,
                              children: `Label`,
                            }),
                          }),
                          className: `framer-60kx54`,
                          "data-framer-name": `Label`,
                          fonts: [`Inter`],
                          layoutDependency: Q,
                          layoutId: `j6N1QXCnG`,
                          text: v,
                          variants: {
                            ChEElW0U7: {
                              "--extracted-r6o4lv": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                            },
                            I864ns9fl: {
                              "--extracted-r6o4lv": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                            },
                            JX2N5a0ll: {
                              "--extracted-r6o4lv": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                            },
                            LjbruUu3n: {
                              "--extracted-r6o4lv": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                            },
                            vxCz1KbYc: {
                              "--extracted-r6o4lv": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                            },
                            ztBzKzLMi: {
                              "--extracted-r6o4lv": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...L(
                            {
                              ChEElW0U7: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(f.p, {
                                    className: `framer-styles-preset-47y0yi`,
                                    "data-styles-preset": `WcNYxFkzx`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d))`,
                                    },
                                    children: `(Services)`,
                                  }),
                                }),
                              },
                              I864ns9fl: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(f.p, {
                                    className: `framer-styles-preset-47y0yi`,
                                    "data-styles-preset": `WcNYxFkzx`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d))`,
                                    },
                                    children: `(Services)`,
                                  }),
                                }),
                              },
                              JX2N5a0ll: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(f.p, {
                                    className: `framer-styles-preset-47y0yi`,
                                    "data-styles-preset": `WcNYxFkzx`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d))`,
                                    },
                                    children: `(Services)`,
                                  }),
                                }),
                              },
                              LjbruUu3n: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(f.p, {
                                    className: `framer-styles-preset-47y0yi`,
                                    "data-styles-preset": `WcNYxFkzx`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d))`,
                                    },
                                    children: `(Services)`,
                                  }),
                                }),
                              },
                              vxCz1KbYc: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(f.p, {
                                    className: `framer-styles-preset-47y0yi`,
                                    "data-styles-preset": `WcNYxFkzx`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d))`,
                                    },
                                    children: `(Services)`,
                                  }),
                                }),
                              },
                              ztBzKzLMi: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(f.p, {
                                    className: `framer-styles-preset-47y0yi`,
                                    "data-styles-preset": `WcNYxFkzx`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d))`,
                                    },
                                    children: `(Services)`,
                                  }),
                                }),
                              },
                            },
                            j,
                            I
                          ),
                        }),
                        /*#__PURE__*/ c(C, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ c(r, {
                            children: /*#__PURE__*/ c(f.h2, {
                              className: `framer-styles-preset-15heldj`,
                              "data-styles-preset": `sgPoc0pBr`,
                              dir: `auto`,
                              children: `Title`,
                            }),
                          }),
                          className: `framer-aw48sz`,
                          "data-framer-name": `Title`,
                          fonts: [`Inter`],
                          layoutDependency: Q,
                          layoutId: `XqQiE7BxU`,
                          text: y,
                          variants: {
                            ChEElW0U7: {
                              "--extracted-1of0zx5": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                            },
                            I864ns9fl: {
                              "--extracted-1of0zx5": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                            },
                            JX2N5a0ll: {
                              "--extracted-1of0zx5": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                            },
                            LjbruUu3n: {
                              "--extracted-1of0zx5": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                            },
                            vxCz1KbYc: {
                              "--extracted-1of0zx5": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                            },
                            ztBzKzLMi: {
                              "--extracted-1of0zx5": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...L(
                            {
                              ChEElW0U7: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(f.h2, {
                                    className: `framer-styles-preset-15heldj`,
                                    "data-styles-preset": `sgPoc0pBr`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-1of0zx5, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                    },
                                    children: `Your Regolith project team can discuss priorities, project scope, and practical next steps.`,
                                  }),
                                }),
                              },
                              I864ns9fl: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(f.h2, {
                                    className: `framer-styles-preset-15heldj`,
                                    "data-styles-preset": `sgPoc0pBr`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-1of0zx5, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                    },
                                    children: `Your Regolith project team can discuss priorities, project scope, and practical next steps.`,
                                  }),
                                }),
                              },
                              JX2N5a0ll: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(f.h2, {
                                    className: `framer-styles-preset-15heldj`,
                                    "data-styles-preset": `sgPoc0pBr`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-1of0zx5, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                    },
                                    children: `Your Regolith project team can discuss priorities, project scope, and practical next steps.`,
                                  }),
                                }),
                              },
                              LjbruUu3n: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(f.h2, {
                                    className: `framer-styles-preset-15heldj`,
                                    "data-styles-preset": `sgPoc0pBr`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-1of0zx5, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                    },
                                    children: `Your Regolith project team can discuss priorities, project scope, and practical next steps.`,
                                  }),
                                }),
                              },
                              vxCz1KbYc: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(f.h2, {
                                    className: `framer-styles-preset-15heldj`,
                                    "data-styles-preset": `sgPoc0pBr`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-1of0zx5, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                    },
                                    children: `Your Regolith project team can discuss priorities, project scope, and practical next steps.`,
                                  }),
                                }),
                              },
                              ztBzKzLMi: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(f.h2, {
                                    className: `framer-styles-preset-15heldj`,
                                    "data-styles-preset": `sgPoc0pBr`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-1of0zx5, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                    },
                                    children: `Your Regolith project team can discuss priorities, project scope, and practical next steps.`,
                                  }),
                                }),
                              },
                            },
                            j,
                            I
                          ),
                        }),
                      ],
                    }),
                  }),
                  le(S !== !1) &&
                    /*#__PURE__*/ c(C, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ c(r, {
                        children: /*#__PURE__*/ c(f.p, {
                          className: `framer-styles-preset-1eflcgp`,
                          "data-styles-preset": `vI2CBrBs4`,
                          dir: `auto`,
                          children: `Lede`,
                        }),
                      }),
                      className: `framer-1uter9d`,
                      "data-framer-name": `Lede`,
                      fonts: [`Inter`],
                      layoutDependency: Q,
                      layoutId: `kN2b89VY_`,
                      text: x,
                      variants: {
                        ChEElW0U7: {
                          "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                        },
                        JX2N5a0ll: {
                          "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                        },
                        LjbruUu3n: {
                          "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...L(
                        {
                          ChEElW0U7: {
                            children: /*#__PURE__*/ c(r, {
                              children: /*#__PURE__*/ c(f.p, {
                                className: `framer-styles-preset-1eflcgp`,
                                "data-styles-preset": `vI2CBrBs4`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                },
                                children: `Regolith Construction offers whole-home renovations, kitchen and bathroom updates, extensions, interior finishing, exterior improvements, and consultation.`,
                              }),
                            }),
                          },
                          JX2N5a0ll: {
                            children: /*#__PURE__*/ c(r, {
                              children: /*#__PURE__*/ c(f.p, {
                                className: `framer-styles-preset-1eflcgp`,
                                "data-styles-preset": `vI2CBrBs4`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                },
                                children: `Regolith Construction offers whole-home renovations, kitchen and bathroom updates, extensions, interior finishing, exterior improvements, and consultation.`,
                              }),
                            }),
                          },
                          LjbruUu3n: {
                            children: /*#__PURE__*/ c(r, {
                              children: /*#__PURE__*/ c(f.p, {
                                className: `framer-styles-preset-1eflcgp`,
                                "data-styles-preset": `vI2CBrBs4`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                },
                                children: `Regolith Construction offers whole-home renovations, kitchen and bathroom updates, extensions, interior finishing, exterior improvements, and consultation.`,
                              }),
                            }),
                          },
                          W6wLLkRCi: {
                            children: /*#__PURE__*/ c(r, {
                              children: /*#__PURE__*/ c(f.p, {
                                className: `framer-styles-preset-1eflcgp`,
                                "data-styles-preset": `vI2CBrBs4`,
                                dir: `auto`,
                                style: { "--framer-text-alignment": `start` },
                                children: `Regolith Construction offers whole-home renovations, kitchen and bathroom updates, extensions, interior finishing, exterior improvements, and consultation.`,
                              }),
                            }),
                          },
                        },
                        j,
                        I
                      ),
                    }),
                  ue() &&
                    /*#__PURE__*/ c(b, {
                      ...L(
                        {
                          FWnPq53TS: { height: 50, y: (d?.y || 0) + (d?.height || 200) - 50 },
                          I864ns9fl: { height: 50, y: (d?.y || 0) + (d?.height || 200) - 50 },
                          p904sGRDS: { height: 50, y: (d?.y || 0) + 206.1507 },
                          sRQoD276W: { height: 50, y: (d?.y || 0) + (d?.height || 200) - 50 },
                          vxCz1KbYc: { height: 50, y: (d?.y || 0) + (d?.height || 200) - 50 },
                          ztBzKzLMi: { height: 50, y: (d?.y || 0) + 206.1507 },
                        },
                        j,
                        I
                      ),
                      children: /*#__PURE__*/ c(ie, {
                        className: `framer-dctetb-container`,
                        layoutDependency: Q,
                        layoutId: `JzJ9_PiEI-container`,
                        nodeId: `JzJ9_PiEI`,
                        rendersWithMotion: !0,
                        scopeId: `XiY6uOdUd`,
                        children: /*#__PURE__*/ c(k, {
                          A7Od1mPPH: !1,
                          height: `100%`,
                          id: `JzJ9_PiEI`,
                          KLKq8yi1U: E,
                          l9aoY6pHx: O,
                          layoutId: `JzJ9_PiEI`,
                          onl9aoY6pHxChange: A,
                          SbaAZw1tX: !0,
                          style: { height: `100%` },
                          variant: U(`nUa3AxbZM`),
                          width: `100%`,
                          ...L(
                            {
                              I864ns9fl: { variant: U(`Im3Rj55tG`) },
                              vxCz1KbYc: { variant: U(`Im3Rj55tG`) },
                              ztBzKzLMi: { variant: U(`Im3Rj55tG`) },
                            },
                            j,
                            I
                          ),
                        }),
                      }),
                    }),
                ],
              }),
            }),
          }),
        });
      })),
      (Z = [
        `.framer-XxZPw.framer-7dfwa4, .framer-XxZPw .framer-7dfwa4 { display: block; }`,
        `.framer-XxZPw.framer-11kqfd8 { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1099px; }`,
        `.framer-XxZPw .framer-zt7ula { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-XxZPw .framer-18p0y2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; max-width: 720px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XxZPw .framer-60kx54, .framer-XxZPw .framer-aw48sz { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-XxZPw .framer-1uter9d { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 400px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-XxZPw .framer-dctetb-container { flex: none; height: 50px; position: relative; width: auto; }`,
        `.framer-XxZPw.framer-v-7bn7wm.framer-11kqfd8, .framer-XxZPw.framer-v-2fgb8h.framer-11kqfd8 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; width: 734px; }`,
        `.framer-XxZPw.framer-v-7bn7wm .framer-zt7ula, .framer-XxZPw.framer-v-1clr04s .framer-zt7ula, .framer-XxZPw.framer-v-2fgb8h .framer-zt7ula, .framer-XxZPw.framer-v-15rdwvd .framer-zt7ula, .framer-XxZPw.framer-v-pw6pjm .framer-zt7ula, .framer-XxZPw.framer-v-wcqnph .framer-zt7ula { flex: none; width: 100%; }`,
        `.framer-XxZPw.framer-v-1clr04s.framer-11kqfd8, .framer-XxZPw.framer-v-15rdwvd.framer-11kqfd8, .framer-XxZPw.framer-v-pw6pjm.framer-11kqfd8, .framer-XxZPw.framer-v-wcqnph.framer-11kqfd8 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; width: 342px; }`,
        `.framer-XxZPw.framer-v-1clr04s .framer-1uter9d, .framer-XxZPw.framer-v-15rdwvd .framer-1uter9d { width: 100%; }`,
        `.framer-XxZPw.framer-v-y4sunm.framer-11kqfd8, .framer-XxZPw.framer-v-9av3ty.framer-11kqfd8 { width: 734px; }`,
        ...T,
        ...F,
        ...j,
      ]),
      (Q = v(X, Z, `framer-XxZPw`)),
      (Q.displayName = `Section Head`),
      (Q.defaultProps = { height: 143, width: 1099 }),
      _(Q, {
        variant: {
          options: [
            `eQYT3Wyid`,
            `syl1CxqTK`,
            `W6wLLkRCi`,
            `LjbruUu3n`,
            `sRQoD276W`,
            `ChEElW0U7`,
            `JX2N5a0ll`,
            `FWnPq53TS`,
            `p904sGRDS`,
            `I864ns9fl`,
            `vxCz1KbYc`,
            `ztBzKzLMi`,
          ],
          optionTitles: [
            `Desktop`,
            `Tablet`,
            `Phone`,
            `Desktop Dark`,
            `Desktop Button`,
            `Tablet Dark`,
            `Phone Dark`,
            `Tablet Button`,
            `Phone Button`,
            `Desktop Dark Button`,
            `Tablet Dark Button`,
            `Phone Dark Button`,
          ],
          title: `Variant`,
          type: x.Enum,
        },
        W3yUiq7Nb: { defaultValue: `(Services)`, title: `Label`, type: x.String },
        onW3yUiq7NbChange: { changes: `W3yUiq7Nb`, type: x.ChangeHandler },
        GVGapXMTF: {
          defaultValue: `Your Regolith project team can discuss priorities, project scope, and practical next steps.`,
          title: `Title`,
          type: x.String,
        },
        onGVGapXMTFChange: { changes: `GVGapXMTF`, type: x.ChangeHandler },
        cO_7kDcz9: {
          defaultValue: `Regolith Construction offers whole-home renovations, kitchen and bathroom updates, extensions, interior finishing, exterior improvements, and consultation.`,
          title: `Lede`,
          type: x.String,
        },
        oncO_7kDcz9Change: { changes: `cO_7kDcz9`, type: x.ChangeHandler },
        kkEGpeu2q: { defaultValue: !0, title: `Show Lede`, type: x.Boolean },
        onkkEGpeu2qChange: { changes: `kkEGpeu2q`, type: x.ChangeHandler },
        iBbAGSAx0: { defaultValue: `All renovation advice`, title: `Button Label`, type: x.String },
        oniBbAGSAx0Change: { changes: `iBbAGSAx0`, type: x.ChangeHandler },
        AWeBIsUcD: { title: `Button Link`, type: x.Link },
      }),
      m(
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
          ...R,
          ...w(E),
          ...w(I),
          ...w(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => S([() => g(k, {}, t)], t) }));
  }))();
}
export { $ as n, Q as t };
//# sourceMappingURL=XiY6uOdUd.Bm61z7Fk.mjs.map
