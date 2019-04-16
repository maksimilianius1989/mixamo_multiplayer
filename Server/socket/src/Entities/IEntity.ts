export interface IEntity
{
     getUID(): string
     setUID(UID: string): void
     compareUID(UID: string): boolean
}
