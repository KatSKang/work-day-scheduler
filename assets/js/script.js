

//shows current date and time in header
window.onload = todaysDate();
function todaysDate() {
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(currentDate);
    setInterval(todaysDate,1000);
}