const express = require('express')


const app = express()

const http = require('http').Server(app)
//le pasamos la constante http
const io = require('socket.io')(http)


//indicamos que cargamos los archivos estaticos que se encuentran en la carpeta public
app.use(express.static(__dirname+'/public'))

//esta ruta carga nuetro archivo index.html en la raiz de la misma

app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:__dirname})
})


http.listen(3000,()=>{console.log('Server on')})

const msj = []

app.get('/mensajes',(req,res)=>{
    res.json(msj)
})

io.on('connection',(socket)=>{
    //"connection" se ejecuta la primera vez que se abre una nueva conexion
    console.log('Usuario conectado: '+ socket.id)
    // se imprimira la primera vez
    socket.emit('mi mensaje','este es mi primer mensaje desde el servidor')
    socket.on('notificacion',data=>{
        console.log(data)
    })

    socket.on('keyup', (data)=>{
        console.log(data)
        io.emit('user_keyup',{...data,id:socket.id})//Object.assign(data,{id:socket.id})
        msj.push({msj:data.value,id:socket.id})
    })


})
