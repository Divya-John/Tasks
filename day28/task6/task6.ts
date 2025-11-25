export function validInput(arr:(number|string|null|boolean|undefined)[]) {
  arr = arr.filter((x) => {
    return Boolean(x);
  });
  return arr;
}
