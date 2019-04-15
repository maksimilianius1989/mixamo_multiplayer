"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserList {
    constructor() {
        this.users = new Array();
    }
    AddUser(user) {
        this.users.push(user);
        return this.users;
    }
}
exports.UserList = UserList;
//# sourceMappingURL=UserList.js.map