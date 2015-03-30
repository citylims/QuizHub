//trivia quiz clicker
$('.go').on('click', function(){
  $("#state").empty();
  $('.guess-btn').toggle();
  $('.go').hide();
  var url = document.URL;
  url += ".json"
    $.ajax({
    url: url,
    dataType: "json",
    type: "GET",
    success: function( response ) {
      var p = $(".percentage").text();
      if ( p === "100"){
        $('.go').text("Start Quiz");
        $('.go').toggle();
        $('.guess-btn').toggle();
        runner(0,0);
      }
      else {
        $('.go').text("Next Question");
        showQuestion(response);
      }
    },
    error: function( response ) {
      alert("OoH nOo!")
    }
  });
});

function showQuestion(response) {
  $('.guess').val("");
  var num = ((Math.random() * response.length));
  num = Math.round(num);
  var q = (response[num]["question"]);
  var a = (response[num]["answer"]);
  console.log(a);
  render(q, a);
};

$(".guess-btn").on('click', function(){
  var guess = $(".guess").val();
  var answer = $("#hidden").text();
  answer = answer.replace(/\W/g, '');
  guess = guess.replace(/\W/g, '');
  answer = answer.toLowerCase();
  guess = guess.toLowerCase();
  checkAnswer(guess, answer);
  $('.go').toggle();
  $('.custom-go').toggle();
  $(this).toggle();
  $('#hidden').fadeIn(1500);
});

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
  };
  var weight = equivalency / maxLength;
  weight = (weight * 100);
  if (weight > 60) {
    var url = document.URL;
    url += ".json"
      $.ajax({
      url: url,
      dataType: "json",
      type: "GET",
      success: function( response ) {
        var leng = response.length;
        if ( leng > 20) {
          leng = 20;
          meterScore(leng);
        }
        else {
          meterScore(leng);
        }
      }
    });
  };
};

var paths = document.getElementsByClassName('meter');
var path = paths[paths.length-1];

$(path).css({
  'stroke-dasharray': 500,
  'stroke-dashoffset': 0,
  'opacity': 1,
});

function runner(percentage, fill){
  setTimeout( function() {
    $('.percentage').text(percentage);
    $(path).css('stroke-dashoffset', fill);
  }, (Math.random() * 200));
};

var count = 0;
var filler = 0;

function meterScore(total) {
  var size = 377;
  console.log(total);
  if (count === total) {
    console.log("complete");
  }
  else {
    count++
    var percentage = Math.ceil(100*count/total);
    filler -= (size/total);
    runner(percentage, filler);
  }
};

function getLength() {
  var url = document.URL;
  url += ".json"
  $.ajax({
  url: url,
  dataType: "json",
  type: "GET",
  success: function( response ) {
    console.log(response.length)
    // return meterScore(response.length);
    }
  });
};

var foo = 0
$('.custom-go').on('click', function() {
  $("#state").empty();
  $('.guess-btn').toggle();
  $('.custom-go').hide();
  var url = document.URL;
  url += ".json"
  // console.log(url);
    $.ajax({
    url: url,
    dataType: "json",
    type: "GET",
    success: function( response ) {
      // console.log(response)
      var p = $(".percentage").text();
      if ( p === "100") {
        customToggle();
        runner(0,0);
      }
      else if ( response.length == 0) {
        alert("There are no questions in this quiz! Sorry");
      }
      else if (foo < response.length ) {
        $('.custom-go').text("Next Question");
        showCustomQuestion(response, foo);
        foo++
      }
      else {
        customToggle();
        runner("",0);
        foo = 0;
        return foo;
      }
    },
    error: function( response) {
      console.log("oh no");
    }
  });
});

function customToggle() {
  $('.custom-go').text("Start Quiz");
  $('.custom-go').toggle();
  $('.guess-btn').toggle();
}

function showCustomQuestion(response, foo) {
  $('.guess').val("");
  console.log(response[foo].answer);
  var q = response[foo].question;
  var a = response[foo].answer;
  render(q, a);
};

function render(question, answer) {
  $("#state").append("<h2>"+ question +"</h2>");
  $("#state").append("<h3 id='hidden'>"+ answer +"</h3>");
};
