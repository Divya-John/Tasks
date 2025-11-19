
function testCase() {
  let tests = [
    {
      input: [2, 1, 3, 3, 2],
      expected: 1,
    },
    {
      input: [2, "1", 3, 3, 2],
      expected: "Invalid input",
    },
    {
      input: [2, 1, 3, 3, 2, 4],
      expected: "Invalid input",
    },
    {
      input: [],
      expected: "Empty",
    },
    {
      input: [" ", " ", " "],
      expected: "Invalid input",
    },
    {
      input: {},
      expected: "Invalid input",
    },
    {
      input: 12,
      expected: "Invalid input",
    },
    {
      input: "",
      expected: "Invalid input",
    },
    {
      input: 0 / 0,
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
  ];
  for (let i = 0; i < tests.length; i++) {
    let test = tests[i];
    let result = uniquenum(test.input);
    let passed = arrayCheck(result, test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
