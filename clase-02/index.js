function test(params) {
    
    if (true) {
        var a = 'a'; //con var la sube y sale del bloque de creacion
        let b = 'b';// esta creada solo en el bloque if
    }
    console.log(a)
    //console.log(b)
}
test()
var nombre= 'tom';
const rouco ={
    nombre :"Rouco",
    especie:"Gato",
    saludar(){
        console.log(`Miauu me llamo ${this.nombre}`);
        console.log(this === rouco)
    }
}

rouco.saludar()

let saludar = rouco.saludar;
saludar()

function probandoParametros() {
    console.log(arguments)
    for (const i of arguments) {
        console.log(i)
    }
}

probandoParametros('hola','chau','que haces','puto')