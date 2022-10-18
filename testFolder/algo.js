const str = 'this is a string'

const addNum = (a, b) => {
    return a + b
}

const greaterThan5 = (num) => {
    return num > 5 ? true : false
}

const reverseString = (str) => {
    let reverse = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse
}


module.exports = { addNum, greaterThan5, reverseString }