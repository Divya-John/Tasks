export function camelCase(str:string) {
  
  if (str.length === 0 || str.trim() === "") return "Empty";
  return str.replaceAll(/_([a-z])/g, upper);
  function upper(match, str:string) {
    return str.toUpperCase();
  }
}
