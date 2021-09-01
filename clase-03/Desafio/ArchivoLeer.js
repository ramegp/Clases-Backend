let fs = require('fs');
fs.readFile('archivo.json','utf8',(err,data)=>{
    if (err) {
        return console.log(err)
    }
    let json = JSON.parse(data)
    for (const e of json.users) {
        console.log(e)    
    }
})
