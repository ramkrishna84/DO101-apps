var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello world from express!\n');
});

app.get('/mars', function(req, res) {
  res.send('Hello from Mars!\n')
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

