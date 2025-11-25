"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vowels = vowels;
function vowels(str) {
    var newstr = str.split("");
    if (str.length === 0 || str.trim() === "")
        return "Empty";
    var arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var count = [];
    for (var i = 0; i < newstr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (newstr[i] === arr[j]) {
                count.push(newstr[i]);
            }
        }
    }
    return count.length;
}
