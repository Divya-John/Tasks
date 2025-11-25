"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task3_ts_1 = require("../task3/task3.ts");
function testCase() {
    var tests = [
        {
            input: 153,
            expected: true,
        },
        {
            input: 124,
            expected: false,
        },
        {
            input: 0,
            expected: true,
        },
        {
            input: 1,
            expected: true,
        },
        {
            input: -11,
            expected: "Not a armstrong",
        },
        {
            input: -1,
            expected: "Not a armstrong",
        },
    ];
    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        var result = (0, task3_ts_1.armstorng)(test.input);
        var passed = result === test.expected;
        console.log("Test ".concat(i + 1, ":"), passed ? "Pass" : "Fail");
        if (!passed) {
            console.log("Expected:", test.expected);
            console.log("Got:", result);
        }
    }
}
testCase();
