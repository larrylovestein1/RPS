//game 

function getComputerChoice(){
   let randomNumber = Math.floor(Math.random()*3)
   switch (randomNumber){
       case 0:
         return 'ROCK';
         break;
       case 1: 
         return 'PAPER';
         break;
       case 2:
           return 'SCISSORS';
           break;
   }
}

function playRound (playerSelection){
   //the first if statement will check to see if it a tie game 
   if (
      (computerSelection === playerSelection)
     )  {
        return "tie game";
     }

     else

   if (
       (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
       (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || // checks all possible outcomes , returns winner of round as player
       (playerSelection === 'PAPER' && computerSelection === 'ROCK')
       ) {
         playerPoints.textContent = 'Player:' + ++playerScore 
         return 'player beat the machine!';
       }
     else
   if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') || // checks all possible outcomes for computers answer returns winner of the round as computer
      (computerSelection === 'PAPER' && playerSelection ==='ROCK')
      ) {
        computerPoints.textContent = 'Computer:' + ++computerScore
        return 'the machine wins!';
      }  
      }


    

      let computerScore = 0;
      let playerScore = 0;
      const playerPoints = document.querySelector('#player');
      const computerPoints = document.querySelector('#computer');
      const computerSelection = getComputerChoice();          
      const rock = document.querySelector('#rock');
      const paper = document.querySelector('#paper');
      const scissors = document.querySelector('#scissors');

      rock.addEventListener('click', () => {
        console.log (playRound('ROCK', computerSelection));
         });

      paper.addEventListener('click', () => {
        console.log(playRound('PAPER',computerSelection));
      });

      scissors.addEventListener('click', () => {
        console.log(playRound('SCISSORS', computerSelection));
      });

    



   
