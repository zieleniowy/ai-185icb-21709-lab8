const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

const id = ()=>`${new Date()*1}${Math.floor(Math.random()*9999)}`.slice(-8);

const rooms = new Set(['ogólny']);
const nicks = new Set([]);


io.on('connection', (socket) => {
    socket.nick = `user-${id()}`;
    nicks.add(socket.nick);

    socket.emit('rooms', Array.from(rooms));
    socket.emit('nick', socket.nick);

    socket.join([...rooms][0])
    socket.on('message', content=>{
        const room = Array.from(socket.rooms).find(name=>name!==socket.id);
        io.to(room).emit('message', { date: new Date()*1, content, sender: socket.nick })
    })
    socket.on('changeRoom', name=>{
        if(!rooms.has(name)) return;
        socket.rooms.forEach(room=>{
             if(room === socket.id) return;
             socket.leave(room);
        })
        socket.join(name);
    })
    socket.on('changeNick', (newNick)=>{
        if(!nicks.has(newNick))
        {
            nicks.delete(socket.nick);
            socket.nick = newNick;
            nicks.add(newNick);
            socket.emit('nick', socket.nick);

        }
    })
    socket.on('createRoom', (name)=>{
        rooms.add(name);
        io.emit('rooms', Array.from(rooms));
    });

    socket.on('removeRoom', (name)=>{
        if(rooms.size > 1){
            rooms.delete(name);
            io.emit('rooms', Array.from(rooms));
        }
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});