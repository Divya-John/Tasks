function SortBySum(arr) {
  let arr1 = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const sum = arr[i].reduce((acc, curr) => acc + curr, 0);
    arr1.push(sum);
  }
  let re = [...arr1];
  let arr2 = arr1.sort((a, b) => b - a);
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < re.length; j++) {
      if (arr2[i] === re[j]) {
        result.push(arr[j]);
      }
    }
  }
  return result;
}
console.log(SortBySum([[1, 2, 3], [4], [2, 7]]));
