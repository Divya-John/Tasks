function combination(k, n) {
  let re = [];
  for (i = 1; i <= k; i++) {
    re.push(i);
  }
  let res = [];
  let result;

  for (let i = 0; i < re.length; i++) {
    if (n === 1) {return result =[re[i]];}
    if (n === 2) {
      for (j = i + 1; j < re.length; j++) {
        let result = [re[i], re[j]];
        res.push(result);
      }
    }
  }
  return res;
}
console.log(combination(4, 2));
console.log(combination(1, 1));
