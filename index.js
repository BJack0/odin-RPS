console.log("Hello World!")

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

getComputerChoice()
console.log("Computer has chosen " + computerHand)

// Function will ask player for hand

let playerHand = prompt("Please enter your hand.").toLowerCase()

function getPlayerChoice() {
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

getPlayerChoice()
console.log("Player has chosen " + playerHand)

function playRound(computerHand, playerHand) {
  if (playerHand === computerHand) {
    return console.log("The game is a tie")
  }
  if (playerHand === "rock") {
    console.log(computerHand === "paper" ? "You Lose!" : "You Win!")
  }
  if (playerHand === "paper") {
    console.log(computerHand === "scissors" ? "You Lose!" : "You Win!")
    if (playerHand === "scissors") {
      console.log(computerHand === "rock" ? "You Lose!" : "You Win!")
    }
  }
}
playRound(computerHand, playerHand)
