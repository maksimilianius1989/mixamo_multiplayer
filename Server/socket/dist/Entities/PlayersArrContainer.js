"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayersArrContainer {
    constructor() {
        this.players = new Array();
    }
    GetAll() {
        return this.players;
    }
    Add(player) {
        this.players.push(player);
    }
    Remove(player) {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].compareUID(player.getUID())) {
                this.players.slice(i, 1);
            }
        }
    }
    Update(player) {
        this.Remove(player);
        this.Add(player);
    }
    Find(UID) {
        this.players.forEach(player => {
            if (player.compareUID(UID))
                return player;
            return null;
        });
    }
}
exports.PlayersArrContainer = PlayersArrContainer;
//# sourceMappingURL=PlayersArrContainer.js.map