// longest word 

const str = 'This is a longerrr word'

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
