function anagram(str1,str2){
  let isAnagram = true;
  if (typeof str1 !== "string" || typeof str2 !== "string") return "Input is not a string";
  const result1 = str1.trim().replaceAll(/[ ]/g,"").split("").sort().join('') 
  const result2 = str2.trim().replaceAll(/[ ]/g, "").split("").sort().join('');

  if(result1===""||result2==="") return "Empty";
  
  const result=(str1.trim().length ===str2.trim().length &&result1 === result2) ?isAnagram:!isAnagram;
  return result

}

function testCase() {
  const tests = [
    {
      input: "listen",
      input1: "silent",
      expected: true,
    },
    {
      input: "restful",
      input1: "fluster",
      expected: true,
    },
    {
      input: "hello",
      input1: "world",
      expected: false,
    },
    {
      input: "hello",
      input1: "",
      expected: "Empty",
    },
    {
      input: "",
      input1: "world",
      expected: "Empty",
    },
    {
      input: 123,
      input1: "world",
      expected: "Input is not a string",
    },
    {
      input: "Hi",
      input1: [345],
      expected: "Input is not a string",
    },
    {
      input: "Hi",
      input1: {},
      expected: "Input is not a string",
    },
    {
      input: "#",
      input1: "#",
      expected: true,
    },
    {
      input: "1234",
      input1: "2134",
      expected: true,
    },
    {
      input: "listen   ",
      input1: "silent",
      expected: true,
    },
    {
      input: "restful",
      input1: "   fluster",
      expected: true,
    },
    {
      input: "",
      input1: "fluster",
      expected: "Empty",
    },
    {
      input: " ",
      input1: "   ",
      expected: "Empty",
    },
    {
      input: "hello hi",
      input1: "fluster",
      expected: false,
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = anagram(test.input, test.input1);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
