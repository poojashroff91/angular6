"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("X is: " + this._x + " Y is: " + this._y);
    };
    return Point;
}());
exports.Point = Point;
