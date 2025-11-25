export function str(obj: object) {
  if (Object.keys(obj).length === 0 && Object.values(obj).length === 0) {
    return "Invalid input";
  }
  let result = [];
  for (const [key, value] of Object.entries(obj)) {
    result.push(`${key}=${value}`);
  }
  return result.toString().replaceAll(/[,]/g, "&");
}
