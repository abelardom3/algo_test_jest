/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Input: nums = [1], k = 1
Output: [1]

*/
const nums = [1, 1, 1, 2, 2, 3]
const k = 2


const kFrequent = (nums, k) => {
    const map = {}

    for (let num of nums) {
        !map[num] ? map[num] = 1 : map[num]++
    }

    let bucket = []
    for (let i = 0; i <= nums.length; i++) {
        bucket.push([])
    }

    for (let key in map) {
        let count = map[key]
        bucket[count].push(key)
    }
    let result = []
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length === 0) {
            continue
        } else {
            result = [...result, ...bucket[i]]
        }

    }
    return result.slice(0, k)
}

console.log(kFrequent(nums, k))