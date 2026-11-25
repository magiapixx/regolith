import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  E as t,
  I as n,
  L as r,
  N as i,
  O as a,
  P as o,
  R as s,
  S as c,
  _ as l,
  a as u,
  b as d,
  d as f,
  g as p,
  h as m,
  i as h,
  n as g,
  r as _,
  t as v,
  w as y,
  y as b,
} from "./react.Dxe_2v0O.mjs";
import {
  $ as x,
  C as S,
  G as ee,
  It as te,
  J as C,
  K as w,
  Pt as ne,
  U as T,
  W as E,
  Y as D,
  Z as O,
  dt as re,
  et as ie,
  h as ae,
  it as oe,
  ot as k,
  p as A,
  rt as j,
  s as M,
  v as N,
  vt as P,
  wt as F,
  y as I,
} from "./framer.B_dFn1Dy.mjs";
import { n as L, t as R } from "./toplevel-deps.CDw6GExF.mjs";
function z({ webPageId: e, children: t, style: n, ...r }) {
  let i = { A0Y9b_Avv: { href: { hash: `:VipxOQAap`, webPageId: `augiA20Il` } } },
    a = { ...i, A0Y9b_Avv: { href: { hash: `:L5uklZlsi`, webPageId: `nrqqIZ5lY` } } },
    o = { ...i, A0Y9b_Avv: { href: { hash: `:sS2DVZt_w`, webPageId: `nrqqIZ5lY` } } },
    s =
      {
        augiA20Il: i,
        AYi6uBTDw: a,
        Ex3jmBT8v: a,
        Fytl0baD3: a,
        IJ7f1RJSs: o,
        MzTQNt8iJ: o,
        N22VkyVPW: a,
        NbWyEb_lH: a,
        nrqqIZ5lY: o,
        rKbXPm35n: a,
        tO8VmqOLs: a,
        u0GR3v9Uc: a,
        UUY6KrXpr: o,
        vWVoeWuDc: o,
        WiWpK4bRq: a,
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `N22VkyVPW`:
    case `u0GR3v9Uc`:
    case `WiWpK4bRq`:
    case `Ex3jmBT8v`:
    case `Fytl0baD3`:
    case `NbWyEb_lH`:
    case `nrqqIZ5lY`:
    case `UUY6KrXpr`:
    case `vWVoeWuDc`:
    case `MzTQNt8iJ`:
    case `IJ7f1RJSs`:
    case `tO8VmqOLs`:
    case `rKbXPm35n`:
    case `AYi6uBTDw`:
      return f(S, { links: [s.A0Y9b_Avv] }, (e) =>
        f(R, { ...s, A0Y9b_Avv: e[0], key: `Site`, style: n }, t(!0))
      );
    default:
      return t(!1);
  }
}
function B(e) {
  switch (e) {
    case `augiA20Il`:
    case `N22VkyVPW`:
    case `u0GR3v9Uc`:
    case `WiWpK4bRq`:
    case `Ex3jmBT8v`:
    case `Fytl0baD3`:
    case `NbWyEb_lH`:
    case `nrqqIZ5lY`:
    case `UUY6KrXpr`:
    case `vWVoeWuDc`:
    case `MzTQNt8iJ`:
    case `IJ7f1RJSs`:
    case `tO8VmqOLs`:
    case `rKbXPm35n`:
    case `AYi6uBTDw`:
      return [
        { hash: `1ws2jxl`, mediaQuery: `(min-width: 1200px)` },
        { hash: `v883xu`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `9jjn6z`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
function V({ routeId: e, pathVariables: t, localeId: n }) {
  return (
    (Q ??= ie({
      routes: G,
      routeId: e,
      pathVariables: t,
      localeId: n,
      locales: K,
      collectionUtils: q,
    })),
    Q
  );
}
async function H({
  routeId: e,
  pathVariables: n,
  canonicalPathVariables: r,
  localeId: i,
  collectionItemId: u,
  contentLocaleId: p,
  shouldResolveInitialRouteContentState: m = !1,
}) {
  (oe({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    j(Y));
  let g = !X && G[e].abTestingParentId ? { ...G } : G;
  g !== G && O(g, e);
  let _ = G[e].page.preload(),
    v = G[e];
  if (m && u === void 0 && v.collectionId) {
    let t = await V({ routeId: e, pathVariables: n, localeId: i });
    ((p ??= t.contentLocaleId), (r ??= t.canonicalPathVariables));
  }
  let y = f(I, {
      isWebsite: !0,
      environment: `site`,
      routeId: e,
      pathVariables: n,
      canonicalPathVariables: r,
      routes: g,
      collectionUtils: q,
      serverDatabaseClient: J,
      framerSiteId: Y,
      notFoundPage: w(() => import("./fc9ur7bCOo41RSHApMQbQtwm4UcCmQP42j6XSPKOh1M.Mca1tocl.mjs")),
      isReducedMotion: !0,
      localeId: i,
      locales: K,
      preserveQueryParams: void 0,
      siteCanonicalURL: `https://make-effect-691221.framer.app`,
      EditorBar:
        s === void 0
          ? void 0
          : (() => {
              if (Z) console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
              else
                return w(async () => {
                  s.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: re, useLocaleInfo: P, useRouter: F },
                    react: {
                      createElement: f,
                      Fragment: o,
                      memo: c,
                      useCallback: a,
                      useEffect: b,
                      useRef: d,
                      useState: l,
                      useLayoutEffect: t,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
            })(),
      adaptLayoutToTextDirection: !0,
      LayoutTemplate: z,
      loadSnippetsModule: new ae(
        () => import("./ECzMLun04em4N6sj9U4wenb-3iWlxC2tpeg5aTn_kWE.DUIg8i06.mjs")
      ),
      initialCollectionItemId: u,
      initialContentLocaleIdOverride: p,
    }),
    x = f(A, { children: y }),
    S = f(N, { children: x, value: { routes: {} } });
  return (await _, S);
}
function U() {
  X && s.__framer_events.push(arguments);
}
async function W(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || s.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    U(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, a, o, c, l, u, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (r = d.routeId),
        (a = d.localeId),
        (o = d.contentLocaleId),
        (c = d.pathVariables),
        (l = d.canonicalPathVariables),
        (u = d.breakpoints),
        (r = O(G, r)));
    else {
      O(G, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((c ??= {}), (c[e.slice(4)] = n));
      }
      if (!r || !a) {
        let e = T(G, decodeURIComponent(location.pathname), !0, K);
        ((r = e.routeId), (a = e.localeId), (c = e.pathVariables));
      }
    }
    let f = H({
      routeId: r,
      localeId: a,
      contentLocaleId: o,
      pathVariables: c,
      canonicalPathVariables: l,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    s !== void 0 &&
      (async () => {
        let e = G[r],
          t = K.find(({ id: e }) => (a ? e === a : e === "default")).code,
          n;
        n =
          d?.collectionItemId === void 0
            ? e?.collectionId
              ? await (
                  await V({ routeId: r, pathVariables: c, localeId: a })
                ).collectionItemId
              : null
            : d.collectionItemId;
        let i = Intl.DateTimeFormat().resolvedOptions(),
          o = i.timeZone,
          l = i.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          s.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Y,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: s.location.href,
              hostname: s.location.hostname || null,
              pathname: s.location.pathname || null,
              hash: s.location.hash || null,
              search: s.location.search || null,
              timezone: o,
              locale: l,
            },
            `eager`,
          ]),
          await te({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (ne(`framer-rewrite-breakpoints`, () => {
          (x(u), s.__framer_onRewriteBreakpoints?.(u));
        }),
        (Z ? (e) => e() : i)(() => {
          (D(), k(), v(t, p, { onRecoverableError: n }));
        }))
      : (await C(), _(t, { onRecoverableError: n }).render(p));
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    if (
      (n(),
      ee(),
      y(),
      u(),
      g(),
      L(),
      (G = {
        augiA20Il: {
          elements: {
            DaUtevlTY: `storm`,
            f1lrfVI0E: `journal`,
            mEuwFhqDe: `services`,
            MXAGu9jxB: `faq`,
            O0ZRNoSUB: `materials`,
            pIAypSt5l: `estimate`,
            qOqHiYaRP: `projects`,
            sZ6PNemkA: `about`,
            VipxOQAap: `contact`,
            YQkNUJ9wj: `process`,
          },
          page: w(() => import("./qYPUIM9L56KFTe_ystV1bKZGpXEwo2_nnH8I_3J9v6M.yGbxWr68.mjs")),
          path: `/`,
        },
        N22VkyVPW: {
          elements: {},
          page: w(() => import("./4kI1kNGahzYkIQ9fwIFa0HEg9u70AqJLsKV9O5M5Ow0.D3yNY6mS.mjs")),
          path: `/services`,
        },
        u0GR3v9Uc: {
          elements: {
            bYmtst5yg: `compare`,
            G9NXKN7_m: `standing-seam-steel`,
            J0UAwRmJ6: `architectural-shingle`,
            SFIcXTtRv: `natural-slate`,
            T5P5EXaJg: `stone-coated-steel-tile`,
            UEC_9oBOh: `cedar-shake`,
            ypXsP128p: `clay-tile`,
          },
          page: w(() => import("./R0SSTY1L4IXcr20YWRN7B6mTvv5EMLqMjBeWOhU97_w.O31vR3ES.mjs")),
          path: `/materials`,
        },
        WiWpK4bRq: {
          elements: {},
          page: w(() => import("./NdS5o6Uoh0Ur00_DvUtxZvtjFS0eiPDWhZHWGsDgs6I.DuYdwpe0.mjs")),
          path: `/projects`,
        },
        Ex3jmBT8v: {
          elements: { pVBxU_LCv: `crew` },
          page: w(() => import("./53BibrY1xllWAELuXhJ0EvsDpcE1hcJK0HRXG9RJpdI.DDGo1ArE.mjs")),
          path: `/about`,
        },
        Fytl0baD3: {
          elements: {},
          page: w(() => import("./13psclaoyOquc_Z-_cNXLpPF-GqEEwzXXzGyI2H0oEk.DNWqwQA7.mjs")),
          path: `/estimate`,
        },
        NbWyEb_lH: {
          elements: {},
          page: w(() => import("./zpcA5Iy8krdtbeuAVmkbtdEZTpWABm9lovV3RXIFG60.GUkt0__P.mjs")),
          path: `/roof-notes`,
        },
        nrqqIZ5lY: {
          elements: { sS2DVZt_w: `request` },
          page: w(() => import("./zCldpLYiP2fI5h_vOPB6jLT3xjxZkaCICkNKU69eBv8.BAfDYA6p.mjs")),
          path: `/contact`,
        },
        UUY6KrXpr: {
          elements: {},
          page: w(() => import("./jmyu9VrBH9-MAO4Aeo1_Kb_FhG-rnO_HU_yrPnMlIkQ.rbbxm6_V.mjs")),
          path: `/privacy`,
        },
        vWVoeWuDc: {
          elements: {},
          page: w(() => import("./nFd0XFwg5xmevyqIMMNJhGHEFdcMvn8QB3hlbgXq1C8.C_GpRJjd.mjs")),
          path: `/terms`,
        },
        MzTQNt8iJ: {
          elements: {},
          page: w(() => import("./t1poIHwEDXqMZ_9ZF9jAnZUfJQ_jlcXqXc_FZlWR0kw.CotabkdS.mjs")),
          path: `/accessibility`,
        },
        IJ7f1RJSs: {
          elements: {},
          page: w(() => import("./fc9ur7bCOo41RSHApMQbQtwm4UcCmQP42j6XSPKOh1M.Mca1tocl.mjs")),
          path: `/404`,
        },
        tO8VmqOLs: {
          collectionId: `eHfc5JU5K`,
          elements: { E29Eb8mGH: `report` },
          page: w(() => import("./SpItroXqcKcyoeCjKnfSqprWADOesHVfRAhoo83LBkc.BDCd-KOf.mjs")),
          path: `/services/:Uq4dgDOpK`,
        },
        rKbXPm35n: {
          collectionId: `vrNx7AlHT`,
          elements: { MA_h5abuW: `scope` },
          page: w(() => import("./HA09UaykMLMlO2BwW99z0NZ2pNBdUcdd7h-ME7kcAgE.Ddscsqj3.mjs")),
          path: `/projects/:v7n5zILXz`,
        },
        AYi6uBTDw: {
          collectionId: `EY9W11kVD`,
          elements: {},
          page: w(() => import("./ZyjMFALCRmi253WMD2Y9uFF1RETLK6BoorMjWFpsV1g.L0vKVMjr.mjs")),
          path: `/roof-notes/:SKNxQ4QXD`,
        },
      }),
      (K = [{ code: `en-US`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
      (q = {
        eHfc5JU5K: async () =>
          (await import("./ZHlc6abSYo2M8dDVDJlVp9gzUpcxxGugEbWGN1Lsuts.Da1n8Kwg.mjs"))?.utils,
        EY9W11kVD: async () =>
          (await import("./BA1bm1Xt3i4oXwfIbxVXwxUSgp3dGj8V19DpfBs2Jmg.C5dWFPCA.mjs"))?.utils,
        v8HGYMkJc: async () =>
          (await import("./v8HGYMkJc.DudAfiQh.mjs").then((e) => (e.n(), e.r)))?.utils,
        vrNx7AlHT: async () =>
          (await import("./O3cE7xcmPvQm7mA9P0jQ9MPj-H0AltRdEM2NxJQbfc4.BhnLmZWC.mjs"))?.utils,
      }),
      (J = void 0),
      (Y = `b54954f75d4a7f80768c2f00b0045b51858818ab214e9bbb2d70a6a4bfd44862`),
      (X = typeof document < `u`),
      (Z = X && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(r.userAgent)),
      X)
    ) {
      ((s.__framer_importFromPackage = (e, t) => () =>
        f(M, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
        (s.__framer_events = s.__framer_events || []),
        E());
      let e = document.getElementById(`main`);
      `framerHydrateV2` in e.dataset ? W(!0, e) : W(!1, e);
    }
  }))();
}
$();
export { B as getLayoutTemplateBreakpoints, H as getPageRoot };
//# sourceMappingURL=script_main.D98yatW8.mjs.map
