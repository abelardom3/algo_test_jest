
const array = [1, 2, 4, 8]
const sum = 12

// const validInput = (array, sum) => {
//     const past = []
//     for (let i = 0; i < array.length; i++) {
//         let current = array[i]
//         let neededNum = sum - current
//         if (!past.includes(neededNum)) {
//             past.push(current)
//         } else {
//             return true
//         }
//     }

//     return false

// }


// Two sum that returns an array with the indexes that add up to the sum 

const validInput = (arr, sum) => {
    const cont = []
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let neededNum = sum - current
        if (!cont.includes(neededNum)) {
            cont.push(current)
        } else {
            return [cont.indexOf(neededNum), i]
        }
    }
    return -1
}


console.log(validInput(array, sum))



//module.exports = validInput