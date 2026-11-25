import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  I as t,
  R as n,
  _ as r,
  l as i,
  o as a,
  s as o,
  w as s,
  y as c,
} from "./react.Dxe_2v0O.mjs";
import { G as l, O as u, o as d } from "./framer.B_dFn1Dy.mjs";
function f(e) {
  let {
      title: t = `In this note`,
      ink: o = `#141517`,
      muted: s = `#5d6066`,
      line: l = `rgba(20,21,23,.13)`,
    } = e,
    [u, d] = r([]),
    [f, m] = r(``);
  return (
    c(() => {
      let e = 0,
        t = 0,
        r = () => {
          let i = document.querySelector(`[data-framer-name="Prose"]`),
            a = i ? Array.from(i.querySelectorAll(`h2`)) : [];
          if (!a.length && e++ < 40) {
            t = n.setTimeout(r, 150);
            return;
          }
          let o = /* @__PURE__ */ new Set(),
            s = a.map((e) => {
              let t = e.id || p(e.textContent || ``);
              for (; o.has(t);) t += `-2`;
              return (
                o.add(t),
                (e.id = t),
                (e.style.scrollMarginTop = `97px`),
                { id: t, text: (e.textContent || ``).trim() }
              );
            });
          d(s);
        };
      return (r(), () => clearTimeout(t));
    }, []),
    c(() => {
      if (!u.length) return;
      let e = () => {
        let e = u[0].id;
        for (let t of u) {
          let r = document.getElementById(t.id);
          r && r.getBoundingClientRect().top < n.innerHeight * 0.35 && (e = t.id);
        }
        m(e);
      };
      return (
        e(),
        n.addEventListener(`scroll`, e, { passive: !0 }),
        () => n.removeEventListener(`scroll`, e)
      );
    }, [u]),
    /*#__PURE__*/ i(`nav`, {
      "aria-label": t,
      style: { ...e.style, fontFamily: `"Manrope Variable", "Manrope", sans-serif` },
      children: [
        /*#__PURE__*/ a(`p`, {
          style: {
            margin: `0 0 12px`,
            fontSize: 12.5,
            lineHeight: `20px`,
            fontWeight: 600,
            color: s,
          },
          children: t,
        }),
        /*#__PURE__*/ a(`ol`, {
          style: { listStyle: `none`, margin: 0, padding: 0, borderTop: `1px solid ${l}` },
          children: u.map((e) => {
            let t = e.id === f;
            return /*#__PURE__*/ a(
              `li`,
              {
                children: /*#__PURE__*/ i(`a`, {
                  href: `#` + e.id,
                  "aria-current": t ? `true` : void 0,
                  style: {
                    display: `block`,
                    position: `relative`,
                    padding: `10px 0 10px 14px`,
                    borderBottom: `1px solid ${l}`,
                    fontSize: 14.5,
                    lineHeight: 1.35,
                    color: t ? o : s,
                    fontWeight: t ? 600 : 450,
                    textDecoration: `none`,
                    transition: `color .2s`,
                  },
                  children: [
                    /*#__PURE__*/ a(`span`, {
                      "aria-hidden": `true`,
                      style: {
                        position: `absolute`,
                        left: 0,
                        top: 14,
                        bottom: 14,
                        width: 2,
                        background: t ? o : `transparent`,
                        transition: `background-color .2s`,
                      },
                    }),
                    e.text,
                  ],
                }),
              },
              e.id
            );
          }),
        }),
      ],
    })
  );
}
var p;
function m() {
  return (m = e(() => {
    (t(),
      o(),
      l(),
      s(),
      (p = (e) =>
        e
          .toLowerCase()
          .replace(/[’']/g, ``)
          .replace(/[^a-z0-9]+/g, `-`)
          .replace(/^-|-$/g, ``)
          .slice(0, 60)),
      u(f, {
        title: { type: d.String, title: `Title`, defaultValue: `In this note` },
        ink: { type: d.Color, title: `Active`, defaultValue: `#141517` },
        muted: { type: d.Color, title: `Muted`, defaultValue: `#5d6066` },
        line: { type: d.Color, title: `Line`, defaultValue: `rgba(20,21,23,.13)` },
      }));
  }))();
}
export { m as n, f as t };
//# sourceMappingURL=NoteContents.DBF69HPm.mjs.map
