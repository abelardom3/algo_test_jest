const { addNum, greaterThan5, reverseString } = require('./algo')





test('add 1+2 = 3', () => {
    expect(addNum(1, 2)).toBe(3)
})


test('if greater than 5 = true', () => {
    expect(greaterThan5(9)).toBe(true)
})

test('return reverse string', () => {
    expect(reverseString('this is a string')).toBe('gnirts a si siht')
})