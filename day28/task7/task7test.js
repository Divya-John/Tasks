"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task7_ts_1 = require("./task7.ts");
function testCase() {
    var tests = [
        {
            input: "hello world",
            expected: 3,
        },
        {
            input: "hi Hello EveryOne",
            expected: 7,
        },
        {
            input: "iiiiiiaaaa",
            expected: 10,
        },
        {
            input: "",
            expected: "Empty",
        },
        {
            input: "   ",
            expected: "Empty",
        },
    ];
    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        var result = (0, task7_ts_1.vowels)(test.input);
        var passed = result === test.expected;
        console.log("Test ".concat(i + 1, ":"), passed ? "Pass" : "Fail");
        if (!passed) {
            console.log("Expected:", test.expected);
            console.log("Got:", result);
        }
    }
}
testCase();
