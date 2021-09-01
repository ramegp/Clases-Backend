import * as express from 'express';

//import * as fs from 'fs';


let app = express()
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))

let frase = "hola como estas todos";


app.get('/hello', (req: any, res: any) => {
    console.log(req.query)
    if (Object.entries(req.query).length > 0)
        res.json({ msg: `Los parametros son ${req.query}` })
    else
        res.json({ msg: 'No mandaste parametros' })
    res.send("hola a todos")
})

app.get('/saludo/:nombre', (req: any, res: any) => {
    res.send(req.params.nombre)
})

app.get('/usuarios/:id', (req: any, res: any) => {
    res.send("hola a todos")
})

app.post('/usuarios/:id', (req: any, res: any) => {
    res.send("hola a todos")
})
//-------------------------------------
app.get('/api/getFrase', (req: any, res: any) => {
    res.send(frase)
})

app.get('/api/getLetra/:num', (req: any, res: any) => {
    if (!isNaN(req.params.num)) {
        let num = parseInt(req.params.num, 10);
        if (num >= 0 && num <= frase.length - 1)
            res.send(frase[req.params.num - 1]);
        else
            res.send('Numero fuera de rango')

    }
    else
        res.send('no es un numero')
})

app.get('/api/getPalabra/:num', (req: any, res: any) => {
    res.send(frase.split(' ')[req.params.num - 1]);
})

app.post('/api/misdatos', (req: any, res: any) => {
    res.json(req.body)
})

app.post('/api/guardar', (req: any, res: any) => {
    let arr = frase.split(' ');
    arr.push(req.body.palabra);
    frase = arr.join(' ');
    res.send(frase);

    //frase = [...frase.split(' '),req.body.palabra].join(' ');
})

app.post('/api/update/:num', (req: any, res: any) => {
    let arr = frase.split(' ');
    arr[req.params.num - 1] = req.body.palabra;
    frase = arr.join(' ')
    res.send(frase)
})

app.post('/api/delete/:num', (req: any, res: any) => {
    let arr = frase.split(' ');
    arr.splice(req.params.num,1);
    frase = arr.join(' ')
    res.send(frase)
})

//------------------------------------
app.listen(5005, () => {
    console.log('iniciado en puerto 5005')
})