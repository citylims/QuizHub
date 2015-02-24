$(".add-question").on('click', function(){
  console.log("hello")
  var quest = $("#question_question").val();
  var ans = $("#question_answer").val();
  if ((quest == "") || (ans == "")) {
    $(".question-notice").append("<h5>Sorry you must input a question and answer")
  }
  else {
    $(".question-notice").append("<h5>You're Question has been created</h5>")
  }
})
