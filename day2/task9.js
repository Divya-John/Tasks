function emailValidation(email) {
  
  if(typeof email!=="string") return "Invalid input"
  if (email.includes(" ")) return false;

  for (let i = 0; i < email.length; i++) {
    const ch = email[i];
    if (ch >= "A" && ch <= "Z") {
      return false;
    }
  }
  const result = email.split("@");
  if (result.length != 2) return false;

  const [first, second] = result;
  if (!first || !second) return false;

  if (!second.includes(".")) return false;

  if (second.startsWith(".") || second.endsWith(".")) return false;

  const second2 = second.split(".");
  const lastsecontion = second2[second2.length - 1];
  if (lastsecontion.length < 2) return false;

  return true;
}


function testCase() {
  const tests = [
    {
      input: "test@example.com",
      expected: true,
    },
    {
      input: "user@domain",
      expected: false,
    },
    {
      input: "     user@domain.com",
      expected: false,
    },
    {
      input: "user@domain.com       ",
      expected: false,
    },
    {
      input: "invalid.gmail.com",
      expected: false,
    },
    {
      input: "Test@gmail.com",
      expected: false,
    },
    {
      input: "test@.gmail.com",
      expected: false,
    },
    {
      input: "test@gmail.c",
      expected: false,
    },
    {
      input: "te   st@gmail.com",
      expected: false,
    },
    {
      input: "test@gmail",
      expected: false,
    },
    {
      input: "",
      expected: false,
    },
    {
      input: 123,
      expected: "Invalid input",
    },
    {
      input: {},
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
    const test = tests[i];
    const result = emailValidation(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();