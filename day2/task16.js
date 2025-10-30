import { arrayCheck } from "../utils.js";
function list(arr) {

  if (!Array.isArray(arr)) return "Not an array";

  arr = arr.filter((str) => typeof str === "string" && str.trim() !== "");
  arr = arr.map((str) => str.replaceAll(/[ ]/g, ""));
  if (arr.length === 0) return "Empty array";

  let result = [];
  let le = [];
  let sorted = [];
  for (let i = 0; i < arr.length; i++) {
    le.push(arr[i].length);
  }
  sorted = le.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (sorted[i] === arr[j].length) {
        if(!result.includes(arr[j])){
          result.push(arr[j]);
        }
      }
    }
  }
  return result;
}

function testCase() {
  const tests = [
    {
      input: ["open", "source", "programming", "is", "fun"],
      expected: ["is", "fun", "open", "source", "programming"],
    },
    {
      input: ["kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "world"],
      expected: [ "world","kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"],
    },
    {
      input: ["1223", "world"],
      expected: ["1223", "world"],
    },
    {
      input: ["he    llo", "world"],
      expected: ["hello", "world"],
    },
    {
      input: ["cat", "dog", "elephant", "tiger"],
      expected: ["cat", "dog", "tiger", "elephant"],
    },
    {
      input: ["prOgrAmming   ", "Is", "   fun"],
      expected: ["Is", "fun", "prOgrAmming"],
    },
    {
      input: [123, 33, 24],
      expected: "Empty array",
    },
    {
      input: [123, "is", "fun"],
      expected: ["is", "fun"],
    },
    {
      input: ["", "", ""],
      expected: "Empty array",
    },
    {
      input: ["   ", "", ""],
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
    const result = list(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
