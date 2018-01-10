(function($fsx){
// default/index.jsx
$fsx.f[0] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
const hyperapp_1 = $fsx.r(2);
hyperapp_1.app({
    view: 'default',
    lazyViews: {}
}, {
    setView: view => state => {
        return { view: view };
    },
    loadLazyView: ({view, name}) => (state, actions) => {
        view.then(view => actions.setLazyView({
            view,
            name
        }));
    },
    setLazyView: ({view, name}) => state => {
        return { lazyViews: { [name]: view } };
    }
}, (state, actions) => hyperapp_1.h('div', null, hyperapp_1.h('pre', null, JSON.stringify(state, null, 2)), getView(state.view, state.lazyViews, actions.setView, actions.loadLazyView)), document.body);
const getView = (view, lazyViews, setView, loadLazyView) => {
    switch (view) {
    case 'lazy':
        if (lazyViews[view]) {
            return lazyViews[view];
        } else {
            loadLazyView({
                view: $fsx.l('b6e6cd61'),
                name: 'lazy'
            });
            return hyperapp_1.h('div', null, lazyViews[view] ? lazyViews[view].Lazyview : 'loading');
        }
    case 'default':
    default:
        return hyperapp_1.h('button', { onclick: () => setView('lazy') }, 'Switch to lazy view');
    }
};
}
// hyperapp/dist/hyperapp.js
$fsx.f[2] = function(module,exports){
!function (e, n) {
    'object' == 'object' && 'undefined' != 'object' ? n(exports) : 'function' == 'undefined' && define.amd || n(e.hyperapp = {});
}(this, function (e) {
    e.h = function (e, n) {
        for (var r, o = [], t = [], i = arguments.length; i-- > 2;)
            t.push(arguments[i]);
        for (; t.length;)
            if (Array.isArray(r = t.pop()))
                for (i = r.length; i--;)
                    t.push(r[i]);
            else
                null == r || !0 === r || !1 === r || o.push(r);
        return 'string' == typeof e ? {
            name: e,
            props: n || {},
            children: o
        } : e(n || {}, o);
    }, e.app = function (e, n, r, o) {
        function t(e, n) {
            return e && {
                name: e.nodeName.toLowerCase(),
                props: {},
                children: n.call(e.childNodes, function (e) {
                    return 3 === e.nodeType ? e.nodeValue : t(e, n);
                })
            };
        }
        function i(t) {
            for (y = !y, t = r(e, n), o && !y && (N = v(o, N, w, w = t)); t = g.pop();)
                t();
        }
        function l() {
            y || (y = !y, setTimeout(i));
        }
        function u(e, n) {
            var r = {};
            for (var o in e)
                r[o] = e[o];
            for (var o in n)
                r[o] = n[o];
            return r;
        }
        function f(e, n, r, o) {
            return e.length ? (o[e[0]] = 1 < e.length ? f(e.slice(1), n, r[e[0]], {}) : n, u(r, o)) : n;
        }
        function c(e, n) {
            for (var r = 0; r < e.length; r++)
                n = n[e[r]];
            return n;
        }
        function p(n, r, o) {
            for (var t in o)
                'function' == typeof o[t] ? function (t, i) {
                    o[t] = function (t) {
                        return r = c(n, e), 'function' == typeof (t = i(t)) && (t = t(r, o)), t && t !== r && !t.then && l(e = f(n, u(r, t), e, {})), t;
                    };
                }(t, o[t]) : p(n.concat(t), r[t] = r[t] || {}, o[t] = u(o[t]));
        }
        function s(e) {
            return e && e.props ? e.props.key : null;
        }
        function a(e, n, r, o) {
            if ('key' === n);
            else if ('style' === n)
                for (var t in u(o, r))
                    e[n][t] = null == r || null == r[t] ? '' : r[t];
            else {
                try {
                    e[n] = null == r ? '' : r;
                } catch (e) {
                }
                'function' != typeof r && (null == r || !1 === r ? e.removeAttribute(n) : e.setAttribute(n, r));
            }
        }
        function d(e, n) {
            var r = 'string' == typeof e || 'number' == typeof e ? document.createTextNode(e) : (n = n || 'svg' === e.name) ? document.createElementNS('http://www.w3.org/2000/svg', e.name) : document.createElement(e.name);
            if (e.props) {
                e.props.oncreate && g.push(function () {
                    e.props.oncreate(r);
                });
                for (var o = 0; o < e.children.length; o++)
                    r.appendChild(d(e.children[o], n));
                for (var t in e.props)
                    a(r, t, e.props[t]);
            }
            return r;
        }
        function h(e, n, r) {
            if (r = n.props) {
                for (var o = 0; o < n.children.length; o++)
                    h(e.childNodes[o], n.children[o]);
                r.ondestroy && r.ondestroy(e);
            }
            return e;
        }
        function m(e, n, r, o) {
            function t() {
                e.removeChild(h(n, r));
            }
            r.props && (o = r.props.onremove) ? o(n, t) : t();
        }
        function v(e, n, r, o, t, i) {
            if (o === r);
            else if (null == r)
                n = e.insertBefore(d(o, t), n);
            else if (o.name && o.name === r.name) {
                !function (e, n, r) {
                    for (var o in u(n, r))
                        r[o] !== ('value' === o || 'checked' === o ? e[o] : n[o]) && a(e, o, r[o], n[o]);
                    r.onupdate && g.push(function () {
                        r.onupdate(e, n);
                    });
                }(n, r.props, o.props);
                for (var l = [], f = {}, c = {}, p = 0; p < r.children.length; p++)
                    l[p] = n.childNodes[p], null != (w = s(y = r.children[p])) && (f[w] = [
                        l[p],
                        y
                    ]);
                p = 0;
                for (var h = 0; h < o.children.length;) {
                    var y = r.children[p], N = o.children[h], w = s(y), b = s(N);
                    if (c[w])
                        p++;
                    else if (null == b)
                        null == w && (v(n, l[p], y, N, t), h++), p++;
                    else {
                        var k = f[b] || [];
                        w === b ? (v(n, k[0], k[1], N, t), p++) : k[0] ? v(n, n.insertBefore(k[0], l[p]), k[1], N, t) : v(n, l[p], null, N, t), h++, c[b] = N;
                    }
                }
                for (; p < r.children.length;)
                    null == s(y = r.children[p]) && m(n, l[p], y), p++;
                for (var p in f)
                    c[f[p][1].props.key] || m(n, f[p][0], f[p][1]);
            } else
                o.name === r.name ? n.nodeValue = o : (n = e.insertBefore(d(o, t), i = n), m(e, i, r));
            return n;
        }
        var y, g = [], N = o && o.children[0], w = t(N, [].map);
        return l(p([], e = u(e), n = u(n))), n;
    };
});
}
$fsx.r(0)
})($fsx);