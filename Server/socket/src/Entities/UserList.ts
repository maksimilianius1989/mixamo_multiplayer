import {User} from "./User";

export class UserList
{
    public users: Array<User> = new Array<User>();

    public AddUser(user: User): Array<User>
    {
        this.users.push(user);

        return this.users;
    }
}
