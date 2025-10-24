const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 2000);
});
newPromise
.then((message) => {console.log(message);})
.catch((error)=>{console.log(error)})
.finally(()=>{console.log("Promise completed")})