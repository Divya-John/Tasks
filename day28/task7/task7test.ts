import { vowels } from "../task7/task7.ts";

function testCase() {
  const tests = [
    {
      input: "hello world",
      expected: 3,
    },
    {
      input: "hi Hello EveryOne",
      expected: 7,
    },
    {
      input: "iiiiiiaaaa",
      expected: 10,
    },
    {
      input: "",
      expected: "Empty",
    },
    {
      input: "   ",
      expected: "Empty",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = vowels(test.input);
    const passed = result=== test.expected

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();