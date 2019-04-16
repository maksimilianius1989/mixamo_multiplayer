"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRequestValidator {
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
    getErrorsMessage() {
        return this.errors.toString();
    }
}
exports.BaseRequestValidator = BaseRequestValidator;
//# sourceMappingURL=BaseRequestValidator.js.map