function fact(n){
  if (typeof n != "number" || Math.round(n) !== n) return "Invalid";
  if (n < 0) return "Negative number";
  if(n===0||n===1) return 1;
  else return n*fact(n-1)
}

function testCase() {
  const tests = [
    {
      input: 5,
      expected: 120,
    },
    {
      input: 13,
      expected: 6227020800,
    },
    {
      input: 2,
      expected: 2,
    },
    {
      input: 4,
      expected: 24,
    },
    {
      input: null,
      expected: "Invalid",
    },
    {
      input: 0,
      expected: 1,
    },
    {
      input: undefined,
      expected: "Invalid",
    },
    {
      input: [],
      expected: "Invalid",
    },
    {
      input: 6,
      expected: 720,
    },
    {
      input: 1,
      expected: 1,
    },
    {
      input: -24,
      expected: "Negative number",
    },
    {
      input: {},
      expected: "Invalid",
    },
    {
      input: "",
      expected: "Invalid",
    },
    {
      input: true,
      expected: "Invalid",
    },
    {
      input: 7,
      expected: 5040,
    },
    {
      input: 7.1,
      expected: "Invalid",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = fact(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
