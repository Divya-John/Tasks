function SortBySum(arr: number[][]) {
  if (!Array.isArray(arr)) return "Invalid input";
  let arr1 = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const sum = arr[i].reduce((acc: number, curr: number) => acc + curr, 0);
    arr1.push(sum);
  }

  let re = [...arr1];
  let arr2 = arr1.sort((a, b) => b - a);
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < re.length; j++) {
      if (arr2[i] === re[j]) {
        result.push(arr[j]);
        break;
      }
    }
  }
  return result;
}

// console.log(SortBySum([[2, 2, 2], [3, 3], [1, 1, 1, 1, 1, 1], [-1]]));
// console.log(SortBySum([[1, 2, 3], [3],[1,2],[1, 1, 1, 1, 1, 1],[-1]]));

function testCase() {
  const tests = [
    {
      input: [[1, 2, 3], [4], [2, 7]],
      expected: [[2, 7], [1, 2, 3], [4]],
    },
    {
      input: [[1, 2, 3], [4], [2, 0], [2, 7]],
      expected: [[2, 7], [1, 2, 3], [4], [2, 0]],
    },
    {
      input: [[-1, -2, -3], [4], [2, 7]],
      expected: [[2, 7], [4], [-1, -2, -3]],
    },
    {
      input: [[-1, 2, -3], [-4], [2, 7]],
      expected: [[2, 7], [-1, 2, -3], [-4]],
    },
    {
      input: [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5],
      ],
      expected: [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
      ],
    },
    {
      input: [],
      expected: [],
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
    const result = SortBySum(test.input);
    let passed = JSON.stringify(result) === JSON.stringify(test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
