// matchers para Validar elementos que tengan un valor indefinido, nulo o falso

const { TestScheduler } = require("jest");

// toBeNull matches cuando el valor de un elemento sea null

// toBeUndefined matches cuando un elemento sea undefined

// toBeDefined valida cuando un elemento sea defined

// toBeTruthy matches anything that an if statement treats as true

// toBeFalsy matches anything that an if statement treats as false

test('null', () => {
    const n = null

    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()  // como es nulo no podría retornar true
    expect(n).toBeFalsy()
})

test('zero', () => {
    const z = 0

    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeTruthy() // 0 se representa con false
    expect(z).toBeFalsy()
})