const getTime = () =>{
    const fyh = new Date().toLocaleString()
    let timestamp = Date.now()

    return {fyh,timestamp}
}

module.exports = {
    getTime
}