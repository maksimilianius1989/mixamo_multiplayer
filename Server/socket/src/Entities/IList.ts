export interface IList<T>
{
    Add(item: T): void;

    Remove(item: T): void;

    Update(item: T): void;

    Find(UID: string): T|void;

    GetAll(): Array<T>;

    Length(): number;
}
