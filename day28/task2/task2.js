"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frequent = frequent;
function frequent(arr) {
    if (arr.length === 0)
        return [];
    var count = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        count[i] = (count[i] || 0) + 1;
    }
    var value = Object.values(count);
    var key = Object.keys(count);
    var result = value.indexOf(Math.max.apply(Math, value));
    return Number(key[result]);
}
