import { arrayCheck } from "../utils.js";
function findTarget(arr, n) {
  if (!Array.isArray(arr)) return "Invalid input";
  arr = arr.filter((x) => typeof x === "number");

  let min=arr[0]

  if (arr.length === 0) return "Empty";
  if (typeof n !== "number") return "Invalid input";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= n) return i;
    if (n < 0) return min[i];
  }
  
  return arr.length;
}

function testCase() {
  let tests = [
    {
      input: [1, 3, 5, 6],
      target: 5,
      expected: 2,
    },
    {
      input: [2, "7", 11, 15],
      target: 9,
      expected: 1,
    },
    {
      input: [1, 3, 5, 6],
      target: 2,
      expected: 1,
    },
    {
      input: [1, 4, 6],
      target: [],
      expected: "Invalid input",
    },
    {
      input: [1, 3, 5, 6],
      target: 6,
      expected: 3,
    },
    {
      input: [1, 3, 5, 6],
      target: 7,
      expected: 4,
    },
    {
      input: [1, 3, 5, 6],
      target: -1,
      expected: 0,
    },
    {
      input: [],
      target: 7,
      expected: "Empty",
    },
    {
      input: [" ", " ", " "],
      target: 7,
      expected: "Empty",
    },
    {
      input: {},
      target: 7,
      expected: "Invalid input",
    },
    {
      input: 12,
      target: 7,
      expected: "Invalid input",
    },
    {
      input: "",
      expected: "Invalid input",
    },
    {
      input: 0 / 0,
      target: 7,
      expected: "Invalid input",
    },
    {
      input: null,
      target: 7,
      expected: "Invalid input",
    },
    {
      input: undefined,
      target: 7,
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    let test = tests[i];
    let result = findTarget(test.input, test.target);
    let passed = arrayCheck(result, test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
