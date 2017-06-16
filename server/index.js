const WebSocket = require('ws'),
    server = new WebSocket.Server({
        port: 12345,
    });

function broadcast (data) {
    server.clients.forEach(ws => {
        ws.send(data);
    });
}

server.on('connection', ws => {
    ws.on('message', data => {
        broadcast(data);
    });
});
