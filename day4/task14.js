function toRoman(num){
  if(num<0||num>2000){
    return "Input must be between 1 and 2000"
  }
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result=""
  for(let i=0;i<values.length;i++){
    while (num >= values[i]) {
      num -= values[i];
      result += symbols[i];
    }
  }
  return result
}
console.log(toRoman(5));   
console.log(toRoman(60));


function testCase() {
  const tests = [
    {
      input: 29,
      expected: " XXIX",
    },
    {
      input: 13,
      expected: " XIII",
    },
    {
      input: 2,
      expected: "prime number",
    },
    {
      input: 4,
      expected: "Not a prime number",
    },
    {
      input: null,
      expected: "Invalid",
    },
    {
      input: 0,
      expected: "Not a prime number",
    },
    {
      input: undefined,
      expected: "Invalid",
    },
    {
      input: [],
      expected: "Invalid",
    },
    {
      input: 100,
      expected: "Not a prime number",
    },
    {
      input: 1,
      expected: "Not a prime number",
    },
    {
      input: -24,
      expected: "Negative number",
    },
    {
      input: {},
      expected: "Invalid",
    },
    {
      input: "",
      expected: "Invalid",
    },
    {
      input: true,
      expected: "Invalid",
    },
    {
      input: 7,
      expected: "prime number",
    },
    {
      input: 7.1,
      expected: "Invalid",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = toRoman(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
