type Student = {
  name: string;
  marks: number;
};

const Students: Student[] = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
];

function newStudents(list: Student[]): { name: string; status: string }[] {
  const result: { name: string; status: string }[] = [];

  for (const student of list) {
    const status = student.marks >= 50 ? "pass" : "fail";
    result.push({ name: student.name, status });
  }
  
  return result;
}

console.log(newStudents(Students));
