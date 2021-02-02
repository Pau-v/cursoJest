// validar asincronismo

const getData = require('../src/promise')
const API = 'https://dragon-ball-api.herokuapp.com/api/character/goku'

it('shouls return the goku info', async () => {
    const response = await getData(API)

    expect(response.data.name).toBe('goku')
})

// validar cuando una solicitud deberia fallar con url invalida

// sentencia try and catch para probar codigo que sabemos q va a fallar
// catch coge el error
// hacemos un expect donde esperamos que el error no sea nulo

it('shouls fail because of invalid url', async () => {
    expect.assertions(1)
    try{
        await getData('url invalida')
    }catch(err){
        expect(err).not.toBeNull()
    }
})