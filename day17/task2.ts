// function sortByKey<T>(
//   arr: { [key: string]: T }[],
//   key: string,
//   order: "asc" | "desc" = "asc"
// ) {
// if (!Array.isArray(arr) || arr.length === 0 || typeof key !== "string")
//   return "invalid input";
// let newArr: { [key: string]: T }[] = [...arr];
// newArr.sort((a, b) => {
//   const val1 = a[key];
//   const val2 = b[key];
//   if (typeof val1 === "number" && typeof val2 === "number") {
//     return order === "asc" ? val1 - val2 : val2 - val1;
//   }
//   if (typeof val1 === "string" && typeof val2 === "string") {
//     return order === "asc"
//       ? val1.localeCompare(val2)
//       : val2.localeCompare(val1);
//   }
//   return order === "asc"
//     ? String(val1).localeCompare(String(val2))
//     : String(val2).localeCompare(String(val1));
// });
// return newArr;

function sortByKey(
  arr: { age: number; name: string }[],
  key: "age" | "name",
  order: "asc" | "desc" = "asc"
):{ age: number; name: string }[]  {
  return arr.sort((a, b) => {
    if (a[key] < b[key]) {
      return order === "asc" ? -1 : 1; 
    } else if (a[key] > b[key]) {
      return order === "asc" ? 1 : -1; 
    } else {
      return 0; 
    }
  });
}

const people = [{ age: 30 }, { age: 20 }, { age: 25 }];
console.log(sortByKey(people, "age", "asc"));