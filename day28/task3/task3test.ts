import { armstorng } from "../task3/task3.ts";

function testCase() {
  const tests = [
    {
      input: 153,
      expected: true,
    },
    {
      input: 124,
      expected: false,
    },
    {
      input: 0,
      expected: true,
    },
    {
      input: 1,
      expected: true,
    },
    {
      input: -11,
      expected: "Not a armstrong",
    },
    {
      input: -1,
      expected: "Not a armstrong",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = armstorng(test.input);
    const passed = result=== test.expected

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();