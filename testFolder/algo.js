

//

const num = 121

const test = (str) => {

    let result = ''
    let num = str.toString()
    for (let i = num.length - 1; i >= 0; i--) {
        result += num[i]
    }
    if (result === str) {
        return true
    } else {
        return false
    }
}



console.log(test(num))
