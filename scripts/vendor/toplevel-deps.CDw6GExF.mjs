import { n as e, t } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as n,
  C as r,
  E as i,
  I as a,
  P as o,
  R as s,
  _ as c,
  b as l,
  j as u,
  l as d,
  o as f,
  p,
  s as m,
  w as h,
  y as g,
} from "./react.Dxe_2v0O.mjs";
import { i as _, o as v, t as y, w as b } from "./motion.x14TTX80.mjs";
import {
  A as x,
  At as S,
  B as C,
  C as w,
  D as T,
  Dt as E,
  G as D,
  Lt as ee,
  M as O,
  Mt as k,
  O as A,
  Ot as j,
  R as M,
  T as N,
  Tt as P,
  a as te,
  f as F,
  ft as ne,
  g as I,
  gt as re,
  ht as ie,
  i as L,
  j as R,
  kt as ae,
  m as oe,
  mt as se,
  o as z,
  st as ce,
  tt as B,
  ut as le,
  vt as ue,
  w as V,
  wt as de,
  x as H,
  z as U,
} from "./framer.B_dFn1Dy.mjs";
function W() {
  let e = /* @__PURE__ */ new Date(),
    t = [],
    n = [`08:00`, `11:30`, `15:00`];
  for (let r = 1; t.length < 4 && r < 10; r++) {
    let i = new Date(e.getFullYear(), e.getMonth(), e.getDate() + r);
    i.getDay() !== 0 &&
      t.push(
        `${i.toLocaleDateString(`en-US`, { weekday: `short` })} ${i.getDate()} \xb7 ${n[(r + t.length) % 3]}`
      );
  }
  return t;
}
function fe() {
  let [e, t] = c(null);
  return (g(() => t(W()), []), e);
}
function G(e) {
  return /*#__PURE__*/ p((t, n) => {
    let r = fe();
    return /*#__PURE__*/ f(e, { ...t, ref: n, text: r ? r[0].replace(/ \d+ ·/, ``) : t.text });
  });
}
function pe(e) {
  return (t) =>
    /*#__PURE__*/ p((n, r) => {
      let i = fe();
      return /*#__PURE__*/ f(t, { ...n, ref: r, label: i ? i[e] : n.label });
    });
}
function me(e) {
  return pe(0)(e);
}
function he(e) {
  return pe(1)(e);
}
function ge(e) {
  return pe(2)(e);
}
function _e(e) {
  return pe(3)(e);
}
function ve(e) {
  return /*#__PURE__*/ p((t, n) => {
    let r = l(null),
      i = fe();
    return (
      g(() => {
        if (!i || !r.current) return;
        let e = () => {
          [...r.current.querySelectorAll(`input[type="radio"]`)].forEach((e, t) => {
            i[t] && (e.value = i[t]);
          });
        };
        e();
        let t = setTimeout(e, 400),
          n = new MutationObserver(() => {
            [...r.current.querySelectorAll(`input[type="radio"]`)].some(
              (e, t) => i[t] && e.value !== i[t]
            ) && e();
          });
        return (
          n.observe(r.current, {
            subtree: !0,
            childList: !0,
            attributes: !0,
            attributeFilter: [`value`],
          }),
          () => {
            (clearTimeout(t), n.disconnect());
          }
        );
      }, [i]),
      /*#__PURE__*/ f(`div`, {
        ref: r,
        style: { display: `contents` },
        children: /*#__PURE__*/ f(e, { ...t, ref: n }),
      })
    );
  });
}
function ye(e) {
  return /*#__PURE__*/ p((t, n) => {
    let [r, i] = c(null);
    return (
      g(() => {
        let e = () => {
          let e = new Intl.DateTimeFormat(`en-US`, {
              timeZone: `America/Denver`,
              weekday: `short`,
              hour: `numeric`,
              minute: `numeric`,
              hour12: !1,
            }).formatToParts(/* @__PURE__ */ new Date()),
            t = (t) => e.find((e) => e.type === t)?.value || ``,
            n = t(`weekday`),
            r = (t(`hour`) % 24) * 60 + +t(`minute`),
            a =
              ([`Mon`, `Tue`, `Wed`, `Thu`, `Fri`].includes(n) && r >= 420 && r < 1080) ||
              (n === `Sat` && r >= 480 && r < 780);
          i(a ? `Open` : `Closed`);
        };
        e();
        let t = setInterval(e, 6e4);
        return () => clearInterval(t);
      }, []),
      /*#__PURE__*/ f(e, { ...t, ref: n, variant: r || t.variant })
    );
  });
}
function be(e, t) {
  let n = s;
  if (!n.__hrFormWatch) {
    let e = (n.__hrFormWatch = { cur: null }),
      t = (e) => /\/forms\//.test(String(e && e.url ? e.url : e)),
      r = n.fetch;
    r &&
      (n.fetch = function (n) {
        let i = r.apply(this, arguments),
          a = e.cur;
        return (
          a &&
            t(n) &&
            i.then(
              (e) => {
                e.ok || a();
              },
              () => a()
            ),
          i
        );
      });
    let i = XMLHttpRequest.prototype.open,
      a = XMLHttpRequest.prototype.send;
    ((XMLHttpRequest.prototype.open = function (e, t) {
      return ((this.__hrUrl = t), i.apply(this, arguments));
    }),
      (XMLHttpRequest.prototype.send = function () {
        let n = e.cur;
        return (
          n &&
            t(this.__hrUrl) &&
            this.addEventListener(`loadend`, () => {
              (this.status >= 200 && this.status < 400) || n();
            }),
          a.apply(this, arguments)
        );
      }));
  }
  let r = n.__hrFormWatch,
    i = document.createElement(`p`);
  ((i.className = `hr-err hr-form-err`), i.setAttribute(`role`, `alert`));
  let a = e.querySelector(`[data-framer-name="Submit Wrap"]`);
  a ? a.before(i) : e.append(i);
  let o = 0,
    c = 0,
    l = !1,
    u = () => [...e.querySelectorAll(`[data-framer-name="Done"]`)].find((e) => e.offsetParent),
    d = () => {
      (c++, clearTimeout(o), r.cur === f && (r.cur = null));
    };
  function f() {
    if (u()) return;
    (d(), (l = !0), (i.innerHTML = t));
    let e = i.getBoundingClientRect(),
      n = [...document.querySelectorAll(`[data-framer-name="Bar"]`)].find(
        (e) => e.getBoundingClientRect().height > 0
      ),
      r = (n ? n.getBoundingClientRect().height : 73) + 16;
    if (e.top < r || e.bottom > s.innerHeight - 110) {
      let t = s.scrollY + e.top - Math.max(r, s.innerHeight * 0.45);
      s.scrollTo({
        top: Math.max(0, t),
        behavior: matchMedia(`(prefers-reduced-motion: reduce)`).matches ? `auto` : `smooth`,
      });
    }
  }
  function p(e) {
    (e.setAttribute(`role`, `status`),
      e.setAttribute(`aria-live`, `polite`),
      (e.tabIndex = -1),
      (e.style.outline = `none`));
    let t = matchMedia(`(prefers-reduced-motion: reduce)`).matches,
      r = [...document.querySelectorAll(`[data-framer-name="Bar"]`)].find(
        (e) => e.getBoundingClientRect().height > 0
      ),
      i = (r ? r.getBoundingClientRect().height : 73) + 16,
      a = e.closest(`[data-framer-name="Form Card"]`) || e,
      o = () => Math.max(0, s.scrollY + a.getBoundingClientRect().top - i),
      c = n.lenis;
    (Math.abs(o() - s.scrollY) > 6 &&
      (c && !t
        ? c.scrollTo(o(), { duration: 0.9 })
        : s.scrollTo({ top: o(), behavior: t ? `auto` : `smooth` })),
      e.focus({ preventScroll: !0 }));
  }
  let m = (t) => {
    if ((d(), (i.innerHTML = ``), l)) {
      ((l = !1), t.preventDefault(), t.stopImmediatePropagation());
      let n = e.querySelector(`input[name="Name"]`);
      n &&
        n.dispatchEvent(
          new KeyboardEvent(`keydown`, { key: `Enter`, bubbles: !0, cancelable: !0 })
        );
    }
    r.cur = f;
    let n = ++c,
      a = Date.now(),
      s = () => {
        if (n !== c) return;
        let e = u();
        e
          ? ((r.cur = null),
            setTimeout(() => {
              n === c && p(e);
            }, 350))
          : Date.now() - a > 15e3
            ? f()
            : (o = setTimeout(s, 120));
      };
    s();
  };
  return (
    e.addEventListener(`submit`, m, !0),
    () => {
      (d(), e.removeEventListener(`submit`, m, !0), i.remove());
    }
  );
}
function xe(e) {
  return /*#__PURE__*/ p((t, n) => {
    let r = l(null);
    return (
      g(() => {
        let e = r.current?.firstElementChild,
          t = e?.closest(`form`);
        if (!e || !t) return;
        t.noValidate = !0;
        let n = Object.keys(Se)
            .map((e) => t.querySelector(`input[name="${e}"]`))
            .filter(Boolean),
          i = (e) => {
            let t = e.parentElement,
              n = t.nextElementSibling;
            return (
              (!n || !n.classList.contains(`hr-err`)) &&
                ((n = document.createElement(`p`)),
                (n.className = `hr-err`),
                (n.id = `hr-err-` + e.name.replace(/\W/g, ``)),
                n.setAttribute(`aria-live`, `polite`),
                t.after(n)),
              n
            );
          },
          a = (e) => {
            let t = Se[e.name](e.value),
              n = t !== !0,
              r = i(e);
            return (
              e.setAttribute(`aria-invalid`, String(n)),
              (r.textContent = n ? t : ``),
              n ? e.setAttribute(`aria-describedby`, r.id) : e.removeAttribute(`aria-describedby`),
              !n
            );
          },
          o = [];
        n.forEach((e) => {
          let t = () => {
              e.value && a(e);
            },
            n = () => {
              e.getAttribute(`aria-invalid`) === `true` && a(e);
            };
          (e.addEventListener(`blur`, t),
            e.addEventListener(`input`, n),
            o.push(() => {
              (e.removeEventListener(`blur`, t), e.removeEventListener(`input`, n));
            }));
        });
        let s = (e) => {
          let r = n.filter((e) => !a(e));
          if (r.length) {
            (e.preventDefault(), e.stopImmediatePropagation(), r[0].focus());
            return;
          }
          let i = W();
          [...t.querySelectorAll(`input[type="radio"][name="Preferred slot"]`)].forEach((e, t) => {
            i[t] && (e.value = i[t]);
          });
          let o = new FormData(t),
            s = String(o.get(`Name`) || ``)
              .trim()
              .split(` `)[0],
            c = String(o.get(`Issue`) || ``).toLowerCase(),
            l = String(o.get(`Preferred slot`) || ``);
          Ce =
            s && c && l
              ? `Thanks, ${s}. We will call you to confirm a ${c} inspection for ${l}.`
              : ``;
          let u = Date.now(),
            d = () => {
              let e = [...document.querySelectorAll(`[data-framer-name="Done"]`)].find(
                  (e) => e.offsetParent
                ),
                t =
                  e &&
                  [...e.querySelectorAll(`p`)].find((e) => /^Thanks/.test(e.textContent || ``));
              t && Ce ? (t.textContent = Ce) : Date.now() - u < 15e3 && setTimeout(d, 150);
            };
          Ce && d();
        };
        return (
          t.addEventListener(`submit`, s, !0),
          o.push(() => t.removeEventListener(`submit`, s, !0)),
          o.push(be(t, we)),
          () => o.forEach((e) => e())
        );
      }, []),
      /*#__PURE__*/ f(`div`, {
        ref: r,
        style: { display: `contents` },
        children: /*#__PURE__*/ f(e, { ...t, ref: n }),
      })
    );
  });
}
var Se, Ce, we;
function Te() {
  return (Te = t(() => {
    (a(),
      m(),
      h(),
      (Se = {
        Name: (e) => e.trim().length >= 2 || `Please enter your name.`,
        Phone: (e) => e.replace(/\D/g, ``).length >= 10 || `Please enter a 10-digit phone number.`,
        Email: (e) =>
          !e || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) || `That email address does not look right.`,
        "ZIP code": (e) => /^\d{5}$/.test(e) || `Please enter a 5-digit ZIP code.`,
      }),
      (Ce = ``),
      (we = `Something went wrong sending your request. Please call <a href="tel:+14065550142" style="color:inherit;text-decoration:underline">(406) 555-0142</a> or try again in a moment.`));
  }))();
}
function Ee(e, t, n, r) {
  if (typeof document > `u`) return null;
  let i = document.createElement(`canvas`).getContext(`2d`);
  if (!i) return null;
  ((i.font = `${n} 100px ${t}`),
    `letterSpacing` in i && r && (i.letterSpacing = (r * 100).toFixed(2) + `px`));
  let a = i.measureText(e);
  return {
    left: -a.actualBoundingBoxLeft,
    w: a.actualBoundingBoxRight + a.actualBoundingBoxLeft,
    asc: a.actualBoundingBoxAscent,
    fba: a.fontBoundingBoxAscent,
    fbd: a.fontBoundingBoxDescent,
  };
}
function De(e, t) {
  if (e == null || e === ``) return 0;
  if (typeof e == `number`) return e;
  let n = String(e).trim();
  return n.endsWith(`em`)
    ? parseFloat(n)
    : n.endsWith(`px`)
      ? parseFloat(n) / t
      : n.endsWith(`%`)
        ? parseFloat(n) / 100
        : parseFloat(n) || 0;
}
function Oe(e) {
  let {
      text: t = `Halden`,
      font: n = {},
      color: r = `#ffffff`,
      lineHeight: i = 0.8,
      mode: a = `fill`,
      vertical: o = `center`,
      extendBelow: s = 0,
      baseline: u = 220,
      bottomGap: p = 14,
      topPadding: m = 26,
      reveal: h = `none`,
    } = e,
    _ = re(),
    v = l(null),
    [y, b] = c({ w: 0, h: 0 }),
    [x, S] = c(ke),
    [C, w] = c(h !== `view`),
    T = n.fontFamily || `Manrope, sans-serif`,
    E = n.fontWeight || 800,
    D = De(n.letterSpacing, 100) || -0.07;
  (g(() => {
    let e = !0,
      n = () => {
        e && S(Ee(t, T, E, D));
      };
    if ((n(), typeof document < `u` && document.fonts)) {
      let e = document.fonts;
      (e
        .load(`${E} 100px ${T}`)
        .then(n)
        .catch(() => {}),
        e.ready.then(n));
    }
    return () => {
      e = !1;
    };
  }, [t, T, E, D]),
    Ae(() => {
      let e = v.current;
      if (!e) return;
      let t = () => {
        let t = e.clientWidth,
          n = e.clientHeight;
        b((e) => (e.w === t && e.h === n ? e : { w: t, h: n }));
      };
      if ((t(), typeof ResizeObserver > `u`)) return;
      let n = new ResizeObserver(t);
      return (n.observe(e), () => n.disconnect());
    }, []),
    g(() => {
      if (h !== `view` || _) return;
      let e = v.current;
      if (!e || typeof IntersectionObserver > `u`) {
        w(!0);
        return;
      }
      let t = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (w(!0), t.disconnect());
        },
        { threshold: 0.35 }
      );
      return (t.observe(e), () => t.disconnect());
    }, [h, _]));
  let ee = !!x && x.w > 0 && y.w > 0,
    O = 100,
    k = 0,
    A = 0;
  if (ee && x) {
    if (a === `fill`)
      ((O = (100 * (y.w - 1)) / x.w), (k = (-O * x.left) / 100), (A = 0), O * (i + 0.05));
    else {
      O = (100 * y.w) / x.w;
      let e = y.h - p - m,
        t = (O * x.asc) / 100 > e && e > 40;
      t && (O = (100 * e) / x.asc);
      let n = (O * x.w) / 100,
        r = (O * x.asc) / 100;
      k = (t ? (y.w - n) / 2 : 0) - (O * x.left) / 100;
      let a = o === `center` ? (y.h + s - r) / 2 + r : u;
      (a > y.h - p && (a = y.h - p), a - r < m && (a = m + r));
      let c = (i * O - ((x.fba + x.fbd) * O) / 100) / 2 + (x.fba * O) / 100;
      A = a - c;
    }
  }
  if (a === `fill`) {
    let a = x && x.w > 0 ? x : ke,
      o = `(100cqw - 1px)`,
      s = !_ && h !== `none`,
      c = [...t],
      l = `hr-wm-` + (h === `view` ? `v` : `l`);
    return /*#__PURE__*/ d(`div`, {
      ref: v,
      "aria-hidden": `true`,
      style: {
        ...e.style,
        position: `relative`,
        width: `100%`,
        containerType: `inline-size`,
        overflow: `hidden`,
        pointerEvents: `none`,
        userSelect: `none`,
      },
      children: [
        s && /*#__PURE__*/ f(`style`, { dangerouslySetInnerHTML: { __html: je } }),
        /*#__PURE__*/ f(`div`, { style: { height: `calc(${o} * ${(100 / a.w) * (i + 0.05)})` } }),
        /*#__PURE__*/ f(`div`, {
          className: s ? l + (C ? ` is-in` : ``) : void 0,
          style: {
            position: `absolute`,
            top: 0,
            left: `calc(${o} * ${-a.left / a.w})`,
            whiteSpace: `nowrap`,
            fontFamily: T,
            fontWeight: E,
            fontStyle: n.fontStyle,
            fontSize: `calc(${o} * ${100 / a.w})`,
            letterSpacing: D + `em`,
            lineHeight: i,
            color: r,
          },
          children: s
            ? c.map((e, t) =>
                /*#__PURE__*/ f(
                  `span`,
                  {
                    style: {
                      animationDelay: h === `load` ? `${0.15 + t * 0.07}s` : void 0,
                      transitionDelay: h === `view` ? `${t * 0.07}s` : void 0,
                    },
                    children: e,
                  },
                  t
                )
              )
            : t,
        }),
      ],
    });
  }
  let j = !_ && h !== `none`,
    M = [...t],
    N = `hr-wm-` + (h === `view` ? `v` : `l`),
    P = je;
  return /*#__PURE__*/ d(`div`, {
    ref: v,
    "aria-hidden": `true`,
    style: {
      ...e.style,
      position: `relative`,
      width: `100%`,
      height: `100%`,
      overflow: `visible`,
      pointerEvents: `none`,
      userSelect: `none`,
    },
    children: [
      j && /*#__PURE__*/ f(`style`, { dangerouslySetInnerHTML: { __html: P } }),
      /*#__PURE__*/ f(`div`, {
        className: j ? N + (C ? ` is-in` : ``) : void 0,
        style: {
          position: `absolute`,
          left: k,
          top: A,
          whiteSpace: `nowrap`,
          fontFamily: T,
          fontWeight: E,
          fontStyle: n.fontStyle,
          fontSize: O,
          letterSpacing: D + `em`,
          lineHeight: i * O + `px`,
          color: r,
          visibility: ee || _ ? `visible` : `hidden`,
        },
        children: j
          ? M.map((e, t) =>
              /*#__PURE__*/ f(
                `span`,
                {
                  style: {
                    animationDelay: h === `load` ? `${0.15 + t * 0.07}s` : void 0,
                    transitionDelay: h === `view` ? `${t * 0.07}s` : void 0,
                  },
                  children: e,
                },
                t
              )
            )
          : t,
      }),
    ],
  });
}
var ke, Ae, je;
function Me() {
  return (Me = t(() => {
    (a(),
      m(),
      D(),
      h(),
      (ke = { left: 6, w: 300.1, asc: 74, fba: 107, fbd: 30 }),
      (Ae = s === void 0 ? g : i),
      (je = `
.hr-wm-l span{display:inline-block;animation:hrWmUp 1.3s cubic-bezier(.22,.7,.2,1) both}
@keyframes hrWmUp{from{transform:translateY(38%);opacity:0}to{transform:none;opacity:1}}
.hr-wm-v span{display:inline-block;opacity:0;transform:translateY(46%);transition:opacity .9s cubic-bezier(.22,.7,.2,1),transform 1.2s cubic-bezier(.22,.7,.2,1)}
.hr-wm-v.is-in span{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.hr-wm-l span{animation:none}.hr-wm-v span{opacity:1;transform:none;transition:none}}`),
      A(Oe, {
        text: { type: z.String, title: `Text`, defaultValue: `Halden` },
        font: {
          type: z.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          displayFontSize: !1,
          defaultValue: { variant: `Extra Bold`, letterSpacing: `-0.07em`, lineHeight: `0.8em` },
        },
        color: { type: z.Color, title: `Colour`, defaultValue: `#ffffff` },
        lineHeight: {
          type: z.Number,
          title: `Line Height`,
          defaultValue: 0.8,
          min: 0.5,
          max: 1.5,
          step: 0.01,
        },
        mode: {
          type: z.Enum,
          title: `Fit`,
          options: [`fill`, `box`],
          optionTitles: [`Fill width`, `Inside box`],
          defaultValue: `fill`,
          displaySegmentedControl: !0,
        },
        vertical: {
          type: z.Enum,
          title: `Vertical`,
          options: [`center`, `baseline`],
          optionTitles: [`Centre`, `Baseline`],
          defaultValue: `center`,
          displaySegmentedControl: !0,
          hidden: (e) => e.mode !== `box`,
        },
        extendBelow: {
          type: z.Number,
          title: `Centre Extra`,
          description: `Extra height below the box included when centring (e.g. down to the kicker line).`,
          defaultValue: 0,
          min: 0,
          max: 400,
          unit: `px`,
          hidden: (e) => e.mode !== `box` || e.vertical !== `center`,
        },
        baseline: {
          type: z.Number,
          title: `Baseline`,
          defaultValue: 220,
          min: 0,
          max: 1200,
          unit: `px`,
          hidden: (e) => e.mode !== `box` || e.vertical !== `baseline`,
        },
        bottomGap: {
          type: z.Number,
          title: `Bottom Gap`,
          defaultValue: 14,
          min: 0,
          max: 200,
          unit: `px`,
          hidden: (e) => e.mode !== `box`,
        },
        topPadding: {
          type: z.Number,
          title: `Top Padding`,
          defaultValue: 26,
          min: 0,
          max: 200,
          unit: `px`,
          hidden: (e) => e.mode !== `box`,
        },
        reveal: {
          type: z.Enum,
          title: `Reveal`,
          options: [`none`, `load`, `view`],
          optionTitles: [`None`, `On load`, `In view`],
          defaultValue: `none`,
        },
      }));
  }))();
}
var Ne, Pe, Fe;
function Ie() {
  return (Ie = t(() => {
    (D(),
      R.loadFonts([]),
      (Ne = [{ explicitInter: !0, fonts: [] }]),
      (Pe = [
        `.framer-00lQh .framer-styles-preset-1q80vqa:not(.rich-text-wrapper), .framer-00lQh .framer-styles-preset-1q80vqa.rich-text-wrapper a { --framer-link-hover-text-color: #ffffff; --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-8893c285-c73a-495e-8e4e-55931d32e72c); --framer-link-text-decoration: none; transition-delay: 0s; transition-duration: 0.2s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      (Fe = `framer-00lQh`));
  }))();
}
var Le, Re, ze, Be;
function Ve() {
  return (Ve = t(() => {
    (D(),
      R.loadFonts([`FS;Manrope-variable`]),
      (Le = [{ defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` }]),
      (Re = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope Variable`,
              openType: !0,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
              variationAxes: Le,
              weight: `400`,
            },
          ],
        },
      ]),
      (ze = [
        `.framer-khGKs .framer-styles-preset-116c97r:not(.rich-text-wrapper), .framer-khGKs .framer-styles-preset-116c97r.rich-text-wrapper p { --framer-font-family: "Manrope Variable", "Manrope Variable Placeholder", sans-serif; --framer-font-open-type-features: 'tnum' on; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 600; --framer-font-weight: 400; --framer-letter-spacing: 0.005em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Be = `framer-khGKs`));
  }))();
}
var He, Ue, We, Ge;
function Ke() {
  return (Ke = t(() => {
    (D(),
      R.loadFonts([`FS;Manrope-variable`]),
      (He = [{ defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` }]),
      (Ue = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
              variationAxes: He,
              weight: `400`,
            },
          ],
        },
      ]),
      (We = [
        `.framer-IFwcg .framer-styles-preset-cmzjx3:not(.rich-text-wrapper), .framer-IFwcg .framer-styles-preset-cmzjx3.rich-text-wrapper p { --framer-font-family: "Manrope Variable", "Manrope Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 450; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Ge = `framer-IFwcg`));
  }))();
}
var qe, Je, Ye, Xe;
function Ze() {
  return (Ze = t(() => {
    (D(),
      R.loadFonts([`FS;Manrope-variable`]),
      (qe = [{ defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` }]),
      (Je = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
              variationAxes: qe,
              weight: `400`,
            },
          ],
        },
      ]),
      (Ye = [
        `.framer-5vi6Z .framer-styles-preset-asb5xi:not(.rich-text-wrapper), .framer-5vi6Z .framer-styles-preset-asb5xi.rich-text-wrapper p { --framer-font-family: "Manrope Variable", "Manrope Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 450; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Xe = `framer-5vi6Z`));
  }))();
}
var Qe, $e, et, tt;
function nt() {
  return (nt = t(() => {
    (D(),
      R.loadFonts([`FS;Manrope-variable`]),
      (Qe = [{ defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` }]),
      ($e = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
              variationAxes: Qe,
              weight: `400`,
            },
          ],
        },
      ]),
      (et = [
        `.framer-k1wxT .framer-styles-preset-b0x56o:not(.rich-text-wrapper), .framer-k1wxT .framer-styles-preset-b0x56o.rich-text-wrapper p { --framer-font-family: "Manrope Variable", "Manrope Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 450; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (tt = `framer-k1wxT`));
  }))();
}
var rt, it, at, ot;
function st() {
  return (st = t(() => {
    (D(),
      R.loadFonts([`FS;Manrope-variable`]),
      (rt = [{ defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` }]),
      (it = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope Variable`,
              openType: !0,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
              variationAxes: rt,
              weight: `400`,
            },
          ],
        },
      ]),
      (at = [
        `.framer-6rwfR .framer-styles-preset-47y0yi:not(.rich-text-wrapper), .framer-6rwfR .framer-styles-preset-47y0yi.rich-text-wrapper p { --framer-font-family: "Manrope Variable", "Manrope Variable Placeholder", sans-serif; --framer-font-open-type-features: 'tnum' on; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 600; --framer-font-weight: 400; --framer-letter-spacing: 0.005em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (ot = `framer-6rwfR`));
  }))();
}
var ct, lt, ut;
function dt() {
  return (dt = t(() => {
    (D(),
      R.loadFonts([]),
      (ct = [{ explicitInter: !0, fonts: [] }]),
      (lt = [
        `.framer-79s3J .framer-styles-preset-owdekf:not(.rich-text-wrapper), .framer-79s3J .framer-styles-preset-owdekf.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d); --framer-link-hover-text-decoration: none; --framer-link-text-color: #ffffff; --framer-link-text-decoration: none; transition-delay: 0s; transition-duration: 0.2s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      (ut = `framer-79s3J`));
  }))();
}
var ft = /* @__PURE__ */ e({ __FramerMetadata__: () => Tt, default: () => K });
function pt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, K, Tt;
function Et() {
  return (Et = t(() => {
    (m(),
      D(),
      y(),
      h(),
      Ve(),
      (mt = [`vyygvgL2T`, `AATeRiIxY`, `x6r09bT_x`]),
      (ht = `framer-7knJm`),
      (gt = {
        AATeRiIxY: `framer-v-1msoepm`,
        vyygvgL2T: `framer-v-1198o2o`,
        x6r09bT_x: `framer-v-84imnh`,
      }),
      (_t = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (vt = ({ value: e, children: t }) => {
        let r = n(v),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ f(v.Provider, { value: a, children: t });
      }),
      (yt = { Closed: `x6r09bT_x`, Hours: `vyygvgL2T`, Open: `AATeRiIxY` }),
      (bt = b.create(o)),
      (xt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: yt[r.variant] ?? r.variant ?? `vyygvgL2T`,
      })),
      (St = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ct = /*#__PURE__*/ p(function (e, t) {
        let n = l(null),
          i = t ?? n,
          a = r(),
          { activeLocale: s, contentLocale: c, setLocale: u } = ue();
        le();
        let { style: p, className: m, layoutId: h, variant: g, ...v } = xt(e),
          {
            baseVariant: y,
            classNames: S,
            clearLoadingGesture: C,
            gestureHandlers: w,
            gestureVariant: T,
            isLoading: D,
            setGestureState: ee,
            setVariant: O,
            variants: k,
          } = E({
            cycleOrder: mt,
            defaultVariant: `vyygvgL2T`,
            ref: i,
            variant: g,
            variantClassNames: gt,
          }),
          A = St(e, k),
          j = x(ht, Be);
        return /*#__PURE__*/ f(_, {
          id: h ?? a,
          children: /*#__PURE__*/ f(bt, {
            animate: k,
            initial: !1,
            children: /*#__PURE__*/ f(vt, {
              value: _t,
              children: /*#__PURE__*/ d(b.div, {
                ...v,
                ...w,
                className: x(j, `framer-1198o2o`, m, S),
                "data-framer-name": `Hours`,
                layoutDependency: A,
                layoutId: `vyygvgL2T`,
                ref: i,
                style: { ...p },
                ...pt(
                  {
                    AATeRiIxY: { "data-framer-name": `Open` },
                    x6r09bT_x: { "data-framer-name": `Closed` },
                  },
                  y,
                  T
                ),
                children: [
                  /*#__PURE__*/ f(b.div, {
                    className: `framer-1v0hc8x`,
                    "data-framer-name": `Dot`,
                    layoutDependency: A,
                    layoutId: `r7W7CHSxL`,
                    style: {
                      backgroundColor: `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                      borderBottomLeftRadius: `50%`,
                      borderBottomRightRadius: `50%`,
                      borderTopLeftRadius: `50%`,
                      borderTopRightRadius: `50%`,
                    },
                    variants: {
                      AATeRiIxY: {
                        backgroundColor: `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                      },
                    },
                  }),
                  /*#__PURE__*/ f(V, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ f(o, {
                      children: /*#__PURE__*/ f(b.p, {
                        className: `framer-styles-preset-116c97r`,
                        "data-styles-preset": `akW2QmX5A`,
                        dir: `auto`,
                        style: {
                          "--framer-text-alignment": `start`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                        },
                        children: `Office hours Mon–Sat`,
                      }),
                    }),
                    className: `framer-1crybrf`,
                    fonts: [`Inter`],
                    layoutDependency: A,
                    layoutId: `jczxJCs2r`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...pt(
                      {
                        AATeRiIxY: {
                          children: /*#__PURE__*/ f(o, {
                            children: /*#__PURE__*/ f(b.p, {
                              className: `framer-styles-preset-116c97r`,
                              "data-styles-preset": `akW2QmX5A`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                              },
                              children: `Office open now · storm line 24/7`,
                            }),
                          }),
                        },
                        x6r09bT_x: {
                          children: /*#__PURE__*/ f(o, {
                            children: /*#__PURE__*/ f(b.p, {
                              className: `framer-styles-preset-116c97r`,
                              "data-styles-preset": `akW2QmX5A`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                              },
                              children: `Office closed · storm line 24/7`,
                            }),
                          }),
                        },
                      },
                      y,
                      T
                    ),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (wt = [
        `.framer-7knJm.framer-pzuwu8, .framer-7knJm .framer-pzuwu8 { display: block; }`,
        `.framer-7knJm.framer-1198o2o { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-7knJm .framer-1v0hc8x { flex: none; height: 7px; position: relative; width: 7px; }`,
        `.framer-7knJm .framer-1crybrf { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...ze,
      ]),
      (K = j(Ct, wt, `framer-7knJm`)),
      (K.displayName = `Office Status`),
      (K.defaultProps = { height: 19, width: 140 }),
      A(K, {
        variant: {
          options: [`vyygvgL2T`, `AATeRiIxY`, `x6r09bT_x`],
          optionTitles: [`Hours`, `Open`, `Closed`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      T(
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
            ],
          },
          ...U(Re),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Tt = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerDwFML5mAS`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"AATeRiIxY":{"layout":["auto","auto"]},"x6r09bT_x":{"layout":["auto","auto"]}}}`,
              framerIntrinsicHeight: `19`,
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
              framerAutoSizeImages: `true`,
              framerColorSyntax: `true`,
              framerIntrinsicWidth: `140`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, J;
function Ut() {
  return (Ut = t(() => {
    (m(),
      D(),
      y(),
      h(),
      Te(),
      Me(),
      Ie(),
      Ve(),
      Ke(),
      Ze(),
      nt(),
      st(),
      dt(),
      Et(),
      (Dt = M(K)),
      (Ot = ae(K, { nodeId: `d1SEqCBd5`, override: ye, scopeId: `lq3uLjdnE` })),
      (kt = k(Ot, ft)),
      (At = M(Oe)),
      (jt = [`cbh2LoKnv`, `Ud0VlDtyf`, `qYRUlC3wL`]),
      (Mt = `framer-66niz`),
      (Nt = {
        cbh2LoKnv: `framer-v-1qzh8vh`,
        qYRUlC3wL: `framer-v-17hoktu`,
        Ud0VlDtyf: `framer-v-ngeas4`,
      }),
      (Pt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ft = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (It = ({ value: e, children: t }) => {
        let r = n(v),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ f(v.Provider, { value: a, children: t });
      }),
      (Lt = { Desktop: `cbh2LoKnv`, Phone: `qYRUlC3wL`, Tablet: `Ud0VlDtyf` }),
      (Rt = b.create(o)),
      (zt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Lt[r.variant] ?? r.variant ?? `cbh2LoKnv`,
      })),
      (Bt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Vt = /*#__PURE__*/ p(function (e, t) {
        let n = l(null),
          i = t ?? n,
          a = r(),
          { activeLocale: s, contentLocale: c, setLocale: u } = ue();
        le();
        let { style: p, className: m, layoutId: h, variant: g, ...v } = zt(e),
          {
            baseVariant: y,
            classNames: S,
            clearLoadingGesture: C,
            gestureHandlers: w,
            gestureVariant: T,
            isLoading: D,
            setGestureState: ee,
            setVariant: O,
            variants: k,
          } = E({
            cycleOrder: jt,
            defaultVariant: `cbh2LoKnv`,
            ref: i,
            variant: g,
            variantClassNames: Nt,
          }),
          A = Bt(e, k),
          j = x(Mt, tt, Ge, ot, Be, ut, Xe, Fe),
          M = () => y !== `qYRUlC3wL`;
        return /*#__PURE__*/ f(_, {
          id: h ?? a,
          children: /*#__PURE__*/ f(Rt, {
            animate: k,
            initial: !1,
            children: /*#__PURE__*/ f(It, {
              value: Pt,
              children: /*#__PURE__*/ f(b.div, {
                ...v,
                ...w,
                className: x(j, `framer-1qzh8vh`, m, S),
                "data-framer-name": `Desktop`,
                layoutDependency: A,
                layoutId: `cbh2LoKnv`,
                ref: i,
                style: {
                  backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                  ...p,
                },
                ...q(
                  {
                    qYRUlC3wL: { "data-framer-name": `Phone` },
                    Ud0VlDtyf: { "data-framer-name": `Tablet` },
                  },
                  y,
                  T
                ),
                children: /*#__PURE__*/ d(b.div, {
                  className: `framer-1j30l8t`,
                  "data-framer-name": `Wrap`,
                  layoutDependency: A,
                  layoutId: `BNjWQ9KN1`,
                  children: [
                    /*#__PURE__*/ d(b.div, {
                      className: `framer-1jwz1gr`,
                      "data-framer-name": `Top`,
                      layoutDependency: A,
                      layoutId: `w3cOlvNKO`,
                      children: [
                        /*#__PURE__*/ d(b.div, {
                          className: `framer-14v1qs8`,
                          "data-framer-name": `Brand Column`,
                          layoutDependency: A,
                          layoutId: `Bs1jIxM5z`,
                          children: [
                            /*#__PURE__*/ f(I, {
                              href: { webPageId: `augiA20Il` },
                              motionChild: !0,
                              nodeId: `SL5yX8EpH`,
                              scopeId: `lq3uLjdnE`,
                              children: /*#__PURE__*/ d(b.a, {
                                className: `framer-15ax4h1 framer-14rpmsq`,
                                "data-framer-name": `Brand`,
                                layoutDependency: A,
                                layoutId: `SL5yX8EpH`,
                                children: [
                                  /*#__PURE__*/ f(b.div, {
                                    className: `framer-upitwy`,
                                    "data-framer-name": `Mark Wrap`,
                                    layoutDependency: A,
                                    layoutId: `S8meKZkCO`,
                                    children: /*#__PURE__*/ f(oe, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 32,
                                        pixelWidth: 32,
                                        sizes: `28px`,
                                        src: `../../assets/images/yGIHkc5J4grncWs57v9S1wXSZWI.svg`,
                                      },
                                      className: `framer-1e6krno`,
                                      "data-framer-name": `Mark`,
                                      layoutDependency: A,
                                      layoutId: `H0Lq28ivI`,
                                    }),
                                  }),
                                  /*#__PURE__*/ f(V, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ f(o, {
                                      children: /*#__PURE__*/ f(b.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURnd01BPT0=`,
                                          "--framer-font-family": `"Manrope Variable"`,
                                          "--framer-font-size": `23px`,
                                          "--framer-font-style": `normal`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 800)`,
                                          "--framer-font-weight": `400`,
                                          "--framer-letter-spacing": `-0.05em`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                        },
                                        children: `Regolith`,
                                      }),
                                    }),
                                    className: `framer-hxyk9j`,
                                    fonts: [`FS;Manrope-variable`],
                                    layoutDependency: A,
                                    layoutId: `ZZsxAKTqA`,
                                    style: {
                                      "--extracted-2gg91v": `"wght" 800`,
                                      "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  M() &&
                                    /*#__PURE__*/ f(b.div, {
                                      className: `framer-1wr37ew`,
                                      "data-framer-name": `Sub`,
                                      layoutDependency: A,
                                      layoutId: `uxmdcS15w`,
                                      children: /*#__PURE__*/ f(V, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURRMU1BPT0=`,
                                              "--framer-font-family": `"Manrope Variable"`,
                                              "--framer-font-size": `11px`,
                                              "--framer-font-style": `normal`,
                                              "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                              "--framer-font-weight": `400`,
                                              "--framer-letter-spacing": `0.02em`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                            },
                                            children: `Construction`,
                                          }),
                                        }),
                                        className: `framer-1irvopp`,
                                        fonts: [`FS;Manrope-variable`],
                                        layoutDependency: A,
                                        layoutId: `DD7PX0QGx`,
                                        style: {
                                          "--extracted-2gg91v": `"wght" 450`,
                                          "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            /*#__PURE__*/ f(V, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ f(o, {
                                children: /*#__PURE__*/ f(b.p, {
                                  className: `framer-styles-preset-b0x56o`,
                                  "data-styles-preset": `SYtD433BS`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `start`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                  },
                                  children: `Homes, extensions and renovations. Thoughtful planning, practical construction and attention to the details you live with every day.`,
                                }),
                              }),
                              className: `framer-5778ya`,
                              fonts: [`Inter`],
                              layoutDependency: A,
                              layoutId: `v98n5BTKk`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...q(
                                {
                                  qYRUlC3wL: {
                                    children: /*#__PURE__*/ f(o, {
                                      children: /*#__PURE__*/ f(b.p, {
                                        className: `framer-styles-preset-cmzjx3`,
                                        "data-styles-preset": `BhvMSfpVv`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                        },
                                        children: `Homes, extensions and renovations. Thoughtful planning, practical construction and attention to the details you live with every day.`,
                                      }),
                                    }),
                                  },
                                },
                                y,
                                T
                              ),
                            }),
                            /*#__PURE__*/ f(L, {
                              height: 19,
                              children: /*#__PURE__*/ f(N, {
                                className: `framer-1xzphf5-container`,
                                "data-framer-name": `Office Status`,
                                layoutDependency: A,
                                layoutId: `d1SEqCBd5-container`,
                                name: `Office Status`,
                                nodeId: `d1SEqCBd5`,
                                rendersWithMotion: !0,
                                scopeId: `lq3uLjdnE`,
                                children: /*#__PURE__*/ f(kt, {
                                  height: `100%`,
                                  id: `d1SEqCBd5`,
                                  layoutId: `d1SEqCBd5`,
                                  name: `Office Status`,
                                  variant: Ft(`vyygvgL2T`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ d(b.div, {
                          className: `framer-11hi9ce`,
                          "data-framer-name": `Columns`,
                          layoutDependency: A,
                          layoutId: `tQm1jSqTl`,
                          children: [
                            /*#__PURE__*/ d(b.div, {
                              className: `framer-1qct46m`,
                              "data-framer-name": `Services`,
                              layoutDependency: A,
                              layoutId: `e3UmsifRl`,
                              children: [
                                /*#__PURE__*/ f(V, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ f(o, {
                                    children: /*#__PURE__*/ f(b.p, {
                                      className: `framer-styles-preset-47y0yi`,
                                      "data-styles-preset": `WcNYxFkzx`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                      },
                                      children: `Services`,
                                    }),
                                  }),
                                  className: `framer-8fotr5`,
                                  fonts: [`Inter`],
                                  layoutDependency: A,
                                  layoutId: `YgaCnjW7W`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...q(
                                    {
                                      qYRUlC3wL: {
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            className: `framer-styles-preset-116c97r`,
                                            "data-styles-preset": `akW2QmX5A`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                            },
                                            children: `Services`,
                                          }),
                                        }),
                                      },
                                    },
                                    y,
                                    T
                                  ),
                                }),
                                /*#__PURE__*/ d(b.div, {
                                  className: `framer-1o4e3df`,
                                  "data-framer-name": `List`,
                                  layoutDependency: A,
                                  layoutId: `LFTx5aoCU`,
                                  children: [
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                          },
                                          children: /*#__PURE__*/ f(I, {
                                            href: {
                                              pathVariables: { Uq4dgDOpK: `roof-replacement` },
                                              unresolvedPathSlugs: {
                                                Uq4dgDOpK: {
                                                  collectionId: `eHfc5JU5K`,
                                                  collectionItemId: `ofJC7h_jM`,
                                                },
                                              },
                                              webPageId: `tO8VmqOLs`,
                                            },
                                            motionChild: !0,
                                            nodeId: `QiTpk_YKI`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `lq3uLjdnE`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ f(b.a, {
                                              className: `framer-styles-preset-owdekf`,
                                              "data-styles-preset": `zzAe2Leus`,
                                              children: `New homes`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-145y5rs`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `QiTpk_YKI`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                },
                                                children: /*#__PURE__*/ f(I, {
                                                  href: {
                                                    pathVariables: {
                                                      Uq4dgDOpK: `roof-replacement`,
                                                    },
                                                    unresolvedPathSlugs: {
                                                      Uq4dgDOpK: {
                                                        collectionId: `eHfc5JU5K`,
                                                        collectionItemId: `ofJC7h_jM`,
                                                      },
                                                    },
                                                    webPageId: `tO8VmqOLs`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `QiTpk_YKI`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `lq3uLjdnE`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(b.a, {
                                                    className: `framer-styles-preset-owdekf`,
                                                    "data-styles-preset": `zzAe2Leus`,
                                                    children: `New homes`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                          },
                                          children: /*#__PURE__*/ f(I, {
                                            href: {
                                              pathVariables: { Uq4dgDOpK: `roof-repair` },
                                              unresolvedPathSlugs: {
                                                Uq4dgDOpK: {
                                                  collectionId: `eHfc5JU5K`,
                                                  collectionItemId: `jkBHcuwuq`,
                                                },
                                              },
                                              webPageId: `tO8VmqOLs`,
                                            },
                                            motionChild: !0,
                                            nodeId: `DJUZ38sug`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `lq3uLjdnE`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ f(b.a, {
                                              className: `framer-styles-preset-owdekf`,
                                              "data-styles-preset": `zzAe2Leus`,
                                              children: `Renovations`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-ytzb89`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `DJUZ38sug`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                },
                                                children: /*#__PURE__*/ f(I, {
                                                  href: {
                                                    pathVariables: { Uq4dgDOpK: `roof-repair` },
                                                    unresolvedPathSlugs: {
                                                      Uq4dgDOpK: {
                                                        collectionId: `eHfc5JU5K`,
                                                        collectionItemId: `jkBHcuwuq`,
                                                      },
                                                    },
                                                    webPageId: `tO8VmqOLs`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `DJUZ38sug`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `lq3uLjdnE`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(b.a, {
                                                    className: `framer-styles-preset-owdekf`,
                                                    "data-styles-preset": `zzAe2Leus`,
                                                    children: `Renovations`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                          },
                                          children: /*#__PURE__*/ f(I, {
                                            href: {
                                              pathVariables: { Uq4dgDOpK: `storm-damage` },
                                              unresolvedPathSlugs: {
                                                Uq4dgDOpK: {
                                                  collectionId: `eHfc5JU5K`,
                                                  collectionItemId: `m7vmN2vm5`,
                                                },
                                              },
                                              webPageId: `tO8VmqOLs`,
                                            },
                                            motionChild: !0,
                                            nodeId: `Tnj_fZOsc`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `lq3uLjdnE`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ f(b.a, {
                                              className: `framer-styles-preset-owdekf`,
                                              "data-styles-preset": `zzAe2Leus`,
                                              children: `Extensions`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-ptqmzm`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `Tnj_fZOsc`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                },
                                                children: /*#__PURE__*/ f(I, {
                                                  href: {
                                                    pathVariables: { Uq4dgDOpK: `storm-damage` },
                                                    unresolvedPathSlugs: {
                                                      Uq4dgDOpK: {
                                                        collectionId: `eHfc5JU5K`,
                                                        collectionItemId: `m7vmN2vm5`,
                                                      },
                                                    },
                                                    webPageId: `tO8VmqOLs`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `Tnj_fZOsc`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `lq3uLjdnE`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(b.a, {
                                                    className: `framer-styles-preset-owdekf`,
                                                    "data-styles-preset": `zzAe2Leus`,
                                                    children: `Extensions`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                          },
                                          children: /*#__PURE__*/ f(I, {
                                            href: {
                                              pathVariables: { Uq4dgDOpK: `roof-inspection` },
                                              unresolvedPathSlugs: {
                                                Uq4dgDOpK: {
                                                  collectionId: `eHfc5JU5K`,
                                                  collectionItemId: `s3aYe7sdM`,
                                                },
                                              },
                                              webPageId: `tO8VmqOLs`,
                                            },
                                            motionChild: !0,
                                            nodeId: `DOzqzEJ_l`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `lq3uLjdnE`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ f(b.a, {
                                              className: `framer-styles-preset-owdekf`,
                                              "data-styles-preset": `zzAe2Leus`,
                                              children: /*#__PURE__*/ f(b.span, {
                                                style: {
                                                  "--framer-text-color": `var(--extracted-hl0iuy, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                },
                                                children: `Site visits`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1cpsx4i`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `DOzqzEJ_l`,
                                      style: {
                                        "--extracted-hl0iuy": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                        "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                },
                                                children: /*#__PURE__*/ f(I, {
                                                  href: {
                                                    pathVariables: { Uq4dgDOpK: `roof-inspection` },
                                                    unresolvedPathSlugs: {
                                                      Uq4dgDOpK: {
                                                        collectionId: `eHfc5JU5K`,
                                                        collectionItemId: `s3aYe7sdM`,
                                                      },
                                                    },
                                                    webPageId: `tO8VmqOLs`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `DOzqzEJ_l`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `lq3uLjdnE`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(b.a, {
                                                    className: `framer-styles-preset-owdekf`,
                                                    "data-styles-preset": `zzAe2Leus`,
                                                    children: /*#__PURE__*/ f(b.span, {
                                                      style: {
                                                        "--framer-text-color": `var(--extracted-hl0iuy, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                      },
                                                      children: `Site visits`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                          },
                                          children: /*#__PURE__*/ f(I, {
                                            href: {
                                              pathVariables: { Uq4dgDOpK: `gutters` },
                                              unresolvedPathSlugs: {
                                                Uq4dgDOpK: {
                                                  collectionId: `eHfc5JU5K`,
                                                  collectionItemId: `N4_4utRrp`,
                                                },
                                              },
                                              webPageId: `tO8VmqOLs`,
                                            },
                                            motionChild: !0,
                                            nodeId: `IIYBQMTiH`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `lq3uLjdnE`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ f(b.a, {
                                              className: `framer-styles-preset-owdekf`,
                                              "data-styles-preset": `zzAe2Leus`,
                                              children: /*#__PURE__*/ f(b.span, {
                                                style: {
                                                  "--framer-text-color": `var(--extracted-hl0iuy, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                },
                                                children: `Exterior improvements`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1mtze9y`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `IIYBQMTiH`,
                                      style: {
                                        "--extracted-hl0iuy": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                        "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                },
                                                children: /*#__PURE__*/ f(I, {
                                                  href: {
                                                    pathVariables: { Uq4dgDOpK: `gutters` },
                                                    unresolvedPathSlugs: {
                                                      Uq4dgDOpK: {
                                                        collectionId: `eHfc5JU5K`,
                                                        collectionItemId: `N4_4utRrp`,
                                                      },
                                                    },
                                                    webPageId: `tO8VmqOLs`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `IIYBQMTiH`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `lq3uLjdnE`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(b.a, {
                                                    className: `framer-styles-preset-owdekf`,
                                                    "data-styles-preset": `zzAe2Leus`,
                                                    children: /*#__PURE__*/ f(b.span, {
                                                      style: {
                                                        "--framer-text-color": `var(--extracted-hl0iuy, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                      },
                                                      children: `Exterior improvements`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ d(b.div, {
                              className: `framer-zep20w`,
                              "data-framer-name": `Company`,
                              layoutDependency: A,
                              layoutId: `H6bgB7RY3`,
                              children: [
                                /*#__PURE__*/ f(V, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ f(o, {
                                    children: /*#__PURE__*/ f(b.p, {
                                      className: `framer-styles-preset-47y0yi`,
                                      "data-styles-preset": `WcNYxFkzx`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                      },
                                      children: `Company`,
                                    }),
                                  }),
                                  className: `framer-liw2fi`,
                                  fonts: [`Inter`],
                                  layoutDependency: A,
                                  layoutId: `oC2hD3Bbn`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...q(
                                    {
                                      qYRUlC3wL: {
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            className: `framer-styles-preset-116c97r`,
                                            "data-styles-preset": `akW2QmX5A`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                            },
                                            children: `Company`,
                                          }),
                                        }),
                                      },
                                    },
                                    y,
                                    T
                                  ),
                                }),
                                /*#__PURE__*/ d(b.div, {
                                  className: `framer-1ezke5o`,
                                  "data-framer-name": `List`,
                                  layoutDependency: A,
                                  layoutId: `S8K6x5zcX`,
                                  children: [
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                          },
                                          children: /*#__PURE__*/ f(I, {
                                            href: { webPageId: `Ex3jmBT8v` },
                                            motionChild: !0,
                                            nodeId: `nzoNaV6vY`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `lq3uLjdnE`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ f(b.a, {
                                              className: `framer-styles-preset-owdekf`,
                                              "data-styles-preset": `zzAe2Leus`,
                                              children: `About`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-peqzwv`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `nzoNaV6vY`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                },
                                                children: /*#__PURE__*/ f(I, {
                                                  href: { webPageId: `Ex3jmBT8v` },
                                                  motionChild: !0,
                                                  nodeId: `nzoNaV6vY`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `lq3uLjdnE`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(b.a, {
                                                    className: `framer-styles-preset-owdekf`,
                                                    "data-styles-preset": `zzAe2Leus`,
                                                    children: `About`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                          },
                                          children: /*#__PURE__*/ f(I, {
                                            href: { webPageId: `WiWpK4bRq` },
                                            motionChild: !0,
                                            nodeId: `ZHQouShOp`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `lq3uLjdnE`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ f(b.a, {
                                              className: `framer-styles-preset-owdekf`,
                                              "data-styles-preset": `zzAe2Leus`,
                                              children: `Projects`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-14kkrd0`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `ZHQouShOp`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                },
                                                children: /*#__PURE__*/ f(I, {
                                                  href: { webPageId: `WiWpK4bRq` },
                                                  motionChild: !0,
                                                  nodeId: `ZHQouShOp`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `lq3uLjdnE`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(b.a, {
                                                    className: `framer-styles-preset-owdekf`,
                                                    "data-styles-preset": `zzAe2Leus`,
                                                    children: `Projects`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                          },
                                          children: /*#__PURE__*/ f(I, {
                                            href: { webPageId: `u0GR3v9Uc` },
                                            motionChild: !0,
                                            nodeId: `LPB55kAtM`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `lq3uLjdnE`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ f(b.a, {
                                              className: `framer-styles-preset-owdekf`,
                                              "data-styles-preset": `zzAe2Leus`,
                                              children: `Materials`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1ve1hnu`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `LPB55kAtM`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                },
                                                children: /*#__PURE__*/ f(I, {
                                                  href: { webPageId: `u0GR3v9Uc` },
                                                  motionChild: !0,
                                                  nodeId: `LPB55kAtM`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `lq3uLjdnE`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(b.a, {
                                                    className: `framer-styles-preset-owdekf`,
                                                    "data-styles-preset": `zzAe2Leus`,
                                                    children: `Materials`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                          },
                                          children: /*#__PURE__*/ f(I, {
                                            href: { webPageId: `NbWyEb_lH` },
                                            motionChild: !0,
                                            nodeId: `XdAhr1XzZ`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `lq3uLjdnE`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ f(b.a, {
                                              className: `framer-styles-preset-owdekf`,
                                              "data-styles-preset": `zzAe2Leus`,
                                              children: `Building notes`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1dseoyw`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `XdAhr1XzZ`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                },
                                                children: /*#__PURE__*/ f(I, {
                                                  href: { webPageId: `NbWyEb_lH` },
                                                  motionChild: !0,
                                                  nodeId: `XdAhr1XzZ`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `lq3uLjdnE`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(b.a, {
                                                    className: `framer-styles-preset-owdekf`,
                                                    "data-styles-preset": `zzAe2Leus`,
                                                    children: `Building notes`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                          },
                                          children: /*#__PURE__*/ f(I, {
                                            href: { hash: `:MXAGu9jxB`, webPageId: `augiA20Il` },
                                            motionChild: !0,
                                            nodeId: `Jd7Ml0MV1`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `lq3uLjdnE`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ f(b.a, {
                                              className: `framer-styles-preset-owdekf`,
                                              "data-styles-preset": `zzAe2Leus`,
                                              children: `FAQ`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1rcjd82`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `Jd7Ml0MV1`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                                },
                                                children: /*#__PURE__*/ f(I, {
                                                  href: {
                                                    hash: `:MXAGu9jxB`,
                                                    webPageId: `augiA20Il`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `Jd7Ml0MV1`,
                                                  openInNewTab: !1,
                                                  relValues: [],
                                                  scopeId: `lq3uLjdnE`,
                                                  smoothScroll: !1,
                                                  children: /*#__PURE__*/ f(b.a, {
                                                    className: `framer-styles-preset-owdekf`,
                                                    "data-styles-preset": `zzAe2Leus`,
                                                    children: `FAQ`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ d(b.div, {
                              className: `framer-8jwpld`,
                              "data-framer-name": `Service area`,
                              layoutDependency: A,
                              layoutId: `G0JOSsSBV`,
                              children: [
                                /*#__PURE__*/ f(V, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ f(o, {
                                    children: /*#__PURE__*/ f(b.p, {
                                      className: `framer-styles-preset-47y0yi`,
                                      "data-styles-preset": `WcNYxFkzx`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                      },
                                      children: `Service area`,
                                    }),
                                  }),
                                  className: `framer-p0svkd`,
                                  fonts: [`Inter`],
                                  layoutDependency: A,
                                  layoutId: `RuPI8l67_`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...q(
                                    {
                                      qYRUlC3wL: {
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            className: `framer-styles-preset-116c97r`,
                                            "data-styles-preset": `akW2QmX5A`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                            },
                                            children: `Service area`,
                                          }),
                                        }),
                                      },
                                    },
                                    y,
                                    T
                                  ),
                                }),
                                /*#__PURE__*/ d(b.div, {
                                  className: `framer-yb44y1`,
                                  "data-framer-name": `List`,
                                  layoutDependency: A,
                                  layoutId: `w_5rtBDJ5`,
                                  children: [
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                          },
                                          children: `Ashford`,
                                        }),
                                      }),
                                      className: `framer-1trdji8`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `SW1pcLXzQ`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                                },
                                                children: `Ashford`,
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                          },
                                          children: `Millbrook`,
                                        }),
                                      }),
                                      className: `framer-uljwjo`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `OqKYERc_Q`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                                },
                                                children: `Millbrook`,
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                          },
                                          children: `Fenwick`,
                                        }),
                                      }),
                                      className: `framer-mg92li`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `TF_M3D31m`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                                },
                                                children: `Fenwick`,
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                          },
                                          children: `Kestrel Heights`,
                                        }),
                                      }),
                                      className: `framer-j9h0th`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `UK3Gjidqx`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                                },
                                                children: `Kestrel Heights`,
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                          },
                                          children: `Orchard Lane`,
                                        }),
                                      }),
                                      className: `framer-3hckvk`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `JPo2VZ_Po`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                                },
                                                children: `Orchard Lane`,
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ d(b.div, {
                              className: `framer-1xh6yqw`,
                              "data-framer-name": `Hours`,
                              layoutDependency: A,
                              layoutId: `hEvxNT7uo`,
                              children: [
                                /*#__PURE__*/ f(V, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ f(o, {
                                    children: /*#__PURE__*/ f(b.p, {
                                      className: `framer-styles-preset-47y0yi`,
                                      "data-styles-preset": `WcNYxFkzx`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                      },
                                      children: `Hours`,
                                    }),
                                  }),
                                  className: `framer-1b8vzfv`,
                                  fonts: [`Inter`],
                                  layoutDependency: A,
                                  layoutId: `R2v2qDopD`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...q(
                                    {
                                      qYRUlC3wL: {
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            className: `framer-styles-preset-116c97r`,
                                            "data-styles-preset": `akW2QmX5A`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                            },
                                            children: `Hours`,
                                          }),
                                        }),
                                      },
                                    },
                                    y,
                                    T
                                  ),
                                }),
                                /*#__PURE__*/ d(b.div, {
                                  className: `framer-1xgehnt`,
                                  "data-framer-name": `List`,
                                  layoutDependency: A,
                                  layoutId: `woNZSg_Nx`,
                                  children: [
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                          },
                                          children: `Mon–Fri 07:00–18:00`,
                                        }),
                                      }),
                                      className: `framer-jwcj3u`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `SxG86vaKu`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                                },
                                                children: `Mon–Fri 07:00–18:00`,
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                          },
                                          children: `Sat 08:00–13:00`,
                                        }),
                                      }),
                                      className: `framer-1b2zhbd`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `J9n7q11AU`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                                },
                                                children: `Sat 08:00–13:00`,
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-b0x56o`,
                                          "data-styles-preset": `SYtD433BS`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                          },
                                          children: /*#__PURE__*/ f(b.span, {
                                            style: {
                                              "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                            },
                                            children: `Visits by appointment`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-1s4pjh4`,
                                      fonts: [`Inter`],
                                      layoutDependency: A,
                                      layoutId: `MVWchNr6y`,
                                      style: {
                                        "--extracted-1w3ko1f": `var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07)`,
                                        "--extracted-r6o4lv": `var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...q(
                                        {
                                          qYRUlC3wL: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-cmzjx3`,
                                                "data-styles-preset": `BhvMSfpVv`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                                },
                                                children: /*#__PURE__*/ f(b.span, {
                                                  style: {
                                                    "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                                  },
                                                  children: `Visits by appointment`,
                                                }),
                                              }),
                                            }),
                                          },
                                        },
                                        y,
                                        T
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ f(L, {
                      children: /*#__PURE__*/ f(N, {
                        className: `framer-h3b0km-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `Wordmark`,
                        isAuthoredByUser: !0,
                        layoutDependency: A,
                        layoutId: `aj9VlGH9Y-container`,
                        name: `Wordmark`,
                        nodeId: `aj9VlGH9Y`,
                        rendersWithMotion: !0,
                        scopeId: `lq3uLjdnE`,
                        children: /*#__PURE__*/ f(Oe, {
                          baseline: 220,
                          bottomGap: 14,
                          color: `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                          extendBelow: 0,
                          font: {
                            fontFamily: `"Manrope", "Manrope Placeholder", sans-serif`,
                            fontStyle: `normal`,
                            fontWeight: 800,
                            letterSpacing: `-0.07em`,
                            lineHeight: `0.8em`,
                          },
                          height: `100%`,
                          id: `aj9VlGH9Y`,
                          layoutId: `aj9VlGH9Y`,
                          lineHeight: 0.8,
                          mode: `fill`,
                          name: `Wordmark`,
                          reveal: `view`,
                          style: { width: `100%` },
                          text: `Regolith`,
                          topPadding: 26,
                          vertical: `center`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    /*#__PURE__*/ f(b.div, {
                      className: `framer-1csh6io`,
                      "data-framer-name": `Word Gap`,
                      layoutDependency: A,
                      layoutId: `uZvrETyL_`,
                    }),
                    /*#__PURE__*/ d(b.div, {
                      className: `framer-1p6nw6o`,
                      "data-border": !0,
                      "data-framer-name": `Bottom`,
                      layoutDependency: A,
                      layoutId: `FSHPce8sf`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `var(--token-55e28825-0d6b-412c-8907-93458bc9b8dd)`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                      },
                      children: [
                        /*#__PURE__*/ f(V, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ f(o, {
                            children: /*#__PURE__*/ f(b.p, {
                              className: `framer-styles-preset-asb5xi`,
                              "data-styles-preset": `ElEXFbui6`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                              },
                              children: `© 2026 Regolith Construction All rights reserved.`,
                            }),
                          }),
                          className: `framer-pf0uh6`,
                          fonts: [`Inter`],
                          layoutDependency: A,
                          layoutId: `HX96Goxgz`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                          },
                          variants: { qYRUlC3wL: { "--extracted-2gg91v": `"wght" 450` } },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...q(
                            {
                              qYRUlC3wL: {
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(b.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURRMU1BPT0=`,
                                      "--framer-font-family": `"Manrope Variable"`,
                                      "--framer-font-size": `12px`,
                                      "--framer-font-style": `normal`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                      "--framer-font-weight": `400`,
                                      "--framer-line-height": `1.6em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                    },
                                    children: `© 2026 Regolith Construction All rights reserved.`,
                                  }),
                                }),
                                fonts: [`FS;Manrope-variable`],
                              },
                              Ud0VlDtyf: {
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(b.p, {
                                    className: `framer-styles-preset-asb5xi`,
                                    "data-styles-preset": `ElEXFbui6`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                    },
                                    children: `© 2026 Regolith Construction All rights reserved.`,
                                  }),
                                }),
                              },
                            },
                            y,
                            T
                          ),
                        }),
                        /*#__PURE__*/ d(b.div, {
                          className: `framer-113zqss`,
                          "data-framer-name": `Legal`,
                          layoutDependency: A,
                          layoutId: `f7OhAIAwA`,
                          children: [
                            /*#__PURE__*/ f(V, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ f(o, {
                                children: /*#__PURE__*/ f(b.p, {
                                  className: `framer-styles-preset-asb5xi`,
                                  "data-styles-preset": `ElEXFbui6`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                  },
                                  children: /*#__PURE__*/ f(I, {
                                    href: { webPageId: `UUY6KrXpr` },
                                    motionChild: !0,
                                    nodeId: `w2No3eJ72`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `lq3uLjdnE`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ f(b.a, {
                                      className: `framer-styles-preset-1q80vqa`,
                                      "data-styles-preset": `adVSSvzDk`,
                                      children: `Privacy policy`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-cgk77y`,
                              fonts: [`Inter`],
                              layoutDependency: A,
                              layoutId: `w2No3eJ72`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                              },
                              variants: { qYRUlC3wL: { "--extracted-2gg91v": `"wght" 450` } },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...q(
                                {
                                  qYRUlC3wL: {
                                    children: /*#__PURE__*/ f(o, {
                                      children: /*#__PURE__*/ f(b.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURRMU1BPT0=`,
                                          "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                          "--framer-line-height": `1.6em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                        },
                                        children: /*#__PURE__*/ f(I, {
                                          href: { webPageId: `UUY6KrXpr` },
                                          motionChild: !0,
                                          nodeId: `w2No3eJ72`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `lq3uLjdnE`,
                                          smoothScroll: !1,
                                          children: /*#__PURE__*/ f(b.a, {
                                            className: `framer-styles-preset-1q80vqa`,
                                            "data-styles-preset": `adVSSvzDk`,
                                            children: `Privacy policy`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    fonts: [`FS;Manrope-variable`],
                                  },
                                  Ud0VlDtyf: {
                                    children: /*#__PURE__*/ f(o, {
                                      children: /*#__PURE__*/ f(b.p, {
                                        className: `framer-styles-preset-asb5xi`,
                                        "data-styles-preset": `ElEXFbui6`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                        },
                                        children: /*#__PURE__*/ f(I, {
                                          href: { webPageId: `UUY6KrXpr` },
                                          motionChild: !0,
                                          nodeId: `w2No3eJ72`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `lq3uLjdnE`,
                                          smoothScroll: !1,
                                          children: /*#__PURE__*/ f(b.a, {
                                            className: `framer-styles-preset-1q80vqa`,
                                            "data-styles-preset": `adVSSvzDk`,
                                            children: `Privacy policy`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                y,
                                T
                              ),
                            }),
                            /*#__PURE__*/ f(V, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ f(o, {
                                children: /*#__PURE__*/ f(b.p, {
                                  className: `framer-styles-preset-asb5xi`,
                                  "data-styles-preset": `ElEXFbui6`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                  },
                                  children: /*#__PURE__*/ f(I, {
                                    href: { webPageId: `vWVoeWuDc` },
                                    motionChild: !0,
                                    nodeId: `viwkibZB5`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `lq3uLjdnE`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ f(b.a, {
                                      className: `framer-styles-preset-1q80vqa`,
                                      "data-styles-preset": `adVSSvzDk`,
                                      children: `Terms`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-15p3v4s`,
                              fonts: [`Inter`],
                              layoutDependency: A,
                              layoutId: `viwkibZB5`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                              },
                              variants: { qYRUlC3wL: { "--extracted-2gg91v": `"wght" 450` } },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...q(
                                {
                                  qYRUlC3wL: {
                                    children: /*#__PURE__*/ f(o, {
                                      children: /*#__PURE__*/ f(b.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURRMU1BPT0=`,
                                          "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                          "--framer-line-height": `1.6em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                        },
                                        children: /*#__PURE__*/ f(I, {
                                          href: { webPageId: `vWVoeWuDc` },
                                          motionChild: !0,
                                          nodeId: `viwkibZB5`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `lq3uLjdnE`,
                                          smoothScroll: !1,
                                          children: /*#__PURE__*/ f(b.a, {
                                            className: `framer-styles-preset-1q80vqa`,
                                            "data-styles-preset": `adVSSvzDk`,
                                            children: `Terms`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    fonts: [`FS;Manrope-variable`],
                                  },
                                  Ud0VlDtyf: {
                                    children: /*#__PURE__*/ f(o, {
                                      children: /*#__PURE__*/ f(b.p, {
                                        className: `framer-styles-preset-asb5xi`,
                                        "data-styles-preset": `ElEXFbui6`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                        },
                                        children: /*#__PURE__*/ f(I, {
                                          href: { webPageId: `vWVoeWuDc` },
                                          motionChild: !0,
                                          nodeId: `viwkibZB5`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `lq3uLjdnE`,
                                          smoothScroll: !1,
                                          children: /*#__PURE__*/ f(b.a, {
                                            className: `framer-styles-preset-1q80vqa`,
                                            "data-styles-preset": `adVSSvzDk`,
                                            children: `Terms`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                y,
                                T
                              ),
                            }),
                            /*#__PURE__*/ f(V, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ f(o, {
                                children: /*#__PURE__*/ f(b.p, {
                                  className: `framer-styles-preset-asb5xi`,
                                  "data-styles-preset": `ElEXFbui6`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                  },
                                  children: /*#__PURE__*/ f(I, {
                                    href: { webPageId: `MzTQNt8iJ` },
                                    motionChild: !0,
                                    nodeId: `mpSOxBCtG`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `lq3uLjdnE`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ f(b.a, {
                                      className: `framer-styles-preset-1q80vqa`,
                                      "data-styles-preset": `adVSSvzDk`,
                                      children: `Accessibility`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-19bh4bl`,
                              fonts: [`Inter`],
                              layoutDependency: A,
                              layoutId: `mpSOxBCtG`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                              },
                              variants: { qYRUlC3wL: { "--extracted-2gg91v": `"wght" 450` } },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...q(
                                {
                                  qYRUlC3wL: {
                                    children: /*#__PURE__*/ f(o, {
                                      children: /*#__PURE__*/ f(b.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURRMU1BPT0=`,
                                          "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                          "--framer-line-height": `1.6em`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                        },
                                        children: /*#__PURE__*/ f(I, {
                                          href: { webPageId: `MzTQNt8iJ` },
                                          motionChild: !0,
                                          nodeId: `mpSOxBCtG`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `lq3uLjdnE`,
                                          smoothScroll: !1,
                                          children: /*#__PURE__*/ f(b.a, {
                                            className: `framer-styles-preset-1q80vqa`,
                                            "data-styles-preset": `adVSSvzDk`,
                                            children: `Accessibility`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    fonts: [`FS;Manrope-variable`],
                                  },
                                  Ud0VlDtyf: {
                                    children: /*#__PURE__*/ f(o, {
                                      children: /*#__PURE__*/ f(b.p, {
                                        className: `framer-styles-preset-asb5xi`,
                                        "data-styles-preset": `ElEXFbui6`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                        },
                                        children: /*#__PURE__*/ f(I, {
                                          href: { webPageId: `MzTQNt8iJ` },
                                          motionChild: !0,
                                          nodeId: `mpSOxBCtG`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `lq3uLjdnE`,
                                          smoothScroll: !1,
                                          children: /*#__PURE__*/ f(b.a, {
                                            className: `framer-styles-preset-1q80vqa`,
                                            "data-styles-preset": `adVSSvzDk`,
                                            children: `Accessibility`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                y,
                                T
                              ),
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
      (Ht = [
        `.framer-66niz.framer-14rpmsq, .framer-66niz .framer-14rpmsq { display: block; }`,
        `.framer-66niz.framer-1qzh8vh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 96px 0px 0px 0px; position: relative; width: 1200px; }`,
        `.framer-66niz .framer-1j30l8t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1356.8px; padding: 0px 38.4px 0px 38.4px; position: relative; width: 100%; }`,
        `.framer-66niz .framer-1jwz1gr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 0px 0px 56px 0px; position: relative; width: 100%; }`,
        `.framer-66niz .framer-14v1qs8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-66niz .framer-15ax4h1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-66niz .framer-upitwy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 3px 0px 0px; position: relative; width: min-content; }`,
        `.framer-66niz .framer-1e6krno { flex: none; height: 28px; position: relative; width: 28px; }`,
        `.framer-66niz .framer-hxyk9j, .framer-66niz .framer-1irvopp, .framer-66niz .framer-145y5rs, .framer-66niz .framer-ytzb89, .framer-66niz .framer-ptqmzm, .framer-66niz .framer-1cpsx4i, .framer-66niz .framer-1mtze9y, .framer-66niz .framer-peqzwv, .framer-66niz .framer-14kkrd0, .framer-66niz .framer-1ve1hnu, .framer-66niz .framer-1dseoyw, .framer-66niz .framer-1rcjd82, .framer-66niz .framer-1trdji8, .framer-66niz .framer-uljwjo, .framer-66niz .framer-mg92li, .framer-66niz .framer-j9h0th, .framer-66niz .framer-3hckvk, .framer-66niz .framer-jwcj3u, .framer-66niz .framer-1b2zhbd, .framer-66niz .framer-1s4pjh4, .framer-66niz .framer-pf0uh6, .framer-66niz .framer-cgk77y, .framer-66niz .framer-15p3v4s, .framer-66niz .framer-19bh4bl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-66niz .framer-1wr37ew { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 4.6px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-66niz .framer-5778ya { flex: none; height: auto; max-width: 340px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-66niz .framer-1xzphf5-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-66niz .framer-11hi9ce { display: grid; flex: 2 0 0px; gap: 24px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
        `.framer-66niz .framer-1qct46m, .framer-66niz .framer-zep20w, .framer-66niz .framer-8jwpld, .framer-66niz .framer-1xh6yqw { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-66niz .framer-8fotr5, .framer-66niz .framer-liw2fi, .framer-66niz .framer-p0svkd, .framer-66niz .framer-1b8vzfv { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-66niz .framer-1o4e3df, .framer-66niz .framer-1ezke5o, .framer-66niz .framer-yb44y1, .framer-66niz .framer-1xgehnt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-66niz .framer-h3b0km-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-66niz .framer-1csh6io { flex: none; height: 31px; position: relative; width: 100%; }`,
        `.framer-66niz .framer-1p6nw6o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; padding: 23px 0px 76px 0px; position: relative; width: 100%; }`,
        `.framer-66niz .framer-113zqss { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-66niz.framer-v-ngeas4.framer-1qzh8vh { padding: 64.8px 0px 0px 0px; width: 810px; }`,
        `.framer-66niz.framer-v-ngeas4 .framer-1j30l8t { padding: 0px 25.92px 0px 25.92px; }`,
        `.framer-66niz.framer-v-ngeas4 .framer-1jwz1gr { flex-direction: column; }`,
        `.framer-66niz.framer-v-ngeas4 .framer-14v1qs8, .framer-66niz.framer-v-ngeas4 .framer-11hi9ce { flex: none; width: 100%; }`,
        `.framer-66niz.framer-v-ngeas4 .framer-1csh6io { height: 21px; }`,
        `.framer-66niz.framer-v-17hoktu.framer-1qzh8vh { padding: 44px 0px 0px 0px; width: 390px; }`,
        `.framer-66niz.framer-v-17hoktu .framer-1j30l8t { padding: 0px 16px 0px 16px; }`,
        `.framer-66niz.framer-v-17hoktu .framer-1jwz1gr { flex-direction: column; gap: 28px; padding: 0px 0px 32px 0px; }`,
        `.framer-66niz.framer-v-17hoktu .framer-14v1qs8 { flex: none; gap: 12px; width: 100%; }`,
        `.framer-66niz.framer-v-17hoktu .framer-11hi9ce { flex: none; gap: 24px 16px; grid-template-columns: repeat(2, minmax(50px, 1fr)); width: 100%; }`,
        `.framer-66niz.framer-v-17hoktu .framer-1qct46m, .framer-66niz.framer-v-17hoktu .framer-zep20w, .framer-66niz.framer-v-17hoktu .framer-8jwpld, .framer-66niz.framer-v-17hoktu .framer-1xh6yqw { gap: 10px; }`,
        `.framer-66niz.framer-v-17hoktu .framer-1o4e3df, .framer-66niz.framer-v-17hoktu .framer-1ezke5o, .framer-66niz.framer-v-17hoktu .framer-yb44y1, .framer-66niz.framer-v-17hoktu .framer-1xgehnt { gap: 6px; }`,
        `.framer-66niz.framer-v-17hoktu .framer-1csh6io { height: 14px; }`,
        `.framer-66niz.framer-v-17hoktu .framer-1p6nw6o { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 8px; justify-content: flex-start; padding: 15px 0px 64px 0px; }`,
        `.framer-66niz.framer-v-17hoktu .framer-113zqss { flex-wrap: wrap; gap: 12px 20px; width: 100%; }`,
        ...et,
        ...We,
        ...at,
        ...ze,
        ...lt,
        ...Ye,
        ...Pe,
        `.framer-66niz[data-border="true"]::after, .framer-66niz [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (J = j(Vt, Ht, `framer-66niz`)),
      (J.displayName = `Site Footer`),
      (J.defaultProps = { height: 819, width: 1200 }),
      A(J, {
        variant: {
          options: [`cbh2LoKnv`, `Ud0VlDtyf`, `qYRUlC3wL`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      T(
        J,
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
                cssFamilyName: `Manrope`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Manrope`,
                url: `https://fonts.gstatic.com/s/manrope/v23/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk59E-_A87jxeN7B.woff2`,
                weight: `800`,
              },
            ],
          },
          ...Dt,
          ...At,
          ...U($e),
          ...U(Ue),
          ...U(it),
          ...U(Re),
          ...U(ct),
          ...U(Je),
          ...U(Ne),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (J.loader = {
        load: (e, t) =>
          B(
            [
              () => O(K, {}, t),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`ofJC7h_jM`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`jkBHcuwuq`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`m7vmN2vm5`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`s3aYe7sdM`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`N4_4utRrp`, t.locale),
            ],
            t
          ),
      }));
  }))();
}
var Wt, Gt, Kt, qt, Jt, Yt, Y;
function Xt() {
  return (Xt = t(() => {
    (m(),
      D(),
      h(),
      (Wt = `var(--framer-icon-mask)`),
      (Gt = /*#__PURE__*/ p(function (e, t) {
        return /*#__PURE__*/ f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Kt = b.create(Gt)),
      (qt = /*#__PURE__*/ p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ f(Kt, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ f(`svg`, { ...a, ref: t, children: i });
      })),
      (Jt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 14 0" fill="transparent" height="1px" id="h3fQSrHEV" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(5 12)" width="14px"/><path d="M 0 0 L 7 7 L 0 14" fill="transparent" height="14px" id="DAe82Eor1" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 5)" width="7px"/></svg>`),
      (Yt = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (Y = j(
        /* @__PURE__ */ p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Yt(e),
            l = P(`1175957644`, Jt);
          return /*#__PURE__*/ f(qt, {
            ...c,
            className: x(`framer-SYorz`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ f(`use`, { href: l }),
          });
        }),
        [
          `.framer-SYorz { -webkit-mask: ${Wt}; aspect-ratio: 1; display: block; mask: ${Wt}; width: 24px; }`,
        ],
        `framer-SYorz`
      )),
      (Y.displayName = `Arrow Right`),
      A(Y, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  }))();
}
var Zt, Qt, $t, en, tn, nn, rn;
function an() {
  return (an = t(() => {
    (m(),
      D(),
      h(),
      (Zt = `var(--framer-icon-mask)`),
      (Qt = /*#__PURE__*/ p(function (e, t) {
        return /*#__PURE__*/ f(`svg`, { ...e, ref: t, children: e.children });
      })),
      ($t = b.create(Qt)),
      (en = /*#__PURE__*/ p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ f($t, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ f(`svg`, { ...a, ref: t, children: i });
      })),
      (tn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 11.832 14.568 C 12.257 14.763 12.761 14.637 13.045 14.265 L 13.4 13.8 C 13.778 13.296 14.37 13 15 13 L 18 13 C 19.105 13 20 13.895 20 15 L 20 18 C 20 19.105 19.105 20 18 20 C 8.059 20 0 11.941 0 2 C 0 0.895 0.895 0 2 0 L 5 0 C 6.105 0 7 0.895 7 2 L 7 5 C 7 5.63 6.704 6.222 6.2 6.6 L 5.732 6.951 C 5.353 7.24 5.231 7.756 5.44 8.184 C 6.807 10.96 9.054 13.205 11.832 14.568" fill="transparent" height="20px" id="QeBbBscVf" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" width="20px"/></svg>`),
      (nn = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (rn = j(
        /* @__PURE__ */ p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = nn(e),
            l = P(`3459148117`, tn);
          return /*#__PURE__*/ f(en, {
            ...c,
            className: x(`framer-ae6BA`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ f(`use`, { href: l }),
          });
        }),
        [
          `.framer-ae6BA { -webkit-mask: ${Zt}; aspect-ratio: 1; display: block; mask: ${Zt}; width: 24px; }`,
        ],
        `framer-ae6BA`
      )),
      (rn.displayName = `Phone`),
      A(rn, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  }))();
}
var on, sn, cn, ln, un, dn, fn;
function pn() {
  return (pn = t(() => {
    (m(),
      D(),
      h(),
      (on = `var(--framer-icon-mask)`),
      (sn = /*#__PURE__*/ p(function (e, t) {
        return /*#__PURE__*/ f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (cn = b.create(sn)),
      (ln = /*#__PURE__*/ p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ f(cn, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ f(`svg`, { ...a, ref: t, children: i });
      })),
      (un = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 6 6 L 12 0" fill="transparent" height="6px" id="HLE2KBXxw" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(6 9)" width="12px"/></svg>`),
      (dn = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (fn = j(
        /* @__PURE__ */ p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = dn(e),
            l = P(`4024583230`, un);
          return /*#__PURE__*/ f(ln, {
            ...c,
            className: x(`framer-rjFuH`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ f(`use`, { href: l }),
          });
        }),
        [
          `.framer-rjFuH { -webkit-mask: ${on}; aspect-ratio: 1; display: block; mask: ${on}; width: 24px; }`,
        ],
        `framer-rjFuH`
      )),
      (fn.displayName = `Chevron Down`),
      A(fn, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  }))();
}
var mn, hn, gn, _n;
function vn() {
  return (vn = t(() => {
    (D(),
      R.loadFonts([`FS;Manrope-variable`]),
      (mn = [{ defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` }]),
      (hn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
              variationAxes: mn,
              weight: `400`,
            },
          ],
        },
      ]),
      (gn = [
        `.framer-LuCOQ .framer-styles-preset-283lhz:not(.rich-text-wrapper), .framer-LuCOQ .framer-styles-preset-283lhz.rich-text-wrapper p { --framer-font-family: "Manrope Variable", "Manrope Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 600; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (_n = `framer-LuCOQ`));
  }))();
}
var yn, bn, xn, Sn;
function Cn() {
  return (Cn = t(() => {
    (D(),
      R.loadFonts([`FS;Manrope-variable`]),
      (yn = [{ defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` }]),
      (bn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
              variationAxes: yn,
              weight: `400`,
            },
          ],
        },
      ]),
      (xn = [
        `.framer-dF7zT .framer-styles-preset-1o6gk2k:not(.rich-text-wrapper), .framer-dF7zT .framer-styles-preset-1o6gk2k.rich-text-wrapper p { --framer-font-family: "Manrope Variable", "Manrope Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 600; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Sn = `framer-dF7zT`));
  }))();
}
var wn, Tn, En;
function Dn() {
  return (Dn = t(() => {
    (D(),
      R.loadFonts([]),
      (wn = [{ explicitInter: !0, fonts: [] }]),
      (Tn = [
        `.framer-OUzVU .framer-styles-preset-86p87r:not(.rich-text-wrapper), .framer-OUzVU .framer-styles-preset-86p87r.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9); --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9); --framer-link-text-decoration: none; }`,
      ]),
      (En = `framer-OUzVU`));
  }))();
}
var On, kn, An, jn;
function Mn() {
  return (Mn = t(() => {
    (D(),
      R.loadFonts([`FS;Manrope-variable`]),
      (On = [{ defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` }]),
      (kn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
              variationAxes: On,
              weight: `400`,
            },
          ],
        },
      ]),
      (An = [
        `.framer-OvuRz .framer-styles-preset-1htg8hk:not(.rich-text-wrapper), .framer-OvuRz .framer-styles-preset-1htg8hk.rich-text-wrapper p { --framer-font-family: "Manrope Variable", "Manrope Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 500; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (jn = `framer-OvuRz`));
  }))();
}
var Nn, Pn, Fn, In;
function Ln() {
  return (Ln = t(() => {
    (D(),
      R.loadFonts([`FS;Manrope-variable`]),
      (Nn = [{ defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` }]),
      (Pn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
              variationAxes: Nn,
              weight: `400`,
            },
          ],
        },
      ]),
      (Fn = [
        `.framer-fWtq8 .framer-styles-preset-11icc16:not(.rich-text-wrapper), .framer-fWtq8 .framer-styles-preset-11icc16.rich-text-wrapper p { --framer-font-family: "Manrope Variable", "Manrope Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 500; --framer-font-weight: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (In = `framer-fWtq8`));
  }))();
}
var Rn, zn, Bn, Vn;
function Hn() {
  return (Hn = t(() => {
    (D(),
      R.loadFonts([`FS;Manrope-variable`]),
      (Rn = [{ defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` }]),
      (zn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
              variationAxes: Rn,
              weight: `400`,
            },
          ],
        },
      ]),
      (Bn = [
        `.framer-rkrhw .framer-styles-preset-qfn9x3:not(.rich-text-wrapper), .framer-rkrhw .framer-styles-preset-qfn9x3.rich-text-wrapper p { --framer-font-family: "Manrope Variable", "Manrope Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 500; --framer-font-weight: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Vn = `framer-rkrhw`));
  }))();
}
var Un, Wn, Gn, Kn;
function qn() {
  return (qn = t(() => {
    (D(),
      R.loadFonts([`FS;Manrope-variable`]),
      (Un = [{ defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` }]),
      (Wn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
              variationAxes: Un,
              weight: `400`,
            },
          ],
        },
      ]),
      (Gn = [
        `.framer-UNSMs .framer-styles-preset-1shce9c:not(.rich-text-wrapper), .framer-UNSMs .framer-styles-preset-1shce9c.rich-text-wrapper p { --framer-font-family: "Manrope Variable", "Manrope Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 450; --framer-font-weight: 400; --framer-letter-spacing: -0.0205em; --framer-line-height: 1.5333em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Kn = `framer-UNSMs`));
  }))();
}
var Jn, Yn, Xn;
function Zn() {
  return (Zn = t(() => {
    (D(),
      R.loadFonts([]),
      (Jn = [{ explicitInter: !0, fonts: [] }]),
      (Yn = [
        `.framer-MkHbu .framer-styles-preset-1ip5ovy:not(.rich-text-wrapper), .framer-MkHbu .framer-styles-preset-1ip5ovy.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d); --framer-link-hover-text-decoration: none; --framer-link-text-color: #ffffff; --framer-link-text-decoration: none; transition-delay: 0s; transition-duration: 0.2s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      (Xn = `framer-MkHbu`));
  }))();
}
var Qn, $n, er, tr;
function nr() {
  return (nr = t(() => {
    (D(),
      R.loadFonts([`FS;Manrope-variable`]),
      (Qn = [{ defaultValue: 200, maxValue: 800, minValue: 200, name: `Weight`, tag: `wght` }]),
      ($n = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/DEPNXL2T77QGX4DXZAN3G53TXHO2JEFP.woff2`,
              variationAxes: Qn,
              weight: `400`,
            },
          ],
        },
      ]),
      (er = [
        `.framer-4vhMI .framer-styles-preset-gpz1b:not(.rich-text-wrapper), .framer-4vhMI .framer-styles-preset-gpz1b.rich-text-wrapper p { --framer-font-family: "Manrope Variable", "Manrope Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 600; --framer-font-weight: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (tr = `framer-4vhMI`));
  }))();
}
function rr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, X;
function vr() {
  return (vr = t(() => {
    (m(),
      D(),
      y(),
      h(),
      Xt(),
      an(),
      nr(),
      (ir = M(rn)),
      (ar = M(Y)),
      (or = {
        FU9NK2rv7: { hover: !0 },
        Im3Rj55tG: { hover: !0 },
        kZP06hvkc: { hover: !0 },
        nUa3AxbZM: { hover: !0 },
        s1_R5EQq1: { hover: !0 },
        TrExUJEoj: { hover: !0 },
        Ybhie7Rq2: { hover: !0 },
        yIUj2lyo3: { hover: !0 },
        YPxHtS2ti: { hover: !0 },
      }),
      (sr = [
        `FU9NK2rv7`,
        `TrExUJEoj`,
        `s1_R5EQq1`,
        `Ybhie7Rq2`,
        `YPxHtS2ti`,
        `kZP06hvkc`,
        `nUa3AxbZM`,
        `yIUj2lyo3`,
        `Im3Rj55tG`,
      ]),
      (cr = `framer-2CAjM`),
      (lr = {
        FU9NK2rv7: `framer-v-1bq7thd`,
        Im3Rj55tG: `framer-v-1anoblh`,
        kZP06hvkc: `framer-v-1uz67ef`,
        nUa3AxbZM: `framer-v-nh8qij`,
        s1_R5EQq1: `framer-v-1qem9xm`,
        TrExUJEoj: `framer-v-1uia3ay`,
        Ybhie7Rq2: `framer-v-za4c3j`,
        yIUj2lyo3: `framer-v-1h7u4j1`,
        YPxHtS2ti: `framer-v-1x5di9v`,
      }),
      (ur = { delay: 0, duration: 0.5, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (dr = ({ value: e, children: t }) => {
        let r = n(v),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ f(v.Provider, { value: a, children: t });
      }),
      (fr = {
        "Glass Large": `yIUj2lyo3`,
        "Hi Dark Large": `YPxHtS2ti`,
        "Hi Dark": `Ybhie7Rq2`,
        "Hi Large": `s1_R5EQq1`,
        "Hi Small": `TrExUJEoj`,
        "Line Dark": `Im3Rj55tG`,
        Hi: `FU9NK2rv7`,
        Ink: `kZP06hvkc`,
        Line: `nUa3AxbZM`,
      }),
      (pr = b.create(o)),
      (mr = ({
        height: e,
        id: t,
        label: n,
        link: r,
        showArrow: i,
        showPhone: a,
        width: o,
        ...s
      }) => ({
        ...s,
        A7Od1mPPH: a ?? s.A7Od1mPPH ?? !1,
        KLKq8yi1U: r ?? s.KLKq8yi1U,
        l9aoY6pHx: n ?? s.l9aoY6pHx ?? `Book a free inspection`,
        SbaAZw1tX: i ?? s.SbaAZw1tX ?? !0,
        variant: fr[s.variant] ?? s.variant ?? `FU9NK2rv7`,
      })),
      (hr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (gr = /*#__PURE__*/ p(function (e, t) {
        let n = l(null),
          i = t ?? n,
          a = r(),
          { activeLocale: s, contentLocale: c, setLocale: u } = ue();
        le();
        let {
            style: p,
            className: m,
            layoutId: h,
            variant: g,
            l9aoY6pHx: v,
            KLKq8yi1U: y,
            SbaAZw1tX: S,
            A7Od1mPPH: C,
            ...w
          } = mr(e),
          {
            baseVariant: T,
            classNames: D,
            clearLoadingGesture: ee,
            gestureHandlers: O,
            gestureVariant: k,
            isLoading: A,
            setGestureState: j,
            setVariant: M,
            variants: N,
          } = E({
            cycleOrder: sr,
            defaultVariant: `FU9NK2rv7`,
            enabledGestures: or,
            ref: i,
            variant: g,
            variantClassNames: lr,
          }),
          P = hr(e, N),
          te = x(cr, tr);
        return /*#__PURE__*/ f(_, {
          id: h ?? a,
          children: /*#__PURE__*/ f(pr, {
            animate: N,
            initial: !1,
            children: /*#__PURE__*/ f(dr, {
              value: ur,
              children: /*#__PURE__*/ f(I, {
                href: y,
                motionChild: !0,
                nodeId: `FU9NK2rv7`,
                scopeId: `h5T5TEOQB`,
                children: /*#__PURE__*/ d(b.a, {
                  ...w,
                  ...O,
                  className: `${x(te, `framer-1bq7thd`, m, D)} framer-1p1z08i`,
                  "data-framer-name": `Hi`,
                  layoutDependency: P,
                  layoutId: `FU9NK2rv7`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backdropFilter: `none`,
                    backgroundColor: `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    WebkitBackdropFilter: `none`,
                    ...p,
                  },
                  variants: {
                    "FU9NK2rv7-hover": {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                      WebkitBackdropFilter: `none`,
                    },
                    "Im3Rj55tG-hover": {
                      "--border-color": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                      backgroundColor: `var(--token-571d0275-548e-46dc-a0e1-ca98ff460da3)`,
                    },
                    "kZP06hvkc-hover": {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                      WebkitBackdropFilter: `none`,
                    },
                    "nUa3AxbZM-hover": {
                      "--border-color": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                      WebkitBackdropFilter: `none`,
                    },
                    "s1_R5EQq1-hover": {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                      WebkitBackdropFilter: `none`,
                    },
                    "TrExUJEoj-hover": {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                      WebkitBackdropFilter: `none`,
                    },
                    "Ybhie7Rq2-hover": {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-571d0275-548e-46dc-a0e1-ca98ff460da3)`,
                      WebkitBackdropFilter: `none`,
                    },
                    "yIUj2lyo3-hover": {
                      "--border-color": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                      backgroundColor: `var(--token-571d0275-548e-46dc-a0e1-ca98ff460da3)`,
                    },
                    "YPxHtS2ti-hover": {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-571d0275-548e-46dc-a0e1-ca98ff460da3)`,
                      WebkitBackdropFilter: `none`,
                    },
                    Im3Rj55tG: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-55e28825-0d6b-412c-8907-93458bc9b8dd)`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backdropFilter: `none`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      WebkitBackdropFilter: `none`,
                    },
                    kZP06hvkc: {
                      backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                    },
                    nUa3AxbZM: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                    },
                    yIUj2lyo3: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-7f2d695a-e2e5-4021-a722-5590d7c356ec)`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backdropFilter: `blur(10px)`,
                      backgroundColor: `rgba(255, 255, 255, 0.1)`,
                      WebkitBackdropFilter: `blur(10px)`,
                    },
                  },
                  ...rr(
                    {
                      "FU9NK2rv7-hover": { "data-framer-name": void 0 },
                      "Im3Rj55tG-hover": { "data-framer-name": void 0 },
                      "kZP06hvkc-hover": { "data-framer-name": void 0 },
                      "nUa3AxbZM-hover": { "data-framer-name": void 0 },
                      "s1_R5EQq1-hover": { "data-framer-name": void 0 },
                      "TrExUJEoj-hover": { "data-framer-name": void 0 },
                      "Ybhie7Rq2-hover": { "data-framer-name": void 0 },
                      "yIUj2lyo3-hover": { "data-framer-name": void 0 },
                      "YPxHtS2ti-hover": { "data-framer-name": void 0 },
                      Im3Rj55tG: { "data-border": !0, "data-framer-name": `Line Dark` },
                      kZP06hvkc: { "data-framer-name": `Ink` },
                      nUa3AxbZM: { "data-border": !0, "data-framer-name": `Line` },
                      s1_R5EQq1: { "data-framer-name": `Hi Large` },
                      TrExUJEoj: { "data-framer-name": `Hi Small` },
                      Ybhie7Rq2: { "data-framer-name": `Hi Dark` },
                      yIUj2lyo3: { "data-border": !0, "data-framer-name": `Glass Large` },
                      YPxHtS2ti: { "data-framer-name": `Hi Dark Large` },
                    },
                    T,
                    k
                  ),
                  children: [
                    C !== !1 &&
                      /*#__PURE__*/ f(rn, {
                        animated: !0,
                        className: `framer-2iinvm`,
                        layoutDependency: P,
                        layoutId: `TcgCeurXW`,
                        style: {
                          "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                          "--js9iwy": 1.6,
                        },
                        variants: {
                          "FU9NK2rv7-hover": {
                            "--1m973uw": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                          },
                          "Im3Rj55tG-hover": {
                            "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                          },
                          "kZP06hvkc-hover": {
                            "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                          },
                          "nUa3AxbZM-hover": {
                            "--1m973uw": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                          },
                          "s1_R5EQq1-hover": {
                            "--1m973uw": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                          },
                          "TrExUJEoj-hover": {
                            "--1m973uw": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                          },
                          "yIUj2lyo3-hover": {
                            "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                          },
                          Im3Rj55tG: {
                            "--1m973uw": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                          },
                          kZP06hvkc: {
                            "--1m973uw": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                          },
                          yIUj2lyo3: {
                            "--1m973uw": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                          },
                        },
                      }),
                    /*#__PURE__*/ f(V, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ f(o, {
                        children: /*#__PURE__*/ f(b.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                            "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                            "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                            "--framer-letter-spacing": `-0.0249em`,
                            "--framer-line-height": `1.1625em`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                          },
                          children: `Book a free inspection`,
                        }),
                      }),
                      className: `framer-uipjpa`,
                      "data-framer-name": `Label`,
                      fonts: [`FS;Manrope-variable`],
                      layoutDependency: P,
                      layoutId: `Yt1GoHYbi`,
                      style: {
                        "--extracted-2gg91v": `"wght" 600`,
                        "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                      },
                      text: v,
                      variants: {
                        "FU9NK2rv7-hover": {
                          "--extracted-r6o4lv": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                        },
                        "Im3Rj55tG-hover": {
                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                        },
                        "kZP06hvkc-hover": {
                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                        },
                        "nUa3AxbZM-hover": {
                          "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                        },
                        "s1_R5EQq1-hover": {
                          "--extracted-r6o4lv": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                        },
                        "TrExUJEoj-hover": {
                          "--extracted-r6o4lv": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                        },
                        "yIUj2lyo3-hover": {
                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                        },
                        Im3Rj55tG: {
                          "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                        },
                        kZP06hvkc: {
                          "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                        },
                        yIUj2lyo3: {
                          "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...rr(
                        {
                          "FU9NK2rv7-hover": {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                                  "--framer-letter-spacing": `-0.0249em`,
                                  "--framer-line-height": `1.1625em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                          },
                          "Im3Rj55tG-hover": {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                                  "--framer-letter-spacing": `-0.0249em`,
                                  "--framer-line-height": `1.1625em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                          },
                          "kZP06hvkc-hover": {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                                  "--framer-letter-spacing": `-0.0249em`,
                                  "--framer-line-height": `1.1625em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                          },
                          "nUa3AxbZM-hover": {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                                  "--framer-letter-spacing": `-0.0249em`,
                                  "--framer-line-height": `1.1625em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                          },
                          "s1_R5EQq1-hover": {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                className: `framer-styles-preset-gpz1b`,
                                "data-styles-preset": `V5yNGnWxg`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                          },
                          "TrExUJEoj-hover": {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                                  "--framer-letter-spacing": `-0.01em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                          },
                          "yIUj2lyo3-hover": {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                className: `framer-styles-preset-gpz1b`,
                                "data-styles-preset": `V5yNGnWxg`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                          },
                          "YPxHtS2ti-hover": {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                className: `framer-styles-preset-gpz1b`,
                                "data-styles-preset": `V5yNGnWxg`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                          },
                          Im3Rj55tG: {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                                  "--framer-letter-spacing": `-0.0249em`,
                                  "--framer-line-height": `1.1625em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                          },
                          kZP06hvkc: {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                                  "--framer-letter-spacing": `-0.0249em`,
                                  "--framer-line-height": `1.1625em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                          },
                          s1_R5EQq1: {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                className: `framer-styles-preset-gpz1b`,
                                "data-styles-preset": `V5yNGnWxg`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                            fonts: [`Inter`],
                          },
                          TrExUJEoj: {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 600)`,
                                  "--framer-letter-spacing": `-0.01em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                          },
                          yIUj2lyo3: {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                className: `framer-styles-preset-gpz1b`,
                                "data-styles-preset": `V5yNGnWxg`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                            fonts: [`Inter`],
                          },
                          YPxHtS2ti: {
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ f(b.p, {
                                className: `framer-styles-preset-gpz1b`,
                                "data-styles-preset": `V5yNGnWxg`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                },
                                children: `Book a free inspection`,
                              }),
                            }),
                            fonts: [`Inter`],
                          },
                        },
                        T,
                        k
                      ),
                    }),
                    S !== !1 &&
                      /*#__PURE__*/ d(b.div, {
                        className: `framer-1yqwo6v`,
                        "data-framer-name": `Arrow`,
                        layoutDependency: P,
                        layoutId: `Dlj4F6pfn`,
                        children: [
                          /*#__PURE__*/ f(Y, {
                            animated: !0,
                            className: `framer-xal72i`,
                            "data-framer-name": `Arrow A`,
                            layoutDependency: P,
                            layoutId: `lJc8Jr09D`,
                            style: {
                              "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                              "--js9iwy": 2,
                              opacity: 1,
                            },
                            variants: {
                              "FU9NK2rv7-hover": {
                                "--1m973uw": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                                opacity: 0,
                              },
                              "Im3Rj55tG-hover": {
                                "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                opacity: 0,
                              },
                              "kZP06hvkc-hover": {
                                "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                opacity: 0,
                              },
                              "nUa3AxbZM-hover": {
                                "--1m973uw": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                opacity: 0,
                              },
                              "s1_R5EQq1-hover": {
                                "--1m973uw": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                                opacity: 0,
                              },
                              "TrExUJEoj-hover": {
                                "--1m973uw": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                                opacity: 0,
                              },
                              "Ybhie7Rq2-hover": { opacity: 0 },
                              "yIUj2lyo3-hover": {
                                "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                opacity: 0,
                              },
                              "YPxHtS2ti-hover": { opacity: 0 },
                              Im3Rj55tG: {
                                "--1m973uw": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                              },
                              kZP06hvkc: {
                                "--1m973uw": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                              },
                              yIUj2lyo3: {
                                "--1m973uw": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                              },
                            },
                          }),
                          /*#__PURE__*/ f(Y, {
                            animated: !0,
                            className: `framer-kyrujh`,
                            "data-framer-name": `Arrow B`,
                            layoutDependency: P,
                            layoutId: `BreWABVMc`,
                            style: {
                              "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                              "--js9iwy": 2,
                              opacity: 0,
                            },
                            variants: {
                              "FU9NK2rv7-hover": {
                                "--1m973uw": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                                opacity: 1,
                              },
                              "Im3Rj55tG-hover": {
                                "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                opacity: 1,
                              },
                              "kZP06hvkc-hover": {
                                "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                opacity: 1,
                              },
                              "nUa3AxbZM-hover": {
                                "--1m973uw": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                opacity: 1,
                              },
                              "s1_R5EQq1-hover": {
                                "--1m973uw": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                                opacity: 1,
                              },
                              "TrExUJEoj-hover": {
                                "--1m973uw": `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                                opacity: 1,
                              },
                              "Ybhie7Rq2-hover": { opacity: 1 },
                              "yIUj2lyo3-hover": {
                                "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                opacity: 1,
                              },
                              "YPxHtS2ti-hover": { opacity: 1 },
                              Im3Rj55tG: {
                                "--1m973uw": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                              },
                              kZP06hvkc: {
                                "--1m973uw": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                              },
                              yIUj2lyo3: {
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
      })),
      (_r = [
        `.framer-2CAjM.framer-1p1z08i, .framer-2CAjM .framer-1p1z08i { display: block; }`,
        `.framer-2CAjM.framer-1bq7thd { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: 50px; justify-content: center; overflow: hidden; padding: 0px 21px 0px 23px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-2CAjM .framer-2iinvm { flex: none; height: auto; position: relative; width: 18px; }`,
        `.framer-2CAjM .framer-uipjpa { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
        `.framer-2CAjM .framer-1yqwo6v { flex: none; height: 18px; position: relative; width: 18px; }`,
        `.framer-2CAjM .framer-xal72i { flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: 18px; }`,
        `.framer-2CAjM .framer-kyrujh { flex: none; height: auto; left: -12px; position: absolute; top: 0px; width: 18px; }`,
        `.framer-2CAjM.framer-v-1uia3ay.framer-1bq7thd { height: 44px; padding: 0px 17px 0px 19px; }`,
        `.framer-2CAjM.framer-v-1qem9xm.framer-1bq7thd, .framer-2CAjM.framer-v-1x5di9v.framer-1bq7thd, .framer-2CAjM.framer-v-1h7u4j1.framer-1bq7thd { height: 56px; padding: 0px 23px 0px 27px; }`,
        `.framer-2CAjM.framer-v-1bq7thd.hover .framer-xal72i, .framer-2CAjM.framer-v-1uia3ay.hover .framer-xal72i, .framer-2CAjM.framer-v-1qem9xm.hover .framer-xal72i, .framer-2CAjM.framer-v-za4c3j.hover .framer-xal72i, .framer-2CAjM.framer-v-1x5di9v.hover .framer-xal72i, .framer-2CAjM.framer-v-1uz67ef.hover .framer-xal72i, .framer-2CAjM.framer-v-nh8qij.hover .framer-xal72i, .framer-2CAjM.framer-v-1h7u4j1.hover .framer-xal72i, .framer-2CAjM.framer-v-1anoblh.hover .framer-xal72i { left: 14px; }`,
        `.framer-2CAjM.framer-v-1bq7thd.hover .framer-kyrujh, .framer-2CAjM.framer-v-1uia3ay.hover .framer-kyrujh, .framer-2CAjM.framer-v-1qem9xm.hover .framer-kyrujh, .framer-2CAjM.framer-v-za4c3j.hover .framer-kyrujh, .framer-2CAjM.framer-v-1x5di9v.hover .framer-kyrujh, .framer-2CAjM.framer-v-1uz67ef.hover .framer-kyrujh, .framer-2CAjM.framer-v-nh8qij.hover .framer-kyrujh, .framer-2CAjM.framer-v-1h7u4j1.hover .framer-kyrujh, .framer-2CAjM.framer-v-1anoblh.hover .framer-kyrujh { left: 0px; }`,
        ...er,
        `.framer-2CAjM[data-border="true"]::after, .framer-2CAjM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (X = j(gr, _r, `framer-2CAjM`)),
      (X.displayName = `Button`),
      (X.defaultProps = { height: 50, width: 234 }),
      A(X, {
        variant: {
          options: [
            `FU9NK2rv7`,
            `TrExUJEoj`,
            `s1_R5EQq1`,
            `Ybhie7Rq2`,
            `YPxHtS2ti`,
            `kZP06hvkc`,
            `nUa3AxbZM`,
            `yIUj2lyo3`,
            `Im3Rj55tG`,
          ],
          optionTitles: [
            `Hi`,
            `Hi Small`,
            `Hi Large`,
            `Hi Dark`,
            `Hi Dark Large`,
            `Ink`,
            `Line`,
            `Glass Large`,
            `Line Dark`,
          ],
          title: `Variant`,
          type: z.Enum,
        },
        l9aoY6pHx: { defaultValue: `Book a free inspection`, title: `Label`, type: z.String },
        onl9aoY6pHxChange: { changes: `l9aoY6pHx`, type: z.ChangeHandler },
        KLKq8yi1U: { title: `Link`, type: z.Link },
        SbaAZw1tX: { defaultValue: !0, title: `Show Arrow`, type: z.Boolean },
        onSbaAZw1tXChange: { changes: `SbaAZw1tX`, type: z.ChangeHandler },
        A7Od1mPPH: { defaultValue: !1, title: `Show Phone`, type: z.Boolean },
        onA7Od1mPPHChange: { changes: `A7Od1mPPH`, type: z.ChangeHandler },
      }),
      T(
        X,
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
          ...ir,
          ...ar,
          ...U($n),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function yr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var br, xr, Sr, Cr, wr, Tr, Er, Dr, Z;
function Or() {
  return (Or = t(() => {
    (m(),
      D(),
      y(),
      h(),
      (br = { C8Rq4mIMZ: { hover: !0 } }),
      (xr = `framer-8RtUC`),
      (Sr = { C8Rq4mIMZ: `framer-v-f7itrv` }),
      (Cr = { delay: 0, duration: 0.3, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (wr = ({ value: e, children: t }) => {
        let r = n(v),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ f(v.Provider, { value: a, children: t });
      }),
      (Tr = b.create(o)),
      (Er = ({ height: e, id: t, link: n, number: r, price: i, title: a, width: o, ...s }) => ({
        ...s,
        A0Odrj22e: a ?? s.A0Odrj22e ?? `Roof replacement`,
        kdGrgrDSw: n ?? s.kdGrgrDSw,
        NWFM9tZkS: i ?? s.NWFM9tZkS ?? `From $11,800`,
        SN5iHkC3v: r ?? s.SN5iHkC3v ?? `01`,
      })),
      (Dr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = j(
        /* @__PURE__ */ p(function (e, t) {
          let n = l(null),
            i = t ?? n,
            a = r(),
            { activeLocale: s, setLocale: c } = ue();
          le();
          let {
              style: u,
              className: p,
              layoutId: m,
              variant: h,
              SN5iHkC3v: g,
              A0Odrj22e: v,
              NWFM9tZkS: y,
              kdGrgrDSw: S,
              ...C
            } = Er(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: D,
              gestureHandlers: ee,
              gestureVariant: O,
              isLoading: k,
              setGestureState: A,
              setVariant: j,
              variants: M,
            } = E({
              defaultVariant: `C8Rq4mIMZ`,
              enabledGestures: br,
              ref: i,
              variant: h,
              variantClassNames: Sr,
            }),
            N = Dr(e, M),
            P = x(xr);
          return /*#__PURE__*/ f(_, {
            id: m ?? a,
            children: /*#__PURE__*/ f(Tr, {
              animate: M,
              initial: !1,
              children: /*#__PURE__*/ f(wr, {
                value: Cr,
                children: /*#__PURE__*/ f(I, {
                  href: S,
                  motionChild: !0,
                  nodeId: `C8Rq4mIMZ`,
                  scopeId: `ojeX1OhY0`,
                  children: /*#__PURE__*/ d(b.a, {
                    ...C,
                    ...ee,
                    className: `${x(P, `framer-f7itrv`, p, T)} framer-1nusbpi`,
                    "data-border": !0,
                    "data-framer-name": `Default`,
                    layoutDependency: N,
                    layoutId: `C8Rq4mIMZ`,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      ...u,
                    },
                    ...yr({ "C8Rq4mIMZ-hover": { "data-framer-name": void 0 } }, w, O),
                    children: [
                      /*#__PURE__*/ f(b.div, {
                        className: `framer-v2gisg`,
                        "data-framer-name": `Number`,
                        layoutDependency: N,
                        layoutId: `Yi0S8ukbK`,
                        children: /*#__PURE__*/ f(V, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ f(o, {
                            children: /*#__PURE__*/ f(b.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURRMU1BPT0=`,
                                "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                "--framer-font-size": `12px`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                "--framer-line-height": `1.6em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                              },
                              children: `Number`,
                            }),
                          }),
                          className: `framer-12r6wjv`,
                          fonts: [`FS;Manrope-variable`],
                          layoutDependency: N,
                          layoutId: `Qf3tlqELx`,
                          style: {
                            "--extracted-2gg91v": `"wght" 450`,
                            "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                          },
                          text: g,
                          variants: {
                            "C8Rq4mIMZ-hover": {
                              "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...yr(
                            {
                              "C8Rq4mIMZ-hover": {
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(b.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURRMU1BPT0=`,
                                      "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                      "--framer-font-size": `12px`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                      "--framer-line-height": `1.6em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                    },
                                    children: `01`,
                                  }),
                                }),
                              },
                            },
                            w,
                            O
                          ),
                        }),
                      }),
                      /*#__PURE__*/ f(V, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ f(o, {
                          children: /*#__PURE__*/ f(b.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURVd01BPT0=`,
                              "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                              "--framer-font-size": `17px`,
                              "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 500)`,
                              "--framer-letter-spacing": `-0.02em`,
                              "--framer-line-height": `1.6em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                            },
                            children: `Title`,
                          }),
                        }),
                        className: `framer-1ad5212`,
                        "data-framer-name": `Title`,
                        fonts: [`FS;Manrope-variable`],
                        layoutDependency: N,
                        layoutId: `WT2tRpWyi`,
                        style: {
                          "--extracted-2gg91v": `"wght" 500`,
                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                        },
                        text: v,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      /*#__PURE__*/ f(b.div, {
                        className: `framer-jcenn7`,
                        "data-framer-name": `Price`,
                        layoutDependency: N,
                        layoutId: `seKDeT54C`,
                        children: /*#__PURE__*/ f(V, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ f(o, {
                            children: /*#__PURE__*/ f(b.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURRMU1BPT0=`,
                                "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                "--framer-font-size": `12px`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                "--framer-line-height": `1.6em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                              },
                              children: `Price`,
                            }),
                          }),
                          className: `framer-1q8f5we`,
                          fonts: [`FS;Manrope-variable`],
                          layoutDependency: N,
                          layoutId: `Sjl4SK2yy`,
                          style: {
                            "--extracted-2gg91v": `"wght" 450`,
                            "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-8RtUC.framer-1nusbpi, .framer-8RtUC .framer-1nusbpi { display: block; }`,
          `.framer-8RtUC.framer-f7itrv { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 13px 4px 14px 4px; position: relative; text-decoration: none; width: 440px; }`,
          `.framer-8RtUC .framer-v2gisg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 5.9px 0px 0px 0px; position: relative; width: 36px; }`,
          `.framer-8RtUC .framer-12r6wjv, .framer-8RtUC .framer-1q8f5we { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-8RtUC .framer-1ad5212 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-8RtUC .framer-jcenn7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 5.9px 0px 0px 0px; position: relative; width: min-content; }`,
          `.framer-8RtUC.framer-v-f7itrv.hover.framer-f7itrv { padding: 13px 4px 14px 14px; }`,
          `.framer-8RtUC[data-border="true"]::after, .framer-8RtUC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-8RtUC`
      )),
      (Z.displayName = `Mega Item`),
      (Z.defaultProps = { height: 200, width: 440 }),
      A(Z, {
        SN5iHkC3v: { defaultValue: `01`, title: `Number`, type: z.String },
        onSN5iHkC3vChange: { changes: `SN5iHkC3v`, type: z.ChangeHandler },
        A0Odrj22e: { defaultValue: `Roof replacement`, title: `Title`, type: z.String },
        onA0Odrj22eChange: { changes: `A0Odrj22e`, type: z.ChangeHandler },
        NWFM9tZkS: { defaultValue: `From $11,800`, title: `Price`, type: z.String },
        onNWFM9tZkSChange: { changes: `NWFM9tZkS`, type: z.ChangeHandler },
        kdGrgrDSw: { title: `Link`, type: z.Link },
      }),
      T(
        Z,
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
var kr = /* @__PURE__ */ e({ __FramerMetadata__: () => ei, default: () => $ });
function Q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  $,
  ei;
function ti() {
  return (ti = t(() => {
    (m(),
      D(),
      y(),
      h(),
      Xt(),
      an(),
      pn(),
      vn(),
      Cn(),
      Ze(),
      Dn(),
      Mn(),
      Ln(),
      Hn(),
      qn(),
      Zn(),
      vr(),
      Or(),
      (Ar = S(b.div)),
      (jr = M(fn)),
      (Mr = M(rn)),
      (Nr = M(X)),
      (Pr = M(Z)),
      (Fr = M(Y)),
      (Ir = [`RpHSZINOh`, `e_QVsCn2E`, `ghXyy9Iod`, `u6XSFpBJ3`, `WlQ34uL9U`, `YqlqRNvZi`]),
      (Lr = `framer-ptjoH`),
      (Rr = {
        e_QVsCn2E: `framer-v-n0mpxg`,
        ghXyy9Iod: `framer-v-1a8a44f`,
        RpHSZINOh: `framer-v-1c5lu9v`,
        u6XSFpBJ3: `framer-v-1c1tozd`,
        WlQ34uL9U: `framer-v-15g2nsm`,
        YqlqRNvZi: `framer-v-zmi4sf`,
      }),
      (zr = { delay: 0, duration: 0.35, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (Br = { delay: 0, duration: 1.7, ease: [0.22, 0.7, 0.2, 1], type: `tween` }),
      (Vr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 3,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Hr = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ur = {
        backgroundColor: `rgba(20, 21, 23, 0.06)`,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Hr,
      }),
      (Wr = {
        opacity: 0.7,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Hr,
      }),
      (Gr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Kr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.04,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.8, ease: [0.22, 0.7, 0.2, 1], type: `tween` },
      }),
      (qr = ({ value: e, children: t }) => {
        let r = n(v),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ f(v.Provider, { value: a, children: t });
      }),
      (Jr = {
        "Desktop Services": `e_QVsCn2E`,
        "Phone Menu": `YqlqRNvZi`,
        "Tablet Menu": `u6XSFpBJ3`,
        Desktop: `RpHSZINOh`,
        Phone: `WlQ34uL9U`,
        Tablet: `ghXyy9Iod`,
      }),
      (Yr = b.create(o)),
      (Xr = ({ bookLink: e, height: t, id: n, scrolled: r, width: i, ...a }) => ({
        ...a,
        tKpQBEUt4: e ?? a.tKpQBEUt4,
        variant: Jr[a.variant] ?? a.variant ?? `RpHSZINOh`,
        yDKIu6Vf7: r ?? a.yDKIu6Vf7 ?? !1,
      })),
      (Zr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qr = /*#__PURE__*/ p(function (e, t) {
        let n = l(null),
          i = t ?? n,
          a = r(),
          { activeLocale: s, contentLocale: c, setLocale: u } = ue(),
          p = le(),
          {
            style: m,
            className: h,
            layoutId: g,
            variant: v,
            yDKIu6Vf7: y,
            tKpQBEUt4: S,
            ...T
          } = Xr(e),
          {
            baseVariant: D,
            classNames: ee,
            clearLoadingGesture: O,
            gestureHandlers: k,
            gestureVariant: A,
            isLoading: j,
            setGestureState: M,
            setVariant: P,
            variants: te,
          } = E({
            cycleOrder: Ir,
            defaultVariant: `RpHSZINOh`,
            ref: i,
            variant: v,
            variantClassNames: Rr,
          }),
          F = Zr(e, te),
          ne = x(Lr, Xe, _n, Xn, Kn, jn, Sn, Vn, In, En),
          { activeVariantCallback: re, delay: ie } = ce(D),
          R = re(async (...e) => {
            (M({ isHovered: !1 }), P(`RpHSZINOh`));
          }),
          ae = () => ![`WlQ34uL9U`, `YqlqRNvZi`].includes(D),
          se = () => ![`ghXyy9Iod`, `u6XSFpBJ3`, `WlQ34uL9U`, `YqlqRNvZi`].includes(D),
          z = re(async (...e) => {
            P(`e_QVsCn2E`);
          }),
          B = re(async (...e) => {
            P(`RpHSZINOh`);
          }),
          H = () => !![`ghXyy9Iod`, `u6XSFpBJ3`, `WlQ34uL9U`, `YqlqRNvZi`].includes(D),
          U = re(async (...e) => {
            P(`u6XSFpBJ3`);
          }),
          W = re(async (...e) => {
            P(`ghXyy9Iod`);
          }),
          fe = re(async (...e) => {
            P(`YqlqRNvZi`);
          }),
          G = re(async (...e) => {
            P(`WlQ34uL9U`);
          });
        return (
          de(),
          /*#__PURE__*/ f(_, {
            id: g ?? a,
            children: /*#__PURE__*/ f(Yr, {
              animate: te,
              initial: !1,
              children: /*#__PURE__*/ f(qr, {
                value: zr,
                children: /*#__PURE__*/ d(b.div, {
                  ...T,
                  ...k,
                  className: x(ne, `framer-1c5lu9v`, h, ee),
                  "data-framer-name": `Desktop`,
                  layoutDependency: F,
                  layoutId: `RpHSZINOh`,
                  ref: i,
                  style: { ...m },
                  ...Q(
                    {
                      e_QVsCn2E: {
                        "data-framer-name": `Desktop Services`,
                        "data-highlight": !0,
                        onMouseLeave: R,
                      },
                      ghXyy9Iod: { "data-framer-name": `Tablet` },
                      u6XSFpBJ3: { "data-framer-name": `Tablet Menu` },
                      WlQ34uL9U: { "data-framer-name": `Phone` },
                      YqlqRNvZi: { "data-framer-name": `Phone Menu` },
                    },
                    D,
                    A
                  ),
                  children: [
                    /*#__PURE__*/ f(b.div, {
                      className: `framer-6v4abw`,
                      "data-framer-name": `Util`,
                      layoutDependency: F,
                      layoutId: `dyq3h4IXQ`,
                      style: {
                        backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                      },
                      children: /*#__PURE__*/ d(b.div, {
                        className: `framer-1qn9lva`,
                        "data-framer-name": `Util In`,
                        layoutDependency: F,
                        layoutId: `eRfQyqyjR`,
                        children: [
                          /*#__PURE__*/ d(b.div, {
                            className: `framer-2urg0z`,
                            "data-framer-name": `Storm Line`,
                            layoutDependency: F,
                            layoutId: `BjpkLVsap`,
                            children: [
                              /*#__PURE__*/ f(b.div, {
                                className: `framer-1wdml30`,
                                "data-framer-name": `Live Dot`,
                                layoutDependency: F,
                                layoutId: `WzPwX7ruI`,
                                style: {
                                  backgroundColor: `var(--token-564c009a-634c-418c-8d2d-3dfda00c0c9d)`,
                                  borderBottomLeftRadius: `50%`,
                                  borderBottomRightRadius: `50%`,
                                  borderTopLeftRadius: `50%`,
                                  borderTopRightRadius: `50%`,
                                },
                                children: /*#__PURE__*/ f(Ar, {
                                  __framer__loop: Vr,
                                  __framer__loopEffectEnabled: !0,
                                  __framer__loopPauseOffscreen: !0,
                                  __framer__loopRepeatDelay: 0,
                                  __framer__loopRepeatType: `loop`,
                                  __framer__loopTransition: Br,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-i3vq1r`,
                                  "data-border": !0,
                                  "data-framer-name": `Pulse`,
                                  layoutDependency: F,
                                  layoutId: `VNtDeJg9V`,
                                  style: {
                                    "--border-bottom-width": `1.5px`,
                                    "--border-color": `var(--token-482c7f52-615c-4edf-b062-5addab2caa1f)`,
                                    "--border-left-width": `1.5px`,
                                    "--border-right-width": `1.5px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1.5px`,
                                    borderBottomLeftRadius: `50%`,
                                    borderBottomRightRadius: `50%`,
                                    borderTopLeftRadius: `50%`,
                                    borderTopRightRadius: `50%`,
                                  },
                                }),
                              }),
                              /*#__PURE__*/ f(V, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(b.p, {
                                    className: `framer-styles-preset-asb5xi`,
                                    "data-styles-preset": `ElEXFbui6`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                    },
                                    children: /*#__PURE__*/ f(b.span, {
                                      style: {
                                        "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                      },
                                      children: `Let’s discuss your project ·`,
                                    }),
                                  }),
                                }),
                                className: `framer-7ok8nh`,
                                fonts: [`Inter`],
                                layoutDependency: F,
                                layoutId: `B9vetKQ9F`,
                                style: {
                                  "--extracted-1w3ko1f": `var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07)`,
                                  "--extracted-r6o4lv": `var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07)`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ f(V, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(b.p, {
                                    className: `framer-styles-preset-283lhz`,
                                    "data-styles-preset": `aRruFqxZx`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                    },
                                    children: /*#__PURE__*/ f(I, {
                                      href: `tel:+14065550142`,
                                      motionChild: !0,
                                      nodeId: `mWjLZiSEx`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `nd41GKYX6`,
                                      smoothScroll: !1,
                                      children: /*#__PURE__*/ f(b.a, {
                                        className: `framer-styles-preset-1ip5ovy`,
                                        "data-styles-preset": `zxb8jXZAi`,
                                        children: `(406) 555-0142`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-1vbcu6y`,
                                fonts: [`Inter`],
                                layoutDependency: F,
                                layoutId: `mWjLZiSEx`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          ae() &&
                            /*#__PURE__*/ d(b.div, {
                              className: `framer-6abadf`,
                              "data-framer-name": `Area and Hours`,
                              layoutDependency: F,
                              layoutId: `HaMWYMtqY`,
                              children: [
                                /*#__PURE__*/ f(V, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ f(o, {
                                    children: /*#__PURE__*/ f(b.p, {
                                      className: `framer-styles-preset-asb5xi`,
                                      "data-styles-preset": `ElEXFbui6`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07))`,
                                      },
                                      children: `Serving the Ashford Valley`,
                                    }),
                                  }),
                                  className: `framer-107r1a3`,
                                  fonts: [`Inter`],
                                  layoutDependency: F,
                                  layoutId: `X26jjSccK`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-86d4cba2-4fff-4fb3-8914-bfc915d25a07)`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ f(b.div, {
                                  className: `framer-ay0476`,
                                  "data-border": !0,
                                  "data-framer-name": `Hours`,
                                  layoutDependency: F,
                                  layoutId: `VFrA2nKoE`,
                                  style: {
                                    "--border-bottom-width": `0px`,
                                    "--border-color": `var(--token-55e28825-0d6b-412c-8907-93458bc9b8dd)`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `0px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `0px`,
                                  },
                                  children: /*#__PURE__*/ f(V, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ f(o, {
                                      children: /*#__PURE__*/ f(b.p, {
                                        className: `framer-styles-preset-1shce9c`,
                                        "data-styles-preset": `tIlpg4oDC`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                        },
                                        children: `Mon–Fri 07:00–18:00 · Sat 08:00–13:00`,
                                      }),
                                    }),
                                    className: `framer-av9m41`,
                                    fonts: [`Inter`],
                                    layoutDependency: F,
                                    layoutId: `hR77O42VM`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-8893c285-c73a-495e-8e4e-55931d32e72c)`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...Q(
                                      {
                                        e_QVsCn2E: {
                                          children: /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(b.p, {
                                              className: `framer-styles-preset-1shce9c`,
                                              "data-styles-preset": `tIlpg4oDC`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                              },
                                              children: `Mon–Fri 07:00–18:00 · Sat 08:00–13:00`,
                                            }),
                                          }),
                                        },
                                        ghXyy9Iod: {
                                          children: /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(b.p, {
                                              className: `framer-styles-preset-1shce9c`,
                                              "data-styles-preset": `tIlpg4oDC`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                              },
                                              children: `Mon–Fri 07:00–18:00 · Sat 08:00–13:00`,
                                            }),
                                          }),
                                        },
                                        u6XSFpBJ3: {
                                          children: /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(b.p, {
                                              className: `framer-styles-preset-1shce9c`,
                                              "data-styles-preset": `tIlpg4oDC`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8893c285-c73a-495e-8e4e-55931d32e72c))`,
                                              },
                                              children: `Mon–Fri 07:00–18:00 · Sat 08:00–13:00`,
                                            }),
                                          }),
                                        },
                                      },
                                      D,
                                      A
                                    ),
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ d(b.div, {
                      className: `framer-uftkgl`,
                      "data-framer-name": `Bar`,
                      layoutDependency: F,
                      layoutId: `PMtOsu5RJ`,
                      style: {
                        backdropFilter: `blur(18px)`,
                        backgroundColor: `var(--token-d310281b-6815-4563-83e5-c1261fd9b418)`,
                        WebkitBackdropFilter: `blur(18px)`,
                      },
                      children: [
                        y !== !1 &&
                          /*#__PURE__*/ f(b.div, {
                            className: `framer-6s0vsc`,
                            "data-framer-name": `Hairline`,
                            layoutDependency: F,
                            layoutId: `ulIB0pLEj`,
                            style: {
                              backgroundColor: `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                            },
                          }),
                        /*#__PURE__*/ d(b.div, {
                          className: `framer-yjkefc`,
                          "data-framer-name": `Bar In`,
                          layoutDependency: F,
                          layoutId: `Y3uMRtBhT`,
                          children: [
                            /*#__PURE__*/ f(b.div, {
                              className: `framer-p6r810`,
                              "data-framer-name": `Brand Slot`,
                              layoutDependency: F,
                              layoutId: `o7DTupfaT`,
                              children: /*#__PURE__*/ f(I, {
                                href: { webPageId: `augiA20Il` },
                                motionChild: !0,
                                nodeId: `m8yir1LxS`,
                                scopeId: `nd41GKYX6`,
                                children: /*#__PURE__*/ d(b.a, {
                                  className: `framer-1uw3xm7 framer-16cj4bj`,
                                  "data-framer-name": `Brand`,
                                  layoutDependency: F,
                                  layoutId: `m8yir1LxS`,
                                  children: [
                                    /*#__PURE__*/ f(b.div, {
                                      className: `framer-1mz5iag`,
                                      "data-framer-name": `Mark Wrap`,
                                      layoutDependency: F,
                                      layoutId: `fISU3ZOEM`,
                                      children: /*#__PURE__*/ f(oe, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: C((p?.y || 0) + 60),
                                          pixelHeight: 32,
                                          pixelWidth: 32,
                                          sizes: `28px`,
                                          src: `../../assets/images/R5C4GBJEZk9osfaiHy2mSt4Uv4c.svg`,
                                        },
                                        className: `framer-1wndaz9`,
                                        "data-framer-name": `Mark`,
                                        layoutDependency: F,
                                        layoutId: `gRN3W8lcQ`,
                                        ...Q(
                                          {
                                            WlQ34uL9U: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                loading: C((p?.y || 0) + 56),
                                                pixelHeight: 32,
                                                pixelWidth: 32,
                                                sizes: `28px`,
                                                src: `../../assets/images/R5C4GBJEZk9osfaiHy2mSt4Uv4c.svg`,
                                              },
                                            },
                                            YqlqRNvZi: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                loading: C((p?.y || 0) + 56),
                                                pixelHeight: 32,
                                                pixelWidth: 32,
                                                sizes: `28px`,
                                                src: `../../assets/images/R5C4GBJEZk9osfaiHy2mSt4Uv4c.svg`,
                                              },
                                            },
                                          },
                                          D,
                                          A
                                        ),
                                      }),
                                    }),
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURnd01BPT0=`,
                                            "--framer-font-family": `"Manrope Variable"`,
                                            "--framer-font-size": `23px`,
                                            "--framer-font-style": `normal`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 800)`,
                                            "--framer-font-weight": `400`,
                                            "--framer-letter-spacing": `-0.05em`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                          },
                                          children: `Regolith`,
                                        }),
                                      }),
                                      className: `framer-1v6oy0z`,
                                      fonts: [`FS;Manrope-variable`],
                                      layoutDependency: F,
                                      layoutId: `vAp2OrOvv`,
                                      style: {
                                        "--extracted-2gg91v": `"wght" 800`,
                                        "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    ae() &&
                                      /*#__PURE__*/ f(b.div, {
                                        className: `framer-63xdv4`,
                                        "data-framer-name": `Sub`,
                                        layoutDependency: F,
                                        layoutId: `HDeQQbQtQ`,
                                        children: /*#__PURE__*/ f(V, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(b.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURRMU1BPT0=`,
                                                "--framer-font-family": `"Manrope Variable"`,
                                                "--framer-font-size": `11px`,
                                                "--framer-font-style": `normal`,
                                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                                "--framer-font-weight": `400`,
                                                "--framer-letter-spacing": `0.02em`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d1796b10-ed0a-4c44-bd3b-b2d8b366f17b))`,
                                              },
                                              children: `Construction`,
                                            }),
                                          }),
                                          className: `framer-jmmr9q`,
                                          fonts: [`FS;Manrope-variable`],
                                          layoutDependency: F,
                                          layoutId: `oGlk0bWdZ`,
                                          style: {
                                            "--extracted-2gg91v": `"wght" 450`,
                                            "--extracted-r6o4lv": `var(--token-d1796b10-ed0a-4c44-bd3b-b2d8b366f17b)`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                  ],
                                }),
                              }),
                            }),
                            se() &&
                              /*#__PURE__*/ d(b.div, {
                                className: `framer-1ujb8oj`,
                                "data-framer-name": `Nav`,
                                layoutDependency: F,
                                layoutId: `fHNimMvHT`,
                                children: [
                                  /*#__PURE__*/ d(b.div, {
                                    className: `framer-6smrcf`,
                                    "data-framer-name": `Services`,
                                    "data-highlight": !0,
                                    layoutDependency: F,
                                    layoutId: `xYRcfvvQg`,
                                    onMouseEnter: z,
                                    onTap: z,
                                    style: {
                                      backgroundColor: `rgba(0, 0, 0, 0)`,
                                      borderBottomLeftRadius: 8,
                                      borderBottomRightRadius: 8,
                                      borderTopLeftRadius: 8,
                                      borderTopRightRadius: 8,
                                    },
                                    variants: {
                                      e_QVsCn2E: { backgroundColor: `rgba(20, 21, 23, 0.06)` },
                                    },
                                    whileHover: Ur,
                                    ...Q({ e_QVsCn2E: { onTap: B } }, D, A),
                                    children: [
                                      /*#__PURE__*/ f(V, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            className: `framer-styles-preset-1htg8hk`,
                                            "data-styles-preset": `RoPLXewWM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `Services`,
                                          }),
                                        }),
                                        className: `framer-pzc3o4`,
                                        fonts: [`Inter`],
                                        layoutDependency: F,
                                        layoutId: `JdmRL51mm`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Q(
                                          {
                                            e_QVsCn2E: {
                                              children: /*#__PURE__*/ f(o, {
                                                children: /*#__PURE__*/ f(b.p, {
                                                  className: `framer-styles-preset-1htg8hk`,
                                                  "data-styles-preset": `RoPLXewWM`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                  },
                                                  children: `Services`,
                                                }),
                                              }),
                                            },
                                          },
                                          D,
                                          A
                                        ),
                                      }),
                                      /*#__PURE__*/ f(fn, {
                                        animated: !0,
                                        className: `framer-1nlu9ed`,
                                        "data-framer-name": `Chevron`,
                                        layoutDependency: F,
                                        layoutId: `Hz9sXzrFP`,
                                        style: {
                                          "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                          "--js9iwy": 2,
                                          rotate: 0,
                                        },
                                        variants: { e_QVsCn2E: { rotate: 180 } },
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ f(I, {
                                    href: { webPageId: `u0GR3v9Uc` },
                                    motionChild: !0,
                                    nodeId: `YmwMdOQ0V`,
                                    scopeId: `nd41GKYX6`,
                                    children: /*#__PURE__*/ f(b.a, {
                                      className: `framer-1prlws6 framer-16cj4bj`,
                                      "data-framer-name": `Materials`,
                                      layoutDependency: F,
                                      layoutId: `YmwMdOQ0V`,
                                      style: {
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                      },
                                      whileHover: Ur,
                                      ...Q(
                                        { e_QVsCn2E: { "data-highlight": !0, onMouseEnter: B } },
                                        D,
                                        A
                                      ),
                                      children: /*#__PURE__*/ f(V, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            className: `framer-styles-preset-1htg8hk`,
                                            "data-styles-preset": `RoPLXewWM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `Materials`,
                                          }),
                                        }),
                                        className: `framer-6a23kx`,
                                        fonts: [`Inter`],
                                        layoutDependency: F,
                                        layoutId: `k2tBRs1Bc`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Q(
                                          {
                                            e_QVsCn2E: {
                                              children: /*#__PURE__*/ f(o, {
                                                children: /*#__PURE__*/ f(b.p, {
                                                  className: `framer-styles-preset-1htg8hk`,
                                                  "data-styles-preset": `RoPLXewWM`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                  },
                                                  children: `Materials`,
                                                }),
                                              }),
                                            },
                                          },
                                          D,
                                          A
                                        ),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ f(I, {
                                    href: { webPageId: `WiWpK4bRq` },
                                    motionChild: !0,
                                    nodeId: `zniBPFMYt`,
                                    scopeId: `nd41GKYX6`,
                                    children: /*#__PURE__*/ f(b.a, {
                                      className: `framer-18t3e0b framer-16cj4bj`,
                                      "data-framer-name": `Projects`,
                                      layoutDependency: F,
                                      layoutId: `zniBPFMYt`,
                                      style: {
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                      },
                                      whileHover: Ur,
                                      ...Q(
                                        { e_QVsCn2E: { "data-highlight": !0, onMouseEnter: B } },
                                        D,
                                        A
                                      ),
                                      children: /*#__PURE__*/ f(V, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            className: `framer-styles-preset-1htg8hk`,
                                            "data-styles-preset": `RoPLXewWM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `Projects`,
                                          }),
                                        }),
                                        className: `framer-1m664q5`,
                                        fonts: [`Inter`],
                                        layoutDependency: F,
                                        layoutId: `ZRvxkLwE2`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Q(
                                          {
                                            e_QVsCn2E: {
                                              children: /*#__PURE__*/ f(o, {
                                                children: /*#__PURE__*/ f(b.p, {
                                                  className: `framer-styles-preset-1htg8hk`,
                                                  "data-styles-preset": `RoPLXewWM`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                  },
                                                  children: `Projects`,
                                                }),
                                              }),
                                            },
                                          },
                                          D,
                                          A
                                        ),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ f(I, {
                                    href: { webPageId: `Ex3jmBT8v` },
                                    motionChild: !0,
                                    nodeId: `BwzFSVT7y`,
                                    scopeId: `nd41GKYX6`,
                                    children: /*#__PURE__*/ f(b.a, {
                                      className: `framer-1b37a2x framer-16cj4bj`,
                                      "data-framer-name": `About`,
                                      layoutDependency: F,
                                      layoutId: `BwzFSVT7y`,
                                      style: {
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                      },
                                      whileHover: Ur,
                                      ...Q(
                                        { e_QVsCn2E: { "data-highlight": !0, onMouseEnter: B } },
                                        D,
                                        A
                                      ),
                                      children: /*#__PURE__*/ f(V, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            className: `framer-styles-preset-1htg8hk`,
                                            "data-styles-preset": `RoPLXewWM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `About`,
                                          }),
                                        }),
                                        className: `framer-1yorckl`,
                                        fonts: [`Inter`],
                                        layoutDependency: F,
                                        layoutId: `nZAVFDg4d`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Q(
                                          {
                                            e_QVsCn2E: {
                                              children: /*#__PURE__*/ f(o, {
                                                children: /*#__PURE__*/ f(b.p, {
                                                  className: `framer-styles-preset-1htg8hk`,
                                                  "data-styles-preset": `RoPLXewWM`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                  },
                                                  children: `About`,
                                                }),
                                              }),
                                            },
                                          },
                                          D,
                                          A
                                        ),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ f(I, {
                                    href: { webPageId: `NbWyEb_lH` },
                                    motionChild: !0,
                                    nodeId: `TYD9de_bW`,
                                    scopeId: `nd41GKYX6`,
                                    children: /*#__PURE__*/ f(b.a, {
                                      className: `framer-tz7em4 framer-16cj4bj`,
                                      "data-framer-name": `Roof notes`,
                                      layoutDependency: F,
                                      layoutId: `TYD9de_bW`,
                                      style: {
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                      },
                                      whileHover: Ur,
                                      ...Q(
                                        { e_QVsCn2E: { "data-highlight": !0, onMouseEnter: B } },
                                        D,
                                        A
                                      ),
                                      children: /*#__PURE__*/ f(V, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            className: `framer-styles-preset-1htg8hk`,
                                            "data-styles-preset": `RoPLXewWM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `Building notes`,
                                          }),
                                        }),
                                        className: `framer-1ezzauj`,
                                        fonts: [`Inter`],
                                        layoutDependency: F,
                                        layoutId: `tSOvYgLV3`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Q(
                                          {
                                            e_QVsCn2E: {
                                              children: /*#__PURE__*/ f(o, {
                                                children: /*#__PURE__*/ f(b.p, {
                                                  className: `framer-styles-preset-1htg8hk`,
                                                  "data-styles-preset": `RoPLXewWM`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                  },
                                                  children: `Building notes`,
                                                }),
                                              }),
                                            },
                                          },
                                          D,
                                          A
                                        ),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ f(I, {
                                    href: { webPageId: `nrqqIZ5lY` },
                                    motionChild: !0,
                                    nodeId: `HVgyApI8P`,
                                    scopeId: `nd41GKYX6`,
                                    children: /*#__PURE__*/ f(b.a, {
                                      className: `framer-f03va1 framer-16cj4bj`,
                                      "data-framer-name": `Contact`,
                                      layoutDependency: F,
                                      layoutId: `HVgyApI8P`,
                                      style: {
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                      },
                                      whileHover: Ur,
                                      ...Q(
                                        { e_QVsCn2E: { "data-highlight": !0, onMouseEnter: B } },
                                        D,
                                        A
                                      ),
                                      children: /*#__PURE__*/ f(V, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            className: `framer-styles-preset-1htg8hk`,
                                            "data-styles-preset": `RoPLXewWM`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                            },
                                            children: `Contact`,
                                          }),
                                        }),
                                        className: `framer-1w49pa0`,
                                        fonts: [`Inter`],
                                        layoutDependency: F,
                                        layoutId: `JNXLKhtZs`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Q(
                                          {
                                            e_QVsCn2E: {
                                              children: /*#__PURE__*/ f(o, {
                                                children: /*#__PURE__*/ f(b.p, {
                                                  className: `framer-styles-preset-1htg8hk`,
                                                  "data-styles-preset": `RoPLXewWM`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                  },
                                                  children: `Contact`,
                                                }),
                                              }),
                                            },
                                          },
                                          D,
                                          A
                                        ),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            /*#__PURE__*/ f(b.div, {
                              className: `framer-jjqsf9`,
                              "data-framer-name": `CTA Slot`,
                              layoutDependency: F,
                              layoutId: `UBzUYPk2N`,
                              children: /*#__PURE__*/ d(b.div, {
                                className: `framer-ijdhf4`,
                                "data-framer-name": `Actions`,
                                layoutDependency: F,
                                layoutId: `l5tKNXozP`,
                                children: [
                                  H() &&
                                    /*#__PURE__*/ f(I, {
                                      href: `tel:+14065550142`,
                                      motionChild: !0,
                                      nodeId: `zWiZGYJjd`,
                                      scopeId: `nd41GKYX6`,
                                      children: /*#__PURE__*/ d(b.a, {
                                        className: `framer-w8hwu4 framer-16cj4bj`,
                                        "data-framer-name": `Phone`,
                                        layoutDependency: F,
                                        layoutId: `zWiZGYJjd`,
                                        style: {
                                          "--border-bottom-width": `0px`,
                                          "--border-color": `rgba(0, 0, 0, 0)`,
                                          "--border-left-width": `0px`,
                                          "--border-right-width": `0px`,
                                          "--border-style": `solid`,
                                          "--border-top-width": `0px`,
                                          borderBottomLeftRadius: 0,
                                          borderBottomRightRadius: 0,
                                          borderTopLeftRadius: 0,
                                          borderTopRightRadius: 0,
                                        },
                                        variants: {
                                          WlQ34uL9U: {
                                            "--border-bottom-width": `1px`,
                                            "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                            "--border-left-width": `1px`,
                                            "--border-right-width": `1px`,
                                            "--border-style": `solid`,
                                            "--border-top-width": `1px`,
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,
                                            borderTopLeftRadius: 10,
                                            borderTopRightRadius: 10,
                                          },
                                          YqlqRNvZi: {
                                            "--border-bottom-width": `1px`,
                                            "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                            "--border-left-width": `1px`,
                                            "--border-right-width": `1px`,
                                            "--border-style": `solid`,
                                            "--border-top-width": `1px`,
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,
                                            borderTopLeftRadius: 10,
                                            borderTopRightRadius: 10,
                                          },
                                        },
                                        whileHover: Wr,
                                        ...Q(
                                          {
                                            WlQ34uL9U: { "data-border": !0 },
                                            YqlqRNvZi: { "data-border": !0 },
                                          },
                                          D,
                                          A
                                        ),
                                        children: [
                                          /*#__PURE__*/ f(rn, {
                                            animated: !0,
                                            className: `framer-3ul9xr`,
                                            layoutDependency: F,
                                            layoutId: `Sqa6_tMrv`,
                                            style: {
                                              "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                              "--js9iwy": 1.6,
                                            },
                                          }),
                                          ae() &&
                                            /*#__PURE__*/ f(V, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ f(o, {
                                                children: /*#__PURE__*/ f(b.p, {
                                                  className: `framer-styles-preset-1o6gk2k`,
                                                  "data-styles-preset": `eH8Vy20RR`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                  },
                                                  children: `(406) 555-0142`,
                                                }),
                                              }),
                                              className: `framer-1ifr9fp`,
                                              fonts: [`Inter`],
                                              layoutDependency: F,
                                              layoutId: `OqTbh5FkI`,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                              ...Q(
                                                {
                                                  ghXyy9Iod: {
                                                    children: /*#__PURE__*/ f(o, {
                                                      children: /*#__PURE__*/ f(b.p, {
                                                        className: `framer-styles-preset-1o6gk2k`,
                                                        "data-styles-preset": `eH8Vy20RR`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `start`,
                                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                        },
                                                        children: `(406) 555-0142`,
                                                      }),
                                                    }),
                                                  },
                                                  u6XSFpBJ3: {
                                                    children: /*#__PURE__*/ f(o, {
                                                      children: /*#__PURE__*/ f(b.p, {
                                                        className: `framer-styles-preset-1o6gk2k`,
                                                        "data-styles-preset": `eH8Vy20RR`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `start`,
                                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                        },
                                                        children: `(406) 555-0142`,
                                                      }),
                                                    }),
                                                  },
                                                },
                                                D,
                                                A
                                              ),
                                            }),
                                        ],
                                      }),
                                    }),
                                  ae() &&
                                    /*#__PURE__*/ f(L, {
                                      height: 44,
                                      y: (p?.y || 0) + 52,
                                      children: /*#__PURE__*/ f(N, {
                                        className: `framer-18tcrwv-container`,
                                        layoutDependency: F,
                                        layoutId: `xCXoahBWV-container`,
                                        nodeId: `xCXoahBWV`,
                                        rendersWithMotion: !0,
                                        scopeId: `nd41GKYX6`,
                                        children: /*#__PURE__*/ f(X, {
                                          A7Od1mPPH: !1,
                                          height: `100%`,
                                          id: `xCXoahBWV`,
                                          KLKq8yi1U: S,
                                          l9aoY6pHx: `Book a visit`,
                                          layoutId: `xCXoahBWV`,
                                          SbaAZw1tX: !0,
                                          style: { height: `100%` },
                                          variant: Gr(`TrExUJEoj`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  H() &&
                                    /*#__PURE__*/ d(b.div, {
                                      className: `framer-1xbl211`,
                                      "data-border": !0,
                                      "data-framer-name": `Menu Button`,
                                      layoutDependency: F,
                                      layoutId: `ngi9qFYh3`,
                                      style: {
                                        "--border-bottom-width": `1px`,
                                        "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                        "--border-left-width": `1px`,
                                        "--border-right-width": `1px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `1px`,
                                        borderBottomLeftRadius: 999,
                                        borderBottomRightRadius: 999,
                                        borderTopLeftRadius: 999,
                                        borderTopRightRadius: 999,
                                      },
                                      ...Q(
                                        {
                                          ghXyy9Iod: { "data-highlight": !0, onTap: U },
                                          u6XSFpBJ3: { "data-highlight": !0, onTap: W },
                                          WlQ34uL9U: { "data-highlight": !0, onTap: fe },
                                          YqlqRNvZi: { "data-highlight": !0, onTap: G },
                                        },
                                        D,
                                        A
                                      ),
                                      children: [
                                        /*#__PURE__*/ d(b.div, {
                                          className: `framer-mrmxrs`,
                                          "data-framer-name": `Lines`,
                                          layoutDependency: F,
                                          layoutId: `FNcoRiprO`,
                                          children: [
                                            /*#__PURE__*/ f(b.div, {
                                              className: `framer-1ofbhxn`,
                                              "data-framer-name": `Bar 1`,
                                              layoutDependency: F,
                                              layoutId: `Dg2nzSK61`,
                                              style: {
                                                backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                                borderBottomLeftRadius: 2,
                                                borderBottomRightRadius: 2,
                                                borderTopLeftRadius: 2,
                                                borderTopRightRadius: 2,
                                                rotate: 0,
                                              },
                                              variants: {
                                                u6XSFpBJ3: { rotate: 45 },
                                                WlQ34uL9U: { rotate: 0 },
                                                YqlqRNvZi: { rotate: 45 },
                                              },
                                            }),
                                            /*#__PURE__*/ f(b.div, {
                                              className: `framer-5iit6f`,
                                              "data-framer-name": `Bar 2`,
                                              layoutDependency: F,
                                              layoutId: `ilF7pVG4P`,
                                              style: {
                                                backgroundColor: `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                                borderBottomLeftRadius: 2,
                                                borderBottomRightRadius: 2,
                                                borderTopLeftRadius: 2,
                                                borderTopRightRadius: 2,
                                                rotate: 0,
                                              },
                                              variants: {
                                                u6XSFpBJ3: { rotate: -45 },
                                                WlQ34uL9U: { rotate: 0 },
                                                YqlqRNvZi: { rotate: -45 },
                                              },
                                            }),
                                          ],
                                        }),
                                        /*#__PURE__*/ f(V, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ f(o, {
                                            children: /*#__PURE__*/ f(b.p, {
                                              className: `framer-styles-preset-1o6gk2k`,
                                              "data-styles-preset": `eH8Vy20RR`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                              },
                                              children: `Menu`,
                                            }),
                                          }),
                                          className: `framer-1n46f3l`,
                                          fonts: [`Inter`],
                                          layoutDependency: F,
                                          layoutId: `AG66YMQhS`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                          ...Q(
                                            {
                                              ghXyy9Iod: {
                                                children: /*#__PURE__*/ f(o, {
                                                  children: /*#__PURE__*/ f(b.p, {
                                                    className: `framer-styles-preset-1o6gk2k`,
                                                    "data-styles-preset": `eH8Vy20RR`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `start`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                    },
                                                    children: `Menu`,
                                                  }),
                                                }),
                                              },
                                              u6XSFpBJ3: {
                                                children: /*#__PURE__*/ f(o, {
                                                  children: /*#__PURE__*/ f(b.p, {
                                                    className: `framer-styles-preset-1o6gk2k`,
                                                    "data-styles-preset": `eH8Vy20RR`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `start`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                    },
                                                    children: `Menu`,
                                                  }),
                                                }),
                                              },
                                              WlQ34uL9U: {
                                                children: /*#__PURE__*/ f(o, {
                                                  children: /*#__PURE__*/ f(b.p, {
                                                    className: `framer-styles-preset-1o6gk2k`,
                                                    "data-styles-preset": `eH8Vy20RR`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `start`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                    },
                                                    children: `Menu`,
                                                  }),
                                                }),
                                              },
                                              YqlqRNvZi: {
                                                children: /*#__PURE__*/ f(o, {
                                                  children: /*#__PURE__*/ f(b.p, {
                                                    className: `framer-styles-preset-1o6gk2k`,
                                                    "data-styles-preset": `eH8Vy20RR`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `start`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                    },
                                                    children: `Menu`,
                                                  }),
                                                }),
                                              },
                                            },
                                            D,
                                            A
                                          ),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    se() &&
                      /*#__PURE__*/ f(b.div, {
                        className: `framer-25pxk2`,
                        "data-border": !0,
                        "data-framer-name": `Mega`,
                        layoutDependency: F,
                        layoutId: `Nhv6vkCvB`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `var(--token-fc407ca5-cece-4c23-8107-7bec514252d8)`,
                          opacity: 0,
                        },
                        variants: { e_QVsCn2E: { opacity: 1 } },
                        children: /*#__PURE__*/ d(b.div, {
                          className: `framer-19unmj5`,
                          "data-framer-name": `Mega In`,
                          layoutDependency: F,
                          layoutId: `AkQkfEWAc`,
                          children: [
                            /*#__PURE__*/ d(b.div, {
                              className: `framer-1u12362`,
                              "data-border": !0,
                              "data-framer-name": `Services List`,
                              layoutDependency: F,
                              layoutId: `sKncRMiKh`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                              },
                              children: [
                                /*#__PURE__*/ f(w, {
                                  links: [
                                    {
                                      href: {
                                        pathVariables: { Uq4dgDOpK: `roof-replacement` },
                                        unresolvedPathSlugs: {
                                          Uq4dgDOpK: {
                                            collectionId: `eHfc5JU5K`,
                                            collectionItemId: `ofJC7h_jM`,
                                          },
                                        },
                                        webPageId: `tO8VmqOLs`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        pathVariables: { Uq4dgDOpK: `roof-replacement` },
                                        unresolvedPathSlugs: {
                                          Uq4dgDOpK: {
                                            collectionId: `eHfc5JU5K`,
                                            collectionItemId: `ofJC7h_jM`,
                                          },
                                        },
                                        webPageId: `tO8VmqOLs`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    /*#__PURE__*/ f(L, {
                                      height: 200,
                                      width: `max((min(max(${p?.width || `100vw`}, 1px), 1356.8px) - 132.8px) / 2.4286, 1px)`,
                                      y: (p?.y || 0) + 134,
                                      ...Q({ e_QVsCn2E: { y: (p?.y || 0) + 140 } }, D, A),
                                      children: /*#__PURE__*/ f(N, {
                                        className: `framer-1s295ma-container`,
                                        layoutDependency: F,
                                        layoutId: `UTJ3gC6Zi-container`,
                                        nodeId: `UTJ3gC6Zi`,
                                        rendersWithMotion: !0,
                                        scopeId: `nd41GKYX6`,
                                        children: /*#__PURE__*/ f(Z, {
                                          A0Odrj22e: `New homes`,
                                          height: `100%`,
                                          id: `UTJ3gC6Zi`,
                                          kdGrgrDSw: e[0],
                                          layoutId: `UTJ3gC6Zi`,
                                          NWFM9tZkS: `From $11,800`,
                                          SN5iHkC3v: `01`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                          ...Q({ e_QVsCn2E: { kdGrgrDSw: e[1] } }, D, A),
                                        }),
                                      }),
                                    }),
                                }),
                                /*#__PURE__*/ f(w, {
                                  links: [
                                    {
                                      href: {
                                        pathVariables: { Uq4dgDOpK: `roof-repair` },
                                        unresolvedPathSlugs: {
                                          Uq4dgDOpK: {
                                            collectionId: `eHfc5JU5K`,
                                            collectionItemId: `jkBHcuwuq`,
                                          },
                                        },
                                        webPageId: `tO8VmqOLs`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        pathVariables: { Uq4dgDOpK: `roof-repair` },
                                        unresolvedPathSlugs: {
                                          Uq4dgDOpK: {
                                            collectionId: `eHfc5JU5K`,
                                            collectionItemId: `jkBHcuwuq`,
                                          },
                                        },
                                        webPageId: `tO8VmqOLs`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    /*#__PURE__*/ f(L, {
                                      height: 200,
                                      width: `max((min(max(${p?.width || `100vw`}, 1px), 1356.8px) - 132.8px) / 2.4286, 1px)`,
                                      y: (p?.y || 0) + 334,
                                      ...Q({ e_QVsCn2E: { y: (p?.y || 0) + 340 } }, D, A),
                                      children: /*#__PURE__*/ f(N, {
                                        className: `framer-1cvtkj-container`,
                                        layoutDependency: F,
                                        layoutId: `Vp1EDAaqc-container`,
                                        nodeId: `Vp1EDAaqc`,
                                        rendersWithMotion: !0,
                                        scopeId: `nd41GKYX6`,
                                        children: /*#__PURE__*/ f(Z, {
                                          A0Odrj22e: `Home renovations`,
                                          height: `100%`,
                                          id: `Vp1EDAaqc`,
                                          kdGrgrDSw: e[0],
                                          layoutId: `Vp1EDAaqc`,
                                          NWFM9tZkS: `From $340`,
                                          SN5iHkC3v: `02`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                          ...Q({ e_QVsCn2E: { kdGrgrDSw: e[1] } }, D, A),
                                        }),
                                      }),
                                    }),
                                }),
                                /*#__PURE__*/ f(w, {
                                  links: [
                                    {
                                      href: {
                                        pathVariables: { Uq4dgDOpK: `storm-damage` },
                                        unresolvedPathSlugs: {
                                          Uq4dgDOpK: {
                                            collectionId: `eHfc5JU5K`,
                                            collectionItemId: `m7vmN2vm5`,
                                          },
                                        },
                                        webPageId: `tO8VmqOLs`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        pathVariables: { Uq4dgDOpK: `storm-damage` },
                                        unresolvedPathSlugs: {
                                          Uq4dgDOpK: {
                                            collectionId: `eHfc5JU5K`,
                                            collectionItemId: `m7vmN2vm5`,
                                          },
                                        },
                                        webPageId: `tO8VmqOLs`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    /*#__PURE__*/ f(L, {
                                      height: 200,
                                      width: `max((min(max(${p?.width || `100vw`}, 1px), 1356.8px) - 132.8px) / 2.4286, 1px)`,
                                      y: (p?.y || 0) + 534,
                                      ...Q({ e_QVsCn2E: { y: (p?.y || 0) + 540 } }, D, A),
                                      children: /*#__PURE__*/ f(N, {
                                        className: `framer-j8ws7m-container`,
                                        layoutDependency: F,
                                        layoutId: `v5U0wFU5I-container`,
                                        nodeId: `v5U0wFU5I`,
                                        rendersWithMotion: !0,
                                        scopeId: `nd41GKYX6`,
                                        children: /*#__PURE__*/ f(Z, {
                                          A0Odrj22e: `Home extensions`,
                                          height: `100%`,
                                          id: `v5U0wFU5I`,
                                          kdGrgrDSw: e[0],
                                          layoutId: `v5U0wFU5I`,
                                          NWFM9tZkS: `24/7 tarping`,
                                          SN5iHkC3v: `03`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                          ...Q({ e_QVsCn2E: { kdGrgrDSw: e[1] } }, D, A),
                                        }),
                                      }),
                                    }),
                                }),
                                /*#__PURE__*/ f(w, {
                                  links: [
                                    {
                                      href: {
                                        pathVariables: { Uq4dgDOpK: `roof-inspection` },
                                        unresolvedPathSlugs: {
                                          Uq4dgDOpK: {
                                            collectionId: `eHfc5JU5K`,
                                            collectionItemId: `s3aYe7sdM`,
                                          },
                                        },
                                        webPageId: `tO8VmqOLs`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        pathVariables: { Uq4dgDOpK: `roof-inspection` },
                                        unresolvedPathSlugs: {
                                          Uq4dgDOpK: {
                                            collectionId: `eHfc5JU5K`,
                                            collectionItemId: `s3aYe7sdM`,
                                          },
                                        },
                                        webPageId: `tO8VmqOLs`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    /*#__PURE__*/ f(L, {
                                      height: 200,
                                      width: `max((min(max(${p?.width || `100vw`}, 1px), 1356.8px) - 132.8px) / 2.4286, 1px)`,
                                      y: (p?.y || 0) + 734,
                                      ...Q({ e_QVsCn2E: { y: (p?.y || 0) + 740 } }, D, A),
                                      children: /*#__PURE__*/ f(N, {
                                        className: `framer-gp0y4b-container`,
                                        layoutDependency: F,
                                        layoutId: `ZoSWNYc8V-container`,
                                        nodeId: `ZoSWNYc8V`,
                                        rendersWithMotion: !0,
                                        scopeId: `nd41GKYX6`,
                                        children: /*#__PURE__*/ f(Z, {
                                          A0Odrj22e: `Planning & site visits`,
                                          height: `100%`,
                                          id: `ZoSWNYc8V`,
                                          kdGrgrDSw: e[0],
                                          layoutId: `ZoSWNYc8V`,
                                          NWFM9tZkS: `Free`,
                                          SN5iHkC3v: `04`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                          ...Q({ e_QVsCn2E: { kdGrgrDSw: e[1] } }, D, A),
                                        }),
                                      }),
                                    }),
                                }),
                                /*#__PURE__*/ f(w, {
                                  links: [
                                    {
                                      href: {
                                        pathVariables: { Uq4dgDOpK: `gutters` },
                                        unresolvedPathSlugs: {
                                          Uq4dgDOpK: {
                                            collectionId: `eHfc5JU5K`,
                                            collectionItemId: `N4_4utRrp`,
                                          },
                                        },
                                        webPageId: `tO8VmqOLs`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        pathVariables: { Uq4dgDOpK: `gutters` },
                                        unresolvedPathSlugs: {
                                          Uq4dgDOpK: {
                                            collectionId: `eHfc5JU5K`,
                                            collectionItemId: `N4_4utRrp`,
                                          },
                                        },
                                        webPageId: `tO8VmqOLs`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    /*#__PURE__*/ f(L, {
                                      height: 200,
                                      width: `max((min(max(${p?.width || `100vw`}, 1px), 1356.8px) - 132.8px) / 2.4286, 1px)`,
                                      y: (p?.y || 0) + 934,
                                      ...Q({ e_QVsCn2E: { y: (p?.y || 0) + 940 } }, D, A),
                                      children: /*#__PURE__*/ f(N, {
                                        className: `framer-14qw7sk-container`,
                                        layoutDependency: F,
                                        layoutId: `Cwada4ZvM-container`,
                                        nodeId: `Cwada4ZvM`,
                                        rendersWithMotion: !0,
                                        scopeId: `nd41GKYX6`,
                                        children: /*#__PURE__*/ f(Z, {
                                          A0Odrj22e: `Exterior improvements`,
                                          height: `100%`,
                                          id: `Cwada4ZvM`,
                                          kdGrgrDSw: e[0],
                                          layoutId: `Cwada4ZvM`,
                                          NWFM9tZkS: `From $1,450`,
                                          SN5iHkC3v: `05`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                          ...Q({ e_QVsCn2E: { kdGrgrDSw: e[1] } }, D, A),
                                        }),
                                      }),
                                    }),
                                }),
                                /*#__PURE__*/ f(w, {
                                  links: [
                                    {
                                      href: {
                                        pathVariables: { Uq4dgDOpK: `ventilation-skylights` },
                                        unresolvedPathSlugs: {
                                          Uq4dgDOpK: {
                                            collectionId: `eHfc5JU5K`,
                                            collectionItemId: `DCOICLA27`,
                                          },
                                        },
                                        webPageId: `tO8VmqOLs`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        pathVariables: { Uq4dgDOpK: `ventilation-skylights` },
                                        unresolvedPathSlugs: {
                                          Uq4dgDOpK: {
                                            collectionId: `eHfc5JU5K`,
                                            collectionItemId: `DCOICLA27`,
                                          },
                                        },
                                        webPageId: `tO8VmqOLs`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    /*#__PURE__*/ f(L, {
                                      height: 200,
                                      width: `max((min(max(${p?.width || `100vw`}, 1px), 1356.8px) - 132.8px) / 2.4286, 1px)`,
                                      y: (p?.y || 0) + 1134,
                                      ...Q({ e_QVsCn2E: { y: (p?.y || 0) + 1140 } }, D, A),
                                      children: /*#__PURE__*/ f(N, {
                                        className: `framer-14t9a0m-container`,
                                        layoutDependency: F,
                                        layoutId: `icPwhx0nL-container`,
                                        nodeId: `icPwhx0nL`,
                                        rendersWithMotion: !0,
                                        scopeId: `nd41GKYX6`,
                                        children: /*#__PURE__*/ f(Z, {
                                          A0Odrj22e: `Interiors & finishing`,
                                          height: `100%`,
                                          id: `icPwhx0nL`,
                                          kdGrgrDSw: e[0],
                                          layoutId: `icPwhx0nL`,
                                          NWFM9tZkS: `From $690`,
                                          SN5iHkC3v: `06`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                          ...Q({ e_QVsCn2E: { kdGrgrDSw: e[1] } }, D, A),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ f(I, {
                              href: { webPageId: `u0GR3v9Uc` },
                              motionChild: !0,
                              nodeId: `dk91yXniK`,
                              scopeId: `nd41GKYX6`,
                              children: /*#__PURE__*/ d(b.a, {
                                className: `framer-gxb844 framer-16cj4bj`,
                                "data-framer-name": `Card Materials library`,
                                layoutDependency: F,
                                layoutId: `dk91yXniK`,
                                style: {
                                  borderBottomLeftRadius: 14,
                                  borderBottomRightRadius: 14,
                                  borderTopLeftRadius: 14,
                                  borderTopRightRadius: 14,
                                },
                                children: [
                                  /*#__PURE__*/ f(oe, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: C((p?.y || 0) + 133),
                                      pixelHeight: 900,
                                      pixelWidth: 900,
                                      sizes: `max((min(max(${p?.width || `100vw`}, 1px), 1356.8px) - 132.8px) / 3.4, 1px)`,
                                      src: `../../assets/images/NFWdpCoEVmHJzNwXqoUbm0ZYo-deda9e.webp`,
                                      srcSet: `../../assets/images/NFWdpCoEVmHJzNwXqoUbm0ZYo.webp 512w,../../assets/images/NFWdpCoEVmHJzNwXqoUbm0ZYo-deda9e.webp 900w`,
                                    },
                                    className: `framer-jyek9s`,
                                    "data-framer-name": `Card Image`,
                                    layoutDependency: F,
                                    layoutId: `ZDndqshHJ`,
                                    whileHover: Kr,
                                    ...Q(
                                      {
                                        e_QVsCn2E: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            loading: C((p?.y || 0) + 139),
                                            pixelHeight: 900,
                                            pixelWidth: 900,
                                            sizes: `max((min(max(${p?.width || `100vw`}, 1px), 1356.8px) - 132.8px) / 3.4, 1px)`,
                                            src: `../../assets/images/NFWdpCoEVmHJzNwXqoUbm0ZYo-deda9e.webp`,
                                            srcSet: `../../assets/images/NFWdpCoEVmHJzNwXqoUbm0ZYo.webp 512w,../../assets/images/NFWdpCoEVmHJzNwXqoUbm0ZYo-deda9e.webp 900w`,
                                          },
                                        },
                                      },
                                      D,
                                      A
                                    ),
                                  }),
                                  /*#__PURE__*/ f(b.div, {
                                    className: `framer-12hzgid`,
                                    "data-framer-name": `Shade`,
                                    layoutDependency: F,
                                    layoutId: `oQewRxLrp`,
                                    style: {
                                      background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.72) 100%)`,
                                    },
                                  }),
                                  /*#__PURE__*/ d(b.div, {
                                    className: `framer-11rkox4`,
                                    "data-framer-name": `Text Group`,
                                    layoutDependency: F,
                                    layoutId: `aZI217Ux3`,
                                    children: [
                                      /*#__PURE__*/ f(V, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            className: `framer-styles-preset-qfn9x3`,
                                            "data-styles-preset": `svRjjdIpQ`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                            },
                                            children: `Materials library`,
                                          }),
                                        }),
                                        className: `framer-1107q8f`,
                                        fonts: [`Inter`],
                                        layoutDependency: F,
                                        layoutId: `PAw9Fro4h`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(V, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                              "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 400)`,
                                              "--framer-letter-spacing": `-0.017em`,
                                              "--framer-line-height": `1.5429em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fc6c2114-088e-4bdf-ae7f-3abd96636e5c))`,
                                            },
                                            children: `Six roof types, compared honestly`,
                                          }),
                                        }),
                                        className: `framer-1ha8gje`,
                                        fonts: [`FS;Manrope-variable`],
                                        layoutDependency: F,
                                        layoutId: `PKt06e2vO`,
                                        style: {
                                          "--extracted-2gg91v": `"wght" 400`,
                                          "--extracted-r6o4lv": `var(--token-fc6c2114-088e-4bdf-ae7f-3abd96636e5c)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            /*#__PURE__*/ f(I, {
                              href: { webPageId: `Fytl0baD3` },
                              motionChild: !0,
                              nodeId: `lNCFWq1cA`,
                              scopeId: `nd41GKYX6`,
                              children: /*#__PURE__*/ d(b.a, {
                                className: `framer-1id7lh2 framer-16cj4bj`,
                                "data-framer-name": `Card Roof cost estimator`,
                                layoutDependency: F,
                                layoutId: `lNCFWq1cA`,
                                style: {
                                  borderBottomLeftRadius: 14,
                                  borderBottomRightRadius: 14,
                                  borderTopLeftRadius: 14,
                                  borderTopRightRadius: 14,
                                },
                                children: [
                                  /*#__PURE__*/ f(oe, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: C((p?.y || 0) + 133),
                                      pixelHeight: 900,
                                      pixelWidth: 1200,
                                      sizes: `max((min(max(${p?.width || `100vw`}, 1px), 1356.8px) - 132.8px) / 3.4, 1px)`,
                                      src: `../../assets/images/mWe3jswKbJzvARPzZC0P19hP2o-04e7c0.webp`,
                                      srcSet: `../../assets/images/mWe3jswKbJzvARPzZC0P19hP2o.webp 512w,../../assets/images/mWe3jswKbJzvARPzZC0P19hP2o-2ba71d.webp 1024w,../../assets/images/mWe3jswKbJzvARPzZC0P19hP2o-04e7c0.webp 1200w`,
                                    },
                                    className: `framer-86gzy7`,
                                    "data-framer-name": `Card Image`,
                                    layoutDependency: F,
                                    layoutId: `ZojijowvQ`,
                                    whileHover: Kr,
                                    ...Q(
                                      {
                                        e_QVsCn2E: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            loading: C((p?.y || 0) + 139),
                                            pixelHeight: 900,
                                            pixelWidth: 1200,
                                            sizes: `max((min(max(${p?.width || `100vw`}, 1px), 1356.8px) - 132.8px) / 3.4, 1px)`,
                                            src: `../../assets/images/mWe3jswKbJzvARPzZC0P19hP2o-04e7c0.webp`,
                                            srcSet: `../../assets/images/mWe3jswKbJzvARPzZC0P19hP2o.webp 512w,../../assets/images/mWe3jswKbJzvARPzZC0P19hP2o-2ba71d.webp 1024w,../../assets/images/mWe3jswKbJzvARPzZC0P19hP2o-04e7c0.webp 1200w`,
                                          },
                                        },
                                      },
                                      D,
                                      A
                                    ),
                                  }),
                                  /*#__PURE__*/ f(b.div, {
                                    className: `framer-5txt67`,
                                    "data-framer-name": `Shade`,
                                    layoutDependency: F,
                                    layoutId: `MyrEIxq7U`,
                                    style: {
                                      background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.72) 100%)`,
                                    },
                                  }),
                                  /*#__PURE__*/ d(b.div, {
                                    className: `framer-x07zxi`,
                                    "data-framer-name": `Text Group`,
                                    layoutDependency: F,
                                    layoutId: `n6s7JbJia`,
                                    children: [
                                      /*#__PURE__*/ f(V, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            className: `framer-styles-preset-qfn9x3`,
                                            "data-styles-preset": `svRjjdIpQ`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e01d697e-3f2d-4c98-82a6-209979abd898))`,
                                            },
                                            children: `Roofing cost guide`,
                                          }),
                                        }),
                                        className: `framer-1rciicr`,
                                        fonts: [`Inter`],
                                        layoutDependency: F,
                                        layoutId: `IfyR0VfbL`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-e01d697e-3f2d-4c98-82a6-209979abd898)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ f(V, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ f(o, {
                                          children: /*#__PURE__*/ f(b.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                              "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 400)`,
                                              "--framer-letter-spacing": `-0.0161em`,
                                              "--framer-line-height": `1.5429em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fc6c2114-088e-4bdf-ae7f-3abd96636e5c))`,
                                            },
                                            children: `A ballpark in under a minute`,
                                          }),
                                        }),
                                        className: `framer-1klf1on`,
                                        fonts: [`FS;Manrope-variable`],
                                        layoutDependency: F,
                                        layoutId: `tp7r48Ho_`,
                                        style: {
                                          "--extracted-2gg91v": `"wght" 400`,
                                          "--extracted-r6o4lv": `var(--token-fc6c2114-088e-4bdf-ae7f-3abd96636e5c)`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    H() &&
                      /*#__PURE__*/ d(b.div, {
                        className: `framer-9kadha`,
                        "data-border": !0,
                        "data-framer-name": `Menu Panel`,
                        layoutDependency: F,
                        layoutId: `BaaDWRFep`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          backgroundColor: `var(--token-fc407ca5-cece-4c23-8107-7bec514252d8)`,
                          opacity: 1,
                        },
                        variants: {
                          ghXyy9Iod: { opacity: 0 },
                          u6XSFpBJ3: { opacity: 1 },
                          WlQ34uL9U: { opacity: 0 },
                          YqlqRNvZi: { opacity: 1 },
                        },
                        children: [
                          /*#__PURE__*/ d(b.div, {
                            className: `framer-8o48y9`,
                            "data-framer-name": `Links`,
                            layoutDependency: F,
                            layoutId: `gS859hIHj`,
                            children: [
                              /*#__PURE__*/ f(I, {
                                href: { webPageId: `N22VkyVPW` },
                                motionChild: !0,
                                nodeId: `zImM8tLFb`,
                                scopeId: `nd41GKYX6`,
                                children: /*#__PURE__*/ d(b.a, {
                                  className: `framer-1nueuml framer-16cj4bj`,
                                  "data-border": !0,
                                  "data-framer-name": `Services`,
                                  layoutDependency: F,
                                  layoutId: `zImM8tLFb`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                    "--border-left-width": `0px`,
                                    "--border-right-width": `0px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `0px`,
                                  },
                                  ...Q(
                                    {
                                      u6XSFpBJ3: { "data-highlight": !0, onTap: W },
                                      YqlqRNvZi: { "data-highlight": !0, onTap: G },
                                    },
                                    D,
                                    A
                                  ),
                                  children: [
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-11icc16`,
                                          "data-styles-preset": `S7RFNqxzH`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                          },
                                          children: `Services`,
                                        }),
                                      }),
                                      className: `framer-14wa8ng`,
                                      fonts: [`Inter`],
                                      layoutDependency: F,
                                      layoutId: `hM7LBS6sX`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...Q(
                                        {
                                          ghXyy9Iod: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Services`,
                                              }),
                                            }),
                                          },
                                          u6XSFpBJ3: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Services`,
                                              }),
                                            }),
                                          },
                                          WlQ34uL9U: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Services`,
                                              }),
                                            }),
                                          },
                                          YqlqRNvZi: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Services`,
                                              }),
                                            }),
                                          },
                                        },
                                        D,
                                        A
                                      ),
                                    }),
                                    /*#__PURE__*/ f(Y, {
                                      animated: !0,
                                      className: `framer-o2thuy`,
                                      layoutDependency: F,
                                      layoutId: `D39FH9v4k`,
                                      style: {
                                        "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                        "--js9iwy": 2,
                                      },
                                    }),
                                  ],
                                }),
                              }),
                              /*#__PURE__*/ f(I, {
                                href: { webPageId: `u0GR3v9Uc` },
                                motionChild: !0,
                                nodeId: `yPEbKyIn0`,
                                scopeId: `nd41GKYX6`,
                                children: /*#__PURE__*/ d(b.a, {
                                  className: `framer-vqyoyc framer-16cj4bj`,
                                  "data-border": !0,
                                  "data-framer-name": `Materials`,
                                  layoutDependency: F,
                                  layoutId: `yPEbKyIn0`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                    "--border-left-width": `0px`,
                                    "--border-right-width": `0px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `0px`,
                                  },
                                  ...Q(
                                    {
                                      u6XSFpBJ3: { "data-highlight": !0, onTap: W },
                                      YqlqRNvZi: { "data-highlight": !0, onTap: G },
                                    },
                                    D,
                                    A
                                  ),
                                  children: [
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-11icc16`,
                                          "data-styles-preset": `S7RFNqxzH`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                          },
                                          children: `Materials`,
                                        }),
                                      }),
                                      className: `framer-17mzfop`,
                                      fonts: [`Inter`],
                                      layoutDependency: F,
                                      layoutId: `QUr3eP1I9`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...Q(
                                        {
                                          ghXyy9Iod: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Materials`,
                                              }),
                                            }),
                                          },
                                          u6XSFpBJ3: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Materials`,
                                              }),
                                            }),
                                          },
                                          WlQ34uL9U: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Materials`,
                                              }),
                                            }),
                                          },
                                          YqlqRNvZi: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Materials`,
                                              }),
                                            }),
                                          },
                                        },
                                        D,
                                        A
                                      ),
                                    }),
                                    /*#__PURE__*/ f(Y, {
                                      animated: !0,
                                      className: `framer-nvxi7o`,
                                      layoutDependency: F,
                                      layoutId: `sSRTHB9hQ`,
                                      style: {
                                        "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                        "--js9iwy": 2,
                                      },
                                    }),
                                  ],
                                }),
                              }),
                              /*#__PURE__*/ f(I, {
                                href: { webPageId: `WiWpK4bRq` },
                                motionChild: !0,
                                nodeId: `kb89vQcCz`,
                                scopeId: `nd41GKYX6`,
                                children: /*#__PURE__*/ d(b.a, {
                                  className: `framer-12mfpkp framer-16cj4bj`,
                                  "data-border": !0,
                                  "data-framer-name": `Projects`,
                                  layoutDependency: F,
                                  layoutId: `kb89vQcCz`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                    "--border-left-width": `0px`,
                                    "--border-right-width": `0px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `0px`,
                                  },
                                  ...Q(
                                    {
                                      u6XSFpBJ3: { "data-highlight": !0, onTap: W },
                                      YqlqRNvZi: { "data-highlight": !0, onTap: G },
                                    },
                                    D,
                                    A
                                  ),
                                  children: [
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-11icc16`,
                                          "data-styles-preset": `S7RFNqxzH`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                          },
                                          children: `Projects`,
                                        }),
                                      }),
                                      className: `framer-10vx8c6`,
                                      fonts: [`Inter`],
                                      layoutDependency: F,
                                      layoutId: `QAiQxEXud`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...Q(
                                        {
                                          ghXyy9Iod: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Projects`,
                                              }),
                                            }),
                                          },
                                          u6XSFpBJ3: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Projects`,
                                              }),
                                            }),
                                          },
                                          WlQ34uL9U: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Projects`,
                                              }),
                                            }),
                                          },
                                          YqlqRNvZi: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Projects`,
                                              }),
                                            }),
                                          },
                                        },
                                        D,
                                        A
                                      ),
                                    }),
                                    /*#__PURE__*/ f(Y, {
                                      animated: !0,
                                      className: `framer-10kv2on`,
                                      layoutDependency: F,
                                      layoutId: `dAJa_OWIE`,
                                      style: {
                                        "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                        "--js9iwy": 2,
                                      },
                                    }),
                                  ],
                                }),
                              }),
                              /*#__PURE__*/ f(I, {
                                href: { webPageId: `Ex3jmBT8v` },
                                motionChild: !0,
                                nodeId: `whTNMNOeL`,
                                scopeId: `nd41GKYX6`,
                                children: /*#__PURE__*/ d(b.a, {
                                  className: `framer-186f3b3 framer-16cj4bj`,
                                  "data-border": !0,
                                  "data-framer-name": `About`,
                                  layoutDependency: F,
                                  layoutId: `whTNMNOeL`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                    "--border-left-width": `0px`,
                                    "--border-right-width": `0px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `0px`,
                                  },
                                  ...Q(
                                    {
                                      u6XSFpBJ3: { "data-highlight": !0, onTap: W },
                                      YqlqRNvZi: { "data-highlight": !0, onTap: G },
                                    },
                                    D,
                                    A
                                  ),
                                  children: [
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-11icc16`,
                                          "data-styles-preset": `S7RFNqxzH`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                          },
                                          children: `About`,
                                        }),
                                      }),
                                      className: `framer-12hp05z`,
                                      fonts: [`Inter`],
                                      layoutDependency: F,
                                      layoutId: `oE1GMUMi2`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...Q(
                                        {
                                          ghXyy9Iod: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `About`,
                                              }),
                                            }),
                                          },
                                          u6XSFpBJ3: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `About`,
                                              }),
                                            }),
                                          },
                                          WlQ34uL9U: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `About`,
                                              }),
                                            }),
                                          },
                                          YqlqRNvZi: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `About`,
                                              }),
                                            }),
                                          },
                                        },
                                        D,
                                        A
                                      ),
                                    }),
                                    /*#__PURE__*/ f(Y, {
                                      animated: !0,
                                      className: `framer-1lvswp7`,
                                      layoutDependency: F,
                                      layoutId: `FregCe8NK`,
                                      style: {
                                        "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                        "--js9iwy": 2,
                                      },
                                    }),
                                  ],
                                }),
                              }),
                              /*#__PURE__*/ f(I, {
                                href: { webPageId: `NbWyEb_lH` },
                                motionChild: !0,
                                nodeId: `OintMULVJ`,
                                scopeId: `nd41GKYX6`,
                                children: /*#__PURE__*/ d(b.a, {
                                  className: `framer-1rnutgu framer-16cj4bj`,
                                  "data-border": !0,
                                  "data-framer-name": `Roof notes`,
                                  layoutDependency: F,
                                  layoutId: `OintMULVJ`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                    "--border-left-width": `0px`,
                                    "--border-right-width": `0px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `0px`,
                                  },
                                  ...Q(
                                    {
                                      u6XSFpBJ3: { "data-highlight": !0, onTap: W },
                                      YqlqRNvZi: { "data-highlight": !0, onTap: G },
                                    },
                                    D,
                                    A
                                  ),
                                  children: [
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-11icc16`,
                                          "data-styles-preset": `S7RFNqxzH`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                          },
                                          children: `Building notes`,
                                        }),
                                      }),
                                      className: `framer-p70mkt`,
                                      fonts: [`Inter`],
                                      layoutDependency: F,
                                      layoutId: `CY9WWGCUQ`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...Q(
                                        {
                                          ghXyy9Iod: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Building notes`,
                                              }),
                                            }),
                                          },
                                          u6XSFpBJ3: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Building notes`,
                                              }),
                                            }),
                                          },
                                          WlQ34uL9U: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Building notes`,
                                              }),
                                            }),
                                          },
                                          YqlqRNvZi: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Building notes`,
                                              }),
                                            }),
                                          },
                                        },
                                        D,
                                        A
                                      ),
                                    }),
                                    /*#__PURE__*/ f(Y, {
                                      animated: !0,
                                      className: `framer-1voswut`,
                                      layoutDependency: F,
                                      layoutId: `shZRRUm_9`,
                                      style: {
                                        "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                        "--js9iwy": 2,
                                      },
                                    }),
                                  ],
                                }),
                              }),
                              /*#__PURE__*/ f(I, {
                                href: { webPageId: `nrqqIZ5lY` },
                                motionChild: !0,
                                nodeId: `B2LNih0gL`,
                                scopeId: `nd41GKYX6`,
                                children: /*#__PURE__*/ d(b.a, {
                                  className: `framer-15npnfe framer-16cj4bj`,
                                  "data-border": !0,
                                  "data-framer-name": `Contact`,
                                  layoutDependency: F,
                                  layoutId: `B2LNih0gL`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-b56b0928-74bd-4162-b937-f92541288cb8)`,
                                    "--border-left-width": `0px`,
                                    "--border-right-width": `0px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `0px`,
                                  },
                                  ...Q(
                                    {
                                      u6XSFpBJ3: { "data-highlight": !0, onTap: W },
                                      YqlqRNvZi: { "data-highlight": !0, onTap: G },
                                    },
                                    D,
                                    A
                                  ),
                                  children: [
                                    /*#__PURE__*/ f(V, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ f(o, {
                                        children: /*#__PURE__*/ f(b.p, {
                                          className: `framer-styles-preset-11icc16`,
                                          "data-styles-preset": `S7RFNqxzH`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                          },
                                          children: `Contact`,
                                        }),
                                      }),
                                      className: `framer-1qgn6cy`,
                                      fonts: [`Inter`],
                                      layoutDependency: F,
                                      layoutId: `AAfHRq_e6`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...Q(
                                        {
                                          ghXyy9Iod: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Contact`,
                                              }),
                                            }),
                                          },
                                          u6XSFpBJ3: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Contact`,
                                              }),
                                            }),
                                          },
                                          WlQ34uL9U: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Contact`,
                                              }),
                                            }),
                                          },
                                          YqlqRNvZi: {
                                            children: /*#__PURE__*/ f(o, {
                                              children: /*#__PURE__*/ f(b.p, {
                                                className: `framer-styles-preset-11icc16`,
                                                "data-styles-preset": `S7RFNqxzH`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                                },
                                                children: `Contact`,
                                              }),
                                            }),
                                          },
                                        },
                                        D,
                                        A
                                      ),
                                    }),
                                    /*#__PURE__*/ f(Y, {
                                      animated: !0,
                                      className: `framer-9h1o6w`,
                                      layoutDependency: F,
                                      layoutId: `IHPtIIHcO`,
                                      style: {
                                        "--1m973uw": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                                        "--js9iwy": 2,
                                      },
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ f(b.div, {
                            className: `framer-1rrnjvl`,
                            "data-framer-name": `Space`,
                            layoutDependency: F,
                            layoutId: `HPERvCMqe`,
                          }),
                          /*#__PURE__*/ f(b.div, {
                            className: `framer-10qhdwi`,
                            "data-framer-name": `Book Wrap`,
                            layoutDependency: F,
                            layoutId: `uYvwK0vnn`,
                            ...Q(
                              {
                                u6XSFpBJ3: { "data-highlight": !0, onTap: W },
                                YqlqRNvZi: { "data-highlight": !0, onTap: G },
                              },
                              D,
                              A
                            ),
                            children: /*#__PURE__*/ f(L, {
                              height: 50,
                              ...Q(
                                {
                                  ghXyy9Iod: {
                                    width: `calc(${p?.width || `100vw`} - 51.84px)`,
                                    y: (p?.y || 0) + 569.4,
                                  },
                                  u6XSFpBJ3: {
                                    width: `calc(${p?.width || `100vw`} - 51.84px)`,
                                    y: (p?.y || 0) + 575.4,
                                  },
                                  WlQ34uL9U: {
                                    width: `calc(${p?.width || `100vw`} - 32px)`,
                                    y: (p?.y || 0) + 561.4,
                                  },
                                  YqlqRNvZi: {
                                    width: `calc(${p?.width || `100vw`} - 32px)`,
                                    y: (p?.y || 0) + 567.4,
                                  },
                                },
                                D,
                                A
                              ),
                              children: /*#__PURE__*/ f(N, {
                                className: `framer-1492j26-container`,
                                layoutDependency: F,
                                layoutId: `XKvf91Mo7-container`,
                                nodeId: `XKvf91Mo7`,
                                rendersWithMotion: !0,
                                scopeId: `nd41GKYX6`,
                                children: /*#__PURE__*/ f(X, {
                                  A7Od1mPPH: !1,
                                  height: `100%`,
                                  id: `XKvf91Mo7`,
                                  KLKq8yi1U: S,
                                  l9aoY6pHx: `Discuss your project`,
                                  layoutId: `XKvf91Mo7`,
                                  SbaAZw1tX: !0,
                                  style: { height: `100%`, width: `100%` },
                                  variant: Gr(`FU9NK2rv7`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          /*#__PURE__*/ f(b.div, {
                            className: `framer-b7l50q`,
                            "data-framer-name": `Space`,
                            layoutDependency: F,
                            layoutId: `wWNDTMSMv`,
                          }),
                          /*#__PURE__*/ f(V, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ f(o, {
                              children: /*#__PURE__*/ d(b.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURRMU1BPT0=`,
                                  "--framer-font-family": `"Manrope Variable", "Manrope Variable Placeholder", sans-serif`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                  "--framer-letter-spacing": `-0.0172em`,
                                  "--framer-line-height": `1.6433em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97))`,
                                },
                                children: [
                                  /*#__PURE__*/ f(b.span, {
                                    style: { "--framer-letter-spacing": `-0.0141em` },
                                    children: `Storm line 24/7 · `,
                                  }),
                                  /*#__PURE__*/ f(I, {
                                    href: `tel:+14065550142`,
                                    motionChild: !0,
                                    nodeId: `UHrM0Ol6y`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `nd41GKYX6`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ f(b.a, {
                                      className: `framer-styles-preset-86p87r`,
                                      "data-styles-preset": `jgWI_nY2K`,
                                      children: /*#__PURE__*/ f(b.span, {
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS12YXJpYWJsZVZGPUluZG5hSFFpSURZd01BPT0=`,
                                          "--framer-font-variation-axes": `var(--extracted-1uk3da5, "wght" 600)`,
                                          "--framer-letter-spacing": `-0.0176em`,
                                          "--framer-text-color": `var(--extracted-zp3slp, var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9))`,
                                        },
                                        children: `(406) 555-0142`,
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ f(b.br, {}),
                                  `hello@haldenroofing.example`,
                                ],
                              }),
                            }),
                            className: `framer-1703zp6`,
                            "data-framer-name": `Meta`,
                            fonts: [`FS;Manrope-variable`],
                            layoutDependency: F,
                            layoutId: `UHrM0Ol6y`,
                            style: {
                              "--extracted-1uk3da5": `"wght" 600`,
                              "--extracted-2gg91v": `"wght" 450`,
                              "--extracted-r6o4lv": `var(--token-361b0604-f4ca-45c0-a5a9-5a63448ece97)`,
                              "--extracted-zp3slp": `var(--token-69114513-f0b1-40e3-b0f0-b5943b0445f9)`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          })
        );
      })),
      ($r = [
        `.framer-ptjoH.framer-16cj4bj, .framer-ptjoH .framer-16cj4bj { display: block; }`,
        `.framer-ptjoH.framer-1c5lu9v { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-ptjoH .framer-6v4abw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 38px; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ptjoH .framer-1qn9lva { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 38px; justify-content: space-between; max-width: 1356.8px; padding: 0px 38.4px 0px 38.4px; position: relative; width: 1px; }`,
        `.framer-ptjoH .framer-2urg0z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ptjoH .framer-1wdml30 { flex: none; height: 7px; overflow: visible; position: relative; width: 7px; }`,
        `.framer-ptjoH .framer-i3vq1r { flex: none; height: 7px; left: 0px; position: absolute; top: 0px; width: 7px; }`,
        `.framer-ptjoH .framer-7ok8nh, .framer-ptjoH .framer-1vbcu6y, .framer-ptjoH .framer-107r1a3, .framer-ptjoH .framer-av9m41, .framer-ptjoH .framer-1v6oy0z, .framer-ptjoH .framer-jmmr9q, .framer-ptjoH .framer-pzc3o4, .framer-ptjoH .framer-6a23kx, .framer-ptjoH .framer-1m664q5, .framer-ptjoH .framer-1yorckl, .framer-ptjoH .framer-1ezzauj, .framer-ptjoH .framer-1w49pa0, .framer-ptjoH .framer-1ifr9fp, .framer-ptjoH .framer-1n46f3l, .framer-ptjoH .framer-14wa8ng, .framer-ptjoH .framer-17mzfop, .framer-ptjoH .framer-10vx8c6, .framer-ptjoH .framer-12hp05z, .framer-ptjoH .framer-p70mkt, .framer-ptjoH .framer-1qgn6cy { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ptjoH .framer-6abadf, .framer-ptjoH .framer-ijdhf4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ptjoH .framer-ay0476 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 0px 0px 19px; position: relative; width: min-content; }`,
        `.framer-ptjoH .framer-uftkgl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 73px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ptjoH .framer-6s0vsc { bottom: 0px; flex: none; height: 1px; left: 0px; position: absolute; right: 0px; }`,
        `.framer-ptjoH .framer-yjkefc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 72px; justify-content: flex-start; max-width: 1356.8px; padding: 0px 38.4px 0px 38.4px; position: relative; width: 100%; }`,
        `.framer-ptjoH .framer-p6r810 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ptjoH .framer-1uw3xm7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-ptjoH .framer-1mz5iag { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 3px 0px 0px; position: relative; width: min-content; }`,
        `.framer-ptjoH .framer-1wndaz9 { flex: none; height: 28px; position: relative; width: 28px; }`,
        `.framer-ptjoH .framer-63xdv4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 4.6px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-ptjoH .framer-1ujb8oj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ptjoH .framer-6smrcf { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 40px; justify-content: flex-start; padding: 0px 13px 0px 13px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-ptjoH .framer-1nlu9ed { flex: none; height: auto; position: relative; width: 16px; }`,
        `.framer-ptjoH .framer-1prlws6, .framer-ptjoH .framer-18t3e0b, .framer-ptjoH .framer-1b37a2x, .framer-ptjoH .framer-tz7em4, .framer-ptjoH .framer-f03va1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 40px; justify-content: flex-start; padding: 0px 13px 0px 13px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-ptjoH .framer-jjqsf9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ptjoH .framer-w8hwu4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; padding: 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-ptjoH .framer-3ul9xr { flex: none; height: auto; position: relative; width: 17px; }`,
        `.framer-ptjoH .framer-18tcrwv-container { flex: none; height: 44px; position: relative; width: auto; }`,
        `.framer-ptjoH .framer-1xbl211 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 9px; height: 44px; justify-content: flex-start; padding: 0px 15px 0px 15px; position: relative; width: min-content; }`,
        `.framer-ptjoH .framer-mrmxrs { flex: none; height: 10px; position: relative; width: 16px; }`,
        `.framer-ptjoH .framer-1ofbhxn { flex: none; height: 2px; left: 0px; position: absolute; top: 0px; width: 16px; }`,
        `.framer-ptjoH .framer-5iit6f { flex: none; height: 2px; left: 0px; position: absolute; top: 8px; width: 16px; }`,
        `.framer-ptjoH .framer-25pxk2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 0px; padding: 0px; pointer-events: none; position: absolute; right: 0px; top: 105px; }`,
        `.framer-ptjoH .framer-19unmj5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; max-width: 1356.8px; padding: 28px 38.4px 35px 38.4px; position: relative; width: 1px; }`,
        `.framer-ptjoH .framer-1u12362 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1.4 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 1px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-ptjoH .framer-1s295ma-container, .framer-ptjoH .framer-1cvtkj-container, .framer-ptjoH .framer-j8ws7m-container, .framer-ptjoH .framer-gp0y4b-container, .framer-ptjoH .framer-14qw7sk-container, .framer-ptjoH .framer-14t9a0m-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ptjoH .framer-gxb844, .framer-ptjoH .framer-1id7lh2 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 326px; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ptjoH .framer-jyek9s, .framer-ptjoH .framer-86gzy7 { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-ptjoH .framer-12hzgid, .framer-ptjoH .framer-5txt67 { bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; }`,
        `.framer-ptjoH .framer-11rkox4, .framer-ptjoH .framer-x07zxi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; padding: 18px; pointer-events: none; position: relative; width: 100%; }`,
        `.framer-ptjoH .framer-1107q8f, .framer-ptjoH .framer-1ha8gje, .framer-ptjoH .framer-1rciicr, .framer-ptjoH .framer-1klf1on, .framer-ptjoH .framer-1703zp6 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ptjoH .framer-9kadha { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: calc(var(--framer-viewport-height, 100vh) * 1); justify-content: flex-start; left: 0px; overflow: auto; padding: 1px 25.92px 32px 25.92px; position: absolute; right: 0px; top: 110px; }`,
        `.framer-ptjoH .framer-8o48y9, .framer-ptjoH .framer-10qhdwi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ptjoH .framer-1nueuml, .framer-ptjoH .framer-vqyoyc, .framer-ptjoH .framer-12mfpkp, .framer-ptjoH .framer-186f3b3, .framer-ptjoH .framer-1rnutgu, .framer-ptjoH .framer-15npnfe { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 17px 2px 18px 2px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-ptjoH .framer-o2thuy, .framer-ptjoH .framer-nvxi7o, .framer-ptjoH .framer-10kv2on, .framer-ptjoH .framer-1lvswp7, .framer-ptjoH .framer-1voswut, .framer-ptjoH .framer-9h1o6w { flex: none; height: auto; position: relative; width: 22px; }`,
        `.framer-ptjoH .framer-1rrnjvl { flex: none; height: 24px; position: relative; width: 100%; }`,
        `.framer-ptjoH .framer-1492j26-container { flex: none; height: 50px; position: relative; width: 100%; }`,
        `.framer-ptjoH .framer-b7l50q { flex: none; height: 20px; position: relative; width: 100%; }`,
        `.framer-ptjoH.framer-v-n0mpxg .framer-25pxk2 { pointer-events: auto; top: 111px; }`,
        `.framer-ptjoH.framer-v-1a8a44f.framer-1c5lu9v, .framer-ptjoH.framer-v-1c1tozd.framer-1c5lu9v { width: 810px; }`,
        `.framer-ptjoH.framer-v-1a8a44f .framer-1qn9lva, .framer-ptjoH.framer-v-1a8a44f .framer-yjkefc, .framer-ptjoH.framer-v-1c1tozd .framer-1qn9lva, .framer-ptjoH.framer-v-1c1tozd .framer-yjkefc { padding: 0px 25.92px 0px 25.92px; }`,
        `.framer-ptjoH.framer-v-1a8a44f .framer-9kadha { pointer-events: none; top: 104px; }`,
        `.framer-ptjoH.framer-v-1c1tozd .framer-1ofbhxn, .framer-ptjoH.framer-v-1c1tozd .framer-5iit6f, .framer-ptjoH.framer-v-zmi4sf .framer-1ofbhxn, .framer-ptjoH.framer-v-zmi4sf .framer-5iit6f { top: 4px; }`,
        `.framer-ptjoH.framer-v-1c1tozd .framer-9kadha { pointer-events: auto; }`,
        `.framer-ptjoH.framer-v-1c1tozd .framer-10qhdwi, .framer-ptjoH.framer-v-zmi4sf .framer-10qhdwi { cursor: pointer; }`,
        `.framer-ptjoH.framer-v-15g2nsm.framer-1c5lu9v, .framer-ptjoH.framer-v-zmi4sf.framer-1c5lu9v { width: 390px; }`,
        `.framer-ptjoH.framer-v-15g2nsm .framer-1qn9lva, .framer-ptjoH.framer-v-zmi4sf .framer-1qn9lva { justify-content: center; padding: 0px 16px 0px 16px; }`,
        `.framer-ptjoH.framer-v-15g2nsm .framer-uftkgl, .framer-ptjoH.framer-v-zmi4sf .framer-uftkgl { height: 65px; }`,
        `.framer-ptjoH.framer-v-15g2nsm .framer-yjkefc, .framer-ptjoH.framer-v-zmi4sf .framer-yjkefc { gap: 12px; height: 64px; padding: 0px 16px 0px 16px; }`,
        `.framer-ptjoH.framer-v-15g2nsm .framer-ijdhf4, .framer-ptjoH.framer-v-zmi4sf .framer-ijdhf4 { gap: 8px; }`,
        `.framer-ptjoH.framer-v-15g2nsm .framer-w8hwu4, .framer-ptjoH.framer-v-zmi4sf .framer-w8hwu4 { gap: 0px; height: 44px; width: 44px; }`,
        `.framer-ptjoH.framer-v-15g2nsm .framer-3ul9xr, .framer-ptjoH.framer-v-zmi4sf .framer-3ul9xr { width: 18px; }`,
        `.framer-ptjoH.framer-v-15g2nsm .framer-9kadha { padding: 1px 16px 32px 16px; pointer-events: none; top: 96px; }`,
        `.framer-ptjoH.framer-v-zmi4sf .framer-9kadha { padding: 1px 16px 32px 16px; pointer-events: auto; top: 102px; }`,
        ...Ye,
        ...gn,
        ...Yn,
        ...Gn,
        ...An,
        ...xn,
        ...Bn,
        ...Fn,
        ...Tn,
        `.framer-ptjoH[data-border="true"]::after, .framer-ptjoH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      ($ = j(Qr, $r, `framer-ptjoH`)),
      ($.displayName = `Site Header`),
      ($.defaultProps = { height: 111, width: 1200 }),
      A($, {
        variant: {
          options: [`RpHSZINOh`, `e_QVsCn2E`, `ghXyy9Iod`, `u6XSFpBJ3`, `WlQ34uL9U`, `YqlqRNvZi`],
          optionTitles: [
            `Desktop`,
            `Desktop Services`,
            `Tablet`,
            `Tablet Menu`,
            `Phone`,
            `Phone Menu`,
          ],
          title: `Variant`,
          type: z.Enum,
        },
        yDKIu6Vf7: { defaultValue: !1, title: `Scrolled`, type: z.Boolean },
        onyDKIu6Vf7Change: { changes: `yDKIu6Vf7`, type: z.ChangeHandler },
        tKpQBEUt4: { title: `Book Link`, type: z.Link },
      }),
      T(
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
          ...jr,
          ...Mr,
          ...Nr,
          ...Pr,
          ...Fr,
          ...U(Je),
          ...U(hn),
          ...U(Jn),
          ...U(Wn),
          ...U(kn),
          ...U(bn),
          ...U(zn),
          ...U(Pn),
          ...U(wn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) =>
          B(
            [
              () => O(X, {}, t),
              () => O(Z, {}, t),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`ofJC7h_jM`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`jkBHcuwuq`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`m7vmN2vm5`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`s3aYe7sdM`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`N4_4utRrp`, t.locale),
              () => t.collectionUtils?.get(`eHfc5JU5K`)?.getSlugByRecordId(`DCOICLA27`, t.locale),
            ],
            t
          ),
      }),
      (ei = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `Framernd41GKYX6`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `1200`,
              framerIntrinsicHeight: `111`,
              framerContractVersion: `1`,
              framerImmutableVariables: `true`,
              framerDisplayContentsDiv: `false`,
              framerColorSyntax: `true`,
              framerAutoSizeImages: `true`,
              framerVariables: `{"yDKIu6Vf7":"scrolled","tKpQBEUt4":"bookLink"}`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"e_QVsCn2E":{"layout":["fixed","auto"]},"ghXyy9Iod":{"layout":["fixed","auto"]},"u6XSFpBJ3":{"layout":["fixed","auto"]},"WlQ34uL9U":{"layout":["fixed","auto"]},"YqlqRNvZi":{"layout":["fixed","auto"]}}}`,
              framerComponentViewportWidth: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
function ni(e) {
  return /*#__PURE__*/ p((t, n) => {
    let r = l(null),
      [i, a] = c(0);
    g(() => {
      let e = !1,
        t = () => {
          ((e = !1), a(s.scrollY));
        },
        n = () => {
          e || ((e = !0), requestAnimationFrame(t));
        };
      (t(), addEventListener(`scroll`, n, { passive: !0 }));
      let i = !1,
        o = new MutationObserver(() => {
          let e = r.current?.querySelector(`[data-framer-name="Menu Panel"]`),
            t =
              !!e &&
              getComputedStyle(e).pointerEvents !== `none` &&
              getComputedStyle(e).opacity !== `0` &&
              e.offsetParent !== null;
          document.documentElement.style.overflow = t ? `hidden` : ``;
          let n = s.lenis;
          (n && t !== i && (t ? n.stop() : n.start()), (i = t));
          let a = r.current?.querySelector(`[data-framer-name="Mega"]`);
          if (a) {
            let e =
              getComputedStyle(a).opacity === `0` || getComputedStyle(a).pointerEvents === `none`;
            e !== a.hasAttribute(`inert`) &&
              (e ? a.setAttribute(`inert`, ``) : a.removeAttribute(`inert`));
          }
        });
      r.current &&
        o.observe(r.current, { subtree: !0, attributes: !0, attributeFilter: [`class`, `style`] });
      let c = r.current?.querySelector(`[data-framer-name="Mega"]`);
      return (
        c && getComputedStyle(c).opacity === `0` && c.setAttribute(`inert`, ``),
        () => {
          (removeEventListener(`scroll`, n),
            o.disconnect(),
            (document.documentElement.style.overflow = ``));
        }
      );
    }, []);
    let o = Math.min(Math.max(i, 0), ii);
    return /*#__PURE__*/ f(`div`, {
      ref: r,
      style: { display: `contents` },
      children: /*#__PURE__*/ f(e, {
        ...t,
        ref: n,
        scrolled: i > 8,
        style: { ...t.style, translate: `0 ${-o}px` },
      }),
    });
  });
}
function ri(e) {
  return /*#__PURE__*/ p((t, n) => {
    let [r, i] = c(!1);
    return (
      g(() => {
        let e = document.querySelector(`[data-framer-name="Hero"]`);
        if (!e) return;
        let t = new IntersectionObserver(([e]) => i(e.isIntersecting), { threshold: 0.25 });
        return (t.observe(e), () => t.disconnect());
      }, []),
      /*#__PURE__*/ f(e, {
        ...t,
        ref: n,
        style: {
          ...t.style,
          opacity: +!r,
          translate: r ? `0 8px` : `0 0`,
          visibility: r ? `hidden` : `visible`,
          pointerEvents: r ? `none` : void 0,
          transition: r
            ? `opacity .35s ease, translate .35s ease, visibility 0s .35s`
            : `opacity .35s ease, translate .35s ease, visibility 0s`,
        },
      })
    );
  });
}
var ii;
function ai() {
  return (ai = t(() => {
    (a(), m(), h(), (ii = 38));
  }))();
}
var oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti;
function Ei() {
  return (Ei = t(() => {
    (m(),
      D(),
      y(),
      h(),
      Ut(),
      ti(),
      ai(),
      (oi = M($)),
      (si = ae($, { nodeId: `YGomYKVJq`, override: ni, scopeId: `s7RTWfKiF` })),
      (ci = k(si, kr)),
      (li = M(J)),
      (ui = ae(b.a, { nodeId: `FTYJoIETJ`, override: ri, scopeId: `s7RTWfKiF` })),
      (di = {
        DMkmWIWou: `(min-width: 810px) and (max-width: 1199.98px)`,
        EPplo1fXB: `(max-width: 809.98px)`,
        jambOROgE: `(min-width: 1200px)`,
      }),
      (fi = `framer-LUZeW`),
      (pi = {
        DMkmWIWou: `framer-v-v883xu`,
        EPplo1fXB: `framer-v-9jjn6z`,
        jambOROgE: `framer-v-1ws2jxl`,
      }),
      (mi = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (hi = {
        EPplo1fXB: [
          `.framer-LUZeW .framer-1yxfl7z-container { height: 103px; }`,
          `.framer-LUZeW .framer-1icakwy { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 12px); gap: 6px; height: 32px; padding: 0px 11px 0px 9px; right: 12px; }`,
          `.framer-LUZeW .framer-yh3zkf { height: 13px; width: 13px; }`,
        ],
      }),
      (gi = Object.keys(hi)),
      (_i = { EPplo1fXB: `.framer-9jjn6z-override` }),
      (vi = [
        `.framer-LUZeW.framer-16vhe5r, .framer-LUZeW .framer-16vhe5r { display: block; }`,
        `.framer-LUZeW.framer-1ws2jxl { align-content: center; align-items: center; background-color: var(--token-fc407ca5-cece-4c23-8107-7bec514252d8); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-LUZeW .framer-1yxfl7z-container { flex: none; height: 111px; left: 0px; order: -1000; position: var(--framer-canvas-fixed-position, fixed); right: 0px; top: 0px; z-index: 10; }`,
        `.framer-LUZeW .framer-1y7gc5q { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-LUZeW .framer-49zbar { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; order: 1002; padding: 12px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-LUZeW .framer-csoj2n-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-LUZeW .framer-1icakwy { align-content: center; align-items: center; background-color: var(--token-571d0275-548e-46dc-a0e1-ca98ff460da3); border-bottom-left-radius: 9px; border-bottom-right-radius: 9px; border-top-left-radius: 9px; border-top-right-radius: 9px; bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 16px); box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.06), 0px 1px 2px 0px rgba(0, 0, 0, 0.08), 0px 4px 14px 0px rgba(0, 0, 0, 0.1); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: 34px; justify-content: flex-start; order: 1003; padding: 0px 12px 0px 10px; position: var(--framer-canvas-fixed-position, fixed); right: 16px; text-decoration: none; width: min-content; z-index: 10; }`,
        `.framer-LUZeW .framer-yh3zkf { flex: none; height: 14px; position: relative; width: 14px; }`,
        `.framer-LUZeW .framer-pl9ys6 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (yi = {
        DMkmWIWou: `(min-width: 810px) and (max-width: 1199.98px)`,
        EPplo1fXB: `(max-width: 809.98px)`,
        jambOROgE: `(min-width: 1200px)`,
      }),
      (bi = { Desktop: `jambOROgE`, Phone: `EPplo1fXB`, Tablet: `DMkmWIWou` }),
      (xi = ({ value: e }) =>
        ie()
          ? null
          : /*#__PURE__*/ f(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Si = ({ bookLink: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        A0Y9b_Avv: e ?? i.A0Y9b_Avv,
        variant: bi[i.variant] ?? i.variant ?? `jambOROgE`,
      })),
      (Ci = /*#__PURE__*/ p(function (e, t) {
        let n = l(null),
          i = t ?? n;
        r();
        let { activeLocale: a, contentLocale: s, setLocale: c } = ue(),
          {
            style: u,
            className: p,
            layoutId: m,
            variant: h,
            A0Y9b_Avv: g,
            children: v,
            ...y
          } = Si(e),
          [S, w] = se(h, di, !1),
          T = x(fi);
        return (
          ne({}),
          /*#__PURE__*/ f(F.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: bi,
              isLayoutTemplate: !0,
              primaryVariantId: `jambOROgE`,
              variantClassNames: pi,
            },
            children: /*#__PURE__*/ d(_, {
              id: m ?? `s7RTWfKiF`,
              children: [
                /*#__PURE__*/ f(xi, {
                  value: `:root body { background: var(--token-fc407ca5-cece-4c23-8107-7bec514252d8); }`,
                }),
                /*#__PURE__*/ d(b.div, {
                  ...y,
                  className: x(T, `framer-1ws2jxl`, p),
                  "data-layout-template": !0,
                  ref: i,
                  style: { ...u },
                  children: [
                    /*#__PURE__*/ f(H, {
                      breakpoint: S,
                      overrides: { EPplo1fXB: { height: 103 } },
                      children: /*#__PURE__*/ f(L, {
                        height: 111,
                        width: `100vw`,
                        y: 0,
                        children: /*#__PURE__*/ f(te, {
                          className: `framer-1yxfl7z-container`,
                          "data-framer-name": `Header`,
                          layoutScroll: !0,
                          name: `Header`,
                          nodeId: `YGomYKVJq`,
                          rendersWithMotion: !0,
                          scopeId: `s7RTWfKiF`,
                          children: /*#__PURE__*/ f(H, {
                            breakpoint: S,
                            overrides: {
                              DMkmWIWou: { variant: mi(`ghXyy9Iod`) },
                              EPplo1fXB: { variant: mi(`WlQ34uL9U`) },
                            },
                            children: /*#__PURE__*/ f(ci, {
                              height: `100%`,
                              id: `YGomYKVJq`,
                              layoutId: `YGomYKVJq`,
                              name: `Header`,
                              style: { height: `100%`, width: `100%` },
                              tKpQBEUt4: g,
                              variant: mi(`RpHSZINOh`),
                              width: `100%`,
                              yDKIu6Vf7: !1,
                            }),
                          }),
                        }),
                      }),
                    }),
                    v,
                    /*#__PURE__*/ f(`div`, { className: `framer-1y7gc5q` }),
                    /*#__PURE__*/ f(b.div, {
                      className: `framer-49zbar`,
                      "data-framer-name": `Footer Wrap`,
                      children: /*#__PURE__*/ f(L, {
                        height: 819,
                        width: `100vw`,
                        y: 1012,
                        children: /*#__PURE__*/ f(te, {
                          className: `framer-csoj2n-container`,
                          "data-framer-name": `Footer`,
                          name: `Footer`,
                          nodeId: `W9f3w7wPA`,
                          scopeId: `s7RTWfKiF`,
                          children: /*#__PURE__*/ f(H, {
                            breakpoint: S,
                            overrides: {
                              DMkmWIWou: { variant: mi(`Ud0VlDtyf`) },
                              EPplo1fXB: { variant: mi(`qYRUlC3wL`) },
                            },
                            children: /*#__PURE__*/ f(J, {
                              height: `100%`,
                              id: `W9f3w7wPA`,
                              layoutId: `W9f3w7wPA`,
                              name: `Footer`,
                              style: { width: `100%` },
                              variant: mi(`cbh2LoKnv`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ f(I, {
                      href: `https://visuvate.com/`,
                      motionChild: !0,
                      nodeId: `FTYJoIETJ`,
                      openInNewTab: !0,
                      scopeId: `s7RTWfKiF`,
                      children: /*#__PURE__*/ d(ui, {
                        "aria-label": `Built by Visuvate (opens in a new tab)`,
                        className: `framer-1icakwy framer-16vhe5r`,
                        "data-framer-name": `Built by Visuvate`,
                        children: [
                          /*#__PURE__*/ f(H, {
                            breakpoint: S,
                            overrides: {
                              EPplo1fXB: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: C(965.5),
                                  pixelHeight: 54,
                                  pixelWidth: 54,
                                  sizes: `13px`,
                                  src: `../../assets/images/6KkhELAdJSOoyH9huYeHgod6c88.svg`,
                                },
                              },
                            },
                            children: /*#__PURE__*/ f(oe, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: C(960),
                                pixelHeight: 54,
                                pixelWidth: 54,
                                sizes: `14px`,
                                src: `../../assets/images/6KkhELAdJSOoyH9huYeHgod6c88.svg`,
                              },
                              className: `framer-yh3zkf`,
                              "data-framer-name": `V Mark`,
                            }),
                          }),
                          /*#__PURE__*/ f(H, {
                            breakpoint: S,
                            overrides: {
                              EPplo1fXB: {
                                children: /*#__PURE__*/ f(o, {
                                  children: /*#__PURE__*/ f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                      "--framer-font-size": `12px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-letter-spacing": `-0.0275em`,
                                      "--framer-line-height": `0.9615em`,
                                      "--framer-text-color": `var(--token-b875ad58-8dd1-436e-a339-ede5bc406279)`,
                                    },
                                    children: `Built by Visuvate`,
                                  }),
                                }),
                              },
                            },
                            children: /*#__PURE__*/ f(V, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ f(o, {
                                children: /*#__PURE__*/ f(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-size": `13px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.0275em`,
                                    "--framer-line-height": `0.9615em`,
                                    "--framer-text-color": `var(--token-b875ad58-8dd1-436e-a339-ede5bc406279)`,
                                  },
                                  children: `Built by Visuvate`,
                                }),
                              }),
                              className: `framer-pl9ys6`,
                              fonts: [`Inter-SemiBold`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (wi = (e) =>
        e !== ee.canvas && e !== ee.export
          ? [...vi, ...gi.map((e) => `@media ${yi[e]} { ${hi[e].join(` `)} }`)]
          : [
              ...vi,
              ...gi.flatMap((e) => {
                let t = _i[e];
                return hi[e].map((e) => `${t} {${e}}`);
              }),
            ]),
      (Ti = j(Ci, wi, `framer-LUZeW`)),
      (Ti.displayName = `Site`),
      (Ti.defaultProps = { height: 1e3, width: 1200 }),
      A(Ti, { A0Y9b_Avv: { title: `Book Link`, type: z.Link } }),
      T(
        Ti,
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
                url: `../../assets/fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
          ...oi,
          ...li,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Ti.loader = { load: (e, t) => B([() => O($, {}, t), () => O(J, {}, t)], t) }));
  }))();
}
export {
  Ge as $,
  gn as A,
  dt as B,
  wn as C,
  bn as D,
  xn as E,
  K as F,
  tt as G,
  at as H,
  Et as I,
  nt as J,
  et as K,
  ut as L,
  vn as M,
  Y as N,
  Cn as O,
  Xt as P,
  Ze as Q,
  lt as R,
  Tn as S,
  Sn as T,
  it as U,
  ot as V,
  st as W,
  Ye as X,
  Xe as Y,
  Je as Z,
  In as _,
  tr as a,
  Re as at,
  Ln as b,
  nr as c,
  Me as ct,
  Wn as d,
  G as dt,
  We as et,
  qn as f,
  me as ft,
  Hn as g,
  ve as gt,
  zn as h,
  _e as ht,
  vr as i,
  ze as it,
  hn as j,
  _n as k,
  Kn as l,
  Te as lt,
  Bn as m,
  ge as mt,
  Ei as n,
  Ke as nt,
  er as o,
  Ve as ot,
  Vn as p,
  he as pt,
  $e as q,
  X as r,
  Be as rt,
  $n as s,
  Oe as st,
  Ti as t,
  Ue as tt,
  Gn as u,
  xe as ut,
  Fn as v,
  Dn as w,
  En as x,
  Pn as y,
  ct as z,
};
//# sourceMappingURL=toplevel-deps.CDw6GExF.mjs.map
