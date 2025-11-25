"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task9_ts_1 = require("../task9/task9.ts");
var utils_ts_1 = require("../utils.ts");
function testCase() {
    var tests = [
        {
            input: [1, 2, 3, 4, 5],
            expected: "ascending",
        },
        {
            input: [1, 3, 7, 4, 2],
            expected: "unsorted",
        },
        {
            input: [5, 4, 3, 2, 1],
            expected: "descending",
        },
        {
            input: [-4, -2, 1, 2, 3],
            expected: "ascending",
        },
        {
            input: [1, 1, 1],
            expected: "ascending",
        },
        {
            input: [],
            expected: "Empty",
        },
        {
            input: [],
            expected: "Empty",
        },
    ];
    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        var result = (0, task9_ts_1.sort)(test.input);
        var passed = (0, utils_ts_1.arrayCheck)(result, test.expected);
        console.log("Test ".concat(i + 1, ":"), passed ? "Pass" : "Fail");
        if (!passed) {
            console.log("Expected:", test.expected);
            console.log("Got:", result);
        }
    }
}
testCase();
