$(".add-question").on('click', function(){
  console.log("hello")
  var quest = $("#question_question").val();
  var ans = $("#question_answer").val();
  if ((quest == "") || (ans == "")) {
    $(".question-notice").append("<h5>Sorry you must input a question and answer</h5>")
  }
  else {
    $(".question-notice").append("<h5>You're Question has been created</h5>")
    $(".display-container").append("<p><b>Question:</b> " + quest + "</p><p><b>Answer:</b> " + ans + "</p>")
  }
})

$(".edit-question").on('click', function(){
  console.log("hello")
  var quest = $("#question_question").val();
  var ans = $("#question_answer").val();
  if ((quest == "") || (ans == "")) {
    $(".question-notice").append("<h5>Input can't be blank</h5>")
  }
  else {
    $(".question-notice").append("<h5>You're Question has been created</h5>")
    $(".display-container").append("<p><b>Question:</b> " + quest + "</p><p><b>Answer:</b> " + ans + "</p>")
  }
})
