var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min) - min);
    };
    Color.prototype.generarColor = function () {
        var rojo = this.random(0, 255);
        var verde = this.random(0, 255);
        var azul = this.random(0, 255);
        return "RGB(" + rojo + "," + verde + "," + azul + ")";
    };
    Color.prototype.addId = function (id) {
        var o = {
            name: "code3r"
        };
        return __assign(__assign({}, o), { id: id });
    };
    return Color;
}());
var my_color = new Color();
console.log(my_color.generarColor());
console.log(my_color.addId(2));
