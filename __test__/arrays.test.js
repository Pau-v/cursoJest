const { TestScheduler } = require('jest');
const {carList, brandList} = require('../src/arrays');

describe('Verificar coches existentes', () => {
    test('validar que el array no sea nulo', () => {
        expect(carList()).not.toBeNull()
    })

    test('verificar si tiene un Polo', () => {
        expect(carList()).toContain('Polo')
    })

    test('verificar la longitud', () => {
        expect(carList()).toHaveLength(4)
    })
})

describe('Verificar marcas existentes', () => {
    test('validar que el array no sea nulo', () => {
        expect(brandList()).not.toBeNull()
    })
})