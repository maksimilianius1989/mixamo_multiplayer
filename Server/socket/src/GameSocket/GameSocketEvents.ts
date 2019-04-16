export class GameSocketEvents
{
    //socket
    public static readonly CONNECTION: string = "connection";
    public static readonly DISCONNECT: string = "disconnect";
    //player
    public static readonly PLAYER_INIT: string = "player_init";
    public static readonly PLAYER_MOVE: string = "player_move";
    public static readonly PLAYER_ROTATE: string = "player_rotate";
    //road
    public static readonly NEW_ROAD_INIT: string = "new_road_init";
}
