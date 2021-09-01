var express = require('express');
var multer = require('multer');
var app = express();
//const router = express.Router();
var usuarios = require('./rutas/usuarios.route');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "/uploads/");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "-" + Date.now());
    }
});
var upload = multer({ storage: storage });
app.post('/upload', upload.single('myFile'), function (req, res, next) {
    var file = req.file;
    if (!file) {
        var error = new Error("entre file");
        return next(error);
    }
    res.send(file);
});
app.post('/multipleUpload', upload.array('myFile', 12), function (req, res, next) {
    if (!req.file) {
        var error = new Error("entre file");
        return next(error);
    }
    res.send(req.file);
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
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
app.use('/usuarios', usuarios);
app.listen(3000, function () {
    console.log('Escuchando....');
});
