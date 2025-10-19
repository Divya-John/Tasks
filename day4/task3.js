let obj = { a: 1, b: 2 };
console.log(obj)

const obj2 = Object.fromEntries(
  Object.entries(obj).map(([key, val]) => [val, key])
);

const result = "{"+ Object.entries(obj2).map(([key, val]) => ` ${key}:"${val}" `).join(',')+'}';
console.log(result);