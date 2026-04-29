function playGame(){ 
    for(i = 1; i <= 5; i++){//repeats the code 5 times

function getRndInteger() {
  return Math.floor(Math.random() * (4 - 1) + 1);// returns integer from 1 to 3 both including. 
}

 const paper = "Paper";
 const rock = "Rock";
 const scissors = "Scissors";


function getHumanChoice(){
    let humanInput = prompt("Please enter your choice!");//gets human input rock, paper or scissors
    return humanInput
}





function getComputerChoice(){//gives random rock, paper or scissors, based on random number from fuction getRndInteger.
  let choice;
    if (getRndInteger() <= 1){
     //computerChoiceOne
     choice = rock
   }
   else if(getRndInteger()<= 2){
    //computerChoiceTwo
    choice = paper;
   }
   else if(getRndInteger() <= 3){
     //computerChoiceThree
     choice = scissors;
 }
   else{
    console.log("Error", getRndInteger())
    choice = "Error!"
 }
 return choice;
}






let humanChoice = getHumanChoice();//need to convert to case insensitive
let computerChoice = getComputerChoice();
let humanScore = 0
let computerScore = 0

let selectionInRound = "human choice:" + " " + humanChoice + " " + "Computer choice:" + " " + computerChoice;
console.log(selectionInRound)

function playRound(humanChoice, computerChoice){// function that takes the human and computer player choices as arguments,
                    //  plays a single round, increments the round winner’s score and logs a winner announcement.
 if (humanChoice === paper && computerChoice === rock){
    console.log("Human Wins!")
 }
 else if(humanChoice === paper && computerChoice === scissors ){
    console.log("Computer Wins!")
 }
  else if(humanChoice === paper && computerChoice === paper ){
    console.log("it`s a Tie!")
 }
  else if(humanChoice === rock && computerChoice === rock ){
    console.log("it`s a Tie!")
 }
 else if(humanChoice === rock && computerChoice === scissors ){
    console.log("Human Wins!")
 }
 else if(humanChoice === rock && computerChoice === paper ){
    console.log("Computer Wins!")
 }
 else if(humanChoice === scissors && computerChoice === scissors ){
    console.log("It`s a Tie!")
 }
 else if(humanChoice === scissors && computerChoice === rock ){
    console.log("Computer Wins!")
 }
 else if(humanChoice === scissors && computerChoice === paper ){
    console.log("Human Wins!")
 }
 
 else{console.log("lets play another")}

}
 
playRound(humanChoice, computerChoice)
  
 




        
        
}//end of playgame()
    

}
