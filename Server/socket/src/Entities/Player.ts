export class Player
{
    private UID: string;
    private name: string;
    private position: Array<string>;
    private rotation: Array<string>;

    public getUID(): string
    {
        return this.UID;
    }

    public setUID(_UID: string): void
    {
        this.UID = _UID;
    }

    public compareUID(UID: string): boolean
    {
        return this.UID === UID;
    }

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
}
