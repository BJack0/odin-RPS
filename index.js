console.log("Welcome to the ROCK PAPER SCISSORS console.")

// Global Scope

var playerScore = 0
var computerScore = 0

// Global Scope

function getComputerChoice() {
  computerHand = Math.floor(Math.random() * 3)

  if (computerHand === 0)
    return "rock"

  if (computerHand === 1)
    return "paper"

  if (computerHand === 2)
    return "scissors"
}

function getPlayerChoice() {
  playerHand = prompt("Please enter your hand.").toLowerCase()

  if (playerHand === "rock")
    return "rock"

  if (playerHand === "paper")
    return "paper"

  if (playerHand === "scissors")
    return "scissors"

    alert("Please enter a valid hand.")
  getPlayerChoice()
  return playerHand
  }

function playRound() {
  let playerHand = getPlayerChoice()
  let computerHand = getComputerChoice()

  console.log("Start of the function")
  console.log("computerHand = " + computerHand)
  console.log("playerHand = " + playerHand)

  if (playerHand === computerHand) {
    console.log("The game is a tie")
  }

  if (playerHand === "rock") {
    console.log(computerHand === "paper" ? "You Lose!" : "You Win!")
    computerHand === "paper" ? computerScore++ : playerScore++
  }

  if (playerHand === "paper") {
    console.log(computerHand === "scissors" ? "You Lose!" : "You Win!")
    computerHand === "scissors" ? computerScore++ : playerScore++
  }

  if (playerHand === "scissors") {
    console.log(computerHand === "rock" ? "You Lose!" : "You Win!")
    computerHand === "rock" ? computerScore++ : playerScore++
  }

  console.log("End of the function")
}

// DOM manipulation

const computerChoiceBtn = document.getElementById("computerChoiceBtn")
computerChoiceBtn.addEventListener("click", getComputerChoice)

const playerChoiceBtn = document.getElementById("playerChoiceBtn")
playerChoiceBtn.addEventListener("click", getPlayerChoice)

const playRoundBtn = document.getElementById("playRoundBtn")
playRoundBtn.addEventListener("click", playRound)