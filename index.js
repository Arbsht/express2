var express = require('express');
var app = express(); 
const songs = require('./songs.json');
app.set('view engine', 'pug');
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.render('index', {
        songs: songs.songs
    });

});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});