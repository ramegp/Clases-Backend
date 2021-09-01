/* const moment = require('moment');
let fecha1 = moment([2021, 08, 21]);
let fecha2 = moment([2018, 02, 10]);
let resultado = fecha1.diff(fecha2, 'days');
console.log(resultado); */

const express = require('express')

const app = express();
const puerto = 8000;
const server = app.listen(puerto,()=>{
    console.log(`servidor inicializado en el puerto ${server.address().port}`)
})