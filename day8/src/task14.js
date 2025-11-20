function anagram(words) {
    let wordsGroup = {};
    for (const word of words) {
        let sorted = word.split("").sort().join("");
        if (!wordsGroup[sorted]) {
            wordsGroup[sorted] = [];
        }
        wordsGroup[sorted].push(word);
    }
    let result = Object.values(wordsGroup);
    return result;
}
console.log(anagram(["care", "race", "acre", "dog", "god", "cat"]));
export {};
//# sourceMappingURL=task14.js.map