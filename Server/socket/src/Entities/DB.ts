export class DB
{
    private static instance: DB;

    private constructor() {}

    public static init(): DB
    {
        if (this.instance === null)
            this.instance = new DB();

        return this.instance;
    }
}
