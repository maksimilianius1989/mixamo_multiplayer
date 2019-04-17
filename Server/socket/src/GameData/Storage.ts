import {IEntity} from "../Entities/IEntity";
import {IList} from "../Entities/IList";
import {Repository} from "../Entities/Repository";

export let PLAYERS: IList<IEntity> = new Repository();

export let ROAD_ROOMS: IList<IEntity> = new Repository();
