// create div/p html to house our timer
var element = document.getElementById("banner");
var div = document.createElement("div");
    element.appendChild(div);
var p = document.createElement("p");
    p.setAttribute('id','timer');
    div.appendChild(p);

const arrayScore = JSON.parse(localStorage.getItem("playerHighScores")) || [];




// create our timer function
var timerEl = document.querySelector("#timer");
var secondsLeft = 60;
function prepareQuiz() {
var prepcountdown = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft; 
    if(secondsLeft === 0) {
        clearInterval(prepcountdown);
        var del1 = document.getElementById("b1");
                del1.parentNode.removeChild(del1);
            var del2 = document.getElementById("b2");
                del2.parentNode.removeChild(del2);
            var del3 = document.getElementById("b3");
                del3.parentNode.removeChild(del3);
            var del4 = document.getElementById("b4");
                del4.parentNode.removeChild(del4);
            var div  = document.getElementById("button");
                div.setAttribute("class","form-group form-check");
                div.removeAttribute("id");
                div.removeAttribute("role");
                div.textContent = "";
            var input = document.createElement("input");
                input.setAttribute("class","form-control");
                input.setAttribute("id","initials");
                div.append(input);
            var submit = document.createElement("button");
                submit.setAttribute("type","submit");
                submit.setAttribute("class","btn btn-primary m-3");
                submit.setAttribute("id","submitbutton");
                submit.textContent = "Submit";
                div.append(submit);
            title.textContent = results.title;
            question.textContent = results.question;
        };
    }, 1000);
}

// Card layout
var title = document.querySelector(".display-5");
var question = document.querySelector(".lead");
// var answer0 = document.querySelector("#answer0");
// var answer1 = document.querySelector("#answer1");
// var answer2 = document.querySelector("#answer2");
// var answer3 = document.querySelector("#answer3");
// var answer4 = document.querySelector("#answer4");
// var button = document.querySelector("#button");
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var b3 = document.querySelector("#b3");
var b4 = document.querySelector("#b4");
// var choice = document.getElementById("buttons");
// choice.addEventListener("click", q2);
var ele = document.getElementById("button");
ele.addEventListener("click", qs);
var counter = 0;
var score = 0;
function increment() {
    if (counter === 1) {
        q2()
    }
    else if (counter === 2) {
        q3()
    }
    else if (counter === 3) {
        q4()
    }
    else if (counter === 4) {
        q5()
    }
    else if (counter === 5) {
        qs()
    }
};

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
question1.answer1 = 'An Array';
question1.answer2 = 'A Key';
question1.answer3 = 'A Property';
question1.answer4 = 'An Index';
question1.correct = 'A Property';

// Question2
var question2 = new Object();
question2.title = 'Question 2:';
question2.question = 'In the following code what is preset? preset.title = "Quiz Time!"';
question2.answer1 = 'An Object';
question2.answer2 = 'A Key';
question2.answer3 = 'A Property';
question2.answer4 = 'An Index';
question2.correct = 'An Object';

// Question3
var question3 = new Object();
question3.title = 'Question 3:';
question3.question = 'Which is the correct way to reference a class?';
question3.answer1 = '~';
question3.answer2 = '!';
question3.answer3 = '&';
question3.answer4 = '.';
question3.correct = '.';

// Question4
var question4 = new Object();
question4.title = 'Question 4:';
question4.question = 'Which is the correct way to reference an ID?';
question4.answer1 = '~';
question4.answer2 = '!';
question4.answer3 = '#';
question4.answer4 = '.id';
question4.correct = '#';

// Question5
var question5 = new Object();
question5.title = 'Question 5:';
question5.question = 'How do you use html code through JavaScript?';
question5.answer1 = '.inserthtml';
question5.answer2 = '.inlinehtml';
question5.answer3 = '.addhtml';
question5.answer4 = '.innerhtml';
question5.correct = ".innerhtml";

// Results
var results = new Object();
results.title = 'Please enter your initials to submit your score';

// Setting preset view
title.textContent = preset.title;
question.textContent = preset.question;
answer0.textContent = preset.answer0;
button.textContent = preset.button;

// leadboard
var leadboard = new Object();
leadboard.title = "Leaderboard";
leadboard.subtitle = "See below to see how you stack up!";

// functions we'll be calling depending on .onclicks and counter state
function qs() {
    prepareQuiz();
    if (counter < 5) {
            var del = document.getElementById("answer0");
                del.parentNode.removeChild(del);       
            title.textContent = question1.title;
            question.textContent = question1.question;
            b1.textContent = question1.answer1;
            b2.textContent = question1.answer2;
            b3.textContent = question1.answer3;
            b4.textContent = question1.answer4;
            button.setAttribute('class','');
            button.textContent = '';
            b1.setAttribute('class', 'btn btn-outline-primary');
            b2.setAttribute('class', 'btn btn-outline-primary');
            b3.setAttribute('class', 'btn btn-outline-primary');
            b4.setAttribute('class', 'btn btn-outline-primary');  
            b1.addEventListener("click", checkAnswer);
            b2.addEventListener("click", checkAnswer);
            b3.addEventListener("click", checkAnswer);
            b4.addEventListener("click", checkAnswer);
    }    
    else {
        console.log(score);
        var del1 = document.getElementById("b1");
            del1.parentNode.removeChild(del1);
        var del2 = document.getElementById("b2");
            del2.parentNode.removeChild(del2);
        var del3 = document.getElementById("b3");
            del3.parentNode.removeChild(del3);
        var del4 = document.getElementById("b4");
            del4.parentNode.removeChild(del4);
        var div  = document.getElementById("button");
            div.setAttribute("class","form-group form-check");
            div.removeAttribute("id");
            div.removeAttribute("role");
            div.textContent = "";
        var input = document.createElement("input");
            input.setAttribute("class","form-control");
            input.setAttribute("id","initials");
            div.append(input);
        var submit = document.createElement("button");
            submit.setAttribute("type","submit");
            submit.setAttribute("class","btn btn-primary m-3");
            submit.setAttribute("id","submitbutton");
            submit.textContent = "Submit";
            div.append(submit);
            submitbutton.addEventListener("click",endgame);
            var oldjumbo = document.getElementById("jumbo");
            

        title.textContent = results.title;
        question.textContent = results.question;
        

    }
}
// Answers
function checkAnswer(event) {
    console.log(score);
    var userSelection = event.target.textContent;
    console.log(userSelection);
    if (userSelection === question1.correct) {
        score++;
        counter++;
        increment();
    }
    else if (userSelection === question2.correct) {
                score++;
                counter++;
                increment();
    } else if (userSelection === question3.correct) {
                score++;
                counter++;
                increment();
    } else if (userSelection === question4.correct) {
                score++;
                counter++;
                increment();
    } else if (userSelection === question5.correct) {
                score++;
                counter++;
                increment();
    } else {
      counter++;
        secondsLeft -= 5;
        increment();
    };
}
function q2() {
    title.textContent = question2.title;
    question.textContent = question2.question;
    b1.textContent = question2.answer1;
    b2.textContent = question2.answer2;
    b3.textContent = question2.answer3;
    b4.textContent = question2.answer4;
}
function q3() {
    title.textContent = question3.title;
    question.textContent = question3.question;
    b1.textContent = question3.answer1;
    b2.textContent = question3.answer2;
    b3.textContent = question3.answer3;
    b4.textContent = question3.answer4;
}
function q4() {
    title.textContent = question4.title;
    question.textContent = question4.question;
    b1.textContent = question4.answer1;
    b2.textContent = question4.answer2;
    b3.textContent = question4.answer3;
    b4.textContent = question4.answer4;
}
function q5() {
    title.textContent = question5.title;
    question.textContent = question5.question;
    b1.textContent = question5.answer1;
    b2.textContent = question5.answer2;
    b3.textContent = question5.answer3;
    b4.textContent = question5.answer4;
}

// saving score to local storage
function endgame() {
    localStorage.setItem("playerHighScores",JSON.stringify(arrayScore))
    arrayScore.push("Score: " + score + " // Name: " + initials.value);

    submitbutton.addEventListener("click",toLead);

    function toLead() {
        title.textContent = leadboard.title;
        question.textContent = leadboard.subtitle;
        var maindiv = document.getElementsByClassName("form-group form-check");
        var list = document.createElement("ul");
            list.innerHTML = "";
        var input = document.getElementById("initials")
        input.parentNode.replaceChild(list,input);
        var submit = document.getElementById("submitbutton");
            submit.parentNode.removeChild(submit);
        

            var highscores = JSON.parse(localStorage.getItem("playerHighScores"));
            for (var i = 0; i < highscores.length; i++) {
            var highscore = highscores[i];

            var li = document.createElement("li");
            li.textContent = highscores[i];
            list.appendChild(li);

            };
        
    }




};
