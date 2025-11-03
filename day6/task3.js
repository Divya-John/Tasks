function missNo(arr) {
  if (!Array.isArray(arr)) return "Input is not a array";
  if (arr === "" || arr.length === 0) return "Empty array";
  let arrn = [];
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      arrn.push(arr[i]);
    }
  }
  arrn = arrn.sort((a, b) => a - b);
  const min = arrn[0];
  const max = arrn[arrn.length - 1];
  let result = arrn.reduce((acc, curr) => acc + curr);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  let missNo = sum - result;
  if (missNo > max) return "Invalid";
  if (missNo === 0) {
    return min - 1;
  }
  return missNo;
}

function testCase() {
  const tests = [
    {
      input: [1, 2, 3, 5, 6],
      expected: 4,
    },
    {
      input: [10, 11, 13, 14, 15],
      expected: 12,
    },
    {
      input: [2, 3, 4, 5, 6],
      expected: 1,
    },
    {
      input: {},
      expected: "Input is not a array",
    },
    {
      input: [],
      expected: "Empty array",
    },
    {
      input: [2, 3, 4, 5, 6],
      expected: 1,
    },
    {
      input: ["", 3, 4, 5, 6],
      expected: 2,
    },
    {
      input: [3, , 4, 5, 6],
      expected: 2,
    },
    {
      input: [2, 5, 4, 6],
      expected: 3,
    },
    {
      input: [11, 12, 13, 14, 15, 16],
      expected: 10,
    },
    {
      input: null,
      expected: "Input is not a array",
    },
    {
      input: undefined,
      expected: "Input is not a array",
    },
    {
      input: [2, 0, -1, -2],
      expected: 1,
    },
    {
      input: [0, -1, -2, -3, -5],
      expected: -4,
    },
    {
      input: [11, 14, 15, 16],
      expected: "Invalid",
    },
    {
      input: [1, 2, 3, 5, 6, 8],
      expected: "Invalid",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = missNo(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
