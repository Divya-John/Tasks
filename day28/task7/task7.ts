export function vowels(str:string) {
  const newstr= str.split("");
    if (str.length === 0 || str.trim() === "") return "Empty";
  let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let count = [];
  for (let i = 0; i < newstr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (newstr[i] === arr[j]) {
        count.push(newstr[i]);
      }
    }
  }
  return count.length;
}
