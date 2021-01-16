$(document).ready(function () {
  // Current Day in Moment.js
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // Save button saves text on click in local storage
  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  // Pulling all time blocks from local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1p .description").val(localStorage.getItem("hour-1p"));
  $("#hour-2p .description").val(localStorage.getItem("hour-2p"));
  $("#hour-3p .description").val(localStorage.getItem("hour-3p"));
  $("#hour-4p .description").val(localStorage.getItem("hour-4p"));
  $("#hour-5p .description").val(localStorage.getItem("hour-5p"));

  // Tracks the current hour if past, present, future.
  function hourTracker() {
    //displays current hour in Moment.js format
    var currentHour = moment().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour, currentHour);

      // if loop for all timeblocks to ensure block is showing the correct coloring
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  hourTracker();
});
