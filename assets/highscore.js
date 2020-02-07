var container = document.getElementById("container");
var highScores = JSON.parse(localStorage.getItem("highScore"))

if (highScores){


    highScores.sort(function (a,b){return b.score - a.score})
    for (var i=0; i < highScores.length; i++){
        var liEl = document.createElement ("li")
        container.appendChild(liEl);
        liEl.textContent = highScores[i].intials + highScores[i].score


    }


}

var clear = document.createElement("button");
container.appendChild(clear);
clear.textContent = "Clear Scores"
clear.addEventListener("click", function() {
    localStorage.clear();
})