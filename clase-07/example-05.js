const fs = require('fs');

fs.promises.readFile('./info.txt').then(data=>{
    let info = JSON.parse(data.toString('utf-8'));
    
    info.contenidoObj.author = 'coder';
    fs.promises.writeFile('package.json.coder',JSON.stringify(info,null,'\t')).then((date)=>{console.log("Guardado")})})