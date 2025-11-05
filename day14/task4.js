function check(str1, str2) {
  
  if (typeof str1 !== "string"||!str1.trim()) return "Invalid input";
  if (typeof str2 !== "string" || !str1.trim()) return "Invalid input";
  if(str1.length===0) return "Invalid input"
  if (str2.includes(str1)) return true;
  return false;
}

function testCase() {
  let tests = [
    {
      input1: "a",
      input2: "b",
      expected: false,
    },
    {
      input1: "aa",
      input2: "aab",
      expected: true,
    },
    {
      input1: "a",
      input2: "ab",
      expected: true,
    },
    {
      input1: "a",
      input2: "",
      expected: false,
    },
    {
      input1: "aaa",
      input2: "aab",
      expected: false,
    },
    {
      input1: [],
      input2: "bb",
      expected: "Invalid input",
    },
    {
      input1: "",
      input2: "bb",
      expected: "Invalid input",
    },
    {
      input1: "aa",
      expected: "Invalid input",
    },
    {
      input1: "     ",
      input2: "bba",
      expected: "Invalid input",
    },
    {
      input1: "aaac",
      input2: {},
      expected: "Invalid input",
    },
    {
      input1: 0 / 0,
      expected: "Invalid input",
    },
    {
      input1: null,
      input2: null,
      expected: "Invalid input",
    },
    {
      input1: undefined,
      input2: null,
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    let test = tests[i];
    let result = check(test.input1, test.input2);
    let passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
