const express = require('express');
const multer = require('multer');
const app = express();
//const router = express.Router();

const usuarios = require('./rutas/usuarios.route')

let storage= multer.diskStorage({
    destination:function(req:any,file:any,callback:any){
        callback(null,"/uploads/")
    },
    filename:function (req:any,file:any,callback:any) {
        callback(null,file.fieldname+"-"+Date.now())
    }
})
let upload = multer({storage});

app.post('/upload',upload.single('myFile'),(req:any,res:any,next:any)=>{
    const file = req.file;
    if (!file){
        const error = new Error("entre file");
        return next(error)
    }
    res.send(file)
})

app.post('/multipleUpload',upload.array('myFile',12),(req:any,res:any,next:any)=>{
    if (!req.file){
        const error = new Error("entre file");
        
        return next(error)
    }
    res.send(req.file)
})
    

app.get('/',(req:any,res:any)=>{
    res.sendFile(__dirname+'/index.html')
})

/* 
app.get('',(req:any,res:any)=>{
    res.send('Hello world')
})
 */

/* router.get('',(req:any,res:any)=>{
    res.send('Soy ()')
})

router.get('/test',(req:any,res:any)=>{
    res.send('soy /test')
}) */

/* app.use((req,res,next)=>{
    console.log('nivel de app)
    next()
}) */

app.use('/usuarios',usuarios)
app.listen(3000,()=>{
    console.log('Escuchando....')
})