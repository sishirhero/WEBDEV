const playertext = document.querySelector("#playertext");
const computertext = document.querySelector("#computertext");
const resulttext = document.querySelector("#resulttext");
const playerEmojiElement = document.getElementById("playerEmoji");
const computerEmojiElement = document.getElementById("computerEmoji");

const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

const emojis = {
    ROCK: "🪨",
    PAPER: "📄",
    SCISSORS: "✂️",
};

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.dataset.choice; // Use 'dataset.choice' to get the data-choice attribute value
    computerTurn();
    playertext.textContent = `Player: ${player}`;
    computertext.textContent = `Computer: ${computer}`;
    displayChoice(player, true);
    displayChoice(computer, false);
    resulttext.textContent = winner();
}));

function computerTurn() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function displayChoice(choice, isPlayer = true) {
    const emojiElement = isPlayer ? playerEmojiElement : computerEmojiElement;
    emojiElement.textContent = emojis[choice];
}

function winner() {
    if (player === computer) {
        return "DRAW!";
    } else if (
        (player === "ROCK" && computer === "SCISSORS") ||
        (player === "PAPER" && computer === "ROCK") ||
        (player === "SCISSORS" && computer === "PAPER")
    ) {
        return "YOU WIN!";
    } else {
        return "YOU LOSE!";
    }
}
