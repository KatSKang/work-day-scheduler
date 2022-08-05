var timeBlocks = $('.container');
var hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"]

//shows current date and time in header
window.onload = todaysDate();
function todaysDate() {
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(currentDate);
    setInterval(todaysDate,1000);
}

//create row elements for every hour in array
hours.forEach((value, index) => {
    var newRow = $('<div>').attr('class', 'row')
    var hourEl = $('<div>').attr('class', 'hour col').text(value)
    var textEl = $('<textarea>').val(localStorage.getItem(value)) //will automatically set the textcontent if there is a value already saved in local storage
    var saveEl = $('<button>').attr('class', 'saveBtn col').text('SAVE') //couldn't figure out how to insert a save icon here...so used string instead

    if (index + 9 < moment().format('H')){ //used the index + 9 to return a numerical value equivalent to the 24 hour time 
        textEl.attr('class', 'description col-9 past')
    } else if (index + 9 == moment().format('H')){
        textEl.attr('class', 'description col-9 present')
    } else {
        textEl.attr('class', 'description col-9 future')
    }

    timeBlocks.append(newRow) //adds the new row div to the timeblock container
    newRow.append(hourEl,textEl,saveEl) //adds the new hour, textarea, save button under the row div
})

//saves the text for the task in local storage upon clicking save button
$(document).ready(function () {
    $('.saveBtn').on('click', function() {
        var memo = $(this).parent().children('.description').val();
        var hour = $(this).parent().children('.hour').text(); 

        localStorage.setItem(hour,memo);
        console.log("The memo is", memo);
        console.log("The hour is", hour);
    })
}) 
