function num(n:number) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  arr = arr.map((x) => Math.pow(x, x));

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  // console.log(sum)

  let result = sum % 10000000000;
  return result;
}

console.log(num(100));
