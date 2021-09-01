"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// npx babel origen.js -o destino.js -w

var Color = function () {
    function Color() {
        _classCallCheck(this, Color);
    }

    _createClass(Color, [{
        key: "random",
        value: function random(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
    }, {
        key: "generarColor",
        value: function generarColor() {
            var rojo = this.random(0, 255);
            var verde = this.random(0, 255);
            var azul = this.random(0, 255);

            return "RGB(" + rojo + "," + verde + "," + azul + ")";
        }
    }]);

    return Color;
}();

var mi_color = new Color();
console.log(mi_color.generarColor());
