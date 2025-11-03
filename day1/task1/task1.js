import { arrayCheck } from "../../utils.js";
function myMap(array,callback){
  let result=[]
  for(let i=0;i<array.length;i++){
    result.push(callback(array[i]))
  }
  return result
}

// function newArray(n){
//   return n= n*2
// }
// console.log(myMap([1,2,3,4,5], newArray));

function testCase() {
  const tests = [
    {
      input: [1, 2, 3, 4, 5],
      callback: (n) => n * 2,
      expected: [2, 4, 6, 8, 10],
    },
    {
      input: [1, 2, 3, 4, 5],
      callback: (n) => n - 2,
      expected: [-1, 0, 1, 2, 3],
    },
    {
      input: [1, 2, 3, 4, 5],
      callback: (n) => n + 2,
      expected: [3, 4, 5, 6, 7],
    },
    {
      input: [1, 2, 3, 4, 5],
      callback: (n) => n / 2,
      expected: [0.5, 1, 1.5, 2, 2.5],
    },
    {
      input: [1, 2, 3, 4, 5],
      callback: (n) => n % 2,
      expected: [1, 0, 1, 0, 1],
    },
    {
      input: [],
      callback: (n) => n + 2,
      expected: [],
    },
    {
      input: [1, , 3, 4, 5],
      callback: (n) => n % 2,
      expected: [1, 1, 0, 1],
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = myMap(test.input,test.callback);
    const passed = arrayCheck(result,test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
