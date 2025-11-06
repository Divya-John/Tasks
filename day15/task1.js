import { arrayCheck } from "../utils.js";
function add(arr, n) {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return "Empty";
  if (typeof n !== "number") return "Invalid input";
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (typeof arr[i] === "number") {
        const sum = arr[i] + arr[j];
        if (sum === n) {
          return [i, j];
        }
      }
    }
  }
  return -1;
}

function testCase() {
  let tests = [
    {
      input: [2, 7, 11, 15],
      size: 9,
      expected: [0, 1],
    },
    {
      input: [2, "7", 11, 15],
      size: 9,
      expected: -1,
    },
    {
      input: [3, 6, 2, 6, 2],
      size: 4,
      expected: [2, 4],
    },
    {
      input: [0, 0, 0, 0],
      size: 0,
      expected: [0, 1],
    },
    {
      input: [],
      expected: "Empty",
    },
    {
      input: ["", "", ""],
      size: 2,
      expected: -1,
    },
    {
      input: [" ", " ", " "],
      size: 3,
      expected: -1,
    },
    {
      input: [{}],
      size: {},
      expected: "Invalid input",
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
    let result = add(test.input, test.size);
    let passed = arrayCheck(result, test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
