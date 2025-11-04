function counter(n){
  let count=n;
  return function(){
    return count++;
  }
}
const cnt = counter(6);
console.log(cnt());
console.log(cnt());