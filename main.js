function getComputerChoice() {
    let numberOfChoice = Math.floor(Math.random() * 3)
    let finalChoice = numberOfChoice === 0 ? "rock" :numberOfChoice === 1 ? "paper": "scissors"
    return finalChoice 
}

function getHumanChoice() {
    const humanChoice = prompt("play rock paper scissors")
    if (humanChoice !== "rock" || humanChoice !== "paper" || humanChoice !== "scissors" )
        
    return humanChoice
}

let humanScore = 0  
let computerScore = 0 

function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() === "rock" && computerChoice === "paper" ) {
        console.log("you lose! Paper beats Rock") 
        computerScore += 1
    } else if(humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        console.log("you lose! Rock beats Scissors")
        computerScore += 1
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        console.log("you lose! scissors beats paper")
        computerScore += 1 
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        console.log("you win. Paper beats Rock")
        humanChoice +=1 
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        console.log("you win. Rock beats scissors")
        humanScore += 1 
    }else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        console.log("you win. scissors beats paper")
        humanChoice += 1
    }else {
        console.log("you get the same things")
    }
}



let numberOfRound= 0;

function playGame() {
    if (numberOfRound < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        numberOfRound += 1 
        playGame()
    } else {
        humanScore > computerScore ? console.log("you win in this round"):
        humanScore < computerScore ?console.log("you lose in this round"): console.log("Null round")
        return
    }
}

playGame()