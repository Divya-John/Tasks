function snakecase(text){

  if (typeof text !== "string") return "Not a sting";
  text = text.replaceAll(/\s+/g, " ").trim();
  if (text.length === 0 || text.trim() === "") return "Empty";

  function tests(match,offset){
    return(offset>0?"_":"")+match.toLowerCase()
  }
  
  let newText = text.trim().replaceAll(/[A-Z]/g,tests);
  return newText
}

function testCase() {
  const tests = [
    {
      input: "myFunction",
      expected: "my_function",
    },
    {
      input: "ProgrAmmiNg",
      expected: "progr_ammi_ng",
    },
    {
      input: "ProgrAmmiNg offA",
      expected: "progr_ammi_ng off_a",
    },
    {
      input: "myFunction     andAnother",
      expected: "my_function and_another",
    },
    {
      input: "Hello, World!",
      expected: "hello, world!",
    },
    {
      input: "123A567",
      expected: "123_a567",
    },
    {
      input: "     ProgrAmmiNg",
      expected: "progr_ammi_ng",
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
      input: 0/0,
      expected: "Not a sting",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = snakecase(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();