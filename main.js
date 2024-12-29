// Global Variables
let rounds = 1;
let playerScore = 0;
let computerScore = 0;

// Functions
function getComputerChoice(){
    let randomNumber = Math.random();
    // Convert random number into string result (1/3 chance)
    if(randomNumber >= 0 && randomNumber < (1 / 3)){
        return "Rock";
    }
    else if(randomNumber >= (1 / 3) && randomNumber < (2 / 3)){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getPlayerChoice(){
    const buttons = document.querySelectorAll('button');
    let playerChoice;

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            playerChoice = event.target.textContent;
            playRound(playerChoice, getComputerChoice());
        });
    });

}

function playRound(playerChoice, computerChoice){
    const outcomes = {
        "Rock": {"Rock": "Tie", "Paper": "Computer Point", "Scissors": "Player Point"},
        "Paper": {"Rock": "Player Point", "Paper": "Tie", "Scissors": "Computer Point"},
        "Scissors": {"Rock": "Computer Point", "Paper": "Player Point", "Scissors": "Tie"}
    };
    const result = outcomes[playerChoice][computerChoice];


    let roundChoices = document.querySelector('.round-choices');
    if (!roundChoices){
        roundChoices = document.createElement('h3');
        roundChoices.className = 'round-choices';
        document.body.appendChild(roundChoices);
    }
    roundChoices.textContent = `Player Chose: ${playerChoice}  |  Computer Chose: ${computerChoice}`;

    let roundResult = document.querySelector('.round-result');
    if (!roundResult){
        roundResult = document.createElement('h3');
        roundResult.className = 'round-result';
        document.body.appendChild(roundResult);
    } 
    roundResult.textContent = result;

    if (result === "Player Point"){
        playerScore += 1;
    }
    else if (result === "Computer Point"){
        computerScore += 1;
    }
    rounds += 1;

    if(playerScore === 5){
        const winnerMessage = document.createElement('h2');
        winnerMessage.className = 'winner';
        winnerMessage.textContent = "Congratulations!";
        document.body.appendChild(winnerMessage);
        
        const playAgainButton = document.createElement('button');
        playAgainButton.className = 'play-again';
        playAgainButton.textContent = "Play Again";
        document.body.appendChild(playAgainButton);
        
        resetGame();
    }
    if(computerScore === 5){
        const winnerMessage = document.createElement('h2');
        winnerMessage.className = 'winner';
        winnerMessage.textContent = "Better luck next time!";
        document.body.appendChild(winnerMessage);
        
        const playAgainButton = document.createElement('button');
        playAgainButton.className = 'play-again';
        playAgainButton.textContent = "Play Again";
        document.body.appendChild(playAgainButton);

        resetGame();
    }

    updateScores();
}

function updateScores(){
    document.querySelector('.rounds').textContent = `Round ${rounds}`;
    document.querySelector('.player-score').textContent = `Player: ${playerScore}`;
    document.querySelector('.computer-score').textContent = `Computer: ${computerScore}`;
}

function resetGame(){
    const playAgainButton = document.querySelector('.play-again');
    playAgainButton.addEventListener('click', () => {;
        playerScore = 0;
        computerScore = 0;
        rounds = 1;
        updateScores();

        document.querySelector('.winner').remove();
        playAgainButton.remove();
        document.querySelector('.round-choices').remove();
        document.querySelector('.round-result').remove();
    });
}

function playGame(){
    const playerSelection = getPlayerChoice();
}

playGame();

