var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var helpers = require('./helpers.js')
var Message = require('./messages/messageModel')

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

mongoose.connect('mongodb://localhost/codeChat'); 

Message.remove({}, function(err) {});

app.post('/message' , function(req, res) {
  Message.create({message: helpers.codify(req.body.message), createdAt: Date.now(), text: req.body.message}, function() {
    res.end();
  });
});

app.get('/message', function(req, res) {
  Message.find()
  .exec(function(err, message) {
    if (err) {console.error(err);}
    res.send(message);
  });
});

app.listen(8000);



// add sockets
// add ngrok
// add user accounts, sign in, multiple conversations, another view

