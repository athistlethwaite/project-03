! function (t) {
  var e = {};

  function n(i) {
    if (e[i]) return e[i].exports;
    var r = e[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = t, n.c = e, n.d = function (t, e, i) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    })
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var r in t) n.d(i, r, function (e) {
        return t[e]
      }.bind(null, r));
    return i
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "", n(n.s = 10)
}([function (t, e, n) {
  t.exports = n.p + "public/fonts/slkscr-webfont.eot"
}, function (t, e, n) {
  var i = n(2);
  "string" == typeof i && (i = [
    [t.i, i, ""]
  ]);
  var r = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(8)(i, r);
  i.locals && (t.exports = i.locals)
}, function (t, e, n) {
  e = t.exports = n(3)(!1);
  var i = n(4),
    r = i(n(0)),
    s = i(n(0) + "?#iefix"),
    o = i(n(5)),
    a = i(n(6)),
    l = i(n(7) + "#silkscreennormal");
  e.push([t.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: 'Silkscreen Web';\n  src: url(" + r + ");\n  src: url(" + s + ") format('embedded-opentype'),\n    url(" + o + ") format('woff'),\n    url(" + a + ") format('truetype'),\n    url(" + l + ") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: 'Silkscreen Web', monotype;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem; \n  text-align: center;\n}\n", ""])
}, function (t, e, n) {
  "use strict";
  t.exports = function (t) {
    var e = [];
    return e.toString = function () {
      return this.map(function (e) {
        var n = function (t, e) {
          var n = t[1] || "",
            i = t[3];
          if (!i) return n;
          if (e && "function" == typeof btoa) {
            var r = (o = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
              s = i.sources.map(function (t) {
                return "/*# sourceURL=" + i.sourceRoot + t + " */"
              });
            return [n].concat(s).concat([r]).join("\n")
          }
          var o;
          return [n].join("\n")
        }(e, t);
        return e[2] ? "@media " + e[2] + "{" + n + "}" : n
      }).join("")
    }, e.i = function (t, n) {
      "string" == typeof t && (t = [
        [null, t, ""]
      ]);
      for (var i = {}, r = 0; r < this.length; r++) {
        var s = this[r][0];
        null != s && (i[s] = !0)
      }
      for (r = 0; r < t.length; r++) {
        var o = t[r];
        null != o[0] && i[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
      }
    }, e
  }
}, function (t, e, n) {
  "use strict";
  t.exports = function (t, e) {
    return "string" != typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), /["'() \t\n]/.test(t) || e ? '"' + t.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : t)
  }
}, function (t, e, n) {
  t.exports = n.p + "public/fonts/slkscr-webfont.woff"
}, function (t, e, n) {
  t.exports = n.p + "public/fonts/slkscr-webfont.ttf"
}, function (t, e, n) {
  t.exports = n.p + "public/fonts/slkscr-webfont.svg"
}, function (t, e, n) {
  var i, r, s = {},
    o = (i = function () {
      return window && document && document.all && !window.atob
    }, function () {
      return void 0 === r && (r = i.apply(this, arguments)), r
    }),
    a = function (t) {
      var e = {};
      return function (t, n) {
        if ("function" == typeof t) return t();
        if (void 0 === e[t]) {
          var i = function (t, e) {
            return e ? e.querySelector(t) : document.querySelector(t)
          }.call(this, t, n);
          if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
            i = i.contentDocument.head
          } catch (t) {
            i = null
          }
          e[t] = i
        }
        return e[t]
      }
    }(),
    l = null,
    h = 0,
    u = [],
    c = n(9);

  function f(t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        r = s[i.id];
      if (r) {
        r.refs++;
        for (var o = 0; o < r.parts.length; o++) r.parts[o](i.parts[o]);
        for (; o < i.parts.length; o++) r.parts.push(m(i.parts[o], e))
      } else {
        var a = [];
        for (o = 0; o < i.parts.length; o++) a.push(m(i.parts[o], e));
        s[i.id] = {
          id: i.id,
          refs: 1,
          parts: a
        }
      }
    }
  }

  function d(t, e) {
    for (var n = [], i = {}, r = 0; r < t.length; r++) {
      var s = t[r],
        o = e.base ? s[0] + e.base : s[0],
        a = {
          css: s[1],
          media: s[2],
          sourceMap: s[3]
        };
      i[o] ? i[o].parts.push(a) : n.push(i[o] = {
        id: o,
        parts: [a]
      })
    }
    return n
  }

  function p(t, e) {
    var n = a(t.insertInto);
    if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var i = u[u.length - 1];
    if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);
    else if ("bottom" === t.insertAt) n.appendChild(e);
    else {
      if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      var r = a(t.insertAt.before, n);
      n.insertBefore(e, r)
    }
  }

  function b(t) {
    if (null === t.parentNode) return !1;
    t.parentNode.removeChild(t);
    var e = u.indexOf(t);
    e >= 0 && u.splice(e, 1)
  }

  function y(t) {
    var e = document.createElement("style");
    if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
      var i = function () {
        0;
        return n.nc
      }();
      i && (t.attrs.nonce = i)
    }
    return v(e, t.attrs), p(t, e), e
  }

  function v(t, e) {
    Object.keys(e).forEach(function (n) {
      t.setAttribute(n, e[n])
    })
  }

  function m(t, e) {
    var n, i, r, s;
    if (e.transform && t.css) {
      if (!(s = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {};
      t.css = s
    }
    if (e.singleton) {
      var o = h++;
      n = l || (l = y(e)), i = x.bind(null, n, o, !1), r = x.bind(null, n, o, !0)
    } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
      var e = document.createElement("link");
      return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", v(e, t.attrs), p(t, e), e
    }(e), i = function (t, e, n) {
      var i = n.css,
        r = n.sourceMap,
        s = void 0 === e.convertToAbsoluteUrls && r;
      (e.convertToAbsoluteUrls || s) && (i = c(i));
      r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
      var o = new Blob([i], {
          type: "text/css"
        }),
        a = t.href;
      t.href = URL.createObjectURL(o), a && URL.revokeObjectURL(a)
    }.bind(null, n, e), r = function () {
      b(n), n.href && URL.revokeObjectURL(n.href)
    }) : (n = y(e), i = function (t, e) {
      var n = e.css,
        i = e.media;
      i && t.setAttribute("media", i);
      if (t.styleSheet) t.styleSheet.cssText = n;
      else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n))
      }
    }.bind(null, n), r = function () {
      b(n)
    });
    return i(t),
      function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          i(t = e)
        } else r()
      }
  }
  t.exports = function (t, e) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = o()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
    var n = d(t, e);
    return f(n, e),
      function (t) {
        for (var i = [], r = 0; r < n.length; r++) {
          var o = n[r];
          (a = s[o.id]).refs--, i.push(a)
        }
        t && f(d(t, e), e);
        for (r = 0; r < i.length; r++) {
          var a;
          if (0 === (a = i[r]).refs) {
            for (var l = 0; l < a.parts.length; l++) a.parts[l]();
            delete s[a.id]
          }
        }
      }
  };
  var g, w = (g = [], function (t, e) {
    return g[t] = e, g.filter(Boolean).join("\n")
  });

  function x(t, e, n, i) {
    var r = n ? "" : i.css;
    if (t.styleSheet) t.styleSheet.cssText = w(e, r);
    else {
      var s = document.createTextNode(r),
        o = t.childNodes;
      o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(s, o[e]) : t.appendChild(s)
    }
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = "undefined" != typeof window && window.location;
    if (!e) throw new Error("fixUrls requires window.location");
    if (!t || "string" != typeof t) return t;
    var n = e.protocol + "//" + e.host,
      i = n + e.pathname.replace(/\/[^\/]*$/, "/");
    return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
      var r, s = e.trim().replace(/^"(.*)"$/, function (t, e) {
        return e
      }).replace(/^'(.*)'$/, function (t, e) {
        return e
      });
      return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s) ? t : (r = 0 === s.indexOf("//") ? s : 0 === s.indexOf("/") ? n + s : i + s.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
    })
  }
}, function (t, e, n) {
  "use strict";
  n.r(e);
  n(1);
  var i = "http://www.w3.org/2000/svg",
    r = {
      a: "a",
      z: "z",
      up: "ArrowUp",
      down: "ArrowDown",
      spaceBar: " "
    };

  function s(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }
  var o = function () {
    function t(e, n) {
      ! function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.width = e, this.height = n
    }
    var e, n, r;
    return e = t, (n = [{
      key: "render",
      value: function (t) {
        var e = document.createElementNS(i, "rect");
        e.setAttributeNS(null, "width", this.width), e.setAttributeNS(null, "height", this.height), e.setAttributeNS(null, "fill", "#353535");
        var n = document.createElementNS(i, "line");
        n.setAttributeNS(null, "x1", this.width / 2), n.setAttributeNS(null, "y1", 0), n.setAttributeNS(null, "x2", this.width / 2), n.setAttributeNS(null, "y2", this.height), n.setAttributeNS(null, "stroke", "white"), n.setAttributeNS(null, "stroke-dasharray", "20, 15"), n.setAttributeNS(null, "stroke-width", "4"), t.appendChild(e), t.appendChild(n)
      }
    }]) && s(e.prototype, n), r && s(e, r), t
  }();

  function a(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }
  var l = function () {
    function t(e, n, i, r, s, o, a) {
      var l = this;
      ! function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.boardHeight = e, this.width = n, this.height = i, this.x = r, this.y = s, this.speed = 40, this.score = 0, this.firstKeyPress = !1, document.addEventListener("keydown", function (t) {
        switch (t.key) {
          case o:
            l.up();
            break;
          case a:
            l.down()
        }
      })
    }
    var e, n, r;
    return e = t, (n = [{
      key: "up",
      value: function () {
        this.y = Math.max(0, this.y - this.speed)
      }
    }, {
      key: "down",
      value: function () {
        this.y = Math.min(this.y + this.speed, this.boardHeight - this.height)
      }
    }, {
      key: "coordinates",
      value: function (t, e, n, i) {
        return {
          leftX: t,
          rightX: t + n,
          topY: e,
          bottomY: e + i
        }
      }
    }, {
      key: "render",
      value: function (t) {
        var e = document.createElementNS(i, "rect");
        e.setAttributeNS(null, "width", this.width), e.setAttributeNS(null, "height", this.height), e.setAttributeNS(null, "x", this.x), e.setAttributeNS(null, "y", this.y), e.setAttributeNS(null, "fill", "white"), t.appendChild(e)
      }
    }]) && a(e.prototype, n), r && a(e, r), t
  }();

  function h(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }
  var u = function () {
    function t(e, n, i) {
      ! function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.radius = e, this.boardWidth = n, this.boardHeight = i, this.direction = 1, this.ping = new Audio("public/sounds/pong-01.wav"), this.reset()
    }
    var e, n, r;
    return e = t, (n = [{
      key: "reset",
      value: function () {
        for (this.x = this.boardWidth / 2, this.y = this.boardHeight / 2, this.vy = 0; 0 === this.vy;) this.vy = Math.floor(10 * Math.random() - 5);
        this.vx = this.direction * (6 - Math.abs(this.vy))
      }
    }, {
      key: "wallCollision",
      value: function () {
        var t = this.x - this.radius <= 0,
          e = this.x + this.radius >= this.boardWidth,
          n = this.y - this.radius <= 0,
          i = this.y + this.radius >= this.boardHeight;
        t || e ? this.vx = -this.vx : (n || i) && (this.vy = -this.vy)
      }
    }, {
      key: "paddleCollision",
      value: function (t, e) {
        if (this.vx > 0) {
          var n = e.coordinates(e.x, e.y, e.width, e.height),
            i = n.leftX,
            r = n.topY,
            s = n.bottomY;
          this.x + this.radius >= i && this.y >= r && this.y <= s && (this.vx = -this.vx, this.ping.play()), this.x >= i && this.y >= r && this.y <= s && (this.vx = -this.vx)
        } else {
          var o = t.coordinates(t.x, t.y, t.width, t.height),
            a = o.rightX,
            l = o.topY,
            h = o.bottomY;
          this.x - this.radius <= a && this.y >= l && this.y <= h && (this.vx = -this.vx, this.ping.play()), this.x <= a && this.y >= l && this.y <= h && (this.vy = -this.vy)
        }
      }
    }, {
      key: "goal",
      value: function (t) {
        t.score++, this.reset()
      }
    }, {
      key: "render",
      value: function (t, e, n) {
        this.x += this.vx, this.y += this.vy, this.wallCollision(), this.paddleCollision(e, n);
        var r = document.createElementNS(i, "circle");
        r.setAttributeNS(null, "r", this.radius), r.setAttributeNS(null, "cx", this.x), r.setAttributeNS(null, "cy", this.y), r.setAttributeNS(null, "fill", "white"), t.appendChild(r);
        var s = this.x + this.radius >= this.boardWidth,
          o = this.x - this.radius <= 0;
        s ? (this.goal(e), this.direction = 1) : o && (this.goal(n), this.direction = -1)
      }
    }]) && h(e.prototype, n), r && h(e, r), t
  }();

  function c(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }
  var f = function () {
    function t(e, n, i) {
      ! function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.x = e, this.y = n, this.size = i
    }
    var e, n, r;
    return e = t, (n = [{
      key: "render",
      value: function (t, e) {
        var n = document.createElementNS(i, "text");
        n.setAttributeNS(null, "x", this.x), n.setAttributeNS(null, "y", this.y), n.setAttributeNS(null, "font-family", "Silkscreen Web"), n.setAttributeNS(null, "font-size", this.size / 2), n.setAttributeNS(null, "fill", "#FFFFFF"), n.textContent = e, t.appendChild(n)
      }
    }]) && c(e.prototype, n), r && c(e, r), t
  }();

  function d(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }
  var p = new(function () {
    function t(e, n, i) {
      var s = this;
      ! function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.width = n, this.height = i, this.gameElement = document.getElementById(e), this.paddleWidth = 8, this.paddleHeight = 56, this.boardGap = 10, this.board = new o(this.width, this.height), this.player1 = new l(this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height - this.paddleHeight) / 2, r.a, r.z), this.player2 = new l(this.height, this.paddleWidth, this.paddleHeight, this.width - (this.paddleWidth + this.boardGap), (this.height - this.paddleHeight) / 2, r.up, r.down), this.radiusBall = 8, this.ball1 = new u(this.radiusBall, this.width, this.height), this.ball2 = new u(4, this.width, this.height), this.score1 = new f(this.width / 2 - 50, 30, 30), this.score2 = new f(this.width / 2 + 25, 30, 30), document.addEventListener("keydown", function (t) {
        t.key === r.spaceBar && (s.pause = !s.pause)
      })
    }
    var e, n, s;
    return e = t, (n = [{
      key: "scoreBoard",
      value: function (t) {
        5 === this.player1.score() ? (this.pause = !0, this.score1.render(t, "Player 1 Wins!"), this.reset()) : 5 === this.player2.score() ? (this.pause = !0, this.score2.render(t, "Player 2 Wins!"), this.reset()) : (this.score1.render(t, this.player1.score()), this.score2.render(t, this.player2.score()))
      }
    }, {
      key: "render",
      value: function () {
        if (!this.pause) {
          this.gameElement.innerHTML = "";
          var t = document.createElementNS(i, "svg");
          t.setAttributeNS(null, "width", this.width), t.setAttributeNS(null, "height", this.height), t.setAttributeNS(null, "viewBox", "0 0 ".concat(this.width, " ").concat(this.height)), t.setAttributeNS(null, "version", "1.1"), this.gameElement.appendChild(t), this.board.render(t), this.player1.render(t), this.player2.render(t), this.ball1.render(t, this.player1, this.player2), this.ball2.render(t, this.player1, this.player2), this.score1.render(t, this.player1.score), this.score2.render(t, this.player2.score)
        }
      }
    }]) && d(e.prototype, n), s && d(e, s), t
  }())("game", 512, 256);
  ! function t() {
    p.render(), requestAnimationFrame(t)
  }()
}]);