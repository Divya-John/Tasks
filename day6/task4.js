function pattern(n){
  let str=[]
  for(i=65;i<=90;i++){
    str.push(i)
  }
  for (i = 0; i < n; i++){
    console.log(String.fromCharCode(str[i]).repeat(i+1).split("").join(" "))
  }
}
pattern(5)