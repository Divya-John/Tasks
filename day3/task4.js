function position(arr1,arr2,p){
  let result=[...arr1]
  for(i=0;i<result.length+1;i++){
    if(p===i){
      result.splice(i,0,arr2)
    }
  }
  return result.flat()
}
console.log(position([1, 2, 3], [4, 5, 6], 2));