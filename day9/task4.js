
const addNumber= new Promise((resolve,reject)=>{
    resolve(5)
  })
addNumber
  .then((value) => (value*2))
  .then((value) => (value+10))
  .then((value) => {console.log(value)});