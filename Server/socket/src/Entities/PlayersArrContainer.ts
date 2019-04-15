import {Player} from "./Player";
import {IPlayersContainer} from "./IPlayersContainer";

export class PlayersArrContainer implements IPlayersContainer
{
    private players: Array<Player> = new Array<Player>();

    public GetAll(): Array<Player>|void
    {
        return this.players;
    }

    public Add(player: Player): void
    {
        this.players.push(player);
    }

    public Remove(player: Player): void
    {
        for(let i = 0; i < this.players.length; i++) {
            if (this.players[i].compareUID(player.getUID())) {
                this.players.slice(i, 1);
            }
        }
    }

    public Update(player: Player): void
    {
        this.Remove(player);
        this.Add(player);
    }

    public Find(UID: string): Player|void
    {
        this.players.forEach(player => {
            if (player.compareUID(UID))
                return player;
            return null;
        });
    }
}
