const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function numtext(num) {
  let text = "";
  if (num >= 100) {
    text += ones[Math.floor(num / 100)] + "hundred";
    num %= 100;
    if (num > 0) {
      text += "and";
    }
  }
  if (num > 0) {
    if (num < 20) {
      text += ones[num];
    } else {
      text += tens[Math.floor(num / 10)];
      if (num % 10 > 0) {
        text += " " + ones[num % 10];
      }
    }
  }
  return text;
}
function numberToText(num) {
  if (num === 0) {
    return "zero";
  }
  if (num < 0) {
    return "minus " + numberToText(-num);
  }

  const scales = ["", "thousand", "million", "billion"];
  let text = "";
  let scaleIndex = 0;

  while (num > 0) {
    const chunk = num % 1000;
    if (chunk > 0) {
      const chunkText = numtext(chunk);
      if (text !== "") {
        text = chunkText + " " + scales[scaleIndex] + " " + text;
      } else {
        text = chunkText + (scales[scaleIndex] ? " " + scales[scaleIndex] : "");
      }
    }
    num = Math.floor(num / 1000);
    scaleIndex++;
  }

  return text.trim();
}
console.log(numberToText(723));
console.log(numberToText(42));
console.log(numberToText(15));
console.log(numberToText(100));
console.log(numberToText(2000));
console.log(numberToText(12345));
console.log(numberToText(999999999));
