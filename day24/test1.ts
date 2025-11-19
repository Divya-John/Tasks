import { rotate } from "./task1.ts";
function testCase() {
  const tests = [
    {
      input: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      output: [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ],
    },
    {
      input: [
        [1, 2, 3],
        [4, 5, 6],
      ],
      output: [
        [4, 1],
        [5, 2],
        [6, 3],
      ],
    },
    {
      input: [
        [1, 2],
        [4, 5, 6],
      ],
      output: "Invalid input",
    },
    {
      input: [[""], [4, 5, 6]],
      output: "Invalid input",
    },
    {
      input: [
        [, ,],
        [4, 5, 6],
      ],
      output: "Invalid input",
    },
    {
      input: [],
      output: "Empty",
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
    let result = rotate(test.input);
    let passed = JSON.stringify(result) === JSON.stringify(test.output);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Output:", test.output);
      console.log("Got:", result);
    }
  }
}
testCase();
