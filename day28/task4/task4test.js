"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task4_ts_1 = require("../task4/task4.ts");
function testCase() {
    const tests = [
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
    for (let i = 0; i < tests.length; i++) {
        const test = tests[i];
        const result = (0, task4_ts_1.camelCase)(test.input);
        const passed = result === test.expected;
        console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
        if (!passed) {
            console.log("Expected:", test.expected);
            console.log("Got:", result);
        }
    }
}
testCase();
//# sourceMappingURL=task4test.js.map