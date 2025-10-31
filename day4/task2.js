import { arrayCheck } from "../utils.js";

function findPermutations(str) {
  if (typeof str !== "string") return "Not a sting";
  if (str.length === 0 || str.trim() === "") return "Empty";
  if (str.length <= 1) {
    return [str];
  }
  const result = [];
  str=str.replaceAll(/[ ]/g,"")
  for (let i = 0; i < str.length; i++) {
    let first = str[i];
    let remainingstr =
      str.slice(0, i) +
      str.slice(i + 1);

    let subPer = findPermutations(remainingstr);
    for (let j = 0; j < subPer.length; j++) {
      result.push(first + subPer[j]);
    }
  }
  return [...new Set(result)];
}
// console.log(findPermutations('abc'))

function testCase() {
  const tests = [
    {
      input: "abc",
      expected: ["abc", "acb", "bac", "bca", "cab", "cba"],
    },
    {
      input: "a",
      expected: ["a"],
    },
    {
      input: "ab",
      expected: ["ab", "ba"],
    },
    {
      input: "ab ",
      expected: ["ab", "ba"],
    },
    {
      input: "            ab",
      expected: ["ab", "ba"],
    },
    {
      input: "a bc",
      expected: ["abc", "acb", "bac", "bca", "cab", "cba"],
    },
    {
      input: "12",
      expected: ["12", "21"],
    },
    {
      input: "",
      expected: "Empty",
    },
    {
      input: "         ",
      expected: "Empty",
    },
    {
      input: [],
      expected: "Not a sting",
    },
    {
      input: 123,
      expected: "Not a sting",
    },
    {
      input: {},
      expected: "Not a sting",
    },
    {
      input: null,
      expected: "Not a sting",
    },
    {
      input: undefined,
      expected: "Not a sting",
    },
    {
      input: 0 / 0,
      expected: "Not a sting",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = findPermutations(test.input);
    const passed = arrayCheck(result, test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
