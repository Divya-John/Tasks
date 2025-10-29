// import { objectCheck } from "../utils/utils1.js";
function sortArr(str) {
  if (typeof str !== "string") return "Not a string";
  str = str.replaceAll(/[ ]/g, "").trim();

  if (str.length === 0 || str === "") return "Empty";
  const count = {};
  for (let i of str) {
    count[i] = (count[i] || 0) + 1;
  }
  return count;
}

function testCase() {
  const tests = [
    {
      input: "hello",
      expected: { h: 1, e: 1, l: 2, o: 1 },
    },
    {
      input: "programming",
      expected: { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 },
    },
    {
      input: "",
      expected: "Empty",
    },
    {
      input: "hello world",
      expected: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 },
    },
    {
      input: "   programming",
      expected: { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 },
    },
    {
      input: "   ",
      expected: "Empty",
    },
    {
      input: 123,
      expected: "Not a string",
    },
    {
      input: [],
      expected: "Not a string",
    },
    {
      input: "abc",
      expected: { a: 1, b: 1, c: 1 },
    },
    {
      input: "1234356",
      expected: { 1: 1, 2: 1, 3: 2, 4: 1, 5: 1, 6: 1 },
    },
    {
      input: { key: 2 },
      expected: "Not a string",
    },
    {
      input: "AaaBbbC",
      expected: { A: 1, a: 2, B: 1, b: 2, C: 1 },
    },
    {
      input: "@add@fds",
      expected: { "@": 2, a: 1, d: 3, f: 1, s: 1 },
    },
    {
      input: "@ad12@f1s",
      expected: { 1: 2, 2: 1, "@": 2, a: 1, d: 1, f: 1, s: 1 },
    },
    {
      input: "Empty",
      expected: { E: 1, m: 1, p: 1, t: 1, y: 1 },
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = sortArr(test.input);
    // const passed = result === test.expected;
    // const passed = objectCheck(result,test.expected);
    let passed;
      if(typeof result!=='string'){
        const resultKey=Object.keys(result);
        const expectKey = Object.keys(test.expected);
        if(resultKey.length!==expectKey.length){
          passed=false;
          break;
        }
        for(let i=0;i<resultKey.length;i++){
          if (
            !result.hasOwnProperty(resultKey[i]) ||
            result[resultKey[i]] !== test.expected[resultKey[i]]
          ) {
            passed = false;
            break;
          } else {
            passed = true;
          }
        }
      }
      else{
        if(result===test.expected){
          passed=true;
        }
        else{
          passed=false;
        }
      }

      console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
