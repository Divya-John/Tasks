import { arrayCheck } from "../utils.js";

const noTowords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

function noWords(n) {
  if (typeof n !== "number" || isNaN(n) || !Number.isInteger(n)) {
    return "Invalid input";
  }
  if (n in noTowords) return noTowords[n];
  let text = "";

  if (n >= 1000) {
    text = text + noWords(Math.floor(n / 1000)) + " thousand ";
    n = n % 1000;
    if (n > 0) text += " ";
  }

  if (n >= 100) {
    text = text + noWords(Math.floor(n / 100)) + " hundred ";
    n = n % 100;
    if (n > 0) text += "and ";
  }

  if (n > 20) {
    text = text + noWords(Math.floor(n / 10) * 10);
    if (n % 10 > 0) {
      text += " " + noTowords[n % 10];
    }
  } else if (n > 0) {
    text += noTowords[n];
  }
  return text;
}

function testCase() {
  const tests = [
    {
      input: 723,
      expected: "seven hundred and twenty three",
    },
    {
      input: 10,
      expected: "ten",
    },
    {
      input: 25,
      expected: "twenty five",
    },
    {
      input: [],
      expected: "Invalid input",
    },
    {
      input: "",
      expected: "Invalid input",
    },
    {
      input: 1000,
      expected: "one thousand ",
    },
    {
      input: 105,
      expected: "one hundred and five",
    },
    {
      input: undefined,
      expected: "Invalid input",
    },
    {
      input: 123456,
      expected:
        "one hundred and twenty three thousand  four hundred and fifty six",
    },
    {
      input: 25 * 2,
      expected: "fifty",
    },
    {
      input: 0,
      expected: "zero",
    },
    {
      input: 20.4,
      expected: "Invalid input",
    },
    {
      input: [{}],
      expected: "Invalid input",
    },
    {
      input: [],
      expected: "Invalid input",
    },
    {
      input: true,
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = noWords(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
