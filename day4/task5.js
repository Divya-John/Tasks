function kabab(str){
  function lowerCase(match,offset){
    return(offset>0?"-":"")+match.toLowerCase()
  }
  const newArr = str.replaceAll(/[A-Z]/g,  lowerCase);
  return newArr;
}
console.log(kabab('myFunction'))