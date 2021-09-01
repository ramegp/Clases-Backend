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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        this.readFile = function () { return __awaiter(_this, void 0, void 0, function () {
            var contenido, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fs.promises.readFile(__dirname + ("/" + this.filePath), 'utf-8')];
                    case 1:
                        contenido = _a.sent();
                        return [2 /*return*/, JSON.parse(contenido)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.saveFile = function (obj) {
            //Guarda un producto en un archivo.
            /*
                {
                    title:"",
                    price:54,
                    thumbnail:'url'
                }
            */
            var objSave = __assign(__assign({}, obj), { id: _this.obtenerCantidadProductos() + 1 });
            var products = JSON.parse(_this.fs.readFileSync("./productos.txt", 'utf-8'));
            products.push(objSave);
            _this.fs.writeFileSync("./productos.txt", JSON.stringify(products, null, '\t'));
        };
        this.deleteFile = function () {
            //Borra el archivo con todos los producos
            _this.fs.unlink('./test.txt', function (error) {
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
console.log();
arch.readFile().then(function (e) { console.log(e); })["catch"](function (e) { console.log(e); });
arch.saveFile({
    title: "Cartuchera",
    price: 100,
    thumbnail: 'url'
});
arch.deleteFile();
