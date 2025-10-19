
function primeNumber(n){
  isPrime = true;
  if(n===0||n===1){
    return (!isPrime)
  }
  for(i=2;i<n-1;i++){
    if(n%i===0){
      return (!isPrime);
    }else{
      return (isPrime);
    }
  }
}
console.log(primeNumber(7));
console.log(primeNumber(10));
console.log(primeNumber(29));