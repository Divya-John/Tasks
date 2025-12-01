"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersections = intersections;
function intersections(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0)
        return "Invalid input";
    arr1 = new Set(arr1);
    arr2 = new Set(arr2);
    let result = arr1.intersection(arr2);
    return [...result];
}
//# sourceMappingURL=task5.js.map