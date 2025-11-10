function Partition(array, fn) {
  if (!Array.isArray(array)) return "Invalid input";
  let result1 = [];
  let result2 = [];
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) result1.push(array[i]);
    else result2.push(array[i]);
  }
  result.push(result1, result2);
  return result;
}
console.log(
  Partition([1, "1", "2", 2, 3, 4, "4"], (x) => typeof x === "string")
);