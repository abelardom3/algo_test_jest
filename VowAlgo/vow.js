
const str = 'I wanna code now'
const vowels = ['a', 'e', 'i', 'o', 'u']

const vowCount = (str) => {
    const arr = str.split(' ')
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let last = current[current.length - 1].toLowerCase()
        if (vowels.includes(last)) {
            count++
        }
    }
    return count

}

console.log(vowCount(str))

// module.exports = vowCount
