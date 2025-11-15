import { even } from "./task8.ts";
function testCase(){
  const tests = [
    {
      input: 2,
      output: "even",
    },
    {
      input: 100,
      output: "even",
    },
    {
      input: 0,
      output: "odd",
    },
    {
      input: 29,
      output: "odd",
    },
    {
      input: -29,
      output: "odd",
    },
    {
      input: 1,
      output: "odd",
    },
    {
      input: null,
      output: "Invalid input",
    },
    {
      input: "2",
      output: "Invalid input",
    },
    {
      input: true,
      output: "Invalid input",
    },
    {
      input: [],
      output: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    let test = tests[i];
    let result = even(test.input);
    let passed = JSON.stringify(result)===JSON.stringify(test.output);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Output:", test.output);
      console.log("Got:", result);
    }
  }
}
testCase()