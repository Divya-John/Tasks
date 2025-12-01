"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task2_ts_1 = require("../task2/task2.ts");
const utils_ts_1 = require("../utils.ts");
function testCase() {
    const tests = [
        {
            input: [1, 2, 2, 3, 3, 3, 4],
            expected: 3,
        },
        {
            input: [1, 1, 1],
            expected: 1,
        },
        {
            input: [0, 0, 0, 1],
            expected: 0,
        },
        {
            input: [],
            expected: [],
        },
        {
            input: [10, 10, 300, 300],
            expected: 10,
        },
    ];
    for (let i = 0; i < tests.length; i++) {
        const test = tests[i];
        const result = (0, task2_ts_1.frequent)(test.input);
        const passed = (0, utils_ts_1.arrayCheck)(result, test.expected);
        console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
        if (!passed) {
            console.log("Expected:", test.expected);
            console.log("Got:", result);
        }
    }
}
testCase();
//# sourceMappingURL=task2test.js.map