var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

var enemies = [];
var playerSpawnPoints = [];
var clients = [];

app.get('/', function(req, res){
    res.send("working my response");
});
