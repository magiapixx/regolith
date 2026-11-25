import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { o as t, p as n, s as r, w as i } from "./react.Dxe_2v0O.mjs";
import { w as a } from "./motion.x14TTX80.mjs";
import { A as o, G as s, O as c, Ot as l, Tt as u, o as d } from "./framer.B_dFn1Dy.mjs";
var f, p, m, h, g, _, v;
function y() {
  return (y = e(() => {
    (r(),
      s(),
      i(),
      (f = `var(--framer-icon-mask)`),
      (p = /*#__PURE__*/ n(function (e, n) {
        return /*#__PURE__*/ t(`svg`, { ...e, ref: n, children: e.children });
      })),
      (m = a.create(p)),
      (h = /*#__PURE__*/ n((e, n) => {
        let { animated: r, layoutId: i, children: a, ...o } = e;
        return r
          ? /*#__PURE__*/ t(m, { ...o, layoutId: i, ref: n, children: a })
          : /*#__PURE__*/ t(`svg`, { ...o, ref: n, children: a });
      })),
      (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 7 14 L 0 7 L 7 0" fill="transparent" height="14px" id="MZQyihG1W" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(5 5)" width="7px"/><path d="M 14 0 L 0 0" fill="transparent" height="1px" id="Icbu9SXUE" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(5 12)" width="14px"/></svg>`),
      (_ = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (v = l(
        /* @__PURE__ */ n(function (e, n) {
          let {
              style: r,
              className: i,
              layoutId: a,
              variant: s,
              P_DcoRcrY: c,
              JEeZYcamG: l,
              ...d
            } = _(e),
            f = u(`3838275970`, g);
          return /*#__PURE__*/ t(h, {
            ...d,
            className: o(`framer-kVQN1`, i),
            layoutId: a,
            ref: n,
            role: `presentation`,
            style: { "--1m973uw": c, "--js9iwy": l, ...r },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ t(`use`, { href: f }),
          });
        }),
        [
          `.framer-kVQN1 { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
        ],
        `framer-kVQN1`
      )),
      (v.displayName = `Arrow Left`),
      c(v, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: d.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: d.Number,
        },
      }));
  }))();
}
export { y as n, v as t };
//# sourceMappingURL=MRp3P10aE.CT1afFrX.mjs.map
