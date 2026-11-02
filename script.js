function getComputerChoice(){
    let num = Math.random();
    if(num <0.34){
        return "rock";
    }
    else if(num <=0.67){
         return "paper";

    }
else{
    return "scissors";

}
}
function getHumanChoice(){
    let choice = prompt("Do you choose rock, paper or scissors?");
    return choice;
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase()
    if(humanChoice === "rock" && computerChoice === "paper" || computerChoice === "scissors" && humanChoice === "paper" || computerChoice === "rock" && humanChoice === "scissors"){
        computerScore ++;
        console.log( "You lose! " + computerChoice + " beats " + humanChoice )
    }
    if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++
        console.log("You win! " + humanChoice + " beats " + computerChoice)
    }
    if(humanChoice === computerChoice){
        console.log("its a Tie")
    }
   
}
 

 function playGame(){
    
    for(let i = 0; i<5; i++ ){
        playRound(getHumanChoice(),getComputerChoice())
    }
   
    console.log("You: " + humanScore + " Computer: " + computerScore);
    
    
 }
 playGame()
  