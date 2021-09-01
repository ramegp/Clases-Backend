const fs = require('fs');

console.log("antes")
const txt = fs.readFileSync("./texto.txt",'utf-8');
console.log(txt)
console.log("despues")
console.log(__dirname+'/texto.js')

//sobreescribir un file
const n = fs.writeFileSync("./texto2.txt",'archivo de texto 2')

//agregar a un file
const appendFile = fs.appendFileSync("./texto2.txt",'\r\n2da linea')
