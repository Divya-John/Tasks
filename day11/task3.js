let person = {
  firstName: "John",
  lastName: "Doe",
  birthYear:1990,
  getFullName(){
     const fullName = `${this.firstName} ${this.lastName}`;
     return fullName;
  },
  getAge() {
  const currentyear= new Date().getFullYear()
  const age =  currentyear - `${this.birthYear}`;
  return age;
  }
}

console.log(person.getFullName());
console.log(person.getAge());
