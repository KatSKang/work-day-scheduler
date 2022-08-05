var timeBlocks = document.querySelector('.container');

//shows current date and time in header
window.onload = todaysDate();
function todaysDate() {
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(currentDate);
    setInterval(todaysDate,1000);
}

//variable for hours and task associated
var myDay = [
    {
        hour: "9 AM",
        time: 9
    },
    {
        hour: "10AM",
        time: 10
    },
    {
        hour: "11 AM",
        time: 11,
    },
    {
        hour: "12 PM",
        time: 12
    },
    {
        hour: "1 PM",
        time: 13
    },
    {
        hour: "2 PM",
        time: 14
    },
    {
        hour: "3 PM",
        time: 15
    },
    {
        hour: "4 PM",
        time: 16
    },
    {
        hour: "5 PM",
        time: 17
    },
    {
        hour: "6 PM",
        time: 18
    }
]

//create row elements for the hours
function makeMyDay() {
    for (var i = 0; i < myDay.length; i++) {
        var newRow = document.createElement('div');
        var hourEl = document.createElement('div');
        var taskEl = document.createElement('textarea');
        var saveEl = document.createElement('button');
        newRow.classList.add('row');
        hourEl.classList.add('hour', 'col')
        taskEl.classList.add('description', 'col-8');
        saveEl.classList.add('saveBtn', 'col');
        hourEl.textContent = myDay[i].hour;
        saveEl.textContent = "save";
        timeBlocks.append(newRow);
        newRow.append(hourEl,taskEl,saveEl);


        //use the current hour to set attribute class as past,present, or future
        if (myDay[i].time < moment().format('H')) {
            taskEl.classList.add('past');
        } else if (myDay[i].time == moment().format('H')) {
            taskEl.classList.add('present');
        } else {
            taskEl.classList.add('future');
        }
    }
}

makeMyDay();

//saves the text for the task in local storage
$(document).ready(function () {
    $('.saveBtn').on('click', function() {
        var memo = $(this).parent().children('.description').val();
        var hour = $(this).parent().children('.hour').text();

        localStorage.setItem(hour,memo);
        console.log("value is ", memo);
        console.log("hour is", hour);
    })
}) 


//TODO:
//local storage: getItem