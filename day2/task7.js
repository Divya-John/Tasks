
function largest(str){
  let newStr = str.split(" ");
  let result = [];
  for(i=0;i<newStr.length;i++){
    if (newStr[i].length > result.length) {
      result = newStr[i];
    }
  }
  return result
}
console.log(largest("Hello world of programming"));
console.log(largest("The quick brown fox jumps over the lazy dog"));
console.log(largest("I love coding"));