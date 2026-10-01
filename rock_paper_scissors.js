
// function roundRepetition(){
    
//     for(i = 1; i <= 5; i++){

const paperButton = document.querySelector("#paper")
const rockButton = document.querySelector("#rock")
const scissorsButton = document.querySelector("#scissors")
const humanChoiceClick = document.querySelector("#human-choice-click")
const buttonContainer = document.querySelector("#button-container")
const buttons = document.querySelectorAll("button")
const resultContainer = document.querySelector("#result-container")
const result = document.querySelector("#result")


const paper = "Paper";
const rock = "Rock";
const scissors = "Scissors";


 
buttonContainer.addEventListener('click', (event) => {
getHumanChoice()
playGame()
})


function getHumanChoice(){
  let humanChoice
let target = event.target;
      
    switch(target.id) {
        case 'scissors':
         humanChoice = scissors ;
            break;
        case 'rock':
            humanChoice =  rock;
            break;
        case 'paper':
            humanChoice =  paper;
            break;

    
    }
return humanChoice
}


function playGame(){

let humanChoice =  getHumanChoice()
 
function getRndInteger() {
  return Math.floor(Math.random() * (4 - 1) + 1);// returns integer from 1 to 3 both including. 
}


function getComputerChoice(){//gives random rock, paper or scissors, based on random number from fuction getRndInteger.
    let choice;
    if (getRndInteger() <= 1){
     choice = rock
   }
   else if(getRndInteger()<= 2){
    choice = paper;
   }
   else if(getRndInteger() <= 3){
     choice = scissors;
 }
   else{
    console.log("Error", getRndInteger())
    choice = "Error!"
 }
    return choice;
}

let computerChoice = getComputerChoice();


const human = "Human"
const computer = "Computer"

let humanScore = 0; 
let computerScore = 0;



let selectionInRound = "Human choice:" + " " + humanChoice  +  " " + "||| " + " " + "Computer choice:" + " " + computerChoice ;
//console.log(selectionInRound)
resultContainer.textContent = selectionInRound
resultContainer.setAttribute("style", "font-size: 40px")
result.setAttribute("style", "font-size: 40px")
   
function playRound(humanChoice, computerChoice){
 //  plays a single round, increments the round winner’s score and logs a winner announcement.
 
  let winner; 
 
 if (humanChoice === paper && computerChoice === rock
   || humanChoice === rock && computerChoice === scissors 
   || humanChoice === scissors && computerChoice === paper){
    winner = human;
    result.textContent = winner + " " + "wins!"
    

     }
 else if(humanChoice === paper && computerChoice === scissors ||
         humanChoice === rock && computerChoice === paper || 
         humanChoice === scissors && computerChoice === rock){
   winner = computer
     result.textContent = winner + " " + "wins!"
 }
  else if(humanChoice === paper && computerChoice === paper 
         || humanChoice === rock && computerChoice === rock 
         || humanChoice === scissors && computerChoice === scissors ){
    
     result.textContent = "it`s a Tie!"

 }
 else{console.log("Error! Please try again!")}
 
  return winner;
        
}






    
function roundWinner(){

let winnerOfRound = playRound(humanChoice, computerChoice);
return winnerOfRound

}//returns who won the round





  



let winner = roundWinner()
}



// function countHumaScore(){

// let addHumanScore;
// if (winner === human){
//     addHumanScore = humanScore++;
//     addHumanScore++
// }
// else {addHumanScore = humanScore} 
// return addHumanScore

// }
  
// let countHumaScoref = countHumaScore()
// console.log("Human score:" + " " + countHumaScoref)



// function countComputerScore(){
// let addComputerScore
// if (winner === computer){
//     addComputerScore = computerScore++;
//   addComputerScore++


// }
// else {addComputerScore = computerScore} 
// return addComputerScore
// }

// let countComputerScoref = countComputerScore()
// console.log("Computer score:" + " " + countComputerScoref)


// let round = 0
// console.log("Number of round:" + " " + round++)
//create round count so each round have dispayed that exmp. its round one.

// }
// }

  /// theScore + humanScore++ 









//roundRepetition()

