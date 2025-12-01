"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Partition(array, fn) {
    if (!Array.isArray(array))
        return "Invalid input";
    let result1 = [];
    let result2 = [];
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i]))
            result1.push(array[i]);
        else
            result2.push(array[i]);
    }
    result.push(result1, result2);
    return result;
}
function testCase() {
    const tests = [
        {
            input: [1, "1", "2", 2, 3, 4, "4"],
            callback: (x) => typeof x === "string",
            expected: [
                ["1", "2", "4"],
                [1, 2, 3, 4],
            ],
        },
        {
            input: [1, 2, 3, 4, 5],
            callback: (x) => x % 2 === 0,
            expected: [
                [2, 4],
                [1, 3, 5],
            ],
        },
        {
            input: [1, 2, 3, { key: 4 }, 5],
            callback: (x) => typeof x === "object",
            expected: [[{ key: 4 }], [1, 2, 3, 5]],
        },
        {
            input: [],
            callback: (x) => typeof x === "number",
            expected: [[], []],
        },
        {
            input: [1, 2, 3, 4, 5],
            callback: (x) => typeof x === "string",
            expected: [[], [1, 2, 3, 4, 5]],
        },
        {
            input: [{}],
            callback: (x) => typeof x === "object",
            expected: [[{}], []],
        },
        {
            input: [1, 2, 3, 4, 5],
            callback: (x) => typeof x === "string",
            expected: [[], [1, 2, 3, 4, 5]],
        },
        {
            input: [[1], [2, 3], "hello", 4],
            callback: (x) => Array.isArray(x),
            expected: [
                [[1], [2, 3]],
                ["hello", 4],
            ],
        },
        {
            input: [1, true, false, 9],
            callback: (x) => typeof x === "boolean",
            expected: [
                [true, false],
                [1, 9],
            ],
        },
        {
            input: [-1, 20, 1, 40, 2],
            callback: (x) => x > 10,
            expected: [
                [20, 40],
                [-1, 1, 2],
            ],
        },
    ];
    for (let i = 0; i < tests.length; i++) {
        const test = tests[i];
        const result = Partition(test.input, test.callback);
        let passed = JSON.stringify(result) === JSON.stringify(test.expected);
        console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
        if (!passed) {
            console.log("Expected:", test.expected);
            console.log("Got:", result);
        }
    }
}
testCase();
//# sourceMappingURL=hello.js.map