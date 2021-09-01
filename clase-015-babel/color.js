"use strict";

// npx babel origen.js -o destino.js -w

var random = function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

var generarColor = function generarColor() {
    var rojo = random(0, 255);
    var verde = random(0, 255);
    var azul = random(0, 255);

    return "RGB(" + rojo + "," + verde + "," + azul + ")";
};

console.log(generarColor());
