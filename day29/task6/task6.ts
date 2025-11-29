function compression(str:string, encdec:string) {
  if (encdec === "encrypt") {
    let count = {};
    for (let i of str) {
      count[i] = (count[i] || 0) + 1;
    }
    let key = Object.keys(count);
    let value = Object.values(count);
    let result = [];
    for (let i = 0; i < key.length; i++) {
      for (let j = 0; j < value.length; j++) {
        if (i === j) {
          result.push(key[i], value[j]);
        }
      }
    }
    return result.toString().replaceAll(/[,]/g, "");
  }
  if (encdec === "decrypt") {
    let arr1 = [];
    let arr2 = [];
    let result1 = [];
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        arr1.push(str[i]);
      }
      if (i % 2 !== 0) {
        arr2.push(str[i]);
      }
    }
    let arr2No = arr2.map((x) => Number(x));

    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2No.length; j++) {
        if (arr1[i].length !== arr2No[j] && i === j) {
          result1.push(arr1[i].repeat(arr2No[j]));
        }
      }
    }
    return result1.toString().replaceAll(/[,]/g, "");
  }
}
console.log(compression("aaabbbbcc", "encrypt"));
console.log(compression("a3b4c2", "decrypt"));
