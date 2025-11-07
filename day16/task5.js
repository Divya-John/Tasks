import { arrayCheck } from "../utils.js";
function triangle(arr) {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return "Invalid input";
  for (let i = 0; i < arr.length; i++) {
    if (
      !Array.isArray(arr[i]) ||
      arr[i].some((x) => typeof x !== "number" || Number.isNaN(x))
    ) {
      return "Invalid input";
    }
    if (arr[i].length === 0) return "Empty";
    if (arr[i].length !== i + 1) return "Invalid input";
  }
  let rows = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      rows.add(j);
    }
  }
  let mini = [];
  for (let r of rows) {
    for (let j = 0; j < arr[r].length; j++) {
      mini.push(Math.min(...arr[r]));
    }
  }
  let newArr = [...new Set(mini)];
  return newArr.reduce((acc, current) => acc + current, 0);
}

function testCase() {
  let tests = [
    {
      input: [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]],
      expected: 11,
    },
    {
      input: [[3, 4], [2], [6, 5, 7], [4, 1, 8, 3]],
      expected: "Invalid input",
    },
    {
      input: [],
      expected: "Invalid input",
    },
    {
      input: [" ", " ", " "],
      expected: "Invalid input",
    },
    {
      input: [[]],
      expected: "Empty",
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
    let result = triangle(test.input, test.target);
    let passed = arrayCheck(result, test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
