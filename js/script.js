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
        quizEnd();

    } else {
        questionEl.innterHTML = (questions[questionNum].title)
        selectAnsw1.innerHTML = (questions[questionNum].choices[01])
        selectAnsw2.innerHTML = (questions[questionNum].choices[02])
        selectAnsw3.innerHTML = (questions[questionNum].choices[03])
        selectAnsw4.innerHTML = (questions[questionNum].choices[04])
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
