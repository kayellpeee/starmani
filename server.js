var express = require('express');
var app = express();

var port = process.env.PORT || 4000;


app.use(express.static(__dirname + '/public'));

app.get('/star', function(req, res){

  console.log('a repo was starred !');
  res.redirect('/');

});

app.listen(port);
console.log('listening on port ', port);
