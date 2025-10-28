function myMap(array,callback){
  let result=[]
  for(i=0;i<array.length;i++){
    result.push(callback(array[i]))
  }
  return result
}

function newArray(n){
  return n= n*2
}
console.log(myMap([1,2,3,4,5], newArray));


