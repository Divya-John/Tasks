"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicates = removeDuplicates;
function removeDuplicates(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
