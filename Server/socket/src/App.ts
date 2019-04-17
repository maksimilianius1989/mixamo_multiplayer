import {Player} from "./Entities/Player";
import {PLAYERS} from "./GameData/Storage";
import {NewRoadInitRequest} from "./RequestMessageClasses/NewRoadInitRequest";
import {RoadRoomService} from "./Serivces/RoadRoomService";

export class App
{
    private static instance: App;
    public static getInstance(): App
    {
        if (this.instance == null)
            this.instance = new App();

        return this.instance;
    }

    private roadRoomService: RoadRoomService;

    private constructor()
    {
        this.roadRoomService = new RoadRoomService();
    }

    public playerConnected(player: Player): void
    {
        PLAYERS.Update(player);
    }

    public playerDisconnected(player: Player): void
    {
        PLAYERS.Update(player)
    }

    public newRoad(data: NewRoadInitRequest, player: Player): void
    {
        let road = this.roadRoomService.initNewRoad(data);
        player.setRoadRoom(road.getUID());
    }
}
