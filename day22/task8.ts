export function even(n:number) {
  if(typeof n!== "number") return "Invalid input"
  for (let i = 0; i < n; i++) {
    if (n / 2 === i) return "even";
  }
  return "odd";
}
console.log(even(2));
