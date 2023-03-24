"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberWithCommas = void 0;
const numberWithCommas = (number) => {
    return `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
exports.numberWithCommas = numberWithCommas;
//# sourceMappingURL=numberWithCommas.js.map