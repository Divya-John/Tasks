// 1
let num=5;
let car = { model: "Hyryder", color: "blue" };

n=num;
const newCar={...car,n}
console.log(newCar);
newCar.color="red"
console.log(newCar);
console.log(car);


// 2
// const person={
//   name: 'John',
//   age: 25,
//   city:{
//     homecity:"abc"
//   }
// }
// const newPerson = { ...person };
// console.log(newPerson);
// const newPerson1 = Object.assign(person);
// console.log(newPerson1);

// newPerson.city.pincode=657389;
// console.log(newPerson1);
// console.log(person);



// 3
// const person = { user: { name: "John", age: 25 } };
// const newPerson =JSON.parse(JSON.stringify(person))
// console.log(newPerson)



// 4
// let arr=[1,3,4,5]
// let newArr = [...arr];
// function addItem(newArr, item){
//   newArr.push(item);
//   return newArr;
// }
// console.log(addItem(newArr,2))



// 5
// const user={
//   name:"abc",
//   age:12
// }
// const user1={...user}
// const user2 = JSON.parse(JSON.stringify(user));

// function updateUser(user){
//   if(user1){
//     user1.lastActivity="1 hour ago"
//   }
//   return user1
// }
// console.log(updateUser());
// console.log(user1)
// console.log(user2)