function emailValidation(email){
  if(email.includes(" ")) return false;

  for(let i=0;i<email.length;i++){
    const ch=email[i];
    if(ch>="A"&&ch<="Z"){
      return false;
    }
  }

  const result=email.split("@")
  if (result.length!= 2) return false;

  const [first,second]=result
  if(!first||!second) return false;

  if(!second.includes("."))return false;

  if(second.startsWith(".")||second.endsWith(".")) return false;

  const second2= second.split(".")
  const lastsecontion=second2[second2.length-1]
  if(lastsecontion.length<2) return false;

  return true;
}
console.log(emailValidation("divya@gmail.com"))