var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

// Function for starting the timer and showing the first question when the Start button is selected
function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

// Function for deleting the previous questions and showing the next question when an answer is selected
function setNextQuestion() {

}

// Function for showing an answer is correct and adding points to total score
function selectAnswer () {

}

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

