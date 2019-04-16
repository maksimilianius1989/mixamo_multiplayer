import {ValidatorHelper} from "../Helpers/ValidatorHelper";
import {BaseRequestValidator} from "./BaseRequestValidator";

export class NewRoadInitRequest extends BaseRequestValidator
{
    public name: string;
    public countStartPoints: number;
    public startTime: number;

    public constructor(data: any)
    {
        super();
        this.name = data.name;
        this.countStartPoints = +data.countStartPoints;
        this.startTime = +data.startTime;
    }

    protected rules(): void
    {
        if (ValidatorHelper.isEmpty(this.name))
            this.errors.push("New road name is empty");

        if (ValidatorHelper.isEmpty(this.startTime))
            this.errors.push("New road start time is empty");

        if (ValidatorHelper.isEmpty(this.countStartPoints))
            this.errors.push("New road count start points is empty");
    }
}
