var counter = document.getElementById("counter")
var questionEl = document.getElementById("question")
var selectAnsw1 = document.getElementById("answer_1")
var selectAnsw2 = document.getElementById("answer_2")
var selectAnsw3 = document.getElementById("answer_3")
var selectAnsw4 = document.getElementById("answer_4")
var outcomeEl = document.getElementById("grade")
var questionNum = 0
var timeRemain = 0
var quizCounter = 0
var score = 0

var goButton = document.getElementById("start-btn");
goButton.addEventListener("click",beginQuiz);
 

// if(title.innerHTML === "Top Score") {
//     renderTable();
// }


//function startQuiz() {
   
   //  beginQuiz();
 //}


function counterEl() {
    counter.innerHTML = timeRemain
    quizCounter = setInterval(count, 1000);
}


function count() {
    if (timeRemain !== 0) {
        timeRemain--
        counter.innerHTML = (timeRemain)
    } else {
        clearInterval(quizCounter)
        quizOver();
    }
    return;
}

function beginQuiz() {
    document.querySelectorAll(".main").forEach(main => {main.style.display = "none" })
    document.querySelectorAll(".quiz").forEach(quiz => {quiz.style.display = "initial"})
    timeRemain = 50
    counterEl();
    quiz(questionNum);
} 



function quiz(questionNum) {
    if (questionNum >= questions.length) {
        quizOver();

    } else {
        questionEl.innerHTML = (questions[questionNum].title)
        selectAnsw1.innerHTML = (questions[questionNum].choices[0])
        selectAnsw2.innerHTML = (questions[questionNum].choices[1])
        selectAnsw3.innerHTML = (questions[questionNum].choices[2])
        selectAnsw4.innerHTML = (questions[questionNum].choices[3])
    }
}

function checkAnswer(btnId) {
    if ((document.getElementById(btnId).innerHTML) === (questions[questionNum].answer)) {
        rightAnswer();
        questionNum++
    } else {
        wrongAnswer();
        questionNum++
    }
    quiz(questionNum)
}

function rightAnswer() {
    score = timeRemain
    outcomeEl.innerHTML = ("Yes, correct!");
    setTimeout(function() {
        outcomeEl.innerHTML = "";
    },500)
}

function wrongAnswer() {
    timeRemain = (timeRemain - 10)
    outcomeEl.innerHTML = ("No, this is incorrect.");
    setTimeout(function() {
        outcomeEl.innerHTML = "";
    },500)
}

function quizOver() {
    document.querySelectorAll(".quiz").forEach(quiz => { quiz.style.display = "none" })
    var content = document.getElementById('theContent')
    var submitEl = document.getElementById("submit")



    content.insertAdjacentHTML('afterbegin', '<h1 id="done">Complete!</h1> <button id="submit" class="btn btn-option">Submit</button> <input id="userInitials"> - Please Enter Your Initials</input>');



    var done = document.getElementById("done")
    done.insertAdjacentHTML('afterend', '<p id="finalScore">The final score on your quiz is ' + score + '</p>')

    var submitEl = document.getElementById("submit")    
    submitEl.addEventListener("click", function(){
      var initials = document.getElementById('userInitials').value;
        submitScore(initials)
      
     
    });

    clearInterval(quizCounter)

}

      
function submitScore(initials) {
    let highscores = JSON.parse(localStorage.getItem("highscores"))|| []
        let newScore = {
            score: score, 
            initials: initials
        }
        highscores.push(newScore)
        localStorage.setItem("highscores", JSON.stringify(highscores))
        window.location.href = "highscore.html"
      }  



