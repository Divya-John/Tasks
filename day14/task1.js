import { arrayCheck } from "../utils.js";
function falsy(arr) {
  if (!Array.isArray(arr)) return "Invalid input";

  arr = arr.filter((x) => {
    return Boolean(x);
  });
  return arr;
}

function testCase() {
  let tests = [
    {
      input: [54, false, null, 9, "HI", 0],
      expected: [54, 9, "HI"],
    },
    {
      input: [54, true, null, 9, "HI", 0],
      expected: [54, true, 9, "HI"],
    },
    {
      input: [54, '', null, 9, "HI", 0],
      expected: [54, 9, "HI"],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: ["", "", ""],
      expected: [],
    },
    {
      input: [" ", " ", " "],
      expected: [" ", " ", " "],
    },
    {
      input: {},
      expected: "Invalid input",
    },
    {
      input: 12,
      expected: "Invalid input",
    },
    {
      input: "",
      expected: "Invalid input",
    },
    {
      input: 0 / 0,
      expected: "Invalid input",
    },
    {
      input: null,
      expected: "Invalid input",
    },
    {
      input: undefined,
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    let test = tests[i];
    let result = falsy(test.input);
    let passed = arrayCheck(result, test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
