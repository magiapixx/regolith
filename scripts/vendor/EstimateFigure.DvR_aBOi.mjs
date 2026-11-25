import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  D as r,
  P as i,
  b as a,
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
  D as _,
  Dt as v,
  G as y,
  O as b,
  Ot as x,
  o as S,
  st as C,
  ut as w,
  vt as T,
  w as E,
} from "./framer.B_dFn1Dy.mjs";
function D(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var O, k, A, j, M, N, P, F, I, L, R;
function z() {
  return (z = e(() => {
    (u(),
      y(),
      m(),
      d(),
      (O = { fXtznAKpi: { hover: !0 }, V6_yPj__A: { hover: !0 } }),
      (k = [`V6_yPj__A`, `gPtJvD76p`, `fXtznAKpi`, `HMJzBSP2V`]),
      (A = `framer-zwV8f`),
      (j = {
        fXtznAKpi: `framer-v-1hyrf77`,
        gPtJvD76p: `framer-v-1giyhrf`,
        HMJzBSP2V: `framer-v-ebzwls`,
        V6_yPj__A: `framer-v-14x75x5`,
      }),
      (M = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (N = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(p.Provider, { value: a, children: n });
      }),
      (P = {
        "Tall Active": `HMJzBSP2V`,
        Active: `gPtJvD76p`,
        Default: `V6_yPj__A`,
        Tall: `fXtznAKpi`,
      }),
      (F = h.create(i)),
      (I = ({ height: e, id: t, label: n, sub: r, tap: i, width: a, ...o }) => ({
        ...o,
        mHk6iigJZ: i ?? o.mHk6iigJZ,
        PAzkIQmMb: r ?? o.PAzkIQmMb ?? ``,
        variant: P[o.variant] ?? o.variant ?? `V6_yPj__A`,
        w3SGVORFP: n ?? o.w3SGVORFP ?? `Medium`,
      })),
      (L = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (R = x(
        /* @__PURE__ */ l(function (e, t) {
          let r = a(null),
            o = t ?? r,
            l = n(),
            { activeLocale: u, contentLocale: d, setLocale: p } = T();
          w();
          let {
              style: m,
              className: _,
              layoutId: y,
              variant: b,
              w3SGVORFP: x,
              mHk6iigJZ: S,
              PAzkIQmMb: P,
              ...R
            } = I(e),
            {
              baseVariant: z,
              classNames: B,
              clearLoadingGesture: V,
              gestureHandlers: H,
              gestureVariant: U,
              isLoading: W,
              setGestureState: G,
              setVariant: K,
              variants: q,
            } = v({
              cycleOrder: k,
              defaultVariant: `V6_yPj__A`,
              enabledGestures: O,
              ref: o,
              variant: b,
              variantClassNames: j,
            }),
            J = L(e, q),
            Y = [],
            { activeVariantCallback: X, delay: Z } = C(z),
            Q = X(async (...e) => {
              if ((G({ isPressed: !1 }), S && (await S(...e)) === !1)) return !1;
            }),
            $ = g(A, ...Y),
            ee = () => !!(U === `fXtznAKpi-hover` || [`fXtznAKpi`, `HMJzBSP2V`].includes(z));
          return /*#__PURE__*/ c(f, {
            id: y ?? l,
            children: /*#__PURE__*/ c(F, {
              animate: q,
              initial: !1,
              children: /*#__PURE__*/ c(N, {
                value: M,
                children: /*#__PURE__*/ s(h.div, {
                  ...R,
                  ...H,
                  className: g($, `framer-14x75x5`, _, B),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: J,
                  layoutId: `V6_yPj__A`,
                  onTap: Q,
                  ref: o,
                  style: {
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 9,
                    borderBottomRightRadius: 9,
                    borderTopLeftRadius: 9,
                    borderTopRightRadius: 9,
                    ...m,
                  },
                  variants: {
                    "fXtznAKpi-hover": { backgroundColor: `rgba(20, 21, 23, 0.06)` },
                    "V6_yPj__A-hover": { backgroundColor: `rgba(20, 21, 23, 0.06)` },
                    fXtznAKpi: { backgroundColor: `rgba(0, 0, 0, 0)` },
                    gPtJvD76p: {
                      backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                    },
                    HMJzBSP2V: {
                      backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                    },
                  },
                  ...D(
                    {
                      "fXtznAKpi-hover": { "data-framer-name": void 0 },
                      "V6_yPj__A-hover": { "data-framer-name": void 0 },
                      fXtznAKpi: { "data-framer-name": `Tall` },
                      gPtJvD76p: { "data-framer-name": `Active` },
                      HMJzBSP2V: { "data-framer-name": `Tall Active` },
                    },
                    z,
                    U
                  ),
                  children: [
                    /*#__PURE__*/ c(E, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ c(i, {
                        children: /*#__PURE__*/ c(h.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVMU1BPT0=`,
                            "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                            "--framer-font-size": `15px`,
                            "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 550)`,
                            "--framer-line-height": `1.6em`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                          },
                          children: `Label`,
                        }),
                      }),
                      className: `framer-n6mwrx`,
                      fonts: [`FS;Manrope-variable`],
                      layoutDependency: J,
                      layoutId: `hXKSBf9x_`,
                      style: {
                        "--extracted-2gg91v": `"wght" 550`,
                        "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                      },
                      text: x,
                      variants: {
                        gPtJvD76p: {
                          "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                        },
                        HMJzBSP2V: {
                          "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...D(
                        {
                          fXtznAKpi: {
                            children: /*#__PURE__*/ c(i, {
                              children: /*#__PURE__*/ c(h.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVMU1BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 550)`,
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                },
                                children: `Medium`,
                              }),
                            }),
                          },
                          gPtJvD76p: {
                            children: /*#__PURE__*/ c(i, {
                              children: /*#__PURE__*/ c(h.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVMU1BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 550)`,
                                  "--framer-line-height": `1.6em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                },
                                children: `Medium`,
                              }),
                            }),
                          },
                          HMJzBSP2V: {
                            children: /*#__PURE__*/ c(i, {
                              children: /*#__PURE__*/ c(h.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVMU1BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 550)`,
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                },
                                children: `Medium`,
                              }),
                            }),
                          },
                        },
                        z,
                        U
                      ),
                    }),
                    ee() &&
                      /*#__PURE__*/ c(E, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ c(i, {
                          children: /*#__PURE__*/ c(h.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                              "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                              "--framer-font-size": `12px`,
                              "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                              "--framer-line-height": `1.25em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                            },
                            children: `Sub`,
                          }),
                        }),
                        className: `framer-3uw0mv`,
                        "data-framer-name": `Sub`,
                        fonts: [`FS;Manrope-variable`],
                        layoutDependency: J,
                        layoutId: `o99W624N5`,
                        style: {
                          "--extracted-2gg91v": `"wght" 500`,
                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                        },
                        text: P,
                        variants: {
                          HMJzBSP2V: {
                            "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...D(
                          {
                            HMJzBSP2V: {
                              children: /*#__PURE__*/ c(i, {
                                children: /*#__PURE__*/ c(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                                    "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                                    "--framer-line-height": `1.25em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                  },
                                  children: `Content`,
                                }),
                              }),
                            },
                          },
                          z,
                          U
                        ),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-zwV8f.framer-cvly6n, .framer-zwV8f .framer-cvly6n { display: block; }`,
          `.framer-zwV8f.framer-14x75x5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 42px; justify-content: center; padding: 0px; position: relative; width: 80px; }`,
          `.framer-zwV8f .framer-n6mwrx, .framer-zwV8f .framer-3uw0mv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-zwV8f.framer-v-1hyrf77.framer-14x75x5, .framer-zwV8f.framer-v-ebzwls.framer-14x75x5 { flex-direction: column; height: 58px; padding: 9px 8px 9px 8px; }`,
        ],
        `framer-zwV8f`
      )),
      (R.displayName = `Segment Option`),
      (R.defaultProps = { height: 42, width: 80 }),
      b(R, {
        variant: {
          options: [`V6_yPj__A`, `gPtJvD76p`, `fXtznAKpi`, `HMJzBSP2V`],
          optionTitles: [`Default`, `Active`, `Tall`, `Tall Active`],
          title: `Variant`,
          type: S.Enum,
        },
        w3SGVORFP: { defaultValue: `Medium`, title: `Label`, type: S.String },
        onw3SGVORFPChange: { changes: `w3SGVORFP`, type: S.ChangeHandler },
        mHk6iigJZ: { title: `Tap`, type: S.EventHandler },
        PAzkIQmMb: { defaultValue: ``, title: `Sub`, type: S.String },
        onPAzkIQmMbChange: { changes: `PAzkIQmMb`, type: S.ChangeHandler },
      }),
      _(
        R,
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
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function B(e, t, n, r, i) {
  let a = Math.min(4e3, Math.max(800, Number(e) || 1800)),
    o = H[String(n).toLowerCase()] ?? (Number(n) || 1.18),
    s = U[String(t).replace(/\D/g, ``)] ?? 1.08,
    c = String(r).toLowerCase(),
    l = c === `none` ? 0 : Number(c.replace(/\D/g, ``)) || 0,
    u = Number(i) || 0,
    d = Math.ceil((a * o * 1.12) / 100),
    f = d * u * s,
    p = d * W * l,
    m = f + p + G,
    h = Math.round((m * 0.92) / 100) * 100,
    g = Math.round((m * 1.15) / 100) * 100,
    _ = Math.max(1, Math.round(d / (u > 1300 ? 4 : u > 800 ? 8 : 10))),
    v = d * u,
    y = Number(String(t).replace(/\D/g, ``)) || 2;
  return {
    base: Q(v),
    story: y === 1 ? `None` : `+` + Q(f - v),
    storyNote:
      y === 1
        ? `Single story`
        : `${y} stories: +${Math.round((s - 1) * 100)}% for access and safety`,
    tearNote: l
      ? `${d} squares \xd7 $${W} \xd7 ${l} layer${l > 1 ? `s` : ``}`
      : `No existing layer to remove`,
    sqNote: `${a.toLocaleString(`en-US`)} sq ft \xd7 ${o} pitch \xd7 1.12 overhangs \xf7 100`,
    matNote: `${d} squares \xd7 ${Q(u)} per square`,
    fixed: Q(G),
    mid: Q(m),
    low: Q(h),
    high: Q(g),
    squares: `${d} squares`,
    materials: Q(f),
    tearoff: l ? Q(p) : `None`,
    days: `${_}–${_ + 1} days`,
  };
}
function V(e) {
  let {
      area: t = 1800,
      stories: n = `2`,
      pitch: r = `Medium`,
      layers: i = `1`,
      rate: a = 520,
      output: o = `low`,
      font: l = {},
      color: u = `#ffffff`,
      tabular: d = !1,
    } = e,
    f = X() ?? t;
  if (o === `slider`) {
    let { trackColor: t = `#e9e6df`, fillColor: n = `#141517`, thumbColor: r = `#ddf247` } = e,
      i = Math.min(4e3, Math.max(800, Number(f) || 1800));
    return /*#__PURE__*/ s(`div`, {
      style: {
        ...e.style,
        position: `relative`,
        display: `grid`,
        gridTemplateColumns: e.stacked ? `1fr` : `1fr auto`,
        gap: 18,
        alignItems: `center`,
        width: `100%`,
      },
      children: [
        /*#__PURE__*/ c(`style`, { dangerouslySetInnerHTML: { __html: Z } }),
        /*#__PURE__*/ c(`input`, {
          type: `range`,
          className: `hr-range`,
          min: 800,
          max: 4e3,
          step: 50,
          value: i,
          "aria-label": `Home footprint in square feet`,
          onChange: (e) => J(Number(e.currentTarget.value)),
          style: {
            "--p": ((i - 800) / 3200) * 100 + `%`,
            "--hr-track": t,
            "--hr-fill": n,
            "--hr-thumb": r,
          },
        }),
        /*#__PURE__*/ s(`output`, {
          style: {
            minWidth: 104,
            textAlign: e.stacked ? `left` : `right`,
            whiteSpace: `nowrap`,
            color: u,
            fontVariantNumeric: `tabular-nums`,
            ...l,
          },
          children: [i.toLocaleString(`en-US`), ` sq ft`],
        }),
      ],
    });
  }
  if (o === `number`) {
    let { trackColor: t = `#f3f1ec`, fillColor: n = `#141517` } = e,
      r = Math.min(4e3, Math.max(800, Number(f) || 1800));
    return /*#__PURE__*/ s(`label`, {
      style: {
        ...e.style,
        position: `relative`,
        display: `flex`,
        alignItems: `center`,
        gap: 8,
        height: 48,
        padding: `0 12px`,
        boxSizing: `border-box`,
        borderRadius: 11,
        background: t,
        border: `1px solid rgba(20,21,23,.13)`,
        width: `100%`,
        color: u,
        ...l,
      },
      children: [
        /*#__PURE__*/ c(`span`, {
          style: {
            position: `absolute`,
            width: 1,
            height: 1,
            overflow: `hidden`,
            clip: `rect(0 0 0 0)`,
          },
          children: `Or type the footprint`,
        }),
        /*#__PURE__*/ c(
          `input`,
          {
            type: `number`,
            inputMode: `numeric`,
            min: 800,
            max: 4e3,
            step: 50,
            defaultValue: r,
            onChange: (e) => {
              let t = Number(e.currentTarget.value);
              t >= 800 && t <= 4e3 && J(t);
            },
            onBlur: (e) => {
              let t = Math.min(
                4e3,
                Math.max(800, Math.round((Number(e.currentTarget.value) || r) / 50) * 50)
              );
              ((e.currentTarget.value = String(t)), J(t));
            },
            style: {
              flex: 1,
              minWidth: 0,
              border: 0,
              background: `transparent`,
              font: `inherit`,
              fontWeight: 600,
              color: n,
              padding: `1px 2px`,
              outline: `none`,
            },
          },
          r
        ),
        /*#__PURE__*/ c(`span`, { children: `sq ft` }),
      ],
    });
  }
  let p = B(f, n, r, i, a)[o] ?? ``;
  return /*#__PURE__*/ c(`span`, {
    style: {
      ...e.style,
      position: `relative`,
      display: /Note$/.test(o) ? `block` : `inline-block`,
      whiteSpace: /Note$/.test(o) ? `normal` : `nowrap`,
      width: /Note$/.test(o) ? `100%` : `max-content`,
      color: u,
      fontVariantNumeric: d ? `tabular-nums` : void 0,
      ...l,
    },
    "aria-live": `polite`,
    children: p,
  });
}
var H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (u(),
      y(),
      d(),
      (H = { low: 1.08, medium: 1.18, steep: 1.36 }),
      (U = { 1: 1, 2: 1.08, 3: 1.16 }),
      (W = 90),
      (G = 650),
      (K = null),
      (q = /* @__PURE__ */ new Set()),
      (J = (e) => {
        ((K = e), q.forEach((e) => e()));
      }),
      (Y = (e) => (
        q.add(e),
        () => {
          q.delete(e);
        }
      )),
      (X = () =>
        r(
          Y,
          () => K,
          () => null
        )),
      (Z = `.hr-range{-webkit-appearance:none;appearance:none;width:100%;height:28px;margin:0;background:transparent;cursor:pointer}
.hr-range::-webkit-slider-runnable-track{height:4px;border-radius:4px;background:linear-gradient(90deg,var(--hr-fill) var(--p),var(--hr-track) var(--p))}
.hr-range::-moz-range-track{height:4px;border-radius:4px;background:var(--hr-track)}
.hr-range::-moz-range-progress{height:4px;border-radius:4px;background:var(--hr-fill)}
.hr-range::-webkit-slider-thumb{-webkit-appearance:none;width:26px;height:26px;border-radius:50%;background:var(--hr-thumb);border:2px solid var(--hr-fill);margin-top:-11px}
.hr-range::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:var(--hr-thumb);border:2px solid var(--hr-fill)}
.hr-range:focus-visible{outline:none}
.hr-range:focus-visible::-webkit-slider-thumb{outline:2.5px solid var(--hr-fill);outline-offset:3px}`),
      (Q = (e) => `$` + Math.round(e).toLocaleString(`en-US`)),
      b(V, {
        output: {
          type: S.Enum,
          title: `Shows`,
          options: [
            `low`,
            `high`,
            `squares`,
            `materials`,
            `tearoff`,
            `days`,
            `slider`,
            `base`,
            `story`,
            `storyNote`,
            `tearNote`,
            `sqNote`,
            `matNote`,
            `fixed`,
            `mid`,
            `number`,
          ],
          optionTitles: [
            `Low price`,
            `High price`,
            `Roof area`,
            `Materials & install`,
            `Tear-off`,
            `Days on site`,
            `Footprint slider`,
            `Materials before height`,
            `Height and access`,
            `Height note`,
            `Tear-off note`,
            `Roof area note`,
            `Materials note`,
            `Fixed costs`,
            `Midpoint`,
            `Footprint number box`,
          ],
          defaultValue: `low`,
        },
        area: {
          type: S.Number,
          title: `Footprint`,
          defaultValue: 1800,
          min: 800,
          max: 4e3,
          step: 50,
          unit: `sq ft`,
        },
        stories: {
          type: S.String,
          title: `Stories`,
          defaultValue: `2`,
          description: `1, 2 or 3 (a prefix like s2 is ignored)`,
        },
        pitch: {
          type: S.String,
          title: `Pitch`,
          defaultValue: `Medium`,
          description: `Low, Medium or Steep`,
        },
        layers: {
          type: S.String,
          title: `Layers`,
          defaultValue: `1`,
          description: `None, 1 or 2 (a prefix like l1 is ignored)`,
        },
        rate: {
          type: S.Number,
          title: `Rate / square`,
          defaultValue: 520,
          min: 0,
          max: 5e3,
          step: 10,
          unit: `$`,
        },
        font: {
          type: S.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: {
            variant: `Medium`,
            fontSize: `48px`,
            letterSpacing: `-0.04em`,
            lineHeight: `1em`,
          },
        },
        color: { type: S.Color, title: `Colour`, defaultValue: `#ffffff` },
        tabular: { type: S.Boolean, title: `Tabular figures`, defaultValue: !1 },
        stacked: {
          type: S.Boolean,
          title: `Output below`,
          defaultValue: !1,
          hidden: (e) => e.output !== `slider`,
        },
        trackColor: {
          type: S.Color,
          title: `Track`,
          defaultValue: `#e9e6df`,
          hidden: (e) => e.output !== `slider` && e.output !== `number`,
        },
        fillColor: {
          type: S.Color,
          title: `Fill`,
          defaultValue: `#141517`,
          hidden: (e) => e.output !== `slider` && e.output !== `number`,
        },
        thumbColor: {
          type: S.Color,
          title: `Thumb`,
          defaultValue: `#ddf247`,
          hidden: (e) => e.output !== `slider`,
        },
      }));
  }))();
}
export { z as i, $ as n, R as r, V as t };
//# sourceMappingURL=EstimateFigure.DvR_aBOi.mjs.map
