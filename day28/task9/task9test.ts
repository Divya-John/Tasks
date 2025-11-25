import { sort } from "../task9/task9.ts";
import { arrayCheck } from "../utils.ts";

function testCase() {
  const tests = [
    {
      input: [1, 2, 3, 4, 5],
      expected: "ascending",
    },
    {
      input: [1, 3, 7, 4, 2],
      expected: "unsorted",
    },
    {
      input: [5, 4, 3, 2, 1],
      expected: "descending",
    },
    {
      input: [-4, -2, 1, 2, 3],
      expected: "ascending",
    },
    {
      input: [1, 1, 1],
      expected: "ascending",
    },
    {
      input: [],
      expected: "Empty",
    },
    {
      input: [],
      expected: "Empty",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = sort(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
