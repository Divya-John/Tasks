import { objectCheck } from "../utils/utils1.js";
function frequency(str){
  let count={};
  if (typeof str !== "string" || str===null ) return "Not a string";
  if(str.trim().length===0) return "Empty"
  const newStr = str.replaceAll(/[,!]/g, "").trim().toLowerCase().split(" ");
  for(let i of newStr){
    count[i]=(count[i]||0)+1
  }
  return count
}

function testCase() {
  const tests = [
    {
      input: "Hello hello world, world!",
      expected: { hello: 2, world: 2 },
    },
    {
      input: "programming Programming",
      expected: { programming: 2 },
    },
    {
      input: "",
      expected: "Empty",
    },
    {
      input: "hello world",
      expected: { hello: 1, world: 1 },
    },
    {
      input: "   programming",
      expected: { programming: 1 },
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
      expected: { abc: 1 },
    },
    {
      input: "1234356",
      expected: { 1234356: 1 },
    },
    {
      input: { key: 2 },
      expected: "Not a string",
    },
    {
      input: "Hello hello",
      expected: { hello: 2 },
    },
    {
      input: "@add @fds",
      expected: { "@add": 1, "@fds": 1 },
    },
    {
      input: "1234 1234",
      expected: { 1234: 2 },
    },
    {
      input: "Empty",
      expected: { empty: 1 },
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = frequency(test.input);
    const passed = objectCheck(result, test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
