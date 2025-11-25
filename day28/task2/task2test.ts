import { frequent } from "../task2/task2.ts";
import { arrayCheck } from "../utils.ts";

function testCase() {
  const tests = [
    {
      input: [1, 2, 2, 3, 3, 3, 4],
      expected: 3,
    },
    {
      input: [1, 1, 1],
      expected: 1,
    },
    {
      input: [0, 0, 0,1],
      expected: 0,
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [ 10, 10 ,300 ,300],
      expected: 10,
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = frequent(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
