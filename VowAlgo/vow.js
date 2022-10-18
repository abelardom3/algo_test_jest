
const str = 'I wanna code now more'
const obj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
}
const vowCount = (str) => {
    const word = str.split(' ')
    let count = 0
    for (let i = 0; i < word.length; i++) {
        const current = word[i].toLowerCase()
        const last = current[current.length - 1]
        if (last === 'a' || last === 'e' || last === 'i' || last === 'o' || last === 'u') {
            count++
        }

    }
    return count

}



module.exports = vowCount
