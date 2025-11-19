import { parse } from "./task2.ts";
function testCase() {
  const tests = [
    {
      input: "name=John&age=20",
      output: { name: "John", age: "20" },
    },
    {
      input: "nameJohn&age=20",
      output: { age: "20" },
    },
    {
      input: "name==John&age=20",
      output: "Invalid input",
    },
    {
      input: "name=John&&age=20",
      output: "Invalid input",
    },
    {
      input: "name:John&&age=20",
      output: "Invalid input",
    },
    {
      input: "name=John&&&age=20",
      output: "Invalid input",
    },
    {
      input: [],
      output: "Invalid input",
    },
    {
      input: "",
      output: "Invalid input",
    },
    {
      input: {},
      output: "Invalid input",
    },
    {
      input: false,
      output: "Invalid input",
    },
    {
      input: 0 / 0,
      output: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    let test = tests[i];
    let result = parse(test.input);
    let passed = JSON.stringify(result) === JSON.stringify(test.output);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Output:", test.output);
      console.log("Got:", result);
    }
  }
}
testCase();
