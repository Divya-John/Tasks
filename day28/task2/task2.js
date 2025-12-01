"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frequent = frequent;
function frequent(arr) {
    if (arr.length === 0)
        return [];
    let count = {};
    for (let i of arr) {
        count[i] = (count[i] || 0) + 1;
    }
    let value = Object.values(count);
    let key = Object.keys(count);
    let result = value.indexOf(Math.max(...value));
    return Number(key[result]);
}
//# sourceMappingURL=task2.js.map