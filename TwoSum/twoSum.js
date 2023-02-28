
const array = [10, 2, 10, 8]
const sum = 20

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
// O(n) runtime

const sumOf = (arr, sum) => {

    // we create an array to store numbers later on 
    const past = []

    // we for loop and get the difference between the sum and current number 
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let neededNum = sum - current
        // Next we check if the needed number is present if not then we store the current number 
        if (!past.includes(neededNum)) {
            past.push(current)
        } else {
            // else if it is present then we know we have the pair that adds up to the sum
            // we return the array with the indexes of the pair 
            return [past.indexOf(neededNum), i]
        }

    }

    // if no pair adds up to the sum we return false
    return false
}

console.log(sumOf(array, sum))






//module.exports = validInput