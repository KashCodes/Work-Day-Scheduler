$(document).ready(function () {
  // Current Day in Moment.js
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // Save button saves text on click in local storage
      // the function $(".saveBtn") {called by the class .saveBtn} converts the entire <textarea> to the the localStorage by an On Click. The onClick is saved as string in the localStorage.  The string is saved by both a key and a value.  The 'id' that is assigned to the <div> that the <textarea> is located in becomes the key called 'time'.   The Value is pulled from the '.description' class within the <textarea>. This also saves the value that was entered in the <textarea>, by the name 'text'. 
  $(".saveBtn").on("click", function () {
    console.log(this);
      // The parent saves the 'key' and the siblings save as the 'value' in localStorage located in the application section of chrome dev tools inspector. Moving forward we will reference these values by using '$(this)'
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  // Pulling each "saved" time block from local storage
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  // Function tracks the current hour
  function hourTracker() {
    //displays current hour using Moment.js format
    var currentHour = moment().hour();

    // Locates the class '.time-block' that is directly connected to the same <div> that also included the 'id' values that were saved in localStorage saveBtn function.  Then creating a new function through a '.each' loop. This will ultimate allow us to edit the CSS classes for the <div> sections referenced in localStorage.
    $(".time-block").each(function () {
      // Defining the variable 'blockHour' = 
          // Next 'parseInt' is designed to turn each loop into a integer. {It does this by taking each loop, converting it to a string, then parses that string and returns an integer.} - It references '$(this)' which is what is pulling from the localStorage.  - It then grabs each item in localStorage by the attribute '.attr' via the 'id' it was saved by. - Next it takes the 'id' and '.splits' the id by removing the word "hour" {which is referenced as a string}. So it leaves just the hour number within the id name. It needs to split the verbiage off otherwise the 'parseInt' would display 'NaN' information. It only splits one time w/ '[1]'  setting the limit of the split.
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);

      // logging the block hour # and current hour #. 
      console.log(blockHour, currentHour);

      // if loop for all timeblocks to ensure block is showing the correct coloring for past, present, future.
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourTracker();
});
