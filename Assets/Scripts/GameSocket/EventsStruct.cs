namespace GameSocket
{
    public struct GameSocketEvents
    {
        //socket
        public const string CONNECT = "connect";
        public const string DISCONNECT = "disconnect";
        //player
        public const string PLAYER_INIT = "player_init";
        public const string PLAYER_MOVE = "player_move";
        public const string PLAYER_ROTATE = "player_rotate";
        //road
        public const string NEW_ROAD_INIT = "new_road_init";
    }
}
