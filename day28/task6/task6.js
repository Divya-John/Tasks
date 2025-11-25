"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validInput = validInput;
function validInput(arr) {
    arr = arr.filter(function (x) {
        return Boolean(x);
    });
    return arr;
}
