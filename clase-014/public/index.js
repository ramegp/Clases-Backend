

document.addEventListener('DOMContentLoaded', function () {
    const socket = io() //ya podemos usar el socket desde el cliente
    
    const addMessage = () => {
        let message = {
            author: document.querySelector('#username').value,
            text: document.querySelector('#text').value
        }
        socket.emit('new-message',message)
        return false;
    }

    document.querySelector("#form").addEventListener('submit',function (e) {
        e.preventDefault()
        addMessage(e)
        
    })

    const render = (data)=> {
        let html = data.map(e=>
        (`
        <div>
            <strong>${e.text}</strong>
            <em>${e.author}</em>
        </div>
        `)).join(" ")
        document.getElementById("mensajes").innerHTML = html
    }

    
    
    socket.on('mi mensaje', data => {
        console.log(data)
        render(data)
    })
    
    
    socket.on('message',(data)=>{
        render(data)
    })
})