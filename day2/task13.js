
function longest(str) {
  let result = [];
  for (i = 0; i < str.length; i++) {
    if (str[i].length > result.length) {
      result = str[i];
    }
  }
  return result;
}
console.log(longest(["cat", "dog", "elephant", "tiger"]));
console.log(longest(["apple", "banana", "orange"]));
console.log(longest(["programming", "is", "fun"]));