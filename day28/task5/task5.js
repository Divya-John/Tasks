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
exports.intersections = intersections;
function intersections(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0)
        return "Invalid input";
    arr1 = new Set(arr1);
    arr2 = new Set(arr2);
    var result = arr1.intersection(arr2);
    return __spreadArray([], result, true);
}
