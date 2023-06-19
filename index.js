// first i will want the computer to give its answer

console.log(22+25)
console.log("You can do this")

 const answers =["rock", "paper", "scissors"];

 function getComputerChoice(){
    const choice = answers[Math.floor(Math.random()* answers.length)];
   
    return choice;
 }

 function checkwinner(){
    if(playerSelection == computerSelection){
        return"tie";
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") || 
            (playerSelection == "paper" && computerSelection == "rock") || 
            (playerSelection == "scissors" && computerSelection == "paper")){
        return "player"
    }
    else {
        return "computer";
    }
 }

 function playRound(playerSelection, computerSelection){
    const result = checkwinner(playerSelection, computerSelection);
    if(result == "tie"){
        return "its a tie"
    }
    else if(result == "player"){
        return `you have won! ${playerSelection}beats ${computerSelection}`

    }
    else{
        return `you lost! ${computerSelection} beats ${playerSelection}`
    
    }
 }

function getPlayerChoice{
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (answers.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}


//  function game(){
//     console.log("welcome!")
//     for (let i=0; i<5; i++) {
//         const playerSelection = "rock";
//         const  computerSelection= getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
//  }
//   game();


 