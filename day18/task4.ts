function Waterfall(tasks:((x: number) => Promise<number>)[]){
  return async function (input: number): Promise<number> {
     if (typeof input !== "number" || !isFinite(input)) {
       return "Invalid input";
     }
    let result = input;

    for (let task of tasks) {
       if (typeof task !== "function") {
         return "Invalid input";
       }
      result = await task(result);
    }
    return result;
  };
}
const add = async (x: number): Promise<number> => x + 2;
const square = async (x: number): Promise<number> => x * x;
const run= Waterfall([add, square]);

async function testCase() {
  const tests = [
    {
      fns: [add, square],
      input: 2,
      expected: 16,
    },
    {
      fns: [add, square],
      input: 5,
      expected: 49,
    },
    {
      fns: [add],
      input: 5,
      expected: 7,
    },
    {
      fns: [],
      input: 7,
      expected: 7,
    },
    {
      fns: [null],
      input: 7,
      expected: "Invalid input",
    },
    {
      fns: [undefined],
      input: 7,
      expected: "Invalid input",
    },
    {
      fns: [""],
      input: 7,
      expected: "Invalid input",
    },
    {
      fns: [add, square],
      input: {},
      expected: "Invalid input",
    },
    {
      fns: [add, square],
      input: null,
      expected: "Invalid input",
    },
    {
      fns: [add, square],
      input: undefined,
      expected: "Invalid input",
    },
    {
      fns: [add, square],
      input: 0 / 0,
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const waterfall = Waterfall(test.fns);
    const result =await waterfall(test.input);
    let passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
