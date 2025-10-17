
function Armstrong(num){
  const newnum=num.toString().split("")
  let result=[]
  for(i=0;i<newnum.length;i++){
    if(newnum[i]){
      result.push(newnum[i]**newnum.length)
    }
  }
  const sum=result.reduce((acc,curr)=>acc+curr);
  const armstrong=(sum===num)?true:false;
  return armstrong;
}
console.log(Armstrong(153));