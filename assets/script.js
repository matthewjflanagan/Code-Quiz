var score = document.getElementById("score");
var points = 0;
var time = document.getElementById("time");
var secondsLeft = 60;
var currentQuestionIndex = 0;
var startBtn = document.getElementById("start-btn");
var saveBtn = document.getElementById("save-btn");
var quizBtn = document.getElementById("quiz-btn");
var scoresBtn = document.getElementById("scores-btn");
var mode = "go";
var quizCard = document.getElementById("quizCard");
var container = document.getElementById("container");
var answers = document.getElementById("answers");
var scoreEntry = document.getElementById("saveScore");
var viewScores = document.getElementById("viewScores");

// var options = [A, B, C, D];
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");

// questions
var quizArray = [
  {
    quizCard : "What coding language is best practice for styling an HTML document?",
    options : ["A: Javascript", "B: CSS", "C: C++", "D: HTML"],
    rightAnswer : "B: CSS"
  },
  {
    quizCard : "What third-party API assists with styling an HTML document?",
    options : ["A: Bootstrap", "B: jQuery", "C: Javascipt", "D: CSS"],
    rightAnswer : "A: Bootstrap"
  },
  {
    quizCard : "What command line argument makes a folder?",
    options : ["A: code .", "B: git add .", "C: mkdir", "D: touch"],
    rightAnswer : "C: mkdir"
  },
  {
    quizCard : "What command line argument makes a file?",
    options : ["A: code .", "B: git add .", "C: mkdir", "D: touch"],
    rightAnswer : "D: touch"
  },
  {
    quizCard : "What year was Javascript 1.0 debuted by Netscape?",
    options : ["A: 1973", "B: 1988", "C: 1995", "D: 2002"],
    rightAnswer : "C: 1995"
  },
  {
    quizCard : "What is the abbreviation DHTML that describes the combination of HTML, CSS, and Javascript?",
    options : ["A: Data HTML", "B: DOM HTML", "C: Document HTML", "D: Dynamic HTML"],
    rightAnswer : "D: Dynamic HTML"
  },
]

function setNextQuestion() {
  // Change text to first question
  quizCard.textContent = quizArray[currentQuestionIndex].quizCard

  // Change text to answer choices
  A.textContent = quizArray[currentQuestionIndex].options[0];
  B.textContent = quizArray[currentQuestionIndex].options[1];
  C.textContent = quizArray[currentQuestionIndex].options[2];
  D.textContent = quizArray[currentQuestionIndex].options[3];
}

// button pressed that starts the timer and displays the first question 
startBtn.addEventListener('click', function () {
  // Start time
  setTime();
  // If start button is pressed hide it
  if (mode === "go") {
    mode = "hide";
    startBtn.setAttribute("class", "hide");
    answers.removeAttribute("class", "hide");
  } 
  // If start button has not been pressed show it
  else {
    mode = "go"
  }
  setNextQuestion();
});

// shows the scores saved in local storage when clicked 
scoresBtn.addEventListener('click', function () {
  // If quiz button is pressed hide it
  if (mode === "go") {
    mode = "hide";
    // show highscores div
    viewScores.removeAttribute("class", "hide");
    // hide quiz div
    container.setAttribute("class", "hide");
    // hide score entry div 
    scoreEntry.setAttribute("class", "hide");
  } 
  // If start button has not been pressed show it
  else {
    mode = "go"
  }
});

// function for determining correct answer and response based on choices selected
function optionsButton (id) {
  // display answer choices based on question 
  var btnText =  document.getElementById(id).innerText

  // if answer is correct increase the score by 1, else lower the time by 10 seconds 
  if (btnText === quizArray[currentQuestionIndex].rightAnswer) {
    console.log('Correct!')
    // increment score by 1 point 
    points++;
    // display current score
    score.textContent = "Score: " + points;
  } else {
    console.log('wrong')
    // lower the time by 10 seconds 
    secondsLeft-=10;
  }
  // increment one object inside quiz array
  currentQuestionIndex++;
  // displays question and answer choices text content 
  if (currentQuestionIndex > 5) {
    
  } else {
    setNextQuestion()
  }
}


function showScore() {
  // Calls function to show score and option to enter intials into Highscores 
  container.setAttribute("class", "hide");
  scoreEntry.removeAttribute("class", "hide");
}

// renders the username and quiz grade from local storage into HighScores Div
function renderHighscores() {
  var initials = localStorage.getItem('userName')
  var score = localStorage.getItem('grade');
  document.getElementById('user-name').value = initials;
  document.getElementById('user-score').value = score;
  document.getElementById('user-name').textContent = initials;
  document.getElementById('user-score').textContent = score;
}

// sets the username and score to local storage and shows highscore when button is clicked 
saveBtn.addEventListener('click', function () {
  // set initials and score to local storage
  var userName = document.getElementById("userName").value;
  var score = document.getElementById("score").value;
  localStorage.setItem('userName', userName);
  localStorage.setItem('score', points);

  // display highscores when save button is clicked
  viewScores.removeAttribute("class", "hide");

  // hide data entry div when save button is clicked
  scoreEntry.setAttribute("class", "hide");

  // function for getting local storage and displaying username / score to highscores div
  renderHighscores();
});

// returns to the quiz when pressed in highscores div
quizBtn.addEventListener('click', function () {
  // If quiz button is pressed hide it
  if (mode === "go") {
    mode = "hide";
    // hides highscores div 
    viewScores.setAttribute("class", "hide");
    // displays questions div 
    container.removeAttribute("class", "hide");
  } 
  // If start button has not been pressed show it
  else {
    mode = "go"
  }
});

function setTime () {
    // Setting the interval of countdown in variable timerInterval
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft + " seconds left";
  
        if(secondsLeft <= 0) {
          // Stops execution of action at set interval 0
          clearInterval(timerInterval);
          // Calls function to show score and option to enter intials into Highscores 
          showScore();
        } else if (currentQuestionIndex > 5) {
          // Stops execution of action at set interval 0
          clearInterval(timerInterval);
          // Calls function to show score and option to enter intials into Highscores 
          showScore();
        }
      }, 1000);
  }