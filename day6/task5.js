import { arrayCheck } from "../utils.js";
function myFilter(arr,callback){
  if (!Array.isArray(arr)) return "Invalid input";
  arr = arr.filter((array) => typeof array === "number");
  let result=[]
  for(let i=0;i<arr.length;i++){
    if(callback(arr[i])){
      result.push(arr[i])
    }
  }
  return result
}
// function filter(n){
//   return n>10 ;
// }
// console.log(myFilter([2, 3, 4, 97, 45, 32, 12], filter));



function testCase() {
  const tests = [
    {
      input: [1, 2, 3, 4, 5],
      callback: (n) => n > 2,
      expected: [3, 4, 5],
    },
    {
      input: [1, 2, 3, 4, 5],
      callback: (n) => n < 2,
      expected: [1],
    },
    {
      input: [1, 2, 3, 4, 5],
      callback: (n) => (n = 2),
      expected: [1, 2, 3, 4, 5],
    },
    {
      input: [1, 2, 3, 4, 5],
      callback: (n) => n > 3,
      expected: [4, 5],
    },
    {
      input: [1, 2, 3, 4, 5],
      callback: (n) => n % 2 === 0,
      expected: [2, 4],
    },
    {
      input: [2, 3, 4, 97, 45, 32, 12],
      callback: (n) => n > 10,
      expected: [97, 45, 32, 12],
    },
    {
      input: [],
      callback: (n) => n + 2,
      expected: [],
    },

    {
      input: [1, , 3, 4, 5],
      callback: (n) => n >= 2,
      expected: [3, 4, 5],
    },
    {
      input: [1, 2,"", "3", 4, 5],
      callback: (n) => n / 2===0,
      expected: [],
    },
    {
      input: ["", "", ""],
      callback: (n) => n + 2,
      expected: [],
    },
    {
      input: null,
      callback: (n) => n + 2,
      expected: "Invalid input",
    },
    {
      input: undefined,
      callback: (n) => n + 2,
      expected: "Invalid input",
    },
    {
      input: {},
      callback: (n) => n + 2,
      expected: "Invalid input",
    },
    {
      input: 123,
      callback: (n) => n + 2,
      expected: "Invalid input",
    },
    {
      input: 0 / 0,
      callback: (n) => n + 2,
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = myFilter(test.input, test.callback);
    const passed = arrayCheck(result, test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
