import { arrayCheck } from "../utils.js";
function uniquenum(arr) {
  if (!Array.isArray(arr)) return "Invalid input";
  if (arr.length === 0) return "Empty";
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || Number.isNaN(arr[i])) {
      return "Invalid input";
    }
  }
  let count = {};
  for (let i of arr) {
    count[i] = (count[i] || 0) + 1;
  }
  let v = Object.values(count);
  let k = Object.keys(count);
  let oneCount = v.filter((x) => x === 1).length;
  if (oneCount !== 1) return "Invalid input";
  let index = v.indexOf(1);
  return Number(k[index]);
}

function testCase() {
  let tests = [
    {
      input: [2, 1, 3, 3, 2],
      expected: 1,
    },
    {
      input: [2, "1", 3, 3, 2],
      expected: "Invalid input",
    },
    {
      input: [2, 1, 3, 3, 2, 4],
      expected: "Invalid input",
    },
    {
      input: [],
      expected: "Empty",
    },
    {
      input: [" ", " ", " "],
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
    let result = uniquenum(test.input);
    let passed = arrayCheck(result, test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
