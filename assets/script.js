var time = document.getElementById("time");
var secondsLeft = 120;
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
    question : "What coding language is best practice for styling a webpage",
    options : ["A: Javascript", "B: CSS", "C: C++", "D: HTML"],
    rightAnswer : "B: CSS"
  },
  {
    question : "dsfsadefcsadf",
    options : ["A: Javascript", "B: CSS", "C: C++", "D: HTML"],
    rightAnswer : "C: C++"
  },
  {
    question : "jsndfkj;asndkljASNDKLASNKLDMAS",
    options : ["A: Javascript", "B: CSS", "C: C++", "D: HTML"],
    rightAnswer : "D: HTML"
  }
]

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
  question.textContent = quizArray[0].question


  // Change text to answer choices
  // find way to not hard code 
  // put in variable allow to increment
  A.textContent = quizArray[0].options[0];
  B.textContent = quizArray[0].options[1];
  C.textContent = quizArray[0].options[2];
  D.textContent = quizArray[0].options[3];

  if ('click' === A || B || C || D) {
    points++;
    score.textContent = "Score: " + points;
  }
});

// A.addEventListener('click', optionsButton("A"))
// B.addEventListener('click', optionsButton("B"))
// C.addEventListener('click', optionsButton("C"))
// D.addEventListener('click', optionsButton("D"))


function optionsButton (id) {


  // if(document.getElementById(id) != null){
    console.log('Success!',)
    console.log('this', this)
  // }

  var btnText =  document.getElementById(id).innerText


  if (btnText === quizArray[0].rightAnswer) {
    console.log('Correct!')
    //point go up
    // new question 
  } else {
    console.log('wrong')
    //timer go down
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