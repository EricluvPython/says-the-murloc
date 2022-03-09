/* King Mrgl-Mrgl sends his regards! */

!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
            return e.default;
          }
          : function () {
            return e;
          };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (e, t, n) {
    var r, i, o;
    (o = function () {
      var e = "retain",
        t = document,
        n = {}.hasOwnProperty;
      function r() {
        return (
          function (e, t, n, o, a) {
            if (t && !t.nodeType && arguments.length <= 2) return !1;
            var s = "function" == typeof n;
            s &&
              ((u = n),
                (n = function (e, t) {
                  return u(e.text, t.startIndex);
                }));
            var u;
            var l = i(t, {
              find: e,
              wrap: s ? null : n,
              replace: s ? n : "$" + (o || "&"),
              prepMatch: function (e, t) {
                if (!e[0])
                  throw "findAndReplaceDOMText cannot handle zero-length matches";
                if (o > 0) {
                  var n = e[o];
                  (e.index += e[0].indexOf(n)), (e[0] = n);
                }
                return (
                  (e.endIndex = e.index + e[0].length),
                  (e.startIndex = e.index),
                  (e.index = t),
                  e
                );
              },
              filterElements: a,
            });
            return (
              (r.revert = function () {
                return l.revert();
              }),
              !0
            );
          }.apply(null, arguments) || i.apply(null, arguments)
        );
      }
      function i(e, t) {
        return new o(e, t);
      }
      function o(t, i) {
        var o = i.preset && r.PRESETS[i.preset];
        if (((i.portionMode = i.portionMode || e), o))
          for (var a in o) n.call(o, a) && !n.call(i, a) && (i[a] = o[a]);
        (this.node = t),
          (this.options = i),
          (this.prepMatch = i.prepMatch || this.prepMatch),
          (this.reverts = []),
          (this.matches = this.search()),
          this.matches.length && this.processMatches();
      }
      return (
        (r.NON_PROSE_ELEMENTS = {
          br: 1,
          hr: 1,
          script: 1,
          style: 1,
          img: 1,
          video: 1,
          audio: 1,
          canvas: 1,
          svg: 1,
          map: 1,
          object: 1,
          input: 1,
          textarea: 1,
          select: 1,
          option: 1,
          optgroup: 1,
          button: 1,
        }),
        (r.NON_CONTIGUOUS_PROSE_ELEMENTS = {
          address: 1,
          article: 1,
          aside: 1,
          blockquote: 1,
          dd: 1,
          div: 1,
          dl: 1,
          fieldset: 1,
          figcaption: 1,
          figure: 1,
          footer: 1,
          form: 1,
          h1: 1,
          h2: 1,
          h3: 1,
          h4: 1,
          h5: 1,
          h6: 1,
          header: 1,
          hgroup: 1,
          hr: 1,
          main: 1,
          nav: 1,
          noscript: 1,
          ol: 1,
          output: 1,
          p: 1,
          pre: 1,
          section: 1,
          ul: 1,
          br: 1,
          li: 1,
          summary: 1,
          dt: 1,
          details: 1,
          rp: 1,
          rt: 1,
          rtc: 1,
          script: 1,
          style: 1,
          img: 1,
          video: 1,
          audio: 1,
          canvas: 1,
          svg: 1,
          map: 1,
          object: 1,
          input: 1,
          textarea: 1,
          select: 1,
          option: 1,
          optgroup: 1,
          button: 1,
          table: 1,
          tbody: 1,
          thead: 1,
          th: 1,
          tr: 1,
          td: 1,
          caption: 1,
          col: 1,
          tfoot: 1,
          colgroup: 1,
        }),
        (r.NON_INLINE_PROSE = function (e) {
          return n.call(
            r.NON_CONTIGUOUS_PROSE_ELEMENTS,
            e.nodeName.toLowerCase()
          );
        }),
        (r.PRESETS = {
          prose: {
            forceContext: r.NON_INLINE_PROSE,
            filterElements: function (e) {
              return !n.call(r.NON_PROSE_ELEMENTS, e.nodeName.toLowerCase());
            },
          },
        }),
        (r.Finder = o),
        (o.prototype = {
          search: function () {
            var e,
              t = 0,
              n = 0,
              r = this.options.find,
              i = this.getAggregateText(),
              o = [],
              a = this;
            return (
              (r =
                "string" == typeof r
                  ? RegExp(
                    String(r).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"),
                    "g"
                  )
                  : r),
              (function i(s) {
                for (var u = 0, l = s.length; u < l; ++u) {
                  var d = s[u];
                  if ("string" == typeof d) {
                    if (r.global)
                      for (; (e = r.exec(d));) o.push(a.prepMatch(e, t++, n));
                    else (e = d.match(r)) && o.push(a.prepMatch(e, 0, n));
                    n += d.length;
                  } else i(d);
                }
              })(i),
              o
            );
          },
          prepMatch: function (e, t, n) {
            if (!e[0])
              throw new Error(
                "findAndReplaceDOMText cannot handle zero-length matches"
              );
            return (
              (e.endIndex = n + e.index + e[0].length),
              (e.startIndex = n + e.index),
              (e.index = t),
              e
            );
          },
          getAggregateText: function () {
            var e = this.options.filterElements,
              t = this.options.forceContext;
            return (function n(r) {
              if (!r) return [];
              if (r.nodeType === Node.TEXT_NODE) return [r.data];
              if (e && !e(r)) return [];
              var i = [""];
              var o = 0;
              if ((r = r.firstChild))
                do {
                  if (r.nodeType !== Node.TEXT_NODE) {
                    var a = n(r);
                    t && r.nodeType === Node.ELEMENT_NODE && (!0 === t || t(r))
                      ? ((i[++o] = a), (i[++o] = ""))
                      : ("string" == typeof a[0] && (i[o] += a.shift()),
                        a.length && ((i[++o] = a), (i[++o] = "")));
                  } else i[o] += r.data;
                } while ((r = r.nextSibling));
              return i;
            })(this.node);
          },
          processMatches: function () {
            var e,
              t,
              n,
              r = this.matches,
              i = this.node,
              o = this.options.filterElements,
              a = [],
              s = i,
              u = r.shift(),
              l = 0,
              d = 0,
              c = [i];
            e: for (; ;) {
              if (
                (s.nodeType === Node.TEXT_NODE &&
                  (!t && s.length + l >= u.endIndex
                    ? (t = {
                      node: s,
                      index: d++,
                      text: s.data.substring(
                        u.startIndex - l,
                        u.endIndex - l
                      ),
                      indexInMatch: 0 === l ? 0 : l - u.startIndex,
                      indexInNode: u.startIndex - l,
                      endIndexInNode: u.endIndex - l,
                      isEnd: !0,
                    })
                    : e &&
                    a.push({
                      node: s,
                      index: d++,
                      text: s.data,
                      indexInMatch: l - u.startIndex,
                      indexInNode: 0,
                    }),
                    !e &&
                    s.length + l > u.startIndex &&
                    (e = {
                      node: s,
                      index: d++,
                      indexInMatch: 0,
                      indexInNode: u.startIndex - l,
                      endIndexInNode: u.endIndex - l,
                      text: s.data.substring(u.startIndex - l, u.endIndex - l),
                    }),
                    (l += s.data.length)),
                  (n = s.nodeType === Node.ELEMENT_NODE && o && !o(s)),
                  e && t)
              ) {
                if (
                  ((s = this.replaceMatch(u, e, a, t)),
                    (l -= t.node.data.length - t.endIndexInNode),
                    (e = null),
                    (t = null),
                    (a = []),
                    (d = 0),
                    0,
                    !(u = r.shift()))
                )
                  break;
              } else if (!n && (s.firstChild || s.nextSibling)) {
                s.firstChild
                  ? (c.push(s), (s = s.firstChild))
                  : (s = s.nextSibling);
                continue;
              }
              for (; ;) {
                if (s.nextSibling) {
                  s = s.nextSibling;
                  break;
                }
                if ((s = c.pop()) === i) break e;
              }
            }
          },
          revert: function () {
            for (var e = this.reverts.length; e--;) this.reverts[e]();
            this.reverts = [];
          },
          prepareReplacementString: function (e, t, n) {
            var r = this.options.portionMode;
            return "first" === r && t.indexInMatch > 0
              ? ""
              : ((e = e.replace(/\$(\d+|&|`|')/g, function (e, t) {
                var r;
                switch (t) {
                  case "&":
                    r = n[0];
                    break;
                  case "`":
                    r = n.input.substring(0, n.startIndex);
                    break;
                  case "'":
                    r = n.input.substring(n.endIndex);
                    break;
                  default:
                    r = n[+t] || "";
                }
                return r;
              })),
                "first" === r
                  ? e
                  : t.isEnd
                    ? e.substring(t.indexInMatch)
                    : e.substring(
                      t.indexInMatch,
                      t.indexInMatch + t.text.length
                    ));
          },
          getPortionReplacementNode: function (e, n) {
            var r = this.options.replace || "$&",
              i = this.options.wrap,
              o = this.options.wrapClass;
            if (i && i.nodeType) {
              var a = t.createElement("div");
              (a.innerHTML =
                i.outerHTML || new XMLSerializer().serializeToString(i)),
                (i = a.firstChild);
            }
            if ("function" == typeof r)
              return (r = r(e, n)) && r.nodeType
                ? r
                : t.createTextNode(String(r));
            var s = "string" == typeof i ? t.createElement(i) : i;
            return (
              s && o && (s.className = o),
              (r = t.createTextNode(this.prepareReplacementString(r, e, n)))
                .data && s
                ? (s.appendChild(r), s)
                : r
            );
          },
          replaceMatch: function (e, n, r, i) {
            var o,
              a,
              s = n.node,
              u = i.node;
            if (s === u) {
              var l = s;
              n.indexInNode > 0 &&
                ((o = t.createTextNode(l.data.substring(0, n.indexInNode))),
                  l.parentNode.insertBefore(o, l));
              var d = this.getPortionReplacementNode(i, e);
              return (
                l.parentNode.insertBefore(d, l),
                i.endIndexInNode < l.length &&
                ((a = t.createTextNode(l.data.substring(i.endIndexInNode))),
                  l.parentNode.insertBefore(a, l)),
                l.parentNode.removeChild(l),
                this.reverts.push(function () {
                  o === d.previousSibling && o.parentNode.removeChild(o),
                    a === d.nextSibling && a.parentNode.removeChild(a),
                    d.parentNode.replaceChild(l, d);
                }),
                d
              );
            }
            (o = t.createTextNode(s.data.substring(0, n.indexInNode))),
              (a = t.createTextNode(u.data.substring(i.endIndexInNode)));
            for (
              var c = this.getPortionReplacementNode(n, e),
              f = [],
              h = 0,
              g = r.length;
              h < g;
              ++h
            ) {
              var m = r[h],
                p = this.getPortionReplacementNode(m, e);
              m.node.parentNode.replaceChild(p, m.node),
                this.reverts.push(
                  (function (e, t) {
                    return function () {
                      t.parentNode.replaceChild(e.node, t);
                    };
                  })(m, p)
                ),
                f.push(p);
            }
            var x = this.getPortionReplacementNode(i, e);
            return (
              s.parentNode.insertBefore(o, s),
              s.parentNode.insertBefore(c, s),
              s.parentNode.removeChild(s),
              u.parentNode.insertBefore(x, u),
              u.parentNode.insertBefore(a, u),
              u.parentNode.removeChild(u),
              this.reverts.push(function () {
                o.parentNode.removeChild(o),
                  c.parentNode.replaceChild(s, c),
                  a.parentNode.removeChild(a),
                  x.parentNode.replaceChild(u, x);
              }),
              x
            );
          },
        }),
        r
      );
    }),
      e.exports
        ? (e.exports = o())
        : void 0 ===
        (i = "function" == typeof (r = o) ? r.call(t, n, t, e) : r) ||
        (e.exports = i);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      i = n.n(r);
    function o(e) {
      return 0 | e.next();
    }
    function a(e, t) {
      return 0 === t ? e : (n) => e(n) + t;
    }
    function s(e) {
      const t = 0 | e.next();
      return (
        4294967296 * (2097151 & t) +
        (e.next() >>> 0) +
        (2097152 & t ? -9007199254740992 : 0)
      );
    }
    function u(e) {
      for (; ;) {
        const t = 0 | e.next();
        if (!(4194304 & t)) {
          return (
            4294967296 * (2097151 & t) +
            (e.next() >>> 0) +
            (2097152 & t ? -9007199254740992 : 0)
          );
        }
        if (4194304 == (8388607 & t) && 0 == (0 | e.next()))
          return 9007199254740992;
      }
    }
    function l(e) {
      return e.next() >>> 0;
    }
    function d(e) {
      return 4294967296 * (2097151 & e.next()) + (e.next() >>> 0);
    }
    function c(e) {
      for (; ;) {
        const t = 0 | e.next();
        if (!(2097152 & t)) {
          return 4294967296 * (2097151 & t) + (e.next() >>> 0);
        }
        if (2097152 == (4194303 & t) && 0 == (0 | e.next()))
          return 9007199254740992;
      }
    }
    function f(e) {
      return 0 == ((e + 1) & e);
    }
    function h(e) {
      return f(e)
        ? ((t = e), (e) => e.next() & t)
        : (function (e) {
          const t = e + 1,
            n = t * Math.floor(4294967296 / t);
          return (e) => {
            let r = 0;
            do {
              r = e.next() >>> 0;
            } while (r >= n);
            return r % t;
          };
        })(e);
      var t;
    }
    function g(e) {
      const t = e + 1;
      if (0 == (0 | t)) {
        const e = ((t / 4294967296) | 0) - 1;
        if (f(e))
          return (n = e), (e) => 4294967296 * (e.next() & n) + (e.next() >>> 0);
      }
      var n;
      return (function (e) {
        const t = e * Math.floor(9007199254740992 / e);
        return (n) => {
          let r = 0;
          do {
            r = 4294967296 * (2097151 & n.next()) + (n.next() >>> 0);
          } while (r >= t);
          return r % e;
        };
      })(t);
    }
    function m(e, t) {
      return (n) => {
        let r = 0;
        do {
          const e = 0 | n.next();
          r =
            4294967296 * (2097151 & e) +
            (n.next() >>> 0) +
            (2097152 & e ? -9007199254740992 : 0);
        } while (r < e || r > t);
        return r;
      };
    }
    function p(e, t) {
      if (
        ((e = Math.floor(e)),
          (t = Math.floor(t)),
          e < -9007199254740992 || !isFinite(e))
      )
        throw new RangeError("Expected min to be at least -9007199254740992");
      if (t > 9007199254740992 || !isFinite(t))
        throw new RangeError("Expected max to be at most 9007199254740992");
      const n = t - e;
      return n <= 0 || !isFinite(n)
        ? () => e
        : 4294967295 === n
          ? 0 === e
            ? l
            : a(o, e + 2147483648)
          : n < 4294967295
            ? a(h(n), e)
            : 9007199254740991 === n
              ? a(d, e)
              : n < 9007199254740991
                ? a(g(n), e)
                : t - 1 - e == 9007199254740991
                  ? a(c, e)
                  : -9007199254740992 === e && 9007199254740992 === t
                    ? u
                    : -9007199254740992 === e && 9007199254740991 === t
                      ? s
                      : -9007199254740991 === e && 9007199254740992 === t
                        ? a(s, 1)
                        : 9007199254740992 === t
                          ? a(m(e - 1, t - 1), 1)
                          : m(e, t);
    }
    function x(e) {
      return 1 == (1 & e.next());
    }
    function N(e, t) {
      return (n) => e(n) < t;
    }
    function v(e, t) {
      return null == t
        ? null == e
          ? x
          : (function (e) {
            if (e <= 0) return () => !1;
            if (e >= 1) return () => !0;
            {
              const t = 4294967296 * e;
              return t % 1 == 0
                ? N(o, (t - 2147483648) | 0)
                : N(d, Math.round(9007199254740992 * e));
            }
          })(e)
        : e <= 0
          ? () => !1
          : e >= t
            ? () => !0
            : N(p(0, t - 1), e);
    }
    function b(e) {
      return p(1, e);
    }
    const E =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
    function y(e = E) {
      const t = e.length;
      if (!t) throw new Error("Expected pool not to be an empty string");
      const n = p(0, t - 1);
      return (t, r) => {
        let i = "";
        for (let o = 0; o < r; ++o) {
          const r = n(t);
          i += e.charAt(r);
        }
        return i;
      };
    }
    const I = y("0123456789abcdef"),
      M = y("0123456789abcdef".toUpperCase());
    function w(e, t) {
      return e < 0 ? Math.max(e + t, 0) : Math.min(e, t);
    }
    function T(e) {
      const t = +e;
      return t < 0 ? Math.ceil(t) : Math.floor(t);
    }
    function S(e) {
      return d(e) / 9007199254740992;
    }
    function k(e) {
      return c(e) / 9007199254740992;
    }
    const C = Array.prototype.slice;
    function O(e, t, n = 0) {
      const r = t.length;
      if (r)
        for (let i = (r - 1) >>> 0; i > n; --i) {
          const n = p(0, i)(e);
          if (i !== n) {
            const e = t[i];
            (t[i] = t[n]), (t[n] = e);
          }
        }
      return t;
    }
    const R = (() => {
      try {
        if ("xxx" === "x".repeat(3)) return (e, t) => e.repeat(t);
      } catch (e) { }
      return (e, t) => {
        let n = "";
        for (; t > 0;) 1 & t && (n += e), (t >>= 1), (e += e);
        return n;
      };
    })();
    function _(e, t) {
      return R("0", t - e.length) + e;
    }
    const P = { next: () => (4294967296 * Math.random()) | 0 };
    class A {
      constructor(e = P) {
        this.engine = e;
      }
      int32() {
        return o(this.engine);
      }
      uint32() {
        return l(this.engine);
      }
      uint53() {
        return d(this.engine);
      }
      uint53Full() {
        return c(this.engine);
      }
      int53() {
        return s(this.engine);
      }
      int53Full() {
        return u(this.engine);
      }
      integer(e, t) {
        return p(e, t)(this.engine);
      }
      realZeroToOneInclusive() {
        return k(this.engine);
      }
      realZeroToOneExclusive() {
        return S(this.engine);
      }
      real(e, t, n = !1) {
        return (function (e, t, n = !1) {
          if (!isFinite(e))
            throw new RangeError("Expected min to be a finite number");
          if (!isFinite(t))
            throw new RangeError("Expected max to be a finite number");
          return a(
            ((r = n ? k : S),
              1 == (i = t - e) ? r : 0 === i ? () => 0 : (e) => r(e) * i),
            e
          );
          var r, i;
        })(
          e,
          t,
          n
        )(this.engine);
      }
      bool(e, t) {
        return v(e, t)(this.engine);
      }
      pick(e, t, n) {
        return (function (e, t, n, r) {
          const i = t.length;
          if (0 === i) throw new RangeError("Cannot pick from an empty array");
          const o = null == n ? 0 : w(T(n), i),
            a = void 0 === r ? i : w(T(r), i);
          if (o >= a)
            throw new RangeError(`Cannot pick between bounds ${o} and ${a}`);
          return t[p(o, a - 1)(e)];
        })(this.engine, e, t, n);
      }
      shuffle(e) {
        return O(this.engine, e);
      }
      sample(e, t) {
        return (function (e, t, n) {
          if (n < 0 || n > t.length || !isFinite(n))
            throw new RangeError(
              "Expected sampleSize to be within 0 and the length of the population"
            );
          if (0 === n) return [];
          const r = C.call(t),
            i = r.length;
          if (i === n) return O(e, r, 0);
          const o = i - n;
          return O(e, r, o - 1).slice(o);
        })(this.engine, e, t);
      }
      die(e) {
        return b(e)(this.engine);
      }
      dice(e, t) {
        return (function (e, t) {
          const n = b(e);
          return (e) => {
            const r = [];
            for (let i = 0; i < t; ++i) r.push(n(e));
            return r;
          };
        })(
          e,
          t
        )(this.engine);
      }
      uuid4() {
        return (function (e) {
          const t = e.next() >>> 0,
            n = 0 | e.next(),
            r = 0 | e.next(),
            i = e.next() >>> 0;
          return (
            _(t.toString(16), 8) +
            "-" +
            _((65535 & n).toString(16), 4) +
            "-" +
            _((((n >> 4) & 4095) | 16384).toString(16), 4) +
            "-" +
            _(((16383 & r) | 32768).toString(16), 4) +
            "-" +
            _(((r >> 4) & 65535).toString(16), 4) +
            _(i.toString(16), 8)
          );
        })(this.engine);
      }
      string(e, t) {
        return y(t)(this.engine, e);
      }
      hex(e, t) {
        return (function (e) {
          return e ? M : I;
        })(t)(this.engine, e);
      }
      date(e, t) {
        return (function (e, t) {
          const n = p(e.getTime(), t.getTime());
          return (e) => new Date(n(e));
        })(
          e,
          t
        )(this.engine);
      }
    }
    const L = (() => {
      try {
        const e = new ArrayBuffer(4),
          t = new Int32Array(e);
        if (((t[0] = 2147483648), -2147483648 === t[0])) return Int32Array;
      } catch (e) { }
      return Array;
    })();
    (() => {
      let e = null;
      let t = 128;
    })();
    const U =
      "function" == typeof Math.imul && -5 === Math.imul(4294967295, 5)
        ? Math.imul
        : (e, t) => {
          const n = 65535 & e,
            r = 65535 & t;
          return (
            (n * r +
              (((((e >>> 16) & 65535) * r + n * ((t >>> 16) & 65535)) <<
                16) >>>
                0)) |
            0
          );
        };
    class j {
      constructor() {
        (this.data = new L(624)), (this.index = 0), (this.uses = 0);
      }
      static seed(e) {
        return new j().seed(e);
      }
      static seedWithArray(e) {
        return new j().seedWithArray(e);
      }
      static autoSeed() {
        return j.seedWithArray(
          (function (e = P, t = 16) {
            const n = [];
            n.push(0 | new Date().getTime());
            for (let r = 1; r < t; ++r) n[r] = 0 | e.next();
            return n;
          })()
        );
      }
      next() {
        (0 | this.index) >= 624 && (D(this.data), (this.index = 0));
        const e = this.data[this.index];
        return (
          (this.index = (this.index + 1) | 0),
          (this.uses += 1),
          0 |
          (function (e) {
            return (
              (e ^= e >>> 11),
              (e ^= (e << 7) & 2636928640),
              (e ^= (e << 15) & 4022730752) ^ (e >>> 18)
            );
          })(e)
        );
      }
      getUseCount() {
        return this.uses;
      }
      discard(e) {
        if (e <= 0) return this;
        for (
          this.uses += e,
          (0 | this.index) >= 624 && (D(this.data), (this.index = 0));
          e + this.index > 624;

        )
          (e -= 624 - this.index), D(this.data), (this.index = 0);
        return (this.index = (this.index + e) | 0), this;
      }
      seed(e) {
        let t = 0;
        this.data[0] = t = 0 | e;
        for (let e = 1; e < 624; e = (e + 1) | 0)
          this.data[e] = t = (U(t ^ (t >>> 30), 1812433253) + e) | 0;
        return (this.index = 624), (this.uses = 0), this;
      }
      seedWithArray(e) {
        return (
          this.seed(19650218),
          (function (e, t) {
            let n = 1,
              r = 0;
            const i = t.length;
            let o = 0 | Math.max(i, 624),
              a = 0 | e[0];
            for (; (0 | o) > 0; --o)
              (e[n] = a =
                ((e[n] ^ U(a ^ (a >>> 30), 1664525)) + (0 | t[r]) + (0 | r)) |
                0),
                ++r,
                (0 | (n = (n + 1) | 0)) > 623 && ((e[0] = e[623]), (n = 1)),
                r >= i && (r = 0);
            for (o = 623; (0 | o) > 0; --o)
              (e[n] = a = ((e[n] ^ U(a ^ (a >>> 30), 1566083941)) - n) | 0),
                (0 | (n = (n + 1) | 0)) > 623 && ((e[0] = e[623]), (n = 1));
            e[0] = 2147483648;
          })(this.data, e),
          this
        );
      }
    }
    function D(e) {
      let t = 0,
        n = 0;
      for (; (0 | t) < 227; t = (t + 1) | 0)
        (n = (2147483648 & e[t]) | (2147483647 & e[(t + 1) | 0])),
          (e[t] = e[(t + 397) | 0] ^ (n >>> 1) ^ (1 & n ? 2567483615 : 0));
      for (; (0 | t) < 623; t = (t + 1) | 0)
        (n = (2147483648 & e[t]) | (2147483647 & e[(t + 1) | 0])),
          (e[t] = e[(t - 227) | 0] ^ (n >>> 1) ^ (1 & n ? 2567483615 : 0));
      (n = (2147483648 & e[623]) | (2147483647 & e[0])),
        (e[623] = e[396] ^ (n >>> 1) ^ (1 & n ? 2567483615 : 0));
    }
    (() => {
      let e = null;
      let t = 128;
    })();
    var F,
      z = {
        feral: "furl",
        move: "flllurlog",
        walk: "flllurlog",
        fisherman: "fllurlokkr",
        net: "mgrrrl",
        gordunni: "grrundee",
        clan: "klun",
        guild: "klun",
        thirsty: "mllgggrrrr",
        with: "mmgr",
        tasty: "mmm",
        yummy: "mmm",
        good: "mmmm",
        great: "mmmmm",
        right: "mmmml",
        correct: "mmmml",
        aunt: "mmmrrggllm",
        uncle: "mmmrrrggglm",
        friend: "mmmrrglllm",
        friends: "mmmrrglllm",
        murloc: "mmmurlok",
        yes: "mrgle",
        ok: "mrgle",
        magic: "mrrrggk",
        sorry: "mrrrgll",
        and: "n",
        no: "nk",
        ogre: "rrrgrrr",
        sing: "shng",
        scar: "skr",
        spring: "srng",
        honor: "uuua",
        battlecry: "mrglllll",
        charge: "flllurllg",
        beast: "flrrgmmrk",
        king: "kklun",
        crush: "kllrrug",
        taunt: "murrgl",
        agent: "fllrrgmgr",
        combo: "flrrkgr",
        blizzard: "blrrgrk",
        battle: "aaaaaaaaugurgble",
        nerglish: "mmmurlokmurg",
        translate: "mmmurglurk",
        mrgl: "mrgl",
      },
      B = {
        "": "mmmmmmmmmmmmmmmmmmmmmmmmmmgggggnnrrrrbbaaaaksuhhfffffffff",
        m: "mmmmmmuurrrrrrrrrrrn",
        g: "lllllllllllrrmmkksf",
        l: "mmmmmmmgggkrlluuu",
        r: "rrmmnkkfflllllggggggggggggg",
        k: "mmmnllu",
        s: "hhhruk",
        h: "ummr",
        u: "uamgggrrrrrrrf",
        a: "aaaauuummmggkfs",
        n: "ngla",
        f: "rrrrrullllfff",
        b: "brrlmu",
      };
    function $(e) {
      var t = B[e] || " ";
      return t[F.integer(0, t.length - 1)] || " ";
    }
    function W(e, t) {
      var n = e.text,
        r = t[0],
        i = z[r.toLowerCase()];
      if (i)
        return 0 === e.index
          ? (r[0] === r[0].toUpperCase() &&
            (i = i[0].toUpperCase() + i.slice(1)),
            i)
          : "";
      !(function (e) {
        var t,
          n = 0;
        if (e.length >= 0)
          for (t = 0; t < e.length; t++)
            (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
        F = new A(j.seed(n));
      })(n);
      for (
        var o,
        a = F.integer(Math.max(n.length - 1, 2), n.length + 2),
        s = $(""),
        u = n[0] === n[0].toUpperCase() ? s.toUpperCase() : s,
        l = 1;
        l < a;
        l++
      )
        (s = o = $(s)), (u += o);
      return u;
    }
    window.mmmurglurk = function () {
      console.log("Aaaaaughibbrgubugbugrguburgle!"),
        i()(document.body, {
          find: /[a-zA-ZÀ-ÿ]+/g,
          preset: "prose",
          replace: W,
        });
    };
  },
]);
