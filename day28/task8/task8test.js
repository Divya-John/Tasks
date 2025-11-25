"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task8_ts_1 = require("./task8.ts");
var utils_ts_1 = require("../utils.ts");
function testCase() {
    var tests = [
        {
            input: { name: "John", age: 30 },
            expected: "name=John&age=30",
        },
        {
            input: { name: "John" },
            expected: "name=John",
        },
        {
            input: { name: "John", age: 30, mark: 29 },
            expected: "name=John&age=30&mark=29",
        },
        {
            input: {},
            expected: "Invalid input",
        },
        {
            input: {},
            expected: "Invalid input",
        },
    ];
    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        var result = (0, task8_ts_1.str)(test.input);
        var passed = (0, utils_ts_1.arrayCheck)(result, test.expected);
        console.log("Test ".concat(i + 1, ":"), passed ? "Pass" : "Fail");
        if (!passed) {
            console.log("Expected:", test.expected);
            console.log("Got:", result);
        }
    }
}
testCase();
