function pattern(str){
  let result = [];
  if (typeof str !== "string") {
    return "Invalid input";
  }
  if (str === "") return "Empty";
  str = str.trim();

  for (i = 0; i < str.length; i++) {
    result.push(str.slice(0, i + 1));
  }
  for (j = 1; j < str.length; j++) {
    result.push(str.slice(j));
  }
  return result.join("\n")
}

function testCase() {
  const tests = [
    {
      input: "CAT",
      expected: `C\nCA\nCAT\nAT\nT`,
    },
    {
      input: "RAT",
      expected: `R\nRA\nRAT\nAT\nT`,
    },
    {
      input: "HAPPY",
      expected: `H\nHA\nHAP\nHAPP\nHAPPY\nAPPY\nPPY\nPY\nY`,
    },
    {
      input: "",
      expected: `Empty`,
    },
    {
      input: "C@T",
      expected: `C\nC@\nC@T\n@T\nT`,
    },
    {
      input: "HELLO HI",
      expected: `H\nHE\nHEL\nHELL\nHELLO\nHELLO \nHELLO H\nHELLO HI\nELLO HI\nLLO HI\nLO HI\nO HI\n HI\nHI\nI`,
    },
    {
      input: {},
      expected: `Invalid input`,
    },
    {
      input: "RAT",
      expected: `R\nRA\nRAT\nAT\nT`,
    },
    {
      input: "HAPPY",
      expected: `H\nHA\nHAP\nHAPP\nHAPPY\nAPPY\nPPY\nPY\nY`,
    },
    {
      input: [],
      expected: `Invalid input`,
    },
    {
      input: null,
      expected: `Invalid input`,
    },
    {
      input: 123,
      expected: `Invalid input`,
    },
    {
      input: undefined,
      expected: `Invalid input`,
    },
    {
      input: "NOT",
      expected: `N\nNO\nNOT\nOT\nT`,
    },
    {
      input: "K",
      expected: `K`,
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = pattern(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
