export abstract class BaseRequestValidator
{
    protected errors: Array<string> = new Array<string>();

    public validate(): boolean
    {
        this.rules();

        if (this.errors.length)
            return false;

        return true;
    }

    public getErrors(): Array<string>
    {
        return this.errors;
    }

    public getErrorsMessage(): string
    {
        return this.errors.toString();
    }

    protected abstract rules(): void;
}
