function calculateTotal(billAmount,taxPercentage=20){
  if(billAmount<0 || typeof billAmount !=="number" || isNaN(billAmount)) return "Invalid input";

  const taxamount=billAmount*(taxPercentage/100)
  const tax = billAmount + taxamount;
  return tax
}

function testCase(){
  const tests = [
    {
      input: 5,
      expected: 6,
    },
    {
      input: 10,
      expected: 12,
    },
    {
      input: 1,
      expected: 1.2,
    },
    {
      input: 30,
      expected: 36,
    },
    {
      input: 1300,
      expected: 1560,
    },
    {
      input: 100000,
      expected: 120000,
    },
    {
      input: 24.7,
      expected: 29.64,
    },
    {
      input: 0,
      expected: 0,
    },
    {
      input: -3,
      expected: "Invalid input",
    },
    {
      input: {},
      expected: "Invalid input",
    },
    {
      input: "-3",
      expected: "Invalid input",
    },
    {
      input: [],
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
  for(let i=0;i<tests.length;i++){
    const test=tests[i]
    const result = calculateTotal(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i+1}:`,passed?"Pass":"Fail");
    if(!passed){
      console.log("Expected:",test.expected);
      console.log("Got:",result)
    }
  }
}
testCase()