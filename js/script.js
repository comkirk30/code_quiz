var counter = document.getElementById("counter")
var counter = questionEl = document.getElementById("question")
var counter = selectAnsw1 = document.getElementById("answer_1")
var counter = selectAnsw2 = document.getElementById("answer_2")
var counter = selectAnsw3 = document.getElementById("answer_3")
var counter = selectAnsw4 = document.getElementById("answer_4")
var outcomeEl = document.getElementById("grade")
var title = document.getElementById("title")
var questionNum = 0
var timeRemain = 0
var quizCounter = 0
var score = 0

if(title.innerHTML === "Top Score") {
    renderTable();
}

function counterEl() {
    counter.innerHTML = (timeRemain)
    quizTimer = setInterval(count, 1000);
}

function count() {
    if (timeRemain !== 0) {
        timeRemain--
        counter.innerHTML = (timeRemain)
    } else {
        clearInterval(quizTimer)
        quizOver();
    }
    return;
}

function startQuizEl() {
    document.querySelectorAll(".main").forEach(main => { main.style.display = "none" })
    document.querySelectorAll(".quiz").forEach(quiz => {quiz.style.display = "initial"})
    quiz(questionNum);
} 

function quiz() {
    if (questionNum >= questions.length) {
        quizOver();

    } else {
        questionEl.innterHTML = (questions[questionNum].title)
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
    setTimeout(function() {outcomeEl.innerHTML = ("");
    },500)
}

function wrongAnswer() {
    timeRemain = (timeRemain - 15)
    outcomeEl.innerHTML = ("No, this is incorrect.");
    setTimeout(function() {outcomeEl.innerHTML = ("");
    },500)
}

function quizEnd() {
    document.querySelectorAll(".quiz").forEach(quiz => { quiz.style.display = "none" })
    var content = document.getElementById('theContent')
    var submitEl = document.getElementById("submit")

    counter.innerHTML = (0)

    content.insertAdjacentHTML('afterbegin', '<h1 id="done">Complete!</h1> <button id="submit" class="btn btn-option">Submit</button> <input id="userScore"> - Please Enter Your Initials</input>');



    var done = document.getElementById("done")
    done.insertAdjacentHTML('afterend', '<p id="finalScore">The final score on your quiz is ' + score + '</p>')

    var submitEl = document.getElementById("submit")    
    submitEl.addEventListener("click", function(){
        var value = document.getElementById('userScore').value;
        localStorage.setItem(value, score)
        window.location.href = "highscores.html"
    });

    clearInterval(quizTimer)

}

        
function renderTable() {
    var table = document.getElementById("myTable")
    for (let i = 0; i < localStorage.length; i++) {
       var userName = localStorage.key(i)
       var userScore = localStorage.getItem(userName)
        table.insertAdjacentHTML('afterbegin', '<tr class="scores"><td>' + userName + ' - ' + userScore + '</td></tr>')
   }
}


function clearStorage() {
    localStorage.clear();
    window.location.reload();
}