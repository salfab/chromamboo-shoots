var socketio = require('socket.io')

    io = socketio.listen(app);

    io.on('connection', function (socket) {
        socket.on('my other event', function (data) {
            console.log(data);
        });
    });


    var express = require('express');
    var router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
        socket.emit('news', { hello: 'another world' });
    });

    module.exports = router;
    return io
}
