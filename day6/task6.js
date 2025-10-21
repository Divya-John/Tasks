
function Strength(email) {

  if (email.length < 6) {
    console.log("weak");
  } 

  else if (email.length < 8 && (/\w+[!@#$%^&*()-_0-9]/g).test(email)) {
    console.log("medium ");
  }

  else if(email.length >= 8 && (/\w+[!@#$%^&*()-_0-9]/g).test(email)&& (/[A-Z]/g).test(email) &&(/[a-z]/g).test(email)){
      console.log("Strong");
  }
}
(Strength('use@jm'));

