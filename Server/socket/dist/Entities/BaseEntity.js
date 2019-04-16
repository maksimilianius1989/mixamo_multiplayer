"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlayerException_1 = require("../Exceptions/PlayerException");
const ValidatorHelper_1 = require("../Helpers/ValidatorHelper");
class BaseEntity {
    getUID() {
        return this.UID;
    }
    setUID(UID) {
        if (ValidatorHelper_1.ValidatorHelper.isEmpty(UID))
            throw new PlayerException_1.PlayerException("UID is empty");
        this.UID = UID;
    }
    compareUID(UID) {
        if (ValidatorHelper_1.ValidatorHelper.isEmpty(UID))
            return false;
        return this.UID === UID;
    }
}
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=BaseEntity.js.map