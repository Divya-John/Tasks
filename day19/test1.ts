import { DetectSymmetry } from "./task1.ts";
function testCase() {
  const tests = [
    {
      input: [
        [1, 2, 1],
        [3, 4, 3],
        [1, 2, 1],
      ],
      expected: { horizontal: true, vertical: true, diagonal: false },
    },
    {
      input: [
        [1, 2, 3],
        [4, 5, 6],
        [1, 2, 3],
      ],
      expected: { horizontal: true, vertical: false, diagonal: false },
    },
    {
      input: [
        [1, 2, 1],
        [4, 5, 4],
        [1, 2, 1],
      ],
      expected: { horizontal: true, vertical: true, diagonal: false },
    },
    {
      input: [
        [1, 2, 3],
        [2, 5, 6],
        [3, 6, 9],
      ],
      expected: { horizontal: false, vertical: false, diagonal: true },
    },
    {
      input: [
        [1, 2, 3],
        [2, 5, 6],
        [3, 6, 9],
      ],
      expected: { horizontal: false, vertical: false, diagonal: true },
    },
    {
      input: [
        [1, 2],
        [2, 1],
      ],
      expected: { horizontal: false, vertical: false, diagonal: true },
    },
    {
      input: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      expected: { horizontal: false, vertical: false, diagonal: false },
    },
    {
      input: "",
      expected: "Invalid input",
    },
    {
      input: 0 / 0,
      expected: "Invalid input",
    },
    {
      input: true,
      expected: "Invalid input",
    },
    {
      input: [],
      expected: "Invalid input",
    },
    {
      input: [""],
      expected: "Invalid input",
    },
    {
      input: [[]],
      expected: "Invalid input",
    },
    {
      input: [[1]],
      expected: { horizontal: true, vertical: true, diagonal: true },
    },
  ];

  tests.forEach((test, i) => {
    const result = DetectSymmetry(test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : "Fail");
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  });
}

testCase();
