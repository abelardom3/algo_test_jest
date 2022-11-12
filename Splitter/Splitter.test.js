const splitter = require('./Splitter')


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = [1, 2, 3, 4, 5, 6, 7]
const num = 3


test('Return [1,2,3,4,5,6,7,8,9] into [[1,2,3],[4,5,6],[7,8,9]]', () => {
    expect(splitter(arr, num)).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
})

test('Return [1,2,3,4,5,6,7,8,9] into [[1,2,3],[4,5,6],[7]]', () => {
    expect(splitter(arr2, num)).toStrictEqual([[1, 2, 3], [4, 5, 6], [7]])
})

