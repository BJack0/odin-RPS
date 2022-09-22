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

  console.log("computerHand = " + computerHand)
  console.log("playerHand = " + playerHand)

  if (playerHand === computerHand) {
    console.log("The game is a tie")
    textBox.innerText = "The game is a tie"
    return
  }

  if (playerHand === "rock") {
    console.log(computerHand === "paper" ? "You Lose!" : "You Win!")
    textBox.innerText = (computerHand === "paper" ? "You Lose!" : "You Win!")
    computerHand === "paper" ? computerScore++ : playerScore++
    return
  }

  if (playerHand === "paper") {
    console.log(computerHand === "scissors" ? "You Lose!" : "You Win!")
    textBox.innerText = (computerHand === "scissors" ? "You Lose!" : "You Win!")
    computerHand === "scissors" ? computerScore++ : playerScore++
    return
  }

  if (playerHand === "scissors") {
    console.log(computerHand === "rock" ? "You Lose!" : "You Win!")
    textBox.innerText = (computerHand === "rock" ? "You Lose!" : "You Win!")
    computerHand === "rock" ? computerScore++ : playerScore++
    return
  }
}

// DOM manipulation

const playRoundBtn = document.getElementById("playRoundBtn")
playRoundBtn.addEventListener("click", playRound)

let textBox = document.getElementById("textBox")