$('.go').on('click', function(){
  $("#state").empty();
  $(".controls").show();
  var url = document.URL;
  url += ".json"
  console.log(url);
    $.ajax({
    url: url,
    dataType: "json",
    type: "GET",
    success: function( response ) {
      console.log( response[0] )
      showQuestion(response);
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
    console.log(question)
    console.log(answer)
    $("#state").append("<h2>"+ question +"</h2>");
    $("#state").append("<h3 id='hidden'>"+ answer +"</h3>");
}


$("#guess-btn").on('click', function(){
  var guess = $(".guess").val();
  var answer = $("#hidden").text();
  answer = answer.replace(/\s/g, '');
  answer = answer.replace(/\W/g, '')
  guess = guess.replace(/\s/g, '');
  guess = guess.replace(/\W/g, '')
  answer = answer.toLowerCase();
  guess = guess.toLowerCase();
  console.log(guess)
  console.log(answer)
  checkAnswer(guess, answer);
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
    console.log((weight * 100) + "%");
}





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
      showCustomQuestion(response, i);
    },
    error: function( response) {
      console.log("oh no")
    }
  })
})


// console.log(customArray)

// function showCustomQuestion( response , i){
//
//   else {
//     var question = response[i].question
//     var answer = response[i].answer
//     $("#custom-state").append("<h2>"+ question +"</h2>" + "<h3>" + answer + "</h3>");
//   }
//   i++
// }



// function showCustomQuestion(response) {
//   var customArray = [];
//   for (var i = 0; i < response.length; i++) {
//     var num = ((Math.random() * response.length));
//     num = Math.round(num);
//     if ( _.contains(customArray, num) ) {
//         console.log("sorry");
//     }
//     else {
//       return num
//     }
//   }
//   console.log(num)
//   customArray.push(num);
//   // customArray.push(num);
//   var question = response[num].question
//   var answer = response[num].answer
//   console.log(question)
//   console.log(answer)
//   $("#state").append("<h2>"+ question +"</h2>");
//   $("#state").append("<h3>"+ answer +"</h3>");
// }
