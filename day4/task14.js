function toRoman(num){
  if(num<0||num>2000){
    return "Input must be between 1 and 2000"
  }
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result=""
  for(let i=0;i<values.length;i++){
     while (num >= values[i]) {
       num -= values[i];
       result += symbols[i];
     }
  }
  return result
}
console.log(toRoman(5));   
console.log(toRoman(60));   