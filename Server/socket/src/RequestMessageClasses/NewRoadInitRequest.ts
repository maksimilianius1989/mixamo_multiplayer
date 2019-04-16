import {Vector3} from "../Entities/Navigations/Vector3";
import {ValidatorHelper} from "../Helpers/ValidatorHelper";
import {BaseRequestValidator} from "./BaseRequestValidator";

export class NewRoadInitRequest extends BaseRequestValidator
{
    public name: string;
    public startPoints: Array<Vector3>;
    public startTime: number;

    public constructor(data: any)
    {
        super();
        this.name = data.name;
        this.startPoints = data.startPoints;
        this.startTime = data.startTime;
    }

    protected rules(): void
    {
        if (ValidatorHelper.isEmpty(this.name))
            this.errors.push("New road name is empty");

        if (ValidatorHelper.isEmpty(this.startTime))
            this.errors.push("New road start time is empty");

        if (this.startPoints.length <= 0)
            this.errors.push("New road start points is empty");
    }
}
