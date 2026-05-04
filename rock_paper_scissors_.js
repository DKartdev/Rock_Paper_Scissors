
function roundRepetiotion(humanChoice, computerChoice){
    
    for(i = 1; i <= 5; i++){

function getHumanChoice(){

  let input = prompt("Please enter your choice!");//gets human input rock, paper or scissors
  let stringToLower = input.toLowerCase()
  let strLenght = input.length;
  let firstLetter = stringToLower.slice(0, 1);
  let firstLetterUper = firstLetter.toUpperCase();
  let restOfTheWord = stringToLower.slice(1, strLenght);
  let humanInput = firstLetterUper + restOfTheWord;
  return humanInput
}

let humanChoice = getHumanChoice();


 const paper = "Paper";
 const rock = "Rock";
 const scissors = "Scissors";


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


const human = "human"
const computer = "computer"

let humanScore = 0; 
let computerScore = 0;

// let theScore =  playGame()//gets the score for winner. this probably isnt working right becasue it returns 1 but doesnt say to hum, its like score eaquls both humanScore and computerScore
// console.log(theScore )




let selectionInRound = "Human choice:" + " " + humanChoice  +  " " + "||| " + " " + "Computer choice:" + " " + computerChoice ;
console.log(selectionInRound)


//// This far works well as intended




    ////start of the game 

   
function playRound(humanChoice, computerChoice){
 //  plays a single round, increments the round winner’s score and logs a winner announcement.
 
  let winner; 
 
 if (humanChoice === paper && computerChoice === rock){
    winner = human;

     }
 else if(humanChoice === paper && computerChoice === scissors ){
   winner = computer
    
 }
  else if(humanChoice === paper && computerChoice === paper ){
    console.log("it`s a Tie!")

 }
  else if(humanChoice === rock && computerChoice === rock ){
    console.log("it`s a Tie!")
 }
 else if(humanChoice === rock && computerChoice === scissors ){
   winner = human
  
 }
 else if(humanChoice === rock && computerChoice === paper ){
    winner = computer
   
 }
 else if(humanChoice === scissors && computerChoice === scissors ){
    console.log("It`s a Tie!")
 }
 else if(humanChoice === scissors && computerChoice === rock ){
   winner = computer
   
   }
 else if(humanChoice === scissors && computerChoice === paper ){
    winner = human
     
 }
 
 else{console.log("Error! Please try again!")}
 
  return winner;
        
}

    
  



    
function roundWinner(){

let winnerOfRound = playRound(humanChoice, computerChoice);
return winnerOfRound

}//returns who won the round





   
 



let winner = roundWinner()




function countHumaScore(){

let addHumanScore;
if (winner === human){
    addHumanScore = humanScore++;
    addHumanScore++
}
else {addHumanScore = humanScore} 
return addHumanScore

}
  
let countHumaScoref = countHumaScore()
console.log("Human score:" + " " + countHumaScoref)



function countComputerScore(){
let addComputerScore
if (winner === computer){
    addComputerScore = computerScore++;
  addComputerScore++


}
else {addComputerScore = computerScore} 
return addComputerScore
}

let countComputerScoref = countComputerScore()
console.log("Computer score:" + " " + countComputerScoref)


}
}

  /// theScore + humanScore++ 

//playGame() play the game 








roundRepetiotion()