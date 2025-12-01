"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersections = intersections;
function intersections(arr1, arr2) {
    let result = [];
    if (arr1.length === 0 || arr2.length === 0)
        return "Invalid input";
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
                break;
            }
        }
    }
    return [...new Set(result)];
}
//# sourceMappingURL=task4.js.map