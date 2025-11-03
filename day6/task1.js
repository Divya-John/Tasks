import { arrayCheck } from "../utils.js";
function rearrage(arr) {

  if (!Array.isArray(arr)) return "Not an array";
  arr = arr.filter((num) => typeof num === "number");
  if(arr.length===0) return "Empty array"

  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  let newArr = [...even, ...odd];
  return newArr;
}

function testCase() {
  const tests = [
    {
      input: [3, 2, 4, 1, 5, 8],
      expected: [2, 4, 8, 3, 1, 5],
    },
    {
      input: [3.2, 2, 4, 1, 5.5, 8],
      expected: [2, 4, 8, 3.2, 1, 5.5],
    },
    {
      input: [2, 2, 4, 1, 0, 8],
      expected: [2, 2, 4, 0, 8, 1],
    },
    {
      input: [3, 2, , 1, 5, 8],
      expected: [2, 8, 3, 1, 5],
    },
    {
      input: [5, 3, 57, 43, 5, 8],
      expected: [8, 5, 3, 57, 43, 5],
    },
    {
      input: [3, 2, "   ", 1, 5, 8],
      expected: [2, 8, 3, 1, 5],
    },
    {
      input: ["", "", ""],
      expected: "Empty array",
    },
    {
      input: [, ,],
      expected: "Empty array",
    },
    {
      input: ["   ", 2, ""],
      expected: [2],
    },
    {
      input: [],
      expected: "Empty array",
    },
    {
      input: {},
      expected: "Not an array",
    },
    {
      input: 123,
      expected: "Not an array",
    },
    {
      input: true,
      expected: "Not an array",
    },
    {
      input: ["", "", ""],
      expected: "Empty array",
    },
    {
      input: [{}],
      expected: "Empty array",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = rearrage(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
