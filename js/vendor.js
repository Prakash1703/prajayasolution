! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if(!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(k, e) {
	"use strict";

	function g(e) {
		return null != e && e === e.window
	}
	var t = [],
		n = Object.getPrototypeOf,
		a = t.slice,
		y = t.flat ? function(e) {
			return t.flat.call(e)
		} : function(e) {
			return t.concat.apply([], e)
		},
		l = t.push,
		o = t.indexOf,
		i = {},
		r = i.toString,
		v = i.hasOwnProperty,
		s = v.toString,
		c = s.call(Object),
		m = {},
		w = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType
		},
		S = k.document,
		d = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};

	function b(e, t, n) {
		var i, o, r = (n = n || S).createElement("script");
		if(r.text = e, t)
			for(i in d)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
		n.head.appendChild(r).parentNode.removeChild(r)
	}

	function h(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[r.call(e)] || "object" : typeof e
	}
	var u = "3.5.1",
		C = function(e, t) {
			return new C.fn.init(e, t)
		};

	function p(e) {
		var t = !!e && "length" in e && e.length,
			n = h(e);
		return !w(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	C.fn = C.prototype = {
		jquery: u,
		constructor: C,
		length: 0,
		toArray: function() {
			return a.call(this)
		},
		get: function(e) {
			return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			e = C.merge(this.constructor(), e);
			return e.prevObject = this, e
		},
		each: function(e) {
			return C.each(this, e)
		},
		map: function(n) {
			return this.pushStack(C.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(a.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(C.grep(this, function(e, t) {
				return(t + 1) % 2
			}))
		},
		odd: function() {
			return this.pushStack(C.grep(this, function(e, t) {
				return t % 2
			}))
		},
		eq: function(e) {
			var t = this.length,
				e = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= e && e < t ? [this[e]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: l,
		sort: t.sort,
		splice: t.splice
	}, C.extend = C.fn.extend = function() {
		var e, t, n, i, o, r = arguments[0] || {},
			s = 1,
			a = arguments.length,
			l = !1;
		for("boolean" == typeof r && (l = r, r = arguments[s] || {}, s++), "object" == typeof r || w(r) || (r = {}), s === a && (r = this, s--); s < a; s++)
			if(null != (e = arguments[s]))
				for(t in e) n = e[t], "__proto__" !== t && r !== n && (l && n && (C.isPlainObject(n) || (i = Array.isArray(n))) ? (o = r[t], o = i && !Array.isArray(o) ? [] : i || C.isPlainObject(o) ? o : {}, i = !1, r[t] = C.extend(l, o, n)) : void 0 !== n && (r[t] = n));
		return r
	}, C.extend({
		expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			return !(!e || "[object Object]" !== r.call(e) || (e = n(e)) && ("function" != typeof(e = v.call(e, "constructor") && e.constructor) || s.call(e) !== c))
		},
		isEmptyObject: function(e) {
			for(var t in e) return !1;
			return !0
		},
		globalEval: function(e, t, n) {
			b(e, {
				nonce: t && t.nonce
			}, n)
		},
		each: function(e, t) {
			var n, i = 0;
			if(p(e))
				for(n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
			else
				for(i in e)
					if(!1 === t.call(e[i], i, e[i])) break; return e
		},
		makeArray: function(e, t) {
			t = t || [];
			return null != e && (p(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : o.call(t, e, n)
		},
		merge: function(e, t) {
			for(var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
			return e.length = o, e
		},
		grep: function(e, t, n) {
			for(var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) != s && i.push(e[o]);
			return i
		},
		map: function(e, t, n) {
			var i, o, r = 0,
				s = [];
			if(p(e))
				for(i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
			else
				for(r in e) null != (o = t(e[r], r, n)) && s.push(o);
			return y(s)
		},
		guid: 1,
		support: m
	}), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		i["[object " + t + "]"] = t.toLowerCase()
	});
	var f = function(n) {
		function u(e, t) {
			return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
		}

		function i() {
			T()
		}
		var e, f, b, r, o, h, p, g, x, l, c, T, k, s, S, y, a, d, v, C = "sizzle" + +new Date,
			m = n.document,
			A = 0,
			w = 0,
			$ = le(),
			j = le(),
			E = le(),
			D = le(),
			N = function(e, t) {
				return e === t && (c = !0), 0
			},
			H = {}.hasOwnProperty,
			t = [],
			L = t.pop,
			O = t.push,
			P = t.push,
			q = t.slice,
			M = function(e, t) {
				for(var n = 0, i = e.length; n < i; n++)
					if(e[n] === t) return n;
				return -1
			},
			R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			I = "[\\x20\\t\\r\\n\\f]",
			z = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
			W = "\\[" + I + "*(" + z + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + I + "*\\]",
			B = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
			Q = new RegExp(I + "+", "g"),
			F = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
			_ = new RegExp("^" + I + "*," + I + "*"),
			U = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
			X = new RegExp(I + "|>"),
			J = new RegExp(B),
			Y = new RegExp("^" + z + "$"),
			G = {
				ID: new RegExp("^#(" + z + ")"),
				CLASS: new RegExp("^\\.(" + z + ")"),
				TAG: new RegExp("^(" + z + "|[*])"),
				ATTR: new RegExp("^" + W),
				PSEUDO: new RegExp("^" + B),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + R + ")$", "i"),
				needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
			},
			V = /HTML$/i,
			K = /^(?:input|select|textarea|button)$/i,
			Z = /^h\d$/i,
			ee = /^[^{]+\{\s*\[native \w/,
			te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ne = /[+~]/,
			ie = new RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"),
			oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			re = function(e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			se = me(function(e) {
				return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			P.apply(t = q.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
		} catch(e) {
			P = {
				apply: t.length ? function(e, t) {
					O.apply(e, q.call(t))
				} : function(e, t) {
					for(var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}

		function ae(e, t, n, i) {
			var o, r, s, a, l, c, d, u = t && t.ownerDocument,
				p = t ? t.nodeType : 9;
			if(n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
			if(!i && (T(t), t = t || k, S)) {
				if(11 !== p && (l = te.exec(e)))
					if(o = l[1]) {
						if(9 === p) {
							if(!(s = t.getElementById(o))) return n;
							if(s.id === o) return n.push(s), n
						} else if(u && (s = u.getElementById(o)) && v(t, s) && s.id === o) return n.push(s), n
					} else {
						if(l[2]) return P.apply(n, t.getElementsByTagName(e)), n;
						if((o = l[3]) && f.getElementsByClassName && t.getElementsByClassName) return P.apply(n, t.getElementsByClassName(o)), n
					}
				if(f.qsa && !D[e + " "] && (!y || !y.test(e)) && (1 !== p || "object" !== t.nodeName.toLowerCase())) {
					if(d = e, u = t, 1 === p && (X.test(e) || U.test(e))) {
						for((u = ne.test(e) && ge(t.parentNode) || t) === t && f.scope || ((a = t.getAttribute("id")) ? a = a.replace(oe, re) : t.setAttribute("id", a = C)), r = (c = h(e)).length; r--;) c[r] = (a ? "#" + a : ":scope") + " " + ve(c[r]);
						d = c.join(",")
					}
					try {
						return P.apply(n, u.querySelectorAll(d)), n
					} catch(t) {
						D(e, !0)
					} finally {
						a === C && t.removeAttribute("id")
					}
				}
			}
			return g(e.replace(F, "$1"), t, n, i)
		}

		function le() {
			var i = [];
			return function e(t, n) {
				return i.push(t + " ") > b.cacheLength && delete e[i.shift()], e[t + " "] = n
			}
		}

		function ce(e) {
			return e[C] = !0, e
		}

		function de(e) {
			var t = k.createElement("fieldset");
			try {
				return !!e(t)
			} catch(e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function ue(e, t) {
			for(var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
		}

		function pe(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if(i) return i;
			if(n)
				for(; n = n.nextSibling;)
					if(n === t) return -1;
			return e ? 1 : -1
		}

		function fe(t) {
			return function(e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
			}
		}

		function he(s) {
			return ce(function(r) {
				return r = +r, ce(function(e, t) {
					for(var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function ge(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}
		for(e in f = ae.support = {}, o = ae.isXML = function(e) {
				var t = e.namespaceURI,
					e = (e.ownerDocument || e).documentElement;
				return !V.test(t || e && e.nodeName || "HTML")
			}, T = ae.setDocument = function(e) {
				var t, e = e ? e.ownerDocument || e : m;
				return e != k && 9 === e.nodeType && e.documentElement && (s = (k = e).documentElement, S = !o(k), m != k && (t = k.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", i, !1) : t.attachEvent && t.attachEvent("onunload", i)), f.scope = de(function(e) {
					return s.appendChild(e).appendChild(k.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
				}), f.attributes = de(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), f.getElementsByTagName = de(function(e) {
					return e.appendChild(k.createComment("")), !e.getElementsByTagName("*").length
				}), f.getElementsByClassName = ee.test(k.getElementsByClassName), f.getById = de(function(e) {
					return s.appendChild(e).id = C, !k.getElementsByName || !k.getElementsByName(C).length
				}), f.getById ? (b.filter.ID = function(e) {
					var t = e.replace(ie, u);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}, b.find.ID = function(e, t) {
					if(void 0 !== t.getElementById && S) {
						e = t.getElementById(e);
						return e ? [e] : []
					}
				}) : (b.filter.ID = function(e) {
					var t = e.replace(ie, u);
					return function(e) {
						e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
						return e && e.value === t
					}
				}, b.find.ID = function(e, t) {
					if(void 0 !== t.getElementById && S) {
						var n, i, o, r = t.getElementById(e);
						if(r) {
							if((n = r.getAttributeNode("id")) && n.value === e) return [r];
							for(o = t.getElementsByName(e), i = 0; r = o[i++];)
								if((n = r.getAttributeNode("id")) && n.value === e) return [r]
						}
						return []
					}
				}), b.find.TAG = f.getElementsByTagName ? function(e, t) {
					return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, i = [],
						o = 0,
						r = t.getElementsByTagName(e);
					if("*" !== e) return r;
					for(; n = r[o++];) 1 === n.nodeType && i.push(n);
					return i
				}, b.find.CLASS = f.getElementsByClassName && function(e, t) {
					if(void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e)
				}, a = [], y = [], (f.qsa = ee.test(k.querySelectorAll)) && (de(function(e) {
					var t;
					s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + I + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + C + "-]").length || y.push("~="), (t = k.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || y.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || y.push(".#.+[+~]"), e.querySelectorAll("\\\f"), y.push("[\\r\\n\\f]")
				}), de(function(e) {
					e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var t = k.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
				})), (f.matchesSelector = ee.test(d = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && de(function(e) {
					f.disconnectedMatch = d.call(e, "*"), d.call(e, "[s!='']:x"), a.push("!=", B)
				}), y = y.length && new RegExp(y.join("|")), a = a.length && new RegExp(a.join("|")), t = ee.test(s.compareDocumentPosition), v = t || ee.test(s.contains) ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						t = t && t.parentNode;
					return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
				} : function(e, t) {
					if(t)
						for(; t = t.parentNode;)
							if(t === e) return !0;
					return !1
				}, N = t ? function(e, t) {
					if(e === t) return c = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e == k || e.ownerDocument == m && v(m, e) ? -1 : t == k || t.ownerDocument == m && v(m, t) ? 1 : l ? M(l, e) - M(l, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if(e === t) return c = !0, 0;
					var n, i = 0,
						o = e.parentNode,
						r = t.parentNode,
						s = [e],
						a = [t];
					if(!o || !r) return e == k ? -1 : t == k ? 1 : o ? -1 : r ? 1 : l ? M(l, e) - M(l, t) : 0;
					if(o === r) return pe(e, t);
					for(n = e; n = n.parentNode;) s.unshift(n);
					for(n = t; n = n.parentNode;) a.unshift(n);
					for(; s[i] === a[i];) i++;
					return i ? pe(s[i], a[i]) : s[i] == m ? -1 : a[i] == m ? 1 : 0
				}), k
			}, ae.matches = function(e, t) {
				return ae(e, null, null, t)
			}, ae.matchesSelector = function(e, t) {
				if(T(e), f.matchesSelector && S && !D[t + " "] && (!a || !a.test(t)) && (!y || !y.test(t))) try {
					var n = d.call(e, t);
					if(n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch(e) {
					D(t, !0)
				}
				return 0 < ae(t, k, null, [e]).length
			}, ae.contains = function(e, t) {
				return(e.ownerDocument || e) != k && T(e), v(e, t)
			}, ae.attr = function(e, t) {
				(e.ownerDocument || e) != k && T(e);
				var n = b.attrHandle[t.toLowerCase()],
					n = n && H.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
				return void 0 !== n ? n : f.attributes || !S ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
			}, ae.escape = function(e) {
				return(e + "").replace(oe, re)
			}, ae.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, ae.uniqueSort = function(e) {
				var t, n = [],
					i = 0,
					o = 0;
				if(c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(N), c) {
					for(; t = e[o++];) t === e[o] && (i = n.push(o));
					for(; i--;) e.splice(n[i], 1)
				}
				return l = null, e
			}, r = ae.getText = function(e) {
				var t, n = "",
					i = 0,
					o = e.nodeType;
				if(o) {
					if(1 === o || 9 === o || 11 === o) {
						if("string" == typeof e.textContent) return e.textContent;
						for(e = e.firstChild; e; e = e.nextSibling) n += r(e)
					} else if(3 === o || 4 === o) return e.nodeValue
				} else
					for(; t = e[i++];) n += r(t);
				return n
			}, (b = ae.selectors = {
				cacheLength: 50,
				createPseudo: ce,
				match: G,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(ie, u), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, u), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && J.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(ie, u).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = $[e + " "];
						return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && $(e, function(e) {
							return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(t, n, i) {
						return function(e) {
							e = ae.attr(e, t);
							return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(Q, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function(h, e, t, g, y) {
						var v = "nth" !== h.slice(0, 3),
							m = "last" !== h.slice(-4),
							w = "of-type" === e;
						return 1 === g && 0 === y ? function(e) {
							return !!e.parentNode
						} : function(e, t, n) {
							var i, o, r, s, a, l, c = v != m ? "nextSibling" : "previousSibling",
								d = e.parentNode,
								u = w && e.nodeName.toLowerCase(),
								p = !n && !w,
								f = !1;
							if(d) {
								if(v) {
									for(; c;) {
										for(s = e; s = s[c];)
											if(w ? s.nodeName.toLowerCase() === u : 1 === s.nodeType) return !1;
										l = c = "only" === h && !l && "nextSibling"
									}
									return !0
								}
								if(l = [m ? d.firstChild : d.lastChild], m && p) {
									for(f = (a = (i = (o = (r = (s = d)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === A && i[1]) && i[2], s = a && d.childNodes[a]; s = ++a && s && s[c] || (f = a = 0) || l.pop();)
										if(1 === s.nodeType && ++f && s === e) {
											o[h] = [A, a, f];
											break
										}
								} else if(p && (f = a = (i = (o = (r = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === A && i[1]), !1 === f)
									for(;
										(s = ++a && s && s[c] || (f = a = 0) || l.pop()) && ((w ? s.nodeName.toLowerCase() !== u : 1 !== s.nodeType) || !++f || (p && ((o = (r = s[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] = [A, f]), s !== e)););
								return(f -= y) === g || f % g == 0 && 0 <= f / g
							}
						}
					},
					PSEUDO: function(e, r) {
						var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
						return s[C] ? s(r) : 1 < s.length ? (t = [e, e, "", r], b.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, t) {
							for(var n, i = s(e, r), o = i.length; o--;) e[n = M(e, i[o])] = !(t[n] = i[o])
						}) : function(e) {
							return s(e, 0, t)
						}) : s
					}
				},
				pseudos: {
					not: ce(function(e) {
						var i = [],
							o = [],
							a = p(e.replace(F, "$1"));
						return a[C] ? ce(function(e, t, n, i) {
							for(var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
						}) : function(e, t, n) {
							return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
						}
					}),
					has: ce(function(t) {
						return function(e) {
							return 0 < ae(t, e).length
						}
					}),
					contains: ce(function(t) {
						return t = t.replace(ie, u),
							function(e) {
								return -1 < (e.textContent || r(e)).indexOf(t)
							}
					}),
					lang: ce(function(n) {
						return Y.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(ie, u).toLowerCase(),
							function(e) {
								var t;
								do {
									if(t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return(t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function(e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function(e) {
						return e === s
					},
					focus: function(e) {
						return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: fe(!1),
					disabled: fe(!0),
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for(e = e.firstChild; e; e = e.nextSibling)
							if(e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !b.pseudos.empty(e)
					},
					header: function(e) {
						return Z.test(e.nodeName)
					},
					input: function(e) {
						return K.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
					},
					first: he(function() {
						return [0]
					}),
					last: he(function(e, t) {
						return [t - 1]
					}),
					eq: he(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: he(function(e, t) {
						for(var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: he(function(e, t) {
						for(var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: he(function(e, t, n) {
						for(var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
						return e
					}),
					gt: he(function(e, t, n) {
						for(var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
						return e
					})
				}
			}).pseudos.nth = b.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) b.pseudos[e] = function(t) {
			return function(e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}(e);
		for(e in {
				submit: !0,
				reset: !0
			}) b.pseudos[e] = function(n) {
			return function(e) {
				var t = e.nodeName.toLowerCase();
				return("input" === t || "button" === t) && e.type === n
			}
		}(e);

		function ye() {}

		function ve(e) {
			for(var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
			return i
		}

		function me(s, e, t) {
			var a = e.dir,
				l = e.next,
				c = l || a,
				d = t && "parentNode" === c,
				u = w++;
			return e.first ? function(e, t, n) {
				for(; e = e[a];)
					if(1 === e.nodeType || d) return s(e, t, n);
				return !1
			} : function(e, t, n) {
				var i, o, r = [A, u];
				if(n) {
					for(; e = e[a];)
						if((1 === e.nodeType || d) && s(e, t, n)) return !0
				} else
					for(; e = e[a];)
						if(1 === e.nodeType || d)
							if(i = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[a] || e;
							else {
								if((o = i[c]) && o[0] === A && o[1] === u) return r[2] = o[2];
								if((i[c] = r)[2] = s(e, t, n)) return !0
							} return !1
			}
		}

		function we(o) {
			return 1 < o.length ? function(e, t, n) {
				for(var i = o.length; i--;)
					if(!o[i](e, t, n)) return !1;
				return !0
			} : o[0]
		}

		function be(e, t, n, i, o) {
			for(var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
			return s
		}

		function xe(e) {
			for(var i, t, n, o = e.length, r = b.relative[e[0].type], s = r || b.relative[" "], a = r ? 1 : 0, l = me(function(e) {
					return e === i
				}, s, !0), c = me(function(e) {
					return -1 < M(i, e)
				}, s, !0), d = [function(e, t, n) {
					n = !r && (n || t !== x) || ((i = t).nodeType ? l : c)(e, t, n);
					return i = null, n
				}]; a < o; a++)
				if(t = b.relative[e[a].type]) d = [me(we(d), t)];
				else {
					if((t = b.filter[e[a].type].apply(null, e[a].matches))[C]) {
						for(n = ++a; n < o && !b.relative[e[n].type]; n++);
						return function e(f, h, g, y, v, t) {
							return y && !y[C] && (y = e(y)), v && !v[C] && (v = e(v, t)), ce(function(e, t, n, i) {
								var o, r, s, a = [],
									l = [],
									c = t.length,
									d = e || function(e, t, n) {
										for(var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
										return n
									}(h || "*", n.nodeType ? [n] : n, []),
									u = !f || !e && h ? d : be(d, a, f, n, i),
									p = g ? v || (e ? f : c || y) ? [] : t : u;
								if(g && g(u, p, n, i), y)
									for(o = be(p, l), y(o, [], n, i), r = o.length; r--;)(s = o[r]) && (p[l[r]] = !(u[l[r]] = s));
								if(e) {
									if(v || f) {
										if(v) {
											for(o = [], r = p.length; r--;)(s = p[r]) && o.push(u[r] = s);
											v(null, p = [], o, i)
										}
										for(r = p.length; r--;)(s = p[r]) && -1 < (o = v ? M(e, s) : a[r]) && (e[o] = !(t[o] = s))
									}
								} else p = be(p === t ? p.splice(c, p.length) : p), v ? v(null, t, p, i) : P.apply(t, p)
							})
						}(1 < a && we(d), 1 < a && ve(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(F, "$1"), t, a < n && xe(e.slice(a, n)), n < o && xe(e = e.slice(n)), n < o && ve(e))
					}
					d.push(t)
				}
			return we(d)
		}
		return ye.prototype = b.filters = b.pseudos, b.setFilters = new ye, h = ae.tokenize = function(e, t) {
			var n, i, o, r, s, a, l, c = j[e + " "];
			if(c) return t ? 0 : c.slice(0);
			for(s = e, a = [], l = b.preFilter; s;) {
				for(r in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = U.exec(s)) && (n = i.shift(), o.push({
						value: n,
						type: i[0].replace(F, " ")
					}), s = s.slice(n.length)), b.filter) !(i = G[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
					value: n,
					type: r,
					matches: i
				}), s = s.slice(n.length));
				if(!n) break
			}
			return t ? s.length : s ? ae.error(e) : j(e, a).slice(0)
		}, p = ae.compile = function(e, t) {
			var n, y, v, m, w, i, o = [],
				r = [],
				s = E[e + " "];
			if(!s) {
				for(n = (t = t || h(e)).length; n--;)((s = xe(t[n]))[C] ? o : r).push(s);
				(s = E(e, (y = r, m = 0 < (v = o).length, w = 0 < y.length, i = function(e, t, n, i, o) {
					var r, s, a, l = 0,
						c = "0",
						d = e && [],
						u = [],
						p = x,
						f = e || w && b.find.TAG("*", o),
						h = A += null == p ? 1 : Math.random() || .1,
						g = f.length;
					for(o && (x = t == k || t || o); c !== g && null != (r = f[c]); c++) {
						if(w && r) {
							for(s = 0, t || r.ownerDocument == k || (T(r), n = !S); a = y[s++];)
								if(a(r, t || k, n)) {
									i.push(r);
									break
								}
							o && (A = h)
						}
						m && ((r = !a && r) && l--, e && d.push(r))
					}
					if(l += c, m && c !== l) {
						for(s = 0; a = v[s++];) a(d, u, t, n);
						if(e) {
							if(0 < l)
								for(; c--;) d[c] || u[c] || (u[c] = L.call(i));
							u = be(u)
						}
						P.apply(i, u), o && !e && 0 < u.length && 1 < l + v.length && ae.uniqueSort(i)
					}
					return o && (A = h, x = p), d
				}, m ? ce(i) : i))).selector = e
			}
			return s
		}, g = ae.select = function(e, t, n, i) {
			var o, r, s, a, l, c = "function" == typeof e && e,
				d = !i && h(e = c.selector || e);
			if(n = n || [], 1 === d.length) {
				if(2 < (r = d[0] = d[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && S && b.relative[r[1].type]) {
					if(!(t = (b.find.ID(s.matches[0].replace(ie, u), t) || [])[0])) return n;
					c && (t = t.parentNode), e = e.slice(r.shift().value.length)
				}
				for(o = G.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !b.relative[a = s.type]);)
					if((l = b.find[a]) && (i = l(s.matches[0].replace(ie, u), ne.test(r[0].type) && ge(t.parentNode) || t))) {
						if(r.splice(o, 1), !(e = i.length && ve(r))) return P.apply(n, i), n;
						break
					}
			}
			return(c || p(e, d))(i, t, !S, n, !t || ne.test(e) && ge(t.parentNode) || t), n
		}, f.sortStable = C.split("").sort(N).join("") === C, f.detectDuplicates = !!c, T(), f.sortDetached = de(function(e) {
			return 1 & e.compareDocumentPosition(k.createElement("fieldset"))
		}), de(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || ue("type|href|height|width", function(e, t, n) {
			if(!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), f.attributes && de(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || ue("value", function(e, t, n) {
			if(!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), de(function(e) {
			return null == e.getAttribute("disabled")
		}) || ue(R, function(e, t, n) {
			if(!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
		}), ae
	}(k);
	C.find = f, C.expr = f.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = f.uniqueSort, C.text = f.getText, C.isXMLDoc = f.isXML, C.contains = f.contains, C.escapeSelector = f.escape;

	function x(e, t, n) {
		for(var i = [], o = void 0 !== n;
			(e = e[t]) && 9 !== e.nodeType;)
			if(1 === e.nodeType) {
				if(o && C(e).is(n)) break;
				i.push(e)
			}
		return i
	}

	function T(e, t) {
		for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
		return n
	}
	var A = C.expr.match.needsContext;

	function $(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function E(e, n, i) {
		return w(n) ? C.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== i
		}) : n.nodeType ? C.grep(e, function(e) {
			return e === n !== i
		}) : "string" != typeof n ? C.grep(e, function(e) {
			return -1 < o.call(n, e) !== i
		}) : C.filter(n, e, i)
	}
	C.filter = function(e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, C.fn.extend({
		find: function(e) {
			var t, n, i = this.length,
				o = this;
			if("string" != typeof e) return this.pushStack(C(e).filter(function() {
				for(t = 0; t < i; t++)
					if(C.contains(o[t], this)) return !0
			}));
			for(n = this.pushStack([]), t = 0; t < i; t++) C.find(e, o[t], n);
			return 1 < i ? C.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(E(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(E(this, e || [], !0))
		},
		is: function(e) {
			return !!E(this, "string" == typeof e && A.test(e) ? C(e) : e || [], !1).length
		}
	});
	var D, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(C.fn.init = function(e, t, n) {
		if(!e) return this;
		if(n = n || D, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : w(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
		if(!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || !i[1] && t) return(!t || t.jquery ? t || n : this.constructor(t)).find(e);
		if(i[1]) {
			if(t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), j.test(i[1]) && C.isPlainObject(t))
				for(var i in t) w(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
			return this
		}
		return(e = S.getElementById(i[2])) && (this[0] = e, this.length = 1), this
	}).prototype = C.fn, D = C(S);
	var H = /^(?:parents|prev(?:Until|All))/,
		L = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function O(e, t) {
		for(;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	C.fn.extend({
		has: function(e) {
			var t = C(e, this),
				n = t.length;
			return this.filter(function() {
				for(var e = 0; e < n; e++)
					if(C.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, i = 0,
				o = this.length,
				r = [],
				s = "string" != typeof e && C(e);
			if(!A.test(e))
				for(; i < o; i++)
					for(n = this[i]; n && n !== t; n = n.parentNode)
						if(n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
							r.push(n);
							break
						}
			return this.pushStack(1 < r.length ? C.uniqueSort(r) : r)
		},
		index: function(e) {
			return e ? "string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), C.each({
		parent: function(e) {
			e = e.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(e) {
			return x(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return x(e, "parentNode", n)
		},
		next: function(e) {
			return O(e, "nextSibling")
		},
		prev: function(e) {
			return O(e, "previousSibling")
		},
		nextAll: function(e) {
			return x(e, "nextSibling")
		},
		prevAll: function(e) {
			return x(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return x(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return x(e, "previousSibling", n)
		},
		siblings: function(e) {
			return T((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return T(e.firstChild)
		},
		contents: function(e) {
			return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : ($(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
		}
	}, function(i, o) {
		C.fn[i] = function(e, t) {
			var n = C.map(this, o, e);
			return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (L[i] || C.uniqueSort(n), H.test(i) && n.reverse()), this.pushStack(n)
		}
	});
	var P = /[^\x20\t\r\n\f]+/g;

	function q(e) {
		return e
	}

	function M(e) {
		throw e
	}

	function R(e, t, n, i) {
		var o;
		try {
			e && w(o = e.promise) ? o.call(e).done(t).fail(n) : e && w(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
		} catch(e) {
			n.apply(void 0, [e])
		}
	}
	C.Callbacks = function(i) {
		var n;
		i = "string" == typeof i ? (n = {}, C.each(i.match(P) || [], function(e, t) {
			n[t] = !0
		}), n) : C.extend({}, i);

		function o() {
			for(s = s || i.once, t = r = !0; l.length; c = -1)
				for(e = l.shift(); ++c < a.length;) !1 === a[c].apply(e[0], e[1]) && i.stopOnFalse && (c = a.length, e = !1);
			i.memory || (e = !1), r = !1, s && (a = e ? [] : "")
		}
		var r, e, t, s, a = [],
			l = [],
			c = -1,
			d = {
				add: function() {
					return a && (e && !r && (c = a.length - 1, l.push(e)), function n(e) {
						C.each(e, function(e, t) {
							w(t) ? i.unique && d.has(t) || a.push(t) : t && t.length && "string" !== h(t) && n(t)
						})
					}(arguments), e && !r && o()), this
				},
				remove: function() {
					return C.each(arguments, function(e, t) {
						for(var n; - 1 < (n = C.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
					}), this
				},
				has: function(e) {
					return e ? -1 < C.inArray(e, a) : 0 < a.length
				},
				empty: function() {
					return a = a && [], this
				},
				disable: function() {
					return s = l = [], a = e = "", this
				},
				disabled: function() {
					return !a
				},
				lock: function() {
					return s = l = [], e || r || (a = e = ""), this
				},
				locked: function() {
					return !!s
				},
				fireWith: function(e, t) {
					return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || o()), this
				},
				fire: function() {
					return d.fireWith(this, arguments), this
				},
				fired: function() {
					return !!t
				}
			};
		return d
	}, C.extend({
		Deferred: function(e) {
			var r = [
					["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
					["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
				],
				o = "pending",
				s = {
					state: function() {
						return o
					},
					always: function() {
						return a.done(arguments).fail(arguments), this
					},
					catch: function(e) {
						return s.then(null, e)
					},
					pipe: function() {
						var o = arguments;
						return C.Deferred(function(i) {
							C.each(r, function(e, t) {
								var n = w(o[t[4]]) && o[t[4]];
								a[t[1]](function() {
									var e = n && n.apply(this, arguments);
									e && w(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
								})
							}), o = null
						}).promise()
					},
					then: function(t, n, i) {
						var l = 0;

						function c(o, r, s, a) {
							return function() {
								function e() {
									var e, t;
									if(!(o < l)) {
										if((e = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
										t = e && ("object" == typeof e || "function" == typeof e) && e.then, w(t) ? a ? t.call(e, c(l, r, q, a), c(l, r, M, a)) : (l++, t.call(e, c(l, r, q, a), c(l, r, M, a), c(l, r, q, r.notifyWith))) : (s !== q && (n = void 0, i = [e]), (a || r.resolveWith)(n, i))
									}
								}
								var n = this,
									i = arguments,
									t = a ? e : function() {
										try {
											e()
										} catch(e) {
											C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== M && (n = void 0, i = [e]), r.rejectWith(n, i))
										}
									};
								o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), k.setTimeout(t))
							}
						}
						return C.Deferred(function(e) {
							r[0][3].add(c(0, e, w(i) ? i : q, e.notifyWith)), r[1][3].add(c(0, e, w(t) ? t : q)), r[2][3].add(c(0, e, w(n) ? n : M))
						}).promise()
					},
					promise: function(e) {
						return null != e ? C.extend(e, s) : s
					}
				},
				a = {};
			return C.each(r, function(e, t) {
				var n = t[2],
					i = t[5];
				s[t[1]] = n.add, i && n.add(function() {
					o = i
				}, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
					return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
				}, a[t[0] + "With"] = n.fireWith
			}), s.promise(a), e && e.call(a, a), a
		},
		when: function(e) {
			function t(t) {
				return function(e) {
					o[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(o, r)
				}
			}
			var n = arguments.length,
				i = n,
				o = Array(i),
				r = a.call(arguments),
				s = C.Deferred();
			if(n <= 1 && (R(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || w(r[i] && r[i].then))) return s.then();
			for(; i--;) R(r[i], t(i), s.reject);
			return s.promise()
		}
	});
	var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	C.Deferred.exceptionHook = function(e, t) {
		k.console && k.console.warn && e && I.test(e.name) && k.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
	}, C.readyException = function(e) {
		k.setTimeout(function() {
			throw e
		})
	};
	var z = C.Deferred();

	function W() {
		S.removeEventListener("DOMContentLoaded", W), k.removeEventListener("load", W), C.ready()
	}
	C.fn.ready = function(e) {
		return z.then(e).catch(function(e) {
			C.readyException(e)
		}), this
	}, C.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || z.resolveWith(S, [C])
		}
	}), C.ready.then = z.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? k.setTimeout(C.ready) : (S.addEventListener("DOMContentLoaded", W), k.addEventListener("load", W));
	var B = function(e, t, n, i, o, r, s) {
			var a = 0,
				l = e.length,
				c = null == n;
			if("object" === h(n))
				for(a in o = !0, n) B(e, t, a, n[a], !0, r, s);
			else if(void 0 !== i && (o = !0, w(i) || (s = !0), c && (t = s ? (t.call(e, i), null) : (c = t, function(e, t, n) {
					return c.call(C(e), n)
				})), t))
				for(; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
			return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
		},
		Q = /^-ms-/,
		F = /-([a-z])/g;

	function _(e, t) {
		return t.toUpperCase()
	}

	function U(e) {
		return e.replace(Q, "ms-").replace(F, _)
	}

	function X(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}

	function J() {
		this.expando = C.expando + J.uid++
	}
	J.uid = 1, J.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var i, o = this.cache(e);
			if("string" == typeof t) o[U(t)] = n;
			else
				for(i in t) o[U(i)] = t[i];
			return o
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, i = e[this.expando];
			if(void 0 !== i) {
				if(void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in i ? [t] : t.match(P) || []).length;
					for(; n--;) delete i[t[n]]
				}
				void 0 !== t && !C.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			e = e[this.expando];
			return void 0 !== e && !C.isEmptyObject(e)
		}
	};
	var Y = new J,
		G = new J,
		V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		K = /[A-Z]/g;

	function Z(e, t, n) {
		var i, o;
		if(void 0 === n && 1 === e.nodeType)
			if(i = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
				try {
					n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : V.test(o) ? JSON.parse(o) : o)
				} catch(e) {}
				G.set(e, t, n)
			} else n = void 0;
		return n
	}
	C.extend({
		hasData: function(e) {
			return G.hasData(e) || Y.hasData(e)
		},
		data: function(e, t, n) {
			return G.access(e, t, n)
		},
		removeData: function(e, t) {
			G.remove(e, t)
		},
		_data: function(e, t, n) {
			return Y.access(e, t, n)
		},
		_removeData: function(e, t) {
			Y.remove(e, t)
		}
	}), C.fn.extend({
		data: function(n, e) {
			var t, i, o, r = this[0],
				s = r && r.attributes;
			if(void 0 !== n) return "object" == typeof n ? this.each(function() {
				G.set(this, n)
			}) : B(this, function(e) {
				var t;
				return r && void 0 === e ? void 0 !== (t = G.get(r, n)) || void 0 !== (t = Z(r, n)) ? t : void 0 : void this.each(function() {
					G.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0);
			if(this.length && (o = G.get(r), 1 === r.nodeType && !Y.get(r, "hasDataAttrs"))) {
				for(t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = U(i.slice(5)), Z(r, i, o[i]));
				Y.set(r, "hasDataAttrs", !0)
			}
			return o
		},
		removeData: function(e) {
			return this.each(function() {
				G.remove(this, e)
			})
		}
	}), C.extend({
		queue: function(e, t, n) {
			var i;
			if(e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, C.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = C.queue(e, t),
				i = n.length,
				o = n.shift(),
				r = C._queueHooks(e, t);
			"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
				C.dequeue(e, t)
			}, r)), !i && r && r.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return Y.get(e, n) || Y.access(e, n, {
				empty: C.Callbacks("once memory").add(function() {
					Y.remove(e, [t + "queue", n])
				})
			})
		}
	}), C.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
				var e = C.queue(this, t, n);
				C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				C.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			function n() {
				--o || r.resolveWith(s, [s])
			}
			var i, o = 1,
				r = C.Deferred(),
				s = this,
				a = this.length;
			for("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = Y.get(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
			return n(), r.promise(t)
		}
	});
	var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
		ne = ["Top", "Right", "Bottom", "Left"],
		ie = S.documentElement,
		oe = function(e) {
			return C.contains(e.ownerDocument, e)
		},
		re = {
			composed: !0
		};
	ie.getRootNode && (oe = function(e) {
		return C.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
	});

	function se(e, t) {
		return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === C.css(e, "display")
	}

	function ae(e, t, n, i) {
		var o, r, s = 20,
			a = i ? function() {
				return i.cur()
			} : function() {
				return C.css(e, t, "")
			},
			l = a(),
			c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
			d = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && te.exec(C.css(e, t));
		if(d && d[3] !== c) {
			for(l /= 2, c = c || d[3], d = +l || 1; s--;) C.style(e, t, d + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), d /= r;
			d *= 2, C.style(e, t, d + c), n = n || []
		}
		return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o
	}
	var le = {};

	function ce(e, t) {
		for(var n, i, o, r, s, a, l = [], c = 0, d = e.length; c < d; c++)(i = e[c]).style && (n = i.style.display, t ? ("none" === n && (l[c] = Y.get(i, "display") || null, l[c] || (i.style.display = "")), "" === i.style.display && se(i) && (l[c] = (a = r = o = void 0, r = i.ownerDocument, s = i.nodeName, (a = le[s]) || (o = r.body.appendChild(r.createElement(s)), a = C.css(o, "display"), o.parentNode.removeChild(o), "none" === a && (a = "block"), le[s] = a)))) : "none" !== n && (l[c] = "none", Y.set(i, "display", n)));
		for(c = 0; c < d; c++) null != l[c] && (e[c].style.display = l[c]);
		return e
	}
	C.fn.extend({
		show: function() {
			return ce(this, !0)
		},
		hide: function() {
			return ce(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				se(this) ? C(this).show() : C(this).hide()
			})
		}
	});
	var de = /^(?:checkbox|radio)$/i,
		ue = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		pe = /^$|^module$|\/(?:java|ecma)script/i,
		u = S.createDocumentFragment().appendChild(S.createElement("div"));
	(f = S.createElement("input")).setAttribute("type", "radio"), f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), u.appendChild(f), m.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, u.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!u.cloneNode(!0).lastChild.defaultValue, u.innerHTML = "<option></option>", m.option = !!u.lastChild;
	var fe = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};

	function he(e, t) {
		var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && $(e, t) ? C.merge([e], n) : n
	}

	function ge(e, t) {
		for(var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
	}
	fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td, m.option || (fe.optgroup = fe.option = [1, "<select multiple='multiple'>", "</select>"]);
	var ye = /<|&#?\w+;/;

	function ve(e, t, n, i, o) {
		for(var r, s, a, l, c, d = t.createDocumentFragment(), u = [], p = 0, f = e.length; p < f; p++)
			if((r = e[p]) || 0 === r)
				if("object" === h(r)) C.merge(u, r.nodeType ? [r] : r);
				else if(ye.test(r)) {
			for(s = s || d.appendChild(t.createElement("div")), a = (ue.exec(r) || ["", ""])[1].toLowerCase(), a = fe[a] || fe._default, s.innerHTML = a[1] + C.htmlPrefilter(r) + a[2], c = a[0]; c--;) s = s.lastChild;
			C.merge(u, s.childNodes), (s = d.firstChild).textContent = ""
		} else u.push(t.createTextNode(r));
		for(d.textContent = "", p = 0; r = u[p++];)
			if(i && -1 < C.inArray(r, i)) o && o.push(r);
			else if(l = oe(r), s = he(d.appendChild(r), "script"), l && ge(s), n)
			for(c = 0; r = s[c++];) pe.test(r.type || "") && n.push(r);
		return d
	}
	var me = /^key/,
		we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		be = /^([^.]*)(?:\.(.+)|)/;

	function xe() {
		return !0
	}

	function Te() {
		return !1
	}

	function ke(e, t) {
		return e === function() {
			try {
				return S.activeElement
			} catch(e) {}
		}() == ("focus" === t)
	}

	function Se(e, t, n, i, o, r) {
		var s, a;
		if("object" == typeof t) {
			for(a in "string" != typeof n && (i = i || n, n = void 0), t) Se(e, a, n, i, t[a], r);
			return e
		}
		if(null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Te;
		else if(!o) return e;
		return 1 === r && (s = o, (o = function(e) {
			return C().off(e), s.apply(this, arguments)
		}).guid = s.guid || (s.guid = C.guid++)), e.each(function() {
			C.event.add(this, t, o, i, n)
		})
	}

	function Ce(e, o, r) {
		r ? (Y.set(e, o, !1), C.event.add(e, o, {
			namespace: !1,
			handler: function(e) {
				var t, n, i = Y.get(this, o);
				if(1 & e.isTrigger && this[o]) {
					if(i.length)(C.event.special[o] || {}).delegateType && e.stopPropagation();
					else if(i = a.call(arguments), Y.set(this, o, i), t = r(this, o), this[o](), i !== (n = Y.get(this, o)) || t ? Y.set(this, o, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
				} else i.length && (Y.set(this, o, {
					value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
				}), e.stopImmediatePropagation())
			}
		})) : void 0 === Y.get(e, o) && C.event.add(e, o, xe)
	}
	C.event = {
		global: {},
		add: function(t, e, n, i, o) {
			var r, s, a, l, c, d, u, p, f, h = Y.get(t);
			if(X(t))
				for(n.handler && (n = (r = n).handler, o = r.selector), o && C.find.matchesSelector(ie, o), n.guid || (n.guid = C.guid++), (a = h.events) || (a = h.events = Object.create(null)), (s = h.handle) || (s = h.handle = function(e) {
						return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
					}), l = (e = (e || "").match(P) || [""]).length; l--;) u = f = (c = be.exec(e[l]) || [])[1], p = (c[2] || "").split(".").sort(), u && (d = C.event.special[u] || {}, u = (o ? d.delegateType : d.bindType) || u, d = C.event.special[u] || {}, c = C.extend({
					type: u,
					origType: f,
					data: i,
					handler: n,
					guid: n.guid,
					selector: o,
					needsContext: o && C.expr.match.needsContext.test(o),
					namespace: p.join(".")
				}, r), (f = a[u]) || ((f = a[u] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(u, s)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), C.event.global[u] = !0)
		},
		remove: function(e, t, n, i, o) {
			var r, s, a, l, c, d, u, p, f, h, g, y = Y.hasData(e) && Y.get(e);
			if(y && (l = y.events)) {
				for(c = (t = (t || "").match(P) || [""]).length; c--;)
					if(f = g = (a = be.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
						for(u = C.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) d = p[r], !o && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
						s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, y.handle) || C.removeEvent(e, f, y.handle), delete l[f])
					} else
						for(f in l) C.event.remove(e, f + t[c], n, i, !0);
				C.isEmptyObject(l) && Y.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, i, o, r, s = new Array(arguments.length),
				a = C.event.fix(e),
				l = (Y.get(this, "events") || Object.create(null))[a.type] || [],
				e = C.event.special[a.type] || {};
			for(s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
			if(a.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, a)) {
				for(r = C.event.handlers.call(this, a, l), t = 0;
					(i = r[t++]) && !a.isPropagationStopped();)
					for(a.currentTarget = i.elem, n = 0;
						(o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (o = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (a.result = o) && (a.preventDefault(), a.stopPropagation()));
				return e.postDispatch && e.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(e, t) {
			var n, i, o, r, s, a = [],
				l = t.delegateCount,
				c = e.target;
			if(l && c.nodeType && !("click" === e.type && 1 <= e.button))
				for(; c !== this; c = c.parentNode || this)
					if(1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
						for(r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < C(o, this).index(c) : C.find(o, this, null, [c]).length), s[o] && r.push(i);
						r.length && a.push({
							elem: c,
							handlers: r
						})
					}
			return c = this, l < t.length && a.push({
				elem: c,
				handlers: t.slice(l)
			}), a
		},
		addProp: function(t, e) {
			Object.defineProperty(C.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: w(e) ? function() {
					if(this.originalEvent) return e(this.originalEvent)
				} : function() {
					if(this.originalEvent) return this.originalEvent[t]
				},
				set: function(e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function(e) {
			return e[C.expando] ? e : new C.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(e) {
					e = this || e;
					return de.test(e.type) && e.click && $(e, "input") && Ce(e, "click", xe), !1
				},
				trigger: function(e) {
					e = this || e;
					return de.test(e.type) && e.click && $(e, "input") && Ce(e, "click"), !0
				},
				_default: function(e) {
					e = e.target;
					return de.test(e.type) && e.click && $(e, "input") && Y.get(e, "click") || $(e, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, C.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, C.Event = function(e, t) {
		if(!(this instanceof C.Event)) return new C.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
	}, C.Event.prototype = {
		constructor: C.Event,
		isDefaultPrevented: Te,
		isPropagationStopped: Te,
		isImmediatePropagationStopped: Te,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, C.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(e) {
			var t = e.button;
			return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, C.event.addProp), C.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		C.event.special[e] = {
			setup: function() {
				return Ce(this, e, ke), !1
			},
			trigger: function() {
				return Ce(this, e), !0
			},
			delegateType: t
		}
	}), C.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, o) {
		C.event.special[e] = {
			delegateType: o,
			bindType: o,
			handle: function(e) {
				var t, n = e.relatedTarget,
					i = e.handleObj;
				return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
			}
		}
	}), C.fn.extend({
		on: function(e, t, n, i) {
			return Se(this, e, t, n, i)
		},
		one: function(e, t, n, i) {
			return Se(this, e, t, n, i, 1)
		},
		off: function(e, t, n) {
			var i, o;
			if(e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
				C.event.remove(this, e, n, t)
			});
			for(o in e) this.off(o, t, e[o]);
			return this
		}
	});
	var Ae = /<script|<style|<link/i,
		$e = /checked\s*(?:[^=]|=\s*.checked.)/i,
		je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function Ee(e, t) {
		return $(e, "table") && $(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
	}

	function De(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function Ne(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function He(e, t) {
		var n, i, o, r;
		if(1 === t.nodeType) {
			if(Y.hasData(e) && (r = Y.get(e).events))
				for(o in Y.remove(t, "handle events"), r)
					for(n = 0, i = r[o].length; n < i; n++) C.event.add(t, o, r[o][n]);
			G.hasData(e) && (e = G.access(e), e = C.extend({}, e), G.set(t, e))
		}
	}

	function Le(n, i, o, r) {
		i = y(i);
		var e, t, s, a, l, c, d = 0,
			u = n.length,
			p = u - 1,
			f = i[0],
			h = w(f);
		if(h || 1 < u && "string" == typeof f && !m.checkClone && $e.test(f)) return n.each(function(e) {
			var t = n.eq(e);
			h && (i[0] = f.call(this, e, t.html())), Le(t, i, o, r)
		});
		if(u && (t = (e = ve(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
			for(a = (s = C.map(he(e, "script"), De)).length; d < u; d++) l = e, d !== p && (l = C.clone(l, !0, !0), a && C.merge(s, he(l, "script"))), o.call(n[d], l, d);
			if(a)
				for(c = s[s.length - 1].ownerDocument, C.map(s, Ne), d = 0; d < a; d++) l = s[d], pe.test(l.type || "") && !Y.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
					nonce: l.nonce || l.getAttribute("nonce")
				}, c) : b(l.textContent.replace(je, ""), l, c))
		}
		return n
	}

	function Oe(e, t, n) {
		for(var i, o = t ? C.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || C.cleanData(he(i)), i.parentNode && (n && oe(i) && ge(he(i, "script")), i.parentNode.removeChild(i));
		return e
	}
	C.extend({
		htmlPrefilter: function(e) {
			return e
		},
		clone: function(e, t, n) {
			var i, o, r, s, a, l, c, d = e.cloneNode(!0),
				u = oe(e);
			if(!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
				for(s = he(d), i = 0, o = (r = he(e)).length; i < o; i++) a = r[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && de.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
			if(t)
				if(n)
					for(r = r || he(e), s = s || he(d), i = 0, o = r.length; i < o; i++) He(r[i], s[i]);
				else He(e, d);
			return 0 < (s = he(d, "script")).length && ge(s, !u && he(e, "script")), d
		},
		cleanData: function(e) {
			for(var t, n, i, o = C.event.special, r = 0; void 0 !== (n = e[r]); r++)
				if(X(n)) {
					if(t = n[Y.expando]) {
						if(t.events)
							for(i in t.events) o[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
						n[Y.expando] = void 0
					}
					n[G.expando] && (n[G.expando] = void 0)
				}
		}
	}), C.fn.extend({
		detach: function(e) {
			return Oe(this, e, !0)
		},
		remove: function(e) {
			return Oe(this, e)
		},
		text: function(e) {
			return B(this, function(e) {
				return void 0 === e ? C.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return Le(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ee(this, e).appendChild(e)
			})
		},
		prepend: function() {
			return Le(this, arguments, function(e) {
				var t;
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Ee(this, e)).insertBefore(e, t.firstChild)
			})
		},
		before: function() {
			return Le(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return Le(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for(var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(he(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return C.clone(this, e, t)
			})
		},
		html: function(e) {
			return B(this, function(e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if(void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if("string" == typeof e && !Ae.test(e) && !fe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = C.htmlPrefilter(e);
					try {
						for(; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(he(t, !1)), t.innerHTML = e);
						t = 0
					} catch(e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return Le(this, arguments, function(e) {
				var t = this.parentNode;
				C.inArray(this, n) < 0 && (C.cleanData(he(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), C.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, s) {
		C.fn[e] = function(e) {
			for(var t, n = [], i = C(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), C(i[r])[s](t), l.apply(n, t.get());
			return this.pushStack(n)
		}
	});

	function Pe(e, t, n) {
		var i, o = {};
		for(i in t) o[i] = e.style[i], e.style[i] = t[i];
		for(i in n = n.call(e), t) e.style[i] = o[i];
		return n
	}
	var qe, Me, Re, Ie, ze, We, Be, Qe, Fe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
		_e = function(e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = k), t.getComputedStyle(e)
		},
		Ue = new RegExp(ne.join("|"), "i");

	function Xe(e, t, n) {
		var i, o, r = e.style;
		return(n = n || _e(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || oe(e) || (o = C.style(e, t)), !m.pixelBoxStyles() && Fe.test(o) && Ue.test(t) && (i = r.width, e = r.minWidth, t = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = i, r.minWidth = e, r.maxWidth = t)), void 0 !== o ? o + "" : o
	}

	function Je(e, t) {
		return {
			get: function() {
				if(!e()) return(this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}

	function Ye() {
		var e;
		Qe && (Be.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Qe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(Be).appendChild(Qe), e = k.getComputedStyle(Qe), qe = "1%" !== e.top, We = 12 === Ge(e.marginLeft), Qe.style.right = "60%", Ie = 36 === Ge(e.right), Me = 36 === Ge(e.width), Qe.style.position = "absolute", Re = 12 === Ge(Qe.offsetWidth / 3), ie.removeChild(Be), Qe = null)
	}

	function Ge(e) {
		return Math.round(parseFloat(e))
	}
	Be = S.createElement("div"), (Qe = S.createElement("div")).style && (Qe.style.backgroundClip = "content-box", Qe.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === Qe.style.backgroundClip, C.extend(m, {
		boxSizingReliable: function() {
			return Ye(), Me
		},
		pixelBoxStyles: function() {
			return Ye(), Ie
		},
		pixelPosition: function() {
			return Ye(), qe
		},
		reliableMarginLeft: function() {
			return Ye(), We
		},
		scrollboxSize: function() {
			return Ye(), Re
		},
		reliableTrDimensions: function() {
			var e, t, n;
			return null == ze && (e = S.createElement("table"), n = S.createElement("tr"), t = S.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", t.style.height = "9px", ie.appendChild(e).appendChild(n).appendChild(t), n = k.getComputedStyle(n), ze = 3 < parseInt(n.height), ie.removeChild(e)), ze
		}
	}));
	var Ve = ["Webkit", "Moz", "ms"],
		Ke = S.createElement("div").style,
		Ze = {};

	function et(e) {
		return C.cssProps[e] || Ze[e] || (e in Ke ? e : Ze[e] = function(e) {
			for(var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
				if((e = Ve[n] + t) in Ke) return e
		}(e) || e)
	}
	var tt = /^(none|table(?!-c[ea]).+)/,
		nt = /^--/,
		it = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		ot = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function rt(e, t, n) {
		var i = te.exec(t);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
	}

	function st(e, t, n, i, o, r) {
		var s = "width" === t ? 1 : 0,
			a = 0,
			l = 0;
		if(n === (i ? "border" : "content")) return 0;
		for(; s < 4; s += 2) "margin" === n && (l += C.css(e, n + ne[s], !0, o)), i ? ("content" === n && (l -= C.css(e, "padding" + ne[s], !0, o)), "margin" !== n && (l -= C.css(e, "border" + ne[s] + "Width", !0, o))) : (l += C.css(e, "padding" + ne[s], !0, o), "padding" !== n ? l += C.css(e, "border" + ne[s] + "Width", !0, o) : a += C.css(e, "border" + ne[s] + "Width", !0, o));
		return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
	}

	function at(e, t, n) {
		var i = _e(e),
			o = (!m.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i),
			r = o,
			s = Xe(e, t, i),
			a = "offset" + t[0].toUpperCase() + t.slice(1);
		if(Fe.test(s)) {
			if(!n) return s;
			s = "auto"
		}
		return(!m.boxSizingReliable() && o || !m.reliableTrDimensions() && $(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + st(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
	}

	function lt(e, t, n, i, o) {
		return new lt.prototype.init(e, t, n, i, o)
	}
	C.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if(t) {
						e = Xe(e, "opacity");
						return "" === e ? "1" : e
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function(e, t, n, i) {
			if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, r, s, a = U(t),
					l = nt.test(t),
					c = e.style;
				if(l || (t = et(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
				"string" == (r = typeof n) && (o = te.exec(n)) && o[1] && (n = ae(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (C.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
			}
		},
		css: function(e, t, n, i) {
			var o, r = U(t);
			return nt.test(t) || (t = et(r)), (r = C.cssHooks[t] || C.cssHooks[r]) && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = Xe(e, t, i)), "normal" === o && t in ot && (o = ot[t]), "" === n || n ? (t = parseFloat(o), !0 === n || isFinite(t) ? t || 0 : o) : o
		}
	}), C.each(["height", "width"], function(e, a) {
		C.cssHooks[a] = {
			get: function(e, t, n) {
				if(t) return !tt.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? at(e, a, n) : Pe(e, it, function() {
					return at(e, a, n)
				})
			},
			set: function(e, t, n) {
				var i, o = _e(e),
					r = !m.scrollboxSize() && "absolute" === o.position,
					s = (r || n) && "border-box" === C.css(e, "boxSizing", !1, o),
					n = n ? st(e, a, n, s, o) : 0;
				return s && r && (n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - st(e, a, "border", !1, o) - .5)), n && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = C.css(e, a)), rt(0, t, n)
			}
		}
	}), C.cssHooks.marginLeft = Je(m.reliableMarginLeft, function(e, t) {
		if(t) return(parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - Pe(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), C.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(o, r) {
		C.cssHooks[o + r] = {
			expand: function(e) {
				for(var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ne[t] + r] = i[t] || i[t - 2] || i[0];
				return n
			}
		}, "margin" !== o && (C.cssHooks[o + r].set = rt)
	}), C.fn.extend({
		css: function(e, t) {
			return B(this, function(e, t, n) {
				var i, o, r = {},
					s = 0;
				if(Array.isArray(t)) {
					for(i = _e(e), o = t.length; s < o; s++) r[t[s]] = C.css(e, t[s], !1, i);
					return r
				}
				return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), ((C.Tween = lt).prototype = {
		constructor: lt,
		init: function(e, t, n, i, o, r) {
			this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (C.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = lt.propHooks[this.prop];
			return(e && e.get ? e : lt.propHooks._default).get(this)
		},
		run: function(e) {
			var t, n = lt.propHooks[this.prop];
			return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : lt.propHooks._default).set(this), this
		}
	}).init.prototype = lt.prototype, (lt.propHooks = {
		_default: {
			get: function(e) {
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
			},
			set: function(e) {
				C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[et(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = lt.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, C.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, C.fx = lt.prototype.init, C.fx.step = {};
	var ct, dt, ut = /^(?:toggle|show|hide)$/,
		pt = /queueHooks$/;

	function ft() {
		dt && (!1 === S.hidden && k.requestAnimationFrame ? k.requestAnimationFrame(ft) : k.setTimeout(ft, C.fx.interval), C.fx.tick())
	}

	function ht() {
		return k.setTimeout(function() {
			ct = void 0
		}), ct = Date.now()
	}

	function gt(e, t) {
		var n, i = 0,
			o = {
				height: e
			};
		for(t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ne[i])] = o["padding" + n] = e;
		return t && (o.opacity = o.width = e), o
	}

	function yt(e, t, n) {
		for(var i, o = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
			if(i = o[r].call(n, t, e)) return i
	}

	function vt(o, e, t) {
		var n, r, i = 0,
			s = vt.prefilters.length,
			a = C.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if(r) return !1;
				for(var e = ct || ht(), e = Math.max(0, c.startTime + c.duration - e), t = 1 - (e / c.duration || 0), n = 0, i = c.tweens.length; n < i; n++) c.tweens[n].run(t);
				return a.notifyWith(o, [c, t, e]), t < 1 && i ? e : (i || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
			},
			c = a.promise({
				elem: o,
				props: C.extend({}, e),
				opts: C.extend(!0, {
					specialEasing: {},
					easing: C.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: ct || ht(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					e = C.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
					return c.tweens.push(e), e
				},
				stop: function(e) {
					var t = 0,
						n = e ? c.tweens.length : 0;
					if(r) return this;
					for(r = !0; t < n; t++) c.tweens[t].run(1);
					return e ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]), this
				}
			}),
			d = c.props;
		for(function(e, t) {
				var n, i, o, r, s;
				for(n in e)
					if(o = t[i = U(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = C.cssHooks[i]) && "expand" in s)
						for(n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
					else t[i] = o
			}(d, c.opts.specialEasing); i < s; i++)
			if(n = vt.prefilters[i].call(c, o, d, c.opts)) return w(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
		return C.map(d, yt, c), w(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
			elem: o,
			anim: c,
			queue: c.opts.queue
		})), c
	}
	C.Animation = C.extend(vt, {
		tweeners: {
			"*": [function(e, t) {
				var n = this.createTween(e, t);
				return ae(n.elem, e, te.exec(t), n), n
			}]
		},
		tweener: function(e, t) {
			for(var n, i = 0, o = (e = w(e) ? (t = e, ["*"]) : e.match(P)).length; i < o; i++) n = e[i], vt.tweeners[n] = vt.tweeners[n] || [], vt.tweeners[n].unshift(t)
		},
		prefilters: [function(e, t, n) {
			var i, o, r, s, a, l, c, d = "width" in t || "height" in t,
				u = this,
				p = {},
				f = e.style,
				h = e.nodeType && se(e),
				g = Y.get(e, "fxshow");
			for(i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
					s.unqueued || a()
				}), s.unqueued++, u.always(function() {
					u.always(function() {
						s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
					})
				})), t)
				if(o = t[i], ut.test(o)) {
					if(delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
						if("show" !== o || !g || void 0 === g[i]) continue;
						h = !0
					}
					p[i] = g && g[i] || C.style(e, i)
				}
			if((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
				for(i in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = Y.get(e, "display")), "none" === (d = C.css(e, "display")) && (c ? d = c : (ce([e], !0), c = e.style.display || c, d = C.css(e, "display"), ce([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === C.css(e, "float") && (l || (u.done(function() {
						f.display = c
					}), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function() {
						f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
					})), l = !1, p) l || (g ? "hidden" in g && (h = g.hidden) : g = Y.access(e, "fxshow", {
					display: c
				}), r && (g.hidden = !h), h && ce([e], !0), u.done(function() {
					for(i in h || ce([e]), Y.remove(e, "fxshow"), p) C.style(e, i, p[i])
				})), l = yt(h ? g[i] : 0, i, u), i in g || (g[i] = l.start, h && (l.end = l.start, l.start = 0))
		}],
		prefilter: function(e, t) {
			t ? vt.prefilters.unshift(e) : vt.prefilters.push(e)
		}
	}), C.speed = function(e, t, n) {
		var i = e && "object" == typeof e ? C.extend({}, e) : {
			complete: n || !n && t || w(e) && e,
			duration: e,
			easing: n && t || t && !w(t) && t
		};
		return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
			w(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
		}, i
	}, C.fn.extend({
		fadeTo: function(e, t, n, i) {
			return this.filter(se).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, i)
		},
		animate: function(t, e, n, i) {
			var o = C.isEmptyObject(t),
				r = C.speed(e, n, i),
				i = function() {
					var e = vt(this, C.extend({}, t), r);
					(o || Y.get(this, "finish")) && e.stop(!0)
				};
			return i.finish = i, o || !1 === r.queue ? this.each(i) : this.queue(r.queue, i)
		},
		stop: function(o, e, r) {
			function s(e) {
				var t = e.stop;
				delete e.stop, t(r)
			}
			return "string" != typeof o && (r = e, e = o, o = void 0), e && this.queue(o || "fx", []), this.each(function() {
				var e = !0,
					t = null != o && o + "queueHooks",
					n = C.timers,
					i = Y.get(this);
				if(t) i[t] && i[t].stop && s(i[t]);
				else
					for(t in i) i[t] && i[t].stop && pt.test(t) && s(i[t]);
				for(t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
				!e && r || C.dequeue(this, o)
			})
		},
		finish: function(s) {
			return !1 !== s && (s = s || "fx"), this.each(function() {
				var e, t = Y.get(this),
					n = t[s + "queue"],
					i = t[s + "queueHooks"],
					o = C.timers,
					r = n ? n.length : 0;
				for(t.finish = !0, C.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
				for(e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete t.finish
			})
		}
	}), C.each(["toggle", "show", "hide"], function(e, i) {
		var o = C.fn[i];
		C.fn[i] = function(e, t, n) {
			return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(gt(i, !0), e, t, n)
		}
	}), C.each({
		slideDown: gt("show"),
		slideUp: gt("hide"),
		slideToggle: gt("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, i) {
		C.fn[e] = function(e, t, n) {
			return this.animate(i, e, t, n)
		}
	}), C.timers = [], C.fx.tick = function() {
		var e, t = 0,
			n = C.timers;
		for(ct = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || C.fx.stop(), ct = void 0
	}, C.fx.timer = function(e) {
		C.timers.push(e), C.fx.start()
	}, C.fx.interval = 13, C.fx.start = function() {
		dt || (dt = !0, ft())
	}, C.fx.stop = function() {
		dt = null
	}, C.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, C.fn.delay = function(i, e) {
		return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
			var n = k.setTimeout(e, i);
			t.stop = function() {
				k.clearTimeout(n)
			}
		})
	}, u = S.createElement("input"), ee = S.createElement("select").appendChild(S.createElement("option")), u.type = "checkbox", m.checkOn = "" !== u.value, m.optSelected = ee.selected, (u = S.createElement("input")).value = "t", u.type = "radio", m.radioValue = "t" === u.value;
	var mt, wt = C.expr.attrHandle;
	C.fn.extend({
		attr: function(e, t) {
			return B(this, C.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function(e) {
			return this.each(function() {
				C.removeAttr(this, e)
			})
		}
	}), C.extend({
		attr: function(e, t, n) {
			var i, o, r = e.nodeType;
			if(3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === r && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : !(o && "get" in o && null !== (i = o.get(e, t))) && null == (i = C.find.attr(e, t)) ? void 0 : i)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if(!m.radioValue && "radio" === t && $(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, i = 0,
				o = t && t.match(P);
			if(o && 1 === e.nodeType)
				for(; n = o[i++];) e.removeAttribute(n)
		}
	}), mt = {
		set: function(e, t, n) {
			return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var s = wt[t] || C.find.attr;
		wt[t] = function(e, t, n) {
			var i, o, r = t.toLowerCase();
			return n || (o = wt[r], wt[r] = i, i = null != s(e, t, n) ? r : null, wt[r] = o), i
		}
	});
	var bt = /^(?:input|select|textarea|button)$/i,
		xt = /^(?:a|area)$/i;

	function Tt(e) {
		return(e.match(P) || []).join(" ")
	}

	function kt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function St(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
	}
	C.fn.extend({
		prop: function(e, t) {
			return B(this, C.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[C.propFix[e] || e]
			})
		}
	}), C.extend({
		prop: function(e, t, n) {
			var i, o, r = e.nodeType;
			if(3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = C.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : bt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), m.optSelected || (C.propHooks.selected = {
		get: function(e) {
			e = e.parentNode;
			return e && e.parentNode && e.parentNode.selectedIndex, null
		},
		set: function(e) {
			e = e.parentNode;
			e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
		}
	}), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		C.propFix[this.toLowerCase()] = this
	}), C.fn.extend({
		addClass: function(t) {
			var e, n, i, o, r, s, a = 0;
			if(w(t)) return this.each(function(e) {
				C(this).addClass(t.call(this, e, kt(this)))
			});
			if((e = St(t)).length)
				for(; n = this[a++];)
					if(s = kt(n), i = 1 === n.nodeType && " " + Tt(s) + " ") {
						for(r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						s !== (s = Tt(i)) && n.setAttribute("class", s)
					}
			return this
		},
		removeClass: function(t) {
			var e, n, i, o, r, s, a = 0;
			if(w(t)) return this.each(function(e) {
				C(this).removeClass(t.call(this, e, kt(this)))
			});
			if(!arguments.length) return this.attr("class", "");
			if((e = St(t)).length)
				for(; n = this[a++];)
					if(s = kt(n), i = 1 === n.nodeType && " " + Tt(s) + " ") {
						for(r = 0; o = e[r++];)
							for(; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
						s !== (s = Tt(i)) && n.setAttribute("class", s)
					}
			return this
		},
		toggleClass: function(o, t) {
			var r = typeof o,
				s = "string" == r || Array.isArray(o);
			return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : w(o) ? this.each(function(e) {
				C(this).toggleClass(o.call(this, e, kt(this), t), t)
			}) : this.each(function() {
				var e, t, n, i;
				if(s)
					for(t = 0, n = C(this), i = St(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
				else void 0 !== o && "boolean" != r || ((e = kt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && Y.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			for(var t, n = 0, i = " " + e + " "; t = this[n++];)
				if(1 === t.nodeType && -1 < (" " + Tt(kt(t)) + " ").indexOf(i)) return !0;
			return !1
		}
	});
	var Ct = /\r/g;
	C.fn.extend({
		val: function(t) {
			var n, e, i, o = this[0];
			return arguments.length ? (i = w(t), this.each(function(e) {
				1 === this.nodeType && (null == (e = i ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = C.map(e, function(e) {
					return null == e ? "" : e + ""
				})), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
			})) : o ? (n = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof(e = o.value) ? e.replace(Ct, "") : null == e ? "" : e : void 0
		}
	}), C.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = C.find.attr(e, "value");
					return null != t ? t : Tt(C.text(e))
				}
			},
			select: {
				get: function(e) {
					for(var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], s = o ? i + 1 : n.length, a = i < 0 ? s : o ? i : 0; a < s; a++)
						if(((t = n[a]).selected || a === i) && !t.disabled && (!t.parentNode.disabled || !$(t.parentNode, "optgroup"))) {
							if(t = C(t).val(), o) return t;
							r.push(t)
						}
					return r
				},
				set: function(e, t) {
					for(var n, i, o = e.options, r = C.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < C.inArray(C.valHooks.option.get(i), r)) && (n = !0);
					return n || (e.selectedIndex = -1), r
				}
			}
		}
	}), C.each(["radio", "checkbox"], function() {
		C.valHooks[this] = {
			set: function(e, t) {
				if(Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
			}
		}, m.checkOn || (C.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), m.focusin = "onfocusin" in k;

	function At(e) {
		e.stopPropagation()
	}
	var $t = /^(?:focusinfocus|focusoutblur)$/;
	C.extend(C.event, {
		trigger: function(e, t, n, i) {
			var o, r, s, a, l, c, d, u = [n || S],
				p = v.call(e, "type") ? e.type : e,
				f = v.call(e, "namespace") ? e.namespace.split(".") : [],
				h = d = r = n = n || S;
			if(3 !== n.nodeType && 8 !== n.nodeType && !$t.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[p] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
				if(!i && !c.noBubble && !g(n)) {
					for(s = c.delegateType || p, $t.test(s + p) || (h = h.parentNode); h; h = h.parentNode) u.push(h), r = h;
					r === (n.ownerDocument || S) && u.push(r.defaultView || r.parentWindow || k)
				}
				for(o = 0;
					(h = u[o++]) && !e.isPropagationStopped();) d = h, e.type = 1 < o ? s : c.bindType || p, (l = (Y.get(h, "events") || Object.create(null))[e.type] && Y.get(h, "handle")) && l.apply(h, t), (l = a && h[a]) && l.apply && X(h) && (e.result = l.apply(h, t), !1 === e.result && e.preventDefault());
				return e.type = p, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), t) || !X(n) || a && w(n[p]) && !g(n) && ((r = n[a]) && (n[a] = null), C.event.triggered = p, e.isPropagationStopped() && d.addEventListener(p, At), n[p](), e.isPropagationStopped() && d.removeEventListener(p, At), C.event.triggered = void 0, r && (n[a] = r)), e.result
			}
		},
		simulate: function(e, t, n) {
			e = C.extend(new C.Event, n, {
				type: e,
				isSimulated: !0
			});
			C.event.trigger(e, null, t)
		}
	}), C.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				C.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if(n) return C.event.trigger(e, t, n, !0)
		}
	}), m.focusin || C.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, i) {
		function o(e) {
			C.event.simulate(i, e.target, C.event.fix(e))
		}
		C.event.special[i] = {
			setup: function() {
				var e = this.ownerDocument || this.document || this,
					t = Y.access(e, i);
				t || e.addEventListener(n, o, !0), Y.access(e, i, (t || 0) + 1)
			},
			teardown: function() {
				var e = this.ownerDocument || this.document || this,
					t = Y.access(e, i) - 1;
				t ? Y.access(e, i, t) : (e.removeEventListener(n, o, !0), Y.remove(e, i))
			}
		}
	});
	var jt = k.location,
		Et = {
			guid: Date.now()
		},
		Dt = /\?/;
	C.parseXML = function(e) {
		var t;
		if(!e || "string" != typeof e) return null;
		try {
			t = (new k.DOMParser).parseFromString(e, "text/xml")
		} catch(e) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
	};
	var Nt = /\[\]$/,
		Ht = /\r?\n/g,
		Lt = /^(?:submit|button|image|reset|file)$/i,
		Ot = /^(?:input|select|textarea|keygen)/i;
	C.param = function(e, t) {
		function n(e, t) {
			t = w(t) ? t() : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
		}
		var i, o = [];
		if(null == e) return "";
		if(Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
			n(this.name, this.value)
		});
		else
			for(i in e) ! function n(i, e, o, r) {
				if(Array.isArray(e)) C.each(e, function(e, t) {
					o || Nt.test(i) ? r(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, r)
				});
				else if(o || "object" !== h(e)) r(i, e);
				else
					for(var t in e) n(i + "[" + t + "]", e[t], o, r)
			}(i, e[i], t, n);
		return o.join("&")
	}, C.fn.extend({
		serialize: function() {
			return C.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = C.prop(this, "elements");
				return e ? C.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !C(this).is(":disabled") && Ot.test(this.nodeName) && !Lt.test(e) && (this.checked || !de.test(e))
			}).map(function(e, t) {
				var n = C(this).val();
				return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Ht, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Ht, "\r\n")
				}
			}).get()
		}
	});
	var Pt = /%20/g,
		qt = /#.*$/,
		Mt = /([?&])_=[^&]*/,
		Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		It = /^(?:GET|HEAD)$/,
		zt = /^\/\//,
		Wt = {},
		Bt = {},
		Qt = "*/".concat("*"),
		Ft = S.createElement("a");

	function _t(r) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, i = 0,
				o = e.toLowerCase().match(P) || [];
			if(w(t))
				for(; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
		}
	}

	function Ut(t, i, o, r) {
		var s = {},
			a = t === Bt;

		function l(e) {
			var n;
			return s[e] = !0, C.each(t[e] || [], function(e, t) {
				t = t(i, o, r);
				return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1)
			}), n
		}
		return l(i.dataTypes[0]) || !s["*"] && l("*")
	}

	function Xt(e, t) {
		var n, i, o = C.ajaxSettings.flatOptions || {};
		for(n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
		return i && C.extend(!0, e, i), e
	}
	Ft.href = jt.href, C.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: jt.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Qt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": C.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Xt(Xt(e, C.ajaxSettings), t) : Xt(C.ajaxSettings, e)
		},
		ajaxPrefilter: _t(Wt),
		ajaxTransport: _t(Bt),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var l, c, d, n, u, i, p, f, o, r, h = C.ajaxSetup({}, t),
				g = h.context || h,
				y = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
				v = C.Deferred(),
				m = C.Callbacks("once memory"),
				w = h.statusCode || {},
				s = {},
				a = {},
				b = "canceled",
				x = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if(p) {
							if(!n)
								for(n = {}; t = Rt.exec(d);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
							t = n[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function() {
						return p ? d : null
					},
					setRequestHeader: function(e, t) {
						return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == p && (h.mimeType = e), this
					},
					statusCode: function(e) {
						if(e)
							if(p) x.always(e[x.status]);
							else
								for(var t in e) w[t] = [w[t], e[t]];
						return this
					},
					abort: function(e) {
						e = e || b;
						return l && l.abort(e), T(0, e), this
					}
				};
			if(v.promise(x), h.url = ((e || h.url || jt.href) + "").replace(zt, jt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain) {
				i = S.createElement("a");
				try {
					i.href = h.url, i.href = i.href, h.crossDomain = Ft.protocol + "//" + Ft.host != i.protocol + "//" + i.host
				} catch(e) {
					h.crossDomain = !0
				}
			}
			if(h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), Ut(Wt, h, t, x), p) return x;
			for(o in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !It.test(h.type), c = h.url.replace(qt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Pt, "+")) : (r = h.url.slice(c.length), h.data && (h.processData || "string" == typeof h.data) && (c += (Dt.test(c) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (c = c.replace(Mt, "$1"), r = (Dt.test(c) ? "&" : "?") + "_=" + Et.guid++ + r), h.url = c + r), h.ifModified && (C.lastModified[c] && x.setRequestHeader("If-Modified-Since", C.lastModified[c]), C.etag[c] && x.setRequestHeader("If-None-Match", C.etag[c])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Qt + "; q=0.01" : "") : h.accepts["*"]), h.headers) x.setRequestHeader(o, h.headers[o]);
			if(h.beforeSend && (!1 === h.beforeSend.call(g, x, h) || p)) return x.abort();
			if(b = "abort", m.add(h.complete), x.done(h.success), x.fail(h.error), l = Ut(Bt, h, t, x)) {
				if(x.readyState = 1, f && y.trigger("ajaxSend", [x, h]), p) return x;
				h.async && 0 < h.timeout && (u = k.setTimeout(function() {
					x.abort("timeout")
				}, h.timeout));
				try {
					p = !1, l.send(s, T)
				} catch(e) {
					if(p) throw e;
					T(-1, e)
				}
			} else T(-1, "No Transport");

			function T(e, t, n, i) {
				var o, r, s, a = t;
				p || (p = !0, u && k.clearTimeout(u), l = void 0, d = i || "", x.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
					for(var i, o, r, s, a = e.contents, l = e.dataTypes;
						"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
					if(i)
						for(o in a)
							if(a[o] && a[o].test(i)) {
								l.unshift(o);
								break
							}
					if(l[0] in n) r = l[0];
					else {
						for(o in n) {
							if(!l[0] || e.converters[o + " " + l[0]]) {
								r = o;
								break
							}
							s = s || o
						}
						r = r || s
					}
					if(r) return r !== l[0] && l.unshift(r), n[r]
				}(h, x, n)), !i && -1 < C.inArray("script", h.dataTypes) && (h.converters["text script"] = function() {}), s = function(e, t, n, i) {
					var o, r, s, a, l, c = {},
						d = e.dataTypes.slice();
					if(d[1])
						for(s in e.converters) c[s.toLowerCase()] = e.converters[s];
					for(r = d.shift(); r;)
						if(e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
							if("*" === r) r = l;
							else if("*" !== l && l !== r) {
						if(!(s = c[l + " " + r] || c["* " + r]))
							for(o in c)
								if((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
									!0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
									break
								}
						if(!0 !== s)
							if(s && e.throws) t = s(t);
							else try {
								t = s(t)
							} catch(e) {
								return {
									state: "parsererror",
									error: s ? e : "No conversion from " + l + " to " + r
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(h, s, x, i), i ? (h.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (C.lastModified[c] = n), (n = x.getResponseHeader("etag")) && (C.etag[c] = n)), 204 === e || "HEAD" === h.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, o = s.data, i = !(r = s.error))) : (r = a, !e && a || (a = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || a) + "", i ? v.resolveWith(g, [o, a, x]) : v.rejectWith(g, [x, a, r]), x.statusCode(w), w = void 0, f && y.trigger(i ? "ajaxSuccess" : "ajaxError", [x, h, i ? o : r]), m.fireWith(g, [x, a]), f && (y.trigger("ajaxComplete", [x, h]), --C.active || C.event.trigger("ajaxStop")))
			}
			return x
		},
		getJSON: function(e, t, n) {
			return C.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return C.get(e, void 0, t, "script")
		}
	}), C.each(["get", "post"], function(e, o) {
		C[o] = function(e, t, n, i) {
			return w(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
				url: e,
				type: o,
				dataType: i,
				data: t,
				success: n
			}, C.isPlainObject(e) && e))
		}
	}), C.ajaxPrefilter(function(e) {
		for(var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
	}), C._evalUrl = function(e, t, n) {
		return C.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(e) {
				C.globalEval(e, t, n)
			}
		})
	}, C.fn.extend({
		wrapAll: function(e) {
			return this[0] && (w(e) && (e = e.call(this[0])), e = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
				for(var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(n) {
			return w(n) ? this.each(function(e) {
				C(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = C(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = w(t);
			return this.each(function(e) {
				C(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				C(this).replaceWith(this.childNodes)
			}), this
		}
	}), C.expr.pseudos.hidden = function(e) {
		return !C.expr.pseudos.visible(e)
	}, C.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, C.ajaxSettings.xhr = function() {
		try {
			return new k.XMLHttpRequest
		} catch(e) {}
	};
	var Jt = {
			0: 200,
			1223: 204
		},
		Yt = C.ajaxSettings.xhr();
	m.cors = !!Yt && "withCredentials" in Yt, m.ajax = Yt = !!Yt, C.ajaxTransport(function(o) {
		var r, s;
		if(m.cors || Yt && !o.crossDomain) return {
			send: function(e, t) {
				var n, i = o.xhr();
				if(i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
					for(n in o.xhrFields) i[n] = o.xhrFields[n];
				for(n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
				r = function(e) {
					return function() {
						r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Jt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
							binary: i.response
						} : {
							text: i.responseText
						}, i.getAllResponseHeaders()))
					}
				}, i.onload = r(), s = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
					4 === i.readyState && k.setTimeout(function() {
						r && s()
					})
				}, r = r("abort");
				try {
					i.send(o.hasContent && o.data || null)
				} catch(e) {
					if(r) throw e
				}
			},
			abort: function() {
				r && r()
			}
		}
	}), C.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), C.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return C.globalEval(e), e
			}
		}
	}), C.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), C.ajaxTransport("script", function(n) {
		var i, o;
		if(n.crossDomain || n.scriptAttrs) return {
			send: function(e, t) {
				i = C("<script>").attr(n.scriptAttrs || {}).prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", o = function(e) {
					i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), S.head.appendChild(i[0])
			},
			abort: function() {
				o && o()
			}
		}
	});
	var Gt = [],
		Vt = /(=)\?(?=&|$)|\?\?/;
	C.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Gt.pop() || C.expando + "_" + Et.guid++;
			return this[e] = !0, e
		}
	}), C.ajaxPrefilter("json jsonp", function(e, t, n) {
		var i, o, r, s = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
		if(s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = w(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Vt, "$1" + i) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
			return r || C.error(i + " was not called"), r[0]
		}, e.dataTypes[0] = "json", o = k[i], k[i] = function() {
			r = arguments
		}, n.always(function() {
			void 0 === o ? C(k).removeProp(i) : k[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Gt.push(i)), r && w(o) && o(r[0]), r = o = void 0
		}), "script"
	}), m.createHTMLDocument = ((u = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === u.childNodes.length), C.parseHTML = function(e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((i = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(i)) : t = S), i = !n && [], (n = j.exec(e)) ? [t.createElement(n[1])] : (n = ve([e], t, i), i && i.length && C(i).remove(), C.merge([], n.childNodes)));
		var i
	}, C.fn.load = function(e, t, n) {
		var i, o, r, s = this,
			a = e.indexOf(" ");
		return -1 < a && (i = Tt(e.slice(a)), e = e.slice(0, a)), w(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && C.ajax({
			url: e,
			type: o || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			r = arguments, s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
		}).always(n && function(e, t) {
			s.each(function() {
				n.apply(this, r || [e.responseText, t, e])
			})
		}), this
	}, C.expr.pseudos.animated = function(t) {
		return C.grep(C.timers, function(e) {
			return t === e.elem
		}).length
	}, C.offset = {
		setOffset: function(e, t, n) {
			var i, o, r, s, a = C.css(e, "position"),
				l = C(e),
				c = {};
			"static" === a && (e.style.position = "relative"), r = l.offset(), i = C.css(e, "top"), s = C.css(e, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (o = (a = l.position()).top, a.left) : (o = parseFloat(i) || 0, parseFloat(s) || 0), w(t) && (t = t.call(e, n, C.extend({}, r))), null != t.top && (c.top = t.top - r.top + o), null != t.left && (c.left = t.left - r.left + s), "using" in t ? t.using.call(e, c) : ("number" == typeof c.top && (c.top += "px"), "number" == typeof c.left && (c.left += "px"), l.css(c))
		}
	}, C.fn.extend({
		offset: function(t) {
			if(arguments.length) return void 0 === t ? this : this.each(function(e) {
				C.offset.setOffset(this, t, e)
			});
			var e, n = this[0];
			return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
				top: e.top + n.pageYOffset,
				left: e.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function() {
			if(this[0]) {
				var e, t, n, i = this[0],
					o = {
						top: 0,
						left: 0
					};
				if("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
				else {
					for(t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
					e && e !== i && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - o.top - C.css(i, "marginTop", !0),
					left: t.left - o.left - C.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for(var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
				return e || ie
			})
		}
	}), C.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, o) {
		var r = "pageYOffset" === o;
		C.fn[t] = function(e) {
			return B(this, function(e, t, n) {
				var i;
				return g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n ? i ? i[o] : e[t] : void(i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n)
			}, t, e, arguments.length)
		}
	}), C.each(["top", "left"], function(e, n) {
		C.cssHooks[n] = Je(m.pixelPosition, function(e, t) {
			if(t) return t = Xe(e, n), Fe.test(t) ? C(e).position()[n] + "px" : t
		})
	}), C.each({
		Height: "height",
		Width: "width"
	}, function(s, a) {
		C.each({
			padding: "inner" + s,
			content: a,
			"": "outer" + s
		}, function(i, r) {
			C.fn[r] = function(e, t) {
				var n = arguments.length && (i || "boolean" != typeof e),
					o = i || (!0 === e || !0 === t ? "margin" : "border");
				return B(this, function(e, t, n) {
					var i;
					return g(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? C.css(e, t, o) : C.style(e, t, n, o)
				}, a, n ? e : void 0, n)
			}
		})
	}), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		C.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), C.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
		C.fn[n] = function(e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	});
	var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	C.proxy = function(e, t) {
		var n, i;
		if("string" == typeof t && (i = e[t], t = e, e = i), w(e)) return n = a.call(arguments, 2), (i = function() {
			return e.apply(t || this, n.concat(a.call(arguments)))
		}).guid = e.guid = e.guid || C.guid++, i
	}, C.holdReady = function(e) {
		e ? C.readyWait++ : C.ready(!0)
	}, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = $, C.isFunction = w, C.isWindow = g, C.camelCase = U, C.type = h, C.now = Date.now, C.isNumeric = function(e) {
		var t = C.type(e);
		return("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, C.trim = function(e) {
		return null == e ? "" : (e + "").replace(Kt, "")
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return C
	});
	var Zt = k.jQuery,
		en = k.$;
	return C.noConflict = function(e) {
		return k.$ === C && (k.$ = en), e && k.jQuery === C && (k.jQuery = Zt), C
	}, void 0 === e && (k.jQuery = k.$ = C), C
}), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
	function(t) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], function(e) {
			return t(e, window)
		}) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
	}(function(a, i) {
		"use strict";

		function e(e) {
			return 0 <= function(e, t) {
				for(var n = /^(\d+)\.(\d+)\.(\d+)/, i = n.exec(e) || [], o = n.exec(t) || [], r = 1; r <= 3; r++) {
					if(+o[r] < +i[r]) return 1;
					if(+i[r] < +o[r]) return -1
				}
				return 0
			}(a.fn.jquery, e)
		}
		a.migrateVersion = "3.3.2", i.console && i.console.log && (a && e("3.0.0") || i.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), a.migrateWarnings && i.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), i.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion));
		var n = {};

		function l(e) {
			var t = i.console;
			a.migrateDeduplicateWarnings && n[e] || (n[e] = !0, a.migrateWarnings.push(e), t && t.warn && !a.migrateMute && (t.warn("JQMIGRATE: " + e), a.migrateTrace && t.trace && t.trace()))
		}

		function t(e, t, n, i) {
			Object.defineProperty(e, t, {
				configurable: !0,
				enumerable: !0,
				get: function() {
					return l(i), n
				},
				set: function(e) {
					l(i), n = e
				}
			})
		}

		function o(e, t, n, i) {
			e[t] = function() {
				return l(i), n.apply(this, arguments)
			}
		}
		a.migrateDeduplicateWarnings = !0, a.migrateWarnings = [], void 0 === a.migrateTrace && (a.migrateTrace = !0), a.migrateReset = function() {
			n = {}, a.migrateWarnings.length = 0
		}, "BackCompat" === i.document.compatMode && l("jQuery is not compatible with Quirks Mode");
		var r, s, c, d = {},
			u = a.fn.init,
			p = a.find,
			f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
			h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
			g = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		for(r in a.fn.init = function(e) {
				var t = Array.prototype.slice.call(arguments);
				return "string" == typeof e && "#" === e && (l("jQuery( '#' ) is not a valid selector"), t[0] = []), u.apply(this, t)
			}, a.fn.init.prototype = a.fn, a.find = function(t) {
				var n = Array.prototype.slice.call(arguments);
				if("string" == typeof t && f.test(t)) try {
					i.document.querySelector(t)
				} catch(e) {
					t = t.replace(h, function(e, t, n, i) {
						return "[" + t + n + '"' + i + '"]'
					});
					try {
						i.document.querySelector(t), l("Attribute selector with '#' must be quoted: " + n[0]), n[0] = t
					} catch(e) {
						l("Attribute selector with '#' was not fixed: " + n[0])
					}
				}
				return p.apply(this, n)
			}, p) Object.prototype.hasOwnProperty.call(p, r) && (a.find[r] = p[r]);
		o(a.fn, "size", function() {
			return this.length
		}, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(a, "parseJSON", function() {
			return JSON.parse.apply(null, arguments)
		}, "jQuery.parseJSON is deprecated; use JSON.parse"), o(a, "holdReady", a.holdReady, "jQuery.holdReady is deprecated"), o(a, "unique", a.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(a.expr, "filters", a.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(a.expr, ":", a.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(a, "trim", function(e) {
			return null == e ? "" : (e + "").replace(g, "")
		}, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(a, "nodeName", function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		}, "jQuery.nodeName is deprecated"), o(a, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(a, "isNumeric", function(e) {
			var t = typeof e;
			return("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
		}, "jQuery.isNumeric() is deprecated"), a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
			d["[object " + t + "]"] = t.toLowerCase()
		}), o(a, "type", function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
		}, "jQuery.type is deprecated"), o(a, "isFunction", function(e) {
			return "function" == typeof e
		}, "jQuery.isFunction() is deprecated"), o(a, "isWindow", function(e) {
			return null != e && e === e.window
		}, "jQuery.isWindow() is deprecated")), a.ajax && (s = a.ajax, c = /(=)\?(?=&|$)|\?\?/, a.ajax = function() {
			var e = s.apply(this, arguments);
			return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
		}, e("4.0.0") || a.ajaxPrefilter("+json", function(e) {
			!1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && l("JSON-to-JSONP auto-promotion is deprecated")
		}));
		var y = a.fn.removeAttr,
			v = a.fn.toggleClass,
			m = /\S+/g;

		function w(e) {
			return e.replace(/-([a-z])/g, function(e, t) {
				return t.toUpperCase()
			})
		}
		a.fn.removeAttr = function(e) {
			var n = this;
			return a.each(e.match(m), function(e, t) {
				a.expr.match.bool.test(t) && (l("jQuery.fn.removeAttr no longer sets boolean properties: " + t), n.prop(t, !1))
			}), y.apply(this, arguments)
		};
		var b, x = !(a.fn.toggleClass = function(t) {
				return void 0 !== t && "boolean" != typeof t ? v.apply(this, arguments) : (l("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
					var e = this.getAttribute && this.getAttribute("class") || "";
					e && a.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && a.data(this, "__className__") || "")
				}))
			}),
			T = /^[a-z]/,
			k = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
		a.swap && a.each(["height", "width", "reliableMarginRight"], function(e, t) {
			var n = a.cssHooks[t] && a.cssHooks[t].get;
			n && (a.cssHooks[t].get = function() {
				var e;
				return x = !0, e = n.apply(this, arguments), x = !1, e
			})
		}), a.swap = function(e, t, n, i) {
			var o, r = {};
			for(o in x || l("jQuery.swap() is undocumented and deprecated"), t) r[o] = e.style[o], e.style[o] = t[o];
			for(o in i = n.apply(e, i || []), t) e.style[o] = r[o];
			return i
		}, e("3.4.0") && "undefined" != typeof Proxy && (a.cssProps = new Proxy(a.cssProps || {}, {
			set: function() {
				return l("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
			}
		})), a.cssNumber || (a.cssNumber = {}), b = a.fn.css, a.fn.css = function(e, t) {
			var n, i = this;
			return e && "object" == typeof e && !Array.isArray(e) ? (a.each(e, function(e, t) {
				a.fn.css.call(i, e, t)
			}), this) : ("number" == typeof t && (t = n = w(e), T.test(t) && k.test(t[0].toUpperCase() + t.slice(1)) || a.cssNumber[n] || l('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), b.apply(this, arguments))
		};
		var S, C, A, $, j = a.data;
		a.data = function(e, t, n) {
			var i, o, r;
			if(t && "object" == typeof t && 2 === arguments.length) {
				for(r in i = a.hasData(e) && j.call(this, e), o = {}, t) r !== w(r) ? (l("jQuery.data() always sets/gets camelCased names: " + r), i[r] = t[r]) : o[r] = t[r];
				return j.call(this, e, o), t
			}
			return t && "string" == typeof t && t !== w(t) && (i = a.hasData(e) && j.call(this, e)) && t in i ? (l("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (i[t] = n), i[t]) : j.apply(this, arguments)
		}, a.fx && (A = a.Tween.prototype.run, $ = function(e) {
			return e
		}, a.Tween.prototype.run = function() {
			1 < a.easing[this.easing].length && (l("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), a.easing[this.easing] = $), A.apply(this, arguments)
		}, S = a.fx.interval || 13, C = "jQuery.fx.interval is deprecated", i.requestAnimationFrame && Object.defineProperty(a.fx, "interval", {
			configurable: !0,
			enumerable: !0,
			get: function() {
				return i.document.hidden || l(C), S
			},
			set: function(e) {
				l(C), S = e
			}
		}));
		var E = a.fn.load,
			D = a.event.add,
			N = a.event.fix;

		function H(e) {
			var t = i.document.implementation.createHTMLDocument("");
			return t.body.innerHTML = e, t.body && t.body.innerHTML
		}

		function L(e) {
			var t = e.replace(O, "<$1></$2>");
			t !== e && H(e) !== H(t) && l("HTML tags must be properly nested and closed: " + e)
		}
		a.event.props = [], a.event.fixHooks = {}, t(a.event.props, "concat", a.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), a.event.fix = function(e) {
			var t = e.type,
				n = this.fixHooks[t],
				i = a.event.props;
			if(i.length)
				for(l("jQuery.event.props are deprecated and removed: " + i.join()); i.length;) a.event.addProp(i.pop());
			if(n && !n._migrated_ && (n._migrated_ = !0, l("jQuery.event.fixHooks are deprecated and removed: " + t), (i = n.props) && i.length))
				for(; i.length;) a.event.addProp(i.pop());
			return t = N.call(this, e), n && n.filter ? n.filter(t, e) : t
		}, a.event.add = function(e, t) {
			return e === i && "load" === t && "complete" === i.document.readyState && l("jQuery(window).on('load'...) called after load event occurred"), D.apply(this, arguments)
		}, a.each(["load", "unload", "error"], function(e, t) {
			a.fn[t] = function() {
				var e = Array.prototype.slice.call(arguments, 0);
				return "load" === t && "string" == typeof e[0] ? E.apply(this, e) : (l("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
			}
		}), a.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
			a.fn[n] = function(e, t) {
				return l("jQuery.fn." + n + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
			}
		}), a(function() {
			a(i.document).triggerHandler("ready")
		}), a.event.special.ready = {
			setup: function() {
				this === i.document && l("'ready' event is deprecated")
			}
		}, a.fn.extend({
			bind: function(e, t, n) {
				return l("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n)
			},
			unbind: function(e, t) {
				return l("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
			},
			delegate: function(e, t, n, i) {
				return l("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, i)
			},
			undelegate: function(e, t, n) {
				return l("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			},
			hover: function(e, t) {
				return l("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
			}
		});
		var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
			P = a.htmlPrefilter;
		a.UNSAFE_restoreLegacyHtmlPrefilter = function() {
			a.htmlPrefilter = function(e) {
				return L(e), e.replace(O, "<$1></$2>")
			}
		}, a.htmlPrefilter = function(e) {
			return L(e), P(e)
		};
		var q, M = a.fn.offset;
		a.fn.offset = function() {
			var e = this[0];
			return !e || e.nodeType && e.getBoundingClientRect ? M.apply(this, arguments) : (l("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
		}, a.ajax && (q = a.param, a.param = function(e, t) {
			var n = a.ajaxSettings && a.ajaxSettings.traditional;
			return void 0 === t && n && (l("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = n), q.call(this, e, t)
		});
		var R, I, z = a.fn.andSelf || a.fn.addBack;
		return a.fn.andSelf = function() {
			return l("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), z.apply(this, arguments)
		}, a.Deferred && (R = a.Deferred, I = [
			["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
			["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
			["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
		], a.Deferred = function(e) {
			var r = R(),
				s = r.promise();
			return r.pipe = s.pipe = function() {
				var o = arguments;
				return l("deferred.pipe() is deprecated"), a.Deferred(function(i) {
					a.each(I, function(e, t) {
						var n = "function" == typeof o[e] && o[e];
						r[t[1]](function() {
							var e = n && n.apply(this, arguments);
							e && "function" == typeof e.promise ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === s ? i.promise() : this, n ? [e] : arguments)
						})
					}), o = null
				}).promise()
			}, e && e.call(r, r), r
		}, a.Deferred.exceptionHook = R.exceptionHook), a
	}),
	function(n, d) {
		function a(e, t) {
			return typeof e === t
		}

		function r(e) {
			var t, n = h.className,
				i = p._config.classPrefix || "";
			g && (n = n.baseVal), p._config.enableJSClass && (t = new RegExp("(^|\\s)" + i + "no-js(\\s|$)"), n = n.replace(t, "$1" + i + "js$2")), p._config.enableClasses && (n += " " + i + e.join(" " + i), g ? h.className.baseVal = n : h.className = n)
		}

		function s(e, t) {
			if("object" == typeof e)
				for(var n in e) f(e, n) && s(n, e[n]);
			else {
				var i = (e = e.toLowerCase()).split("."),
					o = p[i[0]];
				if(2 == i.length && (o = o[i[1]]), void 0 !== o) return p;
				t = "function" == typeof t ? t() : t, 1 == i.length ? p[i[0]] = t : (!p[i[0]] || p[i[0]] instanceof Boolean || (p[i[0]] = new Boolean(p[i[0]])), p[i[0]][i[1]] = t), r([(t && 0 != t ? "" : "no-") + i.join("-")]), p._trigger(e, t)
			}
			return p
		}

		function u(e) {
			return "function" != typeof d.createElement ? d.createElement(e) : g ? d.createElementNS.call(d, "http://www.w3.org/2000/svg", e) : d.createElement.apply(d, arguments)
		}
		var l = [],
			c = [],
			e = {
				_version: "3.6.0",
				_config: {
					classPrefix: "",
					enableClasses: !0,
					enableJSClass: !0,
					usePrefixes: !0
				},
				_q: [],
				on: function(e, t) {
					var n = this;
					setTimeout(function() {
						t(n[e])
					}, 0)
				},
				addTest: function(e, t, n) {
					c.push({
						name: e,
						fn: t,
						options: n
					})
				},
				addAsyncTest: function(e) {
					c.push({
						name: null,
						fn: e
					})
				}
			},
			p = function() {};
		p.prototype = e, p = new p;
		var f, i, h = d.documentElement,
			g = "svg" === h.nodeName.toLowerCase(),
			o = e._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
		e._prefixes = o, f = void 0 === (i = {}.hasOwnProperty) || void 0 === i.call ? function(e, t) {
			return t in e && void 0 === e.constructor.prototype[t]
		} : function(e, t) {
			return i.call(e, t)
		}, e._l = {}, e.on = function(e, t) {
			this._l[e] || (this._l[e] = []), this._l[e].push(t), p.hasOwnProperty(e) && setTimeout(function() {
				p._trigger(e, p[e])
			}, 0)
		}, e._trigger = function(e, t) {
			var n;
			this._l[e] && (n = this._l[e], setTimeout(function() {
				for(var e = 0; e < n.length; e++)(0, n[e])(t)
			}, 0), delete this._l[e])
		}, p._q.push(function() {
			e.addTest = s
		}), p.addAsyncTest(function() {
			function n(n, e, i) {
				function t(e) {
					var t = !(!e || "load" !== e.type) && 1 == o.width;
					s(n, "webp" === n && t ? new Boolean(t) : t), i && i(e)
				}
				var o = new Image;
				o.onerror = t, o.onload = t, o.src = e
			}
			var i = [{
					uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
					name: "webp"
				}, {
					uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
					name: "webp.alpha"
				}, {
					uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
					name: "webp.animation"
				}, {
					uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
					name: "webp.lossless"
				}],
				e = i.shift();
			n(e.name, e.uri, function(e) {
				if(e && "load" === e.type)
					for(var t = 0; t < i.length; t++) n(i[t].name, i[t].uri)
			})
		});
		var y = e.testStyles = function(e, t, n, i) {
			var o, r, s, a = "modernizr",
				l = u("div"),
				c = ((s = d.body) || ((s = u(g ? "svg" : "body")).fake = !0), s);
			if(parseInt(n, 10))
				for(; n--;)(o = u("div")).id = i ? i[n] : a + (n + 1), l.appendChild(o);
			return(s = u("style")).type = "text/css", s.id = "s" + a, (c.fake ? c : l).appendChild(s), c.appendChild(l), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(d.createTextNode(e)), l.id = a, c.fake && (c.style.background = "", c.style.overflow = "hidden", r = h.style.overflow, h.style.overflow = "hidden", h.appendChild(c)), e = t(l, e), c.fake ? (c.parentNode.removeChild(c), h.style.overflow = r, h.offsetHeight) : l.parentNode.removeChild(l), !!e
		};
		p.addTest("touch", function() {
				var t, e;
				return "ontouchstart" in n || n.DocumentTouch && d instanceof DocumentTouch ? t = !0 : (e = ["@media (", o.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join(""), y(e, function(e) {
					t = 9 === e.offsetTop
				})), t
			}),
			function() {
				var e, t, n, i, o, r, s;
				for(s in c)
					if(c.hasOwnProperty(s)) {
						if(e = [], (t = c[s]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
							for(n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
						for(i = a(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) 1 === (r = e[o].split(".")).length ? p[r[0]] = i : (!p[r[0]] || p[r[0]] instanceof Boolean || (p[r[0]] = new Boolean(p[r[0]])), p[r[0]][r[1]] = i), l.push((i ? "" : "no-") + r.join("-"))
					}
			}(), r(l), delete e.addTest, delete e.addAsyncTest;
		for(var t = 0; t < p._q.length; t++) p._q[t]();
		n.Modernizr = p
	}(window, document),
	function(e) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
	}(function(c) {
		"use strict";
		var i, s = window.Slick || {};
		i = 0, (s = function(e, t) {
			var n = this;
			n.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: c(e),
				appendDots: c(e),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
				nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function(e, t) {
					return c('<button type="button" />').text(t + 1)
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				focusOnChange: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnFocus: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, n.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				scrolling: !1,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				swiping: !1,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, e = c(e).data("slick") || {}, n.options = c.extend({}, n.defaults, t, e), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = i++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
		}).prototype.activateADA = function() {
			this.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			})
		}, s.prototype.addSlide = s.prototype.slickAdd = function(e, t, n) {
			var i = this;
			if("boolean" == typeof t) n = t, t = null;
			else if(t < 0 || t >= i.slideCount) return !1;
			i.unload(), "number" == typeof t ? 0 === t && 0 === i.$slides.length ? c(e).appendTo(i.$slideTrack) : n ? c(e).insertBefore(i.$slides.eq(t)) : c(e).insertAfter(i.$slides.eq(t)) : !0 === n ? c(e).prependTo(i.$slideTrack) : c(e).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function(e, t) {
				c(t).attr("data-slick-index", e)
			}), i.$slidesCache = i.$slides, i.reinit()
		}, s.prototype.animateHeight = function() {
			var e, t = this;
			1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0), t.$list.animate({
				height: e
			}, t.options.speed))
		}, s.prototype.animateSlide = function(e, t) {
			var n = {},
				i = this;
			i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (e = -e), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
				left: e
			}, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
				top: e
			}, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), c({
				animStart: i.currentLeft
			}).animate({
				animStart: e
			}, {
				duration: i.options.speed,
				easing: i.options.easing,
				step: function(e) {
					e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(n)
				},
				complete: function() {
					t && t.call()
				}
			})) : (i.applyTransition(), e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)", i.$slideTrack.css(n), t && setTimeout(function() {
				i.disableTransition(), t.call()
			}, i.options.speed))
		}, s.prototype.getNavTarget = function() {
			var e = this.options.asNavFor;
			return e && null !== e && (e = c(e).not(this.$slider)), e
		}, s.prototype.asNavFor = function(t) {
			var e = this.getNavTarget();
			null !== e && "object" == typeof e && e.each(function() {
				var e = c(this).slick("getSlick");
				e.unslicked || e.slideHandler(t, !0)
			})
		}, s.prototype.applyTransition = function(e) {
			var t = this,
				n = {};
			!1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, (!1 === t.options.fade ? t.$slideTrack : t.$slides.eq(e)).css(n)
		}, s.prototype.autoPlay = function() {
			var e = this;
			e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
		}, s.prototype.autoPlayClear = function() {
			this.autoPlayTimer && clearInterval(this.autoPlayTimer)
		}, s.prototype.autoPlayIterator = function() {
			var e = this,
				t = e.currentSlide + e.options.slidesToScroll;
			e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
		}, s.prototype.buildArrows = function() {
			var e = this;
			!0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
				"aria-disabled": "true",
				tabindex: "-1"
			}))
		}, s.prototype.buildDots = function() {
			var e, t, n = this;
			if(!0 === n.options.dots) {
				for(n.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) t.append(c("<li />").append(n.options.customPaging.call(this, n, e)));
				n.$dots = t.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
			}
		}, s.prototype.buildOut = function() {
			var e = this;
			e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
				c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
			}), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
		}, s.prototype.buildRows = function() {
			var e, t, n, i = this,
				o = document.createDocumentFragment(),
				r = i.$slider.children();
			if(1 < i.options.rows) {
				for(n = i.options.slidesPerRow * i.options.rows, t = Math.ceil(r.length / n), e = 0; e < t; e++) {
					for(var s = document.createElement("div"), a = 0; a < i.options.rows; a++) {
						for(var l = document.createElement("div"), c = 0; c < i.options.slidesPerRow; c++) {
							var d = e * n + (a * i.options.slidesPerRow + c);
							r.get(d) && l.appendChild(r.get(d))
						}
						s.appendChild(l)
					}
					o.appendChild(s)
				}
				i.$slider.empty().append(o), i.$slider.children().children().children().css({
					width: 100 / i.options.slidesPerRow + "%",
					display: "inline-block"
				})
			}
		}, s.prototype.checkResponsive = function(e, t) {
			var n, i, o, r = this,
				s = !1,
				a = r.$slider.width(),
				l = window.innerWidth || c(window).width();
			if("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
				for(n in i = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
				null !== i ? null !== r.activeBreakpoint && i === r.activeBreakpoint && !t || (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), s = i), e || !1 === s || r.$slider.trigger("breakpoint", [r, s])
			}
		}, s.prototype.changeSlide = function(e, t) {
			var n, i = this,
				o = c(e.currentTarget);
			switch(o.is("a") && e.preventDefault(), o.is("li") || (o = o.closest("li")), n = i.slideCount % i.options.slidesToScroll != 0 ? 0 : (i.slideCount - i.currentSlide) % i.options.slidesToScroll, e.data.message) {
				case "previous":
					r = 0 == n ? i.options.slidesToScroll : i.options.slidesToShow - n, i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide - r, !1, t);
					break;
				case "next":
					r = 0 == n ? i.options.slidesToScroll : n, i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide + r, !1, t);
					break;
				case "index":
					var r = 0 === e.data.index ? 0 : e.data.index || o.index() * i.options.slidesToScroll;
					i.slideHandler(i.checkNavigable(r), !1, t), o.children().trigger("focus");
					break;
				default:
					return
			}
		}, s.prototype.checkNavigable = function(e) {
			var t = this.getNavigableIndexes(),
				n = 0;
			if(e > t[t.length - 1]) e = t[t.length - 1];
			else
				for(var i in t) {
					if(e < t[i]) {
						e = n;
						break
					}
					n = t[i]
				}
			return e
		}, s.prototype.cleanUpEvents = function() {
			var e = this;
			e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
		}, s.prototype.cleanUpSlideEvents = function() {
			var e = this;
			e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
		}, s.prototype.cleanUpRows = function() {
			var e;
			1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
		}, s.prototype.clickHandler = function(e) {
			!1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
		}, s.prototype.destroy = function(e) {
			var t = this;
			t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
				c(this).attr("style", c(this).data("originalStyling"))
			}), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
		}, s.prototype.disableTransition = function(e) {
			var t = {};
			t[this.transitionType] = "", (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(e)).css(t)
		}, s.prototype.fadeSlide = function(e, t) {
			var n = this;
			!1 === n.cssTransitions ? (n.$slides.eq(e).css({
				zIndex: n.options.zIndex
			}), n.$slides.eq(e).animate({
				opacity: 1
			}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
				opacity: 1,
				zIndex: n.options.zIndex
			}), t && setTimeout(function() {
				n.disableTransition(e), t.call()
			}, n.options.speed))
		}, s.prototype.fadeSlideOut = function(e) {
			var t = this;
			!1 === t.cssTransitions ? t.$slides.eq(e).animate({
				opacity: 0,
				zIndex: t.options.zIndex - 2
			}, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
				opacity: 0,
				zIndex: t.options.zIndex - 2
			}))
		}, s.prototype.filterSlides = s.prototype.slickFilter = function(e) {
			var t = this;
			null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
		}, s.prototype.focusHandler = function() {
			var n = this;
			n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
				e.stopImmediatePropagation();
				var t = c(this);
				setTimeout(function() {
					n.options.pauseOnFocus && (n.focussed = t.is(":focus"), n.autoPlay())
				}, 0)
			})
		}, s.prototype.getCurrent = s.prototype.slickCurrentSlide = function() {
			return this.currentSlide
		}, s.prototype.getDotCount = function() {
			var e = this,
				t = 0,
				n = 0,
				i = 0;
			if(!0 === e.options.infinite)
				if(e.slideCount <= e.options.slidesToShow) ++i;
				else
					for(; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			else if(!0 === e.options.centerMode) i = e.slideCount;
			else if(e.options.asNavFor)
				for(; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
			return i - 1
		}, s.prototype.getLeft = function(e) {
			var t, n, i = this,
				o = 0;
			return i.slideOffset = 0, t = i.$slides.first().outerHeight(!0), !0 === i.options.infinite ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1, n = -1, !0 === i.options.vertical && !0 === i.options.centerMode && (2 === i.options.slidesToShow ? n = -1.5 : 1 === i.options.slidesToShow && (n = -2)), o = t * i.options.slidesToShow * n), i.slideCount % i.options.slidesToScroll != 0 && e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (o = e > i.slideCount ? (i.slideOffset = (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth * -1, (i.options.slidesToShow - (e - i.slideCount)) * t * -1) : (i.slideOffset = i.slideCount % i.options.slidesToScroll * i.slideWidth * -1, i.slideCount % i.options.slidesToScroll * t * -1))) : e + i.options.slidesToShow > i.slideCount && (i.slideOffset = (e + i.options.slidesToShow - i.slideCount) * i.slideWidth, o = (e + i.options.slidesToShow - i.slideCount) * t), i.slideCount <= i.options.slidesToShow && (o = i.slideOffset = 0), !0 === i.options.centerMode && i.slideCount <= i.options.slidesToShow ? i.slideOffset = i.slideWidth * Math.floor(i.options.slidesToShow) / 2 - i.slideWidth * i.slideCount / 2 : !0 === i.options.centerMode && !0 === i.options.infinite ? i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth : !0 === i.options.centerMode && (i.slideOffset = 0, i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)), t = !1 === i.options.vertical ? e * i.slideWidth * -1 + i.slideOffset : e * t * -1 + o, !0 === i.options.variableWidth && (o = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow), t = !0 === i.options.rtl ? o[0] ? -1 * (i.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === i.options.centerMode && (o = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow + 1), t = !0 === i.options.rtl ? o[0] ? -1 * (i.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, t += (i.$list.width() - o.outerWidth()) / 2)), t
		}, s.prototype.getOption = s.prototype.slickGetOption = function(e) {
			return this.options[e]
		}, s.prototype.getNavigableIndexes = function() {
			for(var e = this, t = 0, n = 0, i = [], o = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, 2 * e.slideCount); t < o;) i.push(t), t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			return i
		}, s.prototype.getSlick = function() {
			return this
		}, s.prototype.getSlideCount = function() {
			var n, i = this,
				o = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0;
			return !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(e, t) {
				if(t.offsetLeft - o + c(t).outerWidth() / 2 > -1 * i.swipeLeft) return n = t, !1
			}), Math.abs(c(n).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
		}, s.prototype.goTo = s.prototype.slickGoTo = function(e, t) {
			this.changeSlide({
				data: {
					message: "index",
					index: parseInt(e)
				}
			}, t)
		}, s.prototype.init = function(e) {
			var t = this;
			c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
		}, s.prototype.initADA = function() {
			var n = this,
				i = Math.ceil(n.slideCount / n.options.slidesToShow),
				o = n.getNavigableIndexes().filter(function(e) {
					return 0 <= e && e < n.slideCount
				});
			n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			}), null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e) {
				var t = o.indexOf(e);
				c(this).attr({
					role: "tabpanel",
					id: "slick-slide" + n.instanceUid + e,
					tabindex: -1
				}), -1 !== t && c(this).attr({
					"aria-describedby": "slick-slide-control" + n.instanceUid + t
				})
			}), n.$dots.attr("role", "tablist").find("li").each(function(e) {
				var t = o[e];
				c(this).attr({
					role: "presentation"
				}), c(this).find("button").first().attr({
					role: "tab",
					id: "slick-slide-control" + n.instanceUid + e,
					"aria-controls": "slick-slide" + n.instanceUid + t,
					"aria-label": e + 1 + " of " + i,
					"aria-selected": null,
					tabindex: "-1"
				})
			}).eq(n.currentSlide).find("button").attr({
				"aria-selected": "true",
				tabindex: "0"
			}).end());
			for(var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++) n.$slides.eq(e).attr("tabindex", 0);
			n.activateADA()
		}, s.prototype.initArrowEvents = function() {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
				message: "previous"
			}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
				message: "next"
			}, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
		}, s.prototype.initDotEvents = function() {
			var e = this;
			!0 === e.options.dots && (c("li", e.$dots).on("click.slick", {
				message: "index"
			}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
		}, s.prototype.initSlideEvents = function() {
			var e = this;
			e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
		}, s.prototype.initializeEvents = function() {
			var e = this;
			e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(e.setPosition)
		}, s.prototype.initUI = function() {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
		}, s.prototype.keyHandler = function(e) {
			var t = this;
			e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
				data: {
					message: !0 === t.options.rtl ? "next" : "previous"
				}
			}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
				data: {
					message: !0 === t.options.rtl ? "previous" : "next"
				}
			}))
		}, s.prototype.lazyLoad = function() {
			function e(e) {
				c("img[data-lazy]", e).each(function() {
					var e = c(this),
						t = c(this).attr("data-lazy"),
						n = c(this).attr("data-srcset"),
						i = c(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
						o = document.createElement("img");
					o.onload = function() {
						e.animate({
							opacity: 0
						}, 100, function() {
							n && (e.attr("srcset", n), i && e.attr("sizes", i)), e.attr("src", t).animate({
								opacity: 1
							}, 200, function() {
								e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
							}), r.$slider.trigger("lazyLoaded", [r, e, t])
						})
					}, o.onerror = function() {
						e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
					}, o.src = t
				})
			}
			var t, n, i, r = this;
			if(!0 === r.options.centerMode ? i = !0 === r.options.infinite ? (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, i = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (0 < n && n--, i <= r.slideCount && i++)), t = r.$slider.find(".slick-slide").slice(n, i), "anticipated" === r.options.lazyLoad)
				for(var o = n - 1, s = i, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++) o < 0 && (o = r.slideCount - 1), t = (t = t.add(a.eq(o))).add(a.eq(s)), o--, s++;
			e(t), r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
		}, s.prototype.loadSlider = function() {
			var e = this;
			e.setPosition(), e.$slideTrack.css({
				opacity: 1
			}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
		}, s.prototype.next = s.prototype.slickNext = function() {
			this.changeSlide({
				data: {
					message: "next"
				}
			})
		}, s.prototype.orientationChange = function() {
			this.checkResponsive(), this.setPosition()
		}, s.prototype.pause = s.prototype.slickPause = function() {
			this.autoPlayClear(), this.paused = !0
		}, s.prototype.play = s.prototype.slickPlay = function() {
			var e = this;
			e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
		}, s.prototype.postSlide = function(e) {
			var t = this;
			t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
		}, s.prototype.prev = s.prototype.slickPrev = function() {
			this.changeSlide({
				data: {
					message: "previous"
				}
			})
		}, s.prototype.preventDefault = function(e) {
			e.preventDefault()
		}, s.prototype.progressiveLazyLoad = function(e) {
			e = e || 1;
			var t, n, i, o, r = this,
				s = c("img[data-lazy]", r.$slider);
			s.length ? (t = s.first(), n = t.attr("data-lazy"), i = t.attr("data-srcset"), o = t.attr("data-sizes") || r.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
				i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, t, n]), r.progressiveLazyLoad()
			}, s.onerror = function() {
				e < 3 ? setTimeout(function() {
					r.progressiveLazyLoad(e + 1)
				}, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n]), r.progressiveLazyLoad())
			}, s.src = n) : r.$slider.trigger("allImagesLoaded", [r])
		}, s.prototype.refresh = function(e) {
			var t = this,
				n = t.slideCount - t.options.slidesToShow;
			!t.options.infinite && t.currentSlide > n && (t.currentSlide = n), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), n = t.currentSlide, t.destroy(!0), c.extend(t, t.initials, {
				currentSlide: n
			}), t.init(), e || t.changeSlide({
				data: {
					message: "index",
					index: n
				}
			}, !1)
		}, s.prototype.registerBreakpoints = function() {
			var e, t, n, i = this,
				o = i.options.responsive || null;
			if("array" === c.type(o) && o.length) {
				for(e in i.respondTo = i.options.respondTo || "window", o)
					if(n = i.breakpoints.length - 1, o.hasOwnProperty(e)) {
						for(t = o[e].breakpoint; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
						i.breakpoints.push(t), i.breakpointSettings[t] = o[e].settings
					}
				i.breakpoints.sort(function(e, t) {
					return i.options.mobileFirst ? e - t : t - e
				})
			}
		}, s.prototype.reinit = function() {
			var e = this;
			e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
		}, s.prototype.resize = function() {
			var e = this;
			c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
				e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
			}, 50))
		}, s.prototype.removeSlide = s.prototype.slickRemove = function(e, t, n) {
			var i = this;
			if(e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
			i.unload(), (!0 === n ? i.$slideTrack.children() : i.$slideTrack.children(this.options.slide).eq(e)).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
		}, s.prototype.setCSS = function(e) {
			var t, n, i = this,
				o = {};
			!0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)
		}, s.prototype.setDimensions = function() {
			var e = this;
			!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
				padding: "0px " + e.options.centerPadding
			}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
				padding: e.options.centerPadding + " 0px"
			})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
			var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
			!1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
		}, s.prototype.setFade = function() {
			var n, i = this;
			i.$slides.each(function(e, t) {
				n = i.slideWidth * e * -1, !0 === i.options.rtl ? c(t).css({
					position: "relative",
					right: n,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				}) : c(t).css({
					position: "relative",
					left: n,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				})
			}), i.$slides.eq(i.currentSlide).css({
				zIndex: i.options.zIndex - 1,
				opacity: 1
			})
		}, s.prototype.setHeight = function() {
			var e, t = this;
			1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0), t.$list.css("height", e))
		}, s.prototype.setOption = s.prototype.slickSetOption = function() {
			var e, t, n, i, o, r = this,
				s = !1;
			if("object" === c.type(arguments[0]) ? (n = arguments[0], s = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (n = arguments[0], i = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[n] = i;
			else if("multiple" === o) c.each(n, function(e, t) {
				r.options[e] = t
			});
			else if("responsive" === o)
				for(t in i)
					if("array" !== c.type(r.options.responsive)) r.options.responsive = [i[t]];
					else {
						for(e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === i[t].breakpoint && r.options.responsive.splice(e, 1), e--;
						r.options.responsive.push(i[t])
					}
			s && (r.unload(), r.reinit())
		}, s.prototype.setPosition = function() {
			var e = this;
			e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
		}, s.prototype.setProps = function() {
			var e = this,
				t = document.body.style;
			e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
		}, s.prototype.setSlideClasses = function(e) {
			var t, n, i, o = this,
				r = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
			o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode ? (n = o.options.slidesToShow % 2 == 0 ? 1 : 0, i = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (i <= e && e <= o.slideCount - 1 - i ? o.$slides.slice(e - i + n, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (t = o.options.slidesToShow + e, r.slice(t - i + 1 + n, t + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? r.eq(r.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && r.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : r.length <= o.options.slidesToShow ? r.addClass("slick-active").attr("aria-hidden", "false") : (i = o.slideCount % o.options.slidesToShow, t = !0 === o.options.infinite ? o.options.slidesToShow + e : e, (o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? r.slice(t - (o.options.slidesToShow - i), t + i) : r.slice(t, t + o.options.slidesToShow)).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
		}, s.prototype.setupInfinite = function() {
			var e, t, n, i = this;
			if(!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (t = null, i.slideCount > i.options.slidesToShow)) {
				for(n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; --e) t = e - 1, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
				for(e = 0; e < n + i.slideCount; e += 1) t = e, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
				i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
					c(this).attr("id", "")
				})
			}
		}, s.prototype.interrupt = function(e) {
			e || this.autoPlay(), this.interrupted = e
		}, s.prototype.selectHandler = function(e) {
			e = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"), e = (e = parseInt(e.attr("data-slick-index"))) || 0;
			this.slideCount <= this.options.slidesToShow ? this.slideHandler(e, !1, !0) : this.slideHandler(e)
		}, s.prototype.slideHandler = function(e, t, n) {
			var i, o, r, s, a = this;
			if(t = t || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === e))
				if(!1 === t && a.asNavFor(e), i = e, s = a.getLeft(i), t = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? t : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (e < 0 || e > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (i = a.currentSlide, !0 !== n ? a.animateSlide(t, function() {
					a.postSlide(i)
				}) : a.postSlide(i));
				else if(!1 === a.options.infinite && !0 === a.options.centerMode && (e < 0 || e > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (i = a.currentSlide, !0 !== n ? a.animateSlide(t, function() {
				a.postSlide(i)
			}) : a.postSlide(i));
			else {
				if(a.options.autoplay && clearInterval(a.autoPlayTimer), o = i < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + i : i >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : i - a.slideCount : i, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, o]), t = a.currentSlide, a.currentSlide = o, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (r = (r = a.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== n ? (a.fadeSlideOut(t), a.fadeSlide(o, function() {
					a.postSlide(o)
				})) : a.postSlide(o), void a.animateHeight();
				!0 !== n ? a.animateSlide(s, function() {
					a.postSlide(o)
				}) : a.postSlide(o)
			}
		}, s.prototype.startLoad = function() {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
		}, s.prototype.swipeDirection = function() {
			var e = this,
				t = e.touchObject.startX - e.touchObject.curX,
				n = e.touchObject.startY - e.touchObject.curY,
				t = Math.atan2(n, t);
			return(t = Math.round(180 * t / Math.PI)) < 0 && (t = 360 - Math.abs(t)), t <= 45 && 0 <= t || t <= 360 && 315 <= t ? !1 === e.options.rtl ? "left" : "right" : 135 <= t && t <= 225 ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? 35 <= t && t <= 135 ? "down" : "up" : "vertical"
		}, s.prototype.swipeEnd = function(e) {
			var t, n, i = this;
			if(i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1;
			if(i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
			if(!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
				switch(n = i.swipeDirection()) {
					case "left":
					case "down":
						t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
						break;
					case "right":
					case "up":
						t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
				}
				"vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
			} else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
		}, s.prototype.swipeHandler = function(e) {
			var t = this;
			if(!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch(t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
				case "start":
					t.swipeStart(e);
					break;
				case "move":
					t.swipeMove(e);
					break;
				case "end":
					t.swipeEnd(e)
			}
		}, s.prototype.swipeMove = function(e) {
			var t, n, i = this,
				o = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
			return !(!i.dragging || i.scrolling || o && 1 !== o.length) && (t = i.getLeft(i.currentSlide), i.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, i.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curX - i.touchObject.startX, 2))), n = Math.round(Math.sqrt(Math.pow(i.touchObject.curY - i.touchObject.startY, 2))), !i.options.verticalSwiping && !i.swiping && 4 < n ? !(i.scrolling = !0) : (!0 === i.options.verticalSwiping && (i.touchObject.swipeLength = n), o = i.swipeDirection(), void 0 !== e.originalEvent && 4 < i.touchObject.swipeLength && (i.swiping = !0, e.preventDefault()), n = (!1 === i.options.rtl ? 1 : -1) * (i.touchObject.curX > i.touchObject.startX ? 1 : -1), !0 === i.options.verticalSwiping && (n = i.touchObject.curY > i.touchObject.startY ? 1 : -1), e = i.touchObject.swipeLength, (i.touchObject.edgeHit = !1) === i.options.infinite && (0 === i.currentSlide && "right" === o || i.currentSlide >= i.getDotCount() && "left" === o) && (e = i.touchObject.swipeLength * i.options.edgeFriction, i.touchObject.edgeHit = !0), !1 === i.options.vertical ? i.swipeLeft = t + e * n : i.swipeLeft = t + e * (i.$list.height() / i.listWidth) * n, !0 === i.options.verticalSwiping && (i.swipeLeft = t + e * n), !0 !== i.options.fade && !1 !== i.options.touchMove && (!0 === i.animating ? (i.swipeLeft = null, !1) : void i.setCSS(i.swipeLeft))))
		}, s.prototype.swipeStart = function(e) {
			var t, n = this;
			if(n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return !(n.touchObject = {});
			void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
		}, s.prototype.unfilterSlides = s.prototype.slickUnfilter = function() {
			var e = this;
			null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
		}, s.prototype.unload = function() {
			var e = this;
			c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}, s.prototype.unslick = function(e) {
			this.$slider.trigger("unslick", [this, e]), this.destroy()
		}, s.prototype.updateArrows = function() {
			var e = this;
			Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
		}, s.prototype.updateDots = function() {
			var e = this;
			null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
		}, s.prototype.visibility = function() {
			this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
		}, c.fn.slick = function() {
			for(var e, t = this, n = arguments[0], i = Array.prototype.slice.call(arguments, 1), o = t.length, r = 0; r < o; r++)
				if("object" == typeof n || void 0 === n ? t[r].slick = new s(t[r], n) : e = t[r].slick[n].apply(t[r].slick, i), void 0 !== e) return e;
			return t
		}
	});