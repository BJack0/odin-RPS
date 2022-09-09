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

/* FIRST BROKEN FUNCTION

function playRound(computerHand, playerHand) {
  if (
    (computerHand === "rock" && playerHand === "paper") ||
    (computerHand === "paper" && playerHand === "scissors") ||
    (computerHand === "scissors" && playerHand === "rock")
  ) {
    console.log("You Win!")
  } else if (
    (playerHand === "rock" && computerHand === "paper") ||
    (playerHand === "paper" && computerHand === "scissors") ||
    (playerHand === "scissors" && computerHand === "rock")
  ) {
    console.log("You lose!")
  } else {
    console.log("The game was a Draw")
  }
}

playRound()

/* SECOND BROKEN FUNCTION

function playRound(computerHand, playerHand) {
  if (computerHand === "rock" && playerHand === "paper") {
    console.log("Player has paper you win")
  } else if (computerHand === "paper" && playerHand === "scissors") {
    console.log("Player has scissors you win")
  } else if (computerHand === "scissors" && playerHand === "rock") {
    console.log("Player has rock you win")
  } else {
    console.log("Game was a draw")
  }
}

playRound()

*/

/* THIRD BROKEN FUNCTION LMAO

function playRound(computerHand, playerHand) {
  switch (true) {
    case computerHand === "rock" && playerHand === "paper":
      console.log("Player Wins!")
      break

    case computerHand === "paper" && playerHand === "scissors":
      console.log("Player Wins!")
      break

    case computerHand === "scissors" && playerHand === "rock":
      console.log("Player Wins!")
      break

    case playerHand === "rock" && computerHand === "paper":
      console.log("Computer Wins!")
      break

    case playerHand === "paper" && computerHand === "scissors":
      console.log("Computer Wins!")
      break

    case playerHand === "scissors" && computerHand === "rock":
      console.log("Computer Wins!")
      break

    default:
      console.log("The Game is a Draw!")
      break
  }
}

playRound()

*/

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
