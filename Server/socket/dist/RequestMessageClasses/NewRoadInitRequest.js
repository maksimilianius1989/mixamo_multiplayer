"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidatorHelper_1 = require("../Helpers/ValidatorHelper");
const BaseRequestValidator_1 = require("./BaseRequestValidator");
class NewRoadInitRequest extends BaseRequestValidator_1.BaseRequestValidator {
    constructor(data) {
        super();
        this.name = data.name;
        this.countStartPoints = +data.countStartPoints;
        this.startTime = +data.startTime;
    }
    rules() {
        if (ValidatorHelper_1.ValidatorHelper.isEmpty(this.name))
            this.errors.push("New road name is empty");
        if (ValidatorHelper_1.ValidatorHelper.isEmpty(this.startTime))
            this.errors.push("New road start time is empty");
        if (ValidatorHelper_1.ValidatorHelper.isEmpty(this.countStartPoints))
            this.errors.push("New road count start points is empty");
    }
}
exports.NewRoadInitRequest = NewRoadInitRequest;
//# sourceMappingURL=NewRoadInitRequest.js.map