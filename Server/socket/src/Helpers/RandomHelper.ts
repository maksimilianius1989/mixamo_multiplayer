import {IEntity} from "../Entities/IEntity";

export class RandomHelper
{
    public static guid(): string
    {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substr(1);
        }
        return s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4();
    }

    public static number(max: number, min: number = 0): number
    {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    public static guidForList(list: Array<IEntity>): string
    {
        let uid = this.guid();

        if (list.length) {
            for (let item of list) {
                if (item.compareUID(uid)) {
                    return this.guidForList(list);
                }
            }
        }

        return uid;
    }
}
