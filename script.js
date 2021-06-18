function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        switch(computerSelection) {
            case "rock":
                return "Draw"
            case "paper":
                return "Computer Wins"
            case "scissors":
                return "Player Wins"
        }
    }
    if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock":
                return "Player Wins"
            case "paper":
                return "Draw"
            case "scissors":
                return "Computer Wins"
        }
    }
    if (playerSelection == "scissors") {
        switch(computerSelection) {
            case "rock":
                return "Computer Wins"
            case "paper":
                return "Player Wins"
            case "scissors":
                return "Draw"
        }
    }
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor((Math.random() * 10) % 3)
    return choices[choiceNumber];
}

function checkInput(playerSelection) {
    if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        return true
    }
    return false
}

function play(playerChoice, computerChoice) {
    playerSelection = (playerChoice === undefined) ? prompt("Rock, paper or scissors ?").toLowerCase() : playerChoice 
    if(!checkInput(playerSelection)){
        return "Wrong input! Please choose between rock, paper or scissors"
    }
    computerSelection = (computerChoice === undefined) ? computerPlay() : computerChoice
    return playRound(playerSelection, computerSelection);
}

function translateChoiceToButton(choice) {
    switch (choice) {
        case "rock":
            return 0
        case "paper":
            return 1
        case "scissors":
            return 2
    }
}

function showResult (choice) {
    document.querySelector(".result").hidden = false;
    let buttonNumber = translateChoiceToButton(choice);
    
    let clnPlayer = button[buttonNumber].cloneNode(true);
    clnPlayer.disabled = false;
    playerDiv.appendChild(clnPlayer)

    let computerChoice = computerPlay();
    buttonNumber = translateChoiceToButton(computerChoice);
    let clnComputer = button[buttonNumber].cloneNode(true);
    clnComputer.disabled = false;
    computerDiv.appendChild(clnComputer);

    winnerDiv.firstElementChild.textContent = play(choice, computerChoice);
    winnerDiv.firstElementChild.hidden = false;

    
}

function removeResult () {
    resultDiv.hidden = false;
    let playerButton = playerDiv.lastElementChild
    let computerButton = computerDiv.lastElementChild
    playerDiv.removeChild(playerButton)
    computerDiv.removeChild(computerButton)
    winnerDiv.firstElementChild.hidden = true;


}
let winnerDiv = document.querySelector('.winner')
let button = document.querySelectorAll("button")
let computerDiv = document.querySelector(".computer")
let resultDiv = document.querySelector(".result")
let playerDiv = document.querySelector(".player")
button[0].addEventListener("click", function() {
    button[1].disabled = true;
    button[2].disabled = true;
    button[0].disabled = true;
    showResult("rock")
    button[3].disabled = false;
    //mostrar na tela
})
button[1].addEventListener("click", function() {
    button[0].disabled = true;
    button[1].disabled = true;
    button[2].disabled = true;
    showResult("paper")
    button[3].disabled = false;
    //mostrar na tela
})
button[2].addEventListener("click", function() {
    button[0].disabled = true;
    button[1].disabled = true;
    button[2].disabled = true;
    showResult("scissors")
    button[3].disabled = false;
    //mostrar na tela    
})
button[3].addEventListener("click", function(){
    button[0].disabled = false;
    button[1].disabled = false;
    button[2].disabled = false;
    // limpar tela
    removeResult()
    button[3].disabled = true;
})

