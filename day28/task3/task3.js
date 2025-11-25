"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.armstorng = armstorng;
function armstorng(n) {
    if (n < 0)
        return "Not a armstrong";
    var numsplit = n.toString().split("");
    var result = [];
    for (var i = 0; i < numsplit.length; i++) {
        if (numsplit[i]) {
            result.push(Math.pow(numsplit[i], numsplit.length));
        }
    }
    var sum = result.reduce(function (acc, curr) { return acc + curr; });
    var armstorng = (n === sum) ? true : false;
    return armstorng;
}
