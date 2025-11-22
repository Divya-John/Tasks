function emailvalidation(email:string) {
  const cap=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  if (!email.includes("@")) return "Invalid input";
  if (email.includes(" ")) return "Invalid input";
  const [first, second] = email.split("@");
  console.log(first);
  console.log(second);
  // for(let i='A';i<='Z';i++){
  //   console.log(i)
  // }
  if (
    first.length === 0 ||
    !first.includes(".") ||
    !first.includes("_") ||
    !first.includes("-") ||
    first.includes("..")
  )
    return "Invalid input";

  if(!second.includes('.')) return "Invalid input"
  const [first1, second1] = second.split(".");
    console.log(first1);
    console.log(second1);
  if(second1.length<2) return "Invalid input"
}
console.log(emailvalidation(".test@mail.com"));
