const fs = require('fs');

const fileData = fs.readFileSync(__dirname+'/package.json','utf-8');
//si leo solo el json lo transformo asi JSON.stringify(json,null,'\t')

let dataSize = fs.statSync("./package.json")

let info ={
    contenidoString: fileData,
    contenidoObj: JSON.parse(fileData),
    size: `${dataSize.size}`
}

fs.writeFileSync('./info.txt',JSON.stringify(info,null,'\t'))

console.log(info)