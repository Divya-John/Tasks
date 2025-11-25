"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task4_ts_1 = require("./task4.ts");
function testCase() {
    var tests = [
        {
            input: "hello_world_from_js",
            expected: "helloWorldFromJs",
        },
        {
            input: "hel_lo_wo_rld_from_js",
            expected: "helLoWoRldFromJs",
        },
        {
            input: "hel_lo _from_js",
            expected: "helLo FromJs",
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
        var result = (0, task4_ts_1.camelCase)(test.input);
        var passed = result === test.expected;
        console.log("Test ".concat(i + 1, ":"), passed ? "Pass" : "Fail");
        if (!passed) {
            console.log("Expected:", test.expected);
            console.log("Got:", result);
        }
    }
}
testCase();
