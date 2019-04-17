"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const Dotenv = require("dotenv");
const express = require("express");
const App_1 = require("./App");
const BadRequestExceptoin_1 = require("./Exceptions/BadRequestExceptoin");
const GameSocketEvents_1 = require("./GameSocket/GameSocketEvents");
const Player_1 = require("./Entities/Player");
const NewRoadInitRequest_1 = require("./RequestMessageClasses/NewRoadInitRequest");
const ENV = Dotenv.parse(fs.readFileSync(__dirname + '/../.env'));
const app = express();
app.set("port", 3000);
let http = require("http").Server(app);
let io = require("socket.io")(http);
let MRS = App_1.App.getInstance();
io.on(GameSocketEvents_1.GameSocketEvents.CONNECTION, (socket) => {
    let currentPlayer = new Player_1.Player();
    currentPlayer.setName('unknown 1');
    console.log(GameSocketEvents_1.GameSocketEvents.CONNECTION, currentPlayer);
    socket.on(GameSocketEvents_1.GameSocketEvents.PLAYER_INIT, (data) => {
        try {
            currentPlayer.setUID(data.UID);
            currentPlayer.setName(data.name);
            currentPlayer.setPosition(data.position);
            currentPlayer.setRotation(data.rotation);
            MRS.playerConnected(currentPlayer);
        }
        catch (e) {
            console.error(e.message);
        }
        console.log(GameSocketEvents_1.GameSocketEvents.PLAYER_INIT, data);
    });
    socket.on(GameSocketEvents_1.GameSocketEvents.NEW_ROAD_INIT, (data) => {
        try {
            let newRoadInit = new NewRoadInitRequest_1.NewRoadInitRequest(data);
            if (!newRoadInit.validate())
                throw new BadRequestExceptoin_1.BadRequestExceptoin(newRoadInit.getErrorsMessage());
            MRS.newRoad(data, currentPlayer);
        }
        catch (e) {
            console.error(e.message);
        }
        console.log(GameSocketEvents_1.GameSocketEvents.NEW_ROAD_INIT, data);
    });
    socket.on(GameSocketEvents_1.GameSocketEvents.PLAYER_MOVE, (data) => {
        try {
            currentPlayer.setPosition(data);
        }
        catch (e) {
            console.error(e.message);
        }
        console.log(GameSocketEvents_1.GameSocketEvents.PLAYER_MOVE, data);
    });
    socket.on(GameSocketEvents_1.GameSocketEvents.PLAYER_ROTATE, (data) => {
        try {
            currentPlayer.setRotation(data);
        }
        catch (e) {
            console.error(e.message);
        }
        console.log(GameSocketEvents_1.GameSocketEvents.PLAYER_ROTATE, data);
    });
    socket.on(GameSocketEvents_1.GameSocketEvents.DISCONNECT, () => {
        try {
            MRS.playerDisconnected(currentPlayer);
        }
        catch (e) {
            console.error(e.message);
        }
        console.log(GameSocketEvents_1.GameSocketEvents.DISCONNECT, currentPlayer);
    });
});
const server = http.listen(3000, function () {
    console.log("listening on *:3000");
});
//# sourceMappingURL=server.js.map