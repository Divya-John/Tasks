"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task6_ts_1 = require("./task6.ts");
var utils_ts_1 = require("../utils.ts");
function testCase() {
    var tests = [
        {
            input: [1, 0, 2, "", 3, null, 4],
            expected: [1, 2, 3, 4],
        },
        {
            input: [1, 2, true],
            expected: [1, 2, true],
        },
        {
            input: [0, undefined],
            expected: [],
        },
        {
            input: [null, 1, 2, 3],
            expected: [1, 2, 3],
        },
        {
            input: [10, 10, false, 300],
            expected: [10, 10, 300],
        },
    ];
    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        var result = (0, task6_ts_1.validInput)(test.input);
        var passed = (0, utils_ts_1.arrayCheck)(result, test.expected);
        console.log("Test ".concat(i + 1, ":"), passed ? "Pass" : "Fail");
        if (!passed) {
            console.log("Expected:", test.expected);
            console.log("Got:", result);
        }
    }
}
testCase();
