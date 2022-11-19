//game 

function getComputerChoice(){
   let randomNumber = Math.floor(Math.random()*3)
   switch (randomNumber){
       case 0:
         return 'ROCK'
       case 1: 
         return 'PAPER'
       case 2:
           return 'SCISSORS'
   }
}

function playRound (playerSelection,computerSelection){
   //the first if statement will check to see if it a tie game 
   if (
      (computerSelection === playerSelection)
     ) {
        return "tie game"
     }

     else

   if (
       (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
       (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || // checks all possible outcomes , returns winner of round as player
       (playerSelection === 'PAPER' && computerSelection === 'ROCK')
       ) {
         return 'player beat the machine!'
       }
     else
   if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') || // checks all possible outcomes for computers answer returns winner of the round as computer
      (computerSelection === 'PAPER' && playerSelection ==='ROCK')
      ) {
         return 'the machine wins!'
      }  
      }

     
     //trying out loops with the game() function that plays five rounds , then adding something to keep track of score and announce winner after
     // i get the function working properly...

     
     function game(){
      //starts to loop the playRound function
      for(let i = 0; i < 5; i++){
        //calls playRound function and redefines the values above to fight scope conflicts.
          //passing in newly returned values from playerround and computerselection
          const computerSelection = getComputerChoice();
          const playerSelection = 'ROCK';
          const currentRound = playRound(playerSelection,computerSelection);
          //log our results
          console.log(currentRound);
      }
  
  }



 



// i made a temporary answer value for the player later i will add in a input value so that i can choose my value 
      const playerSelection = prompt('Choose your weapon!');
      const computerSelection = getComputerChoice();          
      console.log(game());





   
