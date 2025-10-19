
function commonprefix(str){
  str.sort()
  let str1=str[0]
  let str2=str[str.length-1]

  let i=0;
  while(i<str1.length){
    if(str1[i]===str2[i]){
      i++
    }else{
      break;
    }
  }
  return i===0?"":str1.substring(0,i)
}
console.log(commonprefix(["flower", "flow", "flight"]));