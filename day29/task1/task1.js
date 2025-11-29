"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AnalyzeHeatmap(heatmap) {
    let result = {};
    const high = [];
    for (let i = 0; i < heatmap.length; i++) {
        for (let j = 0; j < heatmap[i].length; j++) {
            high.push(heatmap[i][j]);
        }
    }
    const max = Math.max(...high);
    const min = Math.min(...high);
    const sum = high.reduce((acc, curr) => acc + curr);
    const avg = sum / high.length;
    const hottestPoint = [];
    const coldestPoint = [];
    for (let i = 0; i < heatmap.length; i++) {
        for (let j = 0; j < heatmap[i].length; j++) {
            if (heatmap[i][j] === max) {
                hottestPoint.push(i, j);
            }
            if (heatmap[i][j] === min) {
                coldestPoint.push(i, j);
            }
        }
    }
    let value = [max, min, avg, hottestPoint, coldestPoint];
    let key = [
        "maxTemp",
        "minTemp",
        "averageTemp",
        "hottestPoint",
        "coldestPoint",
    ];
    Object.keys = key;
    Object.values = value;
    console.log(Object.keys);
    console.log(Object.values);
}
console.log(AnalyzeHeatmap([
    [30, 32, 35],
    [28, 40, 33],
    [31, 36, 38],
]));
//# sourceMappingURL=task1.js.map