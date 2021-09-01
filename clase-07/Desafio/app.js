"use strict";
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
var Archivo = /** @class */ (function () {
    function Archivo(path) {
        var _this = this;
        if (path === void 0) { path = ''; }
        this.fs = require('fs');
        this.obtenerCantidadProductos = function () {
            //Obtiene la cantidad de productos del archivo para generar el id automatico
            var contenido = _this.fs.readFileSync(__dirname + ("/" + _this.filePath), 'utf-8');
            return JSON.parse(contenido).length;
        };
        this.readFile = function () {
            //devuelve los productos del archivo si es que existe
            try {
                var contenido = _this.fs.readFileSync(__dirname + ("/" + _this.filePath), 'utf-8');
                return JSON.parse(contenido);
            }
            catch (error) {
                return [];
            }
        };
        this.saveFile = function (obj) {
            //Guarda un producto en un archivo.
            var objSave = __assign(__assign({}, obj), { id: _this.obtenerCantidadProductos() + 1 });
            var products = JSON.parse(_this.fs.readFileSync("./productos.txt", 'utf-8'));
            products.push(objSave);
            _this.fs.writeFileSync("./productos.txt", JSON.stringify(products, null, '\t'));
        };
        this.deleteFile = function () {
            //Borra el archivo con todos los producos
            _this.fs.unlink(__dirname + ("/" + './text.txt'), function (error) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("Deleted");
                }
            });
        };
        this.filePath = path;
    }
    return Archivo;
}());
var arch = new Archivo("productos.txt");
console.log(arch.readFile());
arch.saveFile({
    title: "Cartuchera",
    price: 100,
    thumbnail: 'url'
});
arch.deleteFile();
