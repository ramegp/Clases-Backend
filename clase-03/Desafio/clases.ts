export class Operaciones {

    private number1: number;
    private number2: number;
    private operacion:string;
    private resultado: number = 0;

    constructor(operacion: string, num1: number, num2: number) {
        this.number1 = num1;
        this.number2 = num2;
        this.operacion = operacion;

        switch (operacion) {
            case '+':
                this.sum()
                break;
            case '-':
                this.subtract()
                break;
            case '/':
                this.divide()
                break;
            case '*':
                this.multiply()
                break;
            default:
                break;
        }
    }

    private sum = () => { this.resultado = this.number1 + this.number2 };
    private subtract = () => { this.resultado = this.number1 - this.number2 };
    private divide = () => { this.resultado = this.number1 / this.number2 };
    private multiply = () => { this.resultado = this.number1 * this.number2 };

    public result = () => { return {cuenta:`${this.number1}${this.operacion}${this.number2}`,resultado:this.resultado} }

}