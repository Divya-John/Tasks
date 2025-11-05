function noRepatingChar(s){

  if(typeof s!=="string")return "Invalid input";
  s=s.trim()
  const count = {};
  for (let i of s) {
    if(i===" ") continue;
    count[i] = (count[i] || 0) + 1;
  }
  let v = Object.values(count);
  let k = Object.keys(count);
  
  let key=k[v.indexOf(1)];
  return s.indexOf(key)

}

function testCase() {
  const tests = [
    {
      input: "roses area red",
      expected: 1,
    },
    {
      input: "aabb",
      expected: -1,
    },
    {
      input: "    aabb",
      expected: -1,
    },
    {
      input: "  roses area red   ",
      expected: 1, 
    },
    {
      input: "roses red",
      expected: 1,
    },
    {
      input: "roses redo",
      expected: 8,
    },
    {
      input: 25,
      expected: "Invalid input",
    },
    {
      input: [],
      expected: "Invalid input",
    },
    {
      input: "",
      expected: -1,
    },
    {
      input: undefined,
      expected: "Invalid input",
    },
    {
      input: NaN,
      expected: "Invalid input",
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
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = noRepatingChar(test.input);
    const passed = result===test.expected;

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
