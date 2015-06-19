module.exports = function postRandomWord(word, object) {
  //check if the word exists
  //if the word does exist then send a nice message back
  if (object.hasOwnProperty(word)) {
    return {msg: "We already have that word"};
  //if the word doesnt exist, add it as a property to that object
  //and send a message back thanking them fr their word
  }else{
    object[word] = true;
    return {msg: "Thanks for submitting your awesome word, " + word + "!"};
  }
}
