
function studentUpadte(students) {
  
  if (!Array.isArray(students)|| students.length===0) return "Invalid Input";
  const copystudents = [...students];
 
  
  const names = copystudents.map((name) => name.name);
  for(let i=0;i<names.length;i++){
    if (typeof names[i]!= "string") return "Invalid";
    copystudents[i].name=copystudents[i].name.trim();
    if (names[i]==='') return "Invalid Input";
  }

  const marks = copystudents.map((name) => name.marks);
  for (let i = 0; i < marks.length - 1; i++) {
    if (typeof marks[i] != "number") return "Invalid marks";
    if(marks[i]<0) return "Mark is negative number";
  }

  for (const student of copystudents) {
    student.status=student.marks >= 50?"pass":"fail"
    delete student.marks;
  }
  return copystudents;
}

function testCase(){
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
      input: [
        42, 
        { name: "Bob", marks: 67 }, { name: "Charlie", marks: 35 }],
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
testCase()
