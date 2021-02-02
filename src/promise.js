// solicita datos al API

// npm install axios

const axios = require('axios')

// funcion getData solicita la info a una url y retorna la promesa q ejecuta axios

function getData(url){
    return axios.get(url) 
}

module.exports = getData