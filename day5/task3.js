// 1
// let num=5;
// let car = { model: "Hyryder",color:"blue"};

// let newnum=num;
// let newcar=car;

// num=20;
// car.color="red"

// console.log(newnum)
// console.log(newcar)


// 2
// const person={
//   name: 'John',
//   age: 25,
//   city:{
//     homecity:"abc"
//   }
// }
// const newPerson = { ...person };
// // console.log(newPerson);
// const newPerson1 = Object.assign({},person);
// // console.log(newPerson1);

// person.name='Alice';
// person.city.homecity = "Delhi";
// console.log(person);
// console.log(newPerson);
// console.log(newPerson1);



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

//or

// function addItem(arr,item){
//   return [...arr,item]
// }
// const array=[1,2,3]
// const newArr = addItem(array, 4);
// console.log(array)
// console.log(newArr)


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



// function updateUser(user){
//   user.lastActive=new Date();
//   return user;
// }
// const user1={name:"John",age:25}
// updateUser(user1)
// console.log(user1)

// function updateUserImmutable(user){
//   return{
//     ...user,
//     lastActive:new Date()
//   }
// }
// const user2 = { name: "John", age: 25 };
// const updateUser2 = updateUserImmutable(user2);
// console.log(user2)
// console.log(updateUser2)