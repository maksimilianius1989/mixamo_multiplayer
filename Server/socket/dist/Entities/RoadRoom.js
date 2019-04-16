"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = require("./BaseEntity");
class RoadRoom extends BaseEntity_1.BaseEntity {
    constructor(uid, roadName, playersCount, map, startPoints, startTime) {
        super();
        this.UID = uid;
        this.roadName = roadName;
        this.playersCount = playersCount;
        this.map = map;
        this.startPoints = startPoints;
        this.startTime = startTime;
    }
}
exports.RoadRoom = RoadRoom;
//# sourceMappingURL=RoadRoom.js.map