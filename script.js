// var titlePageH1 = document.createElement("h1");

// titlePageH1.textContent = "JavaScript Quiz";
// // titlePageH1.setAttribute(); // Revisit
// document.body.appendChild(titlePageH1);


// var titlePageP = document.createElement("p");

// titlePageP.textContent = "Press start to begin a timed JavaScript quiz. Best of Luck!";
// // titlePageP.setAttribute(); // Revisit
// document.body.appendChild(titlePageP);



var startButton = document.createElement("button")

startButton.textContent = "START"
// startButton.setAttribute();
document.body.appendChild(startButton);


startButton.addEventListener("click", begin)

function begin(){
    clockF();
    question1();
}


var timerEl = document.getElementById("countdown");


var clock = 50;
var clockStop;


function clockF() {
    
    intervalId = setInterval(function() {
        timerEl.textContent = "Time " + clock;
        clock--;

        if (clock === 0 || clockStop === 1){
            timerEl.textContent = "";
            clearInterval(intervalId);
            // EndCycle();
        }
    }, 1000)
    
}

function modifyClock(){
    clock = clock- 10;
    return clock;
   
}


var correctArray = [];
var incorrectArray = [];

function correct(){
    correctArray.push("Correct");
    var correctOrIncorrect = document.getElementById("correctOrIncorrect"); 
    correctOrIncorrect.textContent = "Correct"
}

function incorrect(){
    incorrectArray.push("inCorrect");
    var correctOrIncorrect = document.getElementById("correctOrIncorrect"); 
    correctOrIncorrect.textContent = "Incorrect"
    modifyClock();
    
}


function question1 () {
    var qPage1 = document.getElementById("questionHeading");
    qPage1.textContent = "Commonly used data types include all of the following except... ";
    

    var a1 = document.getElementById("1a")
    a1.textContent = "String"
    a1.addEventListener("click", moveI2)


    var a2 = document.getElementById("2a")
    a2.textContent = "Number"
    a2.addEventListener("click", moveI2)


    var a3 = document.getElementById("3a")
    a3.textContent = "Boolean"
    a3.addEventListener("click", moveI2)


    var a4 = document.getElementById("4a")
    a4.textContent = "Cheeseburger"
    a4.addEventListener("click", moveC2)

}

    
console.log(correctArray)
console.log(incorrectArray)

function moveI2(){
    incorrect();
    question2();
}

function moveC2(){
    correct();
    question2();
}

function question2 (){
    var qPage1 = document.getElementById("questionHeading");
    qPage1.textContent = "The following are all Conditionals except... ";
    

    var a1 = document.getElementById("1a")
    a1.textContent = "If"
    a1.addEventListener("click", incorrect)


    var a2 = document.getElementById("2a")
    a2.textContent = "If else"
    a2.addEventListener("click", incorrect)


    var a3 = document.getElementById("3a")
    a3.textContent = "else"
    a3.addEventListener("click", incorrect)


    var a4 = document.getElementById("4a")
    a4.textContent = "Double Cheeseburger"
    a4.addEventListener("click", correct)

}
