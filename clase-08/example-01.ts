import express from 'express';
import moment from 'moment';
import fs from 'fs';

const app = express();
const puerto = 8001;
const server = app.listen(puerto,()=>{
    console.log(`servidor inicializado en el puerto ${server.address()}`)
})

app.get('/',(req,res)=>{
    res.json({msg:'text'})
})

app.get('/mundo',(req,res)=>{
    res.send('<h1 style="color:red">Hola mundo</h1>')
})

app.get('/fyh',(req,res)=>{
    res.json({fyh:moment().format('DD/MM/YYYY HH:mm')})
})

app.get('/visitas',(req,res)=>{
    res.json({sarlanga:"hola"})
})

app.get('/productos',(req,res)=>{
    let rand = (min:number, max:number):number => {
        return Math.floor(Math.random()*(max-min)+min)
    }

    fs.promises.readFile('./productos.txt').then(data => data.toString('utf-8')).then(datos => {
        const json = JSON.parse(datos)

        res.json({item:json[rand(0,json.length-1)]})})
})