// setting up variables and consts
var containerEl = $(".container-lg");
var currentDayEl= $('#currentDay');

function displayTime() {

  var getDate = dayjs().format('dddd, MMM DD, [at] hh:mm:ss a');
  currentDayEl.text(getDate);
  setInterval(displayTime, 1000);
};

var currentHour =parseInt(dayjs().format("H"))
console.log(currentHour)
 
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(".saveBtn").on("click", function () {
  var textVal = $(this).siblings('.description').val()
  var keyText=$(this).parent().attr('id')
  localStorage.setItem(keyText, textVal)
})

// code to add the classes (and remove any that are on it as well)

$(".time-block").each(function () {
  console.log($(this))
  var timeBlock = parseInt($(this).attr('data-time'))
  console.log(timeBlock)
  if  (timeBlock < currentHour)  {
  $(this).addClass("past");
  // $(this).removeClass("present");
  // $(this).removeClass("future");
}  else if (timeBlock === currentHour)  {
  $(this).addClass("present");
  // $(this).removeClass("future");
  // $(this).removeClass("past");
}  else if (timeBlock > currentHour) {
  $(this).addClass("future");
  // $(this).removeClass("present");
  // $(this).removeClass("past");
  } 
})

// code below is to save the info a user inputs at each hour. runs from 9AM  - 5PM, set in military time

$("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
$("#hour-10").children(".description").val(localStorage.getItem("hour-10")); 
$("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
$("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
$("#hour-13").children(".description").val(localStorage.getItem("hour-13")); 
$("#hour-14").children(".description").val(localStorage.getItem("hour-14")); 
$("#hour-15").children(".description").val(localStorage.getItem("hour-14")); 
$("#hour-16").children(".description").val(localStorage.getItem("hour-16")); 
$("#hour-17").children(".description").val(localStorage.getItem("hour-17")); 

// listener for click event
containerEl.on("click", ".saveBtn", function(event) {
console.log(event.target).parent().children().eq();
})



    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  // });

  // setup to call function back

 