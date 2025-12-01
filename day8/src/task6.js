"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
function direction(direction) {
    console.log(`You moved ${direction}!`);
}
direction(Direction.Up);
//# sourceMappingURL=task6.js.map