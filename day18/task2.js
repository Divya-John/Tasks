function SortByKey(arr, key, order = "asc") {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    // if (order === "asc") {
    // console.log(Object.key===key)

    // if (Object.key === key) {

    for (let i = 0; i < arr[i].length; i++) {
      console.log(Object.key(i));
      console.log(Object.values);
    }
    // }
  }
  function asc() {
    arr = arr.sort((a, b) => a - b);
  }
  function desc() {
    arr = arr.sort((a, b) => b - a);
  }
}
console.log(
  SortByKey([{ age: 30 }, { age: 20 }], (key = "age"), (order = "desc"))
);