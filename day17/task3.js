function DeepEqual(a, b) {
  if (a === b) return true;
  else if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    } else {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
    }
    return true;
  } 
  else if (typeof a === "object" && typeof b === "object") {
    const aKey = Object.keys(a);
    const bKey = Object.keys(b);
    if (aKey.length !== bKey.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!a[i].hasOwnProperty(aKey[i]) || a[aKey[i]] !== b[bKey[i]]) {
        return false;
      }
    }
    return true;
  }
  else return false
}
console.log(DeepEqual({ x: 1, y: { z: 2 } }, { x: 1, y: { z: 3 } }));
console.log(DeepEqual([1, 2, 3], [1, 2, 3]));
console.log(DeepEqual(1, "1"));
