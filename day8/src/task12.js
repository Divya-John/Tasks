function num(...n) {
    const sum = n.reduce((acc, curr) => acc + curr);
    return sum;
}
console.log(num(1, 2, 3, 4));
console.log(num(1, 2));
export {};
//# sourceMappingURL=task12.js.map