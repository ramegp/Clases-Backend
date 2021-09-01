function tiempo(ms,callback) {
    
    setTimeout(()=>{
        callback()
    },ms)

    console.log("la funcion tiempo ha terminado")
}

const handle = () => console.log("Finalizo la operacion...")
tiempo(2000,handle)