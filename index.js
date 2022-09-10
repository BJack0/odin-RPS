console.log("Welcome to ROCK PAPER SCISSORS!")

// Function returns an integer between 0 - 2
// Function Converts integer into a playable hand

let computerHand

function getComputerChoice() {
  computerHand = Math.floor(Math.random() * 3)
  console.log(computerHand)
  if (computerHand === 0) {
    computerHand = "rock"
    console.log(computerHand)
  } else if (computerHand === 1) {
    computerHand = "paper"
    console.log(computerHand)
  } else if (computerHand === 2) {
    computerHand = "scissors"
    console.log(computerHand)
  }
  return computerHand
}

// Function will ask player for hand

let playerHand

function getPlayerChoice() {
  playerHand = prompt("Please enter your hand.").toLowerCase()
  if (playerHand === "rock") {
    console.log(playerHand)
  } else if (playerHand === "paper") {
    console.log(playerHand)
  } else if (playerHand === "scissors") {
    console.log(playerHand)
  } else {
    console.log(playerHand)
    alert("Please enter a valid hand.")
    getPlayerChoice()
  }
  return playerHand
}

// This function will play a round and compare the hands

let playerScore = 0
let computerScore = 0

function playRound(computerHand, playerHand) {
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
}

//This function will run all of the other functions to play a game of 5 hands

let gameNumber = 0

function game() {
  for (let i = 0; i < 5; i++) {
    gameNumber++
    console.log("Game number - " + gameNumber)

    getComputerChoice()
    console.log("Computer has chosen " + computerHand)

    getPlayerChoice()
    console.log("Player has chosen " + playerHand)

    playRound(computerHand, playerHand)
  }
  if (playerScore > computerScore) {
    console.log("The Player wins the game!")
  } else {
    console.log("The Computer wins the game!")
  }
}

game()
