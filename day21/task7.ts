function emailvalidation(email:string) {
  const small = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",".","_","-","..",0,1,2,3,4,5,6,7,8,9];
  if (!email.includes("@")) return "Invalid input";
  if (email.includes(" ")) return "Invalid input";
  const [first, second] = email.split("@");
  console.log(first);
  console.log(second);
  for(let i=0;i<small.length;i++){
    if(!first.includes(small[i]))
      return "Invalid input"
    }
  if (first.length === 0) return "Invalid input";

  if(!second.includes('.')) return "Invalid input"
  const [first1, second1] = second.split(".");
    console.log(first1);
    console.log(second1);
  if(second1.length<2) return "Invalid input"
}
console.log(emailvalidation("test@mail.com"));
