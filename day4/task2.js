function findPermutations(str){
  const result=[]

  if(str.length<=1){
    return [str]
  }

  for(let i=0;i<str.length;i++){
    let first=str[i]
    let remainingstr=str.slice(0,i)+str.slice(i+1)

    let subPer = findPermutations(remainingstr)
    for(j=0;j<subPer.length;j++){
      result.push(first+subPer[j])
    }
  }
  return result;
}
console.log(findPermutations('abc'))
