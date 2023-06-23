

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const letters = 'This is a string and what not'



// reverse a string 
// O(n)

const reverse = (arr) => {
    // create a varible where we will have add our new string 
    let result = ''
    // loop thorugh the string backwards 
    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i]
    }
    // return value
    return result;
}

//console.log(reverse(letters))







// reverse impure 
// O(n)
const impure = (arr) => {
    // loop through array in half 
    for (let i = 0; i < arr.length / 2; i++) {
        // variable temp will cach our index which we will use later
        let temp = arr[i]
        // next give the first element the value of the last and the last element give the value of the temp variable decrementing 
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp

    }

}

// impure(numbers)
// console.log(numbers)




// fizzbuzz 
// O(n)
const fizzBuzz = (num) => {
    const obj = {}
    // loop through the given input 
    for (let i = 1; i <= num; i++) {
        // check if current number is divisible ny 3, 5, or 15 and console.log corrensponding words;
        if (i % 15 === 0) {
            !obj.fizzBuzz ? obj.fizzBuzz = [i] : obj.fizzBuzz.push(i)
        } else if (i % 3 === 0) {
            !obj.fizz ? obj.fizz = [i] : obj.fizz.push(i)
        } else if (i % 5 === 0) {
            !obj.buzz ? obj.buzz = [i] : obj.buzz.push(i)
        } else {
            !obj.other ? obj.other = [i] : obj.other.push(i)
        }
    }
    return obj
}


//console.log(fizzBuzz(50))








// chunky array 


const chunky = (arr, num) => {
    // create the array we will return and store
    let result = []
    // loop through array, create variable last that will target the last element of new array 
    for (let i = 0; i < arr.length; i++) {
        let last = result[result.length - 1]
        //check if there is no last array or the length of the last element is equal to the num
        if (!last || last.length === num) {
            // push to the new array the current number inside an array
            result.push([arr[i]])
        } else {
            // else push current number into the last element 
            last.push(arr[i])
        }
    }
    return result;
}

//console.log(chunky(numbers, 3))







/// sum of two 
const digits = [1, 2, 4, 8]

const sumOf = (arr, sum) => {
    // create variable array that we will use as storage 
    const array = []
    // loop and find the differnce between the sum and current number to get the needed number 
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let neededNum = sum - current
        // if needed number is not in our storage then add the current number into array 
        if (!array.includes(neededNum)) {
            array.push(current)
        } else {
            // else if needed number is in array then we have our pair  
            return true
        }
    }
    return false
}

// console.log(sumOf(digits, 7))




// valid input 
const input = '()()()'

const valid = (arr) => {
    // create variable for storage 
    const array = []
    // loop through with 3 if statements 
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        // if current is '(' then add to array 
        if (current === '(') {
            array.push(current)
        } else if (array.length === 0) {
            // if array length equals 0 then we have no valid input 
            return false
        } else {
            // if anything else then we pop() from array asuming its the counter part of the ()
            array.pop()
        }
    }
    return array.length === 0
}

// console.log(valid(input))






// Ransome Note 
const mag = 'This is a story about a software engineer , Read below for more of the story'
const note = 'a software engineer story'

const ransome = (mag, note) => {
    // first we want to turn the strings into arrays so we can maniplute them and create variables
    const magArr = mag.toLowerCase().split(' ')
    const noteArr = note.toLowerCase().split(' ')

    // then the magArr we loop and store each word in an object and increment for each word 
    const obj = {}

    magArr.forEach(word => {
        !obj[word] ? obj[word] = 1 : obj[word]++
    })
    let result = true

    // after we would loop thorugh the note array and decrement from the obj for every word we find 
    noteArr.forEach(word => {
        if (obj[word]) {
            obj[word]--
            // if we have excced the word amount then we return false and also for not having the word either 
            if (obj[word < 0]) result = false
        } else {
            result = false
        }
    })

    // if all words all found then we return true
    return result
}
// console.log(ransome(mag, note))





// Binary Search 

const sortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const binary = (arr, target) => {
    // we create variables first, last, middle and will have the value of the indexes of the array
    let first = 0
    let last = arr.length - 1
    let middle = Math.floor((last + first) / 2)

    // we will while loop through unitl we get target equals our middle value

    while (arr[middle] !== target && first <= last) {
        console.log('lopped')
        //  if middle is greater then our target then will reasign our last value and middle value
        if (arr[middle] > target) {
            last = middle - 1
        } else {
            // else if middle is less then we will reasign our first value and middle value
            first = middle + 1
        }

        middle = Math.floor((first + last) / 2)
    }
    // loop will continue unitl we reach out target 

    // return target index
    return target === arr[middle] ? `Index is ${middle} your number is ${arr[middle]}` : 'not found'
}


// console.log(binary(sortedNumbers, 12))

function ransome2(mag, note) {
    const removeSpaces = word => word !== ''

    const magArr = mag.split(' ').filter(removeSpaces)
    const noteArr = note.split(' ').filter(removeSpaces)
    const obj = {}

    magArr.forEach(word => !obj[word] ? obj[word] = 1 : obj[word]++)

    let result = true

    noteArr.forEach(word => obj[word] ? obj[word]-- : obj[word] < 0 ? result = false : result = false)

    return obj;
}



console.log(ransome2("Hello my name is bob what is your . and ", 'my name is bob'))














