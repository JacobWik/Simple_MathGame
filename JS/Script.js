const min = 1;
const max = 100; /* biggest and smallest number used in the question */

let int1 = 1; /* declaring variables used to hold the 2 numbers  */
let int2 = 1;
let chosenOperator = ""; /* variable for holding the chosen operator picked with radiobuttons */
let answer = 1; /* variable for holding the user answer */

const text = document.getElementById("RandomMath");
let question = document.createTextNode("question goes here");
text.appendChild(question);

const endgameNode = document.getElementById("endgameNode");
let victoryText = document.createTextNode("Congratulations, you got it right!");
let loserText = document.createTextNode("Sadly, you got it Wrong!");


//function that gets the current radio value and assigns it to the variable: chosenOperator
function getRadioValue() { 
    var ele = document.getElementsByName('operator'); 
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        chosenOperator = ele[i].value;
    }
}


function generateNewQuestion(){
    text.removeChild(question);
    getRadioValue();
    int1 = Math.floor((Math.random() * max) + min);
    int2 = Math.floor((Math.random() * max) + min);
    question = document.createTextNode(int1 + " " + chosenOperator + " " + int2);
    text.appendChild(question);
}

function submitAnswer(){
    endgameNode.removeChild(endgameNode.firstChild);
    getRadioValue();
    answer = document.getElementById("answer").value;
    if(chosenOperator == "+" && answer == (int1 + int2)){
        console.log("you win");
        endgameNode.appendChild(victoryText);
    }
    else if(chosenOperator == "-" && answer == (int1 - int2)){
        console.log("you win");
        endgameNode.appendChild(victoryText);
    }
    else if(chosenOperator == "*" && answer == (int1 * int2)){
        console.log("you win");
        endgameNode.appendChild(victoryText);
    }
    else{
        console.log("you lose");
        endgameNode.appendChild(loserText);
    }
}

generateNewQuestion();
console.log(int1 + int2);
