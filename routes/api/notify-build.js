var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/notify-build', function(req, res, next) {
    res.json({ title: 'New Build' });
});

module.exports = router;
