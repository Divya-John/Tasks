"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotate = rotate;
function rotate(matrix) {
    if (!Array.isArray(matrix))
        return "Invalid input";
    if (matrix.length === 0)
        return "Empty";
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].length !== matrix[0].length) {
            return "Invalid input";
        }
    }
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let row = [];
        for (let j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        }
        result.push(row.reverse());
    }
    return result;
}
//# sourceMappingURL=task1.js.map