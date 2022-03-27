function renderTable() {
    let highscores = JSON.parse(localStorage.getItem("highscores"))|| []
    var table = document.getElementById("myTable")
    highscores.forEach(function(user){
        table.insertAdjacentHTML('afterbegin', '<tr class="scores"><td>' + user.initials + ' - ' + user.score + '</td></tr>')
    })
    
}

function clearStorage() {
    localStorage.clear();
    window.location.reload();
}
renderTable();