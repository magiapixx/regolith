import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { G as t, S as n, V as r } from "./framer.B_dFn1Dy.mjs";
import { i, t as a } from "./EY9W11kVD.C_IxY9-R.mjs";
function o(e, t) {
  let n = e?.E7DKmrIqx,
    r = e?.N7sHleMWw;
  return {
    breakpoints: [
      { hash: `1pbpw2x`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1dq7iw6`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1tva1u5`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{N7sHleMWw}}` : l(r)}`,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-Mk43u`,
    title: `${n === void 0 ? `{{E7DKmrIqx}}` : l(n)} \xb7 Regolith Construction`,
    viewport: `width=device-width`,
  };
}
async function s(e, t) {
  let i = new n(),
    s = {
      from: { alias: `AYi6uBTDw`, data: a, type: `Collection` },
      select: [
        { collection: `AYi6uBTDw`, name: `E7DKmrIqx`, type: `Identifier` },
        { collection: `AYi6uBTDw`, name: `N7sHleMWw`, type: `Identifier` },
      ],
      where: r(e, `AYi6uBTDw`),
    },
    c = await i.query(s, t);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, t);
}
async function c(e, t) {
  let r = new n(),
    i = {
      from: { alias: `AYi6uBTDw`, data: a, type: `Collection` },
      select: [
        { collection: `AYi6uBTDw`, name: `E7DKmrIqx`, type: `Identifier` },
        { collection: `AYi6uBTDw`, name: `N7sHleMWw`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `AYi6uBTDw`, name: t, type: `Identifier` });
  return (await r.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l, u, d;
function f() {
  return (f = e(() => {
    (t(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          fetchAllMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          fetchMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { o as a, f as i, c as n, u as o, s as r, d as t };
//# sourceMappingURL=AYi6uBTDw.CgZOmWRA.mjs.map
