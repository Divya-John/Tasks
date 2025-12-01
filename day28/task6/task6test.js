"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task6_ts_1 = require("../task6/task6.ts");
const utils_ts_1 = require("../utils.ts");
function testCase() {
    const tests = [
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
    for (let i = 0; i < tests.length; i++) {
        const test = tests[i];
        const result = (0, task6_ts_1.validInput)(test.input);
        const passed = (0, utils_ts_1.arrayCheck)(result, test.expected);
        console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
        if (!passed) {
            console.log("Expected:", test.expected);
            console.log("Got:", result);
        }
    }
}
testCase();
//# sourceMappingURL=task6test.js.map