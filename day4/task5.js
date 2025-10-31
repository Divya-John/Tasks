function kabab(str){

  if (typeof str !== "string") return "Not a sting";
  str = str.replaceAll(/\s+/g, " ").trim();
  if (str.length === 0 || str.trim() === "") return "Empty";

  function lowerCase(match,offset,str){
    return (
      (offset > 0 && str[offset - 1] !== " " ? "-" : "") + match.toLowerCase()
    );
  }
  const newArr = str.replaceAll(/[A-Z]/g,  lowerCase);
  return newArr;
}

function testCase() {
  const tests = [
    {
      input: "myFunction",
      expected: "my-function",
    },
    {
      input: "ProgrAmmiNg",
      expected: "progr-ammi-ng",
    },
    {
      input: "ProgrAmmiNg offA",
      expected: "progr-ammi-ng off-a",
    },
    {
      input: "myFunction     andAnother",
      expected: "my-function and-another",
    },
    {
      input: "Hello World!",
      expected: "hello world!",
    },
    {
      input: "Hello, World!",
      expected: "hello, world!",
    },
    {
      input: "123A567",
      expected: "123-a567",
    },
    {
      input: "     ProgrAmmiNg",
      expected: "progr-ammi-ng",
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
    {
      input: 0 / 0,
      expected: "Not a sting",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = kabab(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();