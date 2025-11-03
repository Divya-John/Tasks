import { objectCheck } from "../utils/utils1.js";
function swap(obj){
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
      expected: { 'null': "a",'undefined':'b' },
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
