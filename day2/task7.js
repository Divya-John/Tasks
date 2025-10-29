
function largest(str){
  if(!str) return "Empty"
  if (typeof str !== "string") return "Not a string";
  if(str.trim() === "") return "Empty"
  let newStr = str.trim().split(" ");
  
  let result = [];
  for(i=0;i<newStr.length;i++){
    if (newStr[i].length > result.length) {
      result = newStr[i];
    }
  }
  const len= result.length
  let re=[]
  for(i=0;i<newStr.length;i++){
    if(newStr[i].length===len){
      re.push(newStr[i])
    }
  }
  return re.toString()
}

function testCase() {
  const tests = [
    {
      input: "Hello world of programming",
      expected: "programming",
    },
    {
      input: "I love coding",
      expected: "coding",
    },
    {
      input: "The quick brown fox jumps over the lazy dog",
      expected: "quick,brown,jumps",
    },
    {
      input: "I love coding        ",
      expected: "coding",
    },
    {
      input: "    I love coding",
      expected: "coding",
    },
    {
      input: [],
      expected: "Not a string",
    },
    {
      input: 123,
      expected: "Not a string",
    },
    {
      input: "I          love             coding",
      expected: "coding",
    },
    {
      input: "",
      expected: "Empty",
    },
    {
      input: "       ",
      expected: "Empty",
    },
    {
      input: "   Hello world of programming",
      expected: "programming",
    },
    {
      input: {},
      expected: "Not a string",
    },
    {
      input: null,
      expected: "Empty",
    },
    {
      input: undefined,
      expected: "Empty",
    },
    {
      input: "   Hello                        world of programming",
      expected: "programming",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = largest(test.input);
    const passed =result=== test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();