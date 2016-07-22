var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var port = 3333;
if (process.env.NODE_ENV === 'production') {
 port = 8080;
}

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


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});