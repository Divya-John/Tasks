export function sort(arr: number[]) {
  if(arr.length===0) return "Empty"
  let asc = [...arr].sort((a, b) => a - b);
  let desc = [...arr].sort((a, b) => b - a);

if(JSON.stringify(arr)===JSON.stringify(asc)) return "ascending";
 if (JSON.stringify(arr) === JSON.stringify(desc)) return "descending";
 else return "unsorted";
}