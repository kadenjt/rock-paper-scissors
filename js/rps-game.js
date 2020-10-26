let userScoreDisplay = document.getElementById("userScore");
let compScoreDisplay = document.getElementById("compScore");
let roundsDisplay = document.getElementById("rounds");
let status = document.getElementById("status");

let uScore;
let cScore;
let rounds;
initGame(3);

function initGame(rnds) {
    uScore = 0;
    cScore = 0;
    rounds = rnds;
    roundsDisplay.textContent = "Best of "+rounds;
    userScoreDisplay.textContent = "User Score: "+uScore;
    compScoreDisplay.textContent = "Computer Score: "+cScore;
    status.textContent = "Make a move."
}

//Determine the result of a single round
function playRound(uChoice) {
    if (uScore < Math.ceil(rounds/2) && cScore < Math.ceil(rounds/2)) {
        const cChoice = compChoose();
        if (cChoice == uChoice) status.textContent = "Tie! You both selected "+uChoice+".";
        else if (uChoice == "rock" && cChoice == "scissors" || 
        uChoice == "paper" && cChoice == "rock" || 
        uChoice == "scissors" && cChoice == "paper") {
            status.textContent = "Round won! "+uChoice[0].toUpperCase()+uChoice.substring(1)+" beats "+cChoice+".";
            uScore +=1;
        } else {
            status.textContent = "Round lost! "+cChoice[0].toUpperCase()+cChoice.substring(1)+" beats "+uChoice+".";
            cScore +=1;
        }
    }
    updateScoreDisplay();
    checkForWinner();
}

function checkForWinner() {
    if(cScore >= Math.ceil(rounds/2)) {
        status.textContent = "You lost! Play again. Select number of rounds below."
        return;
    }
    if(uScore >= Math.ceil(rounds/2)) {
        status.textContent = "You won! Play again. Select number of rounds below."
        return;
    }
}

function compChoose() {
    let choices = ["rock", "paper", "scissors"];
    let compChoice = Math.floor((Math.random() * 3));
    return choices[compChoice];
}

function updateScoreDisplay() {
    userScoreDisplay.textContent = "User Score: "+uScore;
    compScoreDisplay.textContent = "Computer Score: "+cScore;
}

