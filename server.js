'use strict';

var express = require('express'),
    app = express();

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/views', express.static(__dirname + '/public/views'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen('5000', function() {
    console.log('Static was served by express.');
});