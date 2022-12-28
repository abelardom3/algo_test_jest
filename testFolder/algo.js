

// reverse impure 
const array = [1, 2, 3, 4, 5, 6, 7, 8]

const reverse = () => {
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
    }

}

console.log(array)
reverse()
console.log(array)