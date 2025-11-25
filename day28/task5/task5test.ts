import { intersections } from "../task5/task5.ts";
import { arrayCheck } from "../utils.ts";

function testCase() {
  const tests = [
    {
      input1: [1, 2, 3],
      input2: [2, 3, 4],
      expected: [2, 3],
    },
    {
      input1: [],
      input2: [],
      expected: "Invalid input",
    },
    {
      input1: [1, 2, 3],
      input2: [],
      expected: "Invalid input",
    },
    {
      input1: [],
      input2: [2, 3, 4],
      expected: "Invalid input",
    },
    {
      input1: [1, 2, 3],
      input2: [5, 6, 4],
      expected: [],
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = intersections(test.input1,test.input2);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
