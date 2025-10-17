// 1
const array=[1,2,3,4,5];

function multiply() {
  let result = [];
  for (i = 0; i < array.length; i++) {
    result[i] = array[i] * 2; 
  }
  return result;
}
function myMap(array,callback){
  return callback(array)
}
console.log(myMap(array,multiply));


// 2
// const array = [1, 2, 3, 4, 5];
// function even() {
//   let result = [];
//   for (i = 0; i < array.length; i++) {
//     if(array[i]%2===0){
//       result.push(array[i])
//     }
//   }
//   return result
// }

// function myFilter(array,callback){
//   return callback(array)
// }
// console.log(myFilter(array, even));


// 3
// const array = [1, 2, 3, 4, 5];
//   function sum() {
//   let result = 0;
//   for (i = 0; i < array.length; i++) {
//     result += array[i]
//   }
//   return result
// }
// function myReduce(array, callback,initialValue) {
//   return callback(array);
// }
// console.log(myReduce(array, sum));