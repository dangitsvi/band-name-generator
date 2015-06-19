module.exports = function resRandomWord(wordType) {
  return function(req, res) {
    res.json(getRandomWord(wordType));
  }
}
