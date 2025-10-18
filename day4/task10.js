function valid(email){
  if (email.includes("@") && email.includes(".com")) {
    return true;
  } else {
    return false;
  }
}
console.log(valid("test@example.com"));
console.log(valid("invalid.email.com"));
console.log(valid("user@domain"));