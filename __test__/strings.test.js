// validar si una cadena hace match con una expresion, por ejemplo un correo electronico

const { TestScheduler } = require("jest")

describe('email validation', () => {

    // validamos una cadena que sea un email, el metodo toMatch recibe una expresion regular
    test('this is an email', () => {
        const email = 'paula@mail.com'

        expect(email).toMatch(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    })
    
    // validamos una cadena que no sea un email
    test('this is not an email', () => {
        const email = 'paulamail.com'

        expect(email).not.toMatch( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    })
})