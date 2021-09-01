
document.addEventListener("DOMContentLoaded", () => {
    let id = document.getElementById('inp');
    let texto = document.getElementById('texto');
    const { Observable, fromEvent, throwError, of } = rxjs;
    const { filter, map, mergeMap, retry, finalize, tap } = rxjs.operators;

    const input = document.getElementById("inp");
    const showText = document.getElementById('texto');
    const finishProcesses = () => {
        input.value = "";
        input.disabled = true;
        showText.textContent = "";
    };
    const observable = new Observable((subscriber) => {
        try {
            const keyboard = fromEvent(input, "keyup").pipe(
                tap((e) => {
                    const valueInput = e.target.value;
                    if (valueInput === "error") subscriber.error("Error ingresado");
                    if (valueInput === "complete") subscriber.complete();
                })
            );
            keyboard.subscribe(subscriber);

            setTimeout(() => {
                subscriber.complete();
            }, 30000);
        } catch (error) {
            subscriber.error(error);
        }
    });

    observable.subscribe({
        next(e) {
            const TargetAsArr = e.target.value.split("");
            showText.textContent = TargetAsArr.reverse().join("");
        },
        complete() {
            finishProcesses();
            console.log("completado.");
        },
        error(error) {
            console.error(error);
        },
    });
})



/* const webService = new Promise((res, rej) => {
    setTimeout(() => {
        res({ msg: 'hola soy un ws', code: 1 })
    }, 1500)
})


const { Observable } = rxjs;
const { filter, map } = rxjs.operators;

const observable = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
    webService.then(e => observer.next(e))
}).pipe(filter(e => e > 2))

observable.subscribe({
    error: (err => console.log(err)),
    next: (e) => { console.log(e) },
    complete: (e) => console.log('Completado .....')
})

observable.subscribe((e) => {
    console.log('Soy otro: ', e)
})

 */

/* const observable = fromEvent(id,'keyup').pipe(map(e => e.target.value.split("").reverse().join("")))
    
    observable.subscribe((e)=>{
        //console.log('keyup',e.target.value)
        texto.innerHTML = e

        if( e.split("").reverse().join("") == 'complete')console.log('Completo')
    })

    setTimeout(()=>{
        observable.unsubscribe()
    },10000) */
    

    /* const observable = fromEvent(id,'keyup').pipe(mergeMap(texto =>{
        if(texto.target.value == 'error')
            return throwError('error.....')
        return of(texto.target.value)
    }))
 */
    /* 
        const observable = new Observable((suscriber) => {
    
            let dato = document.getElementById('inp').value;
            console.log(dato)
            if (dato == "error") {
                suscriber.error("Error de entrada uwu");
            } else if (dato == "complete") {
                suscriber.complete();
            }
            suscriber.next(dato)
    
        })
        observable.subscribe({
            error(err) { console.log(err); finalizar() },
            next(texto) { console.log(texto) },
            complete(texto) { console.log('Finalizoo...') }
        }) */

