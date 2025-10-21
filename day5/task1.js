// 1
// const userName="John"
// let age=20
// let adminStatus=true

// console.log(userName + age + userStatus);



// 2
// const userName = "John";
// try{
//   userName='Jon'
// }catch(error){
//   console.log("Assignment to constant variable",error.message)
// }



// 3
// let a=10;
// let b=20;
// a=a+b;
// console.log(b=a-b);
// console.log(a=a-b)

// 4
// for(var i=0;i<3;i++){
//   console.log("Inside loop",i)
// }
// console.log("Outside loop with let",i)
// for (let j = 0; j < 3; j++) {
//   console.log("Inside loop let", i);
// }
// try{
//   console.log("Outside loop with let",j)
// }catch(error){
//    console.log("Error", error.message);
// }

// 5
// const car={
//   model:"Hyryder",
//   color:'red'
// }
// car.color='blue'
// console.log(car.color)



// 6
// let count = 0;
// function createCounter() {
//   count++;
//   console.log(count)
// };
// createCounter(count);
// createCounter(count);

//or

// function createCounter(){
//   let count=0;
//   return function(){
//     count++;
//     console.log(count)
//   }
// }
// const counter=createCounter()
// counter()
// counter()
