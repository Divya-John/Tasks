function myReduce(array, callback, initialValue=0) {
  if (!Array.isArray(arr)) return "Invalid input";
  array = array.filter((arr) => typeof arr === "number");
  let result = initialValue;
  for (i = 0; i < array.length; i++) {
    result = callback(result, array[i]);
  }
  return result;
}

function newArray(n1, n2) {
  return n1 + n2;
}

console.log(myReduce([1, 2, 3, 4, 5], newArray));
