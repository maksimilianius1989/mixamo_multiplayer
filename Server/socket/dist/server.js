"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PlayersArrContainer_1 = require("./Entities/PlayersArrContainer");
const GameSocketEvents_1 = require("./GameSocket/GameSocketEvents");
const Player_1 = require("./Entities/Player");
const app = express();
app.set("port", process.env.PORT || 3000);
let http = require("http").Server(app);
let io = require("socket.io")(http);
let playerContainer = new PlayersArrContainer_1.PlayersArrContainer();
io.on(GameSocketEvents_1.GameSocketEvents.CONNECTION, (socket) => {
    let currentPlayer = new Player_1.Player();
    console.log("new client connected => " + socket.id);
    socket.on(GameSocketEvents_1.GameSocketEvents.CLIENT_INIT, (data) => {
        currentPlayer.setUID(data.UID);
        currentPlayer.setName(data.name);
        playerContainer.Update(currentPlayer);
        console.log("client init " + currentPlayer.getUID());
    });
    socket.on(GameSocketEvents_1.GameSocketEvents.PLAYER_MOVE, (data) => {
        currentPlayer.setPosition(data);
        console.log(currentPlayer);
    });
    socket.on(GameSocketEvents_1.GameSocketEvents.PLAYER_ROTATE, (data) => {
        currentPlayer.setRotation(data);
        console.log(currentPlayer);
    });
    socket.on(GameSocketEvents_1.GameSocketEvents.DISCONNECT, () => {
        playerContainer.Update(currentPlayer);
        console.log("player disconnected => " + socket.id);
    });
});
const server = http.listen(3000, function () {
    console.log("listening on *:3000");
});
//# sourceMappingURL=server.js.map