(function() {
    if (window.$fsx) {
        return;
    };
    var $fsx = window.$fsx = {}
    $fsx.f = {}
    var ajaxCache = {};
    function aj(url, cb) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == 4) {
                var err;
                if (this.status !== 200) {
                    err = { code: this.status, msg: this.statusText }
                }
                cb(err, this.responseText, request.getResponseHeader("Content-Type"));
            }
        };
        request.open("GET", url, true);
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.send();
    }
    var bMapping = {"c":{"b":"./","s":"./"},"i":{"b6e6cd61":["b6e6cd61.js",1]}};
    function evaluateModule(id, input, type) {
        if (/javascript/.test(type)) {
            var fn = new Function('module', 'exports', input);
            var moduleExports = {};
            var moduleObject = { exports: moduleExports };
            fn(moduleObject, moduleExports);
            return moduleObject.exports;
        }
        return input;
    }
    function req(url, cb) {
        aj(url, cb);
    }
    var $cache = {}
    $fsx.l = function(id) {
        return new Promise(function(resolve, reject) {
            if ($cache[id]) { return resolve($cache[id]) }
            if (bMapping.i && bMapping.i[id]) {
                var data = bMapping.i[id];
                var path = bMapping.c.b;
                req(path + data[0], function(err, result) {
                    if (!err) { new Function(result)(); }
                    $cache[id] = $fsx.r(data[1]);
                    !err ? resolve($cache[id]) : reject(err);
                });
            } else {
                req(id, function(err, result, ctype) {
                    if (!err) {
                        resolve($cache[id] = evaluateModule(id, result, ctype));
                    } else {
                        reject(err);
                    }
                });
            }
        });
    }
    // cached modules
    $fsx.m = {};
    $fsx.r = function(id) {
        var cached = $fsx.m[id];
        // resolve if in cache
        if (cached) {
            return cached.m.exports;
        }
        var file = $fsx.f[id];
        if (!file)
            return;
        cached = $fsx.m[id] = {};
        cached.exports = {};
        cached.m = { exports: cached.exports };
        file(cached.m, cached.exports);
        return cached.m.exports;
    };
})();