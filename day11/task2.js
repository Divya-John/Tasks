function getTicketPrice(age) {
  if (age < 0 || typeof age !== "number" || isNaN(age) || !Number.isInteger(age))
    return "Invalid input";
  if (age < 12) return "$10";
  else if (age > 13 && age < 59) return "$20";
  else return "$15";
}

function testCase() {
  const tests = [
    {
      input: 60,
      expected: "$15",
    },
    {
      input: 40,
      expected: "$20",
    },
    {
      input: 12,
      expected: "$15",
    },
    {
      input: 9,
      expected: "$10",
    },
    {
      input: 0,
      expected: "$10",
    },
    {
      input: -9,
      expected: "Invalid input",
    },
    {
      input: 1.2,
      expected: "Invalid input",
    },
    {
      input: 59,
      expected: "$15",
    },
    {
      input: "",
      expected: "Invalid input",
    },
    {
      input: {},
      expected: "Invalid input",
    },
    {
      input: [8],
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
    const result = getTicketPrice(test.input);
    const passed = result === test.expected;
    console.log(`Test${i + 1}:`, passed ? "Pass" : "Fail");
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got", result);
    }
  }
}
testCase();
