function matrix(arr) {
  let rows = new Set();
  let cols = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (let r of rows) {
    for (let j = 0; j < arr[r].length; j++) {
      arr[r][j] = 0;
    }
  }

  for (let c of cols) {
    for (let i = 0; i < arr.length; i++) {
      arr[i][c] = 0;
    }
  }

  return arr;
}

console.log(
  matrix([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
