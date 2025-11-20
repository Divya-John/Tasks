const Students = [
    { name: "Alice", marks: 42 },
    { name: "Bob", marks: 67 },
    { name: "Charlie", marks: 35 },
];
function newStudents(list) {
    const result = [];
    for (const student of list) {
        const status = student.marks >= 50 ? "pass" : "fail";
        result.push({ name: student.name, status });
    }
    return result;
}
console.log(newStudents(Students));
export {};
//# sourceMappingURL=task13.js.map