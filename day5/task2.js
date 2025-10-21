// 1
// let arr=[2,'string',true, ,null,[1,2,3],123n,function(){},symbol("id",{name:"John"})]
// for(i=0;i<arr.length;i++){
//   console.log(typeof arr[i])
// }


// 2
// console.log(Array.isArray({}))
// console.log(Array.isArray([]))
// function restP(...arr){
//   console.log("Is arr an array?",Array.isArray(arr))
// }
// restP(1,.2,3)

// // 3
// function getValue(a){
//   if(a===undefined){
//     return "No value"
//   }
//   else if(a===null){
//     return 'Empty'
//   }
//   else{
//     return a
//   }
// }
// console.log(getValue(0))
// console.log(getValue(null));
// console.log(getValue(undefined));


// 4
// isValid=true;
// function checkValid(n){
//   if(n=Number(n)){
//     return isValid
//   }
//   else{
//     return !isValid
//   }
// }
// console.log(checkValid(6))

//or

// function isValidNumber(value) {
//   if( typeof value === "number" && !isNaN(value) && isFinite(value)){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(isValidNumber(42));
// console.log(isValidNumber(-5.5))
// console.log(isValidNumber(NaN))
// console.log(isValidNumber(Infinity))
// console.log(isValidNumber(undefined))
// console.log(isValidNumber("100"))

// 5
// let n=Number("4pd")
// console.log(n)
// let m = Number("null");
// console.log(m);
// if(n!=m){
//   console.log("NaN detected");
// }

// const value=NaN;
// if(value!==value){
//   console.log("NaN detected");
// }
// else{
//   console.log("Not NaN")
// }