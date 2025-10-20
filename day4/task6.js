const noTowords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

function noWords(n){
  if (n in noTowords) return noTowords[n];
  let text="";
  if(n>=100){
    text = text + noWords(Math.round(n / 100)) + " hundred";
    n = n % 100;
  }

  if(n>20){
    if(text!=="") text+=" and "
    text = text + noWords(Math.round(n / 10)*10) ;
    n = n % 10;
    if(n%10>0){
      text+=" "+noTowords[n%10]
    }
  }
  return text;
}
console.log(noWords(723));