'use strict';

//grabs the express object and assigns it to a variable. doing this will allow me to use the express object
var express = require('express');
var app = express();
//creates a door with the key. This means if there is no PORT environmental variable, then use 3000
var port = process.env.PORT || 3000;

//server will make app file available
app.use(express.static(__dirname + '/app/'));

var Adjective = function() {
  this.fancible = true;
  this.sharp = true;
  this.pedantic = true;
  this.salty = true;
  this.nice = true;
  this.sexy = true;
}

var Verb = function(){
  this.dancing = true;
  this.smashing = true;
  this.fighting = true;
  this.smouldering = true;
  this.crying = true;
  this.bleeding = true;
}

var Noun = function(){
  this.babies = true;
  this.unicorns = true;
  this.tigers = true;
  this.spartans = true;
  this.beards = true;
  this.cups = true;
}


var adjective = new Adjective;
var verb = new Verb;
var noun = new Noun;


//creating a method that grabs a random word from an object
function getRandomWord(object) {
  //capitol O object has methods to use on a object. this one gives us keys in the form of an array.
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  //in the form of an object because json will take an object and convert it into a string. Known as jsonifying
  return {word: randomProp};
}
//.send is a express method. this gets the / which represents  the home page ie: www.google.com/ this sends a RESponse
app.get('/', function(req, res){
  res.sendFile('index.html');
});

//start of band name generator app
app.get('/adjective', resRandomWord(adjective));
app.get('/verb', resRandomWord(verb));
app.get('/noun', resRandomWord(noun));
/*app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verb', )*/

function resRandomWord(wordType) {
  return function(req, res) {
    res.json(getRandomWord(wordType));
  }
}
//the express module has a listen function. this example takes in a port and a callback that does something with with port.
app.listen(port, function() {
  console.log('server available at http://localhost: ' + port);
});
