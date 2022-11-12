
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const number = 3



const splitter = (arr, num) => {
    const sub = []
    for (let i = 0; i < arr.length; i++) {
        const last = sub[sub.length - 1]
        if (!last || last.length === num) {
            sub.push([arr[i]])
            console.log(sub)
        } else {
            last.push(arr[i])
            console.log(last)
        }
    }
    return sub

}





console.log(splitter(array, number))

// module.exports = splitter