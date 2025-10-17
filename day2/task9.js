let isEmail = true;
function valiateEmail(email){
  if(email.includes("@")&&email.includes(".com")){
    return isEmail;
  }
  else{
    return !isEmail
  }
}
console.log(valiateEmail("test@example.com"));
console.log(valiateEmail("invalid.email.com"));
console.log(valiateEmail("user@domain"));