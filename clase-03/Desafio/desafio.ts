

async function test (op: string, num1: number, num2: number) {
    
    let opciones = await import('./clases')
    let aux = new opciones.Operaciones(op,num1,num2)
    return aux.result()

}

test('+',5,5).then(res => console.log(res))
test('-',5,5).then(res => console.log(res))
test('/',5,5).then(res => console.log(res))
test('*',5,5).then(res => console.log(res))