"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoadRoom_1 = require("../Entities/RoadRoom");
const Storage_1 = require("../GameData/Storage");
const RandomHelper_1 = require("../Helpers/RandomHelper");
class RoadRoomService {
    initNewRoad(roadRoomData) {
        let generateUID = RandomHelper_1.RandomHelper.guidForList(Storage_1.ROAD_ROOMS.GetAll());
        let generateMap = this.generateMap(roadRoomData.startPoints.length);
        let roadRoom = new RoadRoom_1.RoadRoom(generateUID, roadRoomData.name, roadRoomData.startPoints.length, generateMap, roadRoomData.startPoints, roadRoomData.startTime);
        Storage_1.ROAD_ROOMS.Add(roadRoom);
        return roadRoom;
    }
    generateMap(countSection, maxLength = 20) {
        let lengthRoom = RandomHelper_1.RandomHelper.number(maxLength);
        let map = new Array();
        for (let i = 0; i < lengthRoom; i++)
            map.push(RandomHelper_1.RandomHelper.number(countSection));
        return map;
    }
}
exports.RoadRoomService = RoadRoomService;
//# sourceMappingURL=RoadRoomService.js.map