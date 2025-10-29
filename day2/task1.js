function primeNumber(n) {
  if (typeof n != "number" || Math.round(n) !== n) return "Invalid";
  if (n < 0) return "Negative number";
  if (n === 0 || n === 1) return "Not a prime number";
  
  for (i = 2; i < n - 1; i++) {
    if (n % i === 0) {
      return "Not a prime number";
    }
  }
  return "prime number";
}

function testCase() {
  const tests = [
    {
      input: 29,
      expected: "prime number",
    },
    {
      input: 13,
      expected: "prime number",
    },
    {
      input: 2,
      expected: "prime number",
    },
    {
      input: 4,
      expected: "Not a prime number",
    },
    {
      input: null,
      expected: "Invalid",
    },
    {
      input: 0,
      expected: "Not a prime number",
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
      input: 100,
      expected: "Not a prime number",
    },
    {
      input: 1,
      expected: "Not a prime number",
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
      expected: "prime number",
    },
    {
      input: 7.1,
      expected: "Invalid",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = primeNumber(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
