import {BaseEntity} from "./BaseEntity";
import {Vector3} from "./Navigations/Vector3";

export class RoadRoom extends BaseEntity
{
    public readonly ACTIVE: number = 1;
    public readonly DISACTIVE: number = 0;

    public roadName: string;
    public playersCount: number;
    public map: Array<number>;
    public startTime: number;
    public state: number;

    public constructor(
        uid: string,
        roadName: string,
        playersCount: number,
        map: Array<number>,
        startTime: number,
    ) {
        super();

        this.UID = uid;
        this.roadName = roadName;
        this.playersCount = playersCount;
        this.map = map;
        this.startTime = startTime;
        this.state = this.ACTIVE;
    }
}
