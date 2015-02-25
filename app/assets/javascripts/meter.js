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
var total = 13;
var count = 0;
var filler = 0;


var question = $("#side_one").val()
var answer = $("#side_two").val();


$("#side_one").on("click", function() {
  if (count === total) {
    console.log("complete");
  }
  else {
    count++
    var percentage = Math.ceil(100*count/total);
    console.log(percentage);
    filler -= (size/total)
    console.log(filler);
    runner(percentage, filler);
    console.log(count);
  }
})
