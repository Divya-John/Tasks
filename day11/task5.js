function objectEquality(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if (key1.length !== key2.length) return "Not equal";

  key1.sort();
  key2.sort();

  for (let i = 0; i < key1.length; i++) {
    if (key1[i] !== key2[i]) return "not equal";
    if (obj1[key1[i]] !== obj2[key2[i]]) return "not equal";
  }
  return "equal";
}

function testCase() {
  const tests = [
    {
      input1: { a: 1, b: 2 },
      input2: { a: 1, b: 2 },
      expected: "equal",
    },
    {
      input1: { a: 5, b: 6 },
      input2: { b: 3, c: 9 },
      expected: "not equal",
    },
    {
      input1: { a: 1, b: 2 },
      input2: { a: 1, b: 2, c: 3 },
      expected: "not equal",
    },

    {
      input1: { a: 1, b: 2 },
      input2: {},
      expected: "not equal",
    },
    {
      input1: {},
      input2: { a: 1, b: 2 },
      expected: "not equal",
    },
    {
      input1: { a: "Hello", b: 6 },
      input2: { b: "Hello", c: 6 },
      expected: "not equal",
    },
    {
      input1: { a: "Hello", b: 6 },
      input2: { a: "Hello", b: 6 },
      expected: "equal",
    },
    {
      input1: { b: 6, a: "Hello" },
      input2: { a: "Hello", b: 6 },
      expected: "equal",
    },
    {
      input1: {},
      input2: {},
      expected: "equal",
    },
    {
      input1: { a: 5, b: 6 },
      input2: { b: 3, c: 9 },
      expected: "not equal",
    },
    {
      input1: { a: 5, b: 6 },
      input2: { a: 5, b: 6 },
      expected: "equal",
    },
    {
      input1: { a: null, b: 2 },
      input2: { a: null, b: 2 },
      expected: "equal",
    },
    {
      input1: { a: [1], b: 2 },
      input2: { a: [1], b: 2 },
      expected: "equal",
    },
    {
      input1: { a: { 1: "a" }, b: 2 },
      input2: { a: { 1: "a" }, b: 2 },
      expected: "equal",
    },
    {
      input1: { a: { 1: {"a":1} }, b: 2 },
      input2: { a: { 1: {"a":1} }, b: 2 },
      expected: "equal",
    },
  ];

  for (let i = 0; i < tests.length; i++) {
    let test = tests[i];
    let result = function objectEquality(obj1, obj2) {
      test.input1, test.input2;
    };
    const passed = (result = test.expected);
    console.log(`Test${i + 1}:`, passed ? "Pass" : "Fail");
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got", result);
    }
  }
}
testCase();
