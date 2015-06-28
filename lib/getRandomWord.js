'use strict';

//creating a method that grabs a random word from an object
module.exports = function getRandomWord(object) {

  //capitol O object has methods to use on a object. this one gives us keys in the form of an array.
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];

  //in the form of an object because json will take an object and convert it into a string. Known as jsonifying
  return {word: randomProp};
};
