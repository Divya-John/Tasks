import { str } from "../task8/task8.ts";
import { arrayCheck } from "../utils.ts";

function testCase() {
  const tests = [
    {
      input: { name: "John", age: 30 },
      expected: "name=John&age=30",
    },
    {
      input: { name: "John" },
      expected: "name=John",
    },
    {
      input: { name: "John", age: 30, mark: 29 },
      expected: "name=John&age=30&mark=29",
    },
    {
      input: {},
      expected: "Invalid input",
    },
    {
      input: {     },
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = str(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
