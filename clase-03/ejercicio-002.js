/* let time = (ms) => new Promise((res,rej)=>{
    setTimeout(()=>{res()},ms)
})

async function af(params) {
    let o = {
        nombre :"ramiro",
        edad :35
    }

    for (let i = 0; i < 5; i++) {
       await time(2000)
        console.log(Object.values(o))
    }
}
af()
 */

/* 
let o ={
    name:"coder"
}

let s={apellido:"house",...o}

console.log(
    s
) */

/* let o = { name:'coder',apellido:'house'};
let { name,...c } = o;
console.log(
    name,c
) */

/* function test(...args) {

   return args.reduce((a,b)=>a+b,0)
    
}

console.log(test(1,2,3,4,5))


let p1 = Promise.resolve(5);
let p2 = Promise.resolve(5);
let p3 = Promise.reject("error");

Promise.allSettled([p1,p2]).then(d => console.log(d));
Promise.all([p1,p2]).then(d=>console.log(d)).catch(e=>console.log(e)) */