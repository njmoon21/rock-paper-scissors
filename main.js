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

function getHumanChoice(){
    const buttons = document.querySelectorAll('button');
    let humanChoice;

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            humanChoice = event.target.textContent;
            console.log("Player:", humanChoice);
            playRound(humanChoice, getComputerChoice());
        });
    });

}

function playRound(humanChoice, computerChoice){
    // Player chose scissors
    if(humanChoice === 'Scissors') {
        if (computerChoice === 'Scissors') {
            console.log(computerChoice)         
            console.log("Tie");
            rounds += 1;
        } 
        else if (computerChoice === 'Rock') {       
            console.log(computerChoice)        
            console.log("You lose...");
            computerScore += 1;
            rounds += 1;
        } 
        else if (computerChoice === 'Paper') {      
            console.log(computerChoice)           
            console.log("You win!");
            humanScore += 1;
            rounds += 1;
        }
    }

    // Player chose paper
    else if(humanChoice === 'Paper') {
        if (computerChoice === 'Paper') {    
            console.log(computerChoice)          
            console.log("Tie");
            rounds += 1;
        } else if (computerChoice === 'Scissors') {  
            console.log(computerChoice)           
            console.log("You lose...");
            computerScore += 1;
            rounds += 1;
        } else if (computerChoice === 'Rock') {   
            console.log(computerChoice)           
            console.log("You win!");
            humanScore += 1;
            rounds += 1;
        }
    }

    // Player chose rock
    else if(humanChoice === 'Rock') {
        if (computerChoice === 'Rock') {     
            console.log(computerChoice)        
            console.log("Tie");
            rounds += 1;
        } else if (computerChoice === 'Paper') {     
            console.log(computerChoice)  
            console.log("You lose...");
            computerScore += 1;
            rounds += 1;
        } else if (computerChoice === 'Scissors') {
            console.log(computerChoice)  
            console.log("You win!");
            humanScore += 1;
            rounds += 1;
        }
    }
}

function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if (humanScore == 5) {
        console.log("Congratulations!");
    } 
    if (computerScore == 5) {
        console.log("Better luck next time...");
    }
}

let rounds = 1;
let humanScore = 0;
let computerScore = 0;
playGame();

