import express from "express";

import {Persona} from "./lib/clases";

const operaciones = require('.lib/funciones.js');

const person = new Persona('Ramiro','asdasd');


const app = express()

app.get('/',(req,res)=>{
    res.send({timeES6: operaciones.getTime()})
})

app.listen(5005,()=>{
    console.log("Servidor Escuchando 5005");
    
})