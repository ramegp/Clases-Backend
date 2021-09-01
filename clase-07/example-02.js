const fs = require('fs');
const fyh = new Date();

fs.writeFileSync("./fyh.txt",`${fyh}`)
