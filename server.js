var express = require('express');
var app = express();

var port = process.env.PORT || 4000;


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){

  console.log('a repo was starred !');
  var audio = document.getElementByTagName('audio')[0];
  audio.play();
  res.end();


});

app.listen(port);
console.log('listening on port ', port);
