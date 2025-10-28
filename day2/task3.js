
function even(arr){
  const newList = [];
  for(i=0;i<arr.length;i++){
    if(arr[i]%2===0){
      newList.push(arr[i])
    }
  }
  return newList;
}
console.log(even([1, 2, 3, 4, 5, 6]));
console.log(even([7, 8, 9, 10, 11, 12]));
console.log(even([2, 4, 6, 8, 10]));