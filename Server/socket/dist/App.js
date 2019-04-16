"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Storage_1 = require("./GameData/Storage");
const RoadRoomService_1 = require("./Serivces/RoadRoomService");
class App {
    static getInstance() {
        if (this.instance == null)
            this.instance = new App();
        return this.instance;
    }
    constructor() {
        this.roadRoomService = new RoadRoomService_1.RoadRoomService();
    }
    playerConnected(player) {
        Storage_1.PLAYERS.Update(player);
    }
    playerDisconnected(player) {
        Storage_1.PLAYERS.Update(player);
    }
    newRoad(data, player) {
        let road = this.roadRoomService.initNewRoad(data);
        player.setRoadRoom(road.getUID());
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map