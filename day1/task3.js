function studentUpadte(students) {

  if (!Array.isArray(students) || students.length === 0) return "Invalid Input";

  const copystudents = [...students];

  for (let i = 0; i < copystudents.length; i++) {
    const student = copystudents[i];

    if (!student || typeof student !== "object") return "Invalid";

    if (student.name === undefined) return "Invalid name";
    if (typeof student.name !== "string") return "Invalid name";

    student.name = student.name.trim();
    if (student.name === "") return "Invalid Input";

    if (student.marks === undefined) return "Invalid marks";
    if (typeof student.marks !== "number") return "Invalid marks";
    if (student.marks < 0) return "Mark is negative number";
  }

  for (const student of copystudents) {
    student.status = student.marks >= 50 ? "pass" : "fail";
    delete student.marks;
  }

  return copystudents;
}

function testCase() {
  const tests = [
    {
      input: [
        { name: "Alice", marks: 42 },
        { name: "Bob", marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: [
        { name: "Alice", status: "fail" },
        { name: "Bob", status: "pass" },
        { name: "Charlie", status: "fail" },
      ],
    },
    {
      input: [
        { name: 123, marks: 42 },
        { name: "Bob", marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: "Invalid name",
    },
    {
      input: [
        { name: "Bob", marks: 42 },
        { name: 123, marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: "Invalid name",
    },
    {
      input: [
        { name: "Alice", marks: 42 },
        { name: {}, marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: "Invalid name",
    },
    {
      input: [
        { name: "Alice", marks: 42 },
        { name: [], marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: "Invalid name",
    },
    {
      input: [
        { name: "Alice", marks: 42 },
        { marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: "Invalid name",
    },
    {
      input: [
        { name: "Alice", marks: "abc" },
        { name: "Bob", marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: "Invalid marks",
    },
    {
      input: [
        { name: "Alice", marks: "" },
        { name: "Bob", marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: "Invalid marks",
    },
    {
      input: [
        { name: "Alice", marks: [1] },
        { name: "Bob", marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: "Invalid marks",
    },
    {
      input: [
        { name: "Alice" },
        { name: "Bob", marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: "Invalid marks",
    },
    {
      input: [
        { name: "Alice", marks: 42 },
        { name: "", marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: "Invalid Input",
    },
    {
      input: [
        { name: "Alice", marks: -42 },
        { name: "Bob", marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: "Mark is negative number",
    },
    {
      input: [
        { name: "Alice ", marks: 42 },
        { name: "Bob", marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: [
        { name: "Alice", status: "fail" },
        { name: "Bob", status: "pass" },
        { name: "Charlie", status: "fail" },
      ],
    },
    {
      input: {},
      expected: "Invalid Input",
    },
    {
      input: [],
      expected: "Invalid Input",
    },
    {
      input: [
        "Alice",
        { name: "Bob", marks: 67 },
        { name: "Charlie", marks: 35 },
      ],
      expected: "Invalid",
    },
    {
      input: [42, { name: "Bob", marks: 67 }, { name: "Charlie", marks: 35 }],
      expected: "Invalid",
    },
  ];

  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = studentUpadte(test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.expected);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
