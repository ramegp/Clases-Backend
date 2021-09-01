// npx babel origen.js -o destino.js -w

class Color {
    random(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    generarColor() {
        let rojo = this.random(0, 255);
        let verde = this.random(0, 255);
        let azul = this.random(0, 255);

        return `RGB(${rojo},${verde},${azul})`
    }
    
}

let mi_color = new Color()
console.log(mi_color.generarColor());