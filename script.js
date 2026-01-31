let choice = ["rock", "paper", "scissors"];
let option = 3;

function getComputerChoice(choice){
    let pick = Math.floor(Math.random()*option);
    return choice[pick];
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    let computerChoice = getComputerChoice(choice);
    let userChoice = String(prompt("Pick a sign: "));
    userChoice = userChoice.toLowerCase();
    if (computerChoice == userChoice){
        console.log("It's a tie.");
    }
    else{
        if ((userChoice=='rock'&&computerChoice=="scissors")||(userChoice=='paper'&&computerChoice=='rock')||(userChoice=='scissors'&&computerChoice=='paper')){
            console.log("your win~!");
            humanScore +=1;
        }
        else{
            console.log("My win~!");
            computerScore+=1;
        }
    }
}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    for (let i=0;i<5;i++){
        playRound();
    }
    if (computerScore==humanScore){
        alert("it's a draw!~");
    }
    else{
        (computerScore>humanScore)? alert("computers won~!"):alert("Humanity won~!");
    }
}

playGame();