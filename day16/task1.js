function parentheses(str) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === "(" && str[i + 1] === ")") {
      count++;
    }
  }
  return count + count;
}
console.log(parentheses("(()"));
console.log(parentheses(")()())"));
console.log(parentheses(")()()("));
console.log(parentheses("((()))"));
console.log(parentheses("(()())"));
console.log(parentheses("(())()"));