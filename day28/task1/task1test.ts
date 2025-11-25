import { removeDuplicates } from "../task1/task1.ts";
import { arrayCheck } from "../utils.ts";

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
    const result = removeDuplicates(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
