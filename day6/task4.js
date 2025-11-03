function pattern(n){
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) return "Invalid input";
  if(n===0) return "Empty"
  let str=[]
  for(i=65;i<=90;i++){
    str.push(i)
  }
  let result=""
  for (i = 0; i < n; i++) {
    result+="\n"+String.fromCharCode(str[i]).repeat(i + 1).split("").join("")
  }
  return result
}

function testCase() {
  const tests = [
    {
      input: 5,
      expected: `\nA\nBB\nCCC\nDDDD\nEEEEE`,
    },
    {
      input: {},
      expected: "Invalid input",
    },
    {
      input: { value: 2 },
      expected: "Invalid input",
    },
    {
      input: [],
      expected: "Invalid input",
    },
    {
      input: [3],
      expected: "Invalid input",
    },
    {
      input: "",
      expected: "Invalid input",
    },
    {
      input: "4",
      expected: "Invalid input",
    },
    {
      input: 2,
      expected: "\nA\nBB",
    },
    {
      input: 0,
      expected: "Empty",
    },
    {
      input: -1.5,
      expected: "Invalid input",
    },
    {
      input: -1,
      expected: "Invalid input",
    },
    {
      input: 1.9,
      expected: "Invalid input",
    },
    {
      input: null,
      expected: "Invalid input",
    },
    {
      input: undefined,
      expected: "Invalid input",
    },
    {
      input: 0 / 0,
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = pattern(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
