const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Network error");
  }, 1000);
});
newPromise.catch((e)=>{console.error(e)})
