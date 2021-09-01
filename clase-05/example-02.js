let promise = ()=>new Promise ((res,rej)=>{
    res(20)
})
//una promesa retorna otro promesa y podemos encadenar
promise().then(x => x+1).then(e => e*2).then(e=>console.log(e))

let otraPromise = Promise.resolve(10)
otraPromise.then(e=>{
    if (e == 30) {
        throw 'Error'
    }else{
        return 'Ok'
    }
}).then(e=>console.log('Resolve: ',e)).catch(err=>{ console.log('Reject: ',err)})




