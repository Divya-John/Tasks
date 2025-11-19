function findLongestChain(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i],arr[i+1])
    if (arr[i] < arr[i + 1]) return result.push(arr[i]);
  }
  console.log(result);
}
findLongestChain([5, 1, 2, 3, 0, 9, 4, 6]);
