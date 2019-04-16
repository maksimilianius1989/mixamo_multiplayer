"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidatorHelper {
    static isString(data) {
        return typeof data === "string";
    }
    static isEmpty(data) {
        data += "";
        if (data === "null" ||
            data === "undefined" ||
            data === "0" ||
            data === "false" ||
            data.length <= 0)
            return true;
        return false;
    }
}
exports.ValidatorHelper = ValidatorHelper;
//# sourceMappingURL=ValidatorHelper.js.map