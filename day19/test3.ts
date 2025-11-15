import { SortByScoreRank } from "./task3.ts";
function testCase() {
  const tests = [
    {
      input: [100, 100, 90, 80],
      expected: [
        { score: 100, rank: 1 },
        { score: 100, rank: 1 },
        { score: 90, rank: 2 },
        { score: 80, rank: 3 },
      ],
    },
    {
      input: [10, 10, 10, 10],
      expected: [
        { score: 10, rank: 1 },
        { score: 10, rank: 1 },
        { score: 10, rank: 1 },
        { score: 10, rank: 1 },
      ],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [10],
      expected: [{ score: 10, rank: 1 }],
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
  ];

  tests.forEach((test, i) => {
    const result = SortByScoreRank(test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : "Fail");
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  });
}

testCase();
