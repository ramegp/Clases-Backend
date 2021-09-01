const express = require('express')
const app = express()
/* 
app.get('/datos', (req, res) => {
    let { min, nivel, max, titulo } = req.query
    console.log(req.query)
    if (true) {
        nivel = (nivel - min) * 100 / (max - min)
        res.render('hello', { mensaje: titulo, min, max, nivel })
    }
    else
        res.send('fuera de rango')

}) */
app.use(express.urlencoded())
app.use(express.json())
const lista = [];
app.get('/form', (req, res) => {
    res.render('form', { lista })
})

app.post('/datos', (req, res) => {
    let { nombre, apellido, edad } = req.body
    lista.push({ nombre, apellido })
    console.log(req.body)
    res.json(lista)
})


app.get('/hello', (req, res) => {
    let { min, nivel, max, titulo } = req.query
    res.render('index', {
        lista: [
            {
                name: "BSAS",
                temp: 35
            },
            {
                name: "tucuman",
                temp: 60
            }
        ],
        msg: 'hola',
        status: true,
        title: 'Mi primer',
        min,
        max,
        nivel
    })
})

app.use(express.static(__dirname + '/public'));

app.set('views', './views')
//app.set('view engine', 'pug')
app.set('view engine', 'ejs')
app.listen(3030, () => {
    console.log("listen 3030")
})