const RockButton = document.getElementById("Rock");
const PaperButton = document.getElementById("Paper");
const ScissorsButton = document.getElementById("Scissors");
const outcomeDiv = document.getElementById("outcome");
const scoreDiv = document.getElementById("score");
const options = ["Rock", "Paper", "Scissors"];

RockButton.addEventListener("click", () => playGame("Rock"));
PaperButton.addEventListener("click", () => playGame("Paper"));
ScissorsButton.addEventListener("click", () => playGame("Scissors"));

function playGame(contendersChoice) {
    const aiChoice = options[Math.floor(Math.random() * 3)];
    let winner;
    
    if (contendersChoice === aiChoice) {
        winner = "It appears you're evenly matched";
    } else if (
        (contendersChoice === "Rock" && aiChoice === "Scissors") ||
        (contendersChoice === "Paper" && aiChoice === "Rock") ||
        (contendersChoice === "Scissors" && aiChoice === "Paper")
    ) {
        winner = "Round Won!";
    } else {
        winner = "Not this time pal";
    }

    outcomeDiv.innerHTML = `Your choice was ${contendersChoice}. Your opponent chose ${aiChoice}. ${winner}`;
}