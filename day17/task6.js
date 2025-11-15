function factor(num) {
  // let factors = [];
  // let result = [];
  // let res = [];
  // for (let i = 0; i < num; i++) {
  //   if (num % i === 0) {
  //     factors.push(i);
  //   }
  // }
  // for (let i = 1; i < factors.length; i++) {
  //   let n = factors[i];
  //   let isPrime = true;
  //   if (n <= 1) continue;
  //   for (let k = 2; k <= Math.sqrt(n); k++) {
  //     if (n % k === 0) {
  //       isPrime = false;
  //       break;
  //     }
  //   }
  //   if (isPrime) {
  //     result.push(n);
  //   }
  // }
  // return Math.max(...result)

  let largest=0;
  let i=2;
  while(i<=num){
    if (num % i === 0) {
      largest = i;
      num = num / i;
    } else {
      i++;
    }
  }
  if (num > largest) {
    largest = num;
  }

  return largest;
}
console.log(factor(600851475143));
