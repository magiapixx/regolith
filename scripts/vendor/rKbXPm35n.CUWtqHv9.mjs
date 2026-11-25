import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { G as t, S as n, V as r } from "./framer.B_dFn1Dy.mjs";
import { i, n as a } from "./vrNx7AlHT.BdCFKqus.mjs";
function o(e, t) {
  let n = e?.BhZQERqHl,
    r = e?.tm9NnvEJk,
    i = e?.jIPslaZrs;
  return {
    breakpoints: [
      { hash: `uug1ar`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1hpt2nc`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1t7pal2`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${n === void 0 ? `{{BhZQERqHl}}` : l(n)}, ${r === void 0 ? `{{tm9NnvEJk}}` : l(r)}: ${i === void 0 ? `{{jIPslaZrs}}` : l(i)} Inspection findings, the written quote, the build log and the result.`,
    elements: { MA_h5abuW: `scope` },
    robots: `max-image-preview:large`,
    serializationId: `framer-2kt3q`,
    title: `${n === void 0 ? `{{BhZQERqHl}}` : l(n)}, ${r === void 0 ? `{{tm9NnvEJk}}` : l(r)} \xb7 Regolith Construction`,
    viewport: `width=device-width`,
  };
}
async function s(e, t) {
  let i = new n(),
    s = {
      from: { alias: `rKbXPm35n`, data: a, type: `Collection` },
      select: [
        { collection: `rKbXPm35n`, name: `BhZQERqHl`, type: `Identifier` },
        { collection: `rKbXPm35n`, name: `tm9NnvEJk`, type: `Identifier` },
        { collection: `rKbXPm35n`, name: `jIPslaZrs`, type: `Identifier` },
      ],
      where: r(e, `rKbXPm35n`),
    },
    c = await i.query(s, t);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, t);
}
async function c(e, t) {
  let r = new n(),
    i = {
      from: { alias: `rKbXPm35n`, data: a, type: `Collection` },
      select: [
        { collection: `rKbXPm35n`, name: `BhZQERqHl`, type: `Identifier` },
        { collection: `rKbXPm35n`, name: `tm9NnvEJk`, type: `Identifier` },
        { collection: `rKbXPm35n`, name: `jIPslaZrs`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `rKbXPm35n`, name: t, type: `Identifier` });
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
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          fetchAllMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { o as a, f as i, c as n, u as o, s as r, d as t };
//# sourceMappingURL=rKbXPm35n.CUWtqHv9.mjs.map
