$(".add-question").on('click', function(){
  var quest = $("#question_question").val();
  var ans = $("#question_answer").val();
  if ((quest == "") || (ans == "")) {
    $(".question-notice").append("<h5>Sorry you must input a question and answer</h5>")
  }
  else {
    $(".question-notice").append("<h3>You're Question has been created</h3>")
  }
})

$(".edit-question").on('click', function(){
  var quest = $("#question_question").val();
  var ans = $("#question_answer").val();
  if ((quest == "") || (ans == "")) {
    $(".question-notice").append("<h5>Input can't be blank</h5>")
  }
  else {
    $(".question-notice").append("<h5>You're Question has been edited</h5>")
    $(".display-container").append("<h5>Question " + quest + "</h5><h5>Answer " + ans + "</h5>")
  }
})
