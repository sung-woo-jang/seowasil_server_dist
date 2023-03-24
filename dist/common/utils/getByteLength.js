"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByteLength = void 0;
function getByteLength(text) {
    let byteLength = 0;
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        if (charCode <= 0xff) {
            byteLength += 1;
        }
        else {
            byteLength += 2;
        }
    }
    return byteLength;
}
exports.getByteLength = getByteLength;
//# sourceMappingURL=getByteLength.js.map