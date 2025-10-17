const students = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
];

function studentUpadte(){
  const copystudents = [...students];
  for (const student of copystudents) {
    if (student.marks >= 50) {
      student.status = "pass";
    } else {
      student.status = "fail";
    }
    delete student.marks;
  }
  return copystudents
}
console.log(studentUpadte())