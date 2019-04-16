export class ValidatorHelper
{
    public static isString(data: any): boolean
    {
        return typeof data === "string";
    }

    public static isEmpty(data: any): boolean
    {
        data += "";

        if (
            data === "null" ||
            data === "undefined" ||
            data === "0" ||
            data === "false" ||
            data.length <= 0
        )
            return true;

        return false;
    }
}
