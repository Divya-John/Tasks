function sum(...n) {
  const sum = n.reduce((acc, curr) => acc + curr);
  return sum;
}
console.log(sum(1, 2))
console.log(sum(1, 2, 3, 4));