var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/notify-build', function(req, res, next) {
    var io = req.app.get('socketio');

    io.sockets.emit('news', { hello: 'another world' });

    res.json({ title: 'New Build' });
});

module.exports = router;
