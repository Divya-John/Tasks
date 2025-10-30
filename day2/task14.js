
function checkPalindrom(plaindrom) {
  if(typeof plaindrom!=="string") return "Not a sting"
  if (plaindrom.length === 0) return "Empty";

  let spaceremoved = plaindrom
    .replace(/[@#$%^&*()_+\-=?<>\[\]{},.!\s]/g, "")
    .toLowerCase();
  const newPa = spaceremoved.split("").reverse().join("");
  if (spaceremoved == newPa) {
    return true;
  } else {
   return false;
  }
}


function testCase() {
  const tests = [
    {
      input: "A man, a plan, a canal, Panama!",
      expected: true,
    },
    {
      input: "Racecar",
      expected: true,
    },
    {
      input: "Hello, world!",
      expected: false,
    },
    {
      input: "Rac@()ecar",
      expected: true,
    },
    {
      input: "hi",
      expected: false,
    },
    {
      input: "   hih   ",
      expected: true,
    },
    {
      input: "D",
      expected: true,
    },
    {
      input: "Race868ecar",
      expected: true,
    },
    {
      input: "Race867ecar",
      expected: false,
    },
    {
      input: "",
      expected: "Empty",
    },
    {
      input: [],
      expected: "Not a sting",
    },
    {
      input: 123,
      expected: "Not a sting",
    },
    {
      input: {},
      expected: "Not a sting",
    },
    {
      input: null,
      expected: "Not a sting",
    },
    {
      input: undefined,
      expected: "Not a sting",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = checkPalindrom(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();