function num(n:number) {
  if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
    return "Invalid input";
  }
  const MOD=10n**10n;
  let sum=0n;
  for(let i=1n;i<=BigInt(n);i++){
    let term=1n;
      for (let j = 0n; j < i; j++) {
        term = (term * i) % MOD;
      }

    sum=(sum+term)%MOD;
  }
  return sum.toString().padStart(10, "0");;
}

function testCase(){
  const tests = [
    {
      input: 1000,
      expected: "9110846700",
    },
    {
      input: 1,
      expected: "0000000001",
    },
    {
      input: 0,
      expected: "Invalid input",
    },
    {
      input: -1,
      expected: "Invalid input",
    },
    {
      input: -30,
      expected: "Invalid input",
    },
    {
      input: 3.7,
      expected: "Invalid input",
    },
    {
      input: 3.0,
      expected: "0000000032",
    },
    {
      input: [],
      expected: "Invalid input",
    },
    {
      input: {},
      expected: "Invalid input",
    },
    {
      input: true,
      expected: "Invalid input",
    },
    {
      input: null,
      expected: "Invalid input",
    },
    {
      input: undefined,
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = num(test.input);
    let passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();