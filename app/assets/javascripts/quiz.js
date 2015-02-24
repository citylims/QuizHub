$('.go').on('click', function(){
  $("#state").empty();
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
    $("#state").append("<h3>"+ answer +"</h3>");
}
