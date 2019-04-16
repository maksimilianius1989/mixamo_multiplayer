import {PlayerException} from "../Exceptions/PlayerException";
import {ValidatorHelper} from "../Helpers/ValidatorHelper";
import {IEntity} from "./IEntity";

export class BaseEntity implements IEntity
{
    protected UID: string;

    public getUID(): string
    {
        return this.UID;
    }

    public setUID(UID: string): void
    {
        if (ValidatorHelper.isEmpty(UID))
            throw new PlayerException("UID is empty");

        this.UID = UID;
    }

    public compareUID(UID: string): boolean
    {
        if (ValidatorHelper.isEmpty(UID))
            return false;

        return this.UID === UID;
    }
}
