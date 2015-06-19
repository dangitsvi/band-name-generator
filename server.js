'use strict';

//grabs the express object and assigns it to a variable. doing this will allow me to use the express object
var express = require('express');
var bodyparser = require("body-parser");

var Adjective = require("./lib/adjective.js");
var Verb = require("./lib/verb.js");
var Noun = require("./lib/noun.js");
var getRandomWord = require("./lib/getRandomWord.js");
var postRandomWord = require("./lib/postRandomWord.js");
//var resRandomWord = require("./lib/resRandomWord.js");

var app = express();
//creates a door with the key. This means if there is no PORT environmental variable, then use 3000
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

//server will make app file available
app.use(express.static(__dirname + '/app/'));

var adjective = new Adjective;
var verb = new Verb;
var noun = new Noun;


//.send is a express method. this gets the / which represents  the home page ie: www.google.com/ this sends a RESponse
app.get('/', function(req, res){
  res.sendFile('index.html');
});

//Get routes
app.get('/adjective', resRandomWord(adjective));
app.get('/verb', resRandomWord(verb));
app.get('/noun', resRandomWord(noun));

//post routes
//post routes are seperate from get routes, thats why you can use the same route name
app.post('/adjective', function(req, res) {
  var word = postRandomWord(req.body.word, adjective);
  res.json(word);
});


function resRandomWord(wordType) {
  return function(req, res) {
    res.json(getRandomWord(wordType));
  }
}

//the express module has a listen function. this example takes in a port and a callback that does something with with port.
app.listen(port, function() {
  console.log('server available at http://localhost: ' + port);
});
