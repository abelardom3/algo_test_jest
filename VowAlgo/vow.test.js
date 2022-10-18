const vowCount = require('./vow')



test('testing', () => {
    expect(vowCount('I wanna code now')).toBe(3)
    expect(vowCount('I wanna code now more')).toBe(3)
})




