var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('question-container')
var score = 0;

var correctAnswer = "";

questionContainerEl.innerHTML = "Question: What coding language is best practice to style a webpage?"

// if (startButton === true) {
//   // Creates question within the container 
// var question = questionContainerEl.createElement();

// question.textContent = "Question: What coding language is best practice to style a webpage?"

// //Appends question as child of document body

// // document.body.children[1].children[0].appendChild(question);

// }

startButton.addEventListener('click', startGame)

// Function for starting the timer and showing the first question when the Start button is selected
function startGame() {
    setTime()
    Question()
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

//  Tests to see if correct answer was selected 

function checkAnswers() {

}


var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".btn")) {
    score++;

    // Use an if statement to conditionally render the number on the card
    if (state === "hidden") {
      // If the card is clicked while the state is "hidden", we set .textContent to the number 
      element.textContent = element.dataset.number;
      // Using the dataset property, we change the state to visible because the user can now see the number
      element.dataset.state = "visible";
   
    } else {
      // 'Hide' the number by setting .textContent to an empty string
      element.textContent= "";
      // Use .setAttribute() method
      element.setAttribute("data-state", "hidden")
     
    }  
  }
  
});