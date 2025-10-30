import { arrayCheck } from "../utils.js";
function max(arr) {
  if (!Array.isArray(arr)) return "Not an array";

  arr=arr.filter((array)=> typeof(array)==="number"&& !isNaN(array))
  if (arr.length === 0) return "Empty array";
  if (arr.length < 3) return "Invalid input";

  arr.sort((a, b) => b - a);
  const maxThree = arr.slice(0, 3);
  const product = maxThree.reduce((acc, curr) => acc * curr);
  return product;

}

function testCase() {
  const tests = [
    {
      input: [1, 2, 3, 4],
      expected: 24,
    },
    {
      input: [-4, -3, -2, -1, 0],
      expected: 0,
    },
    {
      input: [-1, -2, -3, -4, -5],
      expected: -6,
    },
    {
      input: [1, -2, 3, -4, -5],
      expected: -6,
    },
    {
      input: [1, 2],
      expected: "Invalid input",
    },
    {
      input: "",
      expected: "Not an array",
    },
    {
      input: [],
      expected: "Empty array",
    },
    {
      input: [-1, , -3, -4, -5],
      expected: -12,
    },
    {
      input: [-1, "erser", -3, -4, -5],
      expected: -12,
    },
    {
      input: undefined,
      expected: "Not an array",
    },
    {
      input: NaN,
      expected: "Not an array",
    },
    {
      input: {},
      expected: "Not an array",
    },
    {
      input: [3, 3, 3, 3],
      expected: 27,
    },
    {
      input: ["a", "b", "c"],
      expected: "Empty array",
    },
    {
      input: ["", "", ""],
      expected: "Empty array",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = max(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
