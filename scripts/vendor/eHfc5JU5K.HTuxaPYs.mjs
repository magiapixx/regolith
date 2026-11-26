import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { P as t, d as n, m as r, o as i, s as a, w as o } from "./react.Dxe_2v0O.mjs";
import { w as s } from "./motion.x14TTX80.mjs";
import {
  G as c,
  It as l,
  O as u,
  S as d,
  g as ee,
  o as f,
  r as te,
  t as ne,
} from "./framer.B_dFn1Dy.mjs";
function p(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function m(e) {
  return typeof e == `function` ? e() : e;
}
function re(e, t) {
  return M[e] > M[t];
}
function h(e) {
  let t;
  for (let n of e) {
    let e = m(n);
    if (((t === void 0 || re(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function g(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function _(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function v(e) {
  throw Error(`Unexpected value: ${e}`);
}
function y(e, t, n, r) {
  (_(e >= t, e, `outside lower bound for`, r), _(e <= n, e, `outside upper bound for`, r));
}
function b(e) {
  return typeof e == `string`;
}
function x(e) {
  return Number.isFinite(e);
}
function S(e) {
  return e === null;
}
function C(e) {
  if (S(e)) return 0;
  switch (e.type) {
    case `array`:
      return 1;
    case `boolean`:
      return 2;
    case `color`:
      return 3;
    case `date`:
      return 4;
    case `enum`:
      return 5;
    case `file`:
      return 6;
    case `responsiveimage`:
      return 10;
    case `link`:
      return 7;
    case `number`:
      return 8;
    case `object`:
      return 9;
    case `richtext`:
      return 11;
    case `string`:
      return 12;
    case `vectorsetitem`:
      return 13;
    default:
      v(e);
  }
}
function ie(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = O.read(e);
    n.push(t);
  }
  return { type: `array`, value: n };
}
function ae(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) O.write(e, n);
}
function oe(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = O.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function se(e) {
  return { type: `boolean`, value: e.readUint8() !== 0 };
}
function ce(e, t) {
  e.writeUint8(+!!t.value);
}
function le(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ue(e) {
  return { type: `color`, value: e.readString() };
}
function de(e, t) {
  e.writeString(t.value);
}
function fe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function pe(e) {
  let t = e.readInt64();
  return { type: `date`, value: new Date(t).toISOString() };
}
function me(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function he(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function ge(e) {
  return { type: `enum`, value: e.readString() };
}
function _e(e, t) {
  e.writeString(t.value);
}
function ve(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ye(e) {
  return { type: `file`, value: e.readString() };
}
function be(e, t) {
  e.writeString(t.value);
}
function xe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Se(e) {
  return { type: `link`, value: e.readJson() };
}
function Ce(e, t) {
  e.writeJson(t.value);
}
function we(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Te(e) {
  return { type: `number`, value: e.readFloat64() };
}
function Ee(e, t) {
  e.writeFloat64(t.value);
}
function De(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Oe(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = O.read(e);
  }
  return { type: `object`, value: n };
}
function ke(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), O.write(e, r));
}
function Ae(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = O.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function je(e) {
  return { type: `responsiveimage`, value: e.readJson() };
}
function Me(e, t) {
  e.writeJson(t.value);
}
function Ne(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Pe(e) {
  let t = e.readInt8();
  if (t === 0) return { type: `richtext`, value: e.readUint32() };
  if (t === 1) return { type: `richtext`, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Fe(e, t) {
  if (x(t.value)) (e.writeInt8(0), e.writeUint32(t.value));
  else if (b(t.value)) (e.writeInt8(1), e.writeString(t.value));
  else throw Error(`Invalid rich text pointer`);
}
function Ie(e, t) {
  let n = e.value,
    r = t.value;
  if ((x(n) && x(r)) || (b(n) && b(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function Le(e) {
  return { type: `string`, value: e.readString() };
}
function Re(e, t) {
  e.writeString(t.value);
}
function ze(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Be(e) {
  return { type: `vectorsetitem`, value: e.readUint32() };
}
function Ve(e, t) {
  e.writeUint32(t.value);
}
function He(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Ue(e) {
  let t = Math.floor(rt * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function w(e, t) {
  let n = We(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await H(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new at(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function T(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function We(e) {
  _(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function E(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = O.read(e);
  }
  return t;
}
function* Ge(e) {
  for (let t of e) yield* t.prioritySources;
}
var D,
  O,
  k,
  A,
  Ke,
  j,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  M,
  N,
  P,
  $e,
  et,
  F,
  I,
  L,
  R,
  z,
  tt,
  B,
  nt,
  V,
  rt,
  it,
  H,
  at,
  U,
  ot,
  st;
function ct() {
  return (ct = e(() => {
    (c(),
      (k = Object.create),
      (A = Object.defineProperty),
      (Ke = Object.getOwnPropertyDescriptor),
      (j = Object.getOwnPropertyNames),
      (qe = Object.getPrototypeOf),
      (Je = Object.prototype.hasOwnProperty),
      (Ye = (e, t) =>
        function () {
          try {
            return (t || (0, e[j(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (Xe = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of j(t))
            Je.call(e, i) ||
              i === n ||
              A(e, i, { get: () => t[i], enumerable: !(r = Ke(t, i)) || r.enumerable });
        return e;
      }),
      (Ze = (e, t, n) => (
        (n = e == null ? {} : k(qe(e))),
        Xe(!t && e && e.__esModule ? n : A(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (Qe = Ze(
        Ye({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = /* @__PURE__ */ (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (e && !1 === e.batch) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (e && !1 === e.cache) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return /* @__PURE__ */ new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) o(t);
                              else {
                                try {
                                  n = e._batchLoadFn(t.keys);
                                } catch (n) {
                                  return a(
                                    e,
                                    t,
                                    TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                        String(n) +
                                        `.`
                                    )
                                  );
                                }
                                if (!n || typeof n.then != `function`)
                                  return a(
                                    e,
                                    t,
                                    TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                        String(n) +
                                        `.`
                                    )
                                  );
                                n.then(function (e) {
                                  if (!s(e))
                                    throw TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                        String(e) +
                                        `.`
                                    );
                                  if (e.length !== t.keys.length)
                                    throw TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                        String(t.keys) +
                                        `

Values:
` +
                                        String(e)
                                    );
                                  o(t);
                                  for (var n = 0; n < t.callbacks.length; n++) {
                                    var r = e[n];
                                    r instanceof Error
                                      ? t.callbacks[n].reject(r)
                                      : t.callbacks[n].resolve(r);
                                  }
                                }).catch(function (n) {
                                  a(e, t, n);
                                });
                              }
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (M = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (N = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (P =
        ((D = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = N.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = N.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = N.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = N.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = N.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = N.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = N.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = N.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = N.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = N.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            (p(this, `bytes`, void 0),
              p(this, `offset`, 0),
              p(this, `view`, void 0),
              (this.bytes = e),
              (this.view = g(this.bytes)));
          }
        }),
        p(D, `textDecoder`, new TextDecoder()),
        D)),
      ($e = 1024),
      (et = 1.5),
      (F = (e) => 2 ** e - 1),
      (I = (e) => -(2 ** (e - 1))),
      (L = (e) => 2 ** (e - 1) - 1),
      (R = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: I(8),
        Int16: I(16),
        Int32: I(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (z = {
        Uint8: F(8),
        Uint16: F(16),
        Uint32: F(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: L(8),
        Int16: L(16),
        Int32: L(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (tt = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * et) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = g(n)));
        }
        writeUint8(e) {
          y(e, R.Uint8, z.Uint8, `Uint8`);
          let t = N.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          y(e, R.Uint16, z.Uint16, `Uint16`);
          let t = N.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          y(e, R.Uint32, z.Uint32, `Uint32`);
          let t = N.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          y(e, R.Uint64, z.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          y(e, R.BigUint64, z.BigUint64, `BigUint64`);
          let t = N.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          y(e, R.Int8, z.Int8, `Int8`);
          let t = N.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          y(e, R.Int16, z.Int16, `Int16`);
          let t = N.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          y(e, R.Int32, z.Int32, `Int32`);
          let t = N.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          y(e, R.Int64, z.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          y(e, R.BigInt64, z.BigInt64, `BigInt64`);
          let t = N.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = N.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = N.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (p(this, `offset`, 0),
            p(this, `bytes`, new Uint8Array($e)),
            p(this, `view`, g(this.bytes)),
            p(this, `encoder`, new TextEncoder()),
            p(this, `encodedStrings`, /* @__PURE__ */ new Map()));
        }
      }),
      (B = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            _(x(n), `Invalid chunkId`),
            _(x(r), `Invalid offset`),
            _(x(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (_(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (p(this, `chunkId`, void 0),
            p(this, `offset`, void 0),
            p(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return ie(e);
            case 2:
              return se(e);
            case 3:
              return ue(e);
            case 4:
              return pe(e);
            case 5:
              return ge(e);
            case 6:
              return ye(e);
            case 7:
              return Se(e);
            case 8:
              return Te(e);
            case 9:
              return Oe(e);
            case 10:
              return je(e);
            case 11:
              return Pe(e);
            case 12:
              return Le(e);
            case 13:
              return Be(e);
            default:
              v(t);
          }
        }),
          (e.write = function (e, t) {
            let n = C(t);
            if ((e.writeUint8(n), !S(t)))
              switch (t.type) {
                case `array`:
                  return ae(e, t);
                case `boolean`:
                  return ce(e, t);
                case `color`:
                  return de(e, t);
                case `date`:
                  return me(e, t);
                case `enum`:
                  return _e(e, t);
                case `file`:
                  return be(e, t);
                case `link`:
                  return Ce(e, t);
                case `number`:
                  return Ee(e, t);
                case `object`:
                  return ke(e, t);
                case `responsiveimage`:
                  return Me(e, t);
                case `richtext`:
                  return Fe(e, t);
                case `vectorsetitem`:
                  return Ve(e, t);
                case `string`:
                  return Re(e, t);
                default:
                  v(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = C(e),
              i = C(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (S(e) || S(t)) return 0;
            switch (e.type) {
              case `array`:
                return (_(t.type === `array`), oe(e, t, n));
              case `boolean`:
                return (_(t.type === `boolean`), le(e, t));
              case `color`:
                return (_(t.type === `color`), fe(e, t));
              case `date`:
                return (_(t.type === `date`), he(e, t));
              case `enum`:
                return (_(t.type === `enum`), ve(e, t));
              case `file`:
                return (_(t.type === `file`), xe(e, t));
              case `link`:
                return (_(t.type === `link`), we(e, t));
              case `number`:
                return (_(t.type === `number`), De(e, t));
              case `object`:
                return (_(t.type === `object`), Ae(e, t, n));
              case `responsiveimage`:
                return (_(t.type === `responsiveimage`), Ne(e, t));
              case `richtext`:
                return (_(t.type === `richtext`), Ie(e, t));
              case `vectorsetitem`:
                return (_(t.type === `vectorsetitem`), He(e, t));
              case `string`:
                return (_(t.type === `string`), ze(e, t, n));
              default:
                v(e);
            }
          }));
      })((O ||= {})),
      (nt = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = O.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static async deserialize(t, n) {
          let r = new P(t),
            i = r.readJson(),
            a = r.readUint8(),
            o = [];
          for (let e = 0; e < a; e++) {
            let e = r.readString();
            o.push(e);
          }
          let s = new e(o, { collation: i }),
            c = r.readUint32(),
            l = () => {
              let e = [];
              for (let t = 0; t < a; t++) {
                let t = O.read(r);
                e.push(t);
              }
              let t = B.read(r);
              s.entries.push({ values: e, pointer: t });
            };
          for (let e = 0; e < c; e++) {
            let e = n?.();
            (e && (await e), l());
          }
          return s;
        }
        serialize() {
          let e = new tt();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) O.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          (p(this, `fieldNames`, void 0),
            p(this, `options`, void 0),
            p(this, `entries`, []),
            (this.fieldNames = e),
            (this.options = t));
        }
      }),
      (V = 3),
      (rt = 250),
      (it = [408, 429, 500, 502, 503, 504]),
      (H = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!it.includes(r.status) || ++n > V) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > V) throw e;
          }
          await Ue(n);
        }
      }),
      (at = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((_(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = T(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((_(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = T(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          p(this, `chunks`, []);
        }
      }),
      (U = class {
        async loadModel() {
          let [e] = await w(this.options.url, [this.options.range]);
          return (
            _(e, `Failed to load model`),
            nt.deserialize(e, () => {
              let e = h(this.modelPrioritySources);
              if (e) return l({ batch: !0, priority: e });
            })
          );
        }
        async getModel(e) {
          return (
            this.model ||
              (e && this.modelPrioritySources.add(e),
              (this.modelPromise ??= this.loadModel().finally(() => {
                this.modelPrioritySources.clear();
              })),
              (this.model ??= await this.modelPromise)),
            this.model
          );
        }
        async lookupItems(e, t) {
          _(e.length === this.fields.length, `Invalid query length`);
          let n = [(await this.getModel(t)).entries];
          for (let [r, i] of e.entries()) {
            let e = [];
            for (let a of n) {
              let n,
                o = t ? l({ batch: !0, priority: m(t) }) : void 0;
              switch ((o && (await o), i.type)) {
                case `All`:
                  n = [a];
                  break;
                case `Equals`:
                  n = this.queryEquals(a, i, r);
                  break;
                case `NotEquals`:
                  n = this.queryNotEquals(a, i, r);
                  break;
                case `LessThan`:
                  n = this.queryLessThan(a, i, r);
                  break;
                case `GreaterThan`:
                  n = this.queryGreaterThan(a, i, r);
                  break;
                case `Contains`:
                  n = await this.queryContains(a, i, r, t);
                  break;
                case `StartsWith`:
                  n = await this.queryStartsWith(a, i, r, t);
                  break;
                case `EndsWith`:
                  n = await this.queryEndsWith(a, i, r, t);
                  break;
                default:
                  v(i);
              }
              e.push(...n);
            }
            n = e;
          }
          let r = [];
          for (let e of n)
            for (let n of e) {
              let e = t ? l({ batch: !0, priority: m(t) }) : void 0;
              e && (await e);
              let i = {};
              for (let e = 0; e < this.options.fieldNames.length; e++) {
                let t = this.options.fieldNames[e];
                i[t] = n.values[e];
              }
              r.push({ pointer: n.pointer.toString(), data: i });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > O.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            O.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        async findItems(e, t, n, r) {
          let i = [],
            a = 0;
          for (let o = 0; o < e.length; o++) {
            let s = n ? l({ batch: !0, priority: m(n) }) : void 0;
            s && (await s);
            let c = e[o].values[t];
            if (!r(c)) {
              if (a < o) {
                let t = e.slice(a, o);
                i.push(t);
              }
              a = o + 1;
            }
          }
          if (a < e.length) {
            let t = e.slice(a);
            i.push(t);
          }
          return i;
        }
        constructor(e) {
          (p(this, `options`, void 0),
            p(this, `schema`, void 0),
            p(this, `fields`, void 0),
            p(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            p(this, `modelPromise`, void 0),
            p(this, `model`, void 0),
            p(this, `modelPrioritySources`, /* @__PURE__ */ new Set()),
            p(this, `collation`, void 0),
            (this.options = e));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (_(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (ot = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = H(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new P(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = h(this.scanPrioritySources),
                        t = e ? l({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = E(n),
                        o = n.getOffset() - i,
                        s = new B(this.id, i, o).toString(),
                        c = { pointer: s, data: a };
                      (this.itemLoader.prime(
                        { pointer: s, prioritySources: /* @__PURE__ */ new Set() },
                        c
                      ),
                        r.push(c));
                    }
                    return r;
                  })
                  .finally(() => {
                    ((this.isScanning = !1), this.scanPrioritySources.clear());
                  }))),
            this.itemsPromise
          );
        }
        resolveItem(e, t) {
          let n = this.itemPrioritySources.get(e);
          (n || ((n = /* @__PURE__ */ new Set()), this.itemPrioritySources.set(e, n)),
            t && n.add(t));
          let r = this.itemLoader.load({ pointer: e, prioritySources: n }),
            i = () => this.itemPrioritySources.delete(e);
          return (r.then(i, i), r);
        }
        constructor(e, t) {
          (p(this, `id`, void 0),
            p(this, `url`, void 0),
            p(this, `itemsPromise`, void 0),
            p(this, `isScanning`, !1),
            p(this, `scanPrioritySources`, /* @__PURE__ */ new Set()),
            p(this, `itemPrioritySources`, /* @__PURE__ */ new Map()),
            p(
              this,
              `itemLoader`,
              new Qe.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = B.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await w(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = h(Ge(e)),
                      a = i ? l({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    _(o, `Missing range bytes`);
                    let s = E(new P(o)),
                      c = e[t]?.pointer;
                    (_(c, `Missing pointer`), r.push({ pointer: c, data: s }));
                  }
                  return r;
                },
                { maxBatchSize: 250, cacheKeyFn: (e) => e.pointer }
              )
            ),
            (this.id = e),
            (this.url = t));
        }
      }),
      (st = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = B.fromString(e),
                r = this.chunks[n.chunkId];
              return (_(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = B.fromString(e.pointer),
            r = B.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return O.compare(e, t, n);
        }
        constructor(e) {
          (p(this, `options`, void 0),
            p(this, `id`, void 0),
            p(this, `schema`, void 0),
            p(this, `indexes`, void 0),
            p(this, `resolveRichText`, void 0),
            p(this, `resolveVectorSetItem`, void 0),
            p(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new ot(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  }))();
}
function lt(e) {
  return typeof e == `object` && !!e && !(/*#__PURE__*/ r(e)) && mt in e;
}
function ut(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function dt(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    typeof i == `number` ? (e[r] = n(i, t)) : ft(t, i, n);
  }
}
function ft(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : ft(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || dt(e, t, n);
  }
}
function pt(e) {
  let r = /* @__PURE__ */ new Map();
  return (a) => {
    let o = r.get(a);
    if (o) return o;
    let c = (function r(a) {
      switch (a[0]) {
        case 1: {
          let [, ...e] = a,
            i = e.map(r);
          return /*#__PURE__*/ n(t, void 0, ...i);
        }
        case 2: {
          let [, e, ...t] = a,
            i = t.map(r);
          return /*#__PURE__*/ n(ee, e, ...i);
        }
        case 3: {
          let [, t, n, o] = a;
          dt(n, o, (t, n) => {
            if (t === 1) return n && r(n);
            if (typeof n != `string`) return n;
            let i = e[n];
            return i ? (lt(i) && i.preload(), i) : n;
          });
          let s = e[t];
          return (
            ut(s, `Module not found`),
            lt(s) && s.preload(),
            /*#__PURE__*/ i(te, {
              componentIdentifier: t,
              children: (e) => /*#__PURE__*/ i(ne, { component: s, props: { ...e, ...n } }),
            })
          );
        }
        case 4: {
          let [, e, t, ...i] = a,
            o = i.map(r);
          return n(e === `a` ? s.a : e, t, ...o);
        }
        case 5: {
          let [, e] = a;
          return e;
        }
      }
    })(JSON.parse(a));
    return (r.set(a, c), c);
  };
}
var W, G, mt, ht, gt;
function _t() {
  return (_t = e(() => {
    (a(),
      c(),
      o(),
      (mt = `preload`),
      (ht =
        (((W = ht || {})[(W.Fragment = 1)] = `Fragment`),
        (W[(W.Link = 2)] = `Link`),
        (W[(W.Module = 3)] = `Module`),
        (W[(W.Tag = 4)] = `Tag`),
        (W[(W.Text = 5)] = `Text`),
        W)),
      (gt =
        (((G = gt || {})[(G.RichText = 1)] = `RichText`),
        (G[(G.VectorSetItem = 2)] = `VectorSetItem`),
        G)));
  }))();
}
var K,
  q,
  vt,
  J,
  yt,
  bt,
  xt,
  St,
  Y,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
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
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  X,
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
  Z,
  Q,
  Zr,
  Qr,
  $r;
function $() {
  return ($ = e(() => {
    (c(),
      ct(),
      _t(),
      (K = {
        a1_5BUUza: { isNullable: !0, type: f.Boolean },
        AHH8nZRPo: { isNullable: !0, type: f.String },
        B7Wvvcqni: { isNullable: !0, type: f.String },
        bGbTAlAd2: { isNullable: !0, type: f.String },
        Bs3mJvMAX: {
          definition: {
            definitions: {
              d1Jw9SToa: { isNullable: !0, type: f.String },
              ETF95scMJ: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              ycDPu_uIt: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        c2I1nISup: { isNullable: !0, type: f.String },
        CCHt7nigc: { isNullable: !0, type: f.String },
        CCNna_4AP: { isNullable: !0, type: f.String },
        cebUN9vch: { isNullable: !0, type: f.String },
        Ci0lY4wZE: { isNullable: !0, type: f.String },
        createdAt: { isNullable: !0, type: f.Date },
        CsOHszb7x: { isNullable: !0, type: f.ResponsiveImage },
        CT4GHDtIm: { isNullable: !0, type: f.String },
        cw_T2SCfk: { isNullable: !0, type: f.String },
        Dd3FXJEBw: { isNullable: !0, type: f.Boolean },
        DngIvP7wB: { isNullable: !0, type: f.Boolean },
        dPKGRi4AF: { isNullable: !0, type: f.String },
        e5xOKDTAc: { isNullable: !0, type: f.String },
        E9m19n_rf: { isNullable: !0, type: f.String },
        EkTGB5dc2: {
          definition: {
            definitions: {
              hCaH1H8uC: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              iIW8tZSGC: { isNullable: !0, type: f.String },
              sw0EKg7YO: { isNullable: !0, type: f.String },
              veYT466_B: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        Fc8m5Xozc: { isNullable: !0, type: f.String },
        fDkTCUUNE: { isNullable: !0, type: f.String },
        ffmqj1bGZ: { isNullable: !0, type: f.String },
        fijQhEgUP: { isNullable: !0, type: f.String },
        fq7nR2ESu: { isNullable: !0, type: f.String },
        fQi5sz2uK: { isNullable: !0, type: f.Boolean },
        FSdOlKLHp: { isNullable: !0, type: f.String },
        gaOjqxIY1: { isNullable: !0, type: f.String },
        Gc3frB5Uo: {
          definition: {
            definitions: {
              EfwUrzK3k: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        gISawZhfT: { isNullable: !0, type: f.Link },
        GJ_JjH1Pf: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: f.String },
              LolJHH4hA: { isNullable: !0, type: f.String },
              oZub02rfy: { isNullable: !0, type: f.String },
              zWxhxqyFe: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        GJVL65fWP: {
          definition: {
            definitions: {
              dqchRrZpv: { isNullable: !0, type: f.String },
              ho05Q0xcY: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              lT9XUWKJn: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        gt3ciOEdB: { isNullable: !0, type: f.String },
        gU4NBLSt7: { isNullable: !0, type: f.Link },
        GWsKWZjsH: { isNullable: !0, type: f.Link },
        h0lCI3JS2: { isNullable: !0, type: f.String },
        h80N2et1p: { isNullable: !0, type: f.String },
        hw70V5Hnw: { isNullable: !0, type: f.String },
        Iceu3ckvo: { isNullable: !0, type: f.Boolean },
        id: { isNullable: !1, type: f.String },
        IEfHYVVkY: { isNullable: !0, type: f.String },
        iG4KMDdNl: { isNullable: !0, type: f.String },
        ijTOl2DB0: { isNullable: !0, type: f.Boolean },
        Iq15axqGb: { isNullable: !0, type: f.String },
        iydnWyUxt: { isNullable: !0, type: f.String },
        JanWNWkRK: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: f.String },
              pDRjkvURd: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        jBhbH9Gl0: { isNullable: !0, type: f.String },
        jng45L0X7: { isNullable: !0, type: f.String },
        Kfbme90q4: { isNullable: !0, type: f.String },
        khbBBsERa: { isNullable: !0, type: f.String },
        KIE2vt_Yv: { isNullable: !0, type: f.ResponsiveImage },
        KJ9lxcPat: { isNullable: !0, type: f.String },
        kklHoSQSa: { isNullable: !0, type: f.String },
        kPl4G1vr8: { isNullable: !0, type: f.String },
        KQhIJHXSg: { isNullable: !0, type: f.String },
        kXeiOEL7c: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: f.String },
              kRJo2VXvC: { isNullable: !0, type: f.String },
              S_WlswlxJ: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        kyXFLMVO3: { isNullable: !0, type: f.String },
        LEt5m1r_0: { isNullable: !0, type: f.String },
        LlJzbUfvh: { isNullable: !0, type: f.String },
        LnVY_Pxxy: { isNullable: !0, type: f.String },
        lSdnUsRVc: { isNullable: !0, type: f.String },
        LtPL5VyG9: { isNullable: !0, type: f.Link },
        lwvLx8Oh6: { isNullable: !0, type: f.Link },
        lZDbNtLcs: { isNullable: !0, type: f.String },
        m0C48THmB: { isNullable: !0, type: f.String },
        m0nNPfWxH: { isNullable: !0, type: f.String },
        M5D5R1r08: { isNullable: !0, type: f.String },
        MKGl5YIzo: {
          definition: {
            definitions: {
              bK1YbW9nw: { isNullable: !0, type: f.String },
              edXhU1Pfr: { isNullable: !0, type: f.String },
              GUARRv3tb: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              MxiFft7Dt: { isNullable: !0, type: f.String },
              px_DLFbp2: { isNullable: !0, type: f.String },
              Xwk022dlR: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        MNmRX_IDP: {
          definition: {
            definitions: {
              dIDvZWKNe: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              jg3wIJo16: { isNullable: !0, type: f.String },
              Ou761YS95: { isNullable: !0, type: f.String },
              smQHc6zXN: { isNullable: !0, type: f.String },
              uiXLyW5fO: { isNullable: !0, type: f.String },
              zLylZKpYp: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        MpXu2sd3D: { isNullable: !0, type: f.String },
        n9Y5sduIg: { isNullable: !0, type: f.Boolean },
        nextItemId: { isNullable: !0, type: f.String },
        NiuNhWoDP: { isNullable: !0, type: f.String },
        nJUsoTErc: { isNullable: !0, type: f.String },
        NNPFc4ZZd: { isNullable: !0, type: f.String },
        no1NZGKze: { isNullable: !0, type: f.String },
        NS5mAyXlF: { isNullable: !0, type: f.String },
        nWoQN632n: { isNullable: !0, type: f.Link },
        o5paEmlz9: { isNullable: !0, type: f.String },
        oGsJ0fWYp: { isNullable: !0, type: f.String },
        ohnGYmUVL: { isNullable: !0, type: f.Boolean },
        OR0qS25WS: { isNullable: !0, type: f.String },
        p4H9aO0Fi: { isNullable: !0, type: f.String },
        pfBbfyoxr: {
          definition: {
            definitions: {
              BoBQ9E_Rm: { isNullable: !0, type: f.String },
              dxGwpDu8R: { isNullable: !0, type: f.String },
              GLfwUpuGg: { isNullable: !0, type: f.String },
              GzvhC1kD5: { isNullable: !0, type: f.String },
              hJCBGOtur: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              ThLIKvQ5t: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        pGl0_v3lJ: { isNullable: !0, type: f.String },
        pPCIlBU69: { isNullable: !0, type: f.String },
        previousItemId: { isNullable: !0, type: f.String },
        QBAPxB3IU: {
          definition: {
            definitions: {
              GoSWpeAuU: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              qpLgmb0f1: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        QhS64UDdv: { isNullable: !0, type: f.String },
        QIWfOsANW: { isNullable: !0, type: f.String },
        QlUJtIOnN: { isNullable: !0, type: f.String },
        QQUj2TPOl: { isNullable: !0, type: f.String },
        qUaKmHxMZ: { isNullable: !0, type: f.String },
        RaPylPQ_p: { isNullable: !0, type: f.String },
        rFx2lrr0D: {
          definition: {
            definitions: {
              dBdFozswZ: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              SzQPzBALi: { isNullable: !0, type: f.String },
              zhBgrrM3Q: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        Rg2sYi7ZK: { isNullable: !0, type: f.Link },
        RngG7zPYz: { isNullable: !0, type: f.String },
        RSHLWHPcW: { isNullable: !0, type: f.String },
        RtZdjlPv5: { isNullable: !0, type: f.Boolean },
        sEOn1YNEb: { isNullable: !0, type: f.Boolean },
        sL7ZJKLFc: { isNullable: !0, type: f.String },
        sLk6FDNzH: { isNullable: !0, type: f.String },
        sxGmmXbxt: {
          definition: { isNullable: !0, type: f.String },
          isNullable: !0,
          type: f.Array,
        },
        t0YYpVVAU: { isNullable: !0, type: f.String },
        tbd0RTAKU: { isNullable: !0, type: f.String },
        TbhguQIqL: { isNullable: !0, type: f.String },
        TiB80fd7S: { isNullable: !0, type: f.String },
        Tiz1Au1yb: { isNullable: !0, type: f.Link },
        tMurUfQZi: { isNullable: !0, type: f.String },
        U0xcEj8NI: { isNullable: !0, type: f.String },
        u4ElpuHEW: { isNullable: !0, type: f.String },
        U72O9hwEC: { isNullable: !0, type: f.String },
        U9khbr71U: { isNullable: !0, type: f.String },
        Uan22i0Wa: {
          definition: {
            definitions: {
              FtiEgsXnq: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              mOOJhADG_: { isNullable: !0, type: f.String },
              q4PY7uNvK: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        UCvOIchGT: {
          definition: { isNullable: !0, type: f.String },
          isNullable: !0,
          type: f.Array,
        },
        ugD8hReQH: {
          definition: { isNullable: !0, type: f.String },
          isNullable: !0,
          type: f.Array,
        },
        UkvCtOKxW: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: f.String },
              iSEpdK2Cr: { isNullable: !0, type: f.String },
              QJuAq4Rq2: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        Uop4vHT83: { isNullable: !0, type: f.String },
        updatedAt: { isNullable: !0, type: f.Date },
        Uq4dgDOpK: { isNullable: !0, type: f.String },
        uR3m6nocO: { isNullable: !0, type: f.String },
        uVe7ZBFhK: { isNullable: !0, type: f.String },
        VAh67WjYi: { isNullable: !0, type: f.String },
        VC9CgqG89: { isNullable: !0, type: f.Boolean },
        VX0isqsOw: { isNullable: !0, type: f.String },
        W_w2jHBi2: { isNullable: !0, type: f.String },
        w6I8YQk5L: { isNullable: !0, type: f.Link },
        wonnU8OWX: { isNullable: !0, type: f.String },
        WRgdALFE6: { isNullable: !0, type: f.String },
        WUHWESC7K: { isNullable: !0, type: f.String },
        wzsDx9w0F: { isNullable: !0, type: f.String },
        x0AFBQwVQ: { isNullable: !0, type: f.String },
        XDxMtofEH: {
          definition: {
            definitions: {
              EsTlayAEz: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              XfzJbM06p: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        XdXNqzlhP: { isNullable: !0, type: f.String },
        ymyzGS44r: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: f.String },
              VOUyotg0u: { isNullable: !0, type: f.String },
              ZuSLkR4gs: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        zdvklzu1g: { isNullable: !0, type: f.String },
        zj2dhODcR: { isNullable: !0, type: f.Boolean },
        zvl6c7EnJ: {
          definition: {
            definitions: {
              aKrrABwRl: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              xbGYFV8Qt: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
      }),
      (q = new URL(
        `./eHfc5JU5K-indexes-default-0.framercms`,
        `https://framerusercontent.com/modules/yHQAHFW0DlkZFqUyP82H/8RtuSVZ2AlzefBZLJdKe/eHfc5JU5K.js`
      ).href.replace(`/modules/`, `/cms/`)),
      (vt = [`id`]),
      (J = { type: 1 }),
      (yt = [`previousItemId`]),
      (bt = [`nextItemId`]),
      (xt = [`id`, `Uq4dgDOpK`]),
      (St = [`Uq4dgDOpK`, `id`]),
      (Y = { type: 0 }),
      (Ct = [`Uq4dgDOpK`]),
      (wt = [`e5xOKDTAc`]),
      (Tt = [`CCNna_4AP`]),
      (Et = [`ffmqj1bGZ`]),
      (Dt = [`W_w2jHBi2`]),
      (Ot = [`jBhbH9Gl0`]),
      (kt = [`CsOHszb7x`]),
      (At = [`nJUsoTErc`]),
      (jt = [`Gc3frB5Uo`]),
      (Mt = [`LnVY_Pxxy`]),
      (Nt = [`w6I8YQk5L`]),
      (Pt = [`oGsJ0fWYp`]),
      (Ft = [`u4ElpuHEW`]),
      (It = [`fDkTCUUNE`]),
      (Lt = [`KIE2vt_Yv`]),
      (Rt = [`fq7nR2ESu`]),
      (zt = [`gISawZhfT`]),
      (Bt = [`jng45L0X7`]),
      (Vt = [`GWsKWZjsH`]),
      (Ht = [`Uop4vHT83`]),
      (Ut = [`U9khbr71U`]),
      (Wt = [`cw_T2SCfk`]),
      (Gt = [`t0YYpVVAU`]),
      (Kt = [`MpXu2sd3D`]),
      (qt = [`KQhIJHXSg`]),
      (Jt = [`zdvklzu1g`]),
      (Yt = [`QQUj2TPOl`]),
      (Xt = [`QIWfOsANW`]),
      (Zt = [`LEt5m1r_0`]),
      (Qt = [`TbhguQIqL`]),
      ($t = [`QBAPxB3IU`]),
      (en = [`WUHWESC7K`]),
      (tn = [`NNPFc4ZZd`]),
      (nn = [`Fc8m5Xozc`]),
      (rn = [`pfBbfyoxr`]),
      (an = [`KJ9lxcPat`]),
      (on = [`sL7ZJKLFc`]),
      (sn = [`uR3m6nocO`]),
      (cn = [`MNmRX_IDP`]),
      (ln = [`cebUN9vch`]),
      (un = [`LlJzbUfvh`]),
      (dn = [`tMurUfQZi`]),
      (fn = [`rFx2lrr0D`]),
      (pn = [`M5D5R1r08`]),
      (mn = [`qUaKmHxMZ`]),
      (hn = [`NiuNhWoDP`]),
      (gn = [`khbBBsERa`]),
      (_n = [`nWoQN632n`]),
      (vn = [`EkTGB5dc2`]),
      (yn = [`pPCIlBU69`]),
      (bn = [`RaPylPQ_p`]),
      (xn = [`kklHoSQSa`]),
      (Sn = [`Bs3mJvMAX`]),
      (Cn = [`wonnU8OWX`]),
      (wn = [`QhS64UDdv`]),
      (Tn = [`p4H9aO0Fi`]),
      (En = [`GJ_JjH1Pf`]),
      (Dn = [`kyXFLMVO3`]),
      (On = [`dPKGRi4AF`]),
      (kn = [`iydnWyUxt`]),
      (An = [`h80N2et1p`]),
      (jn = [`Tiz1Au1yb`]),
      (Mn = [`wzsDx9w0F`]),
      (Nn = [`OR0qS25WS`]),
      (Pn = [`Uan22i0Wa`]),
      (Fn = [`iG4KMDdNl`]),
      (In = [`pGl0_v3lJ`]),
      (Ln = [`m0nNPfWxH`]),
      (Rn = [`CCHt7nigc`]),
      (zn = [`B7Wvvcqni`]),
      (Bn = [`NS5mAyXlF`]),
      (Vn = [`JanWNWkRK`]),
      (Hn = [`hw70V5Hnw`]),
      (Un = [`x0AFBQwVQ`]),
      (Wn = [`Iq15axqGb`]),
      (Gn = [`MKGl5YIzo`]),
      (Kn = [`Ci0lY4wZE`]),
      (qn = [`E9m19n_rf`]),
      (Jn = [`h0lCI3JS2`]),
      (Yn = [`zvl6c7EnJ`]),
      (Xn = [`lSdnUsRVc`]),
      (Zn = [`tbd0RTAKU`]),
      (Qn = [`RngG7zPYz`]),
      ($n = [`XDxMtofEH`]),
      (er = [`IEfHYVVkY`]),
      (tr = [`TiB80fd7S`]),
      (nr = [`CT4GHDtIm`]),
      (rr = [`ymyzGS44r`]),
      (ir = [`kXeiOEL7c`]),
      (ar = [`bGbTAlAd2`]),
      (or = [`Kfbme90q4`]),
      (sr = [`U72O9hwEC`]),
      (cr = [`VX0isqsOw`]),
      (lr = [`lwvLx8Oh6`]),
      (ur = [`RSHLWHPcW`]),
      (dr = [`gaOjqxIY1`]),
      (fr = [`VAh67WjYi`]),
      (pr = [`GJVL65fWP`]),
      (mr = [`UkvCtOKxW`]),
      (hr = [`U0xcEj8NI`]),
      (gr = [`o5paEmlz9`]),
      (_r = [`QlUJtIOnN`]),
      (vr = [`FSdOlKLHp`]),
      (yr = [`uVe7ZBFhK`]),
      (br = [`lZDbNtLcs`]),
      (xr = [`AHH8nZRPo`]),
      (Sr = [`UCvOIchGT`]),
      (Cr = [`ugD8hReQH`]),
      (wr = [`sxGmmXbxt`]),
      (Tr = [`WRgdALFE6`]),
      (Er = [`kPl4G1vr8`]),
      (Dr = [`LtPL5VyG9`]),
      (Or = [`fijQhEgUP`]),
      (kr = [`c2I1nISup`]),
      (Ar = [`XdXNqzlhP`]),
      (jr = [`no1NZGKze`]),
      (Mr = [`gU4NBLSt7`]),
      (Nr = [`gt3ciOEdB`]),
      (Pr = [`Rg2sYi7ZK`]),
      (Fr = [`sEOn1YNEb`]),
      (X = [`RtZdjlPv5`]),
      (Ir = [`ohnGYmUVL`]),
      (Lr = [`Dd3FXJEBw`]),
      (Rr = [`Iceu3ckvo`]),
      (zr = [`n9Y5sduIg`]),
      (Br = [`DngIvP7wB`]),
      (Vr = [`a1_5BUUza`]),
      (Hr = [`ijTOl2DB0`]),
      (Ur = [`fQi5sz2uK`]),
      (Wr = [`zj2dhODcR`]),
      (Gr = [`VC9CgqG89`]),
      (Kr = [`m0C48THmB`]),
      (qr = [`sLk6FDNzH`]),
      (Jr = []),
      (Yr = (e) => {
        let t = Jr[e];
        if (t) return t().then((e) => e.default);
      }),
      (Xr = pt({})),
      (Z = new d()),
      (Q = {
        collectionByLocaleId: {
          default: new st({
            chunks: [
              new URL(
                `./eHfc5JU5K-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/yHQAHFW0DlkZFqUyP82H/8RtuSVZ2AlzefBZLJdKe/eHfc5JU5K.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `be08d357-3fdf-41d0-bebd-522f3859a24adefault`,
            indexes: [
              new U({
                collation: J,
                collectionSchema: K,
                fieldNames: vt,
                range: { from: 0, to: 169 },
                url: q,
              }),
              new U({
                collation: J,
                collectionSchema: K,
                fieldNames: yt,
                range: { from: 169, to: 337 },
                url: q,
              }),
              new U({
                collation: J,
                collectionSchema: K,
                fieldNames: bt,
                range: { from: 337, to: 501 },
                url: q,
              }),
              new U({
                collation: J,
                collectionSchema: K,
                fieldNames: xt,
                range: { from: 501, to: 795 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: St,
                range: { from: 795, to: 1089 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ct,
                range: { from: 1089, to: 1293 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: wt,
                range: { from: 1293, to: 1519 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Tt,
                range: { from: 1519, to: 1653 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Et,
                range: { from: 1653, to: 1907 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Dt,
                range: { from: 1907, to: 2137 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ot,
                range: { from: 2137, to: 2838 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: kt,
                range: { from: 2838, to: 4093 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: At,
                range: { from: 4093, to: 5298 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: jt,
                range: { from: 5298, to: 7016 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Mt,
                range: { from: 7016, to: 7290 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Nt,
                range: { from: 7290, to: 7903 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Pt,
                range: { from: 7903, to: 8203 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ft,
                range: { from: 8203, to: 8904 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: It,
                range: { from: 8904, to: 9170 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Lt,
                range: { from: 9170, to: 10431 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Rt,
                range: { from: 10431, to: 10676 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: zt,
                range: { from: 10676, to: 11041 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Bt,
                range: { from: 11041, to: 11281 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Vt,
                range: { from: 11281, to: 11770 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ht,
                range: { from: 11770, to: 11934 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ut,
                range: { from: 11934, to: 12160 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Wt,
                range: { from: 12160, to: 12312 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Gt,
                range: { from: 12312, to: 12524 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Kt,
                range: { from: 12524, to: 12700 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: qt,
                range: { from: 12700, to: 12942 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Jt,
                range: { from: 12942, to: 13118 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Yt,
                range: { from: 13118, to: 13300 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Xt,
                range: { from: 13300, to: 13482 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Zt,
                range: { from: 13482, to: 13772 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Qt,
                range: { from: 13772, to: 14578 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: $t,
                range: { from: 14578, to: 18908 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: en,
                range: { from: 18908, to: 19045 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: tn,
                range: { from: 19045, to: 19347 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: nn,
                range: { from: 19347, to: 20087 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: rn,
                range: { from: 20087, to: 22342 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: an,
                range: { from: 22342, to: 22484 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: on,
                range: { from: 22484, to: 22732 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: sn,
                range: { from: 22732, to: 23388 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: cn,
                range: { from: 23388, to: 25700 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: ln,
                range: { from: 25700, to: 25908 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: un,
                range: { from: 25908, to: 26216 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: dn,
                range: { from: 26216, to: 26944 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: fn,
                range: { from: 26944, to: 32898 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: pn,
                range: { from: 32898, to: 33050 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: mn,
                range: { from: 33050, to: 33358 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: hn,
                range: { from: 33358, to: 34146 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: gn,
                range: { from: 34146, to: 34292 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: _n,
                range: { from: 34292, to: 34563 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: vn,
                range: { from: 34563, to: 36653 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: yn,
                range: { from: 36653, to: 36783 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: bn,
                range: { from: 36783, to: 36930 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: xn,
                range: { from: 36930, to: 37207 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Sn,
                range: { from: 37207, to: 37972 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Cn,
                range: { from: 37972, to: 38108 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: wn,
                range: { from: 38108, to: 38268 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Tn,
                range: { from: 38268, to: 38529 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: En,
                range: { from: 38529, to: 39285 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Dn,
                range: { from: 39285, to: 39479 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: On,
                range: { from: 39479, to: 39775 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: kn,
                range: { from: 39775, to: 40395 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: An,
                range: { from: 40395, to: 40542 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: jn,
                range: { from: 40542, to: 40831 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Mn,
                range: { from: 40831, to: 41009 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Nn,
                range: { from: 41009, to: 41177 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Pn,
                range: { from: 41177, to: 46766 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Fn,
                range: { from: 46766, to: 46903 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: In,
                range: { from: 46903, to: 47235 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ln,
                range: { from: 47235, to: 47819 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Rn,
                range: { from: 47819, to: 47960 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: zn,
                range: { from: 47960, to: 48238 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Bn,
                range: { from: 48238, to: 48954 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Vn,
                range: { from: 48954, to: 49612 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Hn,
                range: { from: 49612, to: 49753 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Un,
                range: { from: 49753, to: 50043 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Wn,
                range: { from: 50043, to: 50711 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Gn,
                range: { from: 50711, to: 52460 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Kn,
                range: { from: 52460, to: 52589 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: qn,
                range: { from: 52589, to: 52873 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Jn,
                range: { from: 52873, to: 53571 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Yn,
                range: { from: 53571, to: 54045 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Xn,
                range: { from: 54045, to: 54181 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Zn,
                range: { from: 54181, to: 54513 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Qn,
                range: { from: 54513, to: 55061 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: $n,
                range: { from: 55061, to: 56226 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: er,
                range: { from: 56226, to: 56363 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: tr,
                range: { from: 56363, to: 56641 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: nr,
                range: { from: 56641, to: 57267 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: rr,
                range: { from: 57267, to: 58252 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: ir,
                range: { from: 58252, to: 58817 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: ar,
                range: { from: 58817, to: 58991 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: or,
                range: { from: 58991, to: 59305 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: sr,
                range: { from: 59305, to: 60249 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: cr,
                range: { from: 60249, to: 60389 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: lr,
                range: { from: 60389, to: 60516 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: ur,
                range: { from: 60516, to: 60650 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: dr,
                range: { from: 60650, to: 60828 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: fr,
                range: { from: 60828, to: 60994 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: pr,
                range: { from: 60994, to: 64660 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: mr,
                range: { from: 64660, to: 65134 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: hr,
                range: { from: 65134, to: 65267 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: gr,
                range: { from: 65267, to: 65653 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: _r,
                range: { from: 65653, to: 66525 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: vr,
                range: { from: 66525, to: 66706 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: yr,
                range: { from: 66706, to: 66942 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: br,
                range: { from: 66942, to: 67424 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: xr,
                range: { from: 67424, to: 67579 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Sr,
                range: { from: 67579, to: 67857 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Cr,
                range: { from: 67857, to: 67981 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: wr,
                range: { from: 67981, to: 68231 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Tr,
                range: { from: 68231, to: 68545 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Er,
                range: { from: 68545, to: 68786 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Dr,
                range: { from: 68786, to: 69151 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Or,
                range: { from: 69151, to: 69357 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: kr,
                range: { from: 69357, to: 69647 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ar,
                range: { from: 69647, to: 70261 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: jr,
                range: { from: 70261, to: 70503 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Mr,
                range: { from: 70503, to: 70868 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Nr,
                range: { from: 70868, to: 71110 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Pr,
                range: { from: 71110, to: 71374 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Fr,
                range: { from: 71374, to: 71478 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: X,
                range: { from: 71478, to: 71582 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ir,
                range: { from: 71582, to: 71686 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Lr,
                range: { from: 71686, to: 71790 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Rr,
                range: { from: 71790, to: 71894 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: zr,
                range: { from: 71894, to: 71998 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Br,
                range: { from: 71998, to: 72102 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Vr,
                range: { from: 72102, to: 72206 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Hr,
                range: { from: 72206, to: 72310 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ur,
                range: { from: 72310, to: 72414 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Wr,
                range: { from: 72414, to: 72518 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Gr,
                range: { from: 72518, to: 72622 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Kr,
                range: { from: 72622, to: 72992 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: qr,
                range: { from: 72992, to: 73693 },
                url: q,
              }),
            ],
            resolveRichText: Xr,
            resolveVectorSetItem: Yr,
            schema: K,
          }),
        },
        displayName: `Services`,
        id: `be08d357-3fdf-41d0-bebd-522f3859a24a`,
      }),
      u(Q, {
        Uq4dgDOpK: { preventLocalization: !1, title: `Slug`, type: f.String },
        e5xOKDTAc: { defaultValue: ``, title: `Name`, type: f.String },
        CCNna_4AP: { defaultValue: ``, title: `Number`, type: f.String },
        ffmqj1bGZ: { defaultValue: ``, title: `Price`, type: f.String },
        W_w2jHBi2: { defaultValue: ``, title: `Price Note`, type: f.String },
        jBhbH9Gl0: { defaultValue: ``, displayTextArea: !0, title: `Summary`, type: f.String },
        CsOHszb7x: { title: `Image`, type: f.ResponsiveImage },
        nJUsoTErc: { defaultValue: ``, displayTextArea: !0, title: `Home Text`, type: f.String },
        Gc3frB5Uo: {
          __vekterDefault: [],
          control: {
            controls: { EfwUrzK3k: { defaultValue: ``, title: `Text`, type: `string` } },
            type: `object`,
          },
          title: `Home Ticks`,
          type: f.Array,
        },
        LnVY_Pxxy: { defaultValue: ``, title: `Home Link Label`, type: f.String },
        w6I8YQk5L: { title: `Home Link`, type: f.Link },
        oGsJ0fWYp: { defaultValue: ``, title: `Page Title`, type: f.String },
        u4ElpuHEW: { defaultValue: ``, displayTextArea: !0, title: `Lede`, type: f.String },
        fDkTCUUNE: { defaultValue: ``, title: `Kicker`, type: f.String },
        KIE2vt_Yv: { title: `Header Image`, type: f.ResponsiveImage },
        fq7nR2ESu: { defaultValue: ``, title: `CTA 1 Label`, type: f.String },
        gISawZhfT: { title: `CTA 1 Link`, type: f.Link },
        jng45L0X7: { defaultValue: ``, title: `CTA 2 Label`, type: f.String },
        GWsKWZjsH: { title: `CTA 2 Link`, type: f.Link },
        Uop4vHT83: { defaultValue: ``, title: `Meta 1 Label`, type: f.String },
        U9khbr71U: { defaultValue: ``, title: `Meta 1 Value`, type: f.String },
        cw_T2SCfk: { defaultValue: ``, title: `Meta 2 Label`, type: f.String },
        t0YYpVVAU: { defaultValue: ``, title: `Meta 2 Value`, type: f.String },
        MpXu2sd3D: { defaultValue: ``, title: `Meta 3 Label`, type: f.String },
        KQhIJHXSg: { defaultValue: ``, title: `Meta 3 Value`, type: f.String },
        zdvklzu1g: { defaultValue: ``, title: `Meta 4 Label`, type: f.String },
        QQUj2TPOl: { defaultValue: ``, title: `Meta 4 Value`, type: f.String },
        QIWfOsANW: { defaultValue: ``, title: `Signs Label`, type: f.String },
        LEt5m1r_0: { defaultValue: ``, title: `Signs Title`, type: f.String },
        TbhguQIqL: { defaultValue: ``, displayTextArea: !0, title: `Signs Intro`, type: f.String },
        QBAPxB3IU: {
          __vekterDefault: [],
          control: {
            controls: {
              qpLgmb0f1: { defaultValue: ``, title: `Title`, type: `string` },
              GoSWpeAuU: { defaultValue: ``, title: `Text`, type: `string` },
            },
            type: `object`,
          },
          title: `Signs`,
          type: f.Array,
        },
        WUHWESC7K: { defaultValue: ``, title: `Zones Label`, type: f.String },
        NNPFc4ZZd: { defaultValue: ``, title: `Zones Title`, type: f.String },
        Fc8m5Xozc: { defaultValue: ``, displayTextArea: !0, title: `Zones Lede`, type: f.String },
        pfBbfyoxr: {
          __vekterDefault: [],
          control: {
            controls: {
              ThLIKvQ5t: { defaultValue: ``, title: `Count`, type: `string` },
              hJCBGOtur: { defaultValue: ``, title: `Title`, type: `string` },
              GzvhC1kD5: { defaultValue: ``, title: `Point 1`, type: `string` },
              GLfwUpuGg: { defaultValue: ``, title: `Point 2`, type: `string` },
              BoBQ9E_Rm: { defaultValue: ``, title: `Point 3`, type: `string` },
              dxGwpDu8R: { defaultValue: ``, title: `Point 4`, type: `string` },
            },
            type: `object`,
          },
          title: `Zones`,
          type: f.Array,
        },
        KJ9lxcPat: { defaultValue: ``, title: `Hours Label`, type: f.String },
        sL7ZJKLFc: { defaultValue: ``, title: `Hours Title`, type: f.String },
        uR3m6nocO: { defaultValue: ``, displayTextArea: !0, title: `Hours Lede`, type: f.String },
        MNmRX_IDP: {
          __vekterDefault: [],
          control: {
            controls: {
              jg3wIJo16: { defaultValue: ``, title: `When`, type: `string` },
              zLylZKpYp: { defaultValue: ``, title: `Title`, type: `string` },
              dIDvZWKNe: { defaultValue: ``, title: `Text`, type: `string` },
              uiXLyW5fO: { defaultValue: ``, title: `Point 1`, type: `string` },
              Ou761YS95: { defaultValue: ``, title: `Point 2`, type: `string` },
              smQHc6zXN: { defaultValue: ``, title: `Point 3`, type: `string` },
            },
            type: `object`,
          },
          title: `Hours`,
          type: f.Array,
        },
        cebUN9vch: { defaultValue: ``, title: `Steps Label`, type: f.String },
        LlJzbUfvh: { defaultValue: ``, title: `Steps Title`, type: f.String },
        tMurUfQZi: { defaultValue: ``, displayTextArea: !0, title: `Steps Lede`, type: f.String },
        rFx2lrr0D: {
          __vekterDefault: [],
          control: {
            controls: {
              zhBgrrM3Q: { defaultValue: ``, title: `When`, type: `string` },
              SzQPzBALi: { defaultValue: ``, title: `Title`, type: `string` },
              dBdFozswZ: { defaultValue: ``, title: `Text`, type: `string` },
            },
            type: `object`,
          },
          title: `Steps`,
          type: f.Array,
        },
        M5D5R1r08: { defaultValue: ``, title: `Verdict Label`, type: f.String },
        qUaKmHxMZ: { defaultValue: ``, title: `Verdict Title`, type: f.String },
        NiuNhWoDP: { defaultValue: ``, displayTextArea: !0, title: `Verdict Lede`, type: f.String },
        khbBBsERa: { defaultValue: ``, title: `Verdict Link Label`, type: f.String },
        nWoQN632n: { title: `Verdict Link`, type: f.Link },
        EkTGB5dc2: {
          __vekterDefault: [],
          control: {
            controls: {
              hCaH1H8uC: { defaultValue: ``, title: `Case`, type: `string` },
              iIW8tZSGC: { defaultValue: ``, title: `Verdict`, type: `string` },
              veYT466_B: { defaultValue: ``, title: `Level`, type: `string` },
              sw0EKg7YO: { defaultValue: ``, title: `Text`, type: `string` },
            },
            type: `object`,
          },
          title: `Verdict`,
          type: f.Array,
        },
        pPCIlBU69: { defaultValue: ``, title: `Sizing Label`, type: f.String },
        RaPylPQ_p: { defaultValue: ``, title: `Sizing Title`, type: f.String },
        kklHoSQSa: { defaultValue: ``, displayTextArea: !0, title: `Sizing Lede`, type: f.String },
        Bs3mJvMAX: {
          __vekterDefault: [],
          control: {
            controls: {
              d1Jw9SToa: { defaultValue: ``, title: `Area`, type: `string` },
              ycDPu_uIt: { defaultValue: ``, title: `Exterior improvements`, type: `string` },
              ETF95scMJ: { defaultValue: ``, title: `Downspouts`, type: `string` },
            },
            type: `object`,
          },
          title: `Sizing`,
          type: f.Array,
        },
        wonnU8OWX: { defaultValue: ``, title: `Airflow Label`, type: f.String },
        QhS64UDdv: { defaultValue: ``, title: `Airflow Title`, type: f.String },
        p4H9aO0Fi: { defaultValue: ``, displayTextArea: !0, title: `Airflow Lede`, type: f.String },
        GJ_JjH1Pf: {
          __vekterDefault: [],
          control: {
            controls: {
              oZub02rfy: { defaultValue: ``, title: `Interior space`, type: `string` },
              zWxhxqyFe: { defaultValue: ``, title: `Net Area`, type: `string` },
              LolJHH4hA: { defaultValue: ``, title: `Roughly`, type: `string` },
            },
            type: `object`,
          },
          title: `Airflow`,
          type: f.Array,
        },
        kyXFLMVO3: { defaultValue: ``, title: `Scope Label`, type: f.String },
        dPKGRi4AF: { defaultValue: ``, title: `Scope Title`, type: f.String },
        iydnWyUxt: { defaultValue: ``, displayTextArea: !0, title: `Scope Lede`, type: f.String },
        h80N2et1p: { defaultValue: ``, title: `Scope Link Label`, type: f.String },
        Tiz1Au1yb: { title: `Scope Link`, type: f.Link },
        wzsDx9w0F: { defaultValue: ``, title: `Scope Head 1`, type: f.String },
        OR0qS25WS: { defaultValue: ``, title: `Scope Head 2`, type: f.String },
        Uan22i0Wa: {
          __vekterDefault: [],
          control: {
            controls: {
              q4PY7uNvK: { defaultValue: ``, title: `Number`, type: `string` },
              mOOJhADG_: { defaultValue: ``, title: `Title`, type: `string` },
              FtiEgsXnq: { defaultValue: ``, title: `Text`, type: `string` },
            },
            type: `object`,
          },
          title: `Scope`,
          type: f.Array,
        },
        iG4KMDdNl: { defaultValue: ``, title: `Report Label`, type: f.String },
        pGl0_v3lJ: { defaultValue: ``, title: `Report Title`, type: f.String },
        m0nNPfWxH: { defaultValue: ``, displayTextArea: !0, title: `Report Lede`, type: f.String },
        CCHt7nigc: { defaultValue: ``, title: `Tarp Label`, type: f.String },
        B7Wvvcqni: { defaultValue: ``, title: `Tarp Title`, type: f.String },
        NS5mAyXlF: { defaultValue: ``, displayTextArea: !0, title: `Tarp Lede`, type: f.String },
        JanWNWkRK: {
          __vekterDefault: [],
          control: {
            controls: { pDRjkvURd: { defaultValue: ``, title: `Text`, type: `string` } },
            type: `object`,
          },
          title: `Tarp Points`,
          type: f.Array,
        },
        hw70V5Hnw: { defaultValue: ``, title: `Uses Label`, type: f.String },
        x0AFBQwVQ: { defaultValue: ``, title: `Uses Title`, type: f.String },
        Iq15axqGb: { defaultValue: ``, displayTextArea: !0, title: `Uses Lede`, type: f.String },
        MKGl5YIzo: {
          __vekterDefault: [],
          control: {
            controls: {
              edXhU1Pfr: { defaultValue: ``, title: `Label`, type: `string` },
              MxiFft7Dt: { defaultValue: ``, title: `Title`, type: `string` },
              bK1YbW9nw: { defaultValue: ``, title: `Tick 1`, type: `string` },
              GUARRv3tb: { defaultValue: ``, title: `Tick 2`, type: `string` },
              Xwk022dlR: { defaultValue: ``, title: `Tick 3`, type: `string` },
              px_DLFbp2: { defaultValue: ``, title: `Tick 4`, type: `string` },
            },
            type: `object`,
          },
          title: `Uses`,
          type: f.Array,
        },
        Ci0lY4wZE: { defaultValue: ``, title: `Free Label`, type: f.String },
        E9m19n_rf: { defaultValue: ``, title: `Free Title`, type: f.String },
        h0lCI3JS2: { defaultValue: ``, displayTextArea: !0, title: `Free Text`, type: f.String },
        zvl6c7EnJ: {
          __vekterDefault: [],
          control: {
            controls: {
              aKrrABwRl: { defaultValue: ``, title: `Item`, type: `string` },
              xbGYFV8Qt: { defaultValue: ``, title: `Price`, type: `string` },
            },
            type: `object`,
          },
          title: `Free Rows`,
          type: f.Array,
        },
        lSdnUsRVc: { defaultValue: ``, title: `Claim Label`, type: f.String },
        tbd0RTAKU: { defaultValue: ``, title: `Claim Title`, type: f.String },
        RngG7zPYz: { defaultValue: ``, displayTextArea: !0, title: `Claim Lede`, type: f.String },
        XDxMtofEH: {
          __vekterDefault: [],
          control: {
            controls: {
              XfzJbM06p: { defaultValue: ``, title: `Title`, type: `string` },
              EsTlayAEz: { defaultValue: ``, title: `Text`, type: `string` },
            },
            type: `object`,
          },
          title: `Claim`,
          type: f.Array,
        },
        IEfHYVVkY: { defaultValue: ``, title: `Dont Label`, type: f.String },
        TiB80fd7S: { defaultValue: ``, title: `Dont Title`, type: f.String },
        CT4GHDtIm: { defaultValue: ``, displayTextArea: !0, title: `Dont Lede`, type: f.String },
        ymyzGS44r: {
          __vekterDefault: [],
          control: {
            controls: {
              VOUyotg0u: { defaultValue: ``, title: `Rule`, type: `string` },
              ZuSLkR4gs: { defaultValue: ``, title: `Text`, type: `string` },
            },
            type: `object`,
          },
          title: `Dont`,
          type: f.Array,
        },
        kXeiOEL7c: {
          __vekterDefault: [],
          control: {
            controls: {
              kRJo2VXvC: { defaultValue: ``, title: `Item`, type: `string` },
              S_WlswlxJ: { defaultValue: ``, title: `Price`, type: `string` },
            },
            type: `object`,
          },
          title: `Dont Costs`,
          type: f.Array,
        },
        bGbTAlAd2: { defaultValue: ``, title: `Prices Label`, type: f.String },
        Kfbme90q4: { defaultValue: ``, title: `Prices Title`, type: f.String },
        U72O9hwEC: { defaultValue: ``, displayTextArea: !0, title: `Prices Lede`, type: f.String },
        VX0isqsOw: { defaultValue: ``, title: `Prices Button Label`, type: f.String },
        lwvLx8Oh6: { title: `Prices Button Link`, type: f.Link },
        RSHLWHPcW: { defaultValue: ``, title: `Prices Head 1`, type: f.String },
        gaOjqxIY1: { defaultValue: ``, title: `Prices Head 2`, type: f.String },
        VAh67WjYi: { defaultValue: ``, title: `Prices Head 3`, type: f.String },
        GJVL65fWP: {
          __vekterDefault: [],
          control: {
            controls: {
              ho05Q0xcY: { defaultValue: ``, title: `Job`, type: `string` },
              lT9XUWKJn: { defaultValue: ``, title: `Covers`, type: `string` },
              dqchRrZpv: { defaultValue: ``, title: `Price`, type: `string` },
            },
            type: `object`,
          },
          title: `Price Rows`,
          type: f.Array,
        },
        UkvCtOKxW: {
          __vekterDefault: [],
          control: {
            controls: {
              iSEpdK2Cr: { defaultValue: ``, title: `Item`, type: `string` },
              QJuAq4Rq2: { defaultValue: ``, title: `Price`, type: `string` },
            },
            type: `object`,
          },
          title: `Price Extras`,
          type: f.Array,
        },
        U0xcEj8NI: { defaultValue: ``, title: `Materials Label`, type: f.String },
        o5paEmlz9: { defaultValue: ``, title: `Materials Title`, type: f.String },
        QlUJtIOnN: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `Materials Lede`,
          type: f.String,
        },
        FSdOlKLHp: { defaultValue: ``, title: `Projects Label`, type: f.String },
        uVe7ZBFhK: { defaultValue: ``, title: `Projects Title`, type: f.String },
        lZDbNtLcs: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `Projects Lede`,
          type: f.String,
        },
        AHH8nZRPo: { defaultValue: ``, title: `Projects Head`, type: f.String },
        UCvOIchGT: {
          dataIdentifier: `local-module:collection/vrNx7AlHT:default`,
          defaultValue: [],
          title: `Related Projects`,
          type: f.MultiCollectionReference,
        },
        ugD8hReQH: {
          dataIdentifier: `local-module:collection/EY9W11kVD:default`,
          defaultValue: [],
          title: `Related Note`,
          type: f.MultiCollectionReference,
        },
        sxGmmXbxt: {
          dataIdentifier: `local-module:collection/EY9W11kVD:default`,
          defaultValue: [],
          title: `Related Notes`,
          type: f.MultiCollectionReference,
        },
        WRgdALFE6: { defaultValue: ``, title: `FAQ Card`, type: f.String },
        kPl4G1vr8: { defaultValue: ``, title: `FAQ Link Label`, type: f.String },
        LtPL5VyG9: { title: `FAQ Link`, type: f.Link },
        fijQhEgUP: { defaultValue: ``, title: `Band Label`, type: f.String },
        c2I1nISup: { defaultValue: ``, title: `Band Title`, type: f.String },
        XdXNqzlhP: { defaultValue: ``, displayTextArea: !0, title: `Band Text`, type: f.String },
        no1NZGKze: { defaultValue: ``, title: `Band Button 1`, type: f.String },
        gU4NBLSt7: { title: `Band Button 1 Link`, type: f.Link },
        gt3ciOEdB: { defaultValue: ``, title: `Band Button 2`, type: f.String },
        Rg2sYi7ZK: { title: `Band Button 2 Link`, type: f.Link },
        sEOn1YNEb: { defaultValue: !1, title: `Header Ink`, type: f.Boolean },
        RtZdjlPv5: { defaultValue: !1, title: `CTA 1 Phone`, type: f.Boolean },
        ohnGYmUVL: { defaultValue: !1, title: `CTA 2 Arrow`, type: f.Boolean },
        Dd3FXJEBw: { defaultValue: !1, title: `Steps Early`, type: f.Boolean },
        Iceu3ckvo: { defaultValue: !1, title: `Steps Paper`, type: f.Boolean },
        n9Y5sduIg: { defaultValue: !1, title: `Steps Ink`, type: f.Boolean },
        DngIvP7wB: { defaultValue: !1, title: `Verdict Early`, type: f.Boolean },
        a1_5BUUza: { defaultValue: !1, title: `Verdict Late`, type: f.Boolean },
        ijTOl2DB0: { defaultValue: !1, title: `Projects Ink`, type: f.Boolean },
        fQi5sz2uK: { defaultValue: !1, title: `Projects Three`, type: f.Boolean },
        zj2dhODcR: { defaultValue: !1, title: `FAQ Gap`, type: f.Boolean },
        VC9CgqG89: { defaultValue: !1, title: `Band Button 2 Arrow`, type: f.Boolean },
        m0C48THmB: { defaultValue: ``, title: `SEO Title`, type: f.String },
        sLk6FDNzH: {
          defaultValue: ``,
          displayTextArea: !0,
          title: `SEO Description`,
          type: f.String,
        },
        createdAt: { title: `Created`, type: f.Date },
        updatedAt: { title: `Updated`, type: f.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/eHfc5JU5K:default`,
          title: `Previous`,
          type: f.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/eHfc5JU5K:default`,
          title: `Next`,
          type: f.CollectionReference,
        },
      }),
      (Zr = {}),
      (Qr = {
        async getSlugByRecordId(e, t) {
          let [n] = await Z.query(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `Uq4dgDOpK`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.Uq4dgDOpK;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Z.query(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `Uq4dgDOpK`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.id;
        },
        getContentLocaleIdByRecordId(e, t) {},
      }),
      ($r = {
        exports: {
          enumToDisplayNameFunctions: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          utils: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `data`,
            name: `data`,
            annotations: {
              framerCollectionUtils: `1`,
              framerEnumToDisplayNameUtils: `2`,
              framerContractVersion: `1`,
              framerRecordIdKey: `id`,
              framerAutoSizeImages: `true`,
              framerSlug: `Uq4dgDOpK`,
              framerCollectionId: `eHfc5JU5K`,
              framerColorSyntax: `false`,
              framerData: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { Qr as a, Q as i, Zr as n, $ as r, $r as t };
//# sourceMappingURL=eHfc5JU5K.HTuxaPYs.mjs.map
