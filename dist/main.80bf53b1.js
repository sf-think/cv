// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var string = "\n/* \u5148\u6765\u4E00\u4E2A div */\n#div1 {\n  width: 200px;\n  height: 200px;\n}\n/* \u753B\u4E00\u4E2A\u516B\u5366\u56FE \n** \u5148\u753B\u4E00\u4E2A\u5706\n*/\n#div1 {\n  border-radius: 50%;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n  border: none;\n  background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(253,253,255,1) 50%, rgba(255,255,255,1) 100%);\n}\n/* \u52A0\u4E24\u4E2A\u7403 */\n#div1::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: black;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n\n}\n\n#div1::before {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: white;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n\n}\n\n/* \u8F6C\u8D77\u6765 */\n#div1 {\n  animation: 3s linear infinite rotate;\n}\n@keyframes rotate{\n  0% {\n    transform: rotate(0turn);\n  }\n  100% {\n    transform: rotate(1turn);\n  }\n}\n";
var string2 = "";
var n = 0;
var step = function step() {
  setTimeout(function () {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    // 手机端下拉滚动条
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      n = n + 1;
      step();
    }
  }, 50);
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.80bf53b1.map