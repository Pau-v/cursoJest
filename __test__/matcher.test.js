test('2 + 2 = 4', () => {
    expect(2 + 2).toBe(4)
})

// validar objetos json, que sean o no sean iguales a algo

test('object validation', () => {
    const data = {username: 'paula valdes'}
    const data2 = {username: 'paula'}

    expect(data).toEqual({username: 'paula valdes'})
    expect(data).not.toEqual(data2)
})