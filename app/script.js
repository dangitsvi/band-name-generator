'use strict';

$(function() {

  //flags for word lock feature
  var adjLocked = false;
  var verbLocked = false;
  var nounLocked = false;

  //jquery here
  //randomizer button
  $('#button').on('click', function() {
    if (!adjLocked) {
      $.get('/adjective', function(response) {
        var adjective = response.word;
        $('#adjective').text(adjective);
      });
    }

    if (!verbLocked) {
      $.get('/verb', function(response) {
        var verb = ' ' + response.word;
        $('#verb').text(verb);
      });
    }

    if (!nounLocked) {
      $.get('/noun', function(response) {
        var noun = ' ' + response.word;
        $('#noun').text(noun);
      });
    }
  });

  //lock words feature
  $('#lockWords').on('submit', function(e) {
    e.preventDefault();

    var adjective = $('input[name=lockAdj]').val();
    var verb = $('input[name=lockVerb]').val();
    var noun = $('input[name=lockNoun]').val();

    var adjPost;
    var verbPost;
    var nounPost;

    //this unlocks all words so that if a form is deleted, it will unlock that word
    adjLocked = false;
    verbLocked = false;
    nounLocked = false;

    if (adjective) {
      adjPost = {word: adjective};
      $.post('/locked-adj', adjPost, function(response) {
        var adjectiveRes = response.word;
        $('#adjective').text(adjectiveRes);
      });

      adjLocked = true;
    }

    if (verb) {
      verbPost = {word: verb};
      $.post('/locked-verb', verbPost, function(response) {
        var verbRes = response.word;
        $('#verb').text(verbRes);
      });

      verbLocked = true;
    }

    if (noun) {
      nounPost = {word: noun};
      $.post('/locked-noun', nounPost, function(response) {
        var nounRes = response.word;
        $('#noun').text(nounRes);
      });

      nounLocked = true;
    }
  });

  //manual unlock button
  $('#unlock').on('click', function(e) {
    e.preventDefault();

    adjLocked = false;
    verbLocked = false;
    nounLocked = false;
  });

  //submit words feature
  $('#submitWords').on('submit', function(e) {
    //prevents front page from reloading
    e.preventDefault();

    var adjective = $('input[name=adjective]').val();
    var verb = $('input[name=verb]').val();
    var noun = $('input[name=noun]').val();

    var adjPost;
    var verbPost;
    var nounPost;

    if (adjective) {
      adjPost = {word: adjective};
      $.post('adjective', adjPost, function(response) {
        var adjectiveRes = response.msg;
        $('#adjectiveRes').text(adjectiveRes);
      });
    }

    if (verb) {
      verbPost = {word: verb};
      $.post('verb', verbPost, function(response) {
        var verbRes = response.msg;
        $('#verbRes').text(verbRes);
      });
    }

    if (noun) {
      nounPost = {word: noun};
      $.post('noun', nounPost, function(response) {
        var nounRes = response.msg;
        $('#nounRes').text(nounRes);
      });
    }
  });
});
