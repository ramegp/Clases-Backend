

document.addEventListener('DOMContentLoaded', function () {
    const socket = io() //ya podemos usar el socket desde el cliente

    const inp = document.getElementById('mensaje')
    const my_template = document.getElementById('my_template')
    const mensajes = []
    const to_render = document.getElementById('my_render');

    inp.addEventListener('keyup',(e)=>{
        if( e.keyCode === 13){
            socket.emit('keyup',{value:e.target.value})
            e.target.value = ''
        }
    })
    socket.on('user_keyup',(data)=>{
        mensajes.push(data)
        const template = ejs.compile(my_template.innerHTML);
        to_render.innerHTML = template({items:mensajes})
        console.log(data)
    })
    socket.on('mi mensaje', data => {
        console.log(data)
        socket.emit('notificacion', 'msj recibido')
    })

    
})