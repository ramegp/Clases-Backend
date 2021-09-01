let valores = [true, 5, false, "hola", "adios", 2];

function devolverTextoMasLargo(array) {
    /* let max = 0;
    let devolver;
    for (const elem of array) {
        if ((typeof (elem) === "string") && (elem.length > max)) {
            max = elem.length;
            devolver = elem
        }
    }
    return devolver; */

    return array.filter(e => typeof e === "string").reduce((a, b) => { return a.length > b.length ? a : b })

}
function positionElemFalse(array) {
    /* for (let i = 0; i < array.length; i++) {
        if ((typeof (array[i]) === "boolean") && (array[i] === false)) {
            return i
        }

    } */

    return array.findIndex(e => e === false);

}
function operacion(array, op) {
    let removeNumber = array.filter(e => typeof e === 'number');
    
    switch (op) {
        case "suma":
            return removeNumber[0] + removeNumber[1]
            break;
        case "resta":
            return removeNumber[0] - removeNumber[1]
            break;
        case "div":
            return removeNumber[0] / removeNumber[1]
            break;
        case "mult":
            return removeNumber[0] * removeNumber[1]
            break;

        default:
            break;
    }

    /* 
    let num1, num2;
    for (const elem of array) {
        if ((typeof (elem) === "number") && (num1 === undefined)) {
            num1 = elem
        } else {
            if ((typeof (elem) === "number") && (num2 === undefined)) {
                num2 = elem
            }
        }
    }

    switch (op) {
        case "suma":
            return num1 + num2
            break;
        case "resta":
            return num1 - num2
            break;
        case "div":
            return num1 / num2
            break;
        case "mult":
            return num1 * num2
            break;

        default:
            break;
    } */

}
console.log(devolverTextoMasLargo(valores));
console.log(positionElemFalse(valores));
console.log(operacion(valores, "mult"));



