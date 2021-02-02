const { TestScheduler } = require('jest');

// requerimos el archivo a probar
const suma = require('../src/suma');

// describe crea un bloque en el q agrupar varias pruebas relacionadas (opcional)
// metodo test para ejecutar la prueba. Sus parametros son la prueba a realizar 
// expect para el elemento a testar
// toBe para el resultado esperado
// it es un alias de test, hacen lo mismo

 describe('pruesbas para suma', () => {
     test('1 + 2 is 3',() => {
        expect(suma(1,2)).toBe(3) 
     })
    //  it('should return 3 with 1 + 2', () => {
    //      expect(suma(1,2)).toBe(3)
    //  })
     test('1 + (-2) is -1', () =>{
         expect(suma(1, -2)).toBe(-1)
     })
    //  test('-1 + (-2) is -3', () =>{
    //     expect(suma(-2, -2)).toBe(-3)
    // })
 });

 // una vez definido ejecutamos en la terminal npm test