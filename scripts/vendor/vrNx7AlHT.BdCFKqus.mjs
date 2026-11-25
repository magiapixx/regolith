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
  X,
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
  Z,
  Q,
  Sn,
  Cn,
  wn;
function $() {
  return ($ = e(() => {
    (c(),
      ct(),
      _t(),
      (K = {
        aYKfnSJqC: { isNullable: !0, type: f.String },
        BhZQERqHl: { isNullable: !0, type: f.String },
        Bl1gFS8rs: { isNullable: !0, type: f.String },
        C4fmIPiUt: { isNullable: !0, type: f.String },
        CdURDiHCe: { isNullable: !0, type: f.String },
        craZsnPGr: { isNullable: !0, type: f.String },
        createdAt: { isNullable: !0, type: f.Date },
        CvIHAIvJy: { isNullable: !0, type: f.String },
        DN9ZEPcRg: { isNullable: !0, type: f.String },
        dVmKlthsG: {
          definition: {
            definitions: {
              h0nk2wTAa: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              p2qjPCery: { isNullable: !0, type: f.String },
              ZAY3yTNxp: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        eGZOeN8mk: { isNullable: !0, type: f.String },
        Ek1uqO8Px: { isNullable: !0, type: f.String },
        f49NZ0IEz: { isNullable: !0, type: f.ResponsiveImage },
        fMa8pNt2I: { isNullable: !0, type: f.String },
        gJ_sjOqlc: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: f.String },
              PWDqLpHeV: { isNullable: !0, type: f.String },
              wxhaiRY2p: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        gjf5aIYfm: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: f.String },
              pqxwlxJZK: { isNullable: !0, type: f.String },
              zoeJBmyhE: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        hEMFOHguT: { isNullable: !0, type: f.String },
        hmy6exFKY: { isNullable: !0, type: f.String },
        id: { isNullable: !1, type: f.String },
        ILJSeMxJN: { isNullable: !0, type: f.String },
        IuTfgyc4s: {
          definition: {
            definitions: {
              hstnCu3N2: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              lx1VF0d3o: { isNullable: !0, type: f.String },
              qYPpeWEBY: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        IVYKgAnQg: { isNullable: !0, type: f.String },
        jIPslaZrs: { isNullable: !0, type: f.String },
        jT3TuUujk: { isNullable: !0, type: f.String },
        jxF8J8YhT: { isNullable: !0, type: f.String },
        k0Yyal5MJ: { isNullable: !0, type: f.String },
        kieVLqGyz: { isNullable: !0, type: f.String },
        LtIsKsNo1: { isNullable: !0, type: f.String },
        m7le00lBr: { isNullable: !0, type: f.String },
        mNjbE2xh6: { isNullable: !0, type: f.String },
        MvsrTCRTN: { isNullable: !0, type: f.String },
        nextItemId: { isNullable: !0, type: f.String },
        Ofd_6SL8Q: { isNullable: !0, type: f.String },
        previousItemId: { isNullable: !0, type: f.String },
        QfwHrYl90: { isNullable: !0, type: f.String },
        qiVvd3Vxx: { isNullable: !0, type: f.String },
        t5D1YeFxK: { isNullable: !0, type: f.String },
        tdlwFAgcB: { isNullable: !0, type: f.String },
        tEwG907oT: { isNullable: !0, type: f.String },
        tm9NnvEJk: { isNullable: !0, type: f.String },
        tv7IG8uvE: { isNullable: !0, type: f.String },
        u3PsdM7Lw: {
          definition: {
            definitions: {
              A9YiN1e6T: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              kVM7XFIcL: { isNullable: !0, type: f.String },
              Uz9xVkS_f: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        ueoLX2z9w: { isNullable: !0, type: f.String },
        ulJFQdmjB: { isNullable: !0, type: f.String },
        updatedAt: { isNullable: !0, type: f.Date },
        uyOoB3OUt: {
          definition: {
            definitions: {
              BqevuP4Yi: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              th65p9dmf: { isNullable: !0, type: f.ResponsiveImage },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        v7n5zILXz: { isNullable: !0, type: f.String },
        vqXnmEfz7: { isNullable: !0, type: f.ResponsiveImage },
        YBF5rMFZg: { isNullable: !0, type: f.String },
        Yj7zYIBza: { isNullable: !0, type: f.String },
        ykZZqRPuA: { isNullable: !0, type: f.String },
        yLQB1y2fZ: { isNullable: !0, type: f.String },
        Yx1eigWuh: { isNullable: !0, type: f.String },
        ZFmfLptMp: { isNullable: !0, type: f.String },
        ZGsb4wlgX: { isNullable: !0, type: f.String },
      }),
      (q = new URL(
        `./vrNx7AlHT-indexes-default-0.framercms`,
        `https://framerusercontent.com/modules/terR5zviqKldbou3kEgv/gcptBNB6AFPqvEDja9bd/vrNx7AlHT.js`
      ).href.replace(`/modules/`, `/cms/`)),
      (vt = [`id`]),
      (J = { type: 1 }),
      (yt = [`previousItemId`]),
      (bt = [`nextItemId`]),
      (xt = [`id`, `v7n5zILXz`]),
      (St = [`v7n5zILXz`, `id`]),
      (Y = { type: 0 }),
      (Ct = [`BhZQERqHl`]),
      (wt = [`v7n5zILXz`]),
      (Tt = [`jT3TuUujk`]),
      (Et = [`CvIHAIvJy`]),
      (Dt = [`tm9NnvEJk`]),
      (Ot = [`QfwHrYl90`]),
      (kt = [`jIPslaZrs`]),
      (At = [`vqXnmEfz7`]),
      (jt = [`tdlwFAgcB`]),
      (Mt = [`t5D1YeFxK`]),
      (Nt = [`ykZZqRPuA`]),
      (Pt = [`tv7IG8uvE`]),
      (Ft = [`MvsrTCRTN`]),
      (It = [`C4fmIPiUt`]),
      (Lt = [`Yx1eigWuh`]),
      (Rt = [`ulJFQdmjB`]),
      (zt = [`ueoLX2z9w`]),
      (Bt = [`craZsnPGr`]),
      (Vt = [`aYKfnSJqC`]),
      (Ht = [`tEwG907oT`]),
      (Ut = [`kieVLqGyz`]),
      (Wt = [`ILJSeMxJN`]),
      (Gt = [`CdURDiHCe`]),
      (Kt = [`k0Yyal5MJ`]),
      (qt = [`hmy6exFKY`]),
      (Jt = [`eGZOeN8mk`]),
      (Yt = [`DN9ZEPcRg`]),
      (Xt = [`Ek1uqO8Px`]),
      (Zt = [`YBF5rMFZg`]),
      (Qt = [`u3PsdM7Lw`]),
      ($t = [`Bl1gFS8rs`]),
      (en = [`ZGsb4wlgX`]),
      (tn = [`yLQB1y2fZ`]),
      (nn = [`fMa8pNt2I`]),
      (rn = [`IuTfgyc4s`]),
      (an = [`LtIsKsNo1`]),
      (on = [`ZFmfLptMp`]),
      (sn = [`hEMFOHguT`]),
      (cn = [`IVYKgAnQg`]),
      (ln = [`Yj7zYIBza`]),
      (un = [`gJ_sjOqlc`]),
      (dn = [`gjf5aIYfm`]),
      (X = [`m7le00lBr`]),
      (fn = [`dVmKlthsG`]),
      (pn = [`f49NZ0IEz`]),
      (mn = [`qiVvd3Vxx`]),
      (hn = [`mNjbE2xh6`]),
      (gn = [`Ofd_6SL8Q`]),
      (_n = [`jxF8J8YhT`]),
      (vn = [`uyOoB3OUt`]),
      (yn = []),
      (bn = (e) => {
        let t = yn[e];
        if (t) return t().then((e) => e.default);
      }),
      (xn = pt({})),
      (Z = new d()),
      (Q = {
        collectionByLocaleId: {
          default: new st({
            chunks: [
              new URL(
                `./vrNx7AlHT-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/terR5zviqKldbou3kEgv/gcptBNB6AFPqvEDja9bd/vrNx7AlHT.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `063bfc33-0b97-4064-8bd6-10c103f451cbdefault`,
            indexes: [
              new U({
                collation: J,
                collectionSchema: K,
                fieldNames: vt,
                range: { from: 0, to: 145 },
                url: q,
              }),
              new U({
                collation: J,
                collectionSchema: K,
                fieldNames: yt,
                range: { from: 145, to: 289 },
                url: q,
              }),
              new U({
                collation: J,
                collectionSchema: K,
                fieldNames: bt,
                range: { from: 289, to: 429 },
                url: q,
              }),
              new U({
                collation: J,
                collectionSchema: K,
                fieldNames: xt,
                range: { from: 429, to: 712 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: St,
                range: { from: 712, to: 995 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ct,
                range: { from: 995, to: 1280 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: wt,
                range: { from: 1280, to: 1487 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Tt,
                range: { from: 1487, to: 1604 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Et,
                range: { from: 1604, to: 1811 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Dt,
                range: { from: 1811, to: 1977 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ot,
                range: { from: 1977, to: 2172 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: kt,
                range: { from: 2172, to: 3346 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: At,
                range: { from: 3346, to: 6236 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: jt,
                range: { from: 6236, to: 6436 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Mt,
                range: { from: 6436, to: 6593 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Nt,
                range: { from: 6593, to: 6731 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Pt,
                range: { from: 6731, to: 6878 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ft,
                range: { from: 6878, to: 7005 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: It,
                range: { from: 7005, to: 7238 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Lt,
                range: { from: 7238, to: 7511 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Rt,
                range: { from: 7511, to: 7666 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: zt,
                range: { from: 7666, to: 7899 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Bt,
                range: { from: 7899, to: 8051 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Vt,
                range: { from: 8051, to: 8306 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ht,
                range: { from: 8306, to: 8466 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ut,
                range: { from: 8466, to: 8670 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Wt,
                range: { from: 8670, to: 8856 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Gt,
                range: { from: 8856, to: 10051 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Kt,
                range: { from: 10051, to: 11105 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: qt,
                range: { from: 11105, to: 11286 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Jt,
                range: { from: 11286, to: 11588 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Yt,
                range: { from: 11588, to: 12375 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Xt,
                range: { from: 12375, to: 12569 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Zt,
                range: { from: 12569, to: 12857 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Qt,
                range: { from: 12857, to: 15219 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: $t,
                range: { from: 15219, to: 15441 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: en,
                range: { from: 15441, to: 15665 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: tn,
                range: { from: 15665, to: 16317 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: nn,
                range: { from: 16317, to: 16529 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: rn,
                range: { from: 16529, to: 20817 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: an,
                range: { from: 20817, to: 21115 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: on,
                range: { from: 21115, to: 21248 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: sn,
                range: { from: 21248, to: 21373 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: cn,
                range: { from: 21373, to: 21515 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: ln,
                range: { from: 21515, to: 21650 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: un,
                range: { from: 21650, to: 23286 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: dn,
                range: { from: 23286, to: 24348 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: X,
                range: { from: 24348, to: 24641 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: fn,
                range: { from: 24641, to: 29712 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: pn,
                range: { from: 29712, to: 32672 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: mn,
                range: { from: 32672, to: 32909 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: hn,
                range: { from: 32909, to: 34597 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: gn,
                range: { from: 34597, to: 34834 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: _n,
                range: { from: 34834, to: 34986 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: vn,
                range: { from: 34986, to: 42741 },
                url: q,
              }),
            ],
            resolveRichText: xn,
            resolveVectorSetItem: bn,
            schema: K,
          }),
        },
        displayName: `Projects`,
        id: `063bfc33-0b97-4064-8bd6-10c103f451cb`,
      }),
      u(Q, {
        BhZQERqHl: { defaultValue: ``, title: `Name`, type: f.String },
        v7n5zILXz: { preventLocalization: !1, title: `Slug`, type: f.String },
        jT3TuUujk: { defaultValue: ``, title: `Number`, type: f.String },
        CvIHAIvJy: { defaultValue: ``, title: `Short Name`, type: f.String },
        tm9NnvEJk: { defaultValue: ``, title: `Place`, type: f.String },
        QfwHrYl90: { defaultValue: ``, title: `Type`, type: f.String },
        jIPslaZrs: { defaultValue: ``, displayTextArea: !0, title: `Description`, type: f.String },
        vqXnmEfz7: { title: `Image`, type: f.ResponsiveImage },
        tdlwFAgcB: { defaultValue: ``, title: `Material`, type: f.String },
        t5D1YeFxK: { defaultValue: ``, title: `Size`, type: f.String },
        ykZZqRPuA: { defaultValue: ``, title: `On Site`, type: f.String },
        tv7IG8uvE: { defaultValue: ``, title: `Completed`, type: f.String },
        MvsrTCRTN: { defaultValue: ``, title: `Job Number`, type: f.String },
        C4fmIPiUt: { defaultValue: ``, title: `Address`, type: f.String },
        Yx1eigWuh: { defaultValue: ``, title: `House`, type: f.String },
        ulJFQdmjB: { defaultValue: ``, title: `Foreman`, type: f.String },
        ueoLX2z9w: { defaultValue: ``, title: `Crew`, type: f.String },
        craZsnPGr: {
          dataIdentifier: `local-module:collection/vrNx7AlHT:default`,
          title: `Next Project`,
          type: f.CollectionReference,
        },
        aYKfnSJqC: { defaultValue: ``, title: `Card Type`, type: f.String },
        tEwG907oT: { defaultValue: ``, title: `Material Tag`, type: f.String },
        kieVLqGyz: { defaultValue: ``, title: `Service Tags`, type: f.String },
        ILJSeMxJN: { defaultValue: ``, title: `Town Tag`, type: f.String },
        CdURDiHCe: { defaultValue: ``, title: `Brief 1`, type: f.String },
        k0Yyal5MJ: { defaultValue: ``, title: `Brief 2`, type: f.String },
        hmy6exFKY: { defaultValue: ``, title: `Inspection Date`, type: f.String },
        eGZOeN8mk: { defaultValue: ``, title: `Found Title`, type: f.String },
        DN9ZEPcRg: { defaultValue: ``, title: `Found Lede`, type: f.String },
        Ek1uqO8Px: { defaultValue: ``, title: `Report Title`, type: f.String },
        YBF5rMFZg: { defaultValue: ``, title: `Report Id`, type: f.String },
        u3PsdM7Lw: {
          __vekterDefault: [],
          control: {
            controls: {
              Uz9xVkS_f: { defaultValue: ``, title: `Level`, type: `string` },
              kVM7XFIcL: { defaultValue: ``, title: `Code`, type: `string` },
              A9YiN1e6T: { defaultValue: ``, title: `Text`, type: `string` },
            },
            type: `object`,
          },
          title: `Issues`,
          type: f.Array,
        },
        Bl1gFS8rs: { defaultValue: ``, title: `Report Foot 1`, type: f.String },
        ZGsb4wlgX: { defaultValue: ``, title: `Report Foot 2`, type: f.String },
        yLQB1y2fZ: { defaultValue: ``, title: `Scope Lede`, type: f.String },
        fMa8pNt2I: { defaultValue: ``, title: `Quote Id`, type: f.String },
        IuTfgyc4s: {
          __vekterDefault: [],
          control: {
            controls: {
              hstnCu3N2: { defaultValue: ``, title: `Item`, type: `string` },
              qYPpeWEBY: { defaultValue: ``, title: `Qty`, type: `string` },
              lx1VF0d3o: { defaultValue: ``, title: `Price`, type: `string` },
            },
            type: `object`,
          },
          title: `Scope Rows`,
          type: f.Array,
        },
        LtIsKsNo1: { defaultValue: ``, title: `Variation Item`, type: f.String },
        ZFmfLptMp: { defaultValue: ``, title: `Variation Qty`, type: f.String },
        hEMFOHguT: { defaultValue: ``, title: `Variation Price`, type: f.String },
        IVYKgAnQg: { defaultValue: ``, title: `Fixed Price`, type: f.String },
        Yj7zYIBza: { defaultValue: ``, title: `Final Invoice`, type: f.String },
        gJ_sjOqlc: {
          __vekterDefault: [],
          control: {
            controls: {
              PWDqLpHeV: { defaultValue: ``, title: `Value`, type: `string` },
              wxhaiRY2p: { defaultValue: ``, title: `Label`, type: `string` },
            },
            type: `object`,
          },
          title: `Numbers`,
          type: f.Array,
        },
        gjf5aIYfm: {
          __vekterDefault: [],
          control: {
            controls: {
              zoeJBmyhE: { defaultValue: ``, title: `Item`, type: `string` },
              pqxwlxJZK: { defaultValue: ``, title: `Amount`, type: `string` },
            },
            type: `object`,
          },
          title: `Paid`,
          type: f.Array,
        },
        m7le00lBr: { defaultValue: ``, title: `Log Id`, type: f.String },
        dVmKlthsG: {
          __vekterDefault: [],
          control: {
            controls: {
              ZAY3yTNxp: { defaultValue: ``, title: `Date`, type: `string` },
              h0nk2wTAa: { defaultValue: ``, title: `Title`, type: `string` },
              p2qjPCery: { defaultValue: ``, title: `Note`, type: `string` },
            },
            type: `object`,
          },
          title: `Log`,
          type: f.Array,
        },
        f49NZ0IEz: { title: `Result Image`, type: f.ResponsiveImage },
        qiVvd3Vxx: { defaultValue: ``, title: `Result Caption`, type: f.String },
        mNjbE2xh6: { defaultValue: ``, title: `Result Lead`, type: f.String },
        Ofd_6SL8Q: { defaultValue: ``, title: `Warranty Code`, type: f.String },
        jxF8J8YhT: {
          dataIdentifier: `local-module:collection/vrNx7AlHT:default`,
          title: `Previous Project`,
          type: f.CollectionReference,
        },
        uyOoB3OUt: {
          __vekterDefault: [],
          control: {
            controls: {
              th65p9dmf: { title: `Photo`, type: `responsiveimage` },
              BqevuP4Yi: { defaultValue: ``, title: `Caption`, type: `string` },
            },
            type: `object`,
          },
          title: `Photos`,
          type: f.Array,
        },
        createdAt: { title: `Created`, type: f.Date },
        updatedAt: { title: `Updated`, type: f.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/vrNx7AlHT:default`,
          title: `Previous`,
          type: f.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/vrNx7AlHT:default`,
          title: `Next`,
          type: f.CollectionReference,
        },
      }),
      (Sn = {}),
      (Cn = {
        async getSlugByRecordId(e, t) {
          let [n] = await Z.query(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `v7n5zILXz`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.v7n5zILXz;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Z.query(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `v7n5zILXz`, type: `Identifier` },
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
      (wn = {
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
              framerContractVersion: `1`,
              framerCollectionUtils: `1`,
              framerCollectionId: `vrNx7AlHT`,
              framerSlug: `v7n5zILXz`,
              framerColorSyntax: `false`,
              framerAutoSizeImages: `true`,
              framerEnumToDisplayNameUtils: `2`,
              framerRecordIdKey: `id`,
              framerData: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { Cn as a, $ as i, Q as n, Sn as r, wn as t };
//# sourceMappingURL=vrNx7AlHT.BdCFKqus.mjs.map
