var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var helpers = require('./helpers.js')
var Message = require('./messages/messageModel')

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

mongoose.connect('mongodb://localhost/codeChat'); // connect to mongo database named shortly

app.post('/message' , function(req, res) {

  Message.create({message: helpers.codify(req.body.message), createdAt: Date.now()}).save(function(err) {
    if (err) {console.error(err);}
  });
  // req.body.message = helpers.codify(req.body.message);
  // res.send(req.body);
});

app.listen(8000);


/* Walkthrough of the server

  Express, mongoose, and our server are initialzed here
  Next, we then inject our server and express into our config/middleware.js file for setup.
    We also exported our server for easy testing

  middleware.js requires all express middleware and sets it up
  our authentication is set up there as well
  we also create individual routers for are two main features, links and users
  each feature has its own folder with a model, controller, and route file
    the respective file is required in middleware.js and injected with its mini router
    that route file then requires the respective controller and sets up all the routes
    that controller then requires the respective model and sets up all our endpoints which respond to requests

*/
