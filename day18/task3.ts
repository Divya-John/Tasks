function Pipe(...fns: ((x: number) => number)[]) {
  return function (value: number): number {
    if (typeof value !== "number" || !isFinite(value)) {
      return "Invalid input";
    }
    let result = value;
    for (let fn of fns) {
      if (typeof fn !== "function") {
        return  "Invalid input";
      }
      result = fn(result);
    }
    return result;
  };
}

const add5 = (x: number) => x + 5;
const multiply3 = (x: number) => x * 3;

const piped = Pipe(add5, multiply3);
// console.log(piped(5));

function testCase() {
  const tests = [
    {
      fns: [add5, multiply3],
      input: 5,
      expected: 30,
    },
    {
      fns: [add5],
      input: 5,
      expected: 10,
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
      fns: [add5, multiply3],
      input: {},
      expected: "Invalid input",
    },
    {
      fns: [add5, multiply3],
      input: null,
      expected: "Invalid input",
    },
    {
      fns: [add5, multiply3],
      input: undefined,
      expected: "Invalid input",
    },
    {
      fns: [add5, multiply3],
      input: 0/0,
      expected: "Invalid input",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const pipedFn = Pipe(...test.fns);
    const result = pipedFn(test.input);
    let passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
