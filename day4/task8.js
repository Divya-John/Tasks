import { arrayCheck } from "../utils.js";
function productofthree(arr){

  if (!Array.isArray(arr)) return "Input is not a array";
  if (arr.length === 0) return "Empty array";
  
  arr=arr.filter((num)=>typeof num==="number" && !isNaN(num))
  if(arr.length<3) return "Invalid input"
  
  const newArr = arr.sort((a, b) => b - a);
  const result = newArr.slice(0, 3);
  const sum = result.reduce((acc, curr) => acc * curr);
  return sum;
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
      expected: "Input is not a array",
    },
    {
      input: [],
      expected: "Invalid input",
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
      expected: "Input is not a array",
    },
    {
      input: NaN,
      expected: "Input is not a array",
    },
    {
      input: {},
      expected: "Input is not a array",
    },
    {
      input: [3, 3, 3, 3],
      expected: 27,
    },
    {
      input: ["a", "b", "c"],
      expected: "Invalid input",
    },
    {
      input: ["", "", ""],
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = productofthree(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
