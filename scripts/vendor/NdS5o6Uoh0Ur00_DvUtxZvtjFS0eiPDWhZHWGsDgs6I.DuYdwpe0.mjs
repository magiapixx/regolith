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
  y as f,
} from "./react.Dxe_2v0O.mjs";
import { i as p, o as m, t as h, w as g } from "./motion.x14TTX80.mjs";
import {
  A as _,
  At as v,
  B as y,
  C as b,
  D as x,
  Dt as S,
  Et as C,
  G as w,
  M as T,
  O as E,
  Ot as D,
  Q as O,
  R as k,
  St as ee,
  a as A,
  b as te,
  f as ne,
  ft as re,
  g as ie,
  ht as j,
  i as M,
  kt as ae,
  m as N,
  mt as oe,
  n as P,
  nt as se,
  o as F,
  st as ce,
  tt as I,
  ut as le,
  vt as ue,
  w as L,
  wt as R,
  x as z,
  yt as de,
  z as B,
} from "./framer.B_dFn1Dy.mjs";
import {
  $ as fe,
  A as pe,
  H as V,
  M as me,
  N as he,
  P as ge,
  U as _e,
  V as ve,
  W as ye,
  d as be,
  et as xe,
  f as Se,
  i as Ce,
  j as we,
  k as Te,
  l as Ee,
  nt as De,
  r as Oe,
  tt as ke,
  u as Ae,
} from "./toplevel-deps.CDw6GExF.mjs";
import { n as je, t as Me } from "./e741EY288.DL5B2HNh.mjs";
import {
  a as Ne,
  c as Pe,
  i as Fe,
  n as Ie,
  o as Le,
  r as Re,
  s as ze,
  t as Be,
} from "./vI2CBrBs4.COrWOcnr.mjs";
import { i as Ve, n as He, r as Ue, t as We } from "./afX_I6eDe.CMhHsk_r.mjs";
import { i as Ge, n as Ke, r as qe, t as Je } from "./LxLub0fqM.DR-h19TQ.mjs";
import {
  a as Ye,
  c as Xe,
  i as Ze,
  n as Qe,
  o as $e,
  r as et,
  s as tt,
  t as nt,
} from "./nER_k8qot.2UZVgHtT.mjs";
import { i as rt, n as it } from "./vrNx7AlHT.BdCFKqus.mjs";
import { n as at, t as ot } from "./qZG6gxxYn.Cw3NaZi3.mjs";
import { n as st, t as ct } from "./V5piL6kpl.B6Yi6Dm0.mjs";
import { i as lt, n as ut, r as dt, t as ft } from "./pQZwXTEEF.jk2783jo.mjs";
import { i as pt, n as mt, r as ht, t as gt } from "./ZWUMYAzOn.Dk3dz1NC.mjs";
import { n as _t, r as vt } from "./WiWpK4bRq.P0AAgBFu.mjs";
function yt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, H;
function Mt() {
  return (Mt = e(() => {
    (u(),
      w(),
      h(),
      d(),
      Xe(),
      (bt = { YAs8nZ0Tn: { hover: !0 } }),
      (xt = [`YAs8nZ0Tn`, `QphOgITFF`]),
      (St = `framer-cYkDo`),
      (Ct = { QphOgITFF: `framer-v-1tx16bp`, YAs8nZ0Tn: `framer-v-1k4xmy4` }),
      (wt = { delay: 0, duration: 0.2, ease: [0.25, 0.1, 0.25, 1], type: `tween` }),
      (Tt = ({ value: e, children: n }) => {
        let r = t(m),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(m.Provider, { value: a, children: n });
      }),
      (Et = { Active: `QphOgITFF`, Default: `YAs8nZ0Tn` }),
      (Dt = g.create(r)),
      (Ot = ({ height: e, id: t, label: n, tap: r, width: i, ...a }) => ({
        ...a,
        quBOmJ0X3: r ?? a.quBOmJ0X3,
        RDL1vLU64: n ?? a.RDL1vLU64 ?? `All`,
        variant: Et[a.variant] ?? a.variant ?? `YAs8nZ0Tn`,
      })),
      (kt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (At = /*#__PURE__*/ l(function (e, t) {
        let a = i(null),
          o = t ?? a,
          s = n(),
          { activeLocale: l, contentLocale: u, setLocale: d } = ue();
        le();
        let {
            style: f,
            className: m,
            layoutId: h,
            variant: v,
            RDL1vLU64: y,
            quBOmJ0X3: b,
            ...x
          } = Ot(e),
          {
            baseVariant: C,
            classNames: w,
            clearLoadingGesture: T,
            gestureHandlers: E,
            gestureVariant: D,
            isLoading: O,
            setGestureState: k,
            setVariant: ee,
            variants: A,
          } = S({
            cycleOrder: xt,
            defaultVariant: `YAs8nZ0Tn`,
            enabledGestures: bt,
            ref: o,
            variant: v,
            variantClassNames: Ct,
          }),
          te = kt(e, A),
          ne = [Ye],
          { activeVariantCallback: re, delay: ie } = ce(C),
          j = re(async (...e) => {
            if ((k({ isPressed: !1 }), b && (await b(...e)) === !1)) return !1;
          }),
          M = _(St, ...ne);
        return /*#__PURE__*/ c(p, {
          id: h ?? s,
          children: /*#__PURE__*/ c(Dt, {
            animate: A,
            initial: !1,
            children: /*#__PURE__*/ c(Tt, {
              value: wt,
              children: /*#__PURE__*/ c(g.div, {
                ...x,
                ...E,
                className: _(M, `framer-1k4xmy4`, m, w),
                "data-border": !0,
                "data-framer-name": `Default`,
                "data-highlight": !0,
                layoutDependency: te,
                layoutId: `YAs8nZ0Tn`,
                onTap: j,
                ref: o,
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
                  ...f,
                },
                variants: {
                  "YAs8nZ0Tn-hover": { "--border-color": `rgba(20, 21, 23, 0.4)` },
                  QphOgITFF: {
                    "--border-color": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                    backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                  },
                },
                ...yt(
                  {
                    "YAs8nZ0Tn-hover": { "data-framer-name": void 0 },
                    QphOgITFF: { "data-framer-name": `Active` },
                  },
                  C,
                  D
                ),
                children: /*#__PURE__*/ c(L, {
                  __fromCanvasComponent: !0,
                  children: /*#__PURE__*/ c(r, {
                    children: /*#__PURE__*/ c(g.p, {
                      className: `framer-styles-preset-secjb5`,
                      "data-styles-preset": `pDF49uOxv`,
                      dir: `auto`,
                      style: {
                        "--framer-text-alignment": `start`,
                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                      },
                      children: `All`,
                    }),
                  }),
                  className: `framer-fvbr2a`,
                  "data-framer-name": `Label`,
                  fonts: [`Inter`],
                  layoutDependency: te,
                  layoutId: `cPfCkVjmO`,
                  style: {
                    "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                  },
                  text: y,
                  variants: {
                    QphOgITFF: {
                      "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                    },
                  },
                  verticalAlignment: `top`,
                  withExternalLayout: !0,
                  ...yt(
                    {
                      QphOgITFF: {
                        children: /*#__PURE__*/ c(r, {
                          children: /*#__PURE__*/ c(g.p, {
                            className: `framer-styles-preset-secjb5`,
                            "data-styles-preset": `pDF49uOxv`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `start`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                            },
                            children: `All`,
                          }),
                        }),
                      },
                    },
                    C,
                    D
                  ),
                }),
              }),
            }),
          }),
        });
      })),
      (jt = [
        `.framer-cYkDo.framer-sdzytp, .framer-cYkDo .framer-sdzytp { display: block; }`,
        `.framer-cYkDo.framer-1k4xmy4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 38px; justify-content: flex-start; padding: 0px 15px 0px 15px; position: relative; width: min-content; }`,
        `.framer-cYkDo .framer-fvbr2a { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
        ...$e,
        `.framer-cYkDo[data-border="true"]::after, .framer-cYkDo [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (H = D(At, jt, `framer-cYkDo`)),
      (H.displayName = `Filter Pill`),
      (H.defaultProps = { height: 38, width: 46 }),
      E(H, {
        variant: {
          options: [`YAs8nZ0Tn`, `QphOgITFF`],
          optionTitles: [`Default`, `Active`],
          title: `Variant`,
          type: F.Enum,
        },
        RDL1vLU64: { defaultValue: `All`, title: `Label`, type: F.String },
        onRDL1vLU64Change: { changes: `RDL1vLU64`, type: F.ChangeHandler },
        quBOmJ0X3: { title: `Tap`, type: F.EventHandler },
      }),
      x(
        H,
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
          ...B(tt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function U(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Nt, Pt, Ft, It, Lt, Rt, W, zt, G, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, K;
function Jt() {
  return (Jt = e(() => {
    (u(),
      w(),
      h(),
      d(),
      ge(),
      Ve(),
      Ge(),
      lt(),
      Se(),
      Pe(),
      Fe(),
      ye(),
      (Nt = k(he)),
      (Pt = { Drx43Q_vh: { hover: !0 }, K6qcGL3xq: { hover: !0 }, LifsJv7ac: { hover: !0 } }),
      (Ft = [`LifsJv7ac`, `Drx43Q_vh`, `K6qcGL3xq`]),
      (It = `framer-NI12b`),
      (Lt = {
        Drx43Q_vh: `framer-v-dufd5s`,
        K6qcGL3xq: `framer-v-18kzncb`,
        LifsJv7ac: `framer-v-t164i3`,
      }),
      (Rt = { delay: 0, duration: 0.6, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (W = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (zt = { delay: 0, duration: 1, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (G = ({ value: e, children: n }) => {
        let r = t(m),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(m.Provider, { value: a, children: n });
      }),
      (Bt = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? t + e
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (Vt = { delay: 0, duration: 0.25, ease: [0.25, 0.1, 0.25, 1], type: `tween` }),
      (Ht = { Desktop: `LifsJv7ac`, Phone: `K6qcGL3xq`, Tablet: `Drx43Q_vh` }),
      (Ut = g.create(r)),
      (Wt = ({
        completed: e,
        height: t,
        id: n,
        image: r,
        job: i,
        link: a,
        material: o,
        onSite: s,
        place: c,
        size: l,
        text: u,
        title: d,
        type: f,
        width: p,
        ...m
      }) => ({
        ...m,
        CgCZJzADz:
          u ??
          m.CgCZJzADz ??
          `A 1930s Tudor with three chimneys and eleven valleys. We rebuilt every valley in metal, reflashed the chimneys and kept the steep front gables looking original.`,
        FUynJFX2W: a ?? m.FUynJFX2W,
        I6Jk0md5C: s ?? m.I6Jk0md5C ?? `4 days`,
        J1cCPa85u: d ?? m.J1cCPa85u ?? `Tudor revival on Birch Row`,
        lf953UjZT: c ?? m.lf953UjZT ?? `Millbrook`,
        lgBPwa_IP: r ?? m.lgBPwa_IP,
        NWjfeZGNK: e ?? m.NWjfeZGNK ?? `Sep 2026`,
        pfZ42ZJeC: f ?? m.pfZ42ZJeC ?? `Full replacement`,
        ppYHIT51h: l ?? m.ppYHIT51h ?? `34 squares`,
        sCAz6NYii: i ?? m.sCAz6NYii ?? `2417`,
        UfN2kOhqT: o ?? m.UfN2kOhqT ?? `Architectural shingle`,
        variant: Ht[m.variant] ?? m.variant ?? `LifsJv7ac`,
      })),
      (Gt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Kt = /*#__PURE__*/ l(function (e, t) {
        let a = i(null),
          o = t ?? a,
          l = n(),
          { activeLocale: u, contentLocale: d, setLocale: f } = ue(),
          m = le(),
          {
            style: h,
            className: v,
            layoutId: b,
            variant: x,
            lgBPwa_IP: C,
            lf953UjZT: w,
            sCAz6NYii: T,
            pfZ42ZJeC: E,
            J1cCPa85u: D,
            CgCZJzADz: O,
            UfN2kOhqT: k,
            ppYHIT51h: ee,
            I6Jk0md5C: A,
            NWjfeZGNK: te,
            FUynJFX2W: ne,
            ...re
          } = Wt(e),
          {
            baseVariant: j,
            classNames: M,
            clearLoadingGesture: ae,
            gestureHandlers: oe,
            gestureVariant: P,
            isLoading: se,
            setGestureState: F,
            setVariant: ce,
            variants: I,
          } = S({
            cycleOrder: Ft,
            defaultVariant: `LifsJv7ac`,
            enabledGestures: Pt,
            ref: o,
            variant: x,
            variantClassNames: Lt,
          }),
          R = Gt(e, I),
          z = _(It, We, ve, Ne, Be, Ee, Je, ft),
          de = Bt(T, `Job `),
          B = Bt(E, ` · `);
        return /*#__PURE__*/ c(p, {
          id: b ?? l,
          children: /*#__PURE__*/ c(Ut, {
            animate: I,
            initial: !1,
            children: /*#__PURE__*/ c(G, {
              value: Rt,
              children: /*#__PURE__*/ c(ie, {
                href: ne,
                motionChild: !0,
                nodeId: `LifsJv7ac`,
                scopeId: `VleVz9CNE`,
                children: /*#__PURE__*/ s(g.a, {
                  ...re,
                  ...oe,
                  className: `${_(z, `framer-t164i3`, v, M)} framer-3w57gg`,
                  "data-framer-name": `Desktop`,
                  layoutDependency: R,
                  layoutId: `LifsJv7ac`,
                  ref: o,
                  style: { ...h },
                  ...U(
                    {
                      "Drx43Q_vh-hover": { "data-framer-name": void 0 },
                      "K6qcGL3xq-hover": { "data-framer-name": void 0 },
                      "LifsJv7ac-hover": { "data-framer-name": void 0 },
                      Drx43Q_vh: { "data-framer-name": `Tablet` },
                      K6qcGL3xq: { "data-framer-name": `Phone` },
                    },
                    j,
                    P
                  ),
                  children: [
                    /*#__PURE__*/ s(g.div, {
                      className: `framer-vba3a5`,
                      "data-framer-name": `Image Frame`,
                      layoutDependency: R,
                      layoutId: `aALi9lpI7`,
                      style: {
                        backgroundColor: `var(--token-e0713304-1995-4429-859c-dba8e865d918)`,
                        borderBottomLeftRadius: 14,
                        borderBottomRightRadius: 14,
                        borderTopLeftRadius: 14,
                        borderTopRightRadius: 14,
                      },
                      children: [
                        /*#__PURE__*/ c(G, {
                          value: zt,
                          children: /*#__PURE__*/ c(N, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: y((m?.y || 0) + 36),
                              sizes: `max((${m?.width || `100vw`} - 48px) / 2, 1px)`,
                              ...W(C),
                            },
                            className: `framer-1uankzi`,
                            "data-framer-name": `Photo Image`,
                            layoutDependency: R,
                            layoutId: `bRo66R320`,
                            style: { scale: 1 },
                            variants: {
                              "Drx43Q_vh-hover": { scale: 1.03 },
                              "K6qcGL3xq-hover": { scale: 1.03 },
                              "LifsJv7ac-hover": { scale: 1.03 },
                            },
                            ...U(
                              {
                                Drx43Q_vh: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: y((m?.y || 0) + 24.3),
                                    sizes: `max((${m?.width || `100vw`} - 32.4px) / 2, 1px)`,
                                    ...W(C),
                                  },
                                },
                                K6qcGL3xq: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: y((m?.y || 0) + 24),
                                    sizes: m?.width || `100vw`,
                                    ...W(C),
                                  },
                                },
                              },
                              j,
                              P
                            ),
                          }),
                        }),
                        /*#__PURE__*/ s(g.div, {
                          className: `framer-21uxsd`,
                          "data-framer-name": `Tag`,
                          layoutDependency: R,
                          layoutId: `zZbiW_vzo`,
                          style: {
                            backgroundColor: `var(--token-571d0275-548e-46dc-a0e1-ca98ff460da3)`,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                          },
                          children: [
                            /*#__PURE__*/ c(g.div, {
                              className: `framer-1ekg804`,
                              "data-framer-name": `Dot`,
                              layoutDependency: R,
                              layoutId: `xmKVp7t3v`,
                              style: {
                                backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                borderBottomLeftRadius: `50%`,
                                borderBottomRightRadius: `50%`,
                                borderTopLeftRadius: `50%`,
                                borderTopRightRadius: `50%`,
                              },
                            }),
                            /*#__PURE__*/ c(L, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ c(r, {
                                children: /*#__PURE__*/ c(g.p, {
                                  className: `framer-styles-preset-1l5t39g`,
                                  "data-styles-preset": `afX_I6eDe`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `start`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                  },
                                  children: `Millbrook`,
                                }),
                              }),
                              className: `framer-i085o4`,
                              "data-framer-name": `Place`,
                              fonts: [`Inter`],
                              layoutDependency: R,
                              layoutId: `xTzpaYslo`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                              },
                              text: w,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ s(g.div, {
                      className: `framer-16j9g9b`,
                      "data-framer-name": `Info`,
                      layoutDependency: R,
                      layoutId: `ld3JD6sD0`,
                      children: [
                        /*#__PURE__*/ s(g.div, {
                          className: `framer-1ix4m3k`,
                          "data-framer-name": `Meta`,
                          layoutDependency: R,
                          layoutId: `l6kxzVK42`,
                          children: [
                            /*#__PURE__*/ c(L, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ c(r, {
                                children: /*#__PURE__*/ c(g.p, {
                                  className: `framer-styles-preset-47y0yi`,
                                  "data-styles-preset": `WcNYxFkzx`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                  },
                                  children: `Job 2417`,
                                }),
                              }),
                              className: `framer-gou36u`,
                              "data-framer-name": `Job`,
                              fonts: [`Inter`],
                              layoutDependency: R,
                              layoutId: `HBNVM0rie`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                              },
                              text: de,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...U(
                                {
                                  "LifsJv7ac-hover": {
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(g.p, {
                                        className: `framer-styles-preset-47y0yi`,
                                        "data-styles-preset": `WcNYxFkzx`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                        },
                                        children: `Job 2417`,
                                      }),
                                    }),
                                  },
                                  Drx43Q_vh: {
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(g.p, {
                                        className: `framer-styles-preset-47y0yi`,
                                        "data-styles-preset": `WcNYxFkzx`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                        },
                                        children: `Job 2417`,
                                      }),
                                    }),
                                  },
                                  K6qcGL3xq: {
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(g.p, {
                                        className: `framer-styles-preset-47y0yi`,
                                        "data-styles-preset": `WcNYxFkzx`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                        },
                                        children: `Job 2417`,
                                      }),
                                    }),
                                  },
                                },
                                j,
                                P
                              ),
                            }),
                            /*#__PURE__*/ c(L, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ c(r, {
                                children: /*#__PURE__*/ c(g.p, {
                                  className: `framer-styles-preset-47y0yi`,
                                  "data-styles-preset": `WcNYxFkzx`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                  },
                                  children: ` · Full replacement`,
                                }),
                              }),
                              className: `framer-1v7w5ma`,
                              "data-framer-name": `Type`,
                              fonts: [`Inter`],
                              layoutDependency: R,
                              layoutId: `Xd8bzTCoQ`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                              },
                              text: B,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...U(
                                {
                                  "LifsJv7ac-hover": {
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(g.p, {
                                        className: `framer-styles-preset-47y0yi`,
                                        "data-styles-preset": `WcNYxFkzx`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                        },
                                        children: ` · Full replacement`,
                                      }),
                                    }),
                                  },
                                  Drx43Q_vh: {
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(g.p, {
                                        className: `framer-styles-preset-47y0yi`,
                                        "data-styles-preset": `WcNYxFkzx`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                        },
                                        children: ` · Full replacement`,
                                      }),
                                    }),
                                  },
                                  K6qcGL3xq: {
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(g.p, {
                                        className: `framer-styles-preset-47y0yi`,
                                        "data-styles-preset": `WcNYxFkzx`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                        },
                                        children: ` · Full replacement`,
                                      }),
                                    }),
                                  },
                                },
                                j,
                                P
                              ),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ c(G, {
                          value: Vt,
                          children: /*#__PURE__*/ c(L, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ c(r, {
                              children: /*#__PURE__*/ c(g.h2, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-size": `31px`,
                                  "--framer-font-variation-axes": `var(--extracted-f6h9gt, "wght" 500)`,
                                  "--framer-letter-spacing": `-0.0321em`,
                                  "--framer-line-height": `1.1071em`,
                                  "--framer-text-color": `var(--extracted-1of0zx5, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                },
                                children: `Tudor revival on Birch Row`,
                              }),
                            }),
                            className: `framer-1r6e6bb`,
                            "data-framer-name": `Title`,
                            fonts: [`FS;Manrope-variable`],
                            layoutDependency: R,
                            layoutId: `W3dAvNYTm`,
                            style: {
                              "--extracted-1of0zx5": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                              "--extracted-f6h9gt": `"wght" 500`,
                              opacity: 1,
                            },
                            text: D,
                            variants: {
                              "Drx43Q_vh-hover": { opacity: 0.72 },
                              "K6qcGL3xq-hover": { opacity: 0.72 },
                              "LifsJv7ac-hover": { opacity: 0.72 },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...U(
                              {
                                Drx43Q_vh: {
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(g.h2, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                        "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                        "--framer-font-size": `26px`,
                                        "--framer-font-variation-axes": `var(--extracted-f6h9gt, "wght" 500)`,
                                        "--framer-letter-spacing": `-0.035em`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--extracted-1of0zx5, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                      },
                                      children: `Tudor revival on Birch Row`,
                                    }),
                                  }),
                                },
                                K6qcGL3xq: {
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(g.h2, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                        "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                        "--framer-font-size": `26px`,
                                        "--framer-font-variation-axes": `var(--extracted-f6h9gt, "wght" 500)`,
                                        "--framer-letter-spacing": `-0.035em`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--extracted-1of0zx5, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                      },
                                      children: `Tudor revival on Birch Row`,
                                    }),
                                  }),
                                },
                              },
                              j,
                              P
                            ),
                          }),
                        }),
                        /*#__PURE__*/ c(L, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ c(r, {
                            children: /*#__PURE__*/ c(g.p, {
                              className: `framer-styles-preset-12clcwd`,
                              "data-styles-preset": `tR22IXYs0`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                              },
                              children: `A 1930s Tudor with three chimneys and eleven valleys. We rebuilt every valley in metal, reflashed the chimneys and kept the steep front gables looking original.`,
                            }),
                          }),
                          className: `framer-1i8x7s9`,
                          "data-framer-name": `Info Text`,
                          fonts: [`Inter`],
                          layoutDependency: R,
                          layoutId: `yRHVQyJso`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                          },
                          text: O,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...U(
                            {
                              K6qcGL3xq: {
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(g.p, {
                                    className: `framer-styles-preset-1eflcgp`,
                                    "data-styles-preset": `vI2CBrBs4`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                    },
                                    children: `A 1930s Tudor with three chimneys and eleven valleys. We rebuilt every valley in metal, reflashed the chimneys and kept the steep front gables looking original.`,
                                  }),
                                }),
                              },
                            },
                            j,
                            P
                          ),
                        }),
                        /*#__PURE__*/ s(g.div, {
                          className: `framer-11lkp4z`,
                          "data-border": !0,
                          "data-framer-name": `Spec`,
                          layoutDependency: R,
                          layoutId: `QcuX_myXI`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                          },
                          children: [
                            /*#__PURE__*/ s(g.div, {
                              className: `framer-1vba36u`,
                              "data-border": !0,
                              "data-framer-name": `Cell`,
                              layoutDependency: R,
                              layoutId: `PODFXqlF5`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                /*#__PURE__*/ c(L, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(g.p, {
                                      className: `framer-styles-preset-1shce9c`,
                                      "data-styles-preset": `tIlpg4oDC`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                      },
                                      children: `Material`,
                                    }),
                                  }),
                                  className: `framer-rc9d36`,
                                  "data-framer-name": `Label`,
                                  fonts: [`Inter`],
                                  layoutDependency: R,
                                  layoutId: `ZeBGLptZq`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...U(
                                    {
                                      "LifsJv7ac-hover": {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-1shce9c`,
                                            "data-styles-preset": `tIlpg4oDC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                            },
                                            children: `Material`,
                                          }),
                                        }),
                                      },
                                      Drx43Q_vh: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-1shce9c`,
                                            "data-styles-preset": `tIlpg4oDC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                            },
                                            children: `Material`,
                                          }),
                                        }),
                                      },
                                      K6qcGL3xq: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-1shce9c`,
                                            "data-styles-preset": `tIlpg4oDC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                            },
                                            children: `Material`,
                                          }),
                                        }),
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                }),
                                /*#__PURE__*/ c(L, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(g.p, {
                                      className: `framer-styles-preset-16xh1p8`,
                                      "data-styles-preset": `LxLub0fqM`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                      },
                                      children: `Architectural shingle`,
                                    }),
                                  }),
                                  className: `framer-vf5kez`,
                                  "data-framer-name": `Value`,
                                  fonts: [`Inter`],
                                  layoutDependency: R,
                                  layoutId: `KFPPATBHl`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                  },
                                  text: k,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...U(
                                    {
                                      "LifsJv7ac-hover": {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-16xh1p8`,
                                            "data-styles-preset": `LxLub0fqM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `Architectural shingle`,
                                          }),
                                        }),
                                      },
                                      Drx43Q_vh: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-16xh1p8`,
                                            "data-styles-preset": `LxLub0fqM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `Architectural shingle`,
                                          }),
                                        }),
                                      },
                                      K6qcGL3xq: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-16xh1p8`,
                                            "data-styles-preset": `LxLub0fqM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `Architectural shingle`,
                                          }),
                                        }),
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ s(g.div, {
                              className: `framer-11cizap`,
                              "data-border": !0,
                              "data-framer-name": `Cell`,
                              layoutDependency: R,
                              layoutId: `Zylbgc_GJ`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                /*#__PURE__*/ c(L, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(g.p, {
                                      className: `framer-styles-preset-1shce9c`,
                                      "data-styles-preset": `tIlpg4oDC`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                      },
                                      children: `Size`,
                                    }),
                                  }),
                                  className: `framer-650ehy`,
                                  "data-framer-name": `Label`,
                                  fonts: [`Inter`],
                                  layoutDependency: R,
                                  layoutId: `Cihg5PKjP`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...U(
                                    {
                                      "LifsJv7ac-hover": {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-1shce9c`,
                                            "data-styles-preset": `tIlpg4oDC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                            },
                                            children: `Size`,
                                          }),
                                        }),
                                      },
                                      Drx43Q_vh: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-1shce9c`,
                                            "data-styles-preset": `tIlpg4oDC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                            },
                                            children: `Size`,
                                          }),
                                        }),
                                      },
                                      K6qcGL3xq: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-1shce9c`,
                                            "data-styles-preset": `tIlpg4oDC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                            },
                                            children: `Size`,
                                          }),
                                        }),
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                }),
                                /*#__PURE__*/ c(L, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(g.p, {
                                      className: `framer-styles-preset-16xh1p8`,
                                      "data-styles-preset": `LxLub0fqM`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                      },
                                      children: `34 squares`,
                                    }),
                                  }),
                                  className: `framer-19hvbs`,
                                  "data-framer-name": `Value`,
                                  fonts: [`Inter`],
                                  layoutDependency: R,
                                  layoutId: `UxiVDoOx0`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                  },
                                  text: ee,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...U(
                                    {
                                      "LifsJv7ac-hover": {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-16xh1p8`,
                                            "data-styles-preset": `LxLub0fqM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `34 squares`,
                                          }),
                                        }),
                                      },
                                      Drx43Q_vh: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-16xh1p8`,
                                            "data-styles-preset": `LxLub0fqM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `34 squares`,
                                          }),
                                        }),
                                      },
                                      K6qcGL3xq: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-16xh1p8`,
                                            "data-styles-preset": `LxLub0fqM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `34 squares`,
                                          }),
                                        }),
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ s(g.div, {
                              className: `framer-c79xme`,
                              "data-border": !0,
                              "data-framer-name": `Cell`,
                              layoutDependency: R,
                              layoutId: `f7mfEOl5N`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                /*#__PURE__*/ c(L, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(g.p, {
                                      className: `framer-styles-preset-1shce9c`,
                                      "data-styles-preset": `tIlpg4oDC`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                      },
                                      children: `On site`,
                                    }),
                                  }),
                                  className: `framer-uohhn8`,
                                  "data-framer-name": `Label`,
                                  fonts: [`Inter`],
                                  layoutDependency: R,
                                  layoutId: `AOtQXuJjT`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...U(
                                    {
                                      "LifsJv7ac-hover": {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-1shce9c`,
                                            "data-styles-preset": `tIlpg4oDC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                            },
                                            children: `On site`,
                                          }),
                                        }),
                                      },
                                      Drx43Q_vh: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-1shce9c`,
                                            "data-styles-preset": `tIlpg4oDC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                            },
                                            children: `On site`,
                                          }),
                                        }),
                                      },
                                      K6qcGL3xq: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-1shce9c`,
                                            "data-styles-preset": `tIlpg4oDC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                            },
                                            children: `On site`,
                                          }),
                                        }),
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                }),
                                /*#__PURE__*/ c(L, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(g.p, {
                                      className: `framer-styles-preset-16xh1p8`,
                                      "data-styles-preset": `LxLub0fqM`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                      },
                                      children: `4 days`,
                                    }),
                                  }),
                                  className: `framer-waryn2`,
                                  "data-framer-name": `Value`,
                                  fonts: [`Inter`],
                                  layoutDependency: R,
                                  layoutId: `Dn3ip9aES`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                  },
                                  text: A,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...U(
                                    {
                                      "LifsJv7ac-hover": {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-16xh1p8`,
                                            "data-styles-preset": `LxLub0fqM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `4 days`,
                                          }),
                                        }),
                                      },
                                      Drx43Q_vh: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-16xh1p8`,
                                            "data-styles-preset": `LxLub0fqM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `4 days`,
                                          }),
                                        }),
                                      },
                                      K6qcGL3xq: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-16xh1p8`,
                                            "data-styles-preset": `LxLub0fqM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `4 days`,
                                          }),
                                        }),
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ s(g.div, {
                              className: `framer-43oztd`,
                              "data-border": !0,
                              "data-framer-name": `Cell`,
                              layoutDependency: R,
                              layoutId: `Raas9220Y`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                /*#__PURE__*/ c(L, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(g.p, {
                                      className: `framer-styles-preset-1shce9c`,
                                      "data-styles-preset": `tIlpg4oDC`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                      },
                                      children: `Completed`,
                                    }),
                                  }),
                                  className: `framer-1yg74qk`,
                                  "data-framer-name": `Label`,
                                  fonts: [`Inter`],
                                  layoutDependency: R,
                                  layoutId: `cCy6X1j2b`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...U(
                                    {
                                      "LifsJv7ac-hover": {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-1shce9c`,
                                            "data-styles-preset": `tIlpg4oDC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                            },
                                            children: `Completed`,
                                          }),
                                        }),
                                      },
                                      Drx43Q_vh: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-1shce9c`,
                                            "data-styles-preset": `tIlpg4oDC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                            },
                                            children: `Completed`,
                                          }),
                                        }),
                                      },
                                      K6qcGL3xq: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-1shce9c`,
                                            "data-styles-preset": `tIlpg4oDC`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                            },
                                            children: `Completed`,
                                          }),
                                        }),
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                }),
                                /*#__PURE__*/ c(L, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ c(g.p, {
                                      className: `framer-styles-preset-16xh1p8`,
                                      "data-styles-preset": `LxLub0fqM`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                      },
                                      children: `Sep 2026`,
                                    }),
                                  }),
                                  className: `framer-191f03b`,
                                  "data-framer-name": `Value`,
                                  fonts: [`Inter`],
                                  layoutDependency: R,
                                  layoutId: `es5DrzN6D`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                  },
                                  text: te,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...U(
                                    {
                                      "LifsJv7ac-hover": {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-16xh1p8`,
                                            "data-styles-preset": `LxLub0fqM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `Sep 2026`,
                                          }),
                                        }),
                                      },
                                      Drx43Q_vh: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-16xh1p8`,
                                            "data-styles-preset": `LxLub0fqM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `Sep 2026`,
                                          }),
                                        }),
                                      },
                                      K6qcGL3xq: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(g.p, {
                                            className: `framer-styles-preset-16xh1p8`,
                                            "data-styles-preset": `LxLub0fqM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `Sep 2026`,
                                          }),
                                        }),
                                      },
                                    },
                                    j,
                                    P
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ s(g.div, {
                          className: `framer-ov13oc`,
                          "data-border": !0,
                          "data-framer-name": `Read Link`,
                          layoutDependency: R,
                          layoutId: `WxXLxrEU0`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          children: [
                            /*#__PURE__*/ c(L, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ c(r, {
                                children: /*#__PURE__*/ c(g.p, {
                                  className: `framer-styles-preset-omzpzd`,
                                  "data-styles-preset": `pQZwXTEEF`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                  },
                                  children: `Read the job notes`,
                                }),
                              }),
                              className: `framer-fo5a40`,
                              "data-framer-name": `Label`,
                              fonts: [`Inter`],
                              layoutDependency: R,
                              layoutId: `w02Bo31lu`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...U(
                                {
                                  "LifsJv7ac-hover": {
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(g.p, {
                                        className: `framer-styles-preset-omzpzd`,
                                        "data-styles-preset": `pQZwXTEEF`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                        },
                                        children: `Read the job notes`,
                                      }),
                                    }),
                                  },
                                  Drx43Q_vh: {
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(g.p, {
                                        className: `framer-styles-preset-omzpzd`,
                                        "data-styles-preset": `pQZwXTEEF`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                        },
                                        children: `Read the job notes`,
                                      }),
                                    }),
                                  },
                                  K6qcGL3xq: {
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(g.p, {
                                        className: `framer-styles-preset-omzpzd`,
                                        "data-styles-preset": `pQZwXTEEF`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                        },
                                        children: `Read the job notes`,
                                      }),
                                    }),
                                  },
                                },
                                j,
                                P
                              ),
                            }),
                            /*#__PURE__*/ c(he, {
                              animated: !0,
                              className: `framer-lr0029`,
                              "data-framer-name": `Arrow`,
                              layoutDependency: R,
                              layoutId: `BSUJndROq`,
                              style: {
                                "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                "--js9iwy": 2,
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (qt = [
        `.framer-NI12b.framer-3w57gg, .framer-NI12b .framer-3w57gg { display: block; }`,
        `.framer-NI12b.framer-t164i3 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 36px 0px 36px 0px; position: relative; text-decoration: none; width: 1123px; }`,
        `.framer-NI12b .framer-vba3a5 { align-self: stretch; flex: 1 0 0px; height: auto; min-height: 384px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-NI12b .framer-1uankzi { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }`,
        `.framer-NI12b .framer-21uxsd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; left: 14px; padding: 7px 12px 7px 12px; position: absolute; top: 14px; width: min-content; }`,
        `.framer-NI12b .framer-1ekg804 { flex: none; height: 7px; position: relative; width: 7px; }`,
        `.framer-NI12b .framer-i085o4, .framer-NI12b .framer-gou36u, .framer-NI12b .framer-1v7w5ma, .framer-NI12b .framer-fo5a40 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-NI12b .framer-16j9g9b { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 6px 0px 6px 0px; position: relative; width: 1px; }`,
        `.framer-NI12b .framer-1ix4m3k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NI12b .framer-1r6e6bb, .framer-NI12b .framer-rc9d36, .framer-NI12b .framer-vf5kez, .framer-NI12b .framer-650ehy, .framer-NI12b .framer-19hvbs, .framer-NI12b .framer-uohhn8, .framer-NI12b .framer-waryn2, .framer-NI12b .framer-1yg74qk, .framer-NI12b .framer-191f03b { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NI12b .framer-1i8x7s9 { flex: none; height: auto; max-width: 530px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NI12b .framer-11lkp4z { display: grid; flex: none; gap: 0px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: start; padding: 1px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-NI12b .framer-1vba36u, .framer-NI12b .framer-c79xme { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 100%; justify-content: flex-start; justify-self: start; padding: 14px 12px 15px 0px; position: relative; width: 100%; }`,
        `.framer-NI12b .framer-11cizap, .framer-NI12b .framer-43oztd { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 100%; justify-content: flex-start; justify-self: start; padding: 14px 12px 15px 17px; position: relative; width: 100%; }`,
        `.framer-NI12b .framer-ov13oc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px 0px 4px 0px; position: relative; width: min-content; }`,
        `.framer-NI12b .framer-lr0029 { flex: none; height: auto; position: relative; width: 16px; }`,
        `.framer-NI12b.framer-v-dufd5s.framer-t164i3 { gap: 32.4px; padding: 24.3px 0px 24.3px 0px; width: 758px; }`,
        `.framer-NI12b.framer-v-18kzncb.framer-t164i3 { flex-direction: column; gap: 24px; padding: 24px 0px 24px 0px; width: 358px; }`,
        `.framer-NI12b.framer-v-18kzncb .framer-vba3a5 { align-self: unset; aspect-ratio: 1.4 / 1; flex: none; min-height: 0px; width: 100%; }`,
        `.framer-NI12b.framer-v-18kzncb .framer-16j9g9b { flex: none; width: 100%; }`,
        `.framer-NI12b.framer-v-18kzncb.hover .framer-vba3a5 { align-self: unset; }`,
        ...He,
        ...V,
        ...Le,
        ...Ie,
        ...Ae,
        ...Ke,
        ...ut,
        `.framer-NI12b[data-border="true"]::after, .framer-NI12b [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (K = D(Kt, qt, `framer-NI12b`)),
      (K.displayName = `Project Row`),
      (K.defaultProps = { height: 472, width: 1123 }),
      E(K, {
        variant: {
          options: [`LifsJv7ac`, `Drx43Q_vh`, `K6qcGL3xq`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: F.Enum,
        },
        lgBPwa_IP: { title: `Image`, type: F.ResponsiveImage },
        lf953UjZT: { defaultValue: `Millbrook`, title: `Place`, type: F.String },
        onlf953UjZTChange: { changes: `lf953UjZT`, type: F.ChangeHandler },
        sCAz6NYii: { defaultValue: `2417`, title: `Job`, type: F.String },
        onsCAz6NYiiChange: { changes: `sCAz6NYii`, type: F.ChangeHandler },
        pfZ42ZJeC: { defaultValue: `Full replacement`, title: `Type`, type: F.String },
        onpfZ42ZJeCChange: { changes: `pfZ42ZJeC`, type: F.ChangeHandler },
        J1cCPa85u: { defaultValue: `Tudor revival on Birch Row`, title: `Title`, type: F.String },
        onJ1cCPa85uChange: { changes: `J1cCPa85u`, type: F.ChangeHandler },
        CgCZJzADz: {
          defaultValue: `A 1930s Tudor with three chimneys and eleven valleys. We rebuilt every valley in metal, reflashed the chimneys and kept the steep front gables looking original.`,
          title: `Text`,
          type: F.String,
        },
        onCgCZJzADzChange: { changes: `CgCZJzADz`, type: F.ChangeHandler },
        UfN2kOhqT: { defaultValue: `Architectural shingle`, title: `Material`, type: F.String },
        onUfN2kOhqTChange: { changes: `UfN2kOhqT`, type: F.ChangeHandler },
        ppYHIT51h: { defaultValue: `34 squares`, title: `Size`, type: F.String },
        onppYHIT51hChange: { changes: `ppYHIT51h`, type: F.ChangeHandler },
        I6Jk0md5C: { defaultValue: `4 days`, title: `On Site`, type: F.String },
        onI6Jk0md5CChange: { changes: `I6Jk0md5C`, type: F.ChangeHandler },
        NWjfeZGNK: { defaultValue: `Sep 2026`, title: `Completed`, type: F.String },
        onNWjfeZGNKChange: { changes: `NWjfeZGNK`, type: F.ChangeHandler },
        FUynJFX2W: { title: `Link`, type: F.Link },
      }),
      x(
        K,
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
          ...Nt,
          ...B(Ue),
          ...B(_e),
          ...B(ze),
          ...B(Re),
          ...B(be),
          ...B(qe),
          ...B(dt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Yt(e) {
  let t = i(null);
  return (
    f(() => {
      let n = 0,
        r = () => {
          let n = t.current;
          if (!n) return;
          let r = document.querySelectorAll(
            `div[data-framer-name="Project List"] [data-framer-name="Row Wrap"]`
          ).length;
          e(r, n);
        },
        i = () => {
          (cancelAnimationFrame(n), (n = requestAnimationFrame(r)));
        };
      i();
      let a = new MutationObserver(i);
      return (
        a.observe(document.body, { childList: !0, subtree: !0 }),
        () => {
          (a.disconnect(), cancelAnimationFrame(n));
        }
      );
    }, []),
    t
  );
}
function Xt(e) {
  return (t) => {
    let n = Yt((e, t) => {
      let n = t.querySelector(`p`) || t.firstElementChild;
      n && n.textContent !== String(e) && (n.textContent = String(e));
    });
    return /*#__PURE__*/ c(`div`, {
      ref: n,
      style: { display: `contents` },
      "aria-live": `polite`,
      children: /*#__PURE__*/ c(e, { ...t }),
    });
  };
}
function Zt(e) {
  return (t) => {
    let n = Yt((e, t) => {
      let n = t.firstElementChild;
      n && (n.style.display = e === 0 ? `flex` : `none`);
    });
    return /*#__PURE__*/ c(`div`, {
      ref: n,
      style: { display: `contents` },
      children: /*#__PURE__*/ c(e, { ...t, style: { ...t.style, display: `none` } }),
    });
  };
}
function Qt() {
  return (Qt = e(() => {
    (u(), d());
  }))();
}
var $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  $,
  Tn;
function En() {
  return (En = e(() => {
    (u(),
      w(),
      h(),
      d(),
      je(),
      Ce(),
      at(),
      Mt(),
      st(),
      Jt(),
      Qt(),
      rt(),
      me(),
      De(),
      Ze(),
      Pe(),
      pt(),
      _t(),
      ($t = k(ot)),
      (en = v(A)),
      (tn = k(H)),
      (nn = ae(L, { nodeId: `irr5a6npM`, override: Xt, scopeId: `WiWpK4bRq` })),
      (rn = v(g.div)),
      (an = k(K)),
      (on = k(Oe)),
      (sn = k(Me)),
      (cn = ae(g.div, { nodeId: `jalwy6spY`, override: Zt, scopeId: `WiWpK4bRq` })),
      (ln = v(cn)),
      (un = k(ct)),
      (dn = {
        D37GFikET: `(min-width: 1200px)`,
        HSnDBUDIe: `(max-width: 809.98px)`,
        WrmOV3I6p: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (fn = [`material`, `service`, `town`]),
      (pn = `framer-k7laL`),
      (mn = {
        D37GFikET: `framer-v-uafapv`,
        HSnDBUDIe: `framer-v-ajbctb`,
        WrmOV3I6p: `framer-v-x01qap`,
      }),
      (hn = (e, t, n) => (e && t ? `position` : n)),
      (q = {
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
      (J = { delay: 0, duration: 0.9, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (Y = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: J,
        x: 0,
        y: 22,
      }),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Z = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (Q = (e, t) => (e ? `QphOgITFF` : `YAs8nZ0Tn`)),
      (gn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (_n = (e, t, n) => ({
        from: { alias: `Nirke3zcr`, data: it, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        select: [
          { collection: `Nirke3zcr`, name: `vqXnmEfz7`, type: `Identifier` },
          { collection: `Nirke3zcr`, name: `tm9NnvEJk`, type: `Identifier` },
          { collection: `Nirke3zcr`, name: `MvsrTCRTN`, type: `Identifier` },
          { collection: `Nirke3zcr`, name: `QfwHrYl90`, type: `Identifier` },
          { collection: `Nirke3zcr`, name: `BhZQERqHl`, type: `Identifier` },
          { collection: `Nirke3zcr`, name: `jIPslaZrs`, type: `Identifier` },
          { collection: `Nirke3zcr`, name: `tdlwFAgcB`, type: `Identifier` },
          { collection: `Nirke3zcr`, name: `t5D1YeFxK`, type: `Identifier` },
          { collection: `Nirke3zcr`, name: `ykZZqRPuA`, type: `Identifier` },
          { collection: `Nirke3zcr`, name: `tv7IG8uvE`, type: `Identifier` },
          { collection: `Nirke3zcr`, name: `v7n5zILXz`, type: `Identifier` },
          { collection: `Nirke3zcr`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: {
            left: {
              arguments: [
                { collection: `Nirke3zcr`, name: `tEwG907oT`, type: `Identifier` },
                { type: `LiteralValue`, value: e },
              ],
              functionName: `CONTAINS`,
              type: `FunctionCall`,
            },
            operator: `and`,
            right: {
              arguments: [
                { collection: `Nirke3zcr`, name: `kieVLqGyz`, type: `Identifier` },
                { type: `LiteralValue`, value: t },
              ],
              functionName: `CONTAINS`,
              type: `FunctionCall`,
            },
            type: `BinaryOperation`,
          },
          operator: `and`,
          right: {
            arguments: [
              { collection: `Nirke3zcr`, name: `ILJSeMxJN`, type: `Identifier` },
              { type: `LiteralValue`, value: n },
            ],
            functionName: `CONTAINS`,
            type: `FunctionCall`,
          },
          type: `BinaryOperation`,
        },
      })),
      (vn = ({ query: e, pageSize: t, children: n }) => n(ee(e))),
      (yn = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (bn = { Desktop: `D37GFikET`, Phone: `HSnDBUDIe`, Tablet: `WrmOV3I6p` }),
      (xn = ({ value: e }) =>
        j()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Sn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: bn[r.variant] ?? r.variant ?? `D37GFikET`,
      })),
      (Cn = /*#__PURE__*/ l(function (e, l) {
        let u = i(null),
          d = l ?? u;
        n();
        let { activeLocale: f, contentLocale: h, setLocale: v } = ue(),
          y = le(),
          [x, S] = C({ initialValue: `all`, parameterName: `material` }),
          [w, T] = C({ initialValue: `all`, parameterName: `service` }),
          [E, D] = C({ initialValue: `all`, parameterName: `town` }),
          { style: O, className: k, layoutId: ee, variant: ie, ...j } = Sn(e),
          ae = o(() => vt({}, h), [h]);
        de(ae);
        let [N, se] = oe(ie, dn, !1),
          F = _(pn, Te, gt, fe, nt, Ne),
          I = t(ne)?.isLayoutTemplate,
          B = !!t(m)?.transition?.layout,
          pe = hn(I, B);
        R();
        let { activeVariantCallback: V, delay: me } = ce(void 0),
          he = V(async (...e) => {
            S?.(`all`);
          }),
          ge = V(async (...e) => {
            S?.(`asphalt`);
          }),
          _e = V(async (...e) => {
            S?.(`slate`);
          }),
          ve = V(async (...e) => {
            T?.(`all`);
          }),
          ye = V(async (...e) => {
            T?.(`replacement`);
          }),
          be = V(async (...e) => {
            T?.(`storm`);
          }),
          xe = V(async (...e) => {
            T?.(`gutters`);
          }),
          Se = V(async (...e) => {
            T?.(`restoration`);
          }),
          Ce = V(async (...e) => {
            D?.(`all`);
          }),
          we = V(async (...e) => {
            D?.(`millbrook`);
          }),
          Ee = V(async (...e) => {
            D?.(`orchard-lane`);
          }),
          De = V(async (...e) => {
            D?.(`kestrel-heights`);
          }),
          ke = V(async (...e) => {
            D?.(`fenwick`);
          }),
          Ae = V(async (...e) => {
            D?.(`ashford-old-town`);
          }),
          je = V(async (...e) => {
            (S?.(`all`), T?.(`all`), D?.(`all`));
          });
        return (
          re({}),
          /*#__PURE__*/ c(ne.Provider, {
            value: {
              activeVariantId: N,
              humanReadableVariantMap: bn,
              primaryVariantId: `D37GFikET`,
              variantClassNames: mn,
            },
            children: /*#__PURE__*/ s(p, {
              id: ee ?? `WiWpK4bRq`,
              children: [
                /*#__PURE__*/ c(xn, { value: `html body { background: rgb(243, 241, 236); }` }),
                /*#__PURE__*/ s(g.div, {
                  ...j,
                  className: _(F, `framer-uafapv`, k),
                  ref: d,
                  style: { ...O },
                  children: [
                    /*#__PURE__*/ c(g.section, {
                      className: `framer-1v71wrs`,
                      "data-framer-name": `Page Header`,
                      layout: pe,
                      children: /*#__PURE__*/ c(`div`, {
                        className: `framer-q6evjl`,
                        "data-framer-name": `Wrap`,
                        children: /*#__PURE__*/ c(b, {
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
                              breakpoint: N,
                              overrides: {
                                HSnDBUDIe: {
                                  width: `calc(min(${y?.width || `100vw`}, 1356.8px) - 32px)`,
                                },
                                WrmOV3I6p: {
                                  width: `calc(min(${y?.width || `100vw`}, 1356.8px) - 51.84px)`,
                                },
                              },
                              children: /*#__PURE__*/ c(M, {
                                height: 420,
                                width: `calc(min(${y?.width || `100vw`}, 1356.8px) - 76.8px)`,
                                children: /*#__PURE__*/ c(en, {
                                  __framer__animate: { transition: J },
                                  __framer__animateOnce: !0,
                                  __framer__enter: q,
                                  __framer__exit: Y,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.1,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-x7ue4r-container`,
                                  nodeId: `eCcOaBl6y`,
                                  rendersWithMotion: !0,
                                  scopeId: `WiWpK4bRq`,
                                  children: /*#__PURE__*/ c(z, {
                                    breakpoint: N,
                                    overrides: {
                                      HSnDBUDIe: { It28Y5X9j: e[2], variant: X(`uICggN2du`) },
                                      WrmOV3I6p: { It28Y5X9j: e[1], variant: X(`TfkArrr5A`) },
                                    },
                                    children: /*#__PURE__*/ c(ot, {
                                      CGwlWG4ol: `Squares`,
                                      FG3t9FWa8: `5`,
                                      HBTbh9G8O: !0,
                                      height: `100%`,
                                      hMZ105swj: `5`,
                                      id: `eCcOaBl6y`,
                                      iSNc6W9hP: !0,
                                      It28Y5X9j: e[0],
                                      layoutId: `eCcOaBl6y`,
                                      MK178g8ug: `Towns`,
                                      mSN3imh79: `153`,
                                      nlQbxAcuC: !1,
                                      OBv5F6rMT: `Sample case studies from the original template, not completed Regolith work. They show how future project reports can be presented.`,
                                      oTs3glLJw: `Jobs shown`,
                                      p7daXTSXv: !0,
                                      pcZW_xPpm: `Estimate a replacement`,
                                      SgWelmIDH: `Discuss your project`,
                                      SRo9k93eF: `Ideas for your next chapter`,
                                      style: { width: `100%` },
                                      UBqoV3kz1: !0,
                                      variant: X(`qNqoNGiMK`),
                                      VO_ZPpF3b: `Projects`,
                                      width: `100%`,
                                      YDXaX92M1: `(Sample projects)`,
                                      ZFZUX5Tw2: `Sep 2026`,
                                      ZtLWbYge9: `Latest`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ c(g.section, {
                      className: `framer-iwgel4`,
                      "data-framer-name": `Project List`,
                      layout: pe,
                      children: /*#__PURE__*/ s(`div`, {
                        className: `framer-16fxy8g`,
                        "data-framer-name": `Wrap`,
                        children: [
                          /*#__PURE__*/ s(rn, {
                            __framer__animate: { transition: J },
                            __framer__animateOnce: !0,
                            __framer__enter: q,
                            __framer__exit: Y,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.1,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-acdyea`,
                            "data-border": !0,
                            "data-framer-name": `Filters`,
                            children: [
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-1196cbp`,
                                "data-border": !0,
                                "data-framer-name": `Filter Group`,
                                children: [
                                  /*#__PURE__*/ c(L, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(`p`, {
                                        className: `framer-styles-preset-283lhz`,
                                        "data-styles-preset": `aRruFqxZx`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                                        },
                                        children: `Material`,
                                      }),
                                    }),
                                    className: `framer-1ffdewh`,
                                    "data-framer-name": `Legend`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ s(`div`, {
                                    className: `framer-1xck7sv`,
                                    "data-framer-name": `Pills`,
                                    children: [
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-e86cjo-container`,
                                          nodeId: `fQXtNi8Uf`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `fQXtNi8Uf`,
                                            layoutId: `fQXtNi8Uf`,
                                            quBOmJ0X3: he,
                                            RDL1vLU64: `All`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(x, `all`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-199qud9-container`,
                                          nodeId: `Y9E6oI8zY`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `Y9E6oI8zY`,
                                            layoutId: `Y9E6oI8zY`,
                                            quBOmJ0X3: ge,
                                            RDL1vLU64: `Asphalt shingle`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(x, `asphalt`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-17ezf9r-container`,
                                          nodeId: `N84BIGE_t`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `N84BIGE_t`,
                                            layoutId: `N84BIGE_t`,
                                            quBOmJ0X3: _e,
                                            RDL1vLU64: `Natural slate`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(x, `slate`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-8v9r7l`,
                                "data-border": !0,
                                "data-framer-name": `Filter Group`,
                                children: [
                                  /*#__PURE__*/ c(L, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(`p`, {
                                        className: `framer-styles-preset-283lhz`,
                                        "data-styles-preset": `aRruFqxZx`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                                        },
                                        children: `Service`,
                                      }),
                                    }),
                                    className: `framer-4r3vgy`,
                                    "data-framer-name": `Legend`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ s(`div`, {
                                    className: `framer-1qm7ah6`,
                                    "data-framer-name": `Pills`,
                                    children: [
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-1pr0q4q-container`,
                                          nodeId: `o6xe9BOm2`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `o6xe9BOm2`,
                                            layoutId: `o6xe9BOm2`,
                                            quBOmJ0X3: ve,
                                            RDL1vLU64: `All`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(w, `all`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-qi3g10-container`,
                                          nodeId: `pZEIcV26T`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `pZEIcV26T`,
                                            layoutId: `pZEIcV26T`,
                                            quBOmJ0X3: ye,
                                            RDL1vLU64: `New homes`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(w, `replacement`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-1rix5rm-container`,
                                          nodeId: `gODth78pK`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `gODth78pK`,
                                            layoutId: `gODth78pK`,
                                            quBOmJ0X3: be,
                                            RDL1vLU64: `Extensions`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(w, `storm`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-10tm04v-container`,
                                          nodeId: `jL7n49x8t`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `jL7n49x8t`,
                                            layoutId: `jL7n49x8t`,
                                            quBOmJ0X3: xe,
                                            RDL1vLU64: `Exterior improvements`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(w, `gutters`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-1g4eg0i-container`,
                                          nodeId: `YJOBT3_3F`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `YJOBT3_3F`,
                                            layoutId: `YJOBT3_3F`,
                                            quBOmJ0X3: Se,
                                            RDL1vLU64: `Slate restoration`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(w, `restoration`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-16nlqk9`,
                                "data-border": !0,
                                "data-framer-name": `Filter Group`,
                                children: [
                                  /*#__PURE__*/ c(L, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(`p`, {
                                        className: `framer-styles-preset-283lhz`,
                                        "data-styles-preset": `aRruFqxZx`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                                        },
                                        children: `Town`,
                                      }),
                                    }),
                                    className: `framer-vddqd5`,
                                    "data-framer-name": `Legend`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ s(`div`, {
                                    className: `framer-178tth2`,
                                    "data-framer-name": `Pills`,
                                    children: [
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-1onw55w-container`,
                                          nodeId: `xyXzh6EJS`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `xyXzh6EJS`,
                                            layoutId: `xyXzh6EJS`,
                                            quBOmJ0X3: Ce,
                                            RDL1vLU64: `All`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(E, `all`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-8m4c1n-container`,
                                          nodeId: `OvEr6s2cd`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `OvEr6s2cd`,
                                            layoutId: `OvEr6s2cd`,
                                            quBOmJ0X3: we,
                                            RDL1vLU64: `Millbrook`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(E, `millbrook`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-1vanduu-container`,
                                          nodeId: `zzjmuMDkw`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `zzjmuMDkw`,
                                            layoutId: `zzjmuMDkw`,
                                            quBOmJ0X3: Ee,
                                            RDL1vLU64: `Orchard Lane`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(E, `orchard-lane`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-t3k1w2-container`,
                                          nodeId: `DJoJldbgP`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `DJoJldbgP`,
                                            layoutId: `DJoJldbgP`,
                                            quBOmJ0X3: De,
                                            RDL1vLU64: `Kestrel Heights`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(E, `kestrel-heights`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-1mfi2hs-container`,
                                          nodeId: `k92YoJbSL`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `k92YoJbSL`,
                                            layoutId: `k92YoJbSL`,
                                            quBOmJ0X3: ke,
                                            RDL1vLU64: `Fenwick`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(E, `fenwick`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      /*#__PURE__*/ c(M, {
                                        height: 38,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-1ywo6e2-container`,
                                          nodeId: `tqOKfKsBy`,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(H, {
                                            height: `100%`,
                                            id: `tqOKfKsBy`,
                                            layoutId: `tqOKfKsBy`,
                                            quBOmJ0X3: Ae,
                                            RDL1vLU64: `Ashford Old Town`,
                                            style: { height: `100%` },
                                            variant: X(Q(Z(E, `ashford-old-town`), h)),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-1wa4yib`,
                                "data-framer-name": `Status`,
                                children: [
                                  /*#__PURE__*/ s(`div`, {
                                    className: `framer-wil4u2`,
                                    "data-framer-name": `Count`,
                                    children: [
                                      /*#__PURE__*/ c(nn, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-gc4iul`,
                                            "data-styles-preset": `ZWUMYAzOn`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                            },
                                            children: `5`,
                                          }),
                                        }),
                                        className: `framer-16ru0ys`,
                                        "data-framer-name": `Shown`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ c(L, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(`p`, {
                                            className: `framer-styles-preset-cmzjx3`,
                                            "data-styles-preset": `BhvMSfpVv`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                                            },
                                            children: ` of 5 projects`,
                                          }),
                                        }),
                                        className: `framer-15qc9c1`,
                                        "data-framer-name": `Of`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ c(g.div, {
                                    className: `framer-1q972yd`,
                                    "data-border": !0,
                                    "data-framer-name": `Clear`,
                                    onTap: je,
                                    children: /*#__PURE__*/ c(L, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ c(r, {
                                        children: /*#__PURE__*/ c(`p`, {
                                          className: `framer-styles-preset-15ve3u`,
                                          "data-styles-preset": `nER_k8qot`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                          },
                                          children: `Clear filters`,
                                        }),
                                      }),
                                      className: `framer-1j4wy9j`,
                                      "data-framer-name": `Label`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /*#__PURE__*/ c(`div`, {
                            className: `framer-jf79g5`,
                            "data-framer-name": `Space`,
                          }),
                          /*#__PURE__*/ c(rn, {
                            __framer__animate: { transition: J },
                            __framer__animateOnce: !0,
                            __framer__enter: q,
                            __framer__exit: Y,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.1,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-td3iky`,
                            "data-framer-name": `Project List`,
                            children: /*#__PURE__*/ c(P, {
                              children: /*#__PURE__*/ c(vn, {
                                query: _n(x, w, E),
                                children: (e, t, n) =>
                                  /*#__PURE__*/ c(a, {
                                    children: e?.map(
                                      (
                                        {
                                          BhZQERqHl: e,
                                          id: t,
                                          jIPslaZrs: n,
                                          MvsrTCRTN: r,
                                          QfwHrYl90: i,
                                          t5D1YeFxK: a,
                                          tdlwFAgcB: o,
                                          tm9NnvEJk: s,
                                          tv7IG8uvE: l,
                                          v7n5zILXz: u,
                                          vqXnmEfz7: d,
                                          ykZZqRPuA: f,
                                        },
                                        m
                                      ) => (
                                        (s ??= ``),
                                        (r ??= ``),
                                        (i ??= ``),
                                        (e ??= ``),
                                        (n ??= ``),
                                        (o ??= ``),
                                        (a ??= ``),
                                        (f ??= ``),
                                        (l ??= ``),
                                        (u ??= ``),
                                        /*#__PURE__*/ c(
                                          p,
                                          {
                                            id: `Nirke3zcr-${t}`,
                                            children: /*#__PURE__*/ c(te.Provider, {
                                              value: { v7n5zILXz: u },
                                              children: /*#__PURE__*/ c(`div`, {
                                                className: `framer-qeu3zo`,
                                                "data-border": !0,
                                                "data-framer-name": `Row Wrap`,
                                                children: /*#__PURE__*/ c(b, {
                                                  links: [
                                                    {
                                                      href: {
                                                        pathVariables: { v7n5zILXz: u },
                                                        webPageId: `rKbXPm35n`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { v7n5zILXz: u },
                                                        webPageId: `rKbXPm35n`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { v7n5zILXz: u },
                                                        webPageId: `rKbXPm35n`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                  ],
                                                  children: (t) =>
                                                    /*#__PURE__*/ c(z, {
                                                      breakpoint: N,
                                                      overrides: {
                                                        HSnDBUDIe: {
                                                          width: `calc(min(${y?.width || `100vw`}, 1356.8px) - 32px)`,
                                                        },
                                                        WrmOV3I6p: {
                                                          width: `calc(min(${y?.width || `100vw`}, 1356.8px) - 51.84px)`,
                                                        },
                                                      },
                                                      children: /*#__PURE__*/ c(M, {
                                                        height: 472,
                                                        width: `calc(min(${y?.width || `100vw`}, 1356.8px) - 76.8px)`,
                                                        children: /*#__PURE__*/ c(A, {
                                                          className: `framer-z9gubz-container`,
                                                          nodeId: `G9fDX1f2Z`,
                                                          scopeId: `WiWpK4bRq`,
                                                          children: /*#__PURE__*/ c(z, {
                                                            breakpoint: N,
                                                            overrides: {
                                                              HSnDBUDIe: {
                                                                FUynJFX2W: t[2],
                                                                variant: X(`K6qcGL3xq`),
                                                              },
                                                              WrmOV3I6p: {
                                                                FUynJFX2W: t[1],
                                                                variant: X(`Drx43Q_vh`),
                                                              },
                                                            },
                                                            children: /*#__PURE__*/ c(K, {
                                                              CgCZJzADz: n,
                                                              FUynJFX2W: t[0],
                                                              height: `100%`,
                                                              I6Jk0md5C: f,
                                                              id: `G9fDX1f2Z`,
                                                              J1cCPa85u: e,
                                                              layoutId: `G9fDX1f2Z`,
                                                              lf953UjZT: s,
                                                              lgBPwa_IP: gn(d),
                                                              NWjfeZGNK: l,
                                                              pfZ42ZJeC: i,
                                                              ppYHIT51h: a,
                                                              sCAz6NYii: r,
                                                              style: { width: `100%` },
                                                              UfN2kOhqT: o,
                                                              variant: X(`LifsJv7ac`),
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                              }),
                                            }),
                                          },
                                          t
                                        )
                                      )
                                    ),
                                  }),
                              }),
                            }),
                          }),
                          /*#__PURE__*/ s(ln, {
                            __framer__animate: { transition: J },
                            __framer__animateOnce: !0,
                            __framer__enter: q,
                            __framer__exit: Y,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.1,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-mlv9pl`,
                            "data-border": !0,
                            "data-framer-name": `Empty`,
                            children: [
                              /*#__PURE__*/ c(L, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(`h2`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                      "--framer-font-family": `"Manrope Variable"`,
                                      "--framer-font-size": `26px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `"wght" 500`,
                                      "--framer-font-weight": `400`,
                                      "--framer-letter-spacing": `-0.0237em`,
                                      "--framer-line-height": `1.6246em`,
                                      "--framer-text-color": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                    },
                                    children: `No sample projects match these filters`,
                                  }),
                                }),
                                className: `framer-1pwakmg`,
                                "data-framer-name": `Title`,
                                fonts: [`FS;Manrope-variable`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ c(L, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ c(r, {
                                  children: /*#__PURE__*/ c(`p`, {
                                    className: `framer-styles-preset-12clcwd`,
                                    "data-styles-preset": `tR22IXYs0`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                                    },
                                    children: `These are template examples. Contact us to discuss relevant experience and the kind of work you have in mind.`,
                                  }),
                                }),
                                className: `framer-t6olui`,
                                "data-framer-name": `Empty Text`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ s(g.div, {
                                className: `framer-17r6fkj`,
                                "data-framer-name": `Buttons`,
                                children: [
                                  /*#__PURE__*/ c(g.div, {
                                    className: `framer-17018pe`,
                                    "data-framer-name": `Show All`,
                                    onTap: je,
                                    children: /*#__PURE__*/ c(M, {
                                      height: 50,
                                      children: /*#__PURE__*/ c(A, {
                                        className: `framer-1natqoy-container`,
                                        nodeId: `i8AcGXQ8j`,
                                        rendersWithMotion: !0,
                                        scopeId: `WiWpK4bRq`,
                                        children: /*#__PURE__*/ c(Oe, {
                                          A7Od1mPPH: !1,
                                          height: `100%`,
                                          id: `i8AcGXQ8j`,
                                          l9aoY6pHx: `Show all projects`,
                                          layoutId: `i8AcGXQ8j`,
                                          SbaAZw1tX: !0,
                                          style: { height: `100%` },
                                          variant: X(`kZP06hvkc`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(b, {
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
                                      /*#__PURE__*/ c(M, {
                                        height: 29,
                                        children: /*#__PURE__*/ c(A, {
                                          className: `framer-4doigu-container`,
                                          nodeId: `glO7Hsn26`,
                                          rendersWithMotion: !0,
                                          scopeId: `WiWpK4bRq`,
                                          children: /*#__PURE__*/ c(z, {
                                            breakpoint: N,
                                            overrides: {
                                              HSnDBUDIe: { DEzUmrPW8: e[2] },
                                              WrmOV3I6p: { DEzUmrPW8: e[1] },
                                            },
                                            children: /*#__PURE__*/ c(Me, {
                                              DEzUmrPW8: e[0],
                                              height: `100%`,
                                              id: `glO7Hsn26`,
                                              layoutId: `glO7Hsn26`,
                                              rSCTVchPX: `Ask for a nearby reference`,
                                              variant: X(`Zqwx6QUiP`),
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
                        ],
                      }),
                    }),
                    /*#__PURE__*/ c(g.section, {
                      className: `framer-15d8ydd`,
                      "data-framer-name": `CTA`,
                      layout: pe,
                      children: /*#__PURE__*/ c(b, {
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
                            breakpoint: N,
                            overrides: {
                              HSnDBUDIe: { width: `calc(${y?.width || `100vw`} - 16px)` },
                            },
                            children: /*#__PURE__*/ c(M, {
                              height: 422,
                              width: `calc(${y?.width || `100vw`} - 24px)`,
                              children: /*#__PURE__*/ c(en, {
                                __framer__animate: { transition: J },
                                __framer__animateOnce: !0,
                                __framer__enter: q,
                                __framer__exit: Y,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-pwzumd-container`,
                                nodeId: `O2IJT2tGq`,
                                rendersWithMotion: !0,
                                scopeId: `WiWpK4bRq`,
                                children: /*#__PURE__*/ c(z, {
                                  breakpoint: N,
                                  overrides: {
                                    HSnDBUDIe: { lpx6Y7_Ie: e[2], variant: X(`Frx_p7cag`) },
                                    WrmOV3I6p: { lpx6Y7_Ie: e[1], variant: X(`jVhZG9xO5`) },
                                  },
                                  children: /*#__PURE__*/ c(ct, {
                                    c90VE0r4p: !0,
                                    egt2DgeHC: `It starts with a free inspection and a photo report within 24 hours.`,
                                    eWOxqccVh: `tel:+14065550142`,
                                    height: `100%`,
                                    id: `O2IJT2tGq`,
                                    IeWSqieKT: !1,
                                    kO8dlAD8T: `Call (406) 555-0142`,
                                    layoutId: `O2IJT2tGq`,
                                    lpx6Y7_Ie: e[0],
                                    spYOD0ZH5: `Have a project in mind?`,
                                    style: { width: `100%` },
                                    V_MeO9hxh: `Discuss your project`,
                                    variant: X(`V3cWFf9iM`),
                                    VtZC0VDH4: `(Free inspection)`,
                                    width: `100%`,
                                    Y7gwfGTSN: yn(
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
      (wn = [
        `.framer-k7laL.framer-8vmk64, .framer-k7laL .framer-8vmk64 { display: block; }`,
        `.framer-k7laL.framer-uafapv { align-content: flex-start; align-items: flex-start; background-color: #f3f1ec; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-k7laL .framer-1v71wrs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 142.2px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-k7laL .framer-q6evjl, .framer-k7laL .framer-16fxy8g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1356.8px; padding: 0px 38.4px 0px 38.4px; position: relative; width: 100%; }`,
        `.framer-k7laL .framer-x7ue4r-container, .framer-k7laL .framer-z9gubz-container, .framer-k7laL .framer-pwzumd-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-k7laL .framer-iwgel4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 84px 0px 84px 0px; position: relative; width: 100%; }`,
        `.framer-k7laL .framer-acdyea { --border-bottom-width: 0px; --border-color: var(--token-b56b0928-74bd-4162-b937-f92541288cb8); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 1px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-k7laL .framer-1196cbp, .framer-k7laL .framer-8v9r7l, .framer-k7laL .framer-16nlqk9 { --border-bottom-width: 1px; --border-color: var(--token-b56b0928-74bd-4162-b937-f92541288cb8); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 12px 0px 13px 0px; position: relative; width: 100%; }`,
        `.framer-k7laL .framer-1ffdewh, .framer-k7laL .framer-4r3vgy, .framer-k7laL .framer-vddqd5 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 120px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-k7laL .framer-1xck7sv, .framer-k7laL .framer-1qm7ah6, .framer-k7laL .framer-178tth2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-k7laL .framer-e86cjo-container, .framer-k7laL .framer-199qud9-container, .framer-k7laL .framer-17ezf9r-container, .framer-k7laL .framer-1pr0q4q-container, .framer-k7laL .framer-qi3g10-container, .framer-k7laL .framer-1rix5rm-container, .framer-k7laL .framer-10tm04v-container, .framer-k7laL .framer-1g4eg0i-container, .framer-k7laL .framer-1onw55w-container, .framer-k7laL .framer-8m4c1n-container, .framer-k7laL .framer-1vanduu-container, .framer-k7laL .framer-t3k1w2-container, .framer-k7laL .framer-1mfi2hs-container, .framer-k7laL .framer-1ywo6e2-container { flex: none; height: 38px; position: relative; width: auto; }`,
        `.framer-k7laL .framer-1wa4yib { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 14px 0px 18px 0px; position: relative; width: 100%; }`,
        `.framer-k7laL .framer-wil4u2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-k7laL .framer-16ru0ys, .framer-k7laL .framer-15qc9c1, .framer-k7laL .framer-1j4wy9j { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-k7laL .framer-1q972yd { --border-bottom-width: 1px; --border-color: var(--token-b56b0928-74bd-4162-b937-f92541288cb8); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 38px; justify-content: flex-start; padding: 0px 13px 0px 13px; position: relative; width: min-content; }`,
        `.framer-k7laL .framer-jf79g5 { flex: none; height: 8px; position: relative; width: 100%; }`,
        `.framer-k7laL .framer-td3iky { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-k7laL .framer-qeu3zo { --border-bottom-width: 1px; --border-color: var(--token-b56b0928-74bd-4162-b937-f92541288cb8); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 0px 1px 0px; position: relative; width: 100%; }`,
        `.framer-k7laL .framer-mlv9pl { --border-bottom-width: 1px; --border-color: var(--token-b56b0928-74bd-4162-b937-f92541288cb8); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 72px 0px 73px 0px; position: relative; width: 100%; }`,
        `.framer-k7laL .framer-1pwakmg { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-k7laL .framer-t6olui { flex: none; height: auto; max-width: 530px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-k7laL .framer-17r6fkj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px 24px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-k7laL .framer-17018pe { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-k7laL .framer-1natqoy-container { flex: none; height: 50px; position: relative; width: auto; }`,
        `.framer-k7laL .framer-4doigu-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-k7laL .framer-15d8ydd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 12px 12px 0px 12px; position: relative; width: 100%; }`,
        ...pe,
        ...mt,
        ...xe,
        ...Qe,
        ...Le,
        `.framer-k7laL[data-border="true"]::after, .framer-k7laL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-k7laL.framer-uafapv { width: 810px; } .framer-k7laL .framer-1v71wrs { padding: 132.06px 0px 0px 0px; } .framer-k7laL .framer-q6evjl, .framer-k7laL .framer-16fxy8g { padding: 0px 25.92px 0px 25.92px; } .framer-k7laL .framer-iwgel4 { padding: 64px 0px 64px 0px; } .framer-k7laL .framer-mlv9pl { padding: 48px 0px 49px 0px; }}`,
        `@media (max-width: 809.98px) { .framer-k7laL.framer-uafapv { width: 390px; } .framer-k7laL .framer-1v71wrs { padding: 123px 0px 0px 0px; } .framer-k7laL .framer-q6evjl, .framer-k7laL .framer-16fxy8g { padding: 0px 16px 0px 16px; } .framer-k7laL .framer-iwgel4 { padding: 64px 0px 64px 0px; } .framer-k7laL .framer-1196cbp, .framer-k7laL .framer-8v9r7l, .framer-k7laL .framer-16nlqk9 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 8px; } .framer-k7laL .framer-1xck7sv, .framer-k7laL .framer-1qm7ah6, .framer-k7laL .framer-178tth2 { flex: none; width: 100%; } .framer-k7laL .framer-mlv9pl { padding: 48px 0px 49px 0px; } .framer-k7laL .framer-15d8ydd { padding: 12px 8px 0px 8px; }}`,
      ]),
      ($ = D(Cn, wn, `framer-k7laL`)),
      ($.displayName = `Projects`),
      ($.defaultProps = { height: 4908, width: 1200 }),
      x(
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
          ...$t,
          ...tn,
          ...an,
          ...on,
          ...sn,
          ...un,
          ...B(we),
          ...B(ht),
          ...B(ke),
          ...B(et),
          ...B(ze),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = (async () => {
              let e = t.pathVariables?.material ?? `all`;
              return {
                bIG3WnIlp1: t.pathVariables?.service ?? `all`,
                D_BGLbGRA1: e,
                qDf3SjGtc1: t.pathVariables?.town ?? `all`,
              };
            })();
          return (
            i.catch(() => {}),
            I(
              [
                () =>
                  i.then(({ D_BGLbGRA1: e, bIG3WnIlp1: i, qDf3SjGtc1: a }) =>
                    se(() => O.get(_n(e, i, a), n, r).preload(), t)
                  ),
                () => T(ot, {}, t),
                () => T(H, {}, t),
                () => T(Oe, {}, t),
                () => T(Me, {}, t),
                () => T(ct, {}, t),
                async () => {
                  let { D_BGLbGRA1: e, bIG3WnIlp1: a, qDf3SjGtc1: o } = await i,
                    s = (await se(() => O.get(_n(e, a, o), n, r).readMaybeAsync(), t)) ?? [];
                  return I(
                    s.flatMap((e) => () => T(K, {}, t)),
                    t
                  );
                },
              ],
              t
            )
          );
        },
      }),
      (Tn = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerWiWpK4bRq`,
            slots: [],
            annotations: {
              framerResponsiveScreen: `true`,
              framerImmutableVariables: `true`,
              framerScrollSections: `false`,
              framerAutoSizeImages: `true`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `1200`,
              framerAcceptsLayoutTemplate: `true`,
              framerIntrinsicHeight: `4908`,
              framerDisplayContentsDiv: `false`,
              framerLayoutTemplateFlowEffect: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"WrmOV3I6p":{"layout":["fixed","auto"]},"HSnDBUDIe":{"layout":["fixed","auto"]}}}`,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
En();
export { Tn as __FramerMetadata__, $ as default, fn as queryParamNames };
//# sourceMappingURL=NdS5o6Uoh0Ur00_DvUtxZvtjFS0eiPDWhZHWGsDgs6I.DuYdwpe0.mjs.map
