"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task5_ts_1 = require("./task5.ts");
var utils_ts_1 = require("../utils.ts");
function testCase() {
    var tests = [
        {
            input1: [1, 2, 3],
            input2: [2, 3, 4],
            expected: [2, 3],
        },
        {
            input1: [],
            input2: [],
            expected: "Invalid input",
        },
        {
            input1: [1, 2, 3],
            input2: [],
            expected: "Invalid input",
        },
        {
            input1: [],
            input2: [2, 3, 4],
            expected: "Invalid input",
        },
        {
            input1: [1, 2, 3],
            input2: [5, 6, 4],
            expected: [],
        },
    ];
    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        var result = (0, task5_ts_1.intersections)(test.input1, test.input2);
        var passed = (0, utils_ts_1.arrayCheck)(result, test.expected);
        console.log("Test ".concat(i + 1, ":"), passed ? "Pass" : "Fail");
        if (!passed) {
            console.log("Expected:", test.expected);
            console.log("Got:", result);
        }
    }
}
testCase();
