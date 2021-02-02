// matchers para evaluar numeros

const { TestScheduler } = require("jest");

// toBeGreaterThan()
// toBeGreaterThanOrEqual()
// toBeLessThan()
// toBeLessThanOrEqual()
// toBe()
// toBeCloseTo() para numeros flotantes
// toEqual()

test('two plus two', () => {
    const value = 2 + 2

    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqueal(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)
    expect(value).toBe(4)
    expect(value).toEqual(4)
})

// para validar numero flotante

test('adding floating point number', () => {
    const value = 0.1 + 0.2

    // expect(value).toBe(0.3) // da error porque devuelve 0.30000004

    expect(value).toBeCloseTo(0.3)
})