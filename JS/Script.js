const min = 1;
const max = 100;

let int1 = 1;
let int2 = 1;
let chosenOperator = "";
let answer = 1;

const text = document.getElementById("RandomMath");
let question = document.createTextNode("question goes here");
text.appendChild(question);

const endgameNode = document.getElementById("endgameNode");
let victoryText = document.createTextNode("Congratulations, you got it right!");
let loserText = document.createTextNode("Sadly, you got it Wrong!");



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