// Select DOM elements
const playerChoiceSpan = document.getElementById("player-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const resultSpan = document.getElementById("result");
const choices = document.querySelectorAll(".choice");

// Possible choices
const options = ["Rock", "Paper", "Scissors", "Shoe"];

// Function to get a random choice for the computer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Function to determine the winner
function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (playerChoice === "Rock" && (computerChoice === "Scissors" || computerChoice === "Shoe")) ||
    (playerChoice === "Paper" && (computerChoice === "Rock" || computerChoice === "Shoe")) ||
    (playerChoice === "Scissors" && (computerChoice === "Paper" || computerChoice === "Shoe")) ||
    (playerChoice === "Shoe" && computerChoice !== "Shoe")
  ) {
    return "You win!";
  }

  return "Computer wins!";
}

// Add event listeners to all choice buttons
choices.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.textContent;
    const computerChoice = getComputerChoice();

    // Display the choices
    playerChoiceSpan.textContent = playerChoice;
    computerChoiceSpan.textContent = computerChoice;

    // Determine and display the result
    const result = getWinner(playerChoice, computerChoice);
    resultSpan.textContent = result;
  });
});
