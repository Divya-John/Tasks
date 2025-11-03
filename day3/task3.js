function deepClone(obj){
  const newObj=JSON.parse(JSON.stringify(obj))
  return newObj;
}
console.log(
  deepClone({
    name: "JavaScript",
    country: "US",
    dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
  })
);