console.log("Hello World!")

// Function returns an integer between 0 - 2
// Function Converts integer into a playable hand

function getComputerChoice() {
  let computerHand = Math.floor(Math.random() * 3)
  console.log(computerHand)

  if (computerHand === 0) {
    let computerHand = "rock"
    console.log(computerHand)
  } else if (computerHand === 1) {
    let computerHand = "paper"
    console.log(computerHand)
  } else if (computerHand === 2) {
    let computerHand = "scissors"
    console.log(computerHand)
  }
}
