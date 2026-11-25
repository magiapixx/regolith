import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { G as t, S as n, V as r } from "./framer.B_dFn1Dy.mjs";
import { i, r as a } from "./eHfc5JU5K.HTuxaPYs.mjs";
function o(e, t) {
  let n = e?.m0C48THmB,
    r = e?.sLk6FDNzH;
  return {
    breakpoints: [
      { hash: `140gfle`, mediaQuery: `(min-width: 1200px)` },
      { hash: `17f9l06`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1y3e4dc`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{sLk6FDNzH}}` : l(r)}`,
    elements: { E29Eb8mGH: `report` },
    robots: `max-image-preview:large`,
    serializationId: `framer-a7ha0`,
    title: `${n === void 0 ? `{{m0C48THmB}}` : l(n)} \xb7 Regolith Construction`,
    viewport: `width=device-width`,
  };
}
async function s(e, t) {
  let a = new n(),
    s = {
      from: { alias: `tO8VmqOLs`, data: i, type: `Collection` },
      select: [
        { collection: `tO8VmqOLs`, name: `m0C48THmB`, type: `Identifier` },
        { collection: `tO8VmqOLs`, name: `sLk6FDNzH`, type: `Identifier` },
      ],
      where: r(e, `tO8VmqOLs`),
    },
    c = await a.query(s, t);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, t);
}
async function c(e, t) {
  let r = new n(),
    a = {
      from: { alias: `tO8VmqOLs`, data: i, type: `Collection` },
      select: [
        { collection: `tO8VmqOLs`, name: `m0C48THmB`, type: `Identifier` },
        { collection: `tO8VmqOLs`, name: `sLk6FDNzH`, type: `Identifier` },
      ],
    };
  for (let t of e) a.select.push({ collection: `tO8VmqOLs`, name: t, type: `Identifier` });
  return (await r.query(a, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l, u, d;
function f() {
  return (f = e(() => {
    (t(),
      a(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
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
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { o as a, f as i, c as n, u as o, s as r, d as t };
//# sourceMappingURL=tO8VmqOLs.DJNHcPmS.mjs.map
