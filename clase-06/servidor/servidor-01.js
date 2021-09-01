const http = require('http');

const generateRandom = (min,max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}

function returnSaludo() {
    let fecha = new Date()
    let hora = fecha.getHours()
    if ((hora >= 6) && (hora <= 12)) {
        return 'Buenos Dias'
    } else {
        if ((hora >= 13) && (hora <= 19)) {
            return 'Buenas Tardes'
        } else {
            if ((hora >= 20) && (hora <= 23)) {
                return 'Buenas noches'
            }
        }
    }
}


let server = http.createServer(function (peticion, respuesta) {
    const {url,method,headers} = peticion;
    console.log(headers)

    let ob = []
    for (let i = 0; i < 10; i++) {
        ob.push({
            id: generateRandom(1,10),
            producto: `Producto A ${generateRandom(10,20)}`
        })
        
    }
    respuesta.end(JSON.stringify(ob))
})
server.listen(3000, function () {
    console.log('Tu servidor esta listo en el puerto ' + this.address().port)
})