"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task4_ts_1 = require("./task4.ts");
function testCase() {
    const tests = [
        {
            input1: [1, 2, 3],
            input2: [2, 3, 4],
            output: [2, 3],
        },
        {
            input1: [1, 2, 2, 3],
            input2: [2, 2, 3, 4],
            output: [2, 3],
        },
        {
            input1: [],
            input2: [],
            output: "Invalid input",
        },
        {
            input1: [],
            input2: [2, 2, 3, 4],
            output: "Invalid input",
        },
        {
            input1: [2, 2, 3, 4],
            input2: [],
            output: "Invalid input",
        },
        {
            input1: [1, 5],
            input2: [2, 2, 3, 4],
            output: [],
        },
        {
            input1: [1, 1, 5],
            input2: [2, 2, 3, 4],
            output: [],
        },
        {
            input1: [1, 1, 1, 1, 1],
            input2: [1, 1, 1, 1, 1],
            output: [1],
        },
        {
            input1: [1, 0, 1, 1, 1],
            input2: [1, 1, 1, 1, 1],
            output: [1],
        },
        {
            input1: [1, 1, 2, 3, 3, 5],
            input2: [2, 2, 3, 4],
            output: [2, 3],
        },
    ];
    for (let i = 0; i < tests.length; i++) {
        let test = tests[i];
        let result = (0, task4_ts_1.intersections)(test.input1, test.input2);
        let passed = JSON.stringify(result) === JSON.stringify(test.output);
        console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
        if (!passed) {
            console.log("Output:", test.output);
            console.log("Got:", result);
        }
    }
}
testCase();
//# sourceMappingURL=test4.js.map