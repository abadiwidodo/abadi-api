var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {res.send('200 OK');});

router.get('/hello', function(req, res, next) {
    res.send({
        count: 1,
        data:[{
            firstName:'Adi',
            lastName:'Widodo'
        }]
    });
});

module.exports = router;
