function numberRandom(min, max) {
    return Math.floor(Math.random()*(max-min))+min;
}

function* Random(min, max) {
    let count = 0;
    //el yield nos va pausando el while true a medida que vamos llamando
    while(true){
        yield{
            order: count++,
            numero: numberRandom(min,max),
            fecha: new Date().toString()
        }
        
    } 
}

let gen = Random(100,200);

console.log(gen.next().value);
console.log(gen.next().value)
console.log(gen.next().value)