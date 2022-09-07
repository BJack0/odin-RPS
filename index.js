console.log("Hello World!")

// Function returns an integer between 0 - 2
// Function Converts integer into a playable hand

function getComputerChoice() {
  let computerHand = Math.floor(Math.random() * 3)

  if (computerHand === 0) {
    let computerHand = "rock"
    return computerHand
  } else if (computerHand === 1) {
    let computerHand = "paper"
    return computerHand
  } else if (computerHand === 2) {
    let computerHand = "scissors"
    return computerHand
  }
}

// Function will ask player for hand

function getPlayerChoice() {
  let playerHand = prompt("Please enter your hand.")
  return playerHand
}
