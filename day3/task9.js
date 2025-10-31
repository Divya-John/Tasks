import { arrayCheck } from "../utils.js";

function findDuplicates(str) {

  if (typeof str !== "string") return "Not a sting";
  if (str.length === 0 || str.trim() === "") return "Empty";

  str=str.replace("/[ ]/g","").trim()
  let newStr=[...str]
  let letter=[]
  for(let i=0;i<newStr.length;i++){
    if(!letter.includes(newStr[i])){
      letter.push(newStr[i])
    }
  }
  return letter.join('').toString().toLowerCase();
}


function testCase() {
  const tests = [
    {
      input: "apple",
      expected: "aple",
    },
    {
      input: "ProgrAmmiNg",
      expected: "progamin",
    },
    {
      input: "ProgrAmmiNg offA",
      expected: "progamin f",
    },
    {
      input: "Hello World!",
      expected: "helo wrd!",
    },
    {
      input: "123A567",
      expected: "123a567",
    },
    {
      input: "1111222233333A",
      expected: "123a",
    },
    {
      input: "     ProgrAmmiNg",
      expected: "progamin",
    },
    {
      input: "",
      expected: "Empty",
    },
    {
      input: "            ",
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
    const result = findDuplicates(test.input);
    const passed = arrayCheck(result, test.expected);
    
    // const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();