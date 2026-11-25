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
  o as x,
  ut as S,
  vt as C,
  w,
  z as T,
} from "./framer.B_dFn1Dy.mjs";
import { H as E, U as D, V as O, W as k } from "./toplevel-deps.CDw6GExF.mjs";
import {
  a as A,
  c as j,
  i as M,
  n as N,
  o as P,
  r as F,
  s as I,
  t as L,
} from "./vI2CBrBs4.COrWOcnr.mjs";
function R(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var z, B, V, H, U, W, G, K, q, J, Y, X;
function Z() {
  return (Z = e(() => {
    (l(),
      v(),
      p(),
      u(),
      j(),
      M(),
      k(),
      (z = [`ODKidVH79`, `JX3TcMgjX`, `FdvBY57XN`, `lx7sCevri`, `MNTYMm47m`, `bkmfUh6ji`]),
      (B = `framer-Bwht7`),
      (V = {
        bkmfUh6ji: `framer-v-61ezwl`,
        FdvBY57XN: `framer-v-qobdci`,
        JX3TcMgjX: `framer-v-161vznp`,
        lx7sCevri: `framer-v-19inc8h`,
        MNTYMm47m: `framer-v-1oykcp7`,
        ODKidVH79: `framer-v-u4kck6`,
      }),
      (H = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (U = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(f.Provider, { value: o, children: n });
      }),
      (W = {
        "Ink Phone": `FdvBY57XN`,
        "Ink Tablet": `JX3TcMgjX`,
        "Paper Phone": `bkmfUh6ji`,
        "Paper Tablet": `MNTYMm47m`,
        Ink: `ODKidVH79`,
        Paper: `lx7sCevri`,
      }),
      (G = m.create(r)),
      (K = ({ height: e, id: t, text: n, title: r, when: i, width: a, ...o }) => ({
        ...o,
        fgmaQTdQF:
          n ??
          o.fgmaQTdQF ??
          `45 minutes on the roof, in the attic and along the gutters. The report reaches your inbox within 24 hours.`,
        kmJWzLIXH: r ?? o.kmJWzLIXH ?? `Photo inspection`,
        UmQRyzSMX: i ?? o.UmQRyzSMX ?? `Day 1`,
        variant: W[o.variant] ?? o.variant ?? `ODKidVH79`,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = /*#__PURE__*/ c(function (e, t) {
        let a = i(null),
          c = t ?? a,
          l = n(),
          { activeLocale: u, contentLocale: f, setLocale: p } = C();
        S();
        let {
            style: g,
            className: v,
            layoutId: y,
            variant: b,
            UmQRyzSMX: x,
            kmJWzLIXH: T,
            fgmaQTdQF: E,
            ...D
          } = K(e),
          {
            baseVariant: k,
            classNames: j,
            clearLoadingGesture: M,
            gestureHandlers: N,
            gestureVariant: P,
            isLoading: F,
            setGestureState: I,
            setVariant: W,
            variants: J,
          } = _({
            cycleOrder: z,
            defaultVariant: `ODKidVH79`,
            ref: c,
            variant: b,
            variantClassNames: V,
          }),
          Y = q(e, J),
          X = h(B, O, A, L);
        return /*#__PURE__*/ s(d, {
          id: y ?? l,
          children: /*#__PURE__*/ s(G, {
            animate: J,
            initial: !1,
            children: /*#__PURE__*/ s(U, {
              value: H,
              children: /*#__PURE__*/ o(m.div, {
                ...D,
                ...N,
                className: h(X, `framer-u4kck6`, v, j),
                "data-border": !0,
                "data-framer-name": `Ink`,
                layoutDependency: Y,
                layoutId: `ODKidVH79`,
                ref: c,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-55e28825-0d6b-412c-8907-93458bc9b8dd)`,
                  "--border-left-width": `0px`,
                  "--border-right-width": `0px`,
                  "--border-style": `solid`,
                  "--border-top-width": `0px`,
                  ...g,
                },
                variants: {
                  bkmfUh6ji: {
                    "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                  },
                  lx7sCevri: {
                    "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                  },
                  MNTYMm47m: {
                    "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                  },
                },
                ...R(
                  {
                    bkmfUh6ji: { "data-framer-name": `Paper Phone` },
                    FdvBY57XN: { "data-framer-name": `Ink Phone` },
                    JX3TcMgjX: { "data-framer-name": `Ink Tablet` },
                    lx7sCevri: { "data-framer-name": `Paper` },
                    MNTYMm47m: { "data-framer-name": `Paper Tablet` },
                  },
                  k,
                  P
                ),
                children: [
                  /*#__PURE__*/ s(m.div, {
                    className: `framer-n9eo60`,
                    "data-framer-name": `When Wrap`,
                    layoutDependency: Y,
                    layoutId: `FjIyv4roS`,
                    children: /*#__PURE__*/ s(w, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ s(r, {
                        children: /*#__PURE__*/ s(m.p, {
                          className: `framer-styles-preset-47y0yi`,
                          "data-styles-preset": `WcNYxFkzx`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d))`,
                          },
                          children: `When`,
                        }),
                      }),
                      className: `framer-1dotmkx`,
                      "data-framer-name": `When`,
                      fonts: [`Inter`],
                      layoutDependency: Y,
                      layoutId: `kOjRw8dv7`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                      },
                      text: x,
                      variants: {
                        bkmfUh6ji: {
                          "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                        },
                        lx7sCevri: {
                          "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                        },
                        MNTYMm47m: {
                          "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...R(
                        {
                          bkmfUh6ji: {
                            children: /*#__PURE__*/ s(r, {
                              children: /*#__PURE__*/ s(m.p, {
                                className: `framer-styles-preset-47y0yi`,
                                "data-styles-preset": `WcNYxFkzx`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                },
                                children: `Day 1`,
                              }),
                            }),
                          },
                          lx7sCevri: {
                            children: /*#__PURE__*/ s(r, {
                              children: /*#__PURE__*/ s(m.p, {
                                className: `framer-styles-preset-47y0yi`,
                                "data-styles-preset": `WcNYxFkzx`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                },
                                children: `Day 1`,
                              }),
                            }),
                          },
                          MNTYMm47m: {
                            children: /*#__PURE__*/ s(r, {
                              children: /*#__PURE__*/ s(m.p, {
                                className: `framer-styles-preset-47y0yi`,
                                "data-styles-preset": `WcNYxFkzx`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                },
                                children: `Day 1`,
                              }),
                            }),
                          },
                        },
                        k,
                        P
                      ),
                    }),
                  }),
                  /*#__PURE__*/ s(m.div, {
                    className: `framer-1epn92g`,
                    "data-framer-name": `Title Wrap`,
                    layoutDependency: Y,
                    layoutId: `uZKs65hJC`,
                    children: /*#__PURE__*/ s(w, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ s(r, {
                        children: /*#__PURE__*/ s(m.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                            "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                            "--framer-font-size": `19px`,
                            "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                            "--framer-letter-spacing": `-0.0202em`,
                            "--framer-line-height": `1.2632em`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                          },
                          children: `Photo inspection`,
                        }),
                      }),
                      className: `framer-1gaupl5`,
                      "data-framer-name": `Title`,
                      fonts: [`FS;Manrope-variable`],
                      layoutDependency: Y,
                      layoutId: `H2Y3b03aa`,
                      style: {
                        "--extracted-2gg91v": `"wght" 500`,
                        "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                      },
                      text: T,
                      variants: {
                        bkmfUh6ji: {
                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                        },
                        lx7sCevri: {
                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                        },
                        MNTYMm47m: {
                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...R(
                        {
                          bkmfUh6ji: {
                            children: /*#__PURE__*/ s(r, {
                              children: /*#__PURE__*/ s(m.p, {
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
                                children: `Photo inspection`,
                              }),
                            }),
                          },
                          FdvBY57XN: {
                            children: /*#__PURE__*/ s(r, {
                              children: /*#__PURE__*/ s(m.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-size": `19px`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                  "--framer-letter-spacing": `-0.025em`,
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                },
                                children: `Photo inspection`,
                              }),
                            }),
                          },
                          JX3TcMgjX: {
                            children: /*#__PURE__*/ s(r, {
                              children: /*#__PURE__*/ s(m.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-size": `19px`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                  "--framer-letter-spacing": `-0.025em`,
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                },
                                children: `Photo inspection`,
                              }),
                            }),
                          },
                          lx7sCevri: {
                            children: /*#__PURE__*/ s(r, {
                              children: /*#__PURE__*/ s(m.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-size": `19px`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                  "--framer-letter-spacing": `-0.0202em`,
                                  "--framer-line-height": `1.2632em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                },
                                children: `Photo inspection`,
                              }),
                            }),
                          },
                          MNTYMm47m: {
                            children: /*#__PURE__*/ s(r, {
                              children: /*#__PURE__*/ s(m.p, {
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
                                children: `Photo inspection`,
                              }),
                            }),
                          },
                        },
                        k,
                        P
                      ),
                    }),
                  }),
                  /*#__PURE__*/ s(w, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ s(r, {
                      children: /*#__PURE__*/ s(m.p, {
                        className: `framer-styles-preset-12clcwd`,
                        "data-styles-preset": `tR22IXYs0`,
                        dir: `auto`,
                        style: {
                          "--framer-text-alignment": `start`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                        },
                        children: `45 minutes on the roof, in the attic and along the gutters. The report reaches your inbox within 24 hours.`,
                      }),
                    }),
                    className: `framer-r6c1nm`,
                    "data-framer-name": `Swatch Label`,
                    fonts: [`Inter`],
                    layoutDependency: Y,
                    layoutId: `dY5DNx_RX`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                    },
                    text: E,
                    variants: {
                      bkmfUh6ji: {
                        "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                      },
                      lx7sCevri: {
                        "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                      },
                      MNTYMm47m: {
                        "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...R(
                      {
                        bkmfUh6ji: {
                          children: /*#__PURE__*/ s(r, {
                            children: /*#__PURE__*/ s(m.p, {
                              className: `framer-styles-preset-1eflcgp`,
                              "data-styles-preset": `vI2CBrBs4`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                              },
                              children: `45 minutes on the roof, in the attic and along the gutters. The report reaches your inbox within 24 hours.`,
                            }),
                          }),
                        },
                        FdvBY57XN: {
                          children: /*#__PURE__*/ s(r, {
                            children: /*#__PURE__*/ s(m.p, {
                              className: `framer-styles-preset-1eflcgp`,
                              "data-styles-preset": `vI2CBrBs4`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                              },
                              children: `45 minutes on the roof, in the attic and along the gutters. The report reaches your inbox within 24 hours.`,
                            }),
                          }),
                        },
                        lx7sCevri: {
                          children: /*#__PURE__*/ s(r, {
                            children: /*#__PURE__*/ s(m.p, {
                              className: `framer-styles-preset-12clcwd`,
                              "data-styles-preset": `tR22IXYs0`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                              },
                              children: `45 minutes on the roof, in the attic and along the gutters. The report reaches your inbox within 24 hours.`,
                            }),
                          }),
                        },
                        MNTYMm47m: {
                          children: /*#__PURE__*/ s(r, {
                            children: /*#__PURE__*/ s(m.p, {
                              className: `framer-styles-preset-12clcwd`,
                              "data-styles-preset": `tR22IXYs0`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                              },
                              children: `45 minutes on the roof, in the attic and along the gutters. The report reaches your inbox within 24 hours.`,
                            }),
                          }),
                        },
                      },
                      k,
                      P
                    ),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (Y = [
        `.framer-Bwht7.framer-fgrws9, .framer-Bwht7 .framer-fgrws9 { display: block; }`,
        `.framer-Bwht7.framer-u4kck6 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; padding: 24px 0px 25px 0px; position: relative; width: 1099px; }`,
        `.framer-Bwht7 .framer-n9eo60 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1.3 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 5px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-Bwht7 .framer-1dotmkx, .framer-Bwht7 .framer-1gaupl5 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Bwht7 .framer-1epn92g { align-content: flex-start; align-items: flex-start; display: flex; flex: 3 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 1px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-Bwht7 .framer-r6c1nm { flex: 5 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Bwht7.framer-v-161vznp.framer-u4kck6, .framer-Bwht7.framer-v-1oykcp7.framer-u4kck6 { gap: 24.3px; width: 734px; }`,
        `.framer-Bwht7.framer-v-161vznp .framer-n9eo60, .framer-Bwht7.framer-v-1oykcp7 .framer-n9eo60 { flex: none; width: 110px; }`,
        `.framer-Bwht7.framer-v-161vznp .framer-1epn92g, .framer-Bwht7.framer-v-1oykcp7 .framer-1epn92g { padding: 2px 0px 0px 0px; }`,
        `.framer-Bwht7.framer-v-qobdci.framer-u4kck6, .framer-Bwht7.framer-v-61ezwl.framer-u4kck6 { flex-direction: column; gap: 6px; width: 342px; }`,
        `.framer-Bwht7.framer-v-qobdci .framer-n9eo60, .framer-Bwht7.framer-v-qobdci .framer-1epn92g, .framer-Bwht7.framer-v-61ezwl .framer-n9eo60, .framer-Bwht7.framer-v-61ezwl .framer-1epn92g { flex: none; padding: 0px; width: 100%; }`,
        `.framer-Bwht7.framer-v-qobdci .framer-r6c1nm, .framer-Bwht7.framer-v-61ezwl .framer-r6c1nm { flex: none; width: 100%; }`,
        ...E,
        ...P,
        ...N,
        `.framer-Bwht7[data-border="true"]::after, .framer-Bwht7 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (X = b(J, Y, `framer-Bwht7`)),
      (X.displayName = `Timeline Row`),
      (X.defaultProps = { height: 103, width: 1099 }),
      y(X, {
        variant: {
          options: [`ODKidVH79`, `JX3TcMgjX`, `FdvBY57XN`, `lx7sCevri`, `MNTYMm47m`, `bkmfUh6ji`],
          optionTitles: [`Ink`, `Ink Tablet`, `Ink Phone`, `Paper`, `Paper Tablet`, `Paper Phone`],
          title: `Variant`,
          type: x.Enum,
        },
        UmQRyzSMX: { defaultValue: `Day 1`, title: `When`, type: x.String },
        onUmQRyzSMXChange: { changes: `UmQRyzSMX`, type: x.ChangeHandler },
        kmJWzLIXH: { defaultValue: `Photo inspection`, title: `Title`, type: x.String },
        onkmJWzLIXHChange: { changes: `kmJWzLIXH`, type: x.ChangeHandler },
        fgmaQTdQF: {
          defaultValue: `45 minutes on the roof, in the attic and along the gutters. The report reaches your inbox within 24 hours.`,
          title: `Text`,
          type: x.String,
        },
        onfgmaQTdQFChange: { changes: `fgmaQTdQF`, type: x.ChangeHandler },
      }),
      g(
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
          ...T(D),
          ...T(I),
          ...T(F),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { Z as n, X as t };
//# sourceMappingURL=UhBaDh7qR.OzPy8NNH.mjs.map
