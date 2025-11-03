import { arrayCheck } from "../utils.js";

function toRoman(num) {
  if (typeof num !== "number" || isNaN(num) || !Number.isInteger(num)) {
    return "Invalid";
  }
  if (num <= 0 || num > 2000) {
    return "Input must be between 1 and 2000";
  }
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  
  let result = "";
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      num -= values[i];
      result += symbols[i];
    }
  }
  return result;
}

function testCase() {
  const tests = [
    {
      input: 29,
      expected: "XXIX",
    },
    {
      input: 13,
      expected: "XIII",
    },
    {
      input: 2,
      expected: "II",
    },
    {
      input: 4,
      expected: "IV",
    },
    {
      input: null,
      expected: "Invalid",
    },
    {
      input: 0,
      expected: "Input must be between 1 and 2000",
    },
    {
      input: undefined,
      expected: "Invalid",
    },
    {
      input: [],
      expected: "Invalid",
    },
    {
      input: 100,
      expected: "C",
    },
    {
      input: 1,
      expected: "I",
    },
    {
      input: -24,
      expected: "Input must be between 1 and 2000",
    },
    {
      input: {},
      expected: "Invalid",
    },
    {
      input: "",
      expected: "Invalid",
    },
    {
      input: true,
      expected: "Invalid",
    },
    {
      input: 7.1,
      expected: "Invalid",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = toRoman(test.input);
    const passed = arrayCheck(result, test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
