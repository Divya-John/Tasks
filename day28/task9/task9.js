"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = sort;
function sort(arr) {
    if (arr.length === 0)
        return "Empty";
    var asc = __spreadArray([], arr, true).sort(function (a, b) { return a - b; });
    var desc = __spreadArray([], arr, true).sort(function (a, b) { return b - a; });
    if (JSON.stringify(arr) === JSON.stringify(asc))
        return "ascending";
    if (JSON.stringify(arr) === JSON.stringify(desc))
        return "descending";
    else
        return "unsorted";
}
