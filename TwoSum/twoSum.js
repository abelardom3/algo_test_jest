
const array = [1, 2, 4, 8]
const sum = 12

const validInput = (array, sum) => {
    const past = []
    for (let i = 0; i < array.length; i++) {
        let current = array[i]
        let neededNum = sum - current
        if (!past.includes(neededNum)) {
            past.push(current)
        } else {
            return true
        }
    }

    return false

}

module.exports = validInput