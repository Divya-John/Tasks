
function divisible(arr){

  if(!Array.isArray(arr)) return "Input is not a array"
  if(arr===""||arr.length===0) return "Empty array"
  
  let result=[]

  function threeDivisible(){
    for (i = 0; i < arr.length; i++) {
      if(typeof arr[i]==="number"){
        if (arr[i] % 3 === 0) {
          result.push(arr[i]);
        }
      }
    }
    return result;
  }
  threeDivisible();
  const sumofthree = result.reduce((sum, results) => {
    return sum + results;
  },0);
  return sumofthree;
}

function testCase() {
  const tests = [
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      expected: 18,
    },
    {
      input: [10, 20, 30, 40, 50],
      expected: 30,
    },
    {
      input: [15, 25, 35, 45, 55],
      expected: 60,
    },
    {
      input: "",
      expected: "Input is not a array",
    },
    {
      input: [],
      expected: "Empty array",
    },
    {
      input: ["", 1, 4, 3, 5],
      expected: 3,
    },
    {
      input: [""],
      expected: 0,
    },
    {
      input: [25, 35, 55],
      expected: 0,
    },
    {
      input: {},
      expected: "Input is not a array",
    },
    {
      input: ["", "", "   "],
      expected: 0,
    },
    {
      input: [25, 35.3, 55],
      expected: 0,
    },
    {
      input: [3.3, 3.5, 6],
      expected: 6,
    },
    {
      input: [3 * 2, 2, 6],
      expected: 12,
    },
    {
      input: [true, 2, 6],
      expected: 6,
    },
    {
      input: [23, , 6],
      expected: 6,
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = divisible(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();