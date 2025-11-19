function separator(n: number) {
  n = n.toString();
  let result = [];
  for (let i = 2; i < n.length; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  console.log(result);

  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < result.length; j++) {

    }
  }
}
console.log(separator(1234567));