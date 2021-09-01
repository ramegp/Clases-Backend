class Color {
    random(min:number,max:number){
        return Math.floor(Math.random() * (max-min) - min);
    }
    generarColor() {
        let rojo = this.random(0,255);
        let verde = this.random(0,255);
        let azul = this.random(0,255);

        return `RGB(${rojo},${verde},${azul})`
    }
    addId(id:Number){
        let o = {
            name:"code3r"
        }
        return {...o,id}
    }
}

let my_color = new Color()
console.log(my_color.generarColor());
console.log(my_color.addId(2));


