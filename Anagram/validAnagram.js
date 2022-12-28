/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

*/


// const s = 'anagram'
// const t = 'nagaram'

// const isAnagram = (s, t) => {
//     const sletter = s.split('')
//     const tletter = t.split('')
//     const obj = {}

//     if (sletter.length !== tletter.length) return false

//     sletter.forEach(letter => {
//         !obj[letter] ? obj[letter] = 1 : obj[letter]++
//     })

//     let result = true

//     tletter.forEach(letter => {
//         if (obj[letter]) {
//             obj[letter]--
//             if (obj[letter] < 0) result = false
//         } else {
//             result = false
//         }
//     })
//     return result
// }

// console.log(isAnagram(s, t))

// other way

const s = 'rat'
const t = 'ar'

const anagram = (s, t) => {

    const sWord = s.split('').sort().join('')
    const tWord = t.split('').sort().join('')

    return sWord === tWord ? true : false
}

console.log(anagram(s, t))