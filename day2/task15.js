
function reversed(str){

  if (typeof str !== "string") return "Not a sting";
  if (str.length === 0||str.trim() === "") return "Empty";

  const newStr = str.split(" ");
  let result=[]
  for(i=0;i<newStr.length;i++){
    if(newStr[i]!=="") {
      result.push(newStr[i].split("").reverse().join(""))
    }
  }
  return result.toString().replace(/[,]/g," ").trim()
}


function testCase() {
  const tests = [
    {
      input: "Hello world",
      expected: "olleH dlrow",
    },
    {
      input: "Programmers are awesome",
      expected: "sremmargorP era emosewa",
    },
    {
      input: "Programming is fun",
      expected: "gnimmargorP si nuf",
    },
    {
      input: "Programming   is    fun",
      expected: "gnimmargorP si nuf",
    },
    {
      input: "     Programming is fun",
      expected: "gnimmargorP si nuf",
    },
    {
      input: "Programming",
      expected: "gnimmargorP",
    },
    {
      input: "ProgrAmmiNg",
      expected: "gNimmArgorP",
    },
    {
      input: "@",
      expected: "@",
    },
    {
      input: "1234567",
      expected: "7654321",
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
    const result = reversed(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();