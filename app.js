//express. npm install express
var express = require('express');
var app = express();
var serv = require('http').Server(app);
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');  
});
app.use('/client', express.static(__dirname + '/client'));
serv.listen(2000);
console.log('Server started.')

//socket. npm install socket.io
var io = require('socket.io')(serv, {});
io.sockets.on('connection', function(socket){
    console.log('a user connected');

    socket.on('happy', function() {
        console.log('happy');
    });
  });