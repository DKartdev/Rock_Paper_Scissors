
const paperButton = document.querySelector("#paper")
const rockButton = document.querySelector("#rock")
const scissorsButton = document.querySelector("#scissors")
const humanChoiceClick = document.querySelector("#human-choice-click")
const buttonContainer = document.querySelector("#button-container")
const buttons = document.querySelectorAll("button")
const resultContainer = document.querySelector("#result-container")
const result = document.querySelector("#result")
const countOfRounds = document.querySelector("#count-of-rounds")
const humanScoreCount = document.querySelector("#human-score")
const computerScoreCount = document.querySelector("#computer-score")



let roundNumber = 1;

let humanScore = 0; 
let computerScore = 0;


function numberOfRound(){


countOfRounds.setAttribute("style", "font-size: 40px")
return countOfRounds.textContent = "Number of round:" + " " + roundNumber++
}

const paper = "Paper";
const rock = "Rock";
const scissors = "Scissors";


 
buttonContainer.addEventListener('click', (event) => {
 getHumanChoice()
playGame()
  numberOfRound()

 
repetition()

})


function numberOfRound(){

countOfRounds.setAttribute("style", "font-size: 40px")
return countOfRounds.textContent = "Number of round:" + " " + roundNumber++
} 


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




          let selectionInRound = "Human choice:" + " " + humanChoice  +  " " + "||| " + " " + "Computer choice:" + " " + computerChoice ;

          resultContainer.textContent = selectionInRound
          resultContainer.setAttribute("style", "font-size: 40px")
          result.setAttribute("style", "font-size: 40px")



                function playRound(humanChoice, computerChoice){
                  let winner; 
            
                       
                
                    if (humanChoice === paper && computerChoice === rock ||
                        humanChoice === rock && computerChoice === scissors ||
                        humanChoice === scissors && computerChoice === paper){
                        winner = human;
                        humanScore++
                        result.textContent = winner + " " + "wins!"  
                      
                      }
                else if(humanChoice === paper && computerChoice === scissors ||
                        humanChoice === rock && computerChoice === paper || 
                        humanChoice === scissors && computerChoice === rock){
                        winner = computer
                                     
                        computerScore++
                        result.textContent = winner + " " + "wins!" 


                }
                  else if(humanChoice === paper && computerChoice === paper ||
                          humanChoice === rock && computerChoice === rock ||
                          humanChoice === scissors && computerChoice === scissors ){
                 
                          result.textContent = "it`s a Tie!"

                }
                else{console.log("Error! Please try again!")}
                
                 computerScoreCount.textContent = "Computer score :" + computerScore
                 humanScoreCount.textContent = "Human score :" +  humanScore
                  return winner;
                        
                }



    
                function roundWinner(){

                let winnerOfRound = playRound(humanChoice, computerChoice);
                return winnerOfRound

                }//returns who won the round



                let winner = roundWinner()

                



                





              }




// counts points at each round,
//  when one of the players gets 5 points game starts again. 
//when click add ++ to winner 
//roundus skait'it ar count() metodi 
//s


