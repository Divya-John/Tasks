function DeepEqual(a, b) {
  if (a === b) return true;
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  )
    return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!DeepEqual(a[i], b[i])) return false;
    }
    return true;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;
  for (let key of aKeys) {
    if (!b.hasOwnProperty(key) || !DeepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
console.log(DeepEqual({ x: 1, y: { z: 2 } }, { x: 1, y: { z: 2 } }));
console.log(DeepEqual([1, 2, 3], [1, 2, 3]));
console.log(DeepEqual(1, "1"));
