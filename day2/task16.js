
function list(str){
  let result=[]
  let le = [];
  let sorted=[];
  for(i=0;i<str.length;i++){
    le.push(str[i].length);
  }
  sorted=le.sort((a, b) => a - b)

  for(i=0;i<str.length;i++){
    for(j=0;j<str.length;j++){
      if (sorted[i] === str[j].length) {
        result.push(str[j]);
      }
    }
  }
  return result
}
  
console.log(list(["open", "source", "programming", "is", "fun"]))
console.log(list(["hello", "world"]));
console.log(list(["cat", "dog", "elephant", "tiger"]));