function count(str) {
  let count = "";

  if (typeof str !== "string") return "Invalid";
  if (str.trim() === "") return 0;
  count = str.trim().split(/\s+/g);
  return count.length;
}

function testCase() {
  const tests = [
    {
      input: "Hello world",
      expected: 2,
    },
    {
      input: "This is a sample sentence",
      expected: 5,
    },
    {
      input: "Programming is fun!",
      expected: 3,
    },
    {
      input: "Hello world  ",
      expected: 2,
    },
    {
      input: "   This is a sample sentence",
      expected: 5,
    },
    {
      input: "",
      expected: 0,
    },
    {
      input: {},
      expected: "Invalid",
    },
    {
      input: [],
      expected: "Invalid",
    },
    {
      input: [{}],
      expected: "Invalid",
    },
    {
      input: "   This is  a sample sentence",
      expected: 5,
    },
    {
      input: "  ",
      expected: 0,
    },
    {
      input: 123,
      expected: "Invalid",
    },
    {
      input: null,
      expected: "Invalid",
    },
    {
      input: undefined,
      expected: "Invalid",
    },
    {
      input: true,
      expected: "Invalid",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = count(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
