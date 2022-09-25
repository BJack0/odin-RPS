console.log("Welcome to the ROCK PAPER SCISSORS console.")

// Global Scope

var playerScore = 0
var computerScore = 0
const computerScoreStatus = document.getElementById("computerScore")
const playerScoreStatus = document.getElementById("playerScore")

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
  playerHand = prompt("Please enter your hand.").toLowerCase().trim()

  console.log(playerHand)

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
    gameStatus.innerText = "The game is a tie"
    updateUI()
    winnerCheck()
    return
  }

  if (playerHand === "rock") {
    console.log(computerHand === "paper" ? "You Lose!" : "You Win!")
    gameStatus.innerText = (computerHand === "paper" ? "You Lose!" : "You Win!")
    computerHand === "paper" ? computerScore++ : playerScore++
    updateUI()
    winnerCheck()
    return
  }

  if (playerHand === "paper") {
    console.log(computerHand === "scissors" ? "You Lose!" : "You Win!")
    gameStatus.innerText = (computerHand === "scissors" ? "You Lose!" : "You Win!")
    computerHand === "scissors" ? computerScore++ : playerScore++
    updateUI()
    winnerCheck()
    return
  }

  if (playerHand === "scissors") {
    console.log(computerHand === "rock" ? "You Lose!" : "You Win!")
    gameStatus.innerText = (computerHand === "rock" ? "You Lose!" : "You Win!")
    computerHand === "rock" ? computerScore++ : playerScore++
    updateUI()
    winnerCheck()
    return
  }
}

function updateUI() {
  computerScoreStatus.textContent = (`Computer Score : ${computerScore}`)
  playerScoreStatus.textContent = (`Player Score : ${playerScore}`)
}

function winnerCheck() {
  if (playerScore === 5) {
    gameStatus.innerText = "The Player wins the game!"
  }

  if (computerScore === 5) {
    gameStatus.innerText = "The Computer wins the game!"
  }
}

// DOM manipulation

const playRoundBtn = document.getElementById("playRoundBtn")
playRoundBtn.addEventListener("click", playRound)

const gameStatus = document.getElementById("gameStatus")