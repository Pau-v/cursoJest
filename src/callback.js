const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://dragon-ball-api.herokuapp.com/api'

function fetchAPI(url, callback){
    var req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onreadystatechange = function(event){
        if(req.readyState === 4){
            if(req.status === 200){
                callback(null, JSON.parse(req.responseText))  // si no hay error retorna primer elemento como nulo y el segundo con toda la info de la API
            } else {
                const error = new Error(`URL invalida ${url}`) // si hay error la info es nula
                return callback(err, null)
            }
        }
    }

    req.send()
}

module.exports = fetchAPI

// en terminal requerimos la dependencia con npm install xmlhttprequest

