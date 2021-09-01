const express = require('express');

const handlebars = require('express-handlebars')

//const fs = require('fs');


const app = express();
const PORT = 5010;

/* app.engine('cte',function(fp,ops,callback) {
    fs.readFile(fp,function (err,content) {
        if (err) return callback(new Error(err))
        let rendered = content.toString('utf-8')//.replace('^^title$$',ops.title).replace('^^name$$',ops.name)
        for (let i in ops.datos)
        rendered = rendered.replace(`^^${i}$$`,ops.datos[i])
        return callback(null,rendered)
    })
})
 */

app.engine('hbs',handlebars(
    {
        extname:'.hbs',
        defaultLayout:'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    }
))

app.set('views','./views');
//app.set('view engine','cte');
app.set('view engine','hbs');

app.use(express.static('public'));

/* app.get('/cte1',(req,res)=>{
    res.render('index',{datos:{title:"Ejemplo",name:"ramiro",edad:45}})
}) */


app.get('/',(req,res)=>{
    let data = {
        saludo:'Hola mundo',
        nombre:'coder',
        email:"asdas@asdasd",
        ciudades: [
            {name: "BS AS"},
            {name: "Tucuman"},
            {name: "Cordoba"}
        ]
    }
    res.render('main',{productos:[
        {
            name:"azucar",
            precio:45
    },
    {
        name:"harina",
        precio:56
    },
    {
        name:"yerba mate",
        precio:500
    }   
    ]})
})


app.listen(PORT,()=>{
    console.log(`Nuestro server esta en el puerto ${PORT}`)
})

