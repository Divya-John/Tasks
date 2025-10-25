const Person1=[
  {
    name:"John",
    age:25
  }
]
const Person2=JSON.parse(JSON.stringify(Person1))
console.log(Person2)