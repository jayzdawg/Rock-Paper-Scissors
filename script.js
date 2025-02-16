
let roundResult;
let compScore = 0;
let playerScore = 0;
let humanSelection;
let computerSelection;

console.log('Type "playGame();" to start.');

//Main game code. Play a round, record the score and continue for 5 rounds before determining the winner.
function playGame(){

    for(let i = 0; i < 5; i++){

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log("Player Score: ", playerScore);
    console.log("Robot Score: ", compScore);
    }    

    if (playerScore > compScore){
        console.log("You are the winner!");
    } else if (compScore > playerScore){
        console.log("You suck. Try again!");
    } else {
        alert("It's a tie! I guess you both suck at this game");
    }

    playerScore = 0;
    compScore = 0;
        
    console.log('Type "playGame(); to play again."');
}

//This function randomly chooses a weapon for the computer
function getComputerChoice(){
    const randNum = Math.floor(Math.random()*3)+1;
    let compResult;

    if (randNum == 1){
        compResult = "rock";
    } else if (randNum == 2){
        compResult = "paper";
    } else {
        compResult = "scissors"
    }

    return compResult;
}

//This function prompts a weapon from the player and returns it in lowercase
function getHumanChoice(){

   let playerInput = prompt("Choose your weapon (Rock, Paper or Scissors)", ' ');

   return playerInput.toLowerCase();

}


//This function has the logic for one round of rock paper scissors.
function playRound(humanChoice, computerChoice){
  



    if ((humanSelection == "rock" && computerSelection == "scissors") || (humanSelection == "paper" && computerSelection == "rock") || (humanSelection == "scissors" && computerSelection == "paper")){
        roundResult = "win";
        alert("You won the round!");
        playerScore ++;
    } else if (humanSelection === computerSelection){
        roundResult = "draw";
        alert("It's a draw!");
    } else if ((humanSelection != "rock") && (humanSelection != "paper") && (humanSelection != "scissors")){
        roundResult = "invalid";
        alert("What nonesense you trying bruh?");
    } else {
        roundResult = "loss";
        alert("You lost the round :(");
        compScore ++;
    }

    return roundResult;

}


    
    


  

    



