/* // nodemon -x "clear & node" index.js
//nodemon --quiet index.js

const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generate() {

    let objeto = {};
    for (let i = 0; i < 1000; i++) {
        let numberRandom = generateRandom(1, 20)
        if (numberRandom in objeto)
            objeto[numberRandom]++;
        else
            objeto[numberRandom] = 1;
    }
    return objeto
}

//console.log(generate())


let productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.12 },
    { id: 2, nombre: 'Carpeta', precio: 32.12 },
    { id: 3, nombre: 'Goma', precio: 500.12 },
    { id: 4, nombre: 'Lapicera', precio: 2.12 },

]

let resultadoProducto = {
    promedio: productos.map(p => p.precio).reduce((a, b) => a + b, 0) / productos.length,
    precioTotal: productos.map(p => p.precio).reduce((a, b) => a + b, 0),
    productoMenorPrecio: productos.sort((a, b) => a.precio > b.precio ? 1 : -1)[0],
    productoMayorPrecio: productos.sort((a, b) => a.precio > b.precio ? -1 : 1)[0]
}
console.log(
    {  
        string:productos.map(p => p.nombre).reduce((a,b)=>a+b+',',''),
        promedio: productos.map(p => p.precio).reduce((a, b) => a + b, 0) / productos.length,
        precioTotal: productos.map(p => p.precio).reduce((a, b) => a + b, 0),
        productoMenorPrecio: productos.sort((a, b) => a.precio > b.precio ? 1 : -1)[0],
        productoMayorPrecio: productos.sort((a, b) => a.precio > b.precio ? -1 : 1)[0]
    }
)
console.log(productos.filter(a=> a.id % 2 == 0));
 */

/* 
const http = require('http');
let server = http.createServer(function (peticion, respuesta) {
    const {url,method,headers} = peticion;
    console.log(headers)
    respuesta.end(`${url} - ${method} ${returnSaludo()}`)
})
server.listen(3000, function () {
    console.log('Tu servidor esta listo en el puerto ' + this.address().port)
})
 */

/* 
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
} */

const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const generateProductoRandom = ()=>{
    return {
        id: generateRandom(1,10),
        title:`Producto ${generateRandom(1,10)}`,
        price: generateRandom(0.00,9999.9),
        thumbnail:`Foto ${generateRandom(1,10)}`
    }
}
const http = require('http');
let server = http.createServer(function (peticion, respuesta) {
    const {url,method,headers} = peticion;
    console.log(headers)
    respuesta.end(`${JSON.stringify(generateProductoRandom(),null,'\t')}`)
})
server.listen(3000, function () {
    console.log('Tu servidor esta listo en el puerto ' + this.address().port)
})
