export class RandomHelper
{
    public static guid(): string
    {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substr(1);
        }
        return s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4();
    }
}
