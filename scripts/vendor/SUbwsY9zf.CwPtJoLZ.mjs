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
function re(e) {
  return typeof e == `function` ? e() : e;
}
function ie(e, t) {
  return F[e] > F[t];
}
function m(e) {
  let t;
  for (let n of e) {
    let e = re(n);
    if (((t === void 0 || ie(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function ae(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function h(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function g(e) {
  throw Error(`Unexpected value: ${e}`);
}
function _(e) {
  return typeof e == `string`;
}
function v(e) {
  return Number.isFinite(e);
}
function y(e) {
  return e === null;
}
function b(e) {
  if (y(e)) return 0;
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
      g(e);
  }
}
function oe(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = w.read(e);
    n.push(t);
  }
  return { type: `array`, value: n };
}
function se(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) w.write(e, n);
}
function ce(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = w.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function le(e) {
  return { type: `boolean`, value: e.readUint8() !== 0 };
}
function ue(e, t) {
  e.writeUint8(+!!t.value);
}
function de(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function fe(e) {
  return { type: `color`, value: e.readString() };
}
function pe(e, t) {
  e.writeString(t.value);
}
function me(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function he(e) {
  let t = e.readInt64();
  return { type: `date`, value: new Date(t).toISOString() };
}
function ge(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function _e(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function ve(e) {
  return { type: `enum`, value: e.readString() };
}
function ye(e, t) {
  e.writeString(t.value);
}
function be(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function xe(e) {
  return { type: `file`, value: e.readString() };
}
function Se(e, t) {
  e.writeString(t.value);
}
function Ce(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function we(e) {
  return { type: `link`, value: e.readJson() };
}
function Te(e, t) {
  e.writeJson(t.value);
}
function Ee(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function De(e) {
  return { type: `number`, value: e.readFloat64() };
}
function Oe(e, t) {
  e.writeFloat64(t.value);
}
function ke(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ae(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = w.read(e);
  }
  return { type: `object`, value: n };
}
function je(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), w.write(e, r));
}
function Me(e, t, n) {
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
      u = w.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Ne(e) {
  return { type: `responsiveimage`, value: e.readJson() };
}
function Pe(e, t) {
  e.writeJson(t.value);
}
function Fe(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ie(e) {
  let t = e.readInt8();
  if (t === 0) return { type: `richtext`, value: e.readUint32() };
  if (t === 1) return { type: `richtext`, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Le(e, t) {
  if (v(t.value)) (e.writeInt8(0), e.writeUint32(t.value));
  else if (_(t.value)) (e.writeInt8(1), e.writeString(t.value));
  else throw Error(`Invalid rich text pointer`);
}
function Re(e, t) {
  let n = e.value,
    r = t.value;
  if ((v(n) && v(r)) || (_(n) && _(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function ze(e) {
  return { type: `string`, value: e.readString() };
}
function Be(e, t) {
  e.writeString(t.value);
}
function Ve(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function He(e) {
  return { type: `vectorsetitem`, value: e.readUint32() };
}
function Ue(e, t) {
  e.writeUint32(t.value);
}
function We(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Ge(e) {
  let t = Math.floor(U * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function Ke(e, t) {
  let n = qe(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await G(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new K(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function x(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function qe(e) {
  h(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function S(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = w.read(e);
  }
  return t;
}
function* Je(e) {
  for (let t of e) yield* t.prioritySources;
}
var C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J;
function Ye() {
  return (Ye = e(() => {
    (c(),
      (T = Object.create),
      (E = Object.defineProperty),
      (D = Object.getOwnPropertyDescriptor),
      (O = Object.getOwnPropertyNames),
      (k = Object.getPrototypeOf),
      (A = Object.prototype.hasOwnProperty),
      (j = (e, t) =>
        function () {
          try {
            return (t || (0, e[O(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (M = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of O(t))
            A.call(e, i) ||
              i === n ||
              E(e, i, { get: () => t[i], enumerable: !(r = D(t, i)) || r.enumerable });
        return e;
      }),
      (N = (e, t, n) => (
        (n = e == null ? {} : T(k(e))),
        M(!t && e && e.__esModule ? n : E(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (P = N(
        j({
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
      (F = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (I = {
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
      (L =
        ((C = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = I.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = I.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = I.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = I.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = I.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = I.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = I.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = I.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = I.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = I.Float64;
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
              (this.view = ae(this.bytes)));
          }
        }),
        p(C, `textDecoder`, new TextDecoder()),
        C)),
      (R = (e) => 2 ** e - 1),
      (z = (e) => -(2 ** (e - 1))),
      (B = (e) => 2 ** (e - 1) - 1),
      z(8),
      z(16),
      z(32),
      -(BigInt(2) ** BigInt(63)),
      R(8),
      R(16),
      R(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      B(8),
      B(16),
      B(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (V = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            h(v(n), `Invalid chunkId`),
            h(v(r), `Invalid offset`),
            h(v(i), `Invalid length`),
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
                  : (h(this.length === e.length), 0);
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
              return oe(e);
            case 2:
              return le(e);
            case 3:
              return fe(e);
            case 4:
              return he(e);
            case 5:
              return ve(e);
            case 6:
              return xe(e);
            case 7:
              return we(e);
            case 8:
              return De(e);
            case 9:
              return Ae(e);
            case 10:
              return Ne(e);
            case 11:
              return Ie(e);
            case 12:
              return ze(e);
            case 13:
              return He(e);
            default:
              g(t);
          }
        }),
          (e.write = function (e, t) {
            let n = b(t);
            if ((e.writeUint8(n), !y(t)))
              switch (t.type) {
                case `array`:
                  return se(e, t);
                case `boolean`:
                  return ue(e, t);
                case `color`:
                  return pe(e, t);
                case `date`:
                  return ge(e, t);
                case `enum`:
                  return ye(e, t);
                case `file`:
                  return Se(e, t);
                case `link`:
                  return Te(e, t);
                case `number`:
                  return Oe(e, t);
                case `object`:
                  return je(e, t);
                case `responsiveimage`:
                  return Pe(e, t);
                case `richtext`:
                  return Le(e, t);
                case `vectorsetitem`:
                  return Ue(e, t);
                case `string`:
                  return Be(e, t);
                default:
                  g(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = b(e),
              i = b(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (y(e) || y(t)) return 0;
            switch (e.type) {
              case `array`:
                return (h(t.type === `array`), ce(e, t, n));
              case `boolean`:
                return (h(t.type === `boolean`), de(e, t));
              case `color`:
                return (h(t.type === `color`), me(e, t));
              case `date`:
                return (h(t.type === `date`), _e(e, t));
              case `enum`:
                return (h(t.type === `enum`), be(e, t));
              case `file`:
                return (h(t.type === `file`), Ce(e, t));
              case `link`:
                return (h(t.type === `link`), Ee(e, t));
              case `number`:
                return (h(t.type === `number`), ke(e, t));
              case `object`:
                return (h(t.type === `object`), Me(e, t, n));
              case `responsiveimage`:
                return (h(t.type === `responsiveimage`), Fe(e, t));
              case `richtext`:
                return (h(t.type === `richtext`), Re(e, t));
              case `vectorsetitem`:
                return (h(t.type === `vectorsetitem`), We(e, t));
              case `string`:
                return (h(t.type === `string`), Ve(e, t, n));
              default:
                g(e);
            }
          }));
      })((w ||= {})),
      (H = 3),
      (U = 250),
      (W = [408, 429, 500, 502, 503, 504]),
      (G = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!W.includes(r.status) || ++n > H) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > H) throw e;
          }
          await Ge(n);
        }
      }),
      (K = class {
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
            if ((h(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = x(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((h(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = x(t, i)), (r = e.end));
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
      (q = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = G(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new L(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = m(this.scanPrioritySources),
                        t = e ? l({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = S(n),
                        o = n.getOffset() - i,
                        s = new V(this.id, i, o).toString(),
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
              new P.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = V.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await Ke(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = m(Je(e)),
                      a = i ? l({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    h(o, `Missing range bytes`);
                    let s = S(new L(o)),
                      c = e[t]?.pointer;
                    (h(c, `Missing pointer`), r.push({ pointer: c, data: s }));
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
      (J = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = V.fromString(e),
                r = this.chunks[n.chunkId];
              return (h(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = V.fromString(e.pointer),
            r = V.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return w.compare(e, t, n);
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
            (this.chunks = this.options.chunks.map((e, t) => new q(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  }))();
}
function Xe(e) {
  return typeof e == `object` && !!e && !(/*#__PURE__*/ r(e)) && et in e;
}
function Ze(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Qe(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    typeof i == `number` ? (e[r] = n(i, t)) : Y(t, i, n);
  }
}
function Y(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : Y(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || Qe(e, t, n);
  }
}
function $e(e) {
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
          Qe(n, o, (t, n) => {
            if (t === 1) return n && r(n);
            if (typeof n != `string`) return n;
            let i = e[n];
            return i ? (Xe(i) && i.preload(), i) : n;
          });
          let s = e[t];
          return (
            Ze(s, `Module not found`),
            Xe(s) && s.preload(),
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
var X, Z, et, tt, nt;
function rt() {
  return (rt = e(() => {
    (a(),
      c(),
      o(),
      (et = `preload`),
      (tt =
        (((X = tt || {})[(X.Fragment = 1)] = `Fragment`),
        (X[(X.Link = 2)] = `Link`),
        (X[(X.Module = 3)] = `Module`),
        (X[(X.Tag = 4)] = `Tag`),
        (X[(X.Text = 5)] = `Text`),
        X)),
      (nt =
        (((Z = nt || {})[(Z.RichText = 1)] = `RichText`),
        (Z[(Z.VectorSetItem = 2)] = `VectorSetItem`),
        Z)));
  }))();
}
var it, at, ot, st, Q;
function $() {
  return ($ = e(() => {
    (c(),
      Ye(),
      rt(),
      (it = {
        createdAt: { isNullable: !0, type: f.Date },
        hNkU7h_u6: { isNullable: !0, type: f.String },
        id: { isNullable: !1, type: f.String },
        kWUGHdIml: { isNullable: !0, type: f.ResponsiveImage },
        nextItemId: { isNullable: !0, type: f.String },
        nK4vtGlf7: { isNullable: !0, type: f.String },
        previousItemId: { isNullable: !0, type: f.String },
        rU3PZye_g: { isNullable: !0, type: f.String },
        tzq9NJ2hf: { isNullable: !0, type: f.String },
        updatedAt: { isNullable: !0, type: f.Date },
        wylTAPIRT: { isNullable: !0, type: f.String },
      }),
      (at = []),
      (ot = (e) => {
        let t = at[e];
        if (t) return t().then((e) => e.default);
      }),
      (st = $e({})),
      new d(),
      (Q = {
        collectionByLocaleId: {
          default: new J({
            chunks: [
              new URL(
                `./SUbwsY9zf-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/9Ib5afIPavNgDwIwPBzp/Dupecj0yJH0gIfamjkcP/SUbwsY9zf.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `0ca60be9-6014-4458-bfd4-cbb62f7e3743default`,
            indexes: [],
            resolveRichText: st,
            resolveVectorSetItem: ot,
            schema: it,
          }),
        },
        displayName: `Team`,
        id: `0ca60be9-6014-4458-bfd4-cbb62f7e3743`,
      }),
      u(Q, {
        nK4vtGlf7: { defaultValue: ``, title: `Name`, type: f.String },
        hNkU7h_u6: { preventLocalization: !1, title: `Slug`, type: f.String },
        tzq9NJ2hf: { defaultValue: ``, title: `Role`, type: f.String },
        wylTAPIRT: { defaultValue: ``, title: `Project`, type: f.String },
        kWUGHdIml: { title: `Photo`, type: f.ResponsiveImage },
        rU3PZye_g: { defaultValue: ``, displayTextArea: !0, title: `Bio`, type: f.String },
        createdAt: { title: `Created`, type: f.Date },
        updatedAt: { title: `Updated`, type: f.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/SUbwsY9zf:default`,
          title: `Previous`,
          type: f.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/SUbwsY9zf:default`,
          title: `Next`,
          type: f.CollectionReference,
        },
      }));
  }))();
}
export { Q as n, $ as t };
//# sourceMappingURL=SUbwsY9zf.CwPtJoLZ.mjs.map
