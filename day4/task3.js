import { objectCheck } from "../utils/utils1.js";
function swap(obj) {
  if (
    typeof obj !== "object" ||
    obj === null ||
    obj === undefined ||
    Array.isArray(obj)
  )
    return "Invalid input";
  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => [val, key])
  );
}

function testCase() {
  const tests = [
    {
      input: { a: 1, b: 2 },
      expected: { 1: "a", 2: "b" },
    },
    {
      input: { a: 1, b: 2, c: 3 },
      expected: { 1: "a", 2: "b", 3: "c" },
    },
    {
      input: { a: 1, b: 2, c: 3,c:4 },
      expected: { 1: "a", 2: "b", 4: "c" },
    },
    {
      input: { a: "Hi", b: "Hello" },
      expected: { Hi: "a", Hello: "b" },
    },
    {
      input: {},
      expected: {},
    },
    {
      input: { a: 1, b: 1 },
      expected: { 1: "b" },
    },
    {
      input: { a: null, b: undefined },
      expected: { null: "a", undefined: "b" },
    },
    {
      input: { a: true, b: false },
      expected: { true: "a", false: "b" },
    },
    {
      input: { a: "@", b: "$" },
      expected: { "@": "a", $: "b" },
    },
    {
      input: { b: [1, 2] },
      expected: { "1,2": "b" },
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
      input: [],
      expected: "Invalid input",
    },
    {
      input: "",
      expected: "Invalid input",
    },
    {
      input: 0 / 0,
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = swap(test.input);
    const passed = objectCheck(result, test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
