"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = require("./BaseEntity");
class Player extends BaseEntity_1.BaseEntity {
    getName() {
        return this.name;
    }
    setName(_name) {
        this.name = _name;
    }
    setPosition(_position) {
        this.position = _position;
    }
    getPosition() {
        return this.position;
    }
    setRotation(_rotation) {
        this.rotation = _rotation;
    }
    getRotation() {
        return this.rotation;
    }
    setRoadRoom(ID) {
        this.roadRoomID = ID;
    }
    getRoadRoomID() {
        return this.roadRoomID;
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map