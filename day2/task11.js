
import { arrayCheck } from "../utils.js";

let isPerfectsquare = true;
function perSquare(n){
  let i;

  if(typeof n==="number"){
    if (n < 0) return !isPerfectsquare;
    if (n === 0) return isPerfectsquare;
    for (i = 1; i < n; i++) {
      if (i * i === n ) {
        return isPerfectsquare;
      }
    }
    if (i * i != n) {
      return !isPerfectsquare;
    }
    if(n<0) return !isPerfectsquare;
  }
  else return "Not a number"
}
// console.log(perSquare(16));
// console.log(perSquare(10));
// console.log(perSquare(25));




function testCase() {
  const tests = [
    {
      input: 16,
      expected: true,
    },
    {
      input: 10,
      expected: false,
    },
    {
      input: 25,
      expected: true,
    },
    {
      input: [],
      expected: "Not a number",
    },
    {
      input: "",
      expected: "Not a number",
    },
    {
      input: 0,
      expected: true,
    },
    {
      input: -25,
      expected: false,
    },
    {
      input: undefined,
      expected: "Not a number",
    },
    {
      input: NaN,
      expected: false,
    },
    {
      input: 25 * 2,
      expected: false,
    },
    {
      input: 20 - 4,
      expected: true,
    },
    {
      input: 20.4,
      expected: false,
    },
    {
      input: [{}],
      expected: "Not a number",
    },
    {
      input: [],
      expected: "Not a number",
    },
    {
      input: true,
      expected: "Not a number",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = perSquare(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
