"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    getUID() {
        return this.UID;
    }
    setUID(_UID) {
        this.UID = _UID;
    }
    compareUID(UID) {
        return this.UID === UID;
    }
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
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map