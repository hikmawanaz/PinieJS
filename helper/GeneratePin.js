const GeneratePin = () =>{
    return Math.random().toString().slice(2,8); 
}

module.exports = GeneratePin;