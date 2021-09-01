const generateRandom = (min,max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(generateRandom(5,10))

console.log(new Date())