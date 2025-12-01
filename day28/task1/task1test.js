"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task1_ts_1 = require("../task1/task1.ts");
const utils_ts_1 = require("../utils.ts");
function testCase() {
    const tests = [
        {
            input: [1, 2, 3, 4, 3, 2],
            expected: [1, 2, 3, 4],
        },
        {
            input: [1, 1, 1],
            expected: [1],
        },
        {
            input: [0, 0, 0],
            expected: [0],
        },
        {
            input: [],
            expected: [],
        },
        {
            input: [100000, 10000000, 300],
            expected: [100000, 10000000, 300],
        },
        {
            input: [-10, 100, -300],
            expected: [-10, 100, -300],
        },
    ];
    for (let i = 0; i < tests.length; i++) {
        const test = tests[i];
        const result = (0, task1_ts_1.removeDuplicates)(test.input);
        const passed = (0, utils_ts_1.arrayCheck)(result, test.expected);
        console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
        if (!passed) {
            console.log("Expected:", test.expected);
            console.log("Got:", result);
        }
    }
}
testCase();
//# sourceMappingURL=task1test.js.map