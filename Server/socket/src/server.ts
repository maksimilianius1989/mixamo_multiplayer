import * as express from "express";
import {Socket} from "socket.io";
import {IPlayersContainer} from "./Entities/IPlayersContainer";
import {PlayersArrContainer} from "./Entities/PlayersArrContainer";
import {GameSocketEvents as GSE} from "./GameSocket/GameSocketEvents";
import {Player} from "./Entities/Player";

const app = express();
app.set("port", process.env.PORT || 3000);
let http = require("http").Server(app);
let io = require("socket.io")(http);

let playerContainer: IPlayersContainer = new PlayersArrContainer();

io.on(GSE.CONNECTION, (socket: Socket) =>
{
    let currentPlayer = new Player();
    console.log("new client connected => " + socket.id);

    socket.on(GSE.CLIENT_INIT, (data: any) =>
    {
        currentPlayer.setUID(data.UID);
        currentPlayer.setName(data.name);

        playerContainer.Update(currentPlayer);

        console.log("client init " + currentPlayer.getUID())
    });

    socket.on(GSE.PLAYER_MOVE, (data: any) =>
    {
        currentPlayer.setPosition(data);

        console.log(currentPlayer);
    });

    socket.on(GSE.PLAYER_ROTATE, (data: any) =>
    {
        currentPlayer.setRotation(data);

        console.log(currentPlayer);
    })

    socket.on(GSE.DISCONNECT, () =>
    {
        playerContainer.Update(currentPlayer);

        console.log("player disconnected => " + socket.id);
    });
});

const server = http.listen(3000, function() {
    console.log("listening on *:3000");
});
