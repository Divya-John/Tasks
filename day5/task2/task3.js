
function getValue(a) {
 
    if (a === undefined) {
      return "No value";
    } else if (a === null) {
      return "Empty";
    } else if (typeof a === "object" ||typeof a === "boolean" ||a === "" ||Array.isArray(a)|| isNaN(a)) 
    {
      return "Invalid input";
    } else {
      return a;
    }
}

function testCase() {
  const tests = [
    {
      input: 0,
      expected: 0,
    },
    {
      input: null,
      expected: "Empty",
    },
    {
      input: undefined,
      expected: "No value",
    },
    {
      input: [],
      expected: "Invalid input",
    },
    {
      input: "",
      expected: "Invalid input",
    },
    {
      input: -10,
      expected: -10,
    },
    {
      input: 1000,
      expected: 1000,
    },
    {
      input: 105,
      expected: 105,
    },
    {
      input: 123456,
      expected: 123456,
    },
    {
      input: 25 * 2,
      expected: 50,
    },
    {
      input: 20.4,
      expected: 20.4,
    },
    {
      input: [{}],
      expected: "Invalid input",
    },
    {
      input: [],
      expected: "Invalid input",
    },
    {
      input: true,
      expected: "Invalid input",
    },
    {
      input: 0 / 0,
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = getValue(test.input);
    const passed = result=== test.expected;

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
