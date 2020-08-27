
// create div/p html to house our timer
var element = document.getElementById("banner");
var div = document.createElement("div");
    element.appendChild(div);

var p = document.createElement("p");
    p.setAttribute('id','timer');
    div.appendChild(p);

// create our timer function

var timerEl = document.querySelector("#timer");
var secondsLeft = 6000;

function prepareQuiz() {
var prepcountdown = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft; 

    if(secondsLeft === 0) {
        clearInterval(prepcountdown);
        
        }
    }, 1000);
}

prepareQuiz();

// Card layout
var title = document.querySelector(".display-5");
var question = document.querySelector(".lead");
var answer0 = document.querySelector("#answer0");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var button = document.querySelector("#button");
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var b3 = document.querySelector("#b3");
var b4 = document.querySelector("#b4");

// preset

var preset = new Object();
preset.title = 'Quiz Time!';
preset.question = 'Press begin to start your quiz!';
preset.answer0 = 'Tip: You have 60 seconds to complete the quiz. Choose wisely as a wrong choice will reduce your time further!';
preset.button = 'Start!';




// Question1

var question1 = new Object();
question1.title = 'Question 1:';
question1.question = 'In the following code what is .title? preset.title = "Quiz Time!"';
question1.answer1 = 'An Element';
question1.answer2 = 'A Key';
question1.answer3 = 'A Property';
question1.answer4 = 'An Index';
question1.correct = question1.answer3;


// Setting preset view

title.textContent = preset.title;
question.textContent = preset.question;
answer0.textContent = preset.answer0;
button.textContent = preset.button;

// Clear previous

function q1() {
    
    var del = document.getElementById("answer0");
        del.parentNode.removeChild(del);       


    title.textContent = question1.title;
    question.textContent = question1.question;
    answer1.textContent = question1.answer1;
    answer2.textContent = question1.answer2;
    answer3.textContent = question1.answer3;
    answer4.textContent = question1.answer4;
    button.setAttribute('class','');
    button.textContent = '';

    b1.setAttribute('class', 'btn btn-outline-primary');
    b2.setAttribute('class', 'btn btn-outline-primary');
    b3.setAttribute('class', 'btn btn-outline-primary');
    b4.setAttribute('class', 'btn btn-outline-primary');
    
    
}


// Go event listener

var ele = document.getElementById("button");
ele.addEventListener("click", q1);

// answer choice event listner

var choice = document.getElementsByClassName("btn btn-outline-primary");
choice.addEventListener("click", q2);

