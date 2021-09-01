class Calendario {
    constructor(){
        this.meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    }

    mostrarMeses(){
        for (const m of this.meses) {
            console.log(m)
        }
    }
    getNumeroMes(mes){
        let position = this.meses.findIndex(elem => elem === mes); 
        if (position >= 0) {
            return position +1
        } else {

            return position
            
        }
    }
    getLetrasMes(){
        let accumulator = '';
        for (const elem of this.meses) {
            accumulator = accumulator + elem.slice(0,2);
        }
        return accumulator
    }
}

let calendario = new Calendario();
calendario.mostrarMeses();
console.log(calendario.getNumeroMes("junio"));
console.log(calendario.getLetrasMes());