
isPerfectsquare=true;

function perSquare(n){
  for(i=1;i<n;i++){
    if(i*i===n){
      return isPerfectsquare;
    }
  }
  if(i*i!=n){
    return !isPerfectsquare;
  }
  
}
console.log(perSquare(16));
console.log(perSquare(10));
console.log(perSquare(25));