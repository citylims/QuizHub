//trivia quiz clicker
$('.go').on('click', function(){
  $("#state").empty();
  $('.guess-btn').toggle();
  $('.go').hide();
  var url = document.URL;
  url += ".json"
  console.log(url);
    $.ajax({
    url: url,
    dataType: "json",
    type: "GET",
    success: function( response ) {
      // console.log( response[0] )
      var p = $(".percentage").text()
      if ( p === "100"){
        $('.go').text("Start Quiz");
        $('.go').toggle();
        $('.guess-btn').toggle();
        runner(0,0);
      }
      else {
        $('.go').text("Next Question")
        showQuestion(response);

      }
    },
    error: function( response) {
      console.log("oh no")
    }
  })
})



function showQuestion(response) {
  var num = ((Math.random() * response.length));
  num = Math.round(num);
  var question = (response[num]["question"])
  var answer = (response[num]["answer"])
  // console.log(question)
  console.log(answer)
  $("#state").append("<h2>"+ question +"</h2>");
  $("#state").append("<h3 id='hidden'>"+ answer +"</h3>");
}




$(".guess-btn").on('click', function(){
  var guess = $(".guess").val();
  var answer = $("#hidden").text();
  answer = answer.replace(/\s/g, '');
  answer = answer.replace(/\W/g, '')
  guess = guess.replace(/\s/g, '');
  guess = guess.replace(/\W/g, '')
  answer = answer.toLowerCase();
  guess = guess.toLowerCase();
  // console.log(guess)
  // console.log(answer)
  checkAnswer(guess, answer);
  $('.go').toggle();
  $(this).toggle();
  $('#hidden').show();
})

function checkAnswer(a,b) {
  var lengthA = a.length;
  var lengthB = b.length;
  var equivalency = 0;
  var minLength = (a.length > b.length) ? b.length : a.length;
  var maxLength = (a.length < b.length) ? b.length : a.length;
  for(var i = 0; i < minLength; i++) {
      if(a[i] == b[i]) {
          equivalency++;
      }
  }
  var weight = equivalency / maxLength;
  // console.log((weight * 100) + "%");
  weight = (weight * 100)
  if (weight > 80) {
      meterScore();
  }
}


var paths = document.getElementsByClassName('meter');
var path = paths[paths.length-1];

$(path).css({
  'stroke-dasharray': 500,
  'stroke-dashoffset': 0,
  'opacity': 1,
})

function runner(percentage, fill){
  setTimeout( function() {
    $('.percentage').text(percentage)
    $(path).css('stroke-dashoffset', fill);
  }, (Math.random() * 200));
}

var size = 377;
var count = 0;
var filler = 0;

function meterScore(){
  var total = 2
  if (count === total) {
    console.log("complete");
  }
  else {
    count++
    var percentage = Math.ceil(100*count/total);
    // console.log(percentage);
    filler -= (size/total)
    // console.log(filler);
    runner(percentage, filler);
    console.log(count);
  }
}


var foo = 0
console.log(foo)
$('.custom-go').on('click', function(){
  $("#state").empty();
  var url = document.URL;
  url += ".json"
  // console.log(url);
    $.ajax({
    url: url,
    dataType: "json",
    type: "GET",
    success: function( response ) {
      console.log(response)
      if ( response.length == 0){
        alert("There are no questions in this quiz! Sorry")
      }
      else if (foo < response.length ) {
        showCustomQuestion(response, foo);
      foo++
      console.log(foo);
      }
      else {
        foo = 0
        return foo
      }
    },
    error: function( response) {
      console.log("oh no")
    }
  })
})

function showCustomQuestion(response, foo) {
  console.log(foo)
  console.log(response[foo].question);
  console.log(response[foo].answer);
  var q = response[foo].question;
  var a = response[foo].answer;
  render(q, a)

}

function render(question, answer) {
  $("#custom-state").append("<h2>"+ question +"</h2>");
  $("#custom-state").append("<h3>"+ answer +"</h3>");
}
