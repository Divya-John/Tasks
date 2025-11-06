import { arrayCheck } from "../utils.js";
function add(arr) {
  if (!Array.isArray(arr)) return "Invalid input";
  arr = arr.filter((x) => typeof x === "number");
  if(arr.length===0) return "Invalid input";
  arr = Number(arr.toString().replace(/[,]/g, ""));
  let newArr = arr + 1;
  newArr = newArr.toString().split("");
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = Number(newArr[i]);
  }
  return newArr;
}

function testCase() {
  let tests = [
    {
      input: [1, 2, 3],
      expected: [1, 2, 4],
    },
    {
      input: [1, "2", 3],
      expected: [1, 4],
    },
    {
      input: ["1", [1], "3"],
      expected: "Invalid input",
    },
    {
      input: [9],
      expected: [1, 0],
    },
    {
      input: [-1],
      expected: [0],
    },
    {
      input: [],
      expected: "Invalid input",
    },
    {
      input: ["", "", ""],
      expected: "Invalid input",
    },
    {
      input: [" ", " ", " "],
      expected: "Invalid input",
    },
    {
      input: [{}],
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
