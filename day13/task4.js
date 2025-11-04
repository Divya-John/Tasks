function arr(array, size) {
  let result=[];
  let len = array.length;
  if(len===size) return array;

  for(i=0;i<array.length;i++){
    result.push(array.slice(0,size))
  }
  return result
}
console.log(arr([1, 9, 6, 3, 2, 4,7], 3));
console.log(arr([1, 2, 3, 4, 5], 1));