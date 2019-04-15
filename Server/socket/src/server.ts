import * as express from "express";
import {User} from "./Entities/User";
import {UserList} from "./Entities/UserList";

const app = express();
app.set("port", process.env.PORT || 3001);

var http = require("http").Server(app);

app.get("/", (req: any, res: any) => {
    let user = new User();
    user.age = 29;
    user.name = "Maks";
    let userList: UserList = new UserList();
    let users: Array<User> = userList.AddUser(user);

    res.send("hello world 777 " + JSON.stringify(users));
});

const server = http.listen(3001, function() {
    console.log("listening on *:3001");
});
