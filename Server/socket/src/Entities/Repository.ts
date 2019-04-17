import {IEntity} from "./IEntity";
import {IList} from "./IList";

export class Repository<T> implements IList<IEntity>
{
    protected repository: Array<IEntity> = new Array<IEntity>();

    public GetAll(): Array<IEntity>
    {
        return this.repository;
    }

    public Add(item: IEntity): void
    {
        this.repository.push(item);
    }

    public Update(item: IEntity): void
    {
        this.Remove(item);
        this.Add(item);
    }

    public Remove(item: IEntity): void
    {
        for(let i = 0; i < this.repository.length; i++) {
            if (this.repository[i].compareUID(item.getUID())) {
                this.repository.splice(i, 1);
                return;
            }
        }
    }

    public Find(UID: string): IEntity|void
    {
        this.repository.forEach((item: IEntity) => {
            if (item.compareUID(UID))
                return item;

            return null;
        });
    }

    public Length(): number
    {
        return this.repository.length;
    }
}
