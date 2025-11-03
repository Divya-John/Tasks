import { objectCheck } from "../utils/utils1.js";

function combineObject(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function testCase() {
  const tests = [
    {
      input1: { a: 1, b: 2 },
      input2: { b: 3, c: 4 },
      expected: { a: 1, b: 3, c: 4 },
    },
    {
      input1: { a: 5, b: 6 },
      input2: { b: 3, c: 9 },
      expected: { a: 5, b: 3, c: 9 },
    },
    {
      input1: { a: 5, b: 6 },
      input2: { b: 3, c: 9 },
      expected: { a: 5, b: 3, c: 9 },
    },
    {
      input1: { a: "9", b: 6 },
      input2: { b: 3, c: 9 },
      expected: { a: "9", b: 3, c: 9 },
    },
    {
      input1: { a: "9", b: 6 },
      input2: { b: 3, c: 9 },
      expected: { a: "9", b: 3, c: 9 },
    },
    {
      input1: { a: 9, b: 6 },
      input2: { b: 3, c: 9 },
      expected: { a: 9, b: 3, c: 9 },
    },
    {
      input1: {},
      input2: { a: 10, b: 20 },
      expected: { a: 10, b: 20 },
    },
    {
      input1: { a: 10, b: 20 },
      input2: {},
      expected: { a: 10, b: 20 },
    },
    {
      input1: { a: 10, b: 20 },
      input2: { a: 10, b: 20 },
      expected: { a: 10, b: 20 },
    },
    {
      input1: { a: "hello", b: "world" },
      input2: { c: "hi", d: "hello" },
      expected: { a: "hello", b: "world", c: "hi", d: "hello" },
    },
    {
      input1: { a: "hello", b: "world" },
      input2: { c: "hi", d: "hello" },
      expected: { a: "hello", b: "world", c: "hi", d: "hello" },
    },
    {
      input1: { a: 1, b: "hello" },
      input2: { c: "world", d: "" },
      expected: { a: 1, b: "hello", c: "world", d: "" },
    },
    {
      input1: {},
      input2: {},
      expected: {},
    },
    {
      input1: { a: null },
      input2: { a: undefined },
      expected: { a: undefined },
    },
    {
      input1: { a: null, b: true },
      input2: { a: undefined },
      expected: { a: undefined, b: true },
    },
  ];

  for (let i = 0; i < tests.length; i++) {
    let test = tests[i];
    let result = combineObject(test.input1, test.input2);
    const passed = objectCheck(result, test.expected);
    console.log(`Test${i + 1}:`, passed ? "Pass" : "Fail");
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got", result);
    }
  }
}
testCase();
