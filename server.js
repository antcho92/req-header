var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    //req.headers should have all the information needed for this project
    console.log(req.headers);
    res.json({
        'ip': req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        'language': req.headers['accept-language'].split(',')[0],
        //regex test for the first group wrapped in parentheses
        'OS': req.headers['user-agent'].match(/\((.*?)\)/)[1]
    });
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
});