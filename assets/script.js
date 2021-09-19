// Selecting the h1 element with the class .time
var timeEl = document.querySelector(".time");

// Creating variable of secondsLeft with a starting value of 120 seconds
var secondsLeft = 120;

function setTime () {
    // Setting the interval of countdown in variable timerInterval
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";

        if(secondsLeft === 0) {
            // Stops execution of action at set interval 0
            clearInterval(timerInterval);
            // Calls function to show score and option to enter intials into Highscores 
            showScore();
        }
    }, 1000);
}

// Function to show score and option to enter intials into Highscores 
function showScore() {

}

setTime();