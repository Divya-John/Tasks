function prime(n) {
    if (n < 1)
        return false;
    for (let i = 0; i < n - 1; i++) {
        if (n % 2 === 0)
            return false;
        else
            return true;
    }
}
console.log(prime(7));
console.log(prime(10));
console.log(prime(29));
export {};
//# sourceMappingURL=task7.js.map