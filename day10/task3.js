// function myMap(array,callback){
//   let result=[]
//   for(i=0;i<array.length;i++){
//     result.push(callback(array[i]))
//   }
//   return result
// }

// function newArray(n){
//   return n= n*2
// }
// console.log(myMap([1,2,3,4,5], newArray));



// function myFilter(arr, callback) {
//   let result = [];
//   for (i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// function filter(n) {
//   return n > 10;
// }
// console.log(myFilter([2, 3, 4, 97, 45, 32, 12], filter));


function myReduce(array,callback,initialValue=0){
  let result=initialValue;
  for(i=0;i<array.length;i++){
    result=callback(result,array[i])
  }
  return result
}

function newArray(n1,n2){
  return n1+n2
}
console.log(myReduce([1, 2, 3, 4, 5], newArray));
