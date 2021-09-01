let tiempo = (ms) => {
   
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Soy un ws")
            //resolve("Acierto")
            reject("error de la promesa")
        },ms)
    })
}

async function incio() {
    
    /* tiempo(2000).then(r=>{
        console.log(r)
        console.log("Despues de la funcion")
    }).catch(e=>{
        console.log(e)
    }) */

    try {
        let resultado = await tiempo(2000)
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }

    
}

incio()