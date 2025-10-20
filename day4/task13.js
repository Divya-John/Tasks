let arr = [
  [2, 9, 0],
  [7, 1, 5],
];

let result = [];

for (i = 0; i < arr[0].length; i++) {
  let row = [];
  for (j = 0; j < arr.length; j++) {
    row.push(arr[j][i]);
  }
  result.push(row);
}
console.log(result);
