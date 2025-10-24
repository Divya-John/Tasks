async function login(result){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(result)
    }, 3000);
  })
}
login()

async function f1(){
  const result = await login("Login succesfully");
  console.log(result)
}
f1()
