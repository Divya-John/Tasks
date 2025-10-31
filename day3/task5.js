import { arrayCheck } from "../utils.js";
function sum(...n) {
  if(n.length===0) return "Empty"
  
  for(let i=0;i<n.length;i++){
    let num=n[i]
    if(typeof num!=="number"||isNaN(num)) return "Not a number"
  }

  const sum = n.reduce((acc, curr) => acc + curr);
  return sum;
}

function testCase() {
  const tests = [
    {
      input: [1, 2, 3, 4],
      expected: 10,
    },
    {
      input: [1, 2],
      expected: 3,
    },
    {
      input: [-1, 0, 2],
      expected: 1,
    },
    {
      input: [-1, 0, 2.5],
      expected: 1.5,
    },
    {
      input: [25 * 2, 6],
      expected: 56,
    },
    {
      input: [],
      expected: "Empty",
    },
    {
      input: ["-1", "0", "2.5"],
      expected: "Not a number",
    },
    {
      input: [""],
      expected: "Not a number",
    },
    {
      input: [0],
      expected: 0,
    },
    {
      input: [-25, -24],
      expected: -49,
    },
    {
      input: [0.0005, -24],
      expected: -23.9995,
    },
    {
      input: [undefined],
      expected: "Not a number",
    },
    {
      input: [NaN],
      expected: "Not a number",
    },
    {
      input: [{}],
      expected: "Not a number",
    },
    {
      input: [true],
      expected: "Not a number",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = sum(...test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
