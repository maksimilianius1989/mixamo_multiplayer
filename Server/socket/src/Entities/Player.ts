import {BaseEntity} from "./BaseEntity";

export class Player extends BaseEntity
{
    protected name: string;
    protected position: Array<string>;
    protected rotation: Array<string>;
    protected roadRoomID: string;

    public getName(): string
    {
        return this.name;
    }

    public setName(_name: string): void
    {
        this.name = _name;
    }

    public setPosition(_position: Array<string>): void
    {
        this.position = _position;
    }

    public getPosition(): Array<string>
    {
        return this.position;
    }

    public setRotation(_rotation: Array<string>): void
    {
        this.rotation = _rotation;
    }

    public getRotation(): Array<string>
    {
        return this.rotation;
    }

    public setRoadRoom(ID: string): void
    {
        this.roadRoomID = ID;
    }

    public getRoadRoomID(): string
    {
        return this.roadRoomID;
    }
}
