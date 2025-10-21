// 1
// console.log(Number('42'))
// console.log(Number("42px"));
// console.log(Number(""));
// console.log(Number('null'));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number(true));
// console.log(Number(false));



// 2
// let n=255;
// console.log(n.toString(2));
// console.log(n.toString(8));
// console.log(n.toString(16))



// 3
// function toBoolean(input){
//   if (input === 'true'||input === '1'||input === 'yes') return true;
//   else return false;
// }
// console.log(toBoolean(""));


// 4
// console.log('5'+2)
// console.log('5'-2)
// console.log(true+false)
// console.log(10+[])
// console.log(10 + [1,2]);
// console.log([1] + [2]);
// console.log({} + 1);
// console.log("5" * "3");


// 5
// function removeFalse(arr){
//     return arr.filter((e)=>
//        ((e!=''&& e!=0&& e!=0&& e!==''&& e!=null&& e!=undefined&&e!=NaN))
//     )
// }
// console.log(removeFalse([1, 2, 3, 4, 5, '', 0,false]));

// function removeFalse(arr){
//     return arr.filter(Boolean)
// }
// console.log(removeFalse([1, 2, 3, 4, 5, '', 0,false,NaN]));