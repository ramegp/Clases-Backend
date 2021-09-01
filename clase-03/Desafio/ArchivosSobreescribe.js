let fs = require('fs')
let fd = fs.openSync(__dirname + '/text.txt','w');
fs.writeFileSync(fd,"otra linea",'utf8');
fs.closeSync(fd);