"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const User_1 = require("./Entities/User");
const UserList_1 = require("./Entities/UserList");
const app = express();
app.set("port", process.env.PORT || 3001);
var http = require("http").Server(app);
app.get("/", (req, res) => {
    let user = new User_1.User();
    user.age = 29;
    user.name = "Maks";
    let userList = new UserList_1.UserList();
    let users = userList.AddUser(user);
    res.send("hello world 777 " + JSON.stringify(users));
});
const server = http.listen(3001, function () {
    console.log("listening on *:3001");
});
//# sourceMappingURL=server.js.map