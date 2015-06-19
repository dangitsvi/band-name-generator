/*var stringArr = ['Always borrow money from a pessimist. He won\'t expect it back. -Oscar Wilde', 'Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings. - ROBERT BLOCH', 'Dogs have masters. Cats have staff. - ANONYMOUS', 'Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad. -MILES KINGTON', 'Patience is something you admire in the driver behind you, but not in one ahead. - BILL MCGLASHEN' ];

$(function() {

//jquery here
  $("#button").on("click", function(){
      var msg = randString(stringArr);
      $("#string").text(msg);
  });

});


function randString (stringArr) {
  var length = stringArr.length;
  var randNum = Math.floor(Math.random() * length);
  return stringArr[randNum];
}
*/

$(function() {

//jquery here
  $("#button").on("click", function() {
    $.get("http://localhost:3000/adjective", function(response){
      var adjective = response.word;
      $("#adjective").text(adjective);
    });
    $.get("http://localhost:3000/verb", function(response){
      var verb = " " + response.word;
      $("#verb").text(verb);
    });
    $.get("http://localhost:3000/noun", function(response){
      var noun = " " + response.word;
      $("#noun").text(noun);
    });
  });

  $("#submitWords").on('submit', function(e){
    //prevents front page from reloading
    e.preventDefault();

    var adjective = $("input[name=adjective]").val();
    //this ifstatement checks to see if adjective is thruthy ie: is there a word in adjective
    var adjPost;

    if (adjective) {
      adjPost = {word: adjective};
      $.post("adjective", adjPost, function(response){
        var adjectiveRes = response.msg;
        $("#adjectiveRes").text(adjectiveRes);
      });
    }
  });


});
