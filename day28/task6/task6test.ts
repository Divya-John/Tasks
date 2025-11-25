import { validInput } from "../task6/task6.ts";
import { arrayCheck } from "../utils.ts";

function testCase() {
  const tests = [
    {
      input: [1, 0, 2, "", 3, null, 4],
      expected:[1,2,3,4],
    },
    {
      input: [1,2,true],
      expected: [1,2,true],
    },
    {
      input: [0, undefined],
      expected: [],
    },
    {
      input: [null,1,2,3],
      expected: [1,2,3],
    },
    {
      input: [10, 10, false, 300],
      expected: [10,10,300],
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = validInput(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
