"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseValidator {
    constructor() {
        this.errors = new Array();
    }
    validate() {
        this.rules();
        if (this.errors.length)
            return false;
        return true;
    }
    getErrors() {
        return this.errors;
    }
}
exports.BaseValidator = BaseValidator;
//# sourceMappingURL=BaseValidator.js.map