export function parse(str) {
    if (typeof str !== "string")
        return "Invalid input";
    if (!str.includes("=") && !str.includes("&") || str.includes("&&"))
        return "Invalid input";
    const result = str.split("&");
    let finalresult = {};
    for (let i in result) {
        if (result[i].includes("=="))
            return "Invalid input";
        const [first, second] = result[i].split("=");
        finalresult[first] = second;
    }
    return finalresult;
}
//# sourceMappingURL=task2.js.map