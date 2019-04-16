"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = require("./BaseEntity");
class RoadRoom extends BaseEntity_1.BaseEntity {
    constructor(uid, roadName, playersCount, map, startTime) {
        super();
        this.ACTIVE = 1;
        this.DISACTIVE = 0;
        this.UID = uid;
        this.roadName = roadName;
        this.playersCount = playersCount;
        this.map = map;
        this.startTime = startTime;
        this.state = this.ACTIVE;
    }
}
exports.RoadRoom = RoadRoom;
//# sourceMappingURL=RoadRoom.js.map