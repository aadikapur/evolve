//code from official socket.io docs
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

////Express
//Server: for a (GET, {}) request, return index.html
app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

//Server: listen for HTTP requests on port 3000
http.listen(2000, function(){
  console.log('listening on *:2000');
});

////SOCKET.IO
//Server: Send client time every second
var time = 0;
setInterval(function() {
    time++;
    io.sockets.emit('timer', time);
}, 1000);

//Server: a new client connected
io.on('connection', function(socket){
  console.log('a user connected');
  io.sockets.emit('timer', time);
});