var time = document.getElementById("time");
var secondsLeft = 60;
var score = document.getElementById("score");
var points = 0;
var start = document.getElementById("start-btn");
var mode = "go";
var question = document.getElementById("question");
var container = document.getElementById("container");
var answers = document.getElementById("answers");
// var options = [A, B, C, D];
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");

question.textContent = "Click Start to begin the quiz!";

// Listen for a click event on button

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
    question : "What command line argument makes a folder?",
    options : ["A: code .", "B: git add .", "C: mkdir", "D: touch"],
    rightAnswer : "C: mkdir"
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

start.addEventListener('click', function () {
  // Start time
  setTime();
  // If start button is pressed hide it
  if (mode === "go") {
    mode = "hide";
    start.setAttribute("class", "hide");
    answers.removeAttribute("class", "hide");

  } 
  // If start button has not been pressed show it
  else {
    mode = "go"
  }

  // Change text to first question
  question.textContent = quizArray[0].question

  // Change text to answer choices
  // find way to not hard code 
  // put in variable allow to increment
  A.textContent = quizArray[0].options[0];
  B.textContent = quizArray[0].options[1];
  C.textContent = quizArray[0].options[2];
  D.textContent = quizArray[0].options[3];
});


function optionsButton (id) {

  var btnText =  document.getElementById(id).innerText

  if (btnText === quizArray[0].rightAnswer) {
    console.log('Correct!')
    // point go up
    points++;
    score.textContent = "Score: " + points;
    // new question 
  } else {
    console.log('wrong')
    //timer go down
    secondsLeft-=10;
    //new question
  }

  //
}



function setTime () {
    // Setting the interval of countdown in variable timerInterval
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft + " seconds left";
  
        if(secondsLeft === 0) {
            // Stops execution of action at set interval 0
            clearInterval(timerInterval);
              // Calls function to show score and option to enter intials into Highscores 
            // showScore();
        }
      }, 1000);
  }