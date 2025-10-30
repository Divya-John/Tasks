import { arrayCheck } from "../utils.js";
function Armstrong(num){
  if(typeof num!=="number") return "Not a number"
  if(num.length===0) return "Empty";

  const newnum=num.toString().split("")
  let result=[]
  for(let i=0;i<newnum.length;i++){
    if(newnum[i]){
      result.push(newnum[i]**newnum.length)
    }
  }
  const sum=result.reduce((acc,curr)=>acc+curr);
  const armstrong=(sum===num)?true:false;
  return armstrong;
}


function testCase() {
  const tests = [
    {
      input: 153,
      expected: true,
    },
    {
      input: 10,
      expected: false,
    },
    {
      input: 370,
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
      input: 9,
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
    const result = Armstrong(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
