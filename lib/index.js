"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareSum = void 0;
function squareSum(numbers) {
    return numbers === null || numbers === void 0 ? void 0 : numbers.reduce(function (prev, curr) { return prev + curr * curr; }, 0);
}
exports.squareSum = squareSum;
//# sourceMappingURL=index.js.map