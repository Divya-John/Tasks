function findDuplicates(str) {
  let newStr=[...str]
  let letter=[]
  for(i=0;i<newStr.length;i++){
    if(!letter.includes(newStr[i])){
      letter.push(newStr[i])
    }
  }
  return letter.join('').toString();
}
console.log(findDuplicates("apple"));