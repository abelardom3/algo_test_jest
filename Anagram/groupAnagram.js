/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

*/

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

const groupAnagram = (strs) => {
    const map = {}

    for (let word of strs) {
        const key = word.split('').sort().join('')
        if (map[key]) {
            map[key].push(word)
        } else {
            map[key] = [word]
        }

    }
    return Object.values(map)
}

// returns [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
console.log(groupAnagram(strs))