let str = fromCharCode(65);

function pattern(n){
  for (i = 0; i < n; i++){
    console.log(str[i].repeat(i+1))
  }
}
console.log(pattern(5))