
const inputMatrix = [[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20]]



function spiralCopy(inputMatrix) {

    const result = [];
    let top = 0;
    let bottom = inputMatrix.length - 1;
    let left = 0;
    let right = inputMatrix[0].length - 1;

    // Keep looping while the top and bottom boundaries have not met or crossed
    while (top <= bottom && left <= right) {
        // Add the elements from the current top row to the result array
        for (let i = left; i <= right; i++) {
            result.push(inputMatrix[top][i]);
        }
        top++;

        // Add the elements from the current right column to the result array
        for (let i = top; i <= bottom; i++) {
            result.push(inputMatrix[i][right]);
        }
        right--;

        // If the top and bottom boundaries have not crossed, add the elements from the current bottom row to the result array
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(inputMatrix[bottom][i]);
            }
            bottom--;
        }

        // If the left and right boundaries have not crossed, add the elements from the current left column to the result array
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(inputMatrix[i][left]);
            }
            left++;
        }
    }

    return result;
}


console.log(spiralCopy(inputMatrix))