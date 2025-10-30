import { arrayCheck } from "../utils.js";
function longest(arr) {
  if (!Array.isArray(arr)) return "Not an array";

  arr = arr.filter((str) => typeof str === "string" && str.trim() !== "");
  arr = arr.map((str) => str.replaceAll(/[ ]/g, "").toLowerCase());
  if (arr.length === 0) return "Empty array";
  if (arr.length <= 1) return "Invalid input";

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > result.length) {
      result = arr[i];
    }
  }
  return result;
}

function testCase() {
  const tests = [
    {
      input: ["cat", "dog", "elephant", "tiger"],
      expected: "elephant",
    },
    {
      input: ["apple", "banana", "orange"],
      expected: "banana",
    },
    {
      input: ["programming", "is", "fun"],
      expected: "programming",
    },
    {
      input: ["programm     ing", "is", "fun"],
      expected: "programming",
    },
    {
      input: ["programming   ", "is", "   fun"],
      expected: "programming",
    },
    {
      input: ["prOgrAmming   ", "Is", "   fun"],
      expected: "programming",
    },
    {
      input: [123 ,33, 24],
      expected: "Empty array",
    },
    {
      input: [123, "is", "fun"],
      expected: "fun",
    },
    {
      input: ["fun"],
      expected: "Invalid input",
    },
    {
      input: ["", "", ""],
      expected: "Empty array",
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
    const result = longest(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
