console.log("Hola");
(function () {
    console.log("funcion");
    return "termino"
})();

let persona1 = {
    name: "Ramiro",
    apellido: "Gonzalez Perez",
    edad: 30,
    hijos: true
}

console.log(persona1)


let fechaString = "13/7/2021"
function agregarHora(p){
    p = p + " 21:00"
    console.log(p)
}
agregarHora(fechaString);
console.log(fechaString);
function modificarPersona(o){
    o.name = o.name + " Ezequiel";
    console.log(o)
}
modificarPersona(persona1)
console.log(persona1)