import express from 'express'

let app = express()

app.get('/test',(req,res)=>{
    res.send('Holaaaa')
})

app.listen(5001,()=>{
    console.log('Escuchando en 5001')
})