const fs = require('fs');

const leerArchivo = (file) => new Promise((res,rej)=>{
    fs.readFile(file,'utf-8',function (err,data) {
        if (err){
            rej("error....")
        }else{
            res(data)
        }
    })
})
leerArchivo('./texto2.txt').then(e=>console.log(e)).catch(e=>console.log(e))


//crear una carpeta
//si la carpeta existe da error
/* fs.mkdir('prueba',(err,data)=>{
    if (err) {
        console.log(err)
    } else {
        console.log('creada la carpeta')
    }
}) */

