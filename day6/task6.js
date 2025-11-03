
function Strength(email) {

  if (typeof email !== "string") return "Invalid input";
  if (email.includes(" ")) return "Invalid input";
  if (email.length ==0 ) return "Empty"

  if (email.length < 6) return "weak"; 
  else if (email.length < 8 && (/\w+[!@#$%^&*()-_0-9]/g).test(email)) return "medium";
  else if (
    email.length >= 8 &&
    /\w+[!@#$%^&*()-_0-9]/g.test(email) &&
    /[A-Z]/g.test(email) &&
    /[a-z]/g.test(email)
  )
    return "strong";
  else return "Invalid input";
}

function testCase() {
  const tests = [
    {
      input: "uS@jm",
      expected: "weak",
    },
    {
      input: "uSjm",
      expected: "weak",
    },
    {
      input: "us02@jm",
      expected: "medium",
    },
    {
      input: "1y02@jm",
      expected: "medium",
    },
    {
      input: "1y0  2@jm",
      expected: "Invalid input",
    },
    {
      input: "useR02@jm",
      expected: "strong",
    },
    {
      input: "use02@jm",
      expected: "Invalid input",
    },
    {
      input: "23452@jm",
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
      expected: "Empty",
    },
    {
      input: 0,
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
    const result = Strength(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
