function num(n) {
  let arr = [];
  for (i = 1; i <= n; i++) {
    arr.push(i);
  }
  arr = arr.map((x) => Math.pow(x, x));

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  // console.log(sum)

  let result = sum % 10000000000;
  console.log(result);
}

console.log(num(10));
