import { arrayCheck } from "../utils.js";
function even(arr){
  if(!Array.isArray(arr)) return "Not a array";

  if(arr.length===0) return "Empty";
  const newList = [];
  for(let i=0;i<arr.length;i++){
    if(typeof arr[i]==="number"){
      if (arr[i] % 2 === 0) {
        newList.push(arr[i]);
      }
    }
  }
  if (newList.length === 0) return "No even numbers in array";
  return newList;
}

function testCase() {
  const tests = [
    {
      input: [1, 2, 3, 4, 5, 6],
      expected: [2, 4, 6],
    },
    {
      input: [7, 8, 9, 10, 11, 12],
      expected: [8, 10, 12],
    },
    {
      input: [2, 4, 6, 8, 10],
      expected: [2, 4, 6, 8, 10],
    },
    {
      input: [-2, -4, -6, -8, -10],
      expected: [-2, -4, -6, -8, -10],
    },
    {
      input: [5, 7, 11, 13],
      expected: "No even numbers in array",
    },
    {
      input: [],
      expected: "Empty",
    },
    {
      input: {},
      expected: "Not a array",
    },
    {
      input: 123,
      expected: "Not a array",
    },
    {
      input: [7, 8, 9, -10, 11, 12],
      expected: [8, -10, 12],
    },
    {
      input: ["", 6, 8, 10],
      expected: [6, 8, 10],
    },
    {
      input: [ 6, 8, , 10],
      expected: [6, 8, 10],
    },
    {
      input: [{}, 6, 8, 10],
      expected: [6, 8, 10],
    },
    {
      input: ["     ", 6, 8, 10],
      expected: [6, 8, 10],
    },
    {
      input: [0, 0, 0, 0],
      expected: [0, 0, 0, 0],
    },
    {
      input: [6.4, , 8, 10],
      expected: [8, 10],
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = even(test.input);
    // const passed = result === test.expected;
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
