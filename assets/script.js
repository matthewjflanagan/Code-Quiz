var time = document.getElementById("time");
var secondsLeft = 120;
var score = document.getElementById("score");
var points = 0;
var start = document.getElementById("start-btn");
var mode = "go";
var question = document.getElementById("question");
var container = document.getElementById("container");
var answers = document.getElementById("answers");
var options = [A, B, C, D];
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");

question.textContent = "Click Start to begin the quiz!";

// Listen for a click event on button
start.addEventListener('click', function () {
  // Start time
  setTime();
  // If start button is pressed hide it
  if (mode === "go") {
    mode = "hide";
    start.setAttribute("class", "hide");
  } 
  // If start button has not been pressed show it
  else {
    mode = "go"
  }

  // Change text to first question
  question.textContent = "What coding language is best practice for styling a webpage";

  // Change text to answer choices
  A.textContent = "A: Javascript";
  B.textContent = "B: CSS";
  C.textContent = "C: C++";
  D.textContent = "D: HTML";

  if ('click' === A || B || C || D) {
    points++;
    score.textContent = "Score: " + points;
  }
});

function setTime () {
    // Setting the interval of countdown in variable timerInterval
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft + " seconds left";
  
        if(secondsLeft === 0) {
            // Stops execution of action at set interval 0
            clearInterval(timerInterval);
              // Calls function to show score and option to enter intials into Highscores 
            showScore();
        }
      }, 1000);
  }