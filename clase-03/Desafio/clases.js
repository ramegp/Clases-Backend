"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operaciones = void 0;
var Operaciones = /** @class */ (function () {
    function Operaciones(operacion, num1, num2) {
        var _this = this;
        this.resultado = 0;
        this.sum = function () { _this.resultado = _this.number1 + _this.number2; };
        this.subtract = function () { _this.resultado = _this.number1 - _this.number2; };
        this.divide = function () { _this.resultado = _this.number1 / _this.number2; };
        this.multiply = function () { _this.resultado = _this.number1 * _this.number2; };
        this.result = function () { return { cuenta: "" + _this.number1 + _this.operacion + _this.number2, resultado: _this.resultado }; };
        this.number1 = num1;
        this.number2 = num2;
        this.operacion = operacion;
        switch (operacion) {
            case '+':
                this.sum();
                break;
            case '-':
                this.subtract();
                break;
            case '/':
                this.divide();
                break;
            case '*':
                this.multiply();
                break;
            default:
                break;
        }
    }
    return Operaciones;
}());
exports.Operaciones = Operaciones;
