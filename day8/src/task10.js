function frequency(str) {
    const newStr = str.split("").join("").toString().toLowerCase();
    let count = {};
    for (let i of newStr) {
        count[i] = (count[i] || 0) + 1;
    }
    return count;
}
console.log(frequency("hello"));
export {};
//# sourceMappingURL=task10.js.map