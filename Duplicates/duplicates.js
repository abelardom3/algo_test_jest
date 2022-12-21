
// algo that returns true or false if given array contains duplicates 

const array = [1, 2, 3, 3, 4, 5, 6, 7, 8]
//const array = [1, 2, 3, 4, 5]


const duplicates = (arr) => {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (!obj[num]) {
            obj[num] = 1
        } else {
            return true
        }
    }
    return false
}

console.log(duplicates(array))