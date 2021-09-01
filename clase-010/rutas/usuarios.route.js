const express = require('express');

const router = express.Router();

router.get('',(req,res)=>{
    res.send('traera todos los usuarios')
})

router.get('/delete/:id',(req,res)=>{
    res.send('borrara usuario'+req.params.id)
})

router.get('/update/:id',(req,res)=>{
    res.send('actualizara usuario'+req.params.id)
})
function validar1(req,res,next) {
    /* if(!isNaN(req.query.q))
        //next(new Error("No puede ser un numero")) */
    console.log('middleware ruta/1')
    next()
}
function validar2(req,res,next) {
    /* if(!isNaN(req.query.q))
        //next(new Error("No puede ser un numero")) */
    console.log('middleware ruta/2')
    next()
}
router.get('/buscar',validar1,validar2,(req,res)=>{
    console.log("middeware ")
    res.send('Se buscara el usuario que comience con '+req.query.q)
})


module.exports = router