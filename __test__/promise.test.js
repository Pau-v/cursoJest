// se lanza una promesa y jest espera a que esta se resuelva (si es rechazada o no)

const getData = require('../src/promise')
const API = 'https://dragon-ball-api.herokuapp.com/api/character/goku'

it('should return the goku info', () => {
    return getData(API).then(response => {             // return de la promesa para que la prueba no se complete antes de q se ejecute el .then
        expect(response.data.name).toBe('goku')
    })
})

// validar en el momento en que una promesa tiene que fallar por una url invalida


it('should fail because of invalid url', () => {
    expect.assertions(1)  // especificar el numero de expectativas que se tienen q cumplir
    return getData('url invalida').catch(err => expect(err).not.toBeNull())
})

