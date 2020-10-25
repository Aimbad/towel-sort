module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) {
        return result;
    } else {
        for (let x = 0; x < matrix.length; x++) {
            if (x % 2 == 0) {
                for (let y = 0; y < matrix[x].length; y++) {
                    result.push(matrix[x][y]);
                }
            } else {
                for (let y = matrix[x].length - 1; y >= 0; y--) {
                    result.push(matrix[x][y]);
                }
            }
        }
        return result;
    }
}
