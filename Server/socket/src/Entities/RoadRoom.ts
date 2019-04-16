import {BaseEntity} from "./BaseEntity";
import {Vector3} from "./Navigations/Vector3";

export class RoadRoom extends BaseEntity
{
    public roadName: string;
    public playersCount: number;
    public startPoints: Array<Vector3>;
    public map: Array<number>;
    public startTime: number;

    public constructor(
        uid: string,
        roadName: string,
        playersCount: number,
        map: Array<number>,
        startPoints: Array<Vector3>,
        startTime: number,
    ) {
        super();
        this.UID = uid;
        this.roadName = roadName;
        this.playersCount = playersCount;
        this.map = map;
        this.startPoints = startPoints;
        this.startTime = startTime;
    }
}
