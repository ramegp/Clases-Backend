
async function operacion (op: string, num1: number, num2: number) {

    
    switch (op) {
        case '+':
            let function1 = await import('./suma');
        return ({resultado: function1.sum(num1, num2),operando:op,number1:num1,number2:num2})
            break;
        case '-':
            let function2 = await import('./resta')
            return ({resultado: function2.subtract(num1, num2),operando:op,number1:num1,number2:num2})
            break;
        
        default:
            break;
    }
}

function operaciones() {
    operacion('+', 5, 2).then(res => { console.log(`Resultado de la cuenta ${res?.number1} ${res?.operando} ${res?.number2} es ${res?.resultado}`) });
    operacion('-', 5, 2).then(res => { console.log(`Resultado de la cuenta ${res?.number1} ${res?.operando} ${res?.number2} es ${res?.resultado}`) });
}

operaciones()

