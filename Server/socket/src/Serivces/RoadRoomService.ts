import {Vector3} from "../Entities/Navigations/Vector3";
import {RoadRoom} from "../Entities/RoadRoom";
import {ROAD_ROOMS} from "../GameData/Storage";
import {RandomHelper} from "../Helpers/RandomHelper";
import {NewRoadInitRequest} from "../RequestMessageClasses/NewRoadInitRequest";

export class RoadRoomService
{
    public initNewRoad(roadRoomData: NewRoadInitRequest): RoadRoom
    {
        let generateUID = RandomHelper.guidForList(ROAD_ROOMS.GetAll());
        let generateMap = this.generateMap(roadRoomData.startPoints.length);

        let roadRoom = new RoadRoom(
            generateUID,
            roadRoomData.name,
            roadRoomData.startPoints.length,
            generateMap,
            roadRoomData.startPoints,
            roadRoomData.startTime
        );

        ROAD_ROOMS.Add(roadRoom);

        return roadRoom;
    }

    private generateMap(countSection: number, maxLength: number = 20): Array<number>
    {
        let lengthRoom = RandomHelper.number(maxLength);
        let map: Array<number> = new Array<number>();
        for (let i = 0; i < lengthRoom; i++)
            map.push(RandomHelper.number(countSection));

        return map;
    }
}
