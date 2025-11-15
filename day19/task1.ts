export function DetectSymmetry(matrix: number[][]) {
  if (
    !Array.isArray(matrix) ||
    matrix.length === 0 ||
    !matrix.every(
      (row) =>
        Array.isArray(row) &&
        row.length === matrix.length &&
        row.every((n) => typeof n === "number")
    )
  )
    return "Invalid input";
  const n = matrix.length;
  const horizontal = matrix.every((row, i) => {
    return JSON.stringify(row) === JSON.stringify(matrix[n - 1 - i]);
  });
  const vertical = matrix.every((row) => {
    return row.join("") === row.slice().reverse().join("");
  });
  let diagonal = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        diagonal = false;
        break;
      }
    }
    if (!diagonal) break;
  }
  return { horizontal, vertical, diagonal };
}
