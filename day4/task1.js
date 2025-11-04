import { arrayCheck } from "../utils.js";

function flatten(arr) {
  if (!Array.isArray(arr)) return "Invalid input";
  const newArr = arr.flat(3);
  return newArr.filter((array) => typeof array === "number");
  
}

function testCase() {
  const tests = [
    {
      input: [1, [2, [3, [4]], 5]],
      expected: [1, 2, 3, 4, 5],
    },
    {
      input: [1, [2], [3, [4]], [5]],
      expected: [1, 2, 3, 4, 5],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [1, [3, 4], 5],
      expected: [1, 3, 4, 5],
    },
    {
      input: [1, , [3, 4], 5],
      expected: [1, 3, 4, 5],
    },
    {
      input: ['1', , [3, 4], '5'],
      expected: [3, 4],
    },
    {
      input: [1, { 3: 4 }, 5],
      expected: [1, 5],
    },
    {
      input: [1, "", "3", [4], [5]],
      expected: [1, 4, 5],
    },
    {
      input: ["", "", ""],
      expected: [],
    },
    {
      input: [true, 8, 4],
      expected: [8, 4],
    },
    {
      input: null,
      expected: "Invalid input",
    },
    {
      input: undefined,
      expected: "Invalid input",
    },
    {
      input: {},
      expected: "Invalid input",
    },
    {
      input: 123,
      expected: "Invalid input",
    },
    {
      input: 0 / 0,
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = flatten(test.input);
    const passed = arrayCheck(result, test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
