function getRndInteger() {
  return Math.floor(Math.random() * (4 - 1) + 1);// returns integer from 1 to 3 both including. 
}



function getComputerChoice(){//gives random rock, paper or scissors, based on random number from fuction getRndInteger.
   if (getRndInteger() <= 1){
    console.log("Rock")
   }
   else if(getRndInteger()<= 2){
    console.log("Paper")
   }
   else if(getRndInteger() <= 3){
 console.log("Scissors")
 }
   else{
  console.log("Error", getRndInteger())
 }
}