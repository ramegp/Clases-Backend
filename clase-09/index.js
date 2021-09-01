"use strict";
exports.__esModule = true;
var express = require("express");
//import * as fs from 'fs';
var app = express();
app.use(express.json());
app.use(express.text());
var frase = "hola como estas todos";
app.get('/hello', function (req, res) {
    console.log(req.query);
    if (Object.entries(req.query).length > 0)
        res.json({ msg: "Los parametros son " + req.query });
    else
        res.json({ msg: 'No mandaste parametros' });
    res.send("hola a todos");
});
app.get('/saludo/:nombre', function (req, res) {
    res.send(req.params.nombre);
});
app.get('/usuarios/:id', function (req, res) {
    res.send("hola a todos");
});
app.post('/usuarios/:id', function (req, res) {
    res.send("hola a todos");
});
//-------------------------------------
app.get('/api/getFrase', function (req, res) {
    res.send(frase);
});
app.get('/api/getLetra/:num', function (req, res) {
    if (!isNaN(req.params.num)) {
        var num = parseInt(req.params.num, 10);
        if (num >= 0 && num <= frase.length - 1)
            res.send(frase[req.params.num - 1]);
        else
            res.send('Numero fuera de rango');
    }
    else
        res.send('no es un numero');
});
app.get('/api/getPalabra/:num', function (req, res) {
    res.send(frase.split(' ')[req.params.num - 1]);
});
app.post('/api/misdatos', function (req, res) {
    res.json(req.body);
});
app.post('/api/guardar', function (req, res) {
    var arr = frase.split(' ');
    arr.push(req.body.palabra);
    frase = arr.join(' ');
    res.send(frase);
    //frase = [...frase.split(' '),req.body.palabra].join(' ');
});
app.post('/api/update/:num', function (req, res) {
    var arr = frase.split(' ');
    arr[req.params.num - 1] = req.body.palabra;
    frase = arr.join(' ');
    res.send(frase);
});
app.post('/api/delete/:num', function (req, res) {
    var arr = frase.split(' ');
    arr.splice(req.params.num, 1);
    frase = arr.join(' ');
    res.send(frase);
});
//------------------------------------
app.listen(5005, function () {
    console.log('iniciado en puerto 5005');
});
