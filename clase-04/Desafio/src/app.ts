const time = (second:number)=> new Promise((resolv,reject)=>{
    setTimeout(()=>{resolv(1)},second*1000)
})

async function mostrarTexto(str:string,second:number=1,amount:number,callback:()=>void) {
    
    let words = str.split(" ");
    let numberOfWords = amount + words.length;
    for (const word of words) {
        console.log(word)
        await time(second)
    }
    callback()
    
    return numberOfWords;

}

mostrarTexto("hola como estas ramiro",undefined,0,()=>{console.log("------Termino primer texto------")})
.then((amount)=>{mostrarTexto("Julia ciro campeon",3,amount,()=>{console.log(`------Termino segundo texto------`)})
.then((amount)=>{mostrarTexto("OtroParrafo OtroParrafo OtroParrafo",2,amount,()=>{console.log(`------Termino tercer texto------`)})
.then((total)=>{console.log(`Termino todo el Proceso cantidad de palabras ${total}`)})})
})
