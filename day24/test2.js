"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task2_ts_1 = require("./task2.ts");
function testCase() {
    const tests = [
        {
            input: "name=John&age=20",
            output: { name: "John", age: "20" },
        },
        {
            input: "nameJohn&age=20",
            output: { age: "20" },
        },
        {
            input: "name==John&age=20",
            output: "Invalid input",
        },
        {
            input: "name=John&&age=20",
            output: "Invalid input",
        },
        {
            input: "name:John&&age=20",
            output: "Invalid input",
        },
        {
            input: "name=John&&&age=20",
            output: "Invalid input",
        },
        {
            input: [],
            output: "Invalid input",
        },
        {
            input: "",
            output: "Invalid input",
        },
        {
            input: {},
            output: "Invalid input",
        },
        {
            input: false,
            output: "Invalid input",
        },
        {
            input: 0 / 0,
            output: "Invalid input",
        },
    ];
    for (let i = 0; i < tests.length; i++) {
        let test = tests[i];
        let result = (0, task2_ts_1.parse)(test.input);
        let passed = JSON.stringify(result) === JSON.stringify(test.output);
        console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
        if (!passed) {
            console.log("Output:", test.output);
            console.log("Got:", result);
        }
    }
}
testCase();
//# sourceMappingURL=test2.js.map