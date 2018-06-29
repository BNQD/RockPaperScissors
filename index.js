let computerMove = 1;
let playerMove = 2;

let computerScore = 0;
let playerScore = 0;



//Makes a random move for computer play
function computerPlay () {
  let moves = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  console.log(moves[randomNum]);
  return moves[randomNum];
}

//Updates the messageBox to display the corresponding outcome of single game
function updateMessage (result){
  let messageBox = document.getElementById('messageBoard');
  messageBox.innerHTML = ""; //Clear previous message
  let newP = document.createElement('p');
  switch (result){
    case "Tie!":
      newP.textContent = "It's a Tie!";
      break;
    case "Win!":
      newP.textContent = "You Win!";
      break;
    case "Lose!":
      newP.textContent = "You Lose!";
      break;
    default:
      newP.textContent = "ERROR";
      break;
  }
  messageBox.appendChild(newP);
}

function updateScore(result){
  let computerScoreDisplay = document.getElementById('computerScore');
  let playerScoreDisplay = document.getElementById('playerScore');
  switch (result){
    case "Win!":
      playerScoreDisplay.innerHTML = ++playerScore;
      break;
    case "Lose!":
      computerScoreDisplay.innerHTML = ++computerScore;
      break;
    default:
      newP.textContent = "ERROR";
      break;
  }
  
  if (computerScore == 5){
    alert("ComputerWins!");
    playerScoreDisplay.innerHTML = computerScoreDisplay.innerHTML = 0;
    playerScore = computerScore = 0;
  }
  else if (playerScore == 5){
    alert("PlayerWins!");
    playerScoreDisplay.innerHTML = computerScoreDisplay.innerHTML = 0;
    playerScore = computerScore = 0;
  }
}

//Plays a single round of Rock Paper Scissors with playerMove and ComputerMove as arguments
function singleRound (playerSelection, computerSelection){
  let roundResult = "";
  if (playerSelection == computerSelection){
    roundResult = "Tie!";
  }
  else if (playerSelection == "rock"){
    if (computerSelection == "scissors"){
      roundResult = "Win!";
    }
    else
      roundResult = "Lose!";
  }
  else if (playerSelection == "scissors"){
    if (computerSelection == "paper"){
      roundResult = "Win!";
    }
    else
      roundResult = "Lose!";
  }
  else{
    if (computerSelection == "rock"){
      roundResult = "Win!";
    }
    else
      roundResult = "Lose!";
  }
  updateMessage(roundResult);
  updateScore(roundResult);
}

function game(){
  let i;
  for (i = 0; i< 5; i++){
    playerMove = 'rock';
    singleRound(playerMove, computerPlay());
  }
}

let buttons = document.querySelectorAll('.move');
buttons.forEach(move => move.addEventListener ('click', function (){
  singleRound(this.id, computerPlay());
}));


