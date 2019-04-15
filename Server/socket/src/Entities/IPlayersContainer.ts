import {Player} from "./Player";

export interface IPlayersContainer
{
    Add(player: Player): void;

    Remove(player: Player): void;

    Update(player: Player): void;

    Find(UID: string): Player|void;

    GetAll(): Array<Player>|void;
}
