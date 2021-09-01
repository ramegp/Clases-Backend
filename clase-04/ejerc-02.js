function ws_1(cb) {
    //se realiza una op en base de datos o archivos
    let res = 10
    cb(res)
}
function ws_2(r,cb) {
    let res = r+20
    cb(res)
}
function ws_3(r,cb) {
    let res = 10+r
    cb(res)
}

ws_1((r)=>{
    ws_2(r,(res)=>{
        ws_3(res,(res)=>{
            console.log(res)
        })
    })
})