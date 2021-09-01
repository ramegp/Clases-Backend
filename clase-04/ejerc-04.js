/* const fin = ()=>{console.log("fin....")};


function mostrarLetras(string,i,callback) {
    if(string.length == i) {
        fin();
        return
    };
    setTimeout(()=>{
        callback(string[i])
        mostrarLetras(string,i+1,callback)
    },1000)
}
mostrarLetras("Holaaa",0,function (e) {
    console.log(e)
}); */
/* 
const time = ()=> new Promise((resolv,reject)=>{
    setTimeout(()=>{
        resolv()
    },1000)
})
async function mostrarLetras(str) {
    for (let i = 0; i < str.length; i++) {
        
        console.log(str[i])
        await time()
    }
}

mostrarLetras("Curso bac") */

const fin = ()=>{console.log("fin....")};

function mostrarLetras(str,callback) {
    let i = 0;
    let int = setInterval(()=>{
        if (str.length == i){
            fin();
            clearInterval(int)
        }else{
            console.log(str[i])
            i++;
        }
    },1000)
}

mostrarLetras("Coder",fin)