function arr(array, size) {
  let result=[];
  // let len = array.length;
  // if(len===size) return array;
  let i=0;
  while(i<array.length){
    result.push(array.slice(i,i+size))
    i+=size
  }
  return result
  // if(array.length===0) return [];
  // return[array.slice(0,size)].concat(arr(array.slice(size),size))
}
console.log(arr([1, 9, 6, 3, 2], 3));
console.log(arr([1, 2, 3, 4, 5], 1));