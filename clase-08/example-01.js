"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var moment_1 = __importDefault(require("moment"));
var fs_1 = __importDefault(require("fs"));
var app = express_1.default();
var puerto = 8001;
var server = app.listen(puerto, function () {
    console.log("servidor inicializado en el puerto " + server.address());
});
app.get('/', function (req, res) {
    res.json({ msg: 'text' });
});
app.get('/mundo', function (req, res) {
    res.send('<h1 style="color:red">Hola mundo</h1>');
});
app.get('/fyh', function (req, res) {
    res.json({ fyh: moment_1.default().format('DD/MM/YYYY HH:mm') });
});
app.get('/visitas', function (req, res) {
    res.json({ sarlanga: "hola" });
});
app.get('/productos', function (req, res) {
    var rand = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    fs_1.default.promises.readFile('./productos.txt').then(function (data) { return data.toString('utf-8'); }).then(function (datos) {
        var json = JSON.parse(datos);
        res.json({ item: json[rand(0, json.length - 1)] });
    });
});
