var time = document.getElementById("time");
var secondsLeft = 60;
var score = document.getElementById("score");
var points = 0;
var start = document.getElementById("start-btn");
var save = document.getElementById("save-btn");
var mode = "go";
var question = document.getElementById("question");
var container = document.getElementById("container");
var answers = document.getElementById("answers");
var highscoreDiv = document.getElementById("highscoresDiv");
var viewHighscores = document.getElementById("highscores");
var currentQuestionIndex = 0;
var UserHighscoresPage = document.getElementById("user-name");
var UserHighscoresPageScore = document.getElementById("user-name");

// var options = [A, B, C, D];
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");

var quizArray = [
  {
    question : "What coding language is best practice for styling an HTML document?",
    options : ["A: Javascript", "B: CSS", "C: C++", "D: HTML"],
    rightAnswer : "B: CSS"
  },
  {
    question : "What third-party API assists with styling an HTML document?",
    options : ["A: Bootstrap", "B: jQuery", "C: Javascipt", "D: CSS"],
    rightAnswer : "A: Bootstrap"
  },
  {
    question : "What command line argument makes a folder?",
    options : ["A: code .", "B: git add .", "C: mkdir", "D: touch"],
    rightAnswer : "C: mkdir"
  },
  {
    question : "What command line argument makes a file?",
    options : ["A: code .", "B: git add .", "C: mkdir", "D: touch"],
    rightAnswer : "D: touch"
  },
  {
    question : "What year was Javascript 1.0 debuted by Netscape?",
    options : ["A: 1973", "B: 1988", "C: 1995", "D: 2002"],
    rightAnswer : "C: 1995"
  },
  {
    question : "What is the abbreviation DHTML that describes the combination of HTML, CSS, and Javascript?",
    options : ["A: Data HTML", "B: DOM HTML", "C: Document HTML", "D: Dynamic HTML"],
    rightAnswer : "D: Dynamic HTML"
  },
]

function setNextQuestion() {
  // Change text to first question
  question.textContent = quizArray[currentQuestionIndex].question

  // Change text to answer choices
  console.log("inside the setNextQuestions")
  A.textContent = quizArray[currentQuestionIndex].options[0];
  B.textContent = quizArray[currentQuestionIndex].options[1];
  C.textContent = quizArray[currentQuestionIndex].options[2];
  D.textContent = quizArray[currentQuestionIndex].options[3];

  if(currentQuestionIndex > 5) {
    // Stops execution of action at set interval 0
    clearInterval(timerInterval);
    // Calls function to show score and option to enter intials into Highscores 
    showScore();
}
}

start.addEventListener('click', function () {
  // Start time
  setTime();
  // If start button is pressed hide it
  if (mode === "go") {
    mode = "hide";
    start.setAttribute("class", "hide");
    answers.removeAttribute("class", "hide");
    console.log("i am inside the container")
  } 
  // If start button has not been pressed show it
  else {
    mode = "go"
    console.log("inside if loop")
  }
  setNextQuestion();
});


function optionsButton (id) {

  var btnText =  document.getElementById(id).innerText

  if (btnText === quizArray[currentQuestionIndex].rightAnswer) {
    console.log('Correct!')
    // point go up
    points++;
    score.textContent = "Score: " + points;
  } else {
    console.log('wrong')
    //timer go down
    secondsLeft-=10;
  }
  //new question
  currentQuestionIndex++;
  setNextQuestion();
}

function showScore() {
  // Calls function to show score and option to enter intials into Highscores 
  container.setAttribute("class", "hide");
  viewHighscores.setAttribute("class", "hide");
  highscoreDiv.removeAttribute("class", "hide");
}

function renderHighscores() {
  var initials = localStorage.getItem('userName')
  var score = localStorage.getItem('grade');
  document.getElementById('user-name').value = initials;
  document.getElementById('user-score').value = score;
  document.getElementById('user-name').textContent = initials;
  document.getElementById('user-score').textContent = score;
}

save.addEventListener('click', function () {
  console.log('hit save button')
  var userName = document.getElementById("userName").value;
  var score = document.getElementById("score").value;
  localStorage.setItem('userName', userName);
  localStorage.setItem('grade', points);
  // save quiz grade with userName entry
  highscoreDiv.setAttribute("class", "hide");
  container.removeAttribute("class", "hide");
  viewHighscores.removeAttribute("class", "hide");
  renderHighscores();
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