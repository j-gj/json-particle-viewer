/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Yr = "158", Rn = { ROTATE: 0, DOLLY: 1, PAN: 2 }, wn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, ho = 0, ss = 1, fo = 2, Pa = 1, po = 2, Xt = 3, cn = 0, xt = 1, qt = 2, an = 0, qn = 1, as = 2, os = 3, ls = 4, mo = 5, gn = 100, _o = 101, go = 102, cs = 103, us = 104, vo = 200, xo = 201, Mo = 202, So = 203, Nr = 204, Fr = 205, Eo = 206, To = 207, yo = 208, bo = 209, Ao = 210, Ro = 211, wo = 212, Co = 213, Po = 214, Lo = 0, Do = 1, Uo = 2, ki = 3, Io = 4, No = 5, Fo = 6, Oo = 7, La = 0, Bo = 1, zo = 2, on = 0, Ho = 1, Go = 2, Vo = 3, ko = 4, Wo = 5, Da = 300, jn = 301, Kn = 302, Or = 303, Br = 304, Ki = 306, zr = 1e3, It = 1001, Hr = 1002, mt = 1003, hs = 1004, rr = 1005, Rt = 1006, Xo = 1007, oi = 1008, ln = 1009, qo = 1010, Yo = 1011, jr = 1012, Ua = 1013, nn = 1014, rn = 1015, li = 1016, Ia = 1017, Na = 1018, xn = 1020, jo = 1021, Nt = 1023, Ko = 1024, Zo = 1025, Mn = 1026, Zn = 1027, $o = 1028, Fa = 1029, Jo = 1030, Oa = 1031, Ba = 1033, sr = 33776, ar = 33777, or = 33778, lr = 33779, ds = 35840, fs = 35841, ps = 35842, ms = 35843, Qo = 36196, _s = 37492, gs = 37496, vs = 37808, xs = 37809, Ms = 37810, Ss = 37811, Es = 37812, Ts = 37813, ys = 37814, bs = 37815, As = 37816, Rs = 37817, ws = 37818, Cs = 37819, Ps = 37820, Ls = 37821, cr = 36492, Ds = 36494, Us = 36495, el = 36283, Is = 36284, Ns = 36285, Fs = 36286, za = 3e3, Sn = 3001, tl = 3200, nl = 3201, il = 0, rl = 1, Ct = "", ot = "srgb", jt = "srgb-linear", Kr = "display-p3", Zi = "display-p3-linear", Wi = "linear", Ye = "srgb", Xi = "rec709", qi = "p3", Cn = 7680, Os = 519, sl = 512, al = 513, ol = 514, ll = 515, cl = 516, ul = 517, hl = 518, dl = 519, Bs = 35044, zs = "300 es", Gr = 1035, Yt = 2e3, Yi = 2001;
class An {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, o = r.length; s < o; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const ut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Gi = Math.PI / 180, Vr = 180 / Math.PI;
function ci() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (ut[i & 255] + ut[i >> 8 & 255] + ut[i >> 16 & 255] + ut[i >> 24 & 255] + "-" + ut[e & 255] + ut[e >> 8 & 255] + "-" + ut[e >> 16 & 15 | 64] + ut[e >> 24 & 255] + "-" + ut[t & 63 | 128] + ut[t >> 8 & 255] + "-" + ut[t >> 16 & 255] + ut[t >> 24 & 255] + ut[n & 255] + ut[n >> 8 & 255] + ut[n >> 16 & 255] + ut[n >> 24 & 255]).toLowerCase();
}
function _t(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function fl(i, e) {
  return (i % e + e) % e;
}
function ur(i, e, t) {
  return (1 - t) * i + t * e;
}
function Hs(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function kr(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function ei(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function vt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const pl = {
  DEG2RAD: Gi
};
class Oe {
  constructor(e = 0, t = 0) {
    Oe.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(_t(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * n - o * r + e.x, this.y = s * r + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Fe {
  constructor(e, t, n, r, s, o, a, l, c) {
    Fe.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, o, a, l, c);
  }
  set(e, t, n, r, s, o, a, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = r, u[2] = a, u[3] = t, u[4] = s, u[5] = l, u[6] = n, u[7] = o, u[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], u = n[4], f = n[7], d = n[2], m = n[5], g = n[8], v = r[0], p = r[3], h = r[6], y = r[1], M = r[4], w = r[7], R = r[2], P = r[5], b = r[8];
    return s[0] = o * v + a * y + l * R, s[3] = o * p + a * M + l * P, s[6] = o * h + a * w + l * b, s[1] = c * v + u * y + f * R, s[4] = c * p + u * M + f * P, s[7] = c * h + u * w + f * b, s[2] = d * v + m * y + g * R, s[5] = d * p + m * M + g * P, s[8] = d * h + m * w + g * b, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
    return t * o * u - t * a * c - n * s * u + n * a * l + r * s * c - r * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], f = u * o - a * c, d = a * l - u * s, m = c * s - o * l, g = t * f + n * d + r * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / g;
    return e[0] = f * v, e[1] = (r * c - u * n) * v, e[2] = (a * n - r * o) * v, e[3] = d * v, e[4] = (u * t - r * l) * v, e[5] = (r * s - a * t) * v, e[6] = m * v, e[7] = (n * l - c * t) * v, e[8] = (o * t - n * s) * v, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, s, o, a) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * o + c * a) + o + e,
      -r * c,
      r * l,
      -r * (-c * o + l * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(hr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(hr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(hr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const hr = /* @__PURE__ */ new Fe();
function Ha(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function ji(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function ml() {
  const i = ji("canvas");
  return i.style.display = "block", i;
}
const Gs = {};
function ai(i) {
  i in Gs || (Gs[i] = !0, console.warn(i));
}
const Vs = /* @__PURE__ */ new Fe().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), ks = /* @__PURE__ */ new Fe().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), mi = {
  [jt]: {
    transfer: Wi,
    primaries: Xi,
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [ot]: {
    transfer: Ye,
    primaries: Xi,
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [Zi]: {
    transfer: Wi,
    primaries: qi,
    toReference: (i) => i.applyMatrix3(ks),
    fromReference: (i) => i.applyMatrix3(Vs)
  },
  [Kr]: {
    transfer: Ye,
    primaries: qi,
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3(ks),
    fromReference: (i) => i.applyMatrix3(Vs).convertLinearToSRGB()
  }
}, _l = /* @__PURE__ */ new Set([jt, Zi]), We = {
  enabled: !0,
  _workingColorSpace: jt,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  },
  set legacyMode(i) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !i;
  },
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(i) {
    if (!_l.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = mi[e].toReference, r = mi[t].fromReference;
    return r(n(i));
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return mi[i].primaries;
  },
  getTransfer: function(i) {
    return i === Ct ? Wi : mi[i].transfer;
  }
};
function Yn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function dr(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Pn;
class Ga {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Pn === void 0 && (Pn = ji("canvas")), Pn.width = e.width, Pn.height = e.height;
      const n = Pn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Pn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = ji("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let o = 0; o < s.length; o++)
        s[o] = Yn(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Yn(t[n] / 255) * 255) : t[n] = Yn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let gl = 0;
class Va {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: gl++ }), this.uuid = ci(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(fr(r[o].image)) : s.push(fr(r[o]));
      } else
        s = fr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function fr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Ga.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let vl = 0;
class Mt extends An {
  constructor(e = Mt.DEFAULT_IMAGE, t = Mt.DEFAULT_MAPPING, n = It, r = It, s = Rt, o = oi, a = Nt, l = ln, c = Mt.DEFAULT_ANISOTROPY, u = Ct) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: vl++ }), this.uuid = ci(), this.name = "", this.source = new Va(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Oe(0, 0), this.repeat = new Oe(1, 1), this.center = new Oe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Fe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof u == "string" ? this.colorSpace = u : (ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = u === Sn ? ot : Ct), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Da) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case zr:
          e.x = e.x - Math.floor(e.x);
          break;
        case It:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Hr:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case zr:
          e.y = e.y - Math.floor(e.y);
          break;
        case It:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Hr:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === ot ? Sn : za;
  }
  set encoding(e) {
    ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Sn ? ot : Ct;
  }
}
Mt.DEFAULT_IMAGE = null;
Mt.DEFAULT_MAPPING = Da;
Mt.DEFAULT_ANISOTROPY = 1;
class lt {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    lt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements, c = l[0], u = l[4], f = l[8], d = l[1], m = l[5], g = l[9], v = l[2], p = l[6], h = l[10];
    if (Math.abs(u - d) < 0.01 && Math.abs(f - v) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(u + d) < 0.1 && Math.abs(f + v) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + m + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const M = (c + 1) / 2, w = (m + 1) / 2, R = (h + 1) / 2, P = (u + d) / 4, b = (f + v) / 4, W = (g + p) / 4;
      return M > w && M > R ? M < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(M), r = P / n, s = b / n) : w > R ? w < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(w), n = P / r, s = W / r) : R < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(R), n = b / s, r = W / s), this.set(n, r, s, t), this;
    }
    let y = Math.sqrt((p - g) * (p - g) + (f - v) * (f - v) + (d - u) * (d - u));
    return Math.abs(y) < 1e-3 && (y = 1), this.x = (p - g) / y, this.y = (f - v) / y, this.z = (d - u) / y, this.w = Math.acos((c + m + h - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class xl extends An {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new lt(0, 0, e, t), this.scissorTest = !1, this.viewport = new lt(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (ai("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Sn ? ot : Ct), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Rt,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, n), this.texture = new Mt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Va(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Tn extends xl {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class ka extends Mt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = mt, this.minFilter = mt, this.wrapR = It, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Ml extends Mt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = mt, this.minFilter = mt, this.wrapR = It, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class yn {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let l = n[r + 0], c = n[r + 1], u = n[r + 2], f = n[r + 3];
    const d = s[o + 0], m = s[o + 1], g = s[o + 2], v = s[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = f;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = m, e[t + 2] = g, e[t + 3] = v;
      return;
    }
    if (f !== v || l !== d || c !== m || u !== g) {
      let p = 1 - a;
      const h = l * d + c * m + u * g + f * v, y = h >= 0 ? 1 : -1, M = 1 - h * h;
      if (M > Number.EPSILON) {
        const R = Math.sqrt(M), P = Math.atan2(R, h * y);
        p = Math.sin(p * P) / R, a = Math.sin(a * P) / R;
      }
      const w = a * y;
      if (l = l * p + d * w, c = c * p + m * w, u = u * p + g * w, f = f * p + v * w, p === 1 - a) {
        const R = 1 / Math.sqrt(l * l + c * c + u * u + f * f);
        l *= R, c *= R, u *= R, f *= R;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = f;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r], l = n[r + 1], c = n[r + 2], u = n[r + 3], f = s[o], d = s[o + 1], m = s[o + 2], g = s[o + 3];
    return e[t] = a * g + u * f + l * m - c * d, e[t + 1] = l * g + u * d + c * f - a * m, e[t + 2] = c * g + u * m + a * d - l * f, e[t + 3] = u * g - a * f - l * d - c * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), u = a(r / 2), f = a(s / 2), d = l(n / 2), m = l(r / 2), g = l(s / 2);
    switch (o) {
      case "XYZ":
        this._x = d * u * f + c * m * g, this._y = c * m * f - d * u * g, this._z = c * u * g + d * m * f, this._w = c * u * f - d * m * g;
        break;
      case "YXZ":
        this._x = d * u * f + c * m * g, this._y = c * m * f - d * u * g, this._z = c * u * g - d * m * f, this._w = c * u * f + d * m * g;
        break;
      case "ZXY":
        this._x = d * u * f - c * m * g, this._y = c * m * f + d * u * g, this._z = c * u * g + d * m * f, this._w = c * u * f - d * m * g;
        break;
      case "ZYX":
        this._x = d * u * f - c * m * g, this._y = c * m * f + d * u * g, this._z = c * u * g - d * m * f, this._w = c * u * f + d * m * g;
        break;
      case "YZX":
        this._x = d * u * f + c * m * g, this._y = c * m * f + d * u * g, this._z = c * u * g - d * m * f, this._w = c * u * f - d * m * g;
        break;
      case "XZY":
        this._x = d * u * f - c * m * g, this._y = c * m * f - d * u * g, this._z = c * u * g + d * m * f, this._w = c * u * f + d * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], l = t[9], c = t[2], u = t[6], f = t[10], d = n + a + f;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / m, this._x = (u - l) * m, this._y = (s - c) * m, this._z = (o - r) * m;
    } else if (n > a && n > f) {
      const m = 2 * Math.sqrt(1 + n - a - f);
      this._w = (u - l) / m, this._x = 0.25 * m, this._y = (r + o) / m, this._z = (s + c) / m;
    } else if (a > f) {
      const m = 2 * Math.sqrt(1 + a - n - f);
      this._w = (s - c) / m, this._x = (r + o) / m, this._y = 0.25 * m, this._z = (l + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + f - n - a);
      this._w = (o - r) / m, this._x = (s + c) / m, this._y = (l + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(_t(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, o = e._w, a = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + o * a + r * c - s * l, this._y = r * u + o * l + s * a - n * c, this._z = s * u + o * c + n * l - r * a, this._w = o * u - n * a - r * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, r = this._y, s = this._z, o = this._w;
    let a = o * e._w + n * e._x + r * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = r, this._z = s, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, a), f = Math.sin((1 - t) * u) / c, d = Math.sin(t * u) / c;
    return this._w = o * f + this._w * d, this._x = n * f + this._x * d, this._y = r * f + this._y * d, this._z = s * f + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), r = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(r)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class I {
  constructor(e = 0, t = 0, n = 0) {
    I.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Ws.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ws.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * r - a * n), u = 2 * (a * t - s * r), f = 2 * (s * n - o * t);
    return this.x = t + l * c + o * f - a * u, this.y = n + l * u + a * c - s * f, this.z = r + l * f + s * u - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = r * l - s * a, this.y = s * o - n * l, this.z = n * a - r * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return pr.copy(this).projectOnVector(e), this.sub(pr);
  }
  reflect(e) {
    return this.sub(pr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(_t(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const pr = /* @__PURE__ */ new I(), Ws = /* @__PURE__ */ new yn();
class ui {
  constructor(e = new I(1 / 0, 1 / 0, 1 / 0), t = new I(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Pt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Pt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Pt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let o = 0, a = s.count; o < a; o++)
          e.isMesh === !0 ? e.getVertexPosition(o, Pt) : Pt.fromBufferAttribute(s, o), Pt.applyMatrix4(e.matrixWorld), this.expandByPoint(Pt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), _i.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), _i.copy(n.boundingBox)), _i.applyMatrix4(e.matrixWorld), this.union(_i);
    }
    const r = e.children;
    for (let s = 0, o = r.length; s < o; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Pt), Pt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ti), gi.subVectors(this.max, ti), Ln.subVectors(e.a, ti), Dn.subVectors(e.b, ti), Un.subVectors(e.c, ti), Zt.subVectors(Dn, Ln), $t.subVectors(Un, Dn), dn.subVectors(Ln, Un);
    let t = [
      0,
      -Zt.z,
      Zt.y,
      0,
      -$t.z,
      $t.y,
      0,
      -dn.z,
      dn.y,
      Zt.z,
      0,
      -Zt.x,
      $t.z,
      0,
      -$t.x,
      dn.z,
      0,
      -dn.x,
      -Zt.y,
      Zt.x,
      0,
      -$t.y,
      $t.x,
      0,
      -dn.y,
      dn.x,
      0
    ];
    return !mr(t, Ln, Dn, Un, gi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !mr(t, Ln, Dn, Un, gi)) ? !1 : (vi.crossVectors(Zt, $t), t = [vi.x, vi.y, vi.z], mr(t, Ln, Dn, Un, gi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Pt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Pt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Ht[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Ht[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Ht[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Ht[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Ht[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Ht[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Ht[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Ht[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Ht), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Ht = [
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I()
], Pt = /* @__PURE__ */ new I(), _i = /* @__PURE__ */ new ui(), Ln = /* @__PURE__ */ new I(), Dn = /* @__PURE__ */ new I(), Un = /* @__PURE__ */ new I(), Zt = /* @__PURE__ */ new I(), $t = /* @__PURE__ */ new I(), dn = /* @__PURE__ */ new I(), ti = /* @__PURE__ */ new I(), gi = /* @__PURE__ */ new I(), vi = /* @__PURE__ */ new I(), fn = /* @__PURE__ */ new I();
function mr(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    fn.fromArray(i, s);
    const a = r.x * Math.abs(fn.x) + r.y * Math.abs(fn.y) + r.z * Math.abs(fn.z), l = e.dot(fn), c = t.dot(fn), u = n.dot(fn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a)
      return !1;
  }
  return !0;
}
const Sl = /* @__PURE__ */ new ui(), ni = /* @__PURE__ */ new I(), _r = /* @__PURE__ */ new I();
class $i {
  constructor(e = new I(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Sl.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    ni.subVectors(e, this.center);
    const t = ni.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(ni, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (_r.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ni.copy(e.center).add(_r)), this.expandByPoint(ni.copy(e.center).sub(_r))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Gt = /* @__PURE__ */ new I(), gr = /* @__PURE__ */ new I(), xi = /* @__PURE__ */ new I(), Jt = /* @__PURE__ */ new I(), vr = /* @__PURE__ */ new I(), Mi = /* @__PURE__ */ new I(), xr = /* @__PURE__ */ new I();
class Zr {
  constructor(e = new I(), t = new I(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Gt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Gt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Gt.copy(this.origin).addScaledVector(this.direction, t), Gt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    gr.copy(e).add(t).multiplyScalar(0.5), xi.copy(t).sub(e).normalize(), Jt.copy(this.origin).sub(gr);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(xi), a = Jt.dot(this.direction), l = -Jt.dot(xi), c = Jt.lengthSq(), u = Math.abs(1 - o * o);
    let f, d, m, g;
    if (u > 0)
      if (f = o * l - a, d = o * a - l, g = s * u, f >= 0)
        if (d >= -g)
          if (d <= g) {
            const v = 1 / u;
            f *= v, d *= v, m = f * (f + o * d + 2 * a) + d * (o * f + d + 2 * l) + c;
          } else
            d = s, f = Math.max(0, -(o * d + a)), m = -f * f + d * (d + 2 * l) + c;
        else
          d = -s, f = Math.max(0, -(o * d + a)), m = -f * f + d * (d + 2 * l) + c;
      else
        d <= -g ? (f = Math.max(0, -(-o * s + a)), d = f > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -f * f + d * (d + 2 * l) + c) : d <= g ? (f = 0, d = Math.min(Math.max(-s, -l), s), m = d * (d + 2 * l) + c) : (f = Math.max(0, -(o * s + a)), d = f > 0 ? s : Math.min(Math.max(-s, -l), s), m = -f * f + d * (d + 2 * l) + c);
    else
      d = o > 0 ? -s : s, f = Math.max(0, -(o * d + a)), m = -f * f + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(gr).addScaledVector(xi, d), m;
  }
  intersectSphere(e, t) {
    Gt.subVectors(e.center, this.origin);
    const n = Gt.dot(this.direction), r = Gt.dot(Gt) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r), a = n - o, l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, o, a, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, f = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), u >= 0 ? (s = (e.min.y - d.y) * u, o = (e.max.y - d.y) * u) : (s = (e.max.y - d.y) * u, o = (e.min.y - d.y) * u), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), f >= 0 ? (a = (e.min.z - d.z) * f, l = (e.max.z - d.z) * f) : (a = (e.max.z - d.z) * f, l = (e.min.z - d.z) * f), n > l || a > r) || ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Gt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    vr.subVectors(t, e), Mi.subVectors(n, e), xr.crossVectors(vr, Mi);
    let o = this.direction.dot(xr), a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Jt.subVectors(this.origin, e);
    const l = a * this.direction.dot(Mi.crossVectors(Jt, Mi));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(vr.cross(Jt));
    if (c < 0 || l + c > o)
      return null;
    const u = -a * Jt.dot(xr);
    return u < 0 ? null : this.at(u / o, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class at {
  constructor(e, t, n, r, s, o, a, l, c, u, f, d, m, g, v, p) {
    at.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, o, a, l, c, u, f, d, m, g, v, p);
  }
  set(e, t, n, r, s, o, a, l, c, u, f, d, m, g, v, p) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = r, h[1] = s, h[5] = o, h[9] = a, h[13] = l, h[2] = c, h[6] = u, h[10] = f, h[14] = d, h[3] = m, h[7] = g, h[11] = v, h[15] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new at().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / In.setFromMatrixColumn(e, 0).length(), s = 1 / In.setFromMatrixColumn(e, 1).length(), o = 1 / In.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(r), c = Math.sin(r), u = Math.cos(s), f = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * u, m = o * f, g = a * u, v = a * f;
      t[0] = l * u, t[4] = -l * f, t[8] = c, t[1] = m + g * c, t[5] = d - v * c, t[9] = -a * l, t[2] = v - d * c, t[6] = g + m * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const d = l * u, m = l * f, g = c * u, v = c * f;
      t[0] = d + v * a, t[4] = g * a - m, t[8] = o * c, t[1] = o * f, t[5] = o * u, t[9] = -a, t[2] = m * a - g, t[6] = v + d * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const d = l * u, m = l * f, g = c * u, v = c * f;
      t[0] = d - v * a, t[4] = -o * f, t[8] = g + m * a, t[1] = m + g * a, t[5] = o * u, t[9] = v - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const d = o * u, m = o * f, g = a * u, v = a * f;
      t[0] = l * u, t[4] = g * c - m, t[8] = d * c + v, t[1] = l * f, t[5] = v * c + d, t[9] = m * c - g, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const d = o * l, m = o * c, g = a * l, v = a * c;
      t[0] = l * u, t[4] = v - d * f, t[8] = g * f + m, t[1] = f, t[5] = o * u, t[9] = -a * u, t[2] = -c * u, t[6] = m * f + g, t[10] = d - v * f;
    } else if (e.order === "XZY") {
      const d = o * l, m = o * c, g = a * l, v = a * c;
      t[0] = l * u, t[4] = -f, t[8] = c * u, t[1] = d * f + v, t[5] = o * u, t[9] = m * f - g, t[2] = g * f - m, t[6] = a * u, t[10] = v * f + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(El, e, Tl);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return Tt.subVectors(e, t), Tt.lengthSq() === 0 && (Tt.z = 1), Tt.normalize(), Qt.crossVectors(n, Tt), Qt.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Tt.x += 1e-4 : Tt.z += 1e-4, Tt.normalize(), Qt.crossVectors(n, Tt)), Qt.normalize(), Si.crossVectors(Tt, Qt), r[0] = Qt.x, r[4] = Si.x, r[8] = Tt.x, r[1] = Qt.y, r[5] = Si.y, r[9] = Tt.y, r[2] = Qt.z, r[6] = Si.z, r[10] = Tt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], u = n[1], f = n[5], d = n[9], m = n[13], g = n[2], v = n[6], p = n[10], h = n[14], y = n[3], M = n[7], w = n[11], R = n[15], P = r[0], b = r[4], W = r[8], S = r[12], T = r[1], V = r[5], J = r[9], Q = r[13], L = r[2], H = r[6], j = r[10], X = r[14], ee = r[3], q = r[7], K = r[11], D = r[15];
    return s[0] = o * P + a * T + l * L + c * ee, s[4] = o * b + a * V + l * H + c * q, s[8] = o * W + a * J + l * j + c * K, s[12] = o * S + a * Q + l * X + c * D, s[1] = u * P + f * T + d * L + m * ee, s[5] = u * b + f * V + d * H + m * q, s[9] = u * W + f * J + d * j + m * K, s[13] = u * S + f * Q + d * X + m * D, s[2] = g * P + v * T + p * L + h * ee, s[6] = g * b + v * V + p * H + h * q, s[10] = g * W + v * J + p * j + h * K, s[14] = g * S + v * Q + p * X + h * D, s[3] = y * P + M * T + w * L + R * ee, s[7] = y * b + M * V + w * H + R * q, s[11] = y * W + M * J + w * j + R * K, s[15] = y * S + M * Q + w * X + R * D, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], u = e[2], f = e[6], d = e[10], m = e[14], g = e[3], v = e[7], p = e[11], h = e[15];
    return g * (+s * l * f - r * c * f - s * a * d + n * c * d + r * a * m - n * l * m) + v * (+t * l * m - t * c * d + s * o * d - r * o * m + r * c * u - s * l * u) + p * (+t * c * f - t * a * m - s * o * f + n * o * m + s * a * u - n * c * u) + h * (-r * a * u - t * l * f + t * a * d + r * o * f - n * o * d + n * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], f = e[9], d = e[10], m = e[11], g = e[12], v = e[13], p = e[14], h = e[15], y = f * p * c - v * d * c + v * l * m - a * p * m - f * l * h + a * d * h, M = g * d * c - u * p * c - g * l * m + o * p * m + u * l * h - o * d * h, w = u * v * c - g * f * c + g * a * m - o * v * m - u * a * h + o * f * h, R = g * f * l - u * v * l - g * a * d + o * v * d + u * a * p - o * f * p, P = t * y + n * M + r * w + s * R;
    if (P === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / P;
    return e[0] = y * b, e[1] = (v * d * s - f * p * s - v * r * m + n * p * m + f * r * h - n * d * h) * b, e[2] = (a * p * s - v * l * s + v * r * c - n * p * c - a * r * h + n * l * h) * b, e[3] = (f * l * s - a * d * s - f * r * c + n * d * c + a * r * m - n * l * m) * b, e[4] = M * b, e[5] = (u * p * s - g * d * s + g * r * m - t * p * m - u * r * h + t * d * h) * b, e[6] = (g * l * s - o * p * s - g * r * c + t * p * c + o * r * h - t * l * h) * b, e[7] = (o * d * s - u * l * s + u * r * c - t * d * c - o * r * m + t * l * m) * b, e[8] = w * b, e[9] = (g * f * s - u * v * s - g * n * m + t * v * m + u * n * h - t * f * h) * b, e[10] = (o * v * s - g * a * s + g * n * c - t * v * c - o * n * h + t * a * h) * b, e[11] = (u * a * s - o * f * s - u * n * c + t * f * c + o * n * m - t * a * m) * b, e[12] = R * b, e[13] = (u * v * r - g * f * r + g * n * d - t * v * d - u * n * p + t * f * p) * b, e[14] = (g * a * r - o * v * r - g * n * l + t * v * l + o * n * p - t * a * p) * b, e[15] = (o * f * r - u * a * r + u * n * l - t * f * l - o * n * d + t * a * d) * b, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, o = e.x, a = e.y, l = e.z, c = s * o, u = s * a;
    return this.set(
      c * o + n,
      c * a - r * l,
      c * l + r * a,
      0,
      c * a + r * l,
      u * a + n,
      u * l - r * o,
      0,
      c * l - r * a,
      u * l + r * o,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, r, s, o) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      o,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, o = t._y, a = t._z, l = t._w, c = s + s, u = o + o, f = a + a, d = s * c, m = s * u, g = s * f, v = o * u, p = o * f, h = a * f, y = l * c, M = l * u, w = l * f, R = n.x, P = n.y, b = n.z;
    return r[0] = (1 - (v + h)) * R, r[1] = (m + w) * R, r[2] = (g - M) * R, r[3] = 0, r[4] = (m - w) * P, r[5] = (1 - (d + h)) * P, r[6] = (p + y) * P, r[7] = 0, r[8] = (g + M) * b, r[9] = (p - y) * b, r[10] = (1 - (d + v)) * b, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = In.set(r[0], r[1], r[2]).length();
    const o = In.set(r[4], r[5], r[6]).length(), a = In.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Lt.copy(this);
    const c = 1 / s, u = 1 / o, f = 1 / a;
    return Lt.elements[0] *= c, Lt.elements[1] *= c, Lt.elements[2] *= c, Lt.elements[4] *= u, Lt.elements[5] *= u, Lt.elements[6] *= u, Lt.elements[8] *= f, Lt.elements[9] *= f, Lt.elements[10] *= f, t.setFromRotationMatrix(Lt), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, r, s, o, a = Yt) {
    const l = this.elements, c = 2 * s / (t - e), u = 2 * s / (n - r), f = (t + e) / (t - e), d = (n + r) / (n - r);
    let m, g;
    if (a === Yt)
      m = -(o + s) / (o - s), g = -2 * o * s / (o - s);
    else if (a === Yi)
      m = -o / (o - s), g = -o * s / (o - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = u, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, o, a = Yt) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - r), f = 1 / (o - s), d = (t + e) * c, m = (n + r) * u;
    let g, v;
    if (a === Yt)
      g = (o + s) * f, v = -2 * f;
    else if (a === Yi)
      g = s * f, v = -1 * f;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = v, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const In = /* @__PURE__ */ new I(), Lt = /* @__PURE__ */ new at(), El = /* @__PURE__ */ new I(0, 0, 0), Tl = /* @__PURE__ */ new I(1, 1, 1), Qt = /* @__PURE__ */ new I(), Si = /* @__PURE__ */ new I(), Tt = /* @__PURE__ */ new I(), Xs = /* @__PURE__ */ new at(), qs = /* @__PURE__ */ new yn();
class Ji {
  constructor(e = 0, t = 0, n = 0, r = Ji.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], o = r[4], a = r[8], l = r[1], c = r[5], u = r[9], f = r[2], d = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(_t(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-_t(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(_t(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-f, m), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-_t(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(_t(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-_t(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Xs.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Xs, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return qs.setFromEuler(this), this.setFromQuaternion(qs, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Ji.DEFAULT_ORDER = "XYZ";
class Wa {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let yl = 0;
const Ys = /* @__PURE__ */ new I(), Nn = /* @__PURE__ */ new yn(), Vt = /* @__PURE__ */ new at(), Ei = /* @__PURE__ */ new I(), ii = /* @__PURE__ */ new I(), bl = /* @__PURE__ */ new I(), Al = /* @__PURE__ */ new yn(), js = /* @__PURE__ */ new I(1, 0, 0), Ks = /* @__PURE__ */ new I(0, 1, 0), Zs = /* @__PURE__ */ new I(0, 0, 1), Rl = { type: "added" }, wl = { type: "removed" };
class gt extends An {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: yl++ }), this.uuid = ci(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = gt.DEFAULT_UP.clone();
    const e = new I(), t = new Ji(), n = new yn(), r = new I(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new at()
      },
      normalMatrix: {
        value: new Fe()
      }
    }), this.matrix = new at(), this.matrixWorld = new at(), this.matrixAutoUpdate = gt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new Wa(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Nn.setFromAxisAngle(e, t), this.quaternion.multiply(Nn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Nn.setFromAxisAngle(e, t), this.quaternion.premultiply(Nn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(js, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ks, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Zs, e);
  }
  translateOnAxis(e, t) {
    return Ys.copy(e).applyQuaternion(this.quaternion), this.position.add(Ys.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(js, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ks, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Zs, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Vt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ei.copy(e) : Ei.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), ii.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Vt.lookAt(ii, Ei, this.up) : Vt.lookAt(Ei, ii, this.up), this.quaternion.setFromRotationMatrix(Vt), r && (Vt.extractRotation(r.matrixWorld), Nn.setFromRotationMatrix(Vt), this.quaternion.premultiply(Nn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Rl)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(wl)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Vt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Vt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Vt), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let r = 0, s = this.children.length; r < s; r++) {
      const o = this.children[r].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, e, bl), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, Al, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) {
        const a = r[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON()));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const f = l[c];
            s(e.shapes, f);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(e.materials, this.material[l]));
        r.material = a;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), u = o(e.images), f = o(e.shapes), d = o(e.skeletons), m = o(e.animations), g = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), f.length > 0 && (n.shapes = f), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
gt.DEFAULT_UP = /* @__PURE__ */ new I(0, 1, 0);
gt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Dt = /* @__PURE__ */ new I(), kt = /* @__PURE__ */ new I(), Mr = /* @__PURE__ */ new I(), Wt = /* @__PURE__ */ new I(), Fn = /* @__PURE__ */ new I(), On = /* @__PURE__ */ new I(), $s = /* @__PURE__ */ new I(), Sr = /* @__PURE__ */ new I(), Er = /* @__PURE__ */ new I(), Tr = /* @__PURE__ */ new I();
let Ti = !1;
class Ut {
  constructor(e = new I(), t = new I(), n = new I()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Dt.subVectors(e, t), r.cross(Dt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, r, s) {
    Dt.subVectors(r, t), kt.subVectors(n, t), Mr.subVectors(e, t);
    const o = Dt.dot(Dt), a = Dt.dot(kt), l = Dt.dot(Mr), c = kt.dot(kt), u = kt.dot(Mr), f = o * c - a * a;
    if (f === 0)
      return s.set(-2, -1, -1);
    const d = 1 / f, m = (c * l - a * u) * d, g = (o * u - a * l) * d;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Wt), Wt.x >= 0 && Wt.y >= 0 && Wt.x + Wt.y <= 1;
  }
  static getUV(e, t, n, r, s, o, a, l) {
    return Ti === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Ti = !0), this.getInterpolation(e, t, n, r, s, o, a, l);
  }
  static getInterpolation(e, t, n, r, s, o, a, l) {
    return this.getBarycoord(e, t, n, r, Wt), l.setScalar(0), l.addScaledVector(s, Wt.x), l.addScaledVector(o, Wt.y), l.addScaledVector(a, Wt.z), l;
  }
  static isFrontFacing(e, t, n, r) {
    return Dt.subVectors(n, t), kt.subVectors(e, t), Dt.cross(kt).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Dt.subVectors(this.c, this.b), kt.subVectors(this.a, this.b), Dt.cross(kt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Ut.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Ut.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, r, s) {
    return Ti === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Ti = !0), Ut.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  getInterpolation(e, t, n, r, s) {
    return Ut.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Ut.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Ut.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let o, a;
    Fn.subVectors(r, n), On.subVectors(s, n), Sr.subVectors(e, n);
    const l = Fn.dot(Sr), c = On.dot(Sr);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Er.subVectors(e, r);
    const u = Fn.dot(Er), f = On.dot(Er);
    if (u >= 0 && f <= u)
      return t.copy(r);
    const d = l * f - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return o = l / (l - u), t.copy(n).addScaledVector(Fn, o);
    Tr.subVectors(e, s);
    const m = Fn.dot(Tr), g = On.dot(Tr);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const v = m * c - l * g;
    if (v <= 0 && c >= 0 && g <= 0)
      return a = c / (c - g), t.copy(n).addScaledVector(On, a);
    const p = u * g - m * f;
    if (p <= 0 && f - u >= 0 && m - g >= 0)
      return $s.subVectors(s, r), a = (f - u) / (f - u + (m - g)), t.copy(r).addScaledVector($s, a);
    const h = 1 / (p + v + d);
    return o = v * h, a = d * h, t.copy(n).addScaledVector(Fn, o).addScaledVector(On, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Xa = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, en = { h: 0, s: 0, l: 0 }, yi = { h: 0, s: 0, l: 0 };
function yr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class ke {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = ot) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, We.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = We.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, We.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = We.workingColorSpace) {
    if (e = fl(e, 1), t = _t(t, 0, 1), n = _t(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = yr(o, s, e + 1 / 3), this.g = yr(o, s, e), this.b = yr(o, s, e - 1 / 3);
    }
    return We.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = ot) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = r[1], a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (o === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = ot) {
    const n = Xa[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Yn(e.r), this.g = Yn(e.g), this.b = Yn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = dr(e.r), this.g = dr(e.g), this.b = dr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = ot) {
    return We.fromWorkingColorSpace(ht.copy(this), e), Math.round(_t(ht.r * 255, 0, 255)) * 65536 + Math.round(_t(ht.g * 255, 0, 255)) * 256 + Math.round(_t(ht.b * 255, 0, 255));
  }
  getHexString(e = ot) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = We.workingColorSpace) {
    We.fromWorkingColorSpace(ht.copy(this), t);
    const n = ht.r, r = ht.g, s = ht.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
    let l, c;
    const u = (a + o) / 2;
    if (a === o)
      l = 0, c = 0;
    else {
      const f = o - a;
      switch (c = u <= 0.5 ? f / (o + a) : f / (2 - o - a), o) {
        case n:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / f + 2;
          break;
        case s:
          l = (n - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = We.workingColorSpace) {
    return We.fromWorkingColorSpace(ht.copy(this), t), e.r = ht.r, e.g = ht.g, e.b = ht.b, e;
  }
  getStyle(e = ot) {
    We.fromWorkingColorSpace(ht.copy(this), e);
    const t = ht.r, n = ht.g, r = ht.b;
    return e !== ot ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(en), this.setHSL(en.h + e, en.s + t, en.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(en), e.getHSL(yi);
    const n = ur(en.h, yi.h, t), r = ur(en.s, yi.s, t), s = ur(en.l, yi.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const ht = /* @__PURE__ */ new ke();
ke.NAMES = Xa;
let Cl = 0;
class hi extends An {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Cl++ }), this.uuid = ci(), this.name = "", this.type = "Material", this.blending = qn, this.side = cn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Nr, this.blendDst = Fr, this.blendEquation = gn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ke(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ki, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Os, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Cn, this.stencilZFail = Cn, this.stencilZPass = Cn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== qn && (n.blending = this.blending), this.side !== cn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Nr && (n.blendSrc = this.blendSrc), this.blendDst !== Fr && (n.blendDst = this.blendDst), this.blendEquation !== gn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ki && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Os && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Cn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Cn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Cn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures), o = r(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class qa extends hi {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ke(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = La, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const et = /* @__PURE__ */ new I(), bi = /* @__PURE__ */ new Oe();
class Ft {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Bs, this.updateRange = { offset: 0, count: -1 }, this.gpuType = rn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        bi.fromBufferAttribute(this, t), bi.applyMatrix3(e), this.setXY(t, bi.x, bi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        et.fromBufferAttribute(this, t), et.applyMatrix3(e), this.setXYZ(t, et.x, et.y, et.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      et.fromBufferAttribute(this, t), et.applyMatrix4(e), this.setXYZ(t, et.x, et.y, et.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      et.fromBufferAttribute(this, t), et.applyNormalMatrix(e), this.setXYZ(t, et.x, et.y, et.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      et.fromBufferAttribute(this, t), et.transformDirection(e), this.setXYZ(t, et.x, et.y, et.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = ei(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = vt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = ei(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = ei(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = ei(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = ei(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = vt(t, this.array), n = vt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = vt(t, this.array), n = vt(n, this.array), r = vt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = vt(t, this.array), n = vt(n, this.array), r = vt(r, this.array), s = vt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Bs && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
}
class Ya extends Ft {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class ja extends Ft {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class En extends Ft {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Pl = 0;
const At = /* @__PURE__ */ new at(), br = /* @__PURE__ */ new gt(), Bn = /* @__PURE__ */ new I(), yt = /* @__PURE__ */ new ui(), ri = /* @__PURE__ */ new ui(), st = /* @__PURE__ */ new I();
class Kt extends An {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Pl++ }), this.uuid = ci(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Ha(e) ? ja : Ya)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Fe().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return At.makeRotationFromQuaternion(e), this.applyMatrix4(At), this;
  }
  rotateX(e) {
    return At.makeRotationX(e), this.applyMatrix4(At), this;
  }
  rotateY(e) {
    return At.makeRotationY(e), this.applyMatrix4(At), this;
  }
  rotateZ(e) {
    return At.makeRotationZ(e), this.applyMatrix4(At), this;
  }
  translate(e, t, n) {
    return At.makeTranslation(e, t, n), this.applyMatrix4(At), this;
  }
  scale(e, t, n) {
    return At.makeScale(e, t, n), this.applyMatrix4(At), this;
  }
  lookAt(e) {
    return br.lookAt(e), br.updateMatrix(), this.applyMatrix4(br.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Bn).negate(), this.translate(Bn.x, Bn.y, Bn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new En(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ui());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new I(-1 / 0, -1 / 0, -1 / 0),
        new I(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          yt.setFromBufferAttribute(s), this.morphTargetsRelative ? (st.addVectors(this.boundingBox.min, yt.min), this.boundingBox.expandByPoint(st), st.addVectors(this.boundingBox.max, yt.max), this.boundingBox.expandByPoint(st)) : (this.boundingBox.expandByPoint(yt.min), this.boundingBox.expandByPoint(yt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new $i());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new I(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (yt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          ri.setFromBufferAttribute(a), this.morphTargetsRelative ? (st.addVectors(yt.min, ri.min), yt.expandByPoint(st), st.addVectors(yt.max, ri.max), yt.expandByPoint(st)) : (yt.expandByPoint(ri.min), yt.expandByPoint(ri.max));
        }
      yt.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        st.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(st));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            st.fromBufferAttribute(a, c), l && (Bn.fromBufferAttribute(e, c), st.add(Bn)), r = Math.max(r, n.distanceToSquared(st));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, r = t.position.array, s = t.normal.array, o = t.uv.array, a = r.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Ft(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array, c = [], u = [];
    for (let T = 0; T < a; T++)
      c[T] = new I(), u[T] = new I();
    const f = new I(), d = new I(), m = new I(), g = new Oe(), v = new Oe(), p = new Oe(), h = new I(), y = new I();
    function M(T, V, J) {
      f.fromArray(r, T * 3), d.fromArray(r, V * 3), m.fromArray(r, J * 3), g.fromArray(o, T * 2), v.fromArray(o, V * 2), p.fromArray(o, J * 2), d.sub(f), m.sub(f), v.sub(g), p.sub(g);
      const Q = 1 / (v.x * p.y - p.x * v.y);
      isFinite(Q) && (h.copy(d).multiplyScalar(p.y).addScaledVector(m, -v.y).multiplyScalar(Q), y.copy(m).multiplyScalar(v.x).addScaledVector(d, -p.x).multiplyScalar(Q), c[T].add(h), c[V].add(h), c[J].add(h), u[T].add(y), u[V].add(y), u[J].add(y));
    }
    let w = this.groups;
    w.length === 0 && (w = [{
      start: 0,
      count: n.length
    }]);
    for (let T = 0, V = w.length; T < V; ++T) {
      const J = w[T], Q = J.start, L = J.count;
      for (let H = Q, j = Q + L; H < j; H += 3)
        M(
          n[H + 0],
          n[H + 1],
          n[H + 2]
        );
    }
    const R = new I(), P = new I(), b = new I(), W = new I();
    function S(T) {
      b.fromArray(s, T * 3), W.copy(b);
      const V = c[T];
      R.copy(V), R.sub(b.multiplyScalar(b.dot(V))).normalize(), P.crossVectors(W, V);
      const Q = P.dot(u[T]) < 0 ? -1 : 1;
      l[T * 4] = R.x, l[T * 4 + 1] = R.y, l[T * 4 + 2] = R.z, l[T * 4 + 3] = Q;
    }
    for (let T = 0, V = w.length; T < V; ++T) {
      const J = w[T], Q = J.start, L = J.count;
      for (let H = Q, j = Q + L; H < j; H += 3)
        S(n[H + 0]), S(n[H + 1]), S(n[H + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Ft(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, m = n.count; d < m; d++)
          n.setXYZ(d, 0, 0, 0);
      const r = new I(), s = new I(), o = new I(), a = new I(), l = new I(), c = new I(), u = new I(), f = new I();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const g = e.getX(d + 0), v = e.getX(d + 1), p = e.getX(d + 2);
          r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, v), o.fromBufferAttribute(t, p), u.subVectors(o, s), f.subVectors(r, s), u.cross(f), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, v), c.fromBufferAttribute(n, p), a.add(u), l.add(u), c.add(u), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(v, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          r.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), u.subVectors(o, s), f.subVectors(r, s), u.cross(f), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      st.fromBufferAttribute(e, t), st.normalize(), e.setXYZ(t, st.x, st.y, st.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, u = a.itemSize, f = a.normalized, d = new c.constructor(l.length * u);
      let m = 0, g = 0;
      for (let v = 0, p = l.length; v < p; v++) {
        a.isInterleavedBufferAttribute ? m = l[v] * a.data.stride + a.offset : m = l[v] * u;
        for (let h = 0; h < u; h++)
          d[g++] = c[m++];
      }
      return new Ft(d, u, f);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Kt(), n = this.index.array, r = this.attributes;
    for (const a in r) {
      const l = r[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [], c = s[a];
      for (let u = 0, f = c.length; u < f; u++) {
        const d = c[u], m = e(d, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let f = 0, d = c.length; f < d; f++) {
        const m = c[f];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (r[l] = u, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [], f = s[c];
      for (let d = 0, m = f.length; d < m; d++)
        u.push(f[d].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const f = o[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Js = /* @__PURE__ */ new at(), pn = /* @__PURE__ */ new Zr(), Ai = /* @__PURE__ */ new $i(), Qs = /* @__PURE__ */ new I(), zn = /* @__PURE__ */ new I(), Hn = /* @__PURE__ */ new I(), Gn = /* @__PURE__ */ new I(), Ar = /* @__PURE__ */ new I(), Ri = /* @__PURE__ */ new I(), wi = /* @__PURE__ */ new Oe(), Ci = /* @__PURE__ */ new Oe(), Pi = /* @__PURE__ */ new Oe(), ea = /* @__PURE__ */ new I(), ta = /* @__PURE__ */ new I(), na = /* @__PURE__ */ new I(), Li = /* @__PURE__ */ new I(), Di = /* @__PURE__ */ new I();
class sn extends gt {
  constructor(e = new Kt(), t = new qa()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Ri.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = a[l], f = s[l];
        u !== 0 && (Ar.fromBufferAttribute(f, e), o ? Ri.addScaledVector(Ar, u) : Ri.addScaledVector(Ar.sub(t), u));
      }
      t.add(Ri);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Ai.copy(n.boundingSphere), Ai.applyMatrix4(s), pn.copy(e.ray).recast(e.near), !(Ai.containsPoint(pn.origin) === !1 && (pn.intersectSphere(Ai, Qs) === null || pn.origin.distanceToSquared(Qs) > (e.far - e.near) ** 2)) && (Js.copy(s).invert(), pn.copy(e.ray).applyMatrix4(Js), !(n.boundingBox !== null && pn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, pn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, f = s.attributes.normal, d = s.groups, m = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let g = 0, v = d.length; g < v; g++) {
          const p = d[g], h = o[p.materialIndex], y = Math.max(p.start, m.start), M = Math.min(a.count, Math.min(p.start + p.count, m.start + m.count));
          for (let w = y, R = M; w < R; w += 3) {
            const P = a.getX(w), b = a.getX(w + 1), W = a.getX(w + 2);
            r = Ui(this, h, e, n, c, u, f, P, b, W), r && (r.faceIndex = Math.floor(w / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), v = Math.min(a.count, m.start + m.count);
        for (let p = g, h = v; p < h; p += 3) {
          const y = a.getX(p), M = a.getX(p + 1), w = a.getX(p + 2);
          r = Ui(this, o, e, n, c, u, f, y, M, w), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let g = 0, v = d.length; g < v; g++) {
          const p = d[g], h = o[p.materialIndex], y = Math.max(p.start, m.start), M = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
          for (let w = y, R = M; w < R; w += 3) {
            const P = w, b = w + 1, W = w + 2;
            r = Ui(this, h, e, n, c, u, f, P, b, W), r && (r.faceIndex = Math.floor(w / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), v = Math.min(l.count, m.start + m.count);
        for (let p = g, h = v; p < h; p += 3) {
          const y = p, M = p + 1, w = p + 2;
          r = Ui(this, o, e, n, c, u, f, y, M, w), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
  }
}
function Ll(i, e, t, n, r, s, o, a) {
  let l;
  if (e.side === xt ? l = n.intersectTriangle(o, s, r, !0, a) : l = n.intersectTriangle(r, s, o, e.side === cn, a), l === null) return null;
  Di.copy(a), Di.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Di);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Di.clone(),
    object: i
  };
}
function Ui(i, e, t, n, r, s, o, a, l, c) {
  i.getVertexPosition(a, zn), i.getVertexPosition(l, Hn), i.getVertexPosition(c, Gn);
  const u = Ll(i, e, t, n, zn, Hn, Gn, Li);
  if (u) {
    r && (wi.fromBufferAttribute(r, a), Ci.fromBufferAttribute(r, l), Pi.fromBufferAttribute(r, c), u.uv = Ut.getInterpolation(Li, zn, Hn, Gn, wi, Ci, Pi, new Oe())), s && (wi.fromBufferAttribute(s, a), Ci.fromBufferAttribute(s, l), Pi.fromBufferAttribute(s, c), u.uv1 = Ut.getInterpolation(Li, zn, Hn, Gn, wi, Ci, Pi, new Oe()), u.uv2 = u.uv1), o && (ea.fromBufferAttribute(o, a), ta.fromBufferAttribute(o, l), na.fromBufferAttribute(o, c), u.normal = Ut.getInterpolation(Li, zn, Hn, Gn, ea, ta, na, new I()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = {
      a,
      b: l,
      c,
      normal: new I(),
      materialIndex: 0
    };
    Ut.getNormal(zn, Hn, Gn, f.normal), u.face = f;
  }
  return u;
}
class di extends Kt {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    r = Math.floor(r), s = Math.floor(s), o = Math.floor(o);
    const l = [], c = [], u = [], f = [];
    let d = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0), g("z", "y", "x", 1, -1, n, t, -e, o, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, o, 2), g("x", "z", "y", 1, -1, e, n, -t, r, o, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new En(c, 3)), this.setAttribute("normal", new En(u, 3)), this.setAttribute("uv", new En(f, 2));
    function g(v, p, h, y, M, w, R, P, b, W, S) {
      const T = w / b, V = R / W, J = w / 2, Q = R / 2, L = P / 2, H = b + 1, j = W + 1;
      let X = 0, ee = 0;
      const q = new I();
      for (let K = 0; K < j; K++) {
        const D = K * V - Q;
        for (let k = 0; k < H; k++) {
          const ce = k * T - J;
          q[v] = ce * y, q[p] = D * M, q[h] = L, c.push(q.x, q.y, q.z), q[v] = 0, q[p] = 0, q[h] = P > 0 ? 1 : -1, u.push(q.x, q.y, q.z), f.push(k / b), f.push(1 - K / W), X += 1;
        }
      }
      for (let K = 0; K < W; K++)
        for (let D = 0; D < b; D++) {
          const k = d + D + H * K, ce = d + D + H * (K + 1), ue = d + (D + 1) + H * (K + 1), fe = d + (D + 1) + H * K;
          l.push(k, ce, fe), l.push(ce, ue, fe), ee += 6;
        }
      a.addGroup(m, ee, S), m += ee, d += X;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new di(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function $n(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function pt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = $n(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Dl(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Ka(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : We.workingColorSpace;
}
const Ul = { clone: $n, merge: pt };
var Il = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Nl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class bn extends hi {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Il, this.fragmentShader = Nl, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = $n(e.uniforms), this.uniformsGroups = Dl(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture ? t.uniforms[r] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[r] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[r] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Za extends gt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new at(), this.projectionMatrix = new at(), this.projectionMatrixInverse = new at(), this.coordinateSystem = Yt;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class wt extends Za {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Vr * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Gi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Vr * 2 * Math.atan(
      Math.tan(Gi * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, r, s, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Gi * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      s += o.offsetX * r / l, t -= o.offsetY * n / c, r *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Vn = -90, kn = 1;
class Fl extends gt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new wt(Vn, kn, e, t);
    r.layers = this.layers, this.add(r);
    const s = new wt(Vn, kn, e, t);
    s.layers = this.layers, this.add(s);
    const o = new wt(Vn, kn, e, t);
    o.layers = this.layers, this.add(o);
    const a = new wt(Vn, kn, e, t);
    a.layers = this.layers, this.add(a);
    const l = new wt(Vn, kn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new wt(Vn, kn, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === Yt)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === Yi)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, o, a, l, c, u] = this.children, f = e.getRenderTarget(), d = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const v = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, o), e.setRenderTarget(n, 2, r), e.render(t, a), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = v, e.setRenderTarget(n, 5, r), e.render(t, u), e.setRenderTarget(f, d, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class $a extends Mt {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : jn, super(e, t, n, r, s, o, a, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Ol extends Tn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    t.encoding !== void 0 && (ai("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Sn ? ot : Ct), this.texture = new $a(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Rt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new di(5, 5, 5), s = new bn({
      name: "CubemapFromEquirect",
      uniforms: $n(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: xt,
      blending: an
    });
    s.uniforms.tEquirect.value = t;
    const o = new sn(r, s), a = t.minFilter;
    return t.minFilter === oi && (t.minFilter = Rt), new Fl(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const Rr = /* @__PURE__ */ new I(), Bl = /* @__PURE__ */ new I(), zl = /* @__PURE__ */ new Fe();
class tn {
  constructor(e = new I(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = Rr.subVectors(n, t).cross(Bl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Rr), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || zl.getNormalMatrix(e), r = this.coplanarPoint(Rr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const mn = /* @__PURE__ */ new $i(), Ii = /* @__PURE__ */ new I();
class Ja {
  constructor(e = new tn(), t = new tn(), n = new tn(), r = new tn(), s = new tn(), o = new tn()) {
    this.planes = [e, t, n, r, s, o];
  }
  set(e, t, n, r, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(r), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Yt) {
    const n = this.planes, r = e.elements, s = r[0], o = r[1], a = r[2], l = r[3], c = r[4], u = r[5], f = r[6], d = r[7], m = r[8], g = r[9], v = r[10], p = r[11], h = r[12], y = r[13], M = r[14], w = r[15];
    if (n[0].setComponents(l - s, d - c, p - m, w - h).normalize(), n[1].setComponents(l + s, d + c, p + m, w + h).normalize(), n[2].setComponents(l + o, d + u, p + g, w + y).normalize(), n[3].setComponents(l - o, d - u, p - g, w - y).normalize(), n[4].setComponents(l - a, d - f, p - v, w - M).normalize(), t === Yt)
      n[5].setComponents(l + a, d + f, p + v, w + M).normalize();
    else if (t === Yi)
      n[5].setComponents(a, f, v, M).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(mn);
  }
  intersectsSprite(e) {
    return mn.center.set(0, 0, 0), mn.radius = 0.7071067811865476, mn.applyMatrix4(e.matrixWorld), this.intersectsSphere(mn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (Ii.x = r.normal.x > 0 ? e.max.x : e.min.x, Ii.y = r.normal.y > 0 ? e.max.y : e.min.y, Ii.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Ii) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Qa() {
  let i = null, e = !1, t = null, n = null;
  function r(s, o) {
    t(s, o), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function Hl(i, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function r(c, u) {
    const f = c.array, d = c.usage, m = i.createBuffer();
    i.bindBuffer(u, m), i.bufferData(u, f, d), c.onUploadCallback();
    let g;
    if (f instanceof Float32Array)
      g = i.FLOAT;
    else if (f instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          g = i.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = i.UNSIGNED_SHORT;
    else if (f instanceof Int16Array)
      g = i.SHORT;
    else if (f instanceof Uint32Array)
      g = i.UNSIGNED_INT;
    else if (f instanceof Int32Array)
      g = i.INT;
    else if (f instanceof Int8Array)
      g = i.BYTE;
    else if (f instanceof Uint8Array)
      g = i.UNSIGNED_BYTE;
    else if (f instanceof Uint8ClampedArray)
      g = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + f);
    return {
      buffer: m,
      type: g,
      bytesPerElement: f.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function s(c, u, f) {
    const d = u.array, m = u.updateRange;
    i.bindBuffer(f, c), m.count === -1 ? i.bufferSubData(f, 0, d) : (t ? i.bufferSubData(
      f,
      m.offset * d.BYTES_PER_ELEMENT,
      d,
      m.offset,
      m.count
    ) : i.bufferSubData(
      f,
      m.offset * d.BYTES_PER_ELEMENT,
      d.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), u.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (i.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const d = n.get(c);
      (!d || d.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const f = n.get(c);
    f === void 0 ? n.set(c, r(c, u)) : f.version < c.version && (s(f.buffer, c, u), f.version = c.version);
  }
  return {
    get: o,
    remove: a,
    update: l
  };
}
class $r extends Kt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(r), c = a + 1, u = l + 1, f = e / a, d = t / l, m = [], g = [], v = [], p = [];
    for (let h = 0; h < u; h++) {
      const y = h * d - o;
      for (let M = 0; M < c; M++) {
        const w = M * f - s;
        g.push(w, -y, 0), v.push(0, 0, 1), p.push(M / a), p.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++)
      for (let y = 0; y < a; y++) {
        const M = y + c * h, w = y + c * (h + 1), R = y + 1 + c * (h + 1), P = y + 1 + c * h;
        m.push(M, w, P), m.push(w, R, P);
      }
    this.setIndex(m), this.setAttribute("position", new En(g, 3)), this.setAttribute("normal", new En(v, 3)), this.setAttribute("uv", new En(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new $r(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Gl = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Vl = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, kl = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Wl = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Xl = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, ql = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Yl = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, jl = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Kl = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Zl = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, $l = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Jl = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Ql = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, ec = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, tc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, nc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, ic = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, rc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, sc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, ac = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, oc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, lc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, cc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, uc = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, hc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, dc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, fc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, pc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, mc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", _c = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, gc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, vc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, xc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Mc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Sc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Ec = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Tc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, yc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, bc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Ac = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Rc = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, wc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Cc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Pc = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Lc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Dc = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Uc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Ic = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Nc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Fc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Oc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`, Bc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, zc = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Hc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Gc = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Vc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, kc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Wc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Xc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, qc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Yc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, jc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Kc = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Zc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, $c = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Jc = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Qc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, eu = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, tu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, nu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, iu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, ru = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, su = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, au = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, ou = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, lu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, cu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, uu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, hu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, du = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, fu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, pu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, mu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, _u = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, gu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, vu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, xu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Mu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Su = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Eu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Tu = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, yu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, bu = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, Au = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Ru = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, wu = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Cu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Pu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Lu = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Du = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Uu = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Iu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Nu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Fu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Ou = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Bu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, zu = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Hu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Gu = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Vu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, ku = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Wu = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Xu = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, qu = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Yu = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, ju = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Ku = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Zu = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, $u = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Ju = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Qu = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, eh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, th = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, nh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, ih = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, rh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, sh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, ah = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, oh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, lh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, ch = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, uh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, hh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, dh = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, fh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, ph = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, mh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, _h = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, gh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ie = {
  alphahash_fragment: Gl,
  alphahash_pars_fragment: Vl,
  alphamap_fragment: kl,
  alphamap_pars_fragment: Wl,
  alphatest_fragment: Xl,
  alphatest_pars_fragment: ql,
  aomap_fragment: Yl,
  aomap_pars_fragment: jl,
  begin_vertex: Kl,
  beginnormal_vertex: Zl,
  bsdfs: $l,
  iridescence_fragment: Jl,
  bumpmap_pars_fragment: Ql,
  clipping_planes_fragment: ec,
  clipping_planes_pars_fragment: tc,
  clipping_planes_pars_vertex: nc,
  clipping_planes_vertex: ic,
  color_fragment: rc,
  color_pars_fragment: sc,
  color_pars_vertex: ac,
  color_vertex: oc,
  common: lc,
  cube_uv_reflection_fragment: cc,
  defaultnormal_vertex: uc,
  displacementmap_pars_vertex: hc,
  displacementmap_vertex: dc,
  emissivemap_fragment: fc,
  emissivemap_pars_fragment: pc,
  colorspace_fragment: mc,
  colorspace_pars_fragment: _c,
  envmap_fragment: gc,
  envmap_common_pars_fragment: vc,
  envmap_pars_fragment: xc,
  envmap_pars_vertex: Mc,
  envmap_physical_pars_fragment: Dc,
  envmap_vertex: Sc,
  fog_vertex: Ec,
  fog_pars_vertex: Tc,
  fog_fragment: yc,
  fog_pars_fragment: bc,
  gradientmap_pars_fragment: Ac,
  lightmap_fragment: Rc,
  lightmap_pars_fragment: wc,
  lights_lambert_fragment: Cc,
  lights_lambert_pars_fragment: Pc,
  lights_pars_begin: Lc,
  lights_toon_fragment: Uc,
  lights_toon_pars_fragment: Ic,
  lights_phong_fragment: Nc,
  lights_phong_pars_fragment: Fc,
  lights_physical_fragment: Oc,
  lights_physical_pars_fragment: Bc,
  lights_fragment_begin: zc,
  lights_fragment_maps: Hc,
  lights_fragment_end: Gc,
  logdepthbuf_fragment: Vc,
  logdepthbuf_pars_fragment: kc,
  logdepthbuf_pars_vertex: Wc,
  logdepthbuf_vertex: Xc,
  map_fragment: qc,
  map_pars_fragment: Yc,
  map_particle_fragment: jc,
  map_particle_pars_fragment: Kc,
  metalnessmap_fragment: Zc,
  metalnessmap_pars_fragment: $c,
  morphcolor_vertex: Jc,
  morphnormal_vertex: Qc,
  morphtarget_pars_vertex: eu,
  morphtarget_vertex: tu,
  normal_fragment_begin: nu,
  normal_fragment_maps: iu,
  normal_pars_fragment: ru,
  normal_pars_vertex: su,
  normal_vertex: au,
  normalmap_pars_fragment: ou,
  clearcoat_normal_fragment_begin: lu,
  clearcoat_normal_fragment_maps: cu,
  clearcoat_pars_fragment: uu,
  iridescence_pars_fragment: hu,
  opaque_fragment: du,
  packing: fu,
  premultiplied_alpha_fragment: pu,
  project_vertex: mu,
  dithering_fragment: _u,
  dithering_pars_fragment: gu,
  roughnessmap_fragment: vu,
  roughnessmap_pars_fragment: xu,
  shadowmap_pars_fragment: Mu,
  shadowmap_pars_vertex: Su,
  shadowmap_vertex: Eu,
  shadowmask_pars_fragment: Tu,
  skinbase_vertex: yu,
  skinning_pars_vertex: bu,
  skinning_vertex: Au,
  skinnormal_vertex: Ru,
  specularmap_fragment: wu,
  specularmap_pars_fragment: Cu,
  tonemapping_fragment: Pu,
  tonemapping_pars_fragment: Lu,
  transmission_fragment: Du,
  transmission_pars_fragment: Uu,
  uv_pars_fragment: Iu,
  uv_pars_vertex: Nu,
  uv_vertex: Fu,
  worldpos_vertex: Ou,
  background_vert: Bu,
  background_frag: zu,
  backgroundCube_vert: Hu,
  backgroundCube_frag: Gu,
  cube_vert: Vu,
  cube_frag: ku,
  depth_vert: Wu,
  depth_frag: Xu,
  distanceRGBA_vert: qu,
  distanceRGBA_frag: Yu,
  equirect_vert: ju,
  equirect_frag: Ku,
  linedashed_vert: Zu,
  linedashed_frag: $u,
  meshbasic_vert: Ju,
  meshbasic_frag: Qu,
  meshlambert_vert: eh,
  meshlambert_frag: th,
  meshmatcap_vert: nh,
  meshmatcap_frag: ih,
  meshnormal_vert: rh,
  meshnormal_frag: sh,
  meshphong_vert: ah,
  meshphong_frag: oh,
  meshphysical_vert: lh,
  meshphysical_frag: ch,
  meshtoon_vert: uh,
  meshtoon_frag: hh,
  points_vert: dh,
  points_frag: fh,
  shadow_vert: ph,
  shadow_frag: mh,
  sprite_vert: _h,
  sprite_frag: gh
}, oe = {
  common: {
    diffuse: { value: /* @__PURE__ */ new ke(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Fe() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Fe() },
    normalScale: { value: /* @__PURE__ */ new Oe(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Fe() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new ke(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new ke(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Fe() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new ke(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Oe(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 }
  }
}, Bt = {
  basic: {
    uniforms: /* @__PURE__ */ pt([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.fog
    ]),
    vertexShader: Ie.meshbasic_vert,
    fragmentShader: Ie.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ pt([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) }
      }
    ]),
    vertexShader: Ie.meshlambert_vert,
    fragmentShader: Ie.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ pt([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) },
        specular: { value: /* @__PURE__ */ new ke(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ie.meshphong_vert,
    fragmentShader: Ie.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ pt([
      oe.common,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.roughnessmap,
      oe.metalnessmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Ie.meshphysical_vert,
    fragmentShader: Ie.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ pt([
      oe.common,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.gradientmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) }
      }
    ]),
    vertexShader: Ie.meshtoon_vert,
    fragmentShader: Ie.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ pt([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ie.meshmatcap_vert,
    fragmentShader: Ie.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ pt([
      oe.points,
      oe.fog
    ]),
    vertexShader: Ie.points_vert,
    fragmentShader: Ie.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ pt([
      oe.common,
      oe.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ie.linedashed_vert,
    fragmentShader: Ie.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ pt([
      oe.common,
      oe.displacementmap
    ]),
    vertexShader: Ie.depth_vert,
    fragmentShader: Ie.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ pt([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ie.meshnormal_vert,
    fragmentShader: Ie.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ pt([
      oe.sprite,
      oe.fog
    ]),
    vertexShader: Ie.sprite_vert,
    fragmentShader: Ie.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Fe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ie.background_vert,
    fragmentShader: Ie.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ie.backgroundCube_vert,
    fragmentShader: Ie.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ie.cube_vert,
    fragmentShader: Ie.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ie.equirect_vert,
    fragmentShader: Ie.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ pt([
      oe.common,
      oe.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new I() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ie.distanceRGBA_vert,
    fragmentShader: Ie.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ pt([
      oe.lights,
      oe.fog,
      {
        color: { value: /* @__PURE__ */ new ke(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ie.shadow_vert,
    fragmentShader: Ie.shadow_frag
  }
};
Bt.physical = {
  uniforms: /* @__PURE__ */ pt([
    Bt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Fe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Fe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Oe(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Fe() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Fe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Fe() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new ke(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Fe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Fe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Fe() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Oe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Fe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new ke(0) },
      specularColor: { value: /* @__PURE__ */ new ke(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Fe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Fe() },
      anisotropyVector: { value: /* @__PURE__ */ new Oe() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Fe() }
    }
  ]),
  vertexShader: Ie.meshphysical_vert,
  fragmentShader: Ie.meshphysical_frag
};
const Ni = { r: 0, b: 0, g: 0 };
function vh(i, e, t, n, r, s, o) {
  const a = new ke(0);
  let l = s === !0 ? 0 : 1, c, u, f = null, d = 0, m = null;
  function g(p, h) {
    let y = !1, M = h.isScene === !0 ? h.background : null;
    M && M.isTexture && (M = (h.backgroundBlurriness > 0 ? t : e).get(M)), M === null ? v(a, l) : M && M.isColor && (v(M, 1), y = !0);
    const w = i.xr.getEnvironmentBlendMode();
    w === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : w === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || y) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), M && (M.isCubeTexture || M.mapping === Ki) ? (u === void 0 && (u = new sn(
      new di(1, 1, 1),
      new bn({
        name: "BackgroundCubeMaterial",
        uniforms: $n(Bt.backgroundCube.uniforms),
        vertexShader: Bt.backgroundCube.vertexShader,
        fragmentShader: Bt.backgroundCube.fragmentShader,
        side: xt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(R, P, b) {
      this.matrixWorld.copyPosition(b.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(u)), u.material.uniforms.envMap.value = M, u.material.uniforms.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = h.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, u.material.toneMapped = We.getTransfer(M.colorSpace) !== Ye, (f !== M || d !== M.version || m !== i.toneMapping) && (u.material.needsUpdate = !0, f = M, d = M.version, m = i.toneMapping), u.layers.enableAll(), p.unshift(u, u.geometry, u.material, 0, 0, null)) : M && M.isTexture && (c === void 0 && (c = new sn(
      new $r(2, 2),
      new bn({
        name: "BackgroundMaterial",
        uniforms: $n(Bt.background.uniforms),
        vertexShader: Bt.background.vertexShader,
        fragmentShader: Bt.background.fragmentShader,
        side: cn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(c)), c.material.uniforms.t2D.value = M, c.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, c.material.toneMapped = We.getTransfer(M.colorSpace) !== Ye, M.matrixAutoUpdate === !0 && M.updateMatrix(), c.material.uniforms.uvTransform.value.copy(M.matrix), (f !== M || d !== M.version || m !== i.toneMapping) && (c.material.needsUpdate = !0, f = M, d = M.version, m = i.toneMapping), c.layers.enableAll(), p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function v(p, h) {
    p.getRGB(Ni, Ka(i)), n.buffers.color.setClear(Ni.r, Ni.g, Ni.b, h, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(p, h = 1) {
      a.set(p), l = h, v(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(p) {
      l = p, v(a, l);
    },
    render: g
  };
}
function xh(i, e, t, n) {
  const r = i.getParameter(i.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, l = p(null);
  let c = l, u = !1;
  function f(L, H, j, X, ee) {
    let q = !1;
    if (o) {
      const K = v(X, j, H);
      c !== K && (c = K, m(c.object)), q = h(L, X, j, ee), q && y(L, X, j, ee);
    } else {
      const K = H.wireframe === !0;
      (c.geometry !== X.id || c.program !== j.id || c.wireframe !== K) && (c.geometry = X.id, c.program = j.id, c.wireframe = K, q = !0);
    }
    ee !== null && t.update(ee, i.ELEMENT_ARRAY_BUFFER), (q || u) && (u = !1, W(L, H, j, X), ee !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(ee).buffer));
  }
  function d() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function m(L) {
    return n.isWebGL2 ? i.bindVertexArray(L) : s.bindVertexArrayOES(L);
  }
  function g(L) {
    return n.isWebGL2 ? i.deleteVertexArray(L) : s.deleteVertexArrayOES(L);
  }
  function v(L, H, j) {
    const X = j.wireframe === !0;
    let ee = a[L.id];
    ee === void 0 && (ee = {}, a[L.id] = ee);
    let q = ee[H.id];
    q === void 0 && (q = {}, ee[H.id] = q);
    let K = q[X];
    return K === void 0 && (K = p(d()), q[X] = K), K;
  }
  function p(L) {
    const H = [], j = [], X = [];
    for (let ee = 0; ee < r; ee++)
      H[ee] = 0, j[ee] = 0, X[ee] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: H,
      enabledAttributes: j,
      attributeDivisors: X,
      object: L,
      attributes: {},
      index: null
    };
  }
  function h(L, H, j, X) {
    const ee = c.attributes, q = H.attributes;
    let K = 0;
    const D = j.getAttributes();
    for (const k in D)
      if (D[k].location >= 0) {
        const ue = ee[k];
        let fe = q[k];
        if (fe === void 0 && (k === "instanceMatrix" && L.instanceMatrix && (fe = L.instanceMatrix), k === "instanceColor" && L.instanceColor && (fe = L.instanceColor)), ue === void 0 || ue.attribute !== fe || fe && ue.data !== fe.data) return !0;
        K++;
      }
    return c.attributesNum !== K || c.index !== X;
  }
  function y(L, H, j, X) {
    const ee = {}, q = H.attributes;
    let K = 0;
    const D = j.getAttributes();
    for (const k in D)
      if (D[k].location >= 0) {
        let ue = q[k];
        ue === void 0 && (k === "instanceMatrix" && L.instanceMatrix && (ue = L.instanceMatrix), k === "instanceColor" && L.instanceColor && (ue = L.instanceColor));
        const fe = {};
        fe.attribute = ue, ue && ue.data && (fe.data = ue.data), ee[k] = fe, K++;
      }
    c.attributes = ee, c.attributesNum = K, c.index = X;
  }
  function M() {
    const L = c.newAttributes;
    for (let H = 0, j = L.length; H < j; H++)
      L[H] = 0;
  }
  function w(L) {
    R(L, 0);
  }
  function R(L, H) {
    const j = c.newAttributes, X = c.enabledAttributes, ee = c.attributeDivisors;
    j[L] = 1, X[L] === 0 && (i.enableVertexAttribArray(L), X[L] = 1), ee[L] !== H && ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](L, H), ee[L] = H);
  }
  function P() {
    const L = c.newAttributes, H = c.enabledAttributes;
    for (let j = 0, X = H.length; j < X; j++)
      H[j] !== L[j] && (i.disableVertexAttribArray(j), H[j] = 0);
  }
  function b(L, H, j, X, ee, q, K) {
    K === !0 ? i.vertexAttribIPointer(L, H, j, ee, q) : i.vertexAttribPointer(L, H, j, X, ee, q);
  }
  function W(L, H, j, X) {
    if (n.isWebGL2 === !1 && (L.isInstancedMesh || X.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    M();
    const ee = X.attributes, q = j.getAttributes(), K = H.defaultAttributeValues;
    for (const D in q) {
      const k = q[D];
      if (k.location >= 0) {
        let ce = ee[D];
        if (ce === void 0 && (D === "instanceMatrix" && L.instanceMatrix && (ce = L.instanceMatrix), D === "instanceColor" && L.instanceColor && (ce = L.instanceColor)), ce !== void 0) {
          const ue = ce.normalized, fe = ce.itemSize, Te = t.get(ce);
          if (Te === void 0) continue;
          const Be = Te.buffer, ye = Te.type, we = Te.bytesPerElement, qe = n.isWebGL2 === !0 && (ye === i.INT || ye === i.UNSIGNED_INT || ce.gpuType === Ua);
          if (ce.isInterleavedBufferAttribute) {
            const Ue = ce.data, N = Ue.stride, ct = ce.offset;
            if (Ue.isInstancedInterleavedBuffer) {
              for (let xe = 0; xe < k.locationSize; xe++)
                R(k.location + xe, Ue.meshPerAttribute);
              L.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = Ue.meshPerAttribute * Ue.count);
            } else
              for (let xe = 0; xe < k.locationSize; xe++)
                w(k.location + xe);
            i.bindBuffer(i.ARRAY_BUFFER, Be);
            for (let xe = 0; xe < k.locationSize; xe++)
              b(
                k.location + xe,
                fe / k.locationSize,
                ye,
                ue,
                N * we,
                (ct + fe / k.locationSize * xe) * we,
                qe
              );
          } else {
            if (ce.isInstancedBufferAttribute) {
              for (let Ue = 0; Ue < k.locationSize; Ue++)
                R(k.location + Ue, ce.meshPerAttribute);
              L.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = ce.meshPerAttribute * ce.count);
            } else
              for (let Ue = 0; Ue < k.locationSize; Ue++)
                w(k.location + Ue);
            i.bindBuffer(i.ARRAY_BUFFER, Be);
            for (let Ue = 0; Ue < k.locationSize; Ue++)
              b(
                k.location + Ue,
                fe / k.locationSize,
                ye,
                ue,
                fe * we,
                fe / k.locationSize * Ue * we,
                qe
              );
          }
        } else if (K !== void 0) {
          const ue = K[D];
          if (ue !== void 0)
            switch (ue.length) {
              case 2:
                i.vertexAttrib2fv(k.location, ue);
                break;
              case 3:
                i.vertexAttrib3fv(k.location, ue);
                break;
              case 4:
                i.vertexAttrib4fv(k.location, ue);
                break;
              default:
                i.vertexAttrib1fv(k.location, ue);
            }
        }
      }
    }
    P();
  }
  function S() {
    J();
    for (const L in a) {
      const H = a[L];
      for (const j in H) {
        const X = H[j];
        for (const ee in X)
          g(X[ee].object), delete X[ee];
        delete H[j];
      }
      delete a[L];
    }
  }
  function T(L) {
    if (a[L.id] === void 0) return;
    const H = a[L.id];
    for (const j in H) {
      const X = H[j];
      for (const ee in X)
        g(X[ee].object), delete X[ee];
      delete H[j];
    }
    delete a[L.id];
  }
  function V(L) {
    for (const H in a) {
      const j = a[H];
      if (j[L.id] === void 0) continue;
      const X = j[L.id];
      for (const ee in X)
        g(X[ee].object), delete X[ee];
      delete j[L.id];
    }
  }
  function J() {
    Q(), u = !0, c !== l && (c = l, m(c.object));
  }
  function Q() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: f,
    reset: J,
    resetDefaultState: Q,
    dispose: S,
    releaseStatesOfGeometry: T,
    releaseStatesOfProgram: V,
    initAttributes: M,
    enableAttribute: w,
    disableUnusedAttributes: P
  };
}
function Mh(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(c) {
    s = c;
  }
  function a(c, u) {
    i.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, f) {
    if (f === 0) return;
    let d, m;
    if (r)
      d = i, m = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[m](s, c, u, f), t.update(u, s, f);
  }
  this.setMode = o, this.render = a, this.renderInstances = l;
}
function Sh(i, e, t) {
  let n;
  function r() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const b = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(b) {
    if (b === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      b = "mediump";
    }
    return b === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && i.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = s(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
  const c = o || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), d = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = i.getParameter(i.MAX_TEXTURE_SIZE), g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), v = i.getParameter(i.MAX_VERTEX_ATTRIBS), p = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), h = i.getParameter(i.MAX_VARYING_VECTORS), y = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), M = d > 0, w = o || e.has("OES_texture_float"), R = M && w, P = o ? i.getParameter(i.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: f,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: v,
    maxVertexUniforms: p,
    maxVaryings: h,
    maxFragmentUniforms: y,
    vertexTextures: M,
    floatFragmentTextures: w,
    floatVertexTextures: R,
    maxSamples: P
  };
}
function Eh(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const o = new tn(), a = new Fe(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, d) {
    const m = f.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = d, n = f.length, m;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(f, d) {
    t = u(f, d, 0);
  }, this.setState = function(f, d, m) {
    const g = f.clippingPlanes, v = f.clipIntersection, p = f.clipShadows, h = i.get(f);
    if (!r || g === null || g.length === 0 || s && !p)
      s ? u(null) : c();
    else {
      const y = s ? 0 : n, M = y * 4;
      let w = h.clippingState || null;
      l.value = w, w = u(g, d, M, m);
      for (let R = 0; R !== M; ++R)
        w[R] = t[R];
      h.clippingState = w, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += y;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(f, d, m, g) {
    const v = f !== null ? f.length : 0;
    let p = null;
    if (v !== 0) {
      if (p = l.value, g !== !0 || p === null) {
        const h = m + v * 4, y = d.matrixWorldInverse;
        a.getNormalMatrix(y), (p === null || p.length < h) && (p = new Float32Array(h));
        for (let M = 0, w = m; M !== v; ++M, w += 4)
          o.copy(f[M]).applyMatrix4(y, a), o.normal.toArray(p, w), p[w + 3] = o.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = v, e.numIntersection = 0, p;
  }
}
function Th(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Or ? o.mapping = jn : a === Br && (o.mapping = Kn), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Or || a === Br)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Ol(l.height / 2);
            return c.fromEquirectangularTexture(i, o), e.set(o, c), o.addEventListener("dispose", r), t(c.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class yh extends Za {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, o = n + e, a = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, o = s + c * this.view.width, a -= u * this.view.offsetY, l = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Xn = 4, ia = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], vn = 20, wr = /* @__PURE__ */ new yh(), ra = /* @__PURE__ */ new ke();
let Cr = null, Pr = 0, Lr = 0;
const _n = (1 + Math.sqrt(5)) / 2, Wn = 1 / _n, sa = [
  /* @__PURE__ */ new I(1, 1, 1),
  /* @__PURE__ */ new I(-1, 1, 1),
  /* @__PURE__ */ new I(1, 1, -1),
  /* @__PURE__ */ new I(-1, 1, -1),
  /* @__PURE__ */ new I(0, _n, Wn),
  /* @__PURE__ */ new I(0, _n, -Wn),
  /* @__PURE__ */ new I(Wn, 0, _n),
  /* @__PURE__ */ new I(-Wn, 0, _n),
  /* @__PURE__ */ new I(_n, Wn, 0),
  /* @__PURE__ */ new I(-_n, Wn, 0)
];
class aa {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, r = 100) {
    Cr = this._renderer.getRenderTarget(), Pr = this._renderer.getActiveCubeFace(), Lr = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = ca(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = la(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Cr, Pr, Lr), e.scissorTest = !1, Fi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === jn || e.mapping === Kn ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Cr = this._renderer.getRenderTarget(), Pr = this._renderer.getActiveCubeFace(), Lr = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Rt,
      minFilter: Rt,
      generateMipmaps: !1,
      type: li,
      format: Nt,
      colorSpace: jt,
      depthBuffer: !1
    }, r = oa(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = oa(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = bh(s)), this._blurMaterial = Ah(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new sn(this._lodPlanes[0], e);
    this._renderer.compile(t, wr);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new wt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, d = u.toneMapping;
    u.getClearColor(ra), u.toneMapping = on, u.autoClear = !1;
    const m = new qa({
      name: "PMREM.Background",
      side: xt,
      depthWrite: !1,
      depthTest: !1
    }), g = new sn(new di(), m);
    let v = !1;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, v = !0) : (m.color.copy(ra), v = !0);
    for (let h = 0; h < 6; h++) {
      const y = h % 3;
      y === 0 ? (a.up.set(0, l[h], 0), a.lookAt(c[h], 0, 0)) : y === 1 ? (a.up.set(0, 0, l[h]), a.lookAt(0, c[h], 0)) : (a.up.set(0, l[h], 0), a.lookAt(0, 0, c[h]));
      const M = this._cubeSize;
      Fi(r, y * M, h > 2 ? M : 0, M, M), u.setRenderTarget(r), v && u.render(g, a), u.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = d, u.autoClear = f, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === jn || e.mapping === Kn;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = ca()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = la());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new sn(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Fi(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, wr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = sa[(r - 1) % sa.length];
      this._blur(e, r - 1, r, s, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, f = new sn(this._lodPlanes[r], c), d = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * vn - 1), v = s / g, p = isFinite(s) ? 1 + Math.floor(u * v) : vn;
    p > vn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vn}`);
    const h = [];
    let y = 0;
    for (let b = 0; b < vn; ++b) {
      const W = b / v, S = Math.exp(-W * W / 2);
      h.push(S), b === 0 ? y += S : b < p && (y += 2 * S);
    }
    for (let b = 0; b < h.length; b++)
      h[b] = h[b] / y;
    d.envMap.value = e.texture, d.samples.value = p, d.weights.value = h, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: M } = this;
    d.dTheta.value = g, d.mipInt.value = M - n;
    const w = this._sizeLods[r], R = 3 * w * (r > M - Xn ? r - M + Xn : 0), P = 4 * (this._cubeSize - w);
    Fi(t, R, P, 3 * w, 2 * w), l.setRenderTarget(t), l.render(f, wr);
  }
}
function bh(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - Xn + 1 + ia.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > i - Xn ? l = ia[o - i + Xn - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), u = -c, f = 1 + c, d = [u, u, f, u, f, f, u, u, f, f, u, f], m = 6, g = 6, v = 3, p = 2, h = 1, y = new Float32Array(v * g * m), M = new Float32Array(p * g * m), w = new Float32Array(h * g * m);
    for (let P = 0; P < m; P++) {
      const b = P % 3 * 2 / 3 - 1, W = P > 2 ? 0 : -1, S = [
        b,
        W,
        0,
        b + 2 / 3,
        W,
        0,
        b + 2 / 3,
        W + 1,
        0,
        b,
        W,
        0,
        b + 2 / 3,
        W + 1,
        0,
        b,
        W + 1,
        0
      ];
      y.set(S, v * g * P), M.set(d, p * g * P);
      const T = [P, P, P, P, P, P];
      w.set(T, h * g * P);
    }
    const R = new Kt();
    R.setAttribute("position", new Ft(y, v)), R.setAttribute("uv", new Ft(M, p)), R.setAttribute("faceIndex", new Ft(w, h)), e.push(R), r > Xn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function oa(i, e, t) {
  const n = new Tn(i, e, t);
  return n.texture.mapping = Ki, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Fi(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Ah(i, e, t) {
  const n = new Float32Array(vn), r = new I(0, 1, 0);
  return new bn({
    name: "SphericalGaussianBlur",
    defines: {
      n: vn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: Jr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: an,
    depthTest: !1,
    depthWrite: !1
  });
}
function la() {
  return new bn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Jr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: an,
    depthTest: !1,
    depthWrite: !1
  });
}
function ca() {
  return new bn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Jr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: an,
    depthTest: !1,
    depthWrite: !1
  });
}
function Jr() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Rh(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === Or || l === Br, u = l === jn || l === Kn;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let f = e.get(a);
          return t === null && (t = new aa(i)), f = c ? t.fromEquirectangular(a, f) : t.fromCubemap(a, f), e.set(a, f), f.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const f = a.image;
            if (c && f && f.height > 0 || u && f && r(f)) {
              t === null && (t = new aa(i));
              const d = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, d), a.addEventListener("dispose", s), d.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      a[u] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function wh(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const r = t(n);
      return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function Ch(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(f) {
    const d = f.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    for (const g in d.morphAttributes) {
      const v = d.morphAttributes[g];
      for (let p = 0, h = v.length; p < h; p++)
        e.remove(v[p]);
    }
    d.removeEventListener("dispose", o), delete r[d.id];
    const m = s.get(d);
    m && (e.remove(m), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(f, d) {
    return r[d.id] === !0 || (d.addEventListener("dispose", o), r[d.id] = !0, t.memory.geometries++), d;
  }
  function l(f) {
    const d = f.attributes;
    for (const g in d)
      e.update(d[g], i.ARRAY_BUFFER);
    const m = f.morphAttributes;
    for (const g in m) {
      const v = m[g];
      for (let p = 0, h = v.length; p < h; p++)
        e.update(v[p], i.ARRAY_BUFFER);
    }
  }
  function c(f) {
    const d = [], m = f.index, g = f.attributes.position;
    let v = 0;
    if (m !== null) {
      const y = m.array;
      v = m.version;
      for (let M = 0, w = y.length; M < w; M += 3) {
        const R = y[M + 0], P = y[M + 1], b = y[M + 2];
        d.push(R, P, P, b, b, R);
      }
    } else if (g !== void 0) {
      const y = g.array;
      v = g.version;
      for (let M = 0, w = y.length / 3 - 1; M < w; M += 3) {
        const R = M + 0, P = M + 1, b = M + 2;
        d.push(R, P, P, b, b, R);
      }
    } else
      return;
    const p = new (Ha(d) ? ja : Ya)(d, 1);
    p.version = v;
    const h = s.get(f);
    h && e.remove(h), s.set(f, p);
  }
  function u(f) {
    const d = s.get(f);
    if (d) {
      const m = f.index;
      m !== null && d.version < m.version && c(f);
    } else
      c(f);
    return s.get(f);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: u
  };
}
function Ph(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(d) {
    s = d;
  }
  let a, l;
  function c(d) {
    a = d.type, l = d.bytesPerElement;
  }
  function u(d, m) {
    i.drawElements(s, m, a, d * l), t.update(m, s, 1);
  }
  function f(d, m, g) {
    if (g === 0) return;
    let v, p;
    if (r)
      v = i, p = "drawElementsInstanced";
    else if (v = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", v === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    v[p](s, m, a, d * l, g), t.update(m, s, g);
  }
  this.setMode = o, this.setIndex = c, this.render = u, this.renderInstances = f;
}
function Lh(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, a) {
    switch (t.calls++, o) {
      case i.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case i.LINES:
        t.lines += a * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += a * s;
        break;
      case i.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function Dh(i, e) {
  return i[0] - e[0];
}
function Uh(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function Ih(i, e, t) {
  const n = {}, r = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new lt(), a = [];
  for (let c = 0; c < 8; c++)
    a[c] = [c, 0];
  function l(c, u, f) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, g = m !== void 0 ? m.length : 0;
      let v = s.get(u);
      if (v === void 0 || v.count !== g) {
        let L = function() {
          J.dispose(), s.delete(u), u.removeEventListener("dispose", L);
        };
        v !== void 0 && v.texture.dispose();
        const y = u.morphAttributes.position !== void 0, M = u.morphAttributes.normal !== void 0, w = u.morphAttributes.color !== void 0, R = u.morphAttributes.position || [], P = u.morphAttributes.normal || [], b = u.morphAttributes.color || [];
        let W = 0;
        y === !0 && (W = 1), M === !0 && (W = 2), w === !0 && (W = 3);
        let S = u.attributes.position.count * W, T = 1;
        S > e.maxTextureSize && (T = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
        const V = new Float32Array(S * T * 4 * g), J = new ka(V, S, T, g);
        J.type = rn, J.needsUpdate = !0;
        const Q = W * 4;
        for (let H = 0; H < g; H++) {
          const j = R[H], X = P[H], ee = b[H], q = S * T * 4 * H;
          for (let K = 0; K < j.count; K++) {
            const D = K * Q;
            y === !0 && (o.fromBufferAttribute(j, K), V[q + D + 0] = o.x, V[q + D + 1] = o.y, V[q + D + 2] = o.z, V[q + D + 3] = 0), M === !0 && (o.fromBufferAttribute(X, K), V[q + D + 4] = o.x, V[q + D + 5] = o.y, V[q + D + 6] = o.z, V[q + D + 7] = 0), w === !0 && (o.fromBufferAttribute(ee, K), V[q + D + 8] = o.x, V[q + D + 9] = o.y, V[q + D + 10] = o.z, V[q + D + 11] = ee.itemSize === 4 ? o.w : 1);
          }
        }
        v = {
          count: g,
          texture: J,
          size: new Oe(S, T)
        }, s.set(u, v), u.addEventListener("dispose", L);
      }
      let p = 0;
      for (let y = 0; y < d.length; y++)
        p += d[y];
      const h = u.morphTargetsRelative ? 1 : 1 - p;
      f.getUniforms().setValue(i, "morphTargetBaseInfluence", h), f.getUniforms().setValue(i, "morphTargetInfluences", d), f.getUniforms().setValue(i, "morphTargetsTexture", v.texture, t), f.getUniforms().setValue(i, "morphTargetsTextureSize", v.size);
    } else {
      const m = d === void 0 ? 0 : d.length;
      let g = n[u.id];
      if (g === void 0 || g.length !== m) {
        g = [];
        for (let M = 0; M < m; M++)
          g[M] = [M, 0];
        n[u.id] = g;
      }
      for (let M = 0; M < m; M++) {
        const w = g[M];
        w[0] = M, w[1] = d[M];
      }
      g.sort(Uh);
      for (let M = 0; M < 8; M++)
        M < m && g[M][1] ? (a[M][0] = g[M][0], a[M][1] = g[M][1]) : (a[M][0] = Number.MAX_SAFE_INTEGER, a[M][1] = 0);
      a.sort(Dh);
      const v = u.morphAttributes.position, p = u.morphAttributes.normal;
      let h = 0;
      for (let M = 0; M < 8; M++) {
        const w = a[M], R = w[0], P = w[1];
        R !== Number.MAX_SAFE_INTEGER && P ? (v && u.getAttribute("morphTarget" + M) !== v[R] && u.setAttribute("morphTarget" + M, v[R]), p && u.getAttribute("morphNormal" + M) !== p[R] && u.setAttribute("morphNormal" + M, p[R]), r[M] = P, h += P) : (v && u.hasAttribute("morphTarget" + M) === !0 && u.deleteAttribute("morphTarget" + M), p && u.hasAttribute("morphNormal" + M) === !0 && u.deleteAttribute("morphNormal" + M), r[M] = 0);
      }
      const y = u.morphTargetsRelative ? 1 : 1 - h;
      f.getUniforms().setValue(i, "morphTargetBaseInfluence", y), f.getUniforms().setValue(i, "morphTargetInfluences", r);
    }
  }
  return {
    update: l
  };
}
function Nh(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, u = l.geometry, f = e.get(l, u);
    if (r.get(f) !== c && (e.update(f), r.set(f, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      r.get(d) !== c && (d.update(), r.set(d, c));
    }
    return f;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const eo = /* @__PURE__ */ new Mt(), to = /* @__PURE__ */ new ka(), no = /* @__PURE__ */ new Ml(), io = /* @__PURE__ */ new $a(), ua = [], ha = [], da = new Float32Array(16), fa = new Float32Array(9), pa = new Float32Array(4);
function Jn(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = ua[r];
  if (s === void 0 && (s = new Float32Array(r), ua[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, i[o].toArray(s, a);
  }
  return s;
}
function tt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function nt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Qi(i, e) {
  let t = ha[e];
  t === void 0 && (t = new Int32Array(e), ha[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function Fh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Oh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (tt(t, e)) return;
    i.uniform2fv(this.addr, e), nt(t, e);
  }
}
function Bh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (tt(t, e)) return;
    i.uniform3fv(this.addr, e), nt(t, e);
  }
}
function zh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (tt(t, e)) return;
    i.uniform4fv(this.addr, e), nt(t, e);
  }
}
function Hh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (tt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), nt(t, e);
  } else {
    if (tt(t, n)) return;
    pa.set(n), i.uniformMatrix2fv(this.addr, !1, pa), nt(t, n);
  }
}
function Gh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (tt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), nt(t, e);
  } else {
    if (tt(t, n)) return;
    fa.set(n), i.uniformMatrix3fv(this.addr, !1, fa), nt(t, n);
  }
}
function Vh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (tt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), nt(t, e);
  } else {
    if (tt(t, n)) return;
    da.set(n), i.uniformMatrix4fv(this.addr, !1, da), nt(t, n);
  }
}
function kh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Wh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (tt(t, e)) return;
    i.uniform2iv(this.addr, e), nt(t, e);
  }
}
function Xh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (tt(t, e)) return;
    i.uniform3iv(this.addr, e), nt(t, e);
  }
}
function qh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (tt(t, e)) return;
    i.uniform4iv(this.addr, e), nt(t, e);
  }
}
function Yh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function jh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (tt(t, e)) return;
    i.uniform2uiv(this.addr, e), nt(t, e);
  }
}
function Kh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (tt(t, e)) return;
    i.uniform3uiv(this.addr, e), nt(t, e);
  }
}
function Zh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (tt(t, e)) return;
    i.uniform4uiv(this.addr, e), nt(t, e);
  }
}
function $h(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2D(e || eo, r);
}
function Jh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || no, r);
}
function Qh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || io, r);
}
function ed(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || to, r);
}
function td(i) {
  switch (i) {
    case 5126:
      return Fh;
    case 35664:
      return Oh;
    case 35665:
      return Bh;
    case 35666:
      return zh;
    case 35674:
      return Hh;
    case 35675:
      return Gh;
    case 35676:
      return Vh;
    case 5124:
    case 35670:
      return kh;
    case 35667:
    case 35671:
      return Wh;
    case 35668:
    case 35672:
      return Xh;
    case 35669:
    case 35673:
      return qh;
    case 5125:
      return Yh;
    case 36294:
      return jh;
    case 36295:
      return Kh;
    case 36296:
      return Zh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return $h;
    case 35679:
    case 36299:
    case 36307:
      return Jh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Qh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ed;
  }
}
function nd(i, e) {
  i.uniform1fv(this.addr, e);
}
function id(i, e) {
  const t = Jn(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function rd(i, e) {
  const t = Jn(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function sd(i, e) {
  const t = Jn(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function ad(i, e) {
  const t = Jn(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function od(i, e) {
  const t = Jn(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function ld(i, e) {
  const t = Jn(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function cd(i, e) {
  i.uniform1iv(this.addr, e);
}
function ud(i, e) {
  i.uniform2iv(this.addr, e);
}
function hd(i, e) {
  i.uniform3iv(this.addr, e);
}
function dd(i, e) {
  i.uniform4iv(this.addr, e);
}
function fd(i, e) {
  i.uniform1uiv(this.addr, e);
}
function pd(i, e) {
  i.uniform2uiv(this.addr, e);
}
function md(i, e) {
  i.uniform3uiv(this.addr, e);
}
function _d(i, e) {
  i.uniform4uiv(this.addr, e);
}
function gd(i, e, t) {
  const n = this.cache, r = e.length, s = Qi(t, r);
  tt(n, s) || (i.uniform1iv(this.addr, s), nt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || eo, s[o]);
}
function vd(i, e, t) {
  const n = this.cache, r = e.length, s = Qi(t, r);
  tt(n, s) || (i.uniform1iv(this.addr, s), nt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture3D(e[o] || no, s[o]);
}
function xd(i, e, t) {
  const n = this.cache, r = e.length, s = Qi(t, r);
  tt(n, s) || (i.uniform1iv(this.addr, s), nt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTextureCube(e[o] || io, s[o]);
}
function Md(i, e, t) {
  const n = this.cache, r = e.length, s = Qi(t, r);
  tt(n, s) || (i.uniform1iv(this.addr, s), nt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2DArray(e[o] || to, s[o]);
}
function Sd(i) {
  switch (i) {
    case 5126:
      return nd;
    case 35664:
      return id;
    case 35665:
      return rd;
    case 35666:
      return sd;
    case 35674:
      return ad;
    case 35675:
      return od;
    case 35676:
      return ld;
    case 5124:
    case 35670:
      return cd;
    case 35667:
    case 35671:
      return ud;
    case 35668:
    case 35672:
      return hd;
    case 35669:
    case 35673:
      return dd;
    case 5125:
      return fd;
    case 36294:
      return pd;
    case 36295:
      return md;
    case 36296:
      return _d;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return gd;
    case 35679:
    case 36299:
    case 36307:
      return vd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return xd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Md;
  }
}
class Ed {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = td(t.type);
  }
}
class Td {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Sd(t.type);
  }
}
class yd {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Dr = /(\w+)(\])?(\[|\.)?/g;
function ma(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function bd(i, e, t) {
  const n = i.name, r = n.length;
  for (Dr.lastIndex = 0; ; ) {
    const s = Dr.exec(n), o = Dr.lastIndex;
    let a = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === r) {
      ma(t, c === void 0 ? new Ed(a, i, e) : new Td(a, i, e));
      break;
    } else {
      let f = t.map[a];
      f === void 0 && (f = new yd(a), ma(t, f)), t = f;
    }
  }
}
class Vi {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
      bd(s, o, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s], l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function _a(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const Ad = 37297;
let Rd = 0;
function wd(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Cd(i) {
  const e = We.getPrimaries(We.workingColorSpace), t = We.getPrimaries(i);
  let n;
  switch (e === t ? n = "" : e === qi && t === Xi ? n = "LinearDisplayP3ToLinearSRGB" : e === Xi && t === qi && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case jt:
    case Zi:
      return [n, "LinearTransferOETF"];
    case ot:
    case Kr:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function ga(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + wd(i.getShaderSource(e), o);
  } else
    return r;
}
function Pd(i, e) {
  const t = Cd(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Ld(i, e) {
  let t;
  switch (e) {
    case Ho:
      t = "Linear";
      break;
    case Go:
      t = "Reinhard";
      break;
    case Vo:
      t = "OptimizedCineon";
      break;
    case ko:
      t = "ACESFilmic";
      break;
    case Wo:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Dd(i) {
  return [
    i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(si).join(`
`);
}
function Ud(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Id(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), o = s.name;
    let a = 1;
    s.type === i.FLOAT_MAT2 && (a = 2), s.type === i.FLOAT_MAT3 && (a = 3), s.type === i.FLOAT_MAT4 && (a = 4), t[o] = {
      type: s.type,
      location: i.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function si(i) {
  return i !== "";
}
function va(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function xa(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Nd = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Wr(i) {
  return i.replace(Nd, Od);
}
const Fd = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function Od(i, e) {
  let t = Ie[e];
  if (t === void 0) {
    const n = Fd.get(e);
    if (n !== void 0)
      t = Ie[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Wr(t);
}
const Bd = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ma(i) {
  return i.replace(Bd, zd);
}
function zd(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Sa(i) {
  let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Hd(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Pa ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === po ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Xt && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Gd(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case jn:
      case Kn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ki:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Vd(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case Kn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function kd(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case La:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Bo:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case zo:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Wd(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Xd(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = Hd(t), c = Gd(t), u = Vd(t), f = kd(t), d = Wd(t), m = t.isWebGL2 ? "" : Dd(t), g = Ud(s), v = r.createProgram();
  let p, h, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(si).join(`
`), p.length > 0 && (p += `
`), h = [
    m,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(si).join(`
`), h.length > 0 && (h += `
`)) : (p = [
    Sa(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(si).join(`
`), h = [
    m,
    Sa(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + f : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== on ? "#define TONE_MAPPING" : "",
    t.toneMapping !== on ? Ie.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== on ? Ld("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ie.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Pd("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(si).join(`
`)), o = Wr(o), o = va(o, t), o = xa(o, t), a = Wr(a), a = va(a, t), a = xa(a, t), o = Ma(o), a = Ma(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, p = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, h = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === zs ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === zs ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + h);
  const M = y + p + o, w = y + h + a, R = _a(r, r.VERTEX_SHADER, M), P = _a(r, r.FRAGMENT_SHADER, w);
  r.attachShader(v, R), r.attachShader(v, P), t.index0AttributeName !== void 0 ? r.bindAttribLocation(v, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(v, 0, "position"), r.linkProgram(v);
  function b(V) {
    if (i.debug.checkShaderErrors) {
      const J = r.getProgramInfoLog(v).trim(), Q = r.getShaderInfoLog(R).trim(), L = r.getShaderInfoLog(P).trim();
      let H = !0, j = !0;
      if (r.getProgramParameter(v, r.LINK_STATUS) === !1)
        if (H = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, v, R, P);
        else {
          const X = ga(r, R, "vertex"), ee = ga(r, P, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(v, r.VALIDATE_STATUS) + `

Program Info Log: ` + J + `
` + X + `
` + ee
          );
        }
      else J !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", J) : (Q === "" || L === "") && (j = !1);
      j && (V.diagnostics = {
        runnable: H,
        programLog: J,
        vertexShader: {
          log: Q,
          prefix: p
        },
        fragmentShader: {
          log: L,
          prefix: h
        }
      });
    }
    r.deleteShader(R), r.deleteShader(P), W = new Vi(r, v), S = Id(r, v);
  }
  let W;
  this.getUniforms = function() {
    return W === void 0 && b(this), W;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && b(this), S;
  };
  let T = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return T === !1 && (T = r.getProgramParameter(v, Ad)), T;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(v), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Rd++, this.cacheKey = e, this.usedTimes = 1, this.program = v, this.vertexShader = R, this.fragmentShader = P, this;
}
let qd = 0;
class Yd {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(r) === !1 && (o.add(r), r.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new jd(e), t.set(e, n)), n;
  }
}
class jd {
  constructor(e) {
    this.id = qd++, this.code = e, this.usedTimes = 0;
  }
}
function Kd(i, e, t, n, r, s, o) {
  const a = new Wa(), l = new Yd(), c = [], u = r.isWebGL2, f = r.logarithmicDepthBuffer, d = r.vertexTextures;
  let m = r.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function v(S) {
    return S === 0 ? "uv" : `uv${S}`;
  }
  function p(S, T, V, J, Q) {
    const L = J.fog, H = Q.geometry, j = S.isMeshStandardMaterial ? J.environment : null, X = (S.isMeshStandardMaterial ? t : e).get(S.envMap || j), ee = X && X.mapping === Ki ? X.image.height : null, q = g[S.type];
    S.precision !== null && (m = r.getMaxPrecision(S.precision), m !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", m, "instead."));
    const K = H.morphAttributes.position || H.morphAttributes.normal || H.morphAttributes.color, D = K !== void 0 ? K.length : 0;
    let k = 0;
    H.morphAttributes.position !== void 0 && (k = 1), H.morphAttributes.normal !== void 0 && (k = 2), H.morphAttributes.color !== void 0 && (k = 3);
    let ce, ue, fe, Te;
    if (q) {
      const Je = Bt[q];
      ce = Je.vertexShader, ue = Je.fragmentShader;
    } else
      ce = S.vertexShader, ue = S.fragmentShader, l.update(S), fe = l.getVertexShaderID(S), Te = l.getFragmentShaderID(S);
    const Be = i.getRenderTarget(), ye = Q.isInstancedMesh === !0, we = !!S.map, qe = !!S.matcap, Ue = !!X, N = !!S.aoMap, ct = !!S.lightMap, xe = !!S.bumpMap, be = !!S.normalMap, Ae = !!S.displacementMap, je = !!S.emissiveMap, Le = !!S.metalnessMap, Ce = !!S.roughnessMap, Ve = S.anisotropy > 0, $e = S.clearcoat > 0, it = S.iridescence > 0, E = S.sheen > 0, _ = S.transmission > 0, F = Ve && !!S.anisotropyMap, te = $e && !!S.clearcoatMap, Z = $e && !!S.clearcoatNormalMap, ne = $e && !!S.clearcoatRoughnessMap, me = it && !!S.iridescenceMap, se = it && !!S.iridescenceThicknessMap, le = E && !!S.sheenColorMap, A = E && !!S.sheenRoughnessMap, re = !!S.specularMap, Y = !!S.specularColorMap, Se = !!S.specularIntensityMap, _e = _ && !!S.transmissionMap, Me = _ && !!S.thicknessMap, pe = !!S.gradientMap, de = !!S.alphaMap, ze = S.alphaTest > 0, C = !!S.alphaHash, ae = !!S.extensions, $ = !!H.attributes.uv1, G = !!H.attributes.uv2, ie = !!H.attributes.uv3;
    let ve = on;
    return S.toneMapped && (Be === null || Be.isXRRenderTarget === !0) && (ve = i.toneMapping), {
      isWebGL2: u,
      shaderID: q,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: ce,
      fragmentShader: ue,
      defines: S.defines,
      customVertexShaderID: fe,
      customFragmentShaderID: Te,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: m,
      instancing: ye,
      instancingColor: ye && Q.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: Be === null ? i.outputColorSpace : Be.isXRRenderTarget === !0 ? Be.texture.colorSpace : jt,
      map: we,
      matcap: qe,
      envMap: Ue,
      envMapMode: Ue && X.mapping,
      envMapCubeUVHeight: ee,
      aoMap: N,
      lightMap: ct,
      bumpMap: xe,
      normalMap: be,
      displacementMap: d && Ae,
      emissiveMap: je,
      normalMapObjectSpace: be && S.normalMapType === rl,
      normalMapTangentSpace: be && S.normalMapType === il,
      metalnessMap: Le,
      roughnessMap: Ce,
      anisotropy: Ve,
      anisotropyMap: F,
      clearcoat: $e,
      clearcoatMap: te,
      clearcoatNormalMap: Z,
      clearcoatRoughnessMap: ne,
      iridescence: it,
      iridescenceMap: me,
      iridescenceThicknessMap: se,
      sheen: E,
      sheenColorMap: le,
      sheenRoughnessMap: A,
      specularMap: re,
      specularColorMap: Y,
      specularIntensityMap: Se,
      transmission: _,
      transmissionMap: _e,
      thicknessMap: Me,
      gradientMap: pe,
      opaque: S.transparent === !1 && S.blending === qn,
      alphaMap: de,
      alphaTest: ze,
      alphaHash: C,
      combine: S.combine,
      //
      mapUv: we && v(S.map.channel),
      aoMapUv: N && v(S.aoMap.channel),
      lightMapUv: ct && v(S.lightMap.channel),
      bumpMapUv: xe && v(S.bumpMap.channel),
      normalMapUv: be && v(S.normalMap.channel),
      displacementMapUv: Ae && v(S.displacementMap.channel),
      emissiveMapUv: je && v(S.emissiveMap.channel),
      metalnessMapUv: Le && v(S.metalnessMap.channel),
      roughnessMapUv: Ce && v(S.roughnessMap.channel),
      anisotropyMapUv: F && v(S.anisotropyMap.channel),
      clearcoatMapUv: te && v(S.clearcoatMap.channel),
      clearcoatNormalMapUv: Z && v(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ne && v(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: me && v(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: se && v(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: le && v(S.sheenColorMap.channel),
      sheenRoughnessMapUv: A && v(S.sheenRoughnessMap.channel),
      specularMapUv: re && v(S.specularMap.channel),
      specularColorMapUv: Y && v(S.specularColorMap.channel),
      specularIntensityMapUv: Se && v(S.specularIntensityMap.channel),
      transmissionMapUv: _e && v(S.transmissionMap.channel),
      thicknessMapUv: Me && v(S.thicknessMap.channel),
      alphaMapUv: de && v(S.alphaMap.channel),
      //
      vertexTangents: !!H.attributes.tangent && (be || Ve),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!H.attributes.color && H.attributes.color.itemSize === 4,
      vertexUv1s: $,
      vertexUv2s: G,
      vertexUv3s: ie,
      pointsUvs: Q.isPoints === !0 && !!H.attributes.uv && (we || de),
      fog: !!L,
      useFog: S.fog === !0,
      fogExp2: L && L.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      skinning: Q.isSkinnedMesh === !0,
      morphTargets: H.morphAttributes.position !== void 0,
      morphNormals: H.morphAttributes.normal !== void 0,
      morphColors: H.morphAttributes.color !== void 0,
      morphTargetsCount: D,
      morphTextureStride: k,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: i.shadowMap.enabled && V.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: ve,
      useLegacyLights: i._useLegacyLights,
      decodeVideoTexture: we && S.map.isVideoTexture === !0 && We.getTransfer(S.map.colorSpace) === Ye,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === qt,
      flipSided: S.side === xt,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionDerivatives: ae && S.extensions.derivatives === !0,
      extensionFragDepth: ae && S.extensions.fragDepth === !0,
      extensionDrawBuffers: ae && S.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: ae && S.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
  }
  function h(S) {
    const T = [];
    if (S.shaderID ? T.push(S.shaderID) : (T.push(S.customVertexShaderID), T.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const V in S.defines)
        T.push(V), T.push(S.defines[V]);
    return S.isRawShaderMaterial === !1 && (y(T, S), M(T, S), T.push(i.outputColorSpace)), T.push(S.customProgramCacheKey), T.join();
  }
  function y(S, T) {
    S.push(T.precision), S.push(T.outputColorSpace), S.push(T.envMapMode), S.push(T.envMapCubeUVHeight), S.push(T.mapUv), S.push(T.alphaMapUv), S.push(T.lightMapUv), S.push(T.aoMapUv), S.push(T.bumpMapUv), S.push(T.normalMapUv), S.push(T.displacementMapUv), S.push(T.emissiveMapUv), S.push(T.metalnessMapUv), S.push(T.roughnessMapUv), S.push(T.anisotropyMapUv), S.push(T.clearcoatMapUv), S.push(T.clearcoatNormalMapUv), S.push(T.clearcoatRoughnessMapUv), S.push(T.iridescenceMapUv), S.push(T.iridescenceThicknessMapUv), S.push(T.sheenColorMapUv), S.push(T.sheenRoughnessMapUv), S.push(T.specularMapUv), S.push(T.specularColorMapUv), S.push(T.specularIntensityMapUv), S.push(T.transmissionMapUv), S.push(T.thicknessMapUv), S.push(T.combine), S.push(T.fogExp2), S.push(T.sizeAttenuation), S.push(T.morphTargetsCount), S.push(T.morphAttributeCount), S.push(T.numDirLights), S.push(T.numPointLights), S.push(T.numSpotLights), S.push(T.numSpotLightMaps), S.push(T.numHemiLights), S.push(T.numRectAreaLights), S.push(T.numDirLightShadows), S.push(T.numPointLightShadows), S.push(T.numSpotLightShadows), S.push(T.numSpotLightShadowsWithMaps), S.push(T.numLightProbes), S.push(T.shadowMapType), S.push(T.toneMapping), S.push(T.numClippingPlanes), S.push(T.numClipIntersection), S.push(T.depthPacking);
  }
  function M(S, T) {
    a.disableAll(), T.isWebGL2 && a.enable(0), T.supportsVertexTextures && a.enable(1), T.instancing && a.enable(2), T.instancingColor && a.enable(3), T.matcap && a.enable(4), T.envMap && a.enable(5), T.normalMapObjectSpace && a.enable(6), T.normalMapTangentSpace && a.enable(7), T.clearcoat && a.enable(8), T.iridescence && a.enable(9), T.alphaTest && a.enable(10), T.vertexColors && a.enable(11), T.vertexAlphas && a.enable(12), T.vertexUv1s && a.enable(13), T.vertexUv2s && a.enable(14), T.vertexUv3s && a.enable(15), T.vertexTangents && a.enable(16), T.anisotropy && a.enable(17), T.alphaHash && a.enable(18), S.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.skinning && a.enable(4), T.morphTargets && a.enable(5), T.morphNormals && a.enable(6), T.morphColors && a.enable(7), T.premultipliedAlpha && a.enable(8), T.shadowMapEnabled && a.enable(9), T.useLegacyLights && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), S.push(a.mask);
  }
  function w(S) {
    const T = g[S.type];
    let V;
    if (T) {
      const J = Bt[T];
      V = Ul.clone(J.uniforms);
    } else
      V = S.uniforms;
    return V;
  }
  function R(S, T) {
    let V;
    for (let J = 0, Q = c.length; J < Q; J++) {
      const L = c[J];
      if (L.cacheKey === T) {
        V = L, ++V.usedTimes;
        break;
      }
    }
    return V === void 0 && (V = new Xd(i, T, S, s), c.push(V)), V;
  }
  function P(S) {
    if (--S.usedTimes === 0) {
      const T = c.indexOf(S);
      c[T] = c[c.length - 1], c.pop(), S.destroy();
    }
  }
  function b(S) {
    l.remove(S);
  }
  function W() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: h,
    getUniforms: w,
    acquireProgram: R,
    releaseProgram: P,
    releaseShaderCache: b,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: W
  };
}
function Zd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = i.get(s);
    return o === void 0 && (o = {}, i.set(s, o)), o;
  }
  function t(s) {
    i.delete(s);
  }
  function n(s, o, a) {
    i.get(s)[o] = a;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: r
  };
}
function $d(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Ea(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Ta() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function o(f, d, m, g, v, p) {
    let h = i[e];
    return h === void 0 ? (h = {
      id: f.id,
      object: f,
      geometry: d,
      material: m,
      groupOrder: g,
      renderOrder: f.renderOrder,
      z: v,
      group: p
    }, i[e] = h) : (h.id = f.id, h.object = f, h.geometry = d, h.material = m, h.groupOrder = g, h.renderOrder = f.renderOrder, h.z = v, h.group = p), e++, h;
  }
  function a(f, d, m, g, v, p) {
    const h = o(f, d, m, g, v, p);
    m.transmission > 0 ? n.push(h) : m.transparent === !0 ? r.push(h) : t.push(h);
  }
  function l(f, d, m, g, v, p) {
    const h = o(f, d, m, g, v, p);
    m.transmission > 0 ? n.unshift(h) : m.transparent === !0 ? r.unshift(h) : t.unshift(h);
  }
  function c(f, d) {
    t.length > 1 && t.sort(f || $d), n.length > 1 && n.sort(d || Ea), r.length > 1 && r.sort(d || Ea);
  }
  function u() {
    for (let f = e, d = i.length; f < d; f++) {
      const m = i[f];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: l,
    finish: u,
    sort: c
  };
}
function Jd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return s === void 0 ? (o = new Ta(), i.set(n, [o])) : r >= s.length ? (o = new Ta(), s.push(o)) : o = s[r], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Qd() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new I(),
            color: new ke()
          };
          break;
        case "SpotLight":
          t = {
            position: new I(),
            direction: new I(),
            color: new ke(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new I(),
            color: new ke(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new I(),
            skyColor: new ke(),
            groundColor: new ke()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new ke(),
            position: new I(),
            halfWidth: new I(),
            halfHeight: new I()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function ef() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Oe()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Oe()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Oe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let tf = 0;
function nf(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function rf(i, e) {
  const t = new Qd(), n = ef(), r = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let u = 0; u < 9; u++) r.probe.push(new I());
  const s = new I(), o = new at(), a = new at();
  function l(u, f) {
    let d = 0, m = 0, g = 0;
    for (let J = 0; J < 9; J++) r.probe[J].set(0, 0, 0);
    let v = 0, p = 0, h = 0, y = 0, M = 0, w = 0, R = 0, P = 0, b = 0, W = 0, S = 0;
    u.sort(nf);
    const T = f === !0 ? Math.PI : 1;
    for (let J = 0, Q = u.length; J < Q; J++) {
      const L = u[J], H = L.color, j = L.intensity, X = L.distance, ee = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight)
        d += H.r * j * T, m += H.g * j * T, g += H.b * j * T;
      else if (L.isLightProbe) {
        for (let q = 0; q < 9; q++)
          r.probe[q].addScaledVector(L.sh.coefficients[q], j);
        S++;
      } else if (L.isDirectionalLight) {
        const q = t.get(L);
        if (q.color.copy(L.color).multiplyScalar(L.intensity * T), L.castShadow) {
          const K = L.shadow, D = n.get(L);
          D.shadowBias = K.bias, D.shadowNormalBias = K.normalBias, D.shadowRadius = K.radius, D.shadowMapSize = K.mapSize, r.directionalShadow[v] = D, r.directionalShadowMap[v] = ee, r.directionalShadowMatrix[v] = L.shadow.matrix, w++;
        }
        r.directional[v] = q, v++;
      } else if (L.isSpotLight) {
        const q = t.get(L);
        q.position.setFromMatrixPosition(L.matrixWorld), q.color.copy(H).multiplyScalar(j * T), q.distance = X, q.coneCos = Math.cos(L.angle), q.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), q.decay = L.decay, r.spot[h] = q;
        const K = L.shadow;
        if (L.map && (r.spotLightMap[b] = L.map, b++, K.updateMatrices(L), L.castShadow && W++), r.spotLightMatrix[h] = K.matrix, L.castShadow) {
          const D = n.get(L);
          D.shadowBias = K.bias, D.shadowNormalBias = K.normalBias, D.shadowRadius = K.radius, D.shadowMapSize = K.mapSize, r.spotShadow[h] = D, r.spotShadowMap[h] = ee, P++;
        }
        h++;
      } else if (L.isRectAreaLight) {
        const q = t.get(L);
        q.color.copy(H).multiplyScalar(j), q.halfWidth.set(L.width * 0.5, 0, 0), q.halfHeight.set(0, L.height * 0.5, 0), r.rectArea[y] = q, y++;
      } else if (L.isPointLight) {
        const q = t.get(L);
        if (q.color.copy(L.color).multiplyScalar(L.intensity * T), q.distance = L.distance, q.decay = L.decay, L.castShadow) {
          const K = L.shadow, D = n.get(L);
          D.shadowBias = K.bias, D.shadowNormalBias = K.normalBias, D.shadowRadius = K.radius, D.shadowMapSize = K.mapSize, D.shadowCameraNear = K.camera.near, D.shadowCameraFar = K.camera.far, r.pointShadow[p] = D, r.pointShadowMap[p] = ee, r.pointShadowMatrix[p] = L.shadow.matrix, R++;
        }
        r.point[p] = q, p++;
      } else if (L.isHemisphereLight) {
        const q = t.get(L);
        q.skyColor.copy(L.color).multiplyScalar(j * T), q.groundColor.copy(L.groundColor).multiplyScalar(j * T), r.hemi[M] = q, M++;
      }
    }
    y > 0 && (e.isWebGL2 || i.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = oe.LTC_FLOAT_1, r.rectAreaLTC2 = oe.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (r.rectAreaLTC1 = oe.LTC_HALF_1, r.rectAreaLTC2 = oe.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = d, r.ambient[1] = m, r.ambient[2] = g;
    const V = r.hash;
    (V.directionalLength !== v || V.pointLength !== p || V.spotLength !== h || V.rectAreaLength !== y || V.hemiLength !== M || V.numDirectionalShadows !== w || V.numPointShadows !== R || V.numSpotShadows !== P || V.numSpotMaps !== b || V.numLightProbes !== S) && (r.directional.length = v, r.spot.length = h, r.rectArea.length = y, r.point.length = p, r.hemi.length = M, r.directionalShadow.length = w, r.directionalShadowMap.length = w, r.pointShadow.length = R, r.pointShadowMap.length = R, r.spotShadow.length = P, r.spotShadowMap.length = P, r.directionalShadowMatrix.length = w, r.pointShadowMatrix.length = R, r.spotLightMatrix.length = P + b - W, r.spotLightMap.length = b, r.numSpotLightShadowsWithMaps = W, r.numLightProbes = S, V.directionalLength = v, V.pointLength = p, V.spotLength = h, V.rectAreaLength = y, V.hemiLength = M, V.numDirectionalShadows = w, V.numPointShadows = R, V.numSpotShadows = P, V.numSpotMaps = b, V.numLightProbes = S, r.version = tf++);
  }
  function c(u, f) {
    let d = 0, m = 0, g = 0, v = 0, p = 0;
    const h = f.matrixWorldInverse;
    for (let y = 0, M = u.length; y < M; y++) {
      const w = u[y];
      if (w.isDirectionalLight) {
        const R = r.directional[d];
        R.direction.setFromMatrixPosition(w.matrixWorld), s.setFromMatrixPosition(w.target.matrixWorld), R.direction.sub(s), R.direction.transformDirection(h), d++;
      } else if (w.isSpotLight) {
        const R = r.spot[g];
        R.position.setFromMatrixPosition(w.matrixWorld), R.position.applyMatrix4(h), R.direction.setFromMatrixPosition(w.matrixWorld), s.setFromMatrixPosition(w.target.matrixWorld), R.direction.sub(s), R.direction.transformDirection(h), g++;
      } else if (w.isRectAreaLight) {
        const R = r.rectArea[v];
        R.position.setFromMatrixPosition(w.matrixWorld), R.position.applyMatrix4(h), a.identity(), o.copy(w.matrixWorld), o.premultiply(h), a.extractRotation(o), R.halfWidth.set(w.width * 0.5, 0, 0), R.halfHeight.set(0, w.height * 0.5, 0), R.halfWidth.applyMatrix4(a), R.halfHeight.applyMatrix4(a), v++;
      } else if (w.isPointLight) {
        const R = r.point[m];
        R.position.setFromMatrixPosition(w.matrixWorld), R.position.applyMatrix4(h), m++;
      } else if (w.isHemisphereLight) {
        const R = r.hemi[p];
        R.direction.setFromMatrixPosition(w.matrixWorld), R.direction.transformDirection(h), p++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: r
  };
}
function ya(i, e) {
  const t = new rf(i, e), n = [], r = [];
  function s() {
    n.length = 0, r.length = 0;
  }
  function o(f) {
    n.push(f);
  }
  function a(f) {
    r.push(f);
  }
  function l(f) {
    t.setup(n, f);
  }
  function c(f) {
    t.setupView(n, f);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: r,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a
  };
}
function sf(i, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let l;
    return a === void 0 ? (l = new ya(i, e), t.set(s, [l])) : o >= a.length ? (l = new ya(i, e), a.push(l)) : l = a[o], l;
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class af extends hi {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = tl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class of extends hi {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const lf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, cf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function uf(i, e, t) {
  let n = new Ja();
  const r = new Oe(), s = new Oe(), o = new lt(), a = new af({ depthPacking: nl }), l = new of(), c = {}, u = t.maxTextureSize, f = { [cn]: xt, [xt]: cn, [qt]: qt }, d = new bn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Oe() },
      radius: { value: 4 }
    },
    vertexShader: lf,
    fragmentShader: cf
  }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Kt();
  g.setAttribute(
    "position",
    new Ft(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const v = new sn(g, d), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Pa;
  let h = this.type;
  this.render = function(R, P, b) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || R.length === 0) return;
    const W = i.getRenderTarget(), S = i.getActiveCubeFace(), T = i.getActiveMipmapLevel(), V = i.state;
    V.setBlending(an), V.buffers.color.setClear(1, 1, 1, 1), V.buffers.depth.setTest(!0), V.setScissorTest(!1);
    const J = h !== Xt && this.type === Xt, Q = h === Xt && this.type !== Xt;
    for (let L = 0, H = R.length; L < H; L++) {
      const j = R[L], X = j.shadow;
      if (X === void 0) {
        console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
        continue;
      }
      if (X.autoUpdate === !1 && X.needsUpdate === !1) continue;
      r.copy(X.mapSize);
      const ee = X.getFrameExtents();
      if (r.multiply(ee), s.copy(X.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / ee.x), r.x = s.x * ee.x, X.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / ee.y), r.y = s.y * ee.y, X.mapSize.y = s.y)), X.map === null || J === !0 || Q === !0) {
        const K = this.type !== Xt ? { minFilter: mt, magFilter: mt } : {};
        X.map !== null && X.map.dispose(), X.map = new Tn(r.x, r.y, K), X.map.texture.name = j.name + ".shadowMap", X.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(X.map), i.clear();
      const q = X.getViewportCount();
      for (let K = 0; K < q; K++) {
        const D = X.getViewport(K);
        o.set(
          s.x * D.x,
          s.y * D.y,
          s.x * D.z,
          s.y * D.w
        ), V.viewport(o), X.updateMatrices(j, K), n = X.getFrustum(), w(P, b, X.camera, j, this.type);
      }
      X.isPointLightShadow !== !0 && this.type === Xt && y(X, b), X.needsUpdate = !1;
    }
    h = this.type, p.needsUpdate = !1, i.setRenderTarget(W, S, T);
  };
  function y(R, P) {
    const b = e.update(v);
    d.defines.VSM_SAMPLES !== R.blurSamples && (d.defines.VSM_SAMPLES = R.blurSamples, m.defines.VSM_SAMPLES = R.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), R.mapPass === null && (R.mapPass = new Tn(r.x, r.y)), d.uniforms.shadow_pass.value = R.map.texture, d.uniforms.resolution.value = R.mapSize, d.uniforms.radius.value = R.radius, i.setRenderTarget(R.mapPass), i.clear(), i.renderBufferDirect(P, null, b, d, v, null), m.uniforms.shadow_pass.value = R.mapPass.texture, m.uniforms.resolution.value = R.mapSize, m.uniforms.radius.value = R.radius, i.setRenderTarget(R.map), i.clear(), i.renderBufferDirect(P, null, b, m, v, null);
  }
  function M(R, P, b, W) {
    let S = null;
    const T = b.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial;
    if (T !== void 0)
      S = T;
    else if (S = b.isPointLight === !0 ? l : a, i.localClippingEnabled && P.clipShadows === !0 && Array.isArray(P.clippingPlanes) && P.clippingPlanes.length !== 0 || P.displacementMap && P.displacementScale !== 0 || P.alphaMap && P.alphaTest > 0 || P.map && P.alphaTest > 0) {
      const V = S.uuid, J = P.uuid;
      let Q = c[V];
      Q === void 0 && (Q = {}, c[V] = Q);
      let L = Q[J];
      L === void 0 && (L = S.clone(), Q[J] = L), S = L;
    }
    if (S.visible = P.visible, S.wireframe = P.wireframe, W === Xt ? S.side = P.shadowSide !== null ? P.shadowSide : P.side : S.side = P.shadowSide !== null ? P.shadowSide : f[P.side], S.alphaMap = P.alphaMap, S.alphaTest = P.alphaTest, S.map = P.map, S.clipShadows = P.clipShadows, S.clippingPlanes = P.clippingPlanes, S.clipIntersection = P.clipIntersection, S.displacementMap = P.displacementMap, S.displacementScale = P.displacementScale, S.displacementBias = P.displacementBias, S.wireframeLinewidth = P.wireframeLinewidth, S.linewidth = P.linewidth, b.isPointLight === !0 && S.isMeshDistanceMaterial === !0) {
      const V = i.properties.get(S);
      V.light = b;
    }
    return S;
  }
  function w(R, P, b, W, S) {
    if (R.visible === !1) return;
    if (R.layers.test(P.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && S === Xt) && (!R.frustumCulled || n.intersectsObject(R))) {
      R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, R.matrixWorld);
      const J = e.update(R), Q = R.material;
      if (Array.isArray(Q)) {
        const L = J.groups;
        for (let H = 0, j = L.length; H < j; H++) {
          const X = L[H], ee = Q[X.materialIndex];
          if (ee && ee.visible) {
            const q = M(R, ee, W, S);
            i.renderBufferDirect(b, null, J, q, R, X);
          }
        }
      } else if (Q.visible) {
        const L = M(R, Q, W, S);
        i.renderBufferDirect(b, null, J, L, R, null);
      }
    }
    const V = R.children;
    for (let J = 0, Q = V.length; J < Q; J++)
      w(V[J], P, b, W, S);
  }
}
function hf(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let C = !1;
    const ae = new lt();
    let $ = null;
    const G = new lt(0, 0, 0, 0);
    return {
      setMask: function(ie) {
        $ !== ie && !C && (i.colorMask(ie, ie, ie, ie), $ = ie);
      },
      setLocked: function(ie) {
        C = ie;
      },
      setClear: function(ie, ve, He, Je, bt) {
        bt === !0 && (ie *= Je, ve *= Je, He *= Je), ae.set(ie, ve, He, Je), G.equals(ae) === !1 && (i.clearColor(ie, ve, He, Je), G.copy(ae));
      },
      reset: function() {
        C = !1, $ = null, G.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let C = !1, ae = null, $ = null, G = null;
    return {
      setTest: function(ie) {
        ie ? we(i.DEPTH_TEST) : qe(i.DEPTH_TEST);
      },
      setMask: function(ie) {
        ae !== ie && !C && (i.depthMask(ie), ae = ie);
      },
      setFunc: function(ie) {
        if ($ !== ie) {
          switch (ie) {
            case Lo:
              i.depthFunc(i.NEVER);
              break;
            case Do:
              i.depthFunc(i.ALWAYS);
              break;
            case Uo:
              i.depthFunc(i.LESS);
              break;
            case ki:
              i.depthFunc(i.LEQUAL);
              break;
            case Io:
              i.depthFunc(i.EQUAL);
              break;
            case No:
              i.depthFunc(i.GEQUAL);
              break;
            case Fo:
              i.depthFunc(i.GREATER);
              break;
            case Oo:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          $ = ie;
        }
      },
      setLocked: function(ie) {
        C = ie;
      },
      setClear: function(ie) {
        G !== ie && (i.clearDepth(ie), G = ie);
      },
      reset: function() {
        C = !1, ae = null, $ = null, G = null;
      }
    };
  }
  function o() {
    let C = !1, ae = null, $ = null, G = null, ie = null, ve = null, He = null, Je = null, bt = null;
    return {
      setTest: function(Xe) {
        C || (Xe ? we(i.STENCIL_TEST) : qe(i.STENCIL_TEST));
      },
      setMask: function(Xe) {
        ae !== Xe && !C && (i.stencilMask(Xe), ae = Xe);
      },
      setFunc: function(Xe, dt, Ot) {
        ($ !== Xe || G !== dt || ie !== Ot) && (i.stencilFunc(Xe, dt, Ot), $ = Xe, G = dt, ie = Ot);
      },
      setOp: function(Xe, dt, Ot) {
        (ve !== Xe || He !== dt || Je !== Ot) && (i.stencilOp(Xe, dt, Ot), ve = Xe, He = dt, Je = Ot);
      },
      setLocked: function(Xe) {
        C = Xe;
      },
      setClear: function(Xe) {
        bt !== Xe && (i.clearStencil(Xe), bt = Xe);
      },
      reset: function() {
        C = !1, ae = null, $ = null, G = null, ie = null, ve = null, He = null, Je = null, bt = null;
      }
    };
  }
  const a = new r(), l = new s(), c = new o(), u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
  let d = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), v = [], p = null, h = !1, y = null, M = null, w = null, R = null, P = null, b = null, W = null, S = new ke(0, 0, 0), T = 0, V = !1, J = null, Q = null, L = null, H = null, j = null;
  const X = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let ee = !1, q = 0;
  const K = i.getParameter(i.VERSION);
  K.indexOf("WebGL") !== -1 ? (q = parseFloat(/^WebGL (\d)/.exec(K)[1]), ee = q >= 1) : K.indexOf("OpenGL ES") !== -1 && (q = parseFloat(/^OpenGL ES (\d)/.exec(K)[1]), ee = q >= 2);
  let D = null, k = {};
  const ce = i.getParameter(i.SCISSOR_BOX), ue = i.getParameter(i.VIEWPORT), fe = new lt().fromArray(ce), Te = new lt().fromArray(ue);
  function Be(C, ae, $, G) {
    const ie = new Uint8Array(4), ve = i.createTexture();
    i.bindTexture(C, ve), i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let He = 0; He < $; He++)
      n && (C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY) ? i.texImage3D(ae, 0, i.RGBA, 1, 1, G, 0, i.RGBA, i.UNSIGNED_BYTE, ie) : i.texImage2D(ae + He, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ie);
    return ve;
  }
  const ye = {};
  ye[i.TEXTURE_2D] = Be(i.TEXTURE_2D, i.TEXTURE_2D, 1), ye[i.TEXTURE_CUBE_MAP] = Be(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (ye[i.TEXTURE_2D_ARRAY] = Be(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), ye[i.TEXTURE_3D] = Be(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), we(i.DEPTH_TEST), l.setFunc(ki), Le(!1), Ce(ss), we(i.CULL_FACE), Ae(an);
  function we(C) {
    d[C] !== !0 && (i.enable(C), d[C] = !0);
  }
  function qe(C) {
    d[C] !== !1 && (i.disable(C), d[C] = !1);
  }
  function Ue(C, ae) {
    return m[C] !== ae ? (i.bindFramebuffer(C, ae), m[C] = ae, n && (C === i.DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = ae), C === i.FRAMEBUFFER && (m[i.DRAW_FRAMEBUFFER] = ae)), !0) : !1;
  }
  function N(C, ae) {
    let $ = v, G = !1;
    if (C)
      if ($ = g.get(ae), $ === void 0 && ($ = [], g.set(ae, $)), C.isWebGLMultipleRenderTargets) {
        const ie = C.texture;
        if ($.length !== ie.length || $[0] !== i.COLOR_ATTACHMENT0) {
          for (let ve = 0, He = ie.length; ve < He; ve++)
            $[ve] = i.COLOR_ATTACHMENT0 + ve;
          $.length = ie.length, G = !0;
        }
      } else
        $[0] !== i.COLOR_ATTACHMENT0 && ($[0] = i.COLOR_ATTACHMENT0, G = !0);
    else
      $[0] !== i.BACK && ($[0] = i.BACK, G = !0);
    G && (t.isWebGL2 ? i.drawBuffers($) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL($));
  }
  function ct(C) {
    return p !== C ? (i.useProgram(C), p = C, !0) : !1;
  }
  const xe = {
    [gn]: i.FUNC_ADD,
    [_o]: i.FUNC_SUBTRACT,
    [go]: i.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    xe[cs] = i.MIN, xe[us] = i.MAX;
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && (xe[cs] = C.MIN_EXT, xe[us] = C.MAX_EXT);
  }
  const be = {
    [vo]: i.ZERO,
    [xo]: i.ONE,
    [Mo]: i.SRC_COLOR,
    [Nr]: i.SRC_ALPHA,
    [Ao]: i.SRC_ALPHA_SATURATE,
    [yo]: i.DST_COLOR,
    [Eo]: i.DST_ALPHA,
    [So]: i.ONE_MINUS_SRC_COLOR,
    [Fr]: i.ONE_MINUS_SRC_ALPHA,
    [bo]: i.ONE_MINUS_DST_COLOR,
    [To]: i.ONE_MINUS_DST_ALPHA,
    [Ro]: i.CONSTANT_COLOR,
    [wo]: i.ONE_MINUS_CONSTANT_COLOR,
    [Co]: i.CONSTANT_ALPHA,
    [Po]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function Ae(C, ae, $, G, ie, ve, He, Je, bt, Xe) {
    if (C === an) {
      h === !0 && (qe(i.BLEND), h = !1);
      return;
    }
    if (h === !1 && (we(i.BLEND), h = !0), C !== mo) {
      if (C !== y || Xe !== V) {
        if ((M !== gn || P !== gn) && (i.blendEquation(i.FUNC_ADD), M = gn, P = gn), Xe)
          switch (C) {
            case qn:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case as:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case os:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ls:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case qn:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case as:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case os:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ls:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        w = null, R = null, b = null, W = null, S.set(0, 0, 0), T = 0, y = C, V = Xe;
      }
      return;
    }
    ie = ie || ae, ve = ve || $, He = He || G, (ae !== M || ie !== P) && (i.blendEquationSeparate(xe[ae], xe[ie]), M = ae, P = ie), ($ !== w || G !== R || ve !== b || He !== W) && (i.blendFuncSeparate(be[$], be[G], be[ve], be[He]), w = $, R = G, b = ve, W = He), (Je.equals(S) === !1 || bt !== T) && (i.blendColor(Je.r, Je.g, Je.b, bt), S.copy(Je), T = bt), y = C, V = !1;
  }
  function je(C, ae) {
    C.side === qt ? qe(i.CULL_FACE) : we(i.CULL_FACE);
    let $ = C.side === xt;
    ae && ($ = !$), Le($), C.blending === qn && C.transparent === !1 ? Ae(an) : Ae(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha), l.setFunc(C.depthFunc), l.setTest(C.depthTest), l.setMask(C.depthWrite), a.setMask(C.colorWrite);
    const G = C.stencilWrite;
    c.setTest(G), G && (c.setMask(C.stencilWriteMask), c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), $e(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? we(i.SAMPLE_ALPHA_TO_COVERAGE) : qe(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Le(C) {
    J !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW), J = C);
  }
  function Ce(C) {
    C !== ho ? (we(i.CULL_FACE), C !== Q && (C === ss ? i.cullFace(i.BACK) : C === fo ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : qe(i.CULL_FACE), Q = C;
  }
  function Ve(C) {
    C !== L && (ee && i.lineWidth(C), L = C);
  }
  function $e(C, ae, $) {
    C ? (we(i.POLYGON_OFFSET_FILL), (H !== ae || j !== $) && (i.polygonOffset(ae, $), H = ae, j = $)) : qe(i.POLYGON_OFFSET_FILL);
  }
  function it(C) {
    C ? we(i.SCISSOR_TEST) : qe(i.SCISSOR_TEST);
  }
  function E(C) {
    C === void 0 && (C = i.TEXTURE0 + X - 1), D !== C && (i.activeTexture(C), D = C);
  }
  function _(C, ae, $) {
    $ === void 0 && (D === null ? $ = i.TEXTURE0 + X - 1 : $ = D);
    let G = k[$];
    G === void 0 && (G = { type: void 0, texture: void 0 }, k[$] = G), (G.type !== C || G.texture !== ae) && (D !== $ && (i.activeTexture($), D = $), i.bindTexture(C, ae || ye[C]), G.type = C, G.texture = ae);
  }
  function F() {
    const C = k[D];
    C !== void 0 && C.type !== void 0 && (i.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function te() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Z() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ne() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function me() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function se() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function le() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function A() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function re() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Y() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Se() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function _e(C) {
    fe.equals(C) === !1 && (i.scissor(C.x, C.y, C.z, C.w), fe.copy(C));
  }
  function Me(C) {
    Te.equals(C) === !1 && (i.viewport(C.x, C.y, C.z, C.w), Te.copy(C));
  }
  function pe(C, ae) {
    let $ = f.get(ae);
    $ === void 0 && ($ = /* @__PURE__ */ new WeakMap(), f.set(ae, $));
    let G = $.get(C);
    G === void 0 && (G = i.getUniformBlockIndex(ae, C.name), $.set(C, G));
  }
  function de(C, ae) {
    const G = f.get(ae).get(C);
    u.get(ae) !== G && (i.uniformBlockBinding(ae, G, C.__bindingPointIndex), u.set(ae, G));
  }
  function ze() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), d = {}, D = null, k = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), v = [], p = null, h = !1, y = null, M = null, w = null, R = null, P = null, b = null, W = null, S = new ke(0, 0, 0), T = 0, V = !1, J = null, Q = null, L = null, H = null, j = null, fe.set(0, 0, i.canvas.width, i.canvas.height), Te.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: a,
      depth: l,
      stencil: c
    },
    enable: we,
    disable: qe,
    bindFramebuffer: Ue,
    drawBuffers: N,
    useProgram: ct,
    setBlending: Ae,
    setMaterial: je,
    setFlipSided: Le,
    setCullFace: Ce,
    setLineWidth: Ve,
    setPolygonOffset: $e,
    setScissorTest: it,
    activeTexture: E,
    bindTexture: _,
    unbindTexture: F,
    compressedTexImage2D: te,
    compressedTexImage3D: Z,
    texImage2D: Y,
    texImage3D: Se,
    updateUBOMapping: pe,
    uniformBlockBinding: de,
    texStorage2D: A,
    texStorage3D: re,
    texSubImage2D: ne,
    texSubImage3D: me,
    compressedTexSubImage2D: se,
    compressedTexSubImage3D: le,
    scissor: _e,
    viewport: Me,
    reset: ze
  };
}
function df(i, e, t, n, r, s, o) {
  const a = r.isWebGL2, l = r.maxTextures, c = r.maxCubemapSize, u = r.maxTextureSize, f = r.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let v;
  const p = /* @__PURE__ */ new WeakMap();
  let h = !1;
  try {
    h = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function y(E, _) {
    return h ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, _)
    ) : ji("canvas");
  }
  function M(E, _, F, te) {
    let Z = 1;
    if ((E.width > te || E.height > te) && (Z = te / Math.max(E.width, E.height)), Z < 1 || _ === !0)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap) {
        const ne = _ ? kr : Math.floor, me = ne(Z * E.width), se = ne(Z * E.height);
        v === void 0 && (v = y(me, se));
        const le = F ? y(me, se) : v;
        return le.width = me, le.height = se, le.getContext("2d").drawImage(E, 0, 0, me, se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + me + "x" + se + ")."), le;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E;
    return E;
  }
  function w(E) {
    return Hs(E.width) && Hs(E.height);
  }
  function R(E) {
    return a ? !1 : E.wrapS !== It || E.wrapT !== It || E.minFilter !== mt && E.minFilter !== Rt;
  }
  function P(E, _) {
    return E.generateMipmaps && _ && E.minFilter !== mt && E.minFilter !== Rt;
  }
  function b(E) {
    i.generateMipmap(E);
  }
  function W(E, _, F, te, Z = !1) {
    if (a === !1) return _;
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let ne = _;
    if (_ === i.RED && (F === i.FLOAT && (ne = i.R32F), F === i.HALF_FLOAT && (ne = i.R16F), F === i.UNSIGNED_BYTE && (ne = i.R8)), _ === i.RED_INTEGER && (F === i.UNSIGNED_BYTE && (ne = i.R8UI), F === i.UNSIGNED_SHORT && (ne = i.R16UI), F === i.UNSIGNED_INT && (ne = i.R32UI), F === i.BYTE && (ne = i.R8I), F === i.SHORT && (ne = i.R16I), F === i.INT && (ne = i.R32I)), _ === i.RG && (F === i.FLOAT && (ne = i.RG32F), F === i.HALF_FLOAT && (ne = i.RG16F), F === i.UNSIGNED_BYTE && (ne = i.RG8)), _ === i.RGBA) {
      const me = Z ? Wi : We.getTransfer(te);
      F === i.FLOAT && (ne = i.RGBA32F), F === i.HALF_FLOAT && (ne = i.RGBA16F), F === i.UNSIGNED_BYTE && (ne = me === Ye ? i.SRGB8_ALPHA8 : i.RGBA8), F === i.UNSIGNED_SHORT_4_4_4_4 && (ne = i.RGBA4), F === i.UNSIGNED_SHORT_5_5_5_1 && (ne = i.RGB5_A1);
    }
    return (ne === i.R16F || ne === i.R32F || ne === i.RG16F || ne === i.RG32F || ne === i.RGBA16F || ne === i.RGBA32F) && e.get("EXT_color_buffer_float"), ne;
  }
  function S(E, _, F) {
    return P(E, F) === !0 || E.isFramebufferTexture && E.minFilter !== mt && E.minFilter !== Rt ? Math.log2(Math.max(_.width, _.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? _.mipmaps.length : 1;
  }
  function T(E) {
    return E === mt || E === hs || E === rr ? i.NEAREST : i.LINEAR;
  }
  function V(E) {
    const _ = E.target;
    _.removeEventListener("dispose", V), Q(_), _.isVideoTexture && g.delete(_);
  }
  function J(E) {
    const _ = E.target;
    _.removeEventListener("dispose", J), H(_);
  }
  function Q(E) {
    const _ = n.get(E);
    if (_.__webglInit === void 0) return;
    const F = E.source, te = p.get(F);
    if (te) {
      const Z = te[_.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && L(E), Object.keys(te).length === 0 && p.delete(F);
    }
    n.remove(E);
  }
  function L(E) {
    const _ = n.get(E);
    i.deleteTexture(_.__webglTexture);
    const F = E.source, te = p.get(F);
    delete te[_.__cacheKey], o.memory.textures--;
  }
  function H(E) {
    const _ = E.texture, F = n.get(E), te = n.get(_);
    if (te.__webglTexture !== void 0 && (i.deleteTexture(te.__webglTexture), o.memory.textures--), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget)
      for (let Z = 0; Z < 6; Z++) {
        if (Array.isArray(F.__webglFramebuffer[Z]))
          for (let ne = 0; ne < F.__webglFramebuffer[Z].length; ne++) i.deleteFramebuffer(F.__webglFramebuffer[Z][ne]);
        else
          i.deleteFramebuffer(F.__webglFramebuffer[Z]);
        F.__webglDepthbuffer && i.deleteRenderbuffer(F.__webglDepthbuffer[Z]);
      }
    else {
      if (Array.isArray(F.__webglFramebuffer))
        for (let Z = 0; Z < F.__webglFramebuffer.length; Z++) i.deleteFramebuffer(F.__webglFramebuffer[Z]);
      else
        i.deleteFramebuffer(F.__webglFramebuffer);
      if (F.__webglDepthbuffer && i.deleteRenderbuffer(F.__webglDepthbuffer), F.__webglMultisampledFramebuffer && i.deleteFramebuffer(F.__webglMultisampledFramebuffer), F.__webglColorRenderbuffer)
        for (let Z = 0; Z < F.__webglColorRenderbuffer.length; Z++)
          F.__webglColorRenderbuffer[Z] && i.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);
      F.__webglDepthRenderbuffer && i.deleteRenderbuffer(F.__webglDepthRenderbuffer);
    }
    if (E.isWebGLMultipleRenderTargets)
      for (let Z = 0, ne = _.length; Z < ne; Z++) {
        const me = n.get(_[Z]);
        me.__webglTexture && (i.deleteTexture(me.__webglTexture), o.memory.textures--), n.remove(_[Z]);
      }
    n.remove(_), n.remove(E);
  }
  let j = 0;
  function X() {
    j = 0;
  }
  function ee() {
    const E = j;
    return E >= l && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + l), j += 1, E;
  }
  function q(E) {
    const _ = [];
    return _.push(E.wrapS), _.push(E.wrapT), _.push(E.wrapR || 0), _.push(E.magFilter), _.push(E.minFilter), _.push(E.anisotropy), _.push(E.internalFormat), _.push(E.format), _.push(E.type), _.push(E.generateMipmaps), _.push(E.premultiplyAlpha), _.push(E.flipY), _.push(E.unpackAlignment), _.push(E.colorSpace), _.join();
  }
  function K(E, _) {
    const F = n.get(E);
    if (E.isVideoTexture && $e(E), E.isRenderTargetTexture === !1 && E.version > 0 && F.__version !== E.version) {
      const te = E.image;
      if (te === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (te.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        we(F, E, _);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + _);
  }
  function D(E, _) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      we(F, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + _);
  }
  function k(E, _) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      we(F, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + _);
  }
  function ce(E, _) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      qe(F, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + _);
  }
  const ue = {
    [zr]: i.REPEAT,
    [It]: i.CLAMP_TO_EDGE,
    [Hr]: i.MIRRORED_REPEAT
  }, fe = {
    [mt]: i.NEAREST,
    [hs]: i.NEAREST_MIPMAP_NEAREST,
    [rr]: i.NEAREST_MIPMAP_LINEAR,
    [Rt]: i.LINEAR,
    [Xo]: i.LINEAR_MIPMAP_NEAREST,
    [oi]: i.LINEAR_MIPMAP_LINEAR
  }, Te = {
    [sl]: i.NEVER,
    [dl]: i.ALWAYS,
    [al]: i.LESS,
    [ll]: i.LEQUAL,
    [ol]: i.EQUAL,
    [hl]: i.GEQUAL,
    [cl]: i.GREATER,
    [ul]: i.NOTEQUAL
  };
  function Be(E, _, F) {
    if (F ? (i.texParameteri(E, i.TEXTURE_WRAP_S, ue[_.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, ue[_.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, ue[_.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, fe[_.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, fe[_.minFilter])) : (i.texParameteri(E, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(E, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (_.wrapS !== It || _.wrapT !== It) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(E, i.TEXTURE_MAG_FILTER, T(_.magFilter)), i.texParameteri(E, i.TEXTURE_MIN_FILTER, T(_.minFilter)), _.minFilter !== mt && _.minFilter !== Rt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), _.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, Te[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const te = e.get("EXT_texture_filter_anisotropic");
      if (_.magFilter === mt || _.minFilter !== rr && _.minFilter !== oi || _.type === rn && e.has("OES_texture_float_linear") === !1 || a === !1 && _.type === li && e.has("OES_texture_half_float_linear") === !1) return;
      (_.anisotropy > 1 || n.get(_).__currentAnisotropy) && (i.texParameterf(E, te.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy);
    }
  }
  function ye(E, _) {
    let F = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, _.addEventListener("dispose", V));
    const te = _.source;
    let Z = p.get(te);
    Z === void 0 && (Z = {}, p.set(te, Z));
    const ne = q(_);
    if (ne !== E.__cacheKey) {
      Z[ne] === void 0 && (Z[ne] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, F = !0), Z[ne].usedTimes++;
      const me = Z[E.__cacheKey];
      me !== void 0 && (Z[E.__cacheKey].usedTimes--, me.usedTimes === 0 && L(_)), E.__cacheKey = ne, E.__webglTexture = Z[ne].texture;
    }
    return F;
  }
  function we(E, _, F) {
    let te = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (te = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (te = i.TEXTURE_3D);
    const Z = ye(E, _), ne = _.source;
    t.bindTexture(te, E.__webglTexture, i.TEXTURE0 + F);
    const me = n.get(ne);
    if (ne.version !== me.__version || Z === !0) {
      t.activeTexture(i.TEXTURE0 + F);
      const se = We.getPrimaries(We.workingColorSpace), le = _.colorSpace === Ct ? null : We.getPrimaries(_.colorSpace), A = _.colorSpace === Ct || se === le ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, A);
      const re = R(_) && w(_.image) === !1;
      let Y = M(_.image, re, !1, u);
      Y = it(_, Y);
      const Se = w(Y) || a, _e = s.convert(_.format, _.colorSpace);
      let Me = s.convert(_.type), pe = W(_.internalFormat, _e, Me, _.colorSpace, _.isVideoTexture);
      Be(te, _, Se);
      let de;
      const ze = _.mipmaps, C = a && _.isVideoTexture !== !0, ae = me.__version === void 0 || Z === !0, $ = S(_, Y, Se);
      if (_.isDepthTexture)
        pe = i.DEPTH_COMPONENT, a ? _.type === rn ? pe = i.DEPTH_COMPONENT32F : _.type === nn ? pe = i.DEPTH_COMPONENT24 : _.type === xn ? pe = i.DEPTH24_STENCIL8 : pe = i.DEPTH_COMPONENT16 : _.type === rn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), _.format === Mn && pe === i.DEPTH_COMPONENT && _.type !== jr && _.type !== nn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), _.type = nn, Me = s.convert(_.type)), _.format === Zn && pe === i.DEPTH_COMPONENT && (pe = i.DEPTH_STENCIL, _.type !== xn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), _.type = xn, Me = s.convert(_.type))), ae && (C ? t.texStorage2D(i.TEXTURE_2D, 1, pe, Y.width, Y.height) : t.texImage2D(i.TEXTURE_2D, 0, pe, Y.width, Y.height, 0, _e, Me, null));
      else if (_.isDataTexture)
        if (ze.length > 0 && Se) {
          C && ae && t.texStorage2D(i.TEXTURE_2D, $, pe, ze[0].width, ze[0].height);
          for (let G = 0, ie = ze.length; G < ie; G++)
            de = ze[G], C ? t.texSubImage2D(i.TEXTURE_2D, G, 0, 0, de.width, de.height, _e, Me, de.data) : t.texImage2D(i.TEXTURE_2D, G, pe, de.width, de.height, 0, _e, Me, de.data);
          _.generateMipmaps = !1;
        } else
          C ? (ae && t.texStorage2D(i.TEXTURE_2D, $, pe, Y.width, Y.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Y.width, Y.height, _e, Me, Y.data)) : t.texImage2D(i.TEXTURE_2D, 0, pe, Y.width, Y.height, 0, _e, Me, Y.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          C && ae && t.texStorage3D(i.TEXTURE_2D_ARRAY, $, pe, ze[0].width, ze[0].height, Y.depth);
          for (let G = 0, ie = ze.length; G < ie; G++)
            de = ze[G], _.format !== Nt ? _e !== null ? C ? t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, G, 0, 0, 0, de.width, de.height, Y.depth, _e, de.data, 0, 0) : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, G, pe, de.width, de.height, Y.depth, 0, de.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : C ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, G, 0, 0, 0, de.width, de.height, Y.depth, _e, Me, de.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, G, pe, de.width, de.height, Y.depth, 0, _e, Me, de.data);
        } else {
          C && ae && t.texStorage2D(i.TEXTURE_2D, $, pe, ze[0].width, ze[0].height);
          for (let G = 0, ie = ze.length; G < ie; G++)
            de = ze[G], _.format !== Nt ? _e !== null ? C ? t.compressedTexSubImage2D(i.TEXTURE_2D, G, 0, 0, de.width, de.height, _e, de.data) : t.compressedTexImage2D(i.TEXTURE_2D, G, pe, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : C ? t.texSubImage2D(i.TEXTURE_2D, G, 0, 0, de.width, de.height, _e, Me, de.data) : t.texImage2D(i.TEXTURE_2D, G, pe, de.width, de.height, 0, _e, Me, de.data);
        }
      else if (_.isDataArrayTexture)
        C ? (ae && t.texStorage3D(i.TEXTURE_2D_ARRAY, $, pe, Y.width, Y.height, Y.depth), t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Y.width, Y.height, Y.depth, _e, Me, Y.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, pe, Y.width, Y.height, Y.depth, 0, _e, Me, Y.data);
      else if (_.isData3DTexture)
        C ? (ae && t.texStorage3D(i.TEXTURE_3D, $, pe, Y.width, Y.height, Y.depth), t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Y.width, Y.height, Y.depth, _e, Me, Y.data)) : t.texImage3D(i.TEXTURE_3D, 0, pe, Y.width, Y.height, Y.depth, 0, _e, Me, Y.data);
      else if (_.isFramebufferTexture) {
        if (ae)
          if (C)
            t.texStorage2D(i.TEXTURE_2D, $, pe, Y.width, Y.height);
          else {
            let G = Y.width, ie = Y.height;
            for (let ve = 0; ve < $; ve++)
              t.texImage2D(i.TEXTURE_2D, ve, pe, G, ie, 0, _e, Me, null), G >>= 1, ie >>= 1;
          }
      } else if (ze.length > 0 && Se) {
        C && ae && t.texStorage2D(i.TEXTURE_2D, $, pe, ze[0].width, ze[0].height);
        for (let G = 0, ie = ze.length; G < ie; G++)
          de = ze[G], C ? t.texSubImage2D(i.TEXTURE_2D, G, 0, 0, _e, Me, de) : t.texImage2D(i.TEXTURE_2D, G, pe, _e, Me, de);
        _.generateMipmaps = !1;
      } else
        C ? (ae && t.texStorage2D(i.TEXTURE_2D, $, pe, Y.width, Y.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _e, Me, Y)) : t.texImage2D(i.TEXTURE_2D, 0, pe, _e, Me, Y);
      P(_, Se) && b(te), me.__version = ne.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function qe(E, _, F) {
    if (_.image.length !== 6) return;
    const te = ye(E, _), Z = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + F);
    const ne = n.get(Z);
    if (Z.version !== ne.__version || te === !0) {
      t.activeTexture(i.TEXTURE0 + F);
      const me = We.getPrimaries(We.workingColorSpace), se = _.colorSpace === Ct ? null : We.getPrimaries(_.colorSpace), le = _.colorSpace === Ct || me === se ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, le);
      const A = _.isCompressedTexture || _.image[0].isCompressedTexture, re = _.image[0] && _.image[0].isDataTexture, Y = [];
      for (let G = 0; G < 6; G++)
        !A && !re ? Y[G] = M(_.image[G], !1, !0, c) : Y[G] = re ? _.image[G].image : _.image[G], Y[G] = it(_, Y[G]);
      const Se = Y[0], _e = w(Se) || a, Me = s.convert(_.format, _.colorSpace), pe = s.convert(_.type), de = W(_.internalFormat, Me, pe, _.colorSpace), ze = a && _.isVideoTexture !== !0, C = ne.__version === void 0 || te === !0;
      let ae = S(_, Se, _e);
      Be(i.TEXTURE_CUBE_MAP, _, _e);
      let $;
      if (A) {
        ze && C && t.texStorage2D(i.TEXTURE_CUBE_MAP, ae, de, Se.width, Se.height);
        for (let G = 0; G < 6; G++) {
          $ = Y[G].mipmaps;
          for (let ie = 0; ie < $.length; ie++) {
            const ve = $[ie];
            _.format !== Nt ? Me !== null ? ze ? t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ie, 0, 0, ve.width, ve.height, Me, ve.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ie, de, ve.width, ve.height, 0, ve.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ie, 0, 0, ve.width, ve.height, Me, pe, ve.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ie, de, ve.width, ve.height, 0, Me, pe, ve.data);
          }
        }
      } else {
        $ = _.mipmaps, ze && C && ($.length > 0 && ae++, t.texStorage2D(i.TEXTURE_CUBE_MAP, ae, de, Y[0].width, Y[0].height));
        for (let G = 0; G < 6; G++)
          if (re) {
            ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, 0, 0, 0, Y[G].width, Y[G].height, Me, pe, Y[G].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, 0, de, Y[G].width, Y[G].height, 0, Me, pe, Y[G].data);
            for (let ie = 0; ie < $.length; ie++) {
              const He = $[ie].image[G].image;
              ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ie + 1, 0, 0, He.width, He.height, Me, pe, He.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ie + 1, de, He.width, He.height, 0, Me, pe, He.data);
            }
          } else {
            ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, 0, 0, 0, Me, pe, Y[G]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, 0, de, Me, pe, Y[G]);
            for (let ie = 0; ie < $.length; ie++) {
              const ve = $[ie];
              ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ie + 1, 0, 0, Me, pe, ve.image[G]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + G, ie + 1, de, Me, pe, ve.image[G]);
            }
          }
      }
      P(_, _e) && b(i.TEXTURE_CUBE_MAP), ne.__version = Z.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function Ue(E, _, F, te, Z, ne) {
    const me = s.convert(F.format, F.colorSpace), se = s.convert(F.type), le = W(F.internalFormat, me, se, F.colorSpace);
    if (!n.get(_).__hasExternalTextures) {
      const re = Math.max(1, _.width >> ne), Y = Math.max(1, _.height >> ne);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? t.texImage3D(Z, ne, le, re, Y, _.depth, 0, me, se, null) : t.texImage2D(Z, ne, le, re, Y, 0, me, se, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E), Ve(_) ? d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, te, Z, n.get(F).__webglTexture, 0, Ce(_)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, te, Z, n.get(F).__webglTexture, ne), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function N(E, _, F) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), _.depthBuffer && !_.stencilBuffer) {
      let te = a === !0 ? i.DEPTH_COMPONENT24 : i.DEPTH_COMPONENT16;
      if (F || Ve(_)) {
        const Z = _.depthTexture;
        Z && Z.isDepthTexture && (Z.type === rn ? te = i.DEPTH_COMPONENT32F : Z.type === nn && (te = i.DEPTH_COMPONENT24));
        const ne = Ce(_);
        Ve(_) ? d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ne, te, _.width, _.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, ne, te, _.width, _.height);
      } else
        i.renderbufferStorage(i.RENDERBUFFER, te, _.width, _.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, E);
    } else if (_.depthBuffer && _.stencilBuffer) {
      const te = Ce(_);
      F && Ve(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, te, i.DEPTH24_STENCIL8, _.width, _.height) : Ve(_) ? d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, te, i.DEPTH24_STENCIL8, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, E);
    } else {
      const te = _.isWebGLMultipleRenderTargets === !0 ? _.texture : [_.texture];
      for (let Z = 0; Z < te.length; Z++) {
        const ne = te[Z], me = s.convert(ne.format, ne.colorSpace), se = s.convert(ne.type), le = W(ne.internalFormat, me, se, ne.colorSpace), A = Ce(_);
        F && Ve(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, A, le, _.width, _.height) : Ve(_) ? d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, A, le, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, le, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ct(E, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, E), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(_.depthTexture).__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), K(_.depthTexture, 0);
    const te = n.get(_.depthTexture).__webglTexture, Z = Ce(_);
    if (_.depthTexture.format === Mn)
      Ve(_) ? d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, te, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, te, 0);
    else if (_.depthTexture.format === Zn)
      Ve(_) ? d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, te, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, te, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function xe(E) {
    const _ = n.get(E), F = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      ct(_.__webglFramebuffer, E);
    } else if (F) {
      _.__webglDepthbuffer = [];
      for (let te = 0; te < 6; te++)
        t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[te]), _.__webglDepthbuffer[te] = i.createRenderbuffer(), N(_.__webglDepthbuffer[te], E, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer = i.createRenderbuffer(), N(_.__webglDepthbuffer, E, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function be(E, _, F) {
    const te = n.get(E);
    _ !== void 0 && Ue(te.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), F !== void 0 && xe(E);
  }
  function Ae(E) {
    const _ = E.texture, F = n.get(E), te = n.get(_);
    E.addEventListener("dispose", J), E.isWebGLMultipleRenderTargets !== !0 && (te.__webglTexture === void 0 && (te.__webglTexture = i.createTexture()), te.__version = _.version, o.memory.textures++);
    const Z = E.isWebGLCubeRenderTarget === !0, ne = E.isWebGLMultipleRenderTargets === !0, me = w(E) || a;
    if (Z) {
      F.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        if (a && _.mipmaps && _.mipmaps.length > 0) {
          F.__webglFramebuffer[se] = [];
          for (let le = 0; le < _.mipmaps.length; le++)
            F.__webglFramebuffer[se][le] = i.createFramebuffer();
        } else
          F.__webglFramebuffer[se] = i.createFramebuffer();
    } else {
      if (a && _.mipmaps && _.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let se = 0; se < _.mipmaps.length; se++)
          F.__webglFramebuffer[se] = i.createFramebuffer();
      } else
        F.__webglFramebuffer = i.createFramebuffer();
      if (ne)
        if (r.drawBuffers) {
          const se = E.texture;
          for (let le = 0, A = se.length; le < A; le++) {
            const re = n.get(se[le]);
            re.__webglTexture === void 0 && (re.__webglTexture = i.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && E.samples > 0 && Ve(E) === !1) {
        const se = ne ? _ : [_];
        F.__webglMultisampledFramebuffer = i.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let le = 0; le < se.length; le++) {
          const A = se[le];
          F.__webglColorRenderbuffer[le] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[le]);
          const re = s.convert(A.format, A.colorSpace), Y = s.convert(A.type), Se = W(A.internalFormat, re, Y, A.colorSpace, E.isXRRenderTarget === !0), _e = Ce(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, _e, Se, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + le, i.RENDERBUFFER, F.__webglColorRenderbuffer[le]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (F.__webglDepthRenderbuffer = i.createRenderbuffer(), N(F.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (Z) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, te.__webglTexture), Be(i.TEXTURE_CUBE_MAP, _, me);
      for (let se = 0; se < 6; se++)
        if (a && _.mipmaps && _.mipmaps.length > 0)
          for (let le = 0; le < _.mipmaps.length; le++)
            Ue(F.__webglFramebuffer[se][le], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + se, le);
        else
          Ue(F.__webglFramebuffer[se], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + se, 0);
      P(_, me) && b(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ne) {
      const se = E.texture;
      for (let le = 0, A = se.length; le < A; le++) {
        const re = se[le], Y = n.get(re);
        t.bindTexture(i.TEXTURE_2D, Y.__webglTexture), Be(i.TEXTURE_2D, re, me), Ue(F.__webglFramebuffer, E, re, i.COLOR_ATTACHMENT0 + le, i.TEXTURE_2D, 0), P(re, me) && b(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let se = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (a ? se = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(se, te.__webglTexture), Be(se, _, me), a && _.mipmaps && _.mipmaps.length > 0)
        for (let le = 0; le < _.mipmaps.length; le++)
          Ue(F.__webglFramebuffer[le], E, _, i.COLOR_ATTACHMENT0, se, le);
      else
        Ue(F.__webglFramebuffer, E, _, i.COLOR_ATTACHMENT0, se, 0);
      P(_, me) && b(se), t.unbindTexture();
    }
    E.depthBuffer && xe(E);
  }
  function je(E) {
    const _ = w(E) || a, F = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
    for (let te = 0, Z = F.length; te < Z; te++) {
      const ne = F[te];
      if (P(ne, _)) {
        const me = E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, se = n.get(ne).__webglTexture;
        t.bindTexture(me, se), b(me), t.unbindTexture();
      }
    }
  }
  function Le(E) {
    if (a && E.samples > 0 && Ve(E) === !1) {
      const _ = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture], F = E.width, te = E.height;
      let Z = i.COLOR_BUFFER_BIT;
      const ne = [], me = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, se = n.get(E), le = E.isWebGLMultipleRenderTargets === !0;
      if (le)
        for (let A = 0; A < _.length; A++)
          t.bindFramebuffer(i.FRAMEBUFFER, se.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + A, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, se.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + A, i.TEXTURE_2D, null, 0);
      t.bindFramebuffer(i.READ_FRAMEBUFFER, se.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, se.__webglFramebuffer);
      for (let A = 0; A < _.length; A++) {
        ne.push(i.COLOR_ATTACHMENT0 + A), E.depthBuffer && ne.push(me);
        const re = se.__ignoreDepthValues !== void 0 ? se.__ignoreDepthValues : !1;
        if (re === !1 && (E.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), le && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, se.__webglColorRenderbuffer[A]), re === !0 && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [me]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [me])), le) {
          const Y = n.get(_[A]).__webglTexture;
          i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Y, 0);
        }
        i.blitFramebuffer(0, 0, F, te, 0, 0, F, te, Z, i.NEAREST), m && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ne);
      }
      if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), le)
        for (let A = 0; A < _.length; A++) {
          t.bindFramebuffer(i.FRAMEBUFFER, se.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + A, i.RENDERBUFFER, se.__webglColorRenderbuffer[A]);
          const re = n.get(_[A]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, se.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + A, i.TEXTURE_2D, re, 0);
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, se.__webglMultisampledFramebuffer);
    }
  }
  function Ce(E) {
    return Math.min(f, E.samples);
  }
  function Ve(E) {
    const _ = n.get(E);
    return a && E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function $e(E) {
    const _ = o.render.frame;
    g.get(E) !== _ && (g.set(E, _), E.update());
  }
  function it(E, _) {
    const F = E.colorSpace, te = E.format, Z = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || E.format === Gr || F !== jt && F !== Ct && (We.getTransfer(F) === Ye ? a === !1 ? e.has("EXT_sRGB") === !0 && te === Nt ? (E.format = Gr, E.minFilter = Rt, E.generateMipmaps = !1) : _ = Ga.sRGBToLinear(_) : (te !== Nt || Z !== ln) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), _;
  }
  this.allocateTextureUnit = ee, this.resetTextureUnits = X, this.setTexture2D = K, this.setTexture2DArray = D, this.setTexture3D = k, this.setTextureCube = ce, this.rebindTextures = be, this.setupRenderTarget = Ae, this.updateRenderTargetMipmap = je, this.updateMultisampleRenderTarget = Le, this.setupDepthRenderbuffer = xe, this.setupFrameBufferTexture = Ue, this.useMultisampledRTT = Ve;
}
function ff(i, e, t) {
  const n = t.isWebGL2;
  function r(s, o = Ct) {
    let a;
    const l = We.getTransfer(o);
    if (s === ln) return i.UNSIGNED_BYTE;
    if (s === Ia) return i.UNSIGNED_SHORT_4_4_4_4;
    if (s === Na) return i.UNSIGNED_SHORT_5_5_5_1;
    if (s === qo) return i.BYTE;
    if (s === Yo) return i.SHORT;
    if (s === jr) return i.UNSIGNED_SHORT;
    if (s === Ua) return i.INT;
    if (s === nn) return i.UNSIGNED_INT;
    if (s === rn) return i.FLOAT;
    if (s === li)
      return n ? i.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === jo) return i.ALPHA;
    if (s === Nt) return i.RGBA;
    if (s === Ko) return i.LUMINANCE;
    if (s === Zo) return i.LUMINANCE_ALPHA;
    if (s === Mn) return i.DEPTH_COMPONENT;
    if (s === Zn) return i.DEPTH_STENCIL;
    if (s === Gr)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === $o) return i.RED;
    if (s === Fa) return i.RED_INTEGER;
    if (s === Jo) return i.RG;
    if (s === Oa) return i.RG_INTEGER;
    if (s === Ba) return i.RGBA_INTEGER;
    if (s === sr || s === ar || s === or || s === lr)
      if (l === Ye)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (s === sr) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === ar) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === or) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === lr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === sr) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === ar) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === or) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === lr) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === ds || s === fs || s === ps || s === ms)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === ds) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === fs) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === ps) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === ms) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === Qo)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === _s || s === gs)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (s === _s) return l === Ye ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === gs) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === vs || s === xs || s === Ms || s === Ss || s === Es || s === Ts || s === ys || s === bs || s === As || s === Rs || s === ws || s === Cs || s === Ps || s === Ls)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === vs) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === xs) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Ms) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Ss) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Es) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Ts) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === ys) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === bs) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === As) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Rs) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === ws) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Cs) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Ps) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Ls) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === cr || s === Ds || s === Us)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === cr) return l === Ye ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === Ds) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === Us) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (s === el || s === Is || s === Ns || s === Fs)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (s === cr) return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === Is) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Ns) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Fs) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === xn ? n ? i.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[s] !== void 0 ? i[s] : null;
  }
  return { convert: r };
}
class pf extends wt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Oi extends gt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const mf = { type: "move" };
class Ur {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Oi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Oi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new I(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new I()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Oi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new I(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new I()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let r = null, s = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const v of e.hand.values()) {
          const p = t.getJointPose(v, n), h = this._getHandJoint(c, v);
          p !== null && (h.matrix.fromArray(p.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = p.radius), h.visible = p !== null;
        }
        const u = c.joints["index-finger-tip"], f = c.joints["thumb-tip"], d = u.position.distanceTo(f.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && d > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && d <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(mf)));
    }
    return a !== null && (a.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Oi();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class _f extends Mt {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    if (u = u !== void 0 ? u : Mn, u !== Mn && u !== Zn)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === Mn && (n = nn), n === void 0 && u === Zn && (n = xn), super(null, r, s, o, a, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : mt, this.minFilter = l !== void 0 ? l : mt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class gf extends An {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, o = null, a = "local-floor", l = 1, c = null, u = null, f = null, d = null, m = null, g = null;
    const v = t.getContextAttributes();
    let p = null, h = null;
    const y = [], M = [], w = new wt();
    w.layers.enable(1), w.viewport = new lt();
    const R = new wt();
    R.layers.enable(2), R.viewport = new lt();
    const P = [w, R], b = new pf();
    b.layers.enable(1), b.layers.enable(2);
    let W = null, S = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(D) {
      let k = y[D];
      return k === void 0 && (k = new Ur(), y[D] = k), k.getTargetRaySpace();
    }, this.getControllerGrip = function(D) {
      let k = y[D];
      return k === void 0 && (k = new Ur(), y[D] = k), k.getGripSpace();
    }, this.getHand = function(D) {
      let k = y[D];
      return k === void 0 && (k = new Ur(), y[D] = k), k.getHandSpace();
    };
    function T(D) {
      const k = M.indexOf(D.inputSource);
      if (k === -1)
        return;
      const ce = y[k];
      ce !== void 0 && (ce.update(D.inputSource, D.frame, c || o), ce.dispatchEvent({ type: D.type, data: D.inputSource }));
    }
    function V() {
      r.removeEventListener("select", T), r.removeEventListener("selectstart", T), r.removeEventListener("selectend", T), r.removeEventListener("squeeze", T), r.removeEventListener("squeezestart", T), r.removeEventListener("squeezeend", T), r.removeEventListener("end", V), r.removeEventListener("inputsourceschange", J);
      for (let D = 0; D < y.length; D++) {
        const k = M[D];
        k !== null && (M[D] = null, y[D].disconnect(k));
      }
      W = null, S = null, e.setRenderTarget(p), m = null, d = null, f = null, r = null, h = null, K.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(D) {
      s = D, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(D) {
      a = D, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(D) {
      c = D;
    }, this.getBaseLayer = function() {
      return d !== null ? d : m;
    }, this.getBinding = function() {
      return f;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(D) {
      if (r = D, r !== null) {
        if (p = e.getRenderTarget(), r.addEventListener("select", T), r.addEventListener("selectstart", T), r.addEventListener("selectend", T), r.addEventListener("squeeze", T), r.addEventListener("squeezestart", T), r.addEventListener("squeezeend", T), r.addEventListener("end", V), r.addEventListener("inputsourceschange", J), v.xrCompatible !== !0 && await t.makeXRCompatible(), r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const k = {
            antialias: r.renderState.layers === void 0 ? v.antialias : !0,
            alpha: !0,
            depth: v.depth,
            stencil: v.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, t, k), r.updateRenderState({ baseLayer: m }), h = new Tn(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: Nt,
              type: ln,
              colorSpace: e.outputColorSpace,
              stencilBuffer: v.stencil
            }
          );
        } else {
          let k = null, ce = null, ue = null;
          v.depth && (ue = v.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, k = v.stencil ? Zn : Mn, ce = v.stencil ? xn : nn);
          const fe = {
            colorFormat: t.RGBA8,
            depthFormat: ue,
            scaleFactor: s
          };
          f = new XRWebGLBinding(r, t), d = f.createProjectionLayer(fe), r.updateRenderState({ layers: [d] }), h = new Tn(
            d.textureWidth,
            d.textureHeight,
            {
              format: Nt,
              type: ln,
              depthTexture: new _f(d.textureWidth, d.textureHeight, ce, void 0, void 0, void 0, void 0, void 0, void 0, k),
              stencilBuffer: v.stencil,
              colorSpace: e.outputColorSpace,
              samples: v.antialias ? 4 : 0
            }
          );
          const Te = e.properties.get(h);
          Te.__ignoreDepthValues = d.ignoreDepthValues;
        }
        h.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await r.requestReferenceSpace(a), K.setContext(r), K.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    };
    function J(D) {
      for (let k = 0; k < D.removed.length; k++) {
        const ce = D.removed[k], ue = M.indexOf(ce);
        ue >= 0 && (M[ue] = null, y[ue].disconnect(ce));
      }
      for (let k = 0; k < D.added.length; k++) {
        const ce = D.added[k];
        let ue = M.indexOf(ce);
        if (ue === -1) {
          for (let Te = 0; Te < y.length; Te++)
            if (Te >= M.length) {
              M.push(ce), ue = Te;
              break;
            } else if (M[Te] === null) {
              M[Te] = ce, ue = Te;
              break;
            }
          if (ue === -1) break;
        }
        const fe = y[ue];
        fe && fe.connect(ce);
      }
    }
    const Q = new I(), L = new I();
    function H(D, k, ce) {
      Q.setFromMatrixPosition(k.matrixWorld), L.setFromMatrixPosition(ce.matrixWorld);
      const ue = Q.distanceTo(L), fe = k.projectionMatrix.elements, Te = ce.projectionMatrix.elements, Be = fe[14] / (fe[10] - 1), ye = fe[14] / (fe[10] + 1), we = (fe[9] + 1) / fe[5], qe = (fe[9] - 1) / fe[5], Ue = (fe[8] - 1) / fe[0], N = (Te[8] + 1) / Te[0], ct = Be * Ue, xe = Be * N, be = ue / (-Ue + N), Ae = be * -Ue;
      k.matrixWorld.decompose(D.position, D.quaternion, D.scale), D.translateX(Ae), D.translateZ(be), D.matrixWorld.compose(D.position, D.quaternion, D.scale), D.matrixWorldInverse.copy(D.matrixWorld).invert();
      const je = Be + be, Le = ye + be, Ce = ct - Ae, Ve = xe + (ue - Ae), $e = we * ye / Le * je, it = qe * ye / Le * je;
      D.projectionMatrix.makePerspective(Ce, Ve, $e, it, je, Le), D.projectionMatrixInverse.copy(D.projectionMatrix).invert();
    }
    function j(D, k) {
      k === null ? D.matrixWorld.copy(D.matrix) : D.matrixWorld.multiplyMatrices(k.matrixWorld, D.matrix), D.matrixWorldInverse.copy(D.matrixWorld).invert();
    }
    this.updateCamera = function(D) {
      if (r === null) return;
      b.near = R.near = w.near = D.near, b.far = R.far = w.far = D.far, (W !== b.near || S !== b.far) && (r.updateRenderState({
        depthNear: b.near,
        depthFar: b.far
      }), W = b.near, S = b.far);
      const k = D.parent, ce = b.cameras;
      j(b, k);
      for (let ue = 0; ue < ce.length; ue++)
        j(ce[ue], k);
      ce.length === 2 ? H(b, w, R) : b.projectionMatrix.copy(w.projectionMatrix), X(D, b, k);
    };
    function X(D, k, ce) {
      ce === null ? D.matrix.copy(k.matrixWorld) : (D.matrix.copy(ce.matrixWorld), D.matrix.invert(), D.matrix.multiply(k.matrixWorld)), D.matrix.decompose(D.position, D.quaternion, D.scale), D.updateMatrixWorld(!0), D.projectionMatrix.copy(k.projectionMatrix), D.projectionMatrixInverse.copy(k.projectionMatrixInverse), D.isPerspectiveCamera && (D.fov = Vr * 2 * Math.atan(1 / D.projectionMatrix.elements[5]), D.zoom = 1);
    }
    this.getCamera = function() {
      return b;
    }, this.getFoveation = function() {
      if (!(d === null && m === null))
        return l;
    }, this.setFoveation = function(D) {
      l = D, d !== null && (d.fixedFoveation = D), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = D);
    };
    let ee = null;
    function q(D, k) {
      if (u = k.getViewerPose(c || o), g = k, u !== null) {
        const ce = u.views;
        m !== null && (e.setRenderTargetFramebuffer(h, m.framebuffer), e.setRenderTarget(h));
        let ue = !1;
        ce.length !== b.cameras.length && (b.cameras.length = 0, ue = !0);
        for (let fe = 0; fe < ce.length; fe++) {
          const Te = ce[fe];
          let Be = null;
          if (m !== null)
            Be = m.getViewport(Te);
          else {
            const we = f.getViewSubImage(d, Te);
            Be = we.viewport, fe === 0 && (e.setRenderTargetTextures(
              h,
              we.colorTexture,
              d.ignoreDepthValues ? void 0 : we.depthStencilTexture
            ), e.setRenderTarget(h));
          }
          let ye = P[fe];
          ye === void 0 && (ye = new wt(), ye.layers.enable(fe), ye.viewport = new lt(), P[fe] = ye), ye.matrix.fromArray(Te.transform.matrix), ye.matrix.decompose(ye.position, ye.quaternion, ye.scale), ye.projectionMatrix.fromArray(Te.projectionMatrix), ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(), ye.viewport.set(Be.x, Be.y, Be.width, Be.height), fe === 0 && (b.matrix.copy(ye.matrix), b.matrix.decompose(b.position, b.quaternion, b.scale)), ue === !0 && b.cameras.push(ye);
        }
      }
      for (let ce = 0; ce < y.length; ce++) {
        const ue = M[ce], fe = y[ce];
        ue !== null && fe !== void 0 && fe.update(ue, k, c || o);
      }
      ee && ee(D, k), k.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: k }), g = null;
    }
    const K = new Qa();
    K.setAnimationLoop(q), this.setAnimationLoop = function(D) {
      ee = D;
    }, this.dispose = function() {
    };
  }
}
function vf(i, e) {
  function t(p, h) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, Ka(i)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function r(p, h, y, M, w) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(p, h) : h.isMeshToonMaterial ? (s(p, h), f(p, h)) : h.isMeshPhongMaterial ? (s(p, h), u(p, h)) : h.isMeshStandardMaterial ? (s(p, h), d(p, h), h.isMeshPhysicalMaterial && m(p, h, w)) : h.isMeshMatcapMaterial ? (s(p, h), g(p, h)) : h.isMeshDepthMaterial ? s(p, h) : h.isMeshDistanceMaterial ? (s(p, h), v(p, h)) : h.isMeshNormalMaterial ? s(p, h) : h.isLineBasicMaterial ? (o(p, h), h.isLineDashedMaterial && a(p, h)) : h.isPointsMaterial ? l(p, h, y, M) : h.isSpriteMaterial ? c(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(p, h) {
    p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.bumpMap && (p.bumpMap.value = h.bumpMap, t(h.bumpMap, p.bumpMapTransform), p.bumpScale.value = h.bumpScale, h.side === xt && (p.bumpScale.value *= -1)), h.normalMap && (p.normalMap.value = h.normalMap, t(h.normalMap, p.normalMapTransform), p.normalScale.value.copy(h.normalScale), h.side === xt && p.normalScale.value.negate()), h.displacementMap && (p.displacementMap.value = h.displacementMap, t(h.displacementMap, p.displacementMapTransform), p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, p.emissiveMapTransform)), h.specularMap && (p.specularMap.value = h.specularMap, t(h.specularMap, p.specularMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const y = e.get(h).envMap;
    if (y && (p.envMap.value = y, p.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap) {
      p.lightMap.value = h.lightMap;
      const M = i._useLegacyLights === !0 ? Math.PI : 1;
      p.lightMapIntensity.value = h.lightMapIntensity * M, t(h.lightMap, p.lightMapTransform);
    }
    h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, p.aoMapTransform));
  }
  function o(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, h.map && (p.map.value = h.map, t(h.map, p.mapTransform));
  }
  function a(p, h) {
    p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale;
  }
  function l(p, h, y, M) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * y, p.scale.value = M * 0.5, h.map && (p.map.value = h.map, t(h.map, p.uvTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function c(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function u(p, h) {
    p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function f(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function d(p, h) {
    p.metalness.value = h.metalness, h.metalnessMap && (p.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, p.metalnessMapTransform)), p.roughness.value = h.roughness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, p.roughnessMapTransform)), e.get(h).envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function m(p, h, y) {
    p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, p.sheenColorMapTransform)), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, p.clearcoatMapTransform)), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (p.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === xt && p.clearcoatNormalScale.value.negate())), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, p.iridescenceMapTransform)), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = y.texture, p.transmissionSamplerSize.value.set(y.width, y.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, p.transmissionMapTransform)), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (p.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (p.anisotropyMap.value = h.anisotropyMap, t(h.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, p.specularColorMapTransform)), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function v(p, h) {
    const y = e.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(y.matrixWorld), p.nearDistance.value = y.shadow.camera.near, p.farDistance.value = y.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function xf(i, e, t, n) {
  let r = {}, s = {}, o = [];
  const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(y, M) {
    const w = M.program;
    n.uniformBlockBinding(y, w);
  }
  function c(y, M) {
    let w = r[y.id];
    w === void 0 && (g(y), w = u(y), r[y.id] = w, y.addEventListener("dispose", p));
    const R = M.program;
    n.updateUBOMapping(y, R);
    const P = e.render.frame;
    s[y.id] !== P && (d(y), s[y.id] = P);
  }
  function u(y) {
    const M = f();
    y.__bindingPointIndex = M;
    const w = i.createBuffer(), R = y.__size, P = y.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, w), i.bufferData(i.UNIFORM_BUFFER, R, P), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, M, w), w;
  }
  function f() {
    for (let y = 0; y < a; y++)
      if (o.indexOf(y) === -1)
        return o.push(y), y;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(y) {
    const M = r[y.id], w = y.uniforms, R = y.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, M);
    for (let P = 0, b = w.length; P < b; P++) {
      const W = w[P];
      if (m(W, P, R) === !0) {
        const S = W.__offset, T = Array.isArray(W.value) ? W.value : [W.value];
        let V = 0;
        for (let J = 0; J < T.length; J++) {
          const Q = T[J], L = v(Q);
          typeof Q == "number" ? (W.__data[0] = Q, i.bufferSubData(i.UNIFORM_BUFFER, S + V, W.__data)) : Q.isMatrix3 ? (W.__data[0] = Q.elements[0], W.__data[1] = Q.elements[1], W.__data[2] = Q.elements[2], W.__data[3] = Q.elements[0], W.__data[4] = Q.elements[3], W.__data[5] = Q.elements[4], W.__data[6] = Q.elements[5], W.__data[7] = Q.elements[0], W.__data[8] = Q.elements[6], W.__data[9] = Q.elements[7], W.__data[10] = Q.elements[8], W.__data[11] = Q.elements[0]) : (Q.toArray(W.__data, V), V += L.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        i.bufferSubData(i.UNIFORM_BUFFER, S, W.__data);
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(y, M, w) {
    const R = y.value;
    if (w[M] === void 0) {
      if (typeof R == "number")
        w[M] = R;
      else {
        const P = Array.isArray(R) ? R : [R], b = [];
        for (let W = 0; W < P.length; W++)
          b.push(P[W].clone());
        w[M] = b;
      }
      return !0;
    } else if (typeof R == "number") {
      if (w[M] !== R)
        return w[M] = R, !0;
    } else {
      const P = Array.isArray(w[M]) ? w[M] : [w[M]], b = Array.isArray(R) ? R : [R];
      for (let W = 0; W < P.length; W++) {
        const S = P[W];
        if (S.equals(b[W]) === !1)
          return S.copy(b[W]), !0;
      }
    }
    return !1;
  }
  function g(y) {
    const M = y.uniforms;
    let w = 0;
    const R = 16;
    let P = 0;
    for (let b = 0, W = M.length; b < W; b++) {
      const S = M[b], T = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, V = Array.isArray(S.value) ? S.value : [S.value];
      for (let J = 0, Q = V.length; J < Q; J++) {
        const L = V[J], H = v(L);
        T.boundary += H.boundary, T.storage += H.storage;
      }
      if (S.__data = new Float32Array(T.storage / Float32Array.BYTES_PER_ELEMENT), S.__offset = w, b > 0) {
        P = w % R;
        const J = R - P;
        P !== 0 && J - T.boundary < 0 && (w += R - P, S.__offset = w);
      }
      w += T.storage;
    }
    return P = w % R, P > 0 && (w += R - P), y.__size = w, y.__cache = {}, this;
  }
  function v(y) {
    const M = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof y == "number" ? (M.boundary = 4, M.storage = 4) : y.isVector2 ? (M.boundary = 8, M.storage = 8) : y.isVector3 || y.isColor ? (M.boundary = 16, M.storage = 12) : y.isVector4 ? (M.boundary = 16, M.storage = 16) : y.isMatrix3 ? (M.boundary = 48, M.storage = 48) : y.isMatrix4 ? (M.boundary = 64, M.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), M;
  }
  function p(y) {
    const M = y.target;
    M.removeEventListener("dispose", p);
    const w = o.indexOf(M.__bindingPointIndex);
    o.splice(w, 1), i.deleteBuffer(r[M.id]), delete r[M.id], delete s[M.id];
  }
  function h() {
    for (const y in r)
      i.deleteBuffer(r[y]);
    o = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: h
  };
}
class ro {
  constructor(e = {}) {
    const {
      canvas: t = ml(),
      context: n = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: f = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? d = n.getContextAttributes().alpha : d = o;
    const m = new Uint32Array(4), g = new Int32Array(4);
    let v = null, p = null;
    const h = [], y = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = ot, this._useLegacyLights = !1, this.toneMapping = on, this.toneMappingExposure = 1;
    const M = this;
    let w = !1, R = 0, P = 0, b = null, W = -1, S = null;
    const T = new lt(), V = new lt();
    let J = null;
    const Q = new ke(0);
    let L = 0, H = t.width, j = t.height, X = 1, ee = null, q = null;
    const K = new lt(0, 0, H, j), D = new lt(0, 0, H, j);
    let k = !1;
    const ce = new Ja();
    let ue = !1, fe = !1, Te = null;
    const Be = new at(), ye = new Oe(), we = new I(), qe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ue() {
      return b === null ? X : 1;
    }
    let N = n;
    function ct(x, U) {
      for (let O = 0; O < x.length; O++) {
        const B = x[O], z = t.getContext(B, U);
        if (z !== null) return z;
      }
      return null;
    }
    try {
      const x = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: f
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Yr}`), t.addEventListener("webglcontextlost", ze, !1), t.addEventListener("webglcontextrestored", C, !1), t.addEventListener("webglcontextcreationerror", ae, !1), N === null) {
        const U = ["webgl2", "webgl", "experimental-webgl"];
        if (M.isWebGL1Renderer === !0 && U.shift(), N = ct(U, x), N === null)
          throw ct(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && N instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), N.getShaderPrecisionFormat === void 0 && (N.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let xe, be, Ae, je, Le, Ce, Ve, $e, it, E, _, F, te, Z, ne, me, se, le, A, re, Y, Se, _e, Me;
    function pe() {
      xe = new wh(N), be = new Sh(N, xe, e), xe.init(be), Se = new ff(N, xe, be), Ae = new hf(N, xe, be), je = new Lh(N), Le = new Zd(), Ce = new df(N, xe, Ae, Le, be, Se, je), Ve = new Th(M), $e = new Rh(M), it = new Hl(N, be), _e = new xh(N, xe, it, be), E = new Ch(N, it, je, _e), _ = new Nh(N, E, it, je), A = new Ih(N, be, Ce), me = new Eh(Le), F = new Kd(M, Ve, $e, xe, be, _e, me), te = new vf(M, Le), Z = new Jd(), ne = new sf(xe, be), le = new vh(M, Ve, $e, Ae, _, d, l), se = new uf(M, _, be), Me = new xf(N, je, be, Ae), re = new Mh(N, xe, je, be), Y = new Ph(N, xe, je, be), je.programs = F.programs, M.capabilities = be, M.extensions = xe, M.properties = Le, M.renderLists = Z, M.shadowMap = se, M.state = Ae, M.info = je;
    }
    pe();
    const de = new gf(M, N);
    this.xr = de, this.getContext = function() {
      return N;
    }, this.getContextAttributes = function() {
      return N.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = xe.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = xe.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return X;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (X = x, this.setSize(H, j, !1));
    }, this.getSize = function(x) {
      return x.set(H, j);
    }, this.setSize = function(x, U, O = !0) {
      if (de.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      H = x, j = U, t.width = Math.floor(x * X), t.height = Math.floor(U * X), O === !0 && (t.style.width = x + "px", t.style.height = U + "px"), this.setViewport(0, 0, x, U);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(H * X, j * X).floor();
    }, this.setDrawingBufferSize = function(x, U, O) {
      H = x, j = U, X = O, t.width = Math.floor(x * O), t.height = Math.floor(U * O), this.setViewport(0, 0, x, U);
    }, this.getCurrentViewport = function(x) {
      return x.copy(T);
    }, this.getViewport = function(x) {
      return x.copy(K);
    }, this.setViewport = function(x, U, O, B) {
      x.isVector4 ? K.set(x.x, x.y, x.z, x.w) : K.set(x, U, O, B), Ae.viewport(T.copy(K).multiplyScalar(X).floor());
    }, this.getScissor = function(x) {
      return x.copy(D);
    }, this.setScissor = function(x, U, O, B) {
      x.isVector4 ? D.set(x.x, x.y, x.z, x.w) : D.set(x, U, O, B), Ae.scissor(V.copy(D).multiplyScalar(X).floor());
    }, this.getScissorTest = function() {
      return k;
    }, this.setScissorTest = function(x) {
      Ae.setScissorTest(k = x);
    }, this.setOpaqueSort = function(x) {
      ee = x;
    }, this.setTransparentSort = function(x) {
      q = x;
    }, this.getClearColor = function(x) {
      return x.copy(le.getClearColor());
    }, this.setClearColor = function() {
      le.setClearColor.apply(le, arguments);
    }, this.getClearAlpha = function() {
      return le.getClearAlpha();
    }, this.setClearAlpha = function() {
      le.setClearAlpha.apply(le, arguments);
    }, this.clear = function(x = !0, U = !0, O = !0) {
      let B = 0;
      if (x) {
        let z = !1;
        if (b !== null) {
          const he = b.texture.format;
          z = he === Ba || he === Oa || he === Fa;
        }
        if (z) {
          const he = b.texture.type, ge = he === ln || he === nn || he === jr || he === xn || he === Ia || he === Na, Ee = le.getClearColor(), Re = le.getClearAlpha(), Ne = Ee.r, Pe = Ee.g, De = Ee.b;
          ge ? (m[0] = Ne, m[1] = Pe, m[2] = De, m[3] = Re, N.clearBufferuiv(N.COLOR, 0, m)) : (g[0] = Ne, g[1] = Pe, g[2] = De, g[3] = Re, N.clearBufferiv(N.COLOR, 0, g));
        } else
          B |= N.COLOR_BUFFER_BIT;
      }
      U && (B |= N.DEPTH_BUFFER_BIT), O && (B |= N.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), N.clear(B);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ze, !1), t.removeEventListener("webglcontextrestored", C, !1), t.removeEventListener("webglcontextcreationerror", ae, !1), Z.dispose(), ne.dispose(), Le.dispose(), Ve.dispose(), $e.dispose(), _.dispose(), _e.dispose(), Me.dispose(), F.dispose(), de.dispose(), de.removeEventListener("sessionstart", bt), de.removeEventListener("sessionend", Xe), Te && (Te.dispose(), Te = null), dt.stop();
    };
    function ze(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), w = !0;
    }
    function C() {
      console.log("THREE.WebGLRenderer: Context Restored."), w = !1;
      const x = je.autoReset, U = se.enabled, O = se.autoUpdate, B = se.needsUpdate, z = se.type;
      pe(), je.autoReset = x, se.enabled = U, se.autoUpdate = O, se.needsUpdate = B, se.type = z;
    }
    function ae(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function $(x) {
      const U = x.target;
      U.removeEventListener("dispose", $), G(U);
    }
    function G(x) {
      ie(x), Le.remove(x);
    }
    function ie(x) {
      const U = Le.get(x).programs;
      U !== void 0 && (U.forEach(function(O) {
        F.releaseProgram(O);
      }), x.isShaderMaterial && F.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, U, O, B, z, he) {
      U === null && (U = qe);
      const ge = z.isMesh && z.matrixWorld.determinant() < 0, Ee = oo(x, U, O, B, z);
      Ae.setMaterial(B, ge);
      let Re = O.index, Ne = 1;
      if (B.wireframe === !0) {
        if (Re = E.getWireframeAttribute(O), Re === void 0) return;
        Ne = 2;
      }
      const Pe = O.drawRange, De = O.attributes.position;
      let Ze = Pe.start * Ne, St = (Pe.start + Pe.count) * Ne;
      he !== null && (Ze = Math.max(Ze, he.start * Ne), St = Math.min(St, (he.start + he.count) * Ne)), Re !== null ? (Ze = Math.max(Ze, 0), St = Math.min(St, Re.count)) : De != null && (Ze = Math.max(Ze, 0), St = Math.min(St, De.count));
      const rt = St - Ze;
      if (rt < 0 || rt === 1 / 0) return;
      _e.setup(z, B, Ee, O, Re);
      let zt, Ke = re;
      if (Re !== null && (zt = it.get(Re), Ke = Y, Ke.setIndex(zt)), z.isMesh)
        B.wireframe === !0 ? (Ae.setLineWidth(B.wireframeLinewidth * Ue()), Ke.setMode(N.LINES)) : Ke.setMode(N.TRIANGLES);
      else if (z.isLine) {
        let Ge = B.linewidth;
        Ge === void 0 && (Ge = 1), Ae.setLineWidth(Ge * Ue()), z.isLineSegments ? Ke.setMode(N.LINES) : z.isLineLoop ? Ke.setMode(N.LINE_LOOP) : Ke.setMode(N.LINE_STRIP);
      } else z.isPoints ? Ke.setMode(N.POINTS) : z.isSprite && Ke.setMode(N.TRIANGLES);
      if (z.isInstancedMesh)
        Ke.renderInstances(Ze, rt, z.count);
      else if (O.isInstancedBufferGeometry) {
        const Ge = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, er = Math.min(O.instanceCount, Ge);
        Ke.renderInstances(Ze, rt, er);
      } else
        Ke.render(Ze, rt);
    };
    function ve(x, U, O) {
      x.transparent === !0 && x.side === qt && x.forceSinglePass === !1 ? (x.side = xt, x.needsUpdate = !0, pi(x, U, O), x.side = cn, x.needsUpdate = !0, pi(x, U, O), x.side = qt) : pi(x, U, O);
    }
    this.compile = function(x, U, O = null) {
      O === null && (O = x), p = ne.get(O), p.init(), y.push(p), O.traverseVisible(function(z) {
        z.isLight && z.layers.test(U.layers) && (p.pushLight(z), z.castShadow && p.pushShadow(z));
      }), x !== O && x.traverseVisible(function(z) {
        z.isLight && z.layers.test(U.layers) && (p.pushLight(z), z.castShadow && p.pushShadow(z));
      }), p.setupLights(M._useLegacyLights);
      const B = /* @__PURE__ */ new Set();
      return x.traverse(function(z) {
        const he = z.material;
        if (he)
          if (Array.isArray(he))
            for (let ge = 0; ge < he.length; ge++) {
              const Ee = he[ge];
              ve(Ee, O, z), B.add(Ee);
            }
          else
            ve(he, O, z), B.add(he);
      }), y.pop(), p = null, B;
    }, this.compileAsync = function(x, U, O = null) {
      const B = this.compile(x, U, O);
      return new Promise((z) => {
        function he() {
          if (B.forEach(function(ge) {
            Le.get(ge).currentProgram.isReady() && B.delete(ge);
          }), B.size === 0) {
            z(x);
            return;
          }
          setTimeout(he, 10);
        }
        xe.get("KHR_parallel_shader_compile") !== null ? he() : setTimeout(he, 10);
      });
    };
    let He = null;
    function Je(x) {
      He && He(x);
    }
    function bt() {
      dt.stop();
    }
    function Xe() {
      dt.start();
    }
    const dt = new Qa();
    dt.setAnimationLoop(Je), typeof self < "u" && dt.setContext(self), this.setAnimationLoop = function(x) {
      He = x, de.setAnimationLoop(x), x === null ? dt.stop() : dt.start();
    }, de.addEventListener("sessionstart", bt), de.addEventListener("sessionend", Xe), this.render = function(x, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (w === !0) return;
      x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), de.enabled === !0 && de.isPresenting === !0 && (de.cameraAutoUpdate === !0 && de.updateCamera(U), U = de.getCamera()), x.isScene === !0 && x.onBeforeRender(M, x, U, b), p = ne.get(x, y.length), p.init(), y.push(p), Be.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), ce.setFromProjectionMatrix(Be), fe = this.localClippingEnabled, ue = me.init(this.clippingPlanes, fe), v = Z.get(x, h.length), v.init(), h.push(v), Ot(x, U, 0, M.sortObjects), v.finish(), M.sortObjects === !0 && v.sort(ee, q), this.info.render.frame++, ue === !0 && me.beginShadows();
      const O = p.state.shadowsArray;
      if (se.render(O, x, U), ue === !0 && me.endShadows(), this.info.autoReset === !0 && this.info.reset(), le.render(v, x), p.setupLights(M._useLegacyLights), U.isArrayCamera) {
        const B = U.cameras;
        for (let z = 0, he = B.length; z < he; z++) {
          const ge = B[z];
          Qr(v, x, ge, ge.viewport);
        }
      } else
        Qr(v, x, U);
      b !== null && (Ce.updateMultisampleRenderTarget(b), Ce.updateRenderTargetMipmap(b)), x.isScene === !0 && x.onAfterRender(M, x, U), _e.resetDefaultState(), W = -1, S = null, y.pop(), y.length > 0 ? p = y[y.length - 1] : p = null, h.pop(), h.length > 0 ? v = h[h.length - 1] : v = null;
    };
    function Ot(x, U, O, B) {
      if (x.visible === !1) return;
      if (x.layers.test(U.layers)) {
        if (x.isGroup)
          O = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(U);
        else if (x.isLight)
          p.pushLight(x), x.castShadow && p.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || ce.intersectsSprite(x)) {
            B && we.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Be);
            const ge = _.update(x), Ee = x.material;
            Ee.visible && v.push(x, ge, Ee, O, we.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || ce.intersectsObject(x))) {
          const ge = _.update(x), Ee = x.material;
          if (B && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), we.copy(x.boundingSphere.center)) : (ge.boundingSphere === null && ge.computeBoundingSphere(), we.copy(ge.boundingSphere.center)), we.applyMatrix4(x.matrixWorld).applyMatrix4(Be)), Array.isArray(Ee)) {
            const Re = ge.groups;
            for (let Ne = 0, Pe = Re.length; Ne < Pe; Ne++) {
              const De = Re[Ne], Ze = Ee[De.materialIndex];
              Ze && Ze.visible && v.push(x, ge, Ze, O, we.z, De);
            }
          } else Ee.visible && v.push(x, ge, Ee, O, we.z, null);
        }
      }
      const he = x.children;
      for (let ge = 0, Ee = he.length; ge < Ee; ge++)
        Ot(he[ge], U, O, B);
    }
    function Qr(x, U, O, B) {
      const z = x.opaque, he = x.transmissive, ge = x.transparent;
      p.setupLightsView(O), ue === !0 && me.setGlobalState(M.clippingPlanes, O), he.length > 0 && ao(z, he, U, O), B && Ae.viewport(T.copy(B)), z.length > 0 && fi(z, U, O), he.length > 0 && fi(he, U, O), ge.length > 0 && fi(ge, U, O), Ae.buffers.depth.setTest(!0), Ae.buffers.depth.setMask(!0), Ae.buffers.color.setMask(!0), Ae.setPolygonOffset(!1);
    }
    function ao(x, U, O, B) {
      if ((O.isScene === !0 ? O.overrideMaterial : null) !== null)
        return;
      const he = be.isWebGL2;
      Te === null && (Te = new Tn(1, 1, {
        generateMipmaps: !0,
        type: xe.has("EXT_color_buffer_half_float") ? li : ln,
        minFilter: oi,
        samples: he ? 4 : 0
      })), M.getDrawingBufferSize(ye), he ? Te.setSize(ye.x, ye.y) : Te.setSize(kr(ye.x), kr(ye.y));
      const ge = M.getRenderTarget();
      M.setRenderTarget(Te), M.getClearColor(Q), L = M.getClearAlpha(), L < 1 && M.setClearColor(16777215, 0.5), M.clear();
      const Ee = M.toneMapping;
      M.toneMapping = on, fi(x, O, B), Ce.updateMultisampleRenderTarget(Te), Ce.updateRenderTargetMipmap(Te);
      let Re = !1;
      for (let Ne = 0, Pe = U.length; Ne < Pe; Ne++) {
        const De = U[Ne], Ze = De.object, St = De.geometry, rt = De.material, zt = De.group;
        if (rt.side === qt && Ze.layers.test(B.layers)) {
          const Ke = rt.side;
          rt.side = xt, rt.needsUpdate = !0, es(Ze, O, B, St, rt, zt), rt.side = Ke, rt.needsUpdate = !0, Re = !0;
        }
      }
      Re === !0 && (Ce.updateMultisampleRenderTarget(Te), Ce.updateRenderTargetMipmap(Te)), M.setRenderTarget(ge), M.setClearColor(Q, L), M.toneMapping = Ee;
    }
    function fi(x, U, O) {
      const B = U.isScene === !0 ? U.overrideMaterial : null;
      for (let z = 0, he = x.length; z < he; z++) {
        const ge = x[z], Ee = ge.object, Re = ge.geometry, Ne = B === null ? ge.material : B, Pe = ge.group;
        Ee.layers.test(O.layers) && es(Ee, U, O, Re, Ne, Pe);
      }
    }
    function es(x, U, O, B, z, he) {
      x.onBeforeRender(M, U, O, B, z, he), x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), z.onBeforeRender(M, U, O, B, x, he), z.transparent === !0 && z.side === qt && z.forceSinglePass === !1 ? (z.side = xt, z.needsUpdate = !0, M.renderBufferDirect(O, U, B, z, x, he), z.side = cn, z.needsUpdate = !0, M.renderBufferDirect(O, U, B, z, x, he), z.side = qt) : M.renderBufferDirect(O, U, B, z, x, he), x.onAfterRender(M, U, O, B, z, he);
    }
    function pi(x, U, O) {
      U.isScene !== !0 && (U = qe);
      const B = Le.get(x), z = p.state.lights, he = p.state.shadowsArray, ge = z.state.version, Ee = F.getParameters(x, z.state, he, U, O), Re = F.getProgramCacheKey(Ee);
      let Ne = B.programs;
      B.environment = x.isMeshStandardMaterial ? U.environment : null, B.fog = U.fog, B.envMap = (x.isMeshStandardMaterial ? $e : Ve).get(x.envMap || B.environment), Ne === void 0 && (x.addEventListener("dispose", $), Ne = /* @__PURE__ */ new Map(), B.programs = Ne);
      let Pe = Ne.get(Re);
      if (Pe !== void 0) {
        if (B.currentProgram === Pe && B.lightsStateVersion === ge)
          return ns(x, Ee), Pe;
      } else
        Ee.uniforms = F.getUniforms(x), x.onBuild(O, Ee, M), x.onBeforeCompile(Ee, M), Pe = F.acquireProgram(Ee, Re), Ne.set(Re, Pe), B.uniforms = Ee.uniforms;
      const De = B.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (De.clippingPlanes = me.uniform), ns(x, Ee), B.needsLights = co(x), B.lightsStateVersion = ge, B.needsLights && (De.ambientLightColor.value = z.state.ambient, De.lightProbe.value = z.state.probe, De.directionalLights.value = z.state.directional, De.directionalLightShadows.value = z.state.directionalShadow, De.spotLights.value = z.state.spot, De.spotLightShadows.value = z.state.spotShadow, De.rectAreaLights.value = z.state.rectArea, De.ltc_1.value = z.state.rectAreaLTC1, De.ltc_2.value = z.state.rectAreaLTC2, De.pointLights.value = z.state.point, De.pointLightShadows.value = z.state.pointShadow, De.hemisphereLights.value = z.state.hemi, De.directionalShadowMap.value = z.state.directionalShadowMap, De.directionalShadowMatrix.value = z.state.directionalShadowMatrix, De.spotShadowMap.value = z.state.spotShadowMap, De.spotLightMatrix.value = z.state.spotLightMatrix, De.spotLightMap.value = z.state.spotLightMap, De.pointShadowMap.value = z.state.pointShadowMap, De.pointShadowMatrix.value = z.state.pointShadowMatrix), B.currentProgram = Pe, B.uniformsList = null, Pe;
    }
    function ts(x) {
      if (x.uniformsList === null) {
        const U = x.currentProgram.getUniforms();
        x.uniformsList = Vi.seqWithValue(U.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function ns(x, U) {
      const O = Le.get(x);
      O.outputColorSpace = U.outputColorSpace, O.instancing = U.instancing, O.instancingColor = U.instancingColor, O.skinning = U.skinning, O.morphTargets = U.morphTargets, O.morphNormals = U.morphNormals, O.morphColors = U.morphColors, O.morphTargetsCount = U.morphTargetsCount, O.numClippingPlanes = U.numClippingPlanes, O.numIntersection = U.numClipIntersection, O.vertexAlphas = U.vertexAlphas, O.vertexTangents = U.vertexTangents, O.toneMapping = U.toneMapping;
    }
    function oo(x, U, O, B, z) {
      U.isScene !== !0 && (U = qe), Ce.resetTextureUnits();
      const he = U.fog, ge = B.isMeshStandardMaterial ? U.environment : null, Ee = b === null ? M.outputColorSpace : b.isXRRenderTarget === !0 ? b.texture.colorSpace : jt, Re = (B.isMeshStandardMaterial ? $e : Ve).get(B.envMap || ge), Ne = B.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4, Pe = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), De = !!O.morphAttributes.position, Ze = !!O.morphAttributes.normal, St = !!O.morphAttributes.color;
      let rt = on;
      B.toneMapped && (b === null || b.isXRRenderTarget === !0) && (rt = M.toneMapping);
      const zt = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Ke = zt !== void 0 ? zt.length : 0, Ge = Le.get(B), er = p.state.lights;
      if (ue === !0 && (fe === !0 || x !== S)) {
        const Et = x === S && B.id === W;
        me.setState(B, x, Et);
      }
      let Qe = !1;
      B.version === Ge.__version ? (Ge.needsLights && Ge.lightsStateVersion !== er.state.version || Ge.outputColorSpace !== Ee || z.isInstancedMesh && Ge.instancing === !1 || !z.isInstancedMesh && Ge.instancing === !0 || z.isSkinnedMesh && Ge.skinning === !1 || !z.isSkinnedMesh && Ge.skinning === !0 || z.isInstancedMesh && Ge.instancingColor === !0 && z.instanceColor === null || z.isInstancedMesh && Ge.instancingColor === !1 && z.instanceColor !== null || Ge.envMap !== Re || B.fog === !0 && Ge.fog !== he || Ge.numClippingPlanes !== void 0 && (Ge.numClippingPlanes !== me.numPlanes || Ge.numIntersection !== me.numIntersection) || Ge.vertexAlphas !== Ne || Ge.vertexTangents !== Pe || Ge.morphTargets !== De || Ge.morphNormals !== Ze || Ge.morphColors !== St || Ge.toneMapping !== rt || be.isWebGL2 === !0 && Ge.morphTargetsCount !== Ke) && (Qe = !0) : (Qe = !0, Ge.__version = B.version);
      let un = Ge.currentProgram;
      Qe === !0 && (un = pi(B, U, z));
      let is = !1, Qn = !1, tr = !1;
      const ft = un.getUniforms(), hn = Ge.uniforms;
      if (Ae.useProgram(un.program) && (is = !0, Qn = !0, tr = !0), B.id !== W && (W = B.id, Qn = !0), is || S !== x) {
        ft.setValue(N, "projectionMatrix", x.projectionMatrix), ft.setValue(N, "viewMatrix", x.matrixWorldInverse);
        const Et = ft.map.cameraPosition;
        Et !== void 0 && Et.setValue(N, we.setFromMatrixPosition(x.matrixWorld)), be.logarithmicDepthBuffer && ft.setValue(
          N,
          "logDepthBufFC",
          2 / (Math.log(x.far + 1) / Math.LN2)
        ), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && ft.setValue(N, "isOrthographic", x.isOrthographicCamera === !0), S !== x && (S = x, Qn = !0, tr = !0);
      }
      if (z.isSkinnedMesh) {
        ft.setOptional(N, z, "bindMatrix"), ft.setOptional(N, z, "bindMatrixInverse");
        const Et = z.skeleton;
        Et && (be.floatVertexTextures ? (Et.boneTexture === null && Et.computeBoneTexture(), ft.setValue(N, "boneTexture", Et.boneTexture, Ce), ft.setValue(N, "boneTextureSize", Et.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const nr = O.morphAttributes;
      if ((nr.position !== void 0 || nr.normal !== void 0 || nr.color !== void 0 && be.isWebGL2 === !0) && A.update(z, O, un), (Qn || Ge.receiveShadow !== z.receiveShadow) && (Ge.receiveShadow = z.receiveShadow, ft.setValue(N, "receiveShadow", z.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (hn.envMap.value = Re, hn.flipEnvMap.value = Re.isCubeTexture && Re.isRenderTargetTexture === !1 ? -1 : 1), Qn && (ft.setValue(N, "toneMappingExposure", M.toneMappingExposure), Ge.needsLights && lo(hn, tr), he && B.fog === !0 && te.refreshFogUniforms(hn, he), te.refreshMaterialUniforms(hn, B, X, j, Te), Vi.upload(N, ts(Ge), hn, Ce)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (Vi.upload(N, ts(Ge), hn, Ce), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && ft.setValue(N, "center", z.center), ft.setValue(N, "modelViewMatrix", z.modelViewMatrix), ft.setValue(N, "normalMatrix", z.normalMatrix), ft.setValue(N, "modelMatrix", z.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const Et = B.uniformsGroups;
        for (let ir = 0, uo = Et.length; ir < uo; ir++)
          if (be.isWebGL2) {
            const rs = Et[ir];
            Me.update(rs, un), Me.bind(rs, un);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return un;
    }
    function lo(x, U) {
      x.ambientLightColor.needsUpdate = U, x.lightProbe.needsUpdate = U, x.directionalLights.needsUpdate = U, x.directionalLightShadows.needsUpdate = U, x.pointLights.needsUpdate = U, x.pointLightShadows.needsUpdate = U, x.spotLights.needsUpdate = U, x.spotLightShadows.needsUpdate = U, x.rectAreaLights.needsUpdate = U, x.hemisphereLights.needsUpdate = U;
    }
    function co(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return P;
    }, this.getRenderTarget = function() {
      return b;
    }, this.setRenderTargetTextures = function(x, U, O) {
      Le.get(x.texture).__webglTexture = U, Le.get(x.depthTexture).__webglTexture = O;
      const B = Le.get(x);
      B.__hasExternalTextures = !0, B.__hasExternalTextures && (B.__autoAllocateDepthBuffer = O === void 0, B.__autoAllocateDepthBuffer || xe.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(x, U) {
      const O = Le.get(x);
      O.__webglFramebuffer = U, O.__useDefaultFramebuffer = U === void 0;
    }, this.setRenderTarget = function(x, U = 0, O = 0) {
      b = x, R = U, P = O;
      let B = !0, z = null, he = !1, ge = !1;
      if (x) {
        const Re = Le.get(x);
        Re.__useDefaultFramebuffer !== void 0 ? (Ae.bindFramebuffer(N.FRAMEBUFFER, null), B = !1) : Re.__webglFramebuffer === void 0 ? Ce.setupRenderTarget(x) : Re.__hasExternalTextures && Ce.rebindTextures(x, Le.get(x.texture).__webglTexture, Le.get(x.depthTexture).__webglTexture);
        const Ne = x.texture;
        (Ne.isData3DTexture || Ne.isDataArrayTexture || Ne.isCompressedArrayTexture) && (ge = !0);
        const Pe = Le.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Pe[U]) ? z = Pe[U][O] : z = Pe[U], he = !0) : be.isWebGL2 && x.samples > 0 && Ce.useMultisampledRTT(x) === !1 ? z = Le.get(x).__webglMultisampledFramebuffer : Array.isArray(Pe) ? z = Pe[O] : z = Pe, T.copy(x.viewport), V.copy(x.scissor), J = x.scissorTest;
      } else
        T.copy(K).multiplyScalar(X).floor(), V.copy(D).multiplyScalar(X).floor(), J = k;
      if (Ae.bindFramebuffer(N.FRAMEBUFFER, z) && be.drawBuffers && B && Ae.drawBuffers(x, z), Ae.viewport(T), Ae.scissor(V), Ae.setScissorTest(J), he) {
        const Re = Le.get(x.texture);
        N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_CUBE_MAP_POSITIVE_X + U, Re.__webglTexture, O);
      } else if (ge) {
        const Re = Le.get(x.texture), Ne = U || 0;
        N.framebufferTextureLayer(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, Re.__webglTexture, O || 0, Ne);
      }
      W = -1;
    }, this.readRenderTargetPixels = function(x, U, O, B, z, he, ge) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ee = Le.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && ge !== void 0 && (Ee = Ee[ge]), Ee) {
        Ae.bindFramebuffer(N.FRAMEBUFFER, Ee);
        try {
          const Re = x.texture, Ne = Re.format, Pe = Re.type;
          if (Ne !== Nt && Se.convert(Ne) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const De = Pe === li && (xe.has("EXT_color_buffer_half_float") || be.isWebGL2 && xe.has("EXT_color_buffer_float"));
          if (Pe !== ln && Se.convert(Pe) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(Pe === rn && (be.isWebGL2 || xe.has("OES_texture_float") || xe.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !De) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= x.width - B && O >= 0 && O <= x.height - z && N.readPixels(U, O, B, z, Se.convert(Ne), Se.convert(Pe), he);
        } finally {
          const Re = b !== null ? Le.get(b).__webglFramebuffer : null;
          Ae.bindFramebuffer(N.FRAMEBUFFER, Re);
        }
      }
    }, this.copyFramebufferToTexture = function(x, U, O = 0) {
      const B = Math.pow(2, -O), z = Math.floor(U.image.width * B), he = Math.floor(U.image.height * B);
      Ce.setTexture2D(U, 0), N.copyTexSubImage2D(N.TEXTURE_2D, O, 0, 0, x.x, x.y, z, he), Ae.unbindTexture();
    }, this.copyTextureToTexture = function(x, U, O, B = 0) {
      const z = U.image.width, he = U.image.height, ge = Se.convert(O.format), Ee = Se.convert(O.type);
      Ce.setTexture2D(O, 0), N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, O.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, O.unpackAlignment), U.isDataTexture ? N.texSubImage2D(N.TEXTURE_2D, B, x.x, x.y, z, he, ge, Ee, U.image.data) : U.isCompressedTexture ? N.compressedTexSubImage2D(N.TEXTURE_2D, B, x.x, x.y, U.mipmaps[0].width, U.mipmaps[0].height, ge, U.mipmaps[0].data) : N.texSubImage2D(N.TEXTURE_2D, B, x.x, x.y, ge, Ee, U.image), B === 0 && O.generateMipmaps && N.generateMipmap(N.TEXTURE_2D), Ae.unbindTexture();
    }, this.copyTextureToTexture3D = function(x, U, O, B, z = 0) {
      if (M.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const he = x.max.x - x.min.x + 1, ge = x.max.y - x.min.y + 1, Ee = x.max.z - x.min.z + 1, Re = Se.convert(B.format), Ne = Se.convert(B.type);
      let Pe;
      if (B.isData3DTexture)
        Ce.setTexture3D(B, 0), Pe = N.TEXTURE_3D;
      else if (B.isDataArrayTexture)
        Ce.setTexture2DArray(B, 0), Pe = N.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, B.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, B.unpackAlignment);
      const De = N.getParameter(N.UNPACK_ROW_LENGTH), Ze = N.getParameter(N.UNPACK_IMAGE_HEIGHT), St = N.getParameter(N.UNPACK_SKIP_PIXELS), rt = N.getParameter(N.UNPACK_SKIP_ROWS), zt = N.getParameter(N.UNPACK_SKIP_IMAGES), Ke = O.isCompressedTexture ? O.mipmaps[0] : O.image;
      N.pixelStorei(N.UNPACK_ROW_LENGTH, Ke.width), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, Ke.height), N.pixelStorei(N.UNPACK_SKIP_PIXELS, x.min.x), N.pixelStorei(N.UNPACK_SKIP_ROWS, x.min.y), N.pixelStorei(N.UNPACK_SKIP_IMAGES, x.min.z), O.isDataTexture || O.isData3DTexture ? N.texSubImage3D(Pe, z, U.x, U.y, U.z, he, ge, Ee, Re, Ne, Ke.data) : O.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), N.compressedTexSubImage3D(Pe, z, U.x, U.y, U.z, he, ge, Ee, Re, Ke.data)) : N.texSubImage3D(Pe, z, U.x, U.y, U.z, he, ge, Ee, Re, Ne, Ke), N.pixelStorei(N.UNPACK_ROW_LENGTH, De), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, Ze), N.pixelStorei(N.UNPACK_SKIP_PIXELS, St), N.pixelStorei(N.UNPACK_SKIP_ROWS, rt), N.pixelStorei(N.UNPACK_SKIP_IMAGES, zt), z === 0 && B.generateMipmaps && N.generateMipmap(Pe), Ae.unbindTexture();
    }, this.initTexture = function(x) {
      x.isCubeTexture ? Ce.setTextureCube(x, 0) : x.isData3DTexture ? Ce.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? Ce.setTexture2DArray(x, 0) : Ce.setTexture2D(x, 0), Ae.unbindTexture();
    }, this.resetState = function() {
      R = 0, P = 0, b = null, Ae.reset(), _e.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Yt;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Kr ? "display-p3" : "srgb", t.unpackColorSpace = We.workingColorSpace === Zi ? "display-p3" : "srgb";
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === ot ? Sn : za;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Sn ? ot : jt;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class Mf extends ro {
}
Mf.prototype.isWebGL1Renderer = !0;
class Sf extends gt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
class so extends hi {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new ke(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const ba = /* @__PURE__ */ new at(), Xr = /* @__PURE__ */ new Zr(), Bi = /* @__PURE__ */ new $i(), zi = /* @__PURE__ */ new I();
class Ef extends gt {
  constructor(e = new Kt(), t = new so()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Bi.copy(n.boundingSphere), Bi.applyMatrix4(r), Bi.radius += s, e.ray.intersectsSphere(Bi) === !1) return;
    ba.copy(r).invert(), Xr.copy(e.ray).applyMatrix4(ba);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, f = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, o.start), m = Math.min(c.count, o.start + o.count);
      for (let g = d, v = m; g < v; g++) {
        const p = c.getX(g);
        zi.fromBufferAttribute(f, p), Aa(zi, p, l, r, e, t, this);
      }
    } else {
      const d = Math.max(0, o.start), m = Math.min(f.count, o.start + o.count);
      for (let g = d, v = m; g < v; g++)
        zi.fromBufferAttribute(f, g), Aa(zi, g, l, r, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function Aa(i, e, t, n, r, s, o) {
  const a = Xr.distanceSqToPoint(i);
  if (a < t) {
    const l = new I();
    Xr.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(a),
      point: l,
      index: e,
      face: null,
      object: o
    });
  }
}
class Tf extends Mt {
  constructor(e, t, n, r, s, o, a, l, c) {
    super(e, t, n, r, s, o, a, l, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class yf extends gt {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new ke(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class bf extends yf {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class qr {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(_t(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Yr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Yr);
const Ra = { type: "change" }, Ir = { type: "start" }, wa = { type: "end" }, Hi = new Zr(), Ca = new tn(), Af = Math.cos(70 * pl.DEG2RAD);
class Rf extends An {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new I(), this.cursor = new I(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Rn.ROTATE, MIDDLE: Rn.DOLLY, RIGHT: Rn.PAN }, this.touches = { ONE: wn.ROTATE, TWO: wn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(A) {
      A.addEventListener("keydown", _), this._domElementKeyEvents = A;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", _), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Ra), n.update(), s = r.NONE;
    }, this.update = function() {
      const A = new I(), re = new yn().setFromUnitVectors(e.up, new I(0, 1, 0)), Y = re.clone().invert(), Se = new I(), _e = new yn(), Me = new I(), pe = 2 * Math.PI;
      return function(ze = null) {
        const C = n.object.position;
        A.copy(C).sub(n.target), A.applyQuaternion(re), a.setFromVector3(A), n.autoRotate && s === r.NONE && V(S(ze)), n.enableDamping ? (a.theta += l.theta * n.dampingFactor, a.phi += l.phi * n.dampingFactor) : (a.theta += l.theta, a.phi += l.phi);
        let ae = n.minAzimuthAngle, $ = n.maxAzimuthAngle;
        isFinite(ae) && isFinite($) && (ae < -Math.PI ? ae += pe : ae > Math.PI && (ae -= pe), $ < -Math.PI ? $ += pe : $ > Math.PI && ($ -= pe), ae <= $ ? a.theta = Math.max(ae, Math.min($, a.theta)) : a.theta = a.theta > (ae + $) / 2 ? Math.max(ae, a.theta) : Math.min($, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(u, n.dampingFactor) : n.target.add(u), n.target.sub(n.cursor), n.target.clampLength(n.minTargetRadius, n.maxTargetRadius), n.target.add(n.cursor), n.zoomToCursor && P || n.object.isOrthographicCamera ? a.radius = q(a.radius) : a.radius = q(a.radius * c), A.setFromSpherical(a), A.applyQuaternion(Y), C.copy(n.target).add(A), n.object.lookAt(n.target), n.enableDamping === !0 ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, u.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), u.set(0, 0, 0));
        let G = !1;
        if (n.zoomToCursor && P) {
          let ie = null;
          if (n.object.isPerspectiveCamera) {
            const ve = A.length();
            ie = q(ve * c);
            const He = ve - ie;
            n.object.position.addScaledVector(w, He), n.object.updateMatrixWorld();
          } else if (n.object.isOrthographicCamera) {
            const ve = new I(R.x, R.y, 0);
            ve.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / c)), n.object.updateProjectionMatrix(), G = !0;
            const He = new I(R.x, R.y, 0);
            He.unproject(n.object), n.object.position.sub(He).add(ve), n.object.updateMatrixWorld(), ie = A.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1;
          ie !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(ie).add(n.object.position) : (Hi.origin.copy(n.object.position), Hi.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(Hi.direction)) < Af ? e.lookAt(n.target) : (Ca.setFromNormalAndCoplanarPoint(n.object.up, n.target), Hi.intersectPlane(Ca, n.target))));
        } else n.object.isOrthographicCamera && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / c)), n.object.updateProjectionMatrix(), G = !0);
        return c = 1, P = !1, G || Se.distanceToSquared(n.object.position) > o || 8 * (1 - _e.dot(n.object.quaternion)) > o || Me.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(Ra), Se.copy(n.object.position), _e.copy(n.object.quaternion), Me.copy(n.target), G = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", Z), n.domElement.removeEventListener("pointerdown", Le), n.domElement.removeEventListener("pointercancel", Ve), n.domElement.removeEventListener("wheel", E), n.domElement.removeEventListener("pointermove", Ce), n.domElement.removeEventListener("pointerup", Ve), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", _), n._domElementKeyEvents = null);
    };
    const n = this, r = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = r.NONE;
    const o = 1e-6, a = new qr(), l = new qr();
    let c = 1;
    const u = new I(), f = new Oe(), d = new Oe(), m = new Oe(), g = new Oe(), v = new Oe(), p = new Oe(), h = new Oe(), y = new Oe(), M = new Oe(), w = new I(), R = new Oe();
    let P = !1;
    const b = [], W = {};
    function S(A) {
      return A !== null ? 2 * Math.PI / 60 * n.autoRotateSpeed * A : 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function T() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function V(A) {
      l.theta -= A;
    }
    function J(A) {
      l.phi -= A;
    }
    const Q = function() {
      const A = new I();
      return function(Y, Se) {
        A.setFromMatrixColumn(Se, 0), A.multiplyScalar(-Y), u.add(A);
      };
    }(), L = function() {
      const A = new I();
      return function(Y, Se) {
        n.screenSpacePanning === !0 ? A.setFromMatrixColumn(Se, 1) : (A.setFromMatrixColumn(Se, 0), A.crossVectors(n.object.up, A)), A.multiplyScalar(Y), u.add(A);
      };
    }(), H = function() {
      const A = new I();
      return function(Y, Se) {
        const _e = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const Me = n.object.position;
          A.copy(Me).sub(n.target);
          let pe = A.length();
          pe *= Math.tan(n.object.fov / 2 * Math.PI / 180), Q(2 * Y * pe / _e.clientHeight, n.object.matrix), L(2 * Se * pe / _e.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (Q(Y * (n.object.right - n.object.left) / n.object.zoom / _e.clientWidth, n.object.matrix), L(Se * (n.object.top - n.object.bottom) / n.object.zoom / _e.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function j(A) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? c /= A : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function X(A) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? c *= A : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function ee(A) {
      if (!n.zoomToCursor)
        return;
      P = !0;
      const re = n.domElement.getBoundingClientRect(), Y = A.clientX - re.left, Se = A.clientY - re.top, _e = re.width, Me = re.height;
      R.x = Y / _e * 2 - 1, R.y = -(Se / Me) * 2 + 1, w.set(R.x, R.y, 1).unproject(n.object).sub(n.object.position).normalize();
    }
    function q(A) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, A));
    }
    function K(A) {
      f.set(A.clientX, A.clientY);
    }
    function D(A) {
      ee(A), h.set(A.clientX, A.clientY);
    }
    function k(A) {
      g.set(A.clientX, A.clientY);
    }
    function ce(A) {
      d.set(A.clientX, A.clientY), m.subVectors(d, f).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      V(2 * Math.PI * m.x / re.clientHeight), J(2 * Math.PI * m.y / re.clientHeight), f.copy(d), n.update();
    }
    function ue(A) {
      y.set(A.clientX, A.clientY), M.subVectors(y, h), M.y > 0 ? j(T()) : M.y < 0 && X(T()), h.copy(y), n.update();
    }
    function fe(A) {
      v.set(A.clientX, A.clientY), p.subVectors(v, g).multiplyScalar(n.panSpeed), H(p.x, p.y), g.copy(v), n.update();
    }
    function Te(A) {
      ee(A), A.deltaY < 0 ? X(T()) : A.deltaY > 0 && j(T()), n.update();
    }
    function Be(A) {
      let re = !1;
      switch (A.code) {
        case n.keys.UP:
          A.ctrlKey || A.metaKey || A.shiftKey ? J(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : H(0, n.keyPanSpeed), re = !0;
          break;
        case n.keys.BOTTOM:
          A.ctrlKey || A.metaKey || A.shiftKey ? J(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : H(0, -n.keyPanSpeed), re = !0;
          break;
        case n.keys.LEFT:
          A.ctrlKey || A.metaKey || A.shiftKey ? V(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : H(n.keyPanSpeed, 0), re = !0;
          break;
        case n.keys.RIGHT:
          A.ctrlKey || A.metaKey || A.shiftKey ? V(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : H(-n.keyPanSpeed, 0), re = !0;
          break;
      }
      re && (A.preventDefault(), n.update());
    }
    function ye() {
      if (b.length === 1)
        f.set(b[0].pageX, b[0].pageY);
      else {
        const A = 0.5 * (b[0].pageX + b[1].pageX), re = 0.5 * (b[0].pageY + b[1].pageY);
        f.set(A, re);
      }
    }
    function we() {
      if (b.length === 1)
        g.set(b[0].pageX, b[0].pageY);
      else {
        const A = 0.5 * (b[0].pageX + b[1].pageX), re = 0.5 * (b[0].pageY + b[1].pageY);
        g.set(A, re);
      }
    }
    function qe() {
      const A = b[0].pageX - b[1].pageX, re = b[0].pageY - b[1].pageY, Y = Math.sqrt(A * A + re * re);
      h.set(0, Y);
    }
    function Ue() {
      n.enableZoom && qe(), n.enablePan && we();
    }
    function N() {
      n.enableZoom && qe(), n.enableRotate && ye();
    }
    function ct(A) {
      if (b.length == 1)
        d.set(A.pageX, A.pageY);
      else {
        const Y = le(A), Se = 0.5 * (A.pageX + Y.x), _e = 0.5 * (A.pageY + Y.y);
        d.set(Se, _e);
      }
      m.subVectors(d, f).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      V(2 * Math.PI * m.x / re.clientHeight), J(2 * Math.PI * m.y / re.clientHeight), f.copy(d);
    }
    function xe(A) {
      if (b.length === 1)
        v.set(A.pageX, A.pageY);
      else {
        const re = le(A), Y = 0.5 * (A.pageX + re.x), Se = 0.5 * (A.pageY + re.y);
        v.set(Y, Se);
      }
      p.subVectors(v, g).multiplyScalar(n.panSpeed), H(p.x, p.y), g.copy(v);
    }
    function be(A) {
      const re = le(A), Y = A.pageX - re.x, Se = A.pageY - re.y, _e = Math.sqrt(Y * Y + Se * Se);
      y.set(0, _e), M.set(0, Math.pow(y.y / h.y, n.zoomSpeed)), j(M.y), h.copy(y);
    }
    function Ae(A) {
      n.enableZoom && be(A), n.enablePan && xe(A);
    }
    function je(A) {
      n.enableZoom && be(A), n.enableRotate && ct(A);
    }
    function Le(A) {
      n.enabled !== !1 && (b.length === 0 && (n.domElement.setPointerCapture(A.pointerId), n.domElement.addEventListener("pointermove", Ce), n.domElement.addEventListener("pointerup", Ve)), ne(A), A.pointerType === "touch" ? F(A) : $e(A));
    }
    function Ce(A) {
      n.enabled !== !1 && (A.pointerType === "touch" ? te(A) : it(A));
    }
    function Ve(A) {
      me(A), b.length === 0 && (n.domElement.releasePointerCapture(A.pointerId), n.domElement.removeEventListener("pointermove", Ce), n.domElement.removeEventListener("pointerup", Ve)), n.dispatchEvent(wa), s = r.NONE;
    }
    function $e(A) {
      let re;
      switch (A.button) {
        case 0:
          re = n.mouseButtons.LEFT;
          break;
        case 1:
          re = n.mouseButtons.MIDDLE;
          break;
        case 2:
          re = n.mouseButtons.RIGHT;
          break;
        default:
          re = -1;
      }
      switch (re) {
        case Rn.DOLLY:
          if (n.enableZoom === !1) return;
          D(A), s = r.DOLLY;
          break;
        case Rn.ROTATE:
          if (A.ctrlKey || A.metaKey || A.shiftKey) {
            if (n.enablePan === !1) return;
            k(A), s = r.PAN;
          } else {
            if (n.enableRotate === !1) return;
            K(A), s = r.ROTATE;
          }
          break;
        case Rn.PAN:
          if (A.ctrlKey || A.metaKey || A.shiftKey) {
            if (n.enableRotate === !1) return;
            K(A), s = r.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            k(A), s = r.PAN;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Ir);
    }
    function it(A) {
      switch (s) {
        case r.ROTATE:
          if (n.enableRotate === !1) return;
          ce(A);
          break;
        case r.DOLLY:
          if (n.enableZoom === !1) return;
          ue(A);
          break;
        case r.PAN:
          if (n.enablePan === !1) return;
          fe(A);
          break;
      }
    }
    function E(A) {
      n.enabled === !1 || n.enableZoom === !1 || s !== r.NONE || (A.preventDefault(), n.dispatchEvent(Ir), Te(A), n.dispatchEvent(wa));
    }
    function _(A) {
      n.enabled === !1 || n.enablePan === !1 || Be(A);
    }
    function F(A) {
      switch (se(A), b.length) {
        case 1:
          switch (n.touches.ONE) {
            case wn.ROTATE:
              if (n.enableRotate === !1) return;
              ye(), s = r.TOUCH_ROTATE;
              break;
            case wn.PAN:
              if (n.enablePan === !1) return;
              we(), s = r.TOUCH_PAN;
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case wn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              Ue(), s = r.TOUCH_DOLLY_PAN;
              break;
            case wn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              N(), s = r.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Ir);
    }
    function te(A) {
      switch (se(A), s) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          ct(A), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === !1) return;
          xe(A), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Ae(A), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          je(A), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function Z(A) {
      n.enabled !== !1 && A.preventDefault();
    }
    function ne(A) {
      b.push(A);
    }
    function me(A) {
      delete W[A.pointerId];
      for (let re = 0; re < b.length; re++)
        if (b[re].pointerId == A.pointerId) {
          b.splice(re, 1);
          return;
        }
    }
    function se(A) {
      let re = W[A.pointerId];
      re === void 0 && (re = new Oe(), W[A.pointerId] = re), re.set(A.pageX, A.pageY);
    }
    function le(A) {
      const re = A.pointerId === b[0].pointerId ? b[1] : b[0];
      return W[re.pointerId];
    }
    n.domElement.addEventListener("contextmenu", Z), n.domElement.addEventListener("pointerdown", Le), n.domElement.addEventListener("pointercancel", Ve), n.domElement.addEventListener("wheel", E, { passive: !1 }), this.update();
  }
}
class wf {
  constructor(e = {
    particleSize: 0.1,
    particleColor: "#372CD5",
    backgroundColor: "#ffffff",
    autoRotate: !0,
    rotationSpeed: 0.1,
    url: "https://gmxkwskcrqq1xoty.public.blob.vercel-storage.com/particle-cloud-turbine-344000pts.json"
  }) {
    this.scene = new Sf(), this.camera = new wt(75, window.innerWidth / window.innerHeight, 0.1, 8e3), this.renderer = new ro({ antialias: !0, preserveDrawingBuffer: !0 }), this.controls = null, this.particles = null, this.pointCloudData = null, this.particleTexture = this.createParticleTexture(), new URLSearchParams(window.location.search), this.settings = {
      particleSize: e.particleSize,
      particleColor: e.particleColor,
      backgroundColor: e.backgroundColor
    }, this.jsonUrl = e.url, console.log("Point Cloud Viewer Configuration:", {
      jsonUrl: this.jsonUrl,
      particleColor: this.settings.particleColor,
      backgroundColor: this.settings.backgroundColor
    }), this.init();
  }
  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.setClearColor(new ke(this.settings.backgroundColor)), document.getElementById("point-cloud-container").appendChild(this.renderer.domElement), this.camera.position.set(5, 5, 5), this.camera.lookAt(0, 0, 0), this.setupControls();
    const t = new bf(4210752, 0.1);
    this.scene.add(t), this.setupEventListeners(), this.loadJSONPointCloudFromURL(), this.animate();
  }
  setupControls() {
    this.controls = new Rf(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = 0.05, this.controls.autoRotate = !0, this.controls.rotationSpeed = 0.1, this.controls.screenSpacePanning = !0, this.controls.enableZoom = !1, this.controls.update();
  }
  setupEventListeners() {
    window.addEventListener("resize", this.onWindowResize.bind(this), !1);
  }
  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  createParticleTexture() {
    const e = document.createElement("canvas");
    e.width = 64, e.height = 64;
    const t = e.getContext("2d");
    return t.beginPath(), t.arc(32, 32, 32, 0, 2 * Math.PI, !1), t.fillStyle = "white", t.fill(), new Tf(e);
  }
  async loadJSONPointCloudFromURL() {
    const e = document.getElementById("error");
    try {
      e.style.display = "none";
      const t = await fetch(this.jsonUrl);
      if (!t.ok)
        throw new Error(`HTTP error! status: ${t.status}`);
      const n = await t.json();
      this.processPointCloud(n);
    } catch (t) {
      console.error("Error loading point cloud:", t), e.style.display = "block", setTimeout(() => {
        e.style.display = "none";
      }, 5e3);
    }
  }
  processPointCloud(e) {
    if (this.particles && this.scene.remove(this.particles), this.pointCloudData = e, this.particles = this.loadPointCloudFromJSON(e), this.particles)
      this.scene.add(this.particles), this.fitCameraToPointCloud();
    else
      throw new Error("Could not create point cloud from data");
  }
  loadPointCloudFromJSON(e) {
    const t = typeof e == "string" ? JSON.parse(e) : e;
    if (!t.particles || !t.metadata)
      return console.error("Invalid JSON format: missing particles or metadata"), null;
    const n = t.particles, r = t.metadata.quantizationFactor || 1, s = t.metadata.originalModelSize || 1, o = new Float32Array(n.length * 3);
    n.forEach((u, f) => {
      o[f * 3] = u[0] / r, o[f * 3 + 1] = u[1] / r, o[f * 3 + 2] = u[2] / r;
    });
    const a = new Kt();
    a.setAttribute("position", new Ft(o, 3));
    const l = this.settings.particleSize * (s / 100), c = new so({
      color: new ke(this.settings.particleColor),
      size: l,
      sizeAttenuation: !0,
      transparent: !0,
      opacity: 0.8,
      map: this.particleTexture,
      alphaTest: 0.5
    });
    return new Ef(a, c);
  }
  fitCameraToPointCloud() {
    if (!this.particles) return;
    if (this.pointCloudData && this.pointCloudData.metadata && this.pointCloudData.metadata.camera) {
      const c = this.pointCloudData.metadata.camera;
      c.fov && (this.camera.fov = c.fov), c.near && (this.camera.near = c.near), c.far && (this.camera.far = c.far), this.camera.updateProjectionMatrix();
      const u = new I(
        c.target.x,
        c.target.y,
        c.target.z
      ), f = new qr(
        c.distance,
        c.spherical.phi,
        c.spherical.theta
      ), d = new I();
      d.setFromSpherical(f), d.add(u), this.camera.position.copy(d), this.camera.lookAt(u), this.controls && (this.controls.target.copy(u), this.controls.update());
      return;
    }
    this.particles.geometry.computeBoundingBox();
    const e = this.particles.geometry.boundingBox, t = e.getSize(new I()), n = e.getCenter(new I()), s = Math.max(t.x, t.y, t.z) / (2 * Math.atan(Math.PI * this.camera.fov / 360)), o = s / this.camera.aspect, a = 1.2 * Math.max(s, o), l = new I(1, 1, 1).normalize().multiplyScalar(a);
    this.camera.position.copy(n).add(l), this.controls && (this.controls.target.copy(n), this.controls.update());
  }
  animate() {
    requestAnimationFrame(() => this.animate()), this.controls && this.controls.update(), this.renderer.render(this.scene, this.camera);
  }
  // Public method to update settings
  updateSettings(e) {
    if (Object.assign(this.settings, e), e.backgroundColor && this.renderer && this.renderer.setClearColor(new ke(e.backgroundColor)), e.particleColor && this.particles && this.particles.material.color.set(e.particleColor), e.particleSize && this.particles && this.pointCloudData) {
      const t = this.pointCloudData.metadata.originalModelSize || 1, n = e.particleSize * (t / 100);
      this.particles.material.size = n;
    }
  }
  // Public method to load new JSON data
  async loadNewData(e) {
    this.jsonUrl = e, await this.loadJSONPointCloudFromURL();
  }
  // Cleanup method for proper disposal
  destroy() {
    this.animationId && (cancelAnimationFrame(this.animationId), this.animationId = null), this.particles && (this.particles.geometry.dispose(), this.particles.material.dispose(), this.scene.remove(this.particles)), this.particleTexture && this.particleTexture.dispose(), this.renderer && (this.renderer.dispose(), this.container && this.renderer.domElement.parentNode === this.container && this.container.removeChild(this.renderer.domElement)), this.resizeObserver && this.resizeObserver.disconnect(), this.container && (this.container.innerHTML = ""), console.log("JSONPointCloudViewer destroyed");
  }
}
export {
  wf as default
};
