
function checkPalindrom(plaindrom) {
  let spaceremoved = plaindrom.replace(/[,.!\s]/g, "").toLowerCase();
  const newPa = spaceremoved.split("").reverse().join("");
  if (spaceremoved == newPa) {
    return true;
  } else {
   return false;
  }
}
console.log(checkPalindrom("A man, a plan, a canal, Panama!"));
console.log(checkPalindrom("Racecar"));
console.log(checkPalindrom("Hello, world!"));