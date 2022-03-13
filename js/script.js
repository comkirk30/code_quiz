var counter = document.getElementById("counter")
var counter = questionEl = document.getElementById("question")
var counter = selectAns1 = document.getElementById("answer_1")
var counter = selectAns2 = document.getElementById("answer_2")
var counter = selectAns3 = document.getElementById("answer_3")
var counter = selectAns4 = document.getElementById("answer_4")
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
