/**
 * Created by AllenFeng on 2017/7/27.
 */
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server,{path :'/test'});

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/client.html');
});

var admin=io.of('/admin');

admin.on('connection',(socket)=>{
    console.log('a user connected')

    socket.on('send message',(message)=>{
        admin.emit('chat message',message);
    })
})

server.listen(3000);


