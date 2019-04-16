"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidatorHelper_1 = require("../Helpers/ValidatorHelper");
const BaseValidator_1 = require("./BaseValidator");
class NewRoadInit extends BaseValidator_1.BaseValidator {
    constructor(data) {
        super();
        this.name = data.name;
        this.startPoints = data.startPoints;
        this.startTime = data.startTime;
    }
    rules() {
        if (ValidatorHelper_1.ValidatorHelper.isEmpty(this.name))
            this.errors.push("New road name is empty");
        if (ValidatorHelper_1.ValidatorHelper.isEmpty(this.startTime))
            this.errors.push("New road start time is empty");
        if (this.startPoints.length <= 0)
            this.errors.push("New road start points is empty");
    }
}
exports.NewRoadInit = NewRoadInit;
//# sourceMappingURL=NewRoadInit.js.map