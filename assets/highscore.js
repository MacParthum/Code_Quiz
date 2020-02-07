var container = document.getElementById("container");
var highScores = JSON.parse(localStorage.getItem("highScore"))

if (highScores){


    highScores.sort(function (a,b){return b.score - a.score})
    for (var i=0; i < highScores.length; i++){
        var liEl = document.createElement ("li")
        liEl.style.marginLeft = "30px"
        container.appendChild(liEl);
        liEl.textContent = "Intials " + highScores[i].intials + " Score "+ highScores[i].score
    }


}

var clear = document.createElement("button");
container.appendChild(clear);
clear.textContent = "Clear Scores"
clear.style.marginLeft = "30px"
clear.addEventListener("click", function() {
    localStorage.clear();
})

var goBack = document.getElementById("go-back")
goBack.style.marginLeft = "26px"