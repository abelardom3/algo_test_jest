

// function fizzBuzz() {
//     for (let i = 0; i < 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz')
//         } else if (i % 5 === 0) {
//             console.log('Buzz')
//         } else if (i % 3 === 0) {
//             console.log('Fizz')
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzBuzz()
// return {fizz: 15} obj 




//////////////////////////////////////////////////////////////




// function helper(num) {
//     const obj = {}
//     for (let i = 0; i < num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             !obj.fizzBuzz ? obj.fizzBuzz = 1 : obj.fizzBuzz++
//         } else if (i % 5 === 0) {
//             !obj.fizz ? obj.fizz = 1 : obj.fizz++
//         } else if (i % 3 === 0) {
//             !obj.buzz ? obj.buzz = 1 : obj.buzz++
//         }
//     }
//     return obj
// }



// // const arr = [150, 30, 50, 400, 800]
// const arr = [150, 212, 345, 333, 2890, 4456, 2934867, 123, 321, 4765]
// const FizzBuzz = (arr) => {
//     const output = {
//         manyFizzBuzz: 0,
//         fewFizzBuzz: 0
//     }
//     for (let i = 0; i < arr.length; i++) {
//         const current = helper(arr[i])
//console.log(current.fizzBuzz)
//         if (current.fizzBuzz > 49) {
//             output.manyFizzBuzz++
//         } else {
//             output.fewFizzBuzz++
//         }
//     }
//     return output
// }
// console.log(FizzBuzz(arr))

// // if n contains greater then > 49 = many otherwise its few
// // make another function that returns original n met certain
// // function (n)
// // const arr = [150,30,50,100]


// // return {manyFizzbuz: 2, fewFizzbuzz: 2}






//////////////////////////////////////////////////////////




function helper(num) {
    const obj = {}
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            !obj.fizzBuzz ? obj.fizzBuzz = 1 : obj.fizzBuzz++
        } else if (i % 5 === 0) {
            !obj.fizz ? obj.fizz = 1 : obj.fizz++
        } else if (i % 3 === 0) {
            !obj.buzz ? obj.buzz = 1 : obj.buzz++
        }
    }
    return obj
}


// const arr = [150, 30, 50, 400, 800]
const arr = [150, 212, 345, 333, 2890, 4456, 2934867, 123, 321, 4765]
const FizzBuzz = (arr) => {
    const output = {
        manyFizzBuzz: 0,
        fewFizzBuzz: 0
    }
    arr.forEach((num) => {
        const { fizzBuzz } = helper(num)
        fizzBuzz > 49 ? output.manyFizzBuzz++ : output.fewFizzBuzz++
    })
    return output
}
console.log(FizzBuzz(arr))

// if n contains greater then > 49 = many otherwise its few
// make another function that returns original n met certain
// function (n)
// const arr = [150,30,50,100]


// return {manyFizzbuz: 2, fewFizzbuzz: 2}