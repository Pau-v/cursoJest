// código asincrono, validar una petición http

const fetchAPI = require('../src/callback')

it('should return the goku info', done =>{
    const API = 'https://dragon-ball-api.herokuapp.com/api/character/goku'

    function callback(err, data){

        try{
            expect(err).toBeNull()  // esperamos que no sea nulo
            expect(data).not.toBeNull()  // esperamos que se envie la info de la API
            expect(data.name).toBe('goku') //esperamos que esa info sea el nombre del personaje goku
            done()
        } catch(err){ // atrapa los errores que devuelve expect
            done(err) // le decimos a done que hubo un error
        }
    }

    fetchAPI(API, callback)
})

// por defecto, las pruebas de jest se completan una vez que lleguen al final de la prueba
// la prueba se completaria cuando fetchAPI finalice, no llamando a la funcion callback
// la solucion es recibir un elemento llamado done, jest espera a que lo retornemos

// englobar el código entre try y catch(que atraparia los errores que retorne expect)