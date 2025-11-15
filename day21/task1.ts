function prime(n:number){
  let isPrime=true;
  if(n<2) return !isPrime;
  for(let i=2;i<n-1;i++){
    if(n%i===0) return !isPrime
  }
  return isPrime
}
console.log(prime(13))