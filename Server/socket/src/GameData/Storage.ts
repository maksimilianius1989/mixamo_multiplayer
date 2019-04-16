import {IList} from "../Entities/IList";
import {Player} from "../Entities/Player";
import {Repository} from "../Entities/Repository";
import {RoadRoom} from "../Entities/RoadRoom";

export let PLAYERS: IList<Player> = new Repository();

export let ROAD_ROOMS: IList<RoadRoom> = new Repository();
