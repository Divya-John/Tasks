function myFilter(arr,callback){
  let result=[]
  for(i=0;i<arr.length;i++){
    if(callback(arr[i])){
      result.push(arr[i])
    }
  }
  return result
}
function filter(n){
  return n>10 ;
}
console.log(myFilter([2, 3, 4, 97, 45, 32, 12], filter));