const Students: { name: string; marks: number }[] = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 }
];

// function newStudents(student){
//   const copystudents = [...Students];
//   for (const student of copystudents) {
//     const status= (student.marks >= 50)?"pass":"fail"
//     delete student.marks;
//   }
//   return copystudents;
// }
// console.log(newStudents())
