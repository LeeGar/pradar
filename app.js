var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var port = process.env.PORT || 5000;

var latLong = {};

app.use(express.static('map'));
app.use(bodyParser.json());

app.get('/current', function (req, res) {
  res.send(JSON.stringify(latLong));
});


app.post('/update', function (req, res) {
  console.log(req.body);
  latLong = req.body;
  res.send('Hello World!');
});


app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
