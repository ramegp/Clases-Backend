function operacion(a,b,callback) {
    return callback(a,b)
}

let sum = (a,b)=> a+b

let subtract = (a,b)=>a-b

let multiply = (a,b)=>a*b

console.log(operacion(3,4,multiply))