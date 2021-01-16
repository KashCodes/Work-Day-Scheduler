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


});
