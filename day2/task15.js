
function reversed(str){
  const newStr = str.split(" ");
  let result=[]
  for(i=0;i<newStr.length;i++){
    result.push(newStr[i].split("").reverse().join(""))
  }
  return result.toString()
}
console.log(reversed("Hello world"));
console.log(reversed("Programmers are awesome"));
console.log(reversed("Programming is fun"));