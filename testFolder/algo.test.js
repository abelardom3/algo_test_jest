const { addNum, greaterThan5 } = require('./algo')





test('add 1+2 = 3', () => {
    expect(addNum(1, 2)).toBe(3)
})


test('if greater than 5 = true', () => {
    expect(greaterThan5(2)).toBe(true)
})