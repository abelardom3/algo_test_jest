// longest word 

const str = 'This is a superlongword test'

const longer = () => {
    const arr = str.split(' ')
    let max = 0
    let longWord = ''

    arr.forEach((word) => {
        if (word.length > max) {
            longWord = word
            max = word.length
        }
    })

    return longWord
}

console.log(longer())
