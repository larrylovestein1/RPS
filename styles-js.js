//game 

function getComputerChoice(){
 let randomNumber = Math.floor(Math.random() * 3)
   switch (randomNumber){
    case 0: 
      return 'ROCK'
    case 1:
        return 'PAPER'
    case 2: 
        return 'SCISSORS'

   }
}