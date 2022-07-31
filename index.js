var express = require('express');
var app = express();
var path = require('path');
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.sendFile('public/index.html', {
        root: path.join(__dirname, './')
    })
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});