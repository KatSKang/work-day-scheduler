var timeBlocks = $('.container');
var hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"]

//shows current date and time in header
window.onload = todaysDate();
function todaysDate() {
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(currentDate);
    setInterval(todaysDate,1000);
}

//create row elements for the hours
hours.forEach((value, index) => {
    var newRow = $('<div>').attr('class', 'row')
    var hourEl = $('<div>').attr('class', 'hour col').text(value)
    var textEl = $('<textarea>').val(localStorage.getItem(value))
    var saveEl = $('<button>').attr('class', 'saveBtn col').text('SAVE')

    if (index + 9 < moment().format('H')){
        textEl.attr('class', 'description col-9 past')
    } else if (index + 9 == moment().format('H')){
        textEl.attr('class', 'description col-9 present')
    } else {
        textEl.attr('class', 'description col-9 future')
    }

    timeBlocks.append(newRow)
    newRow.append(hourEl,textEl,saveEl)
})

//saves the text for the task in local storage
$(document).ready(function () {
    $('.saveBtn').on('click', function() {
        var memo = $(this).parent().children('.description').val();
        var hour = $(this).parent().children('.hour').text();

        localStorage.setItem(hour,memo);
        console.log("The memo is", memo);
        console.log("The hour is", hour);
    })
}) 
