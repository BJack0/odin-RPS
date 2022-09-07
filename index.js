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

// Function will play one round and compare hands

/*

function playRound(computerHand, playerHand) {
  if (computerHand === playerHand) {
    console.log("The game was a Draw")
  } else if (
    (playerHand === "rock" && computerHand === "paper") ||
    (playerHand === "paper" && computerHand === "scissors") ||
    (playerHand === "scissors" && computerHand === "rock")
  ) {
    console.log("You lose!")
  }
}

playRound()

*/
