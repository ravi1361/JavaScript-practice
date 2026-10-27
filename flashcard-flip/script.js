
const cards = [
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets"
    },
    {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language"
    },
    {
        question: "Which keyword declares a constant in JavaScript?",
        answer: "const"
    },
    {
        question: "Which method converts text to lowercase?",
        answer: "toLowerCase()"
    },
    {
        question: "Which symbol starts a JavaScript comment on one line?",
        answer: "//"
    }
];

let currentIndex = 0;
let showingAnswer = false;

const flashcard = document.getElementById("flashcard");
const cardLabel = document.getElementById("cardLabel");
const cardText = document.getElementById("cardText");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");

function showCard() {
    showingAnswer = false;
    cardLabel.textContent = "QUESTION";
    cardText.textContent = cards[currentIndex].question;
    progress.textContent = `Card ${currentIndex + 1} of ${cards.length}`;
}

function flipCard() {
    showingAnswer = !showingAnswer;

    if (showingAnswer) {
        cardLabel.textContent = "ANSWER";
        cardText.textContent = cards[currentIndex].answer;
    } else {
        cardLabel.textContent = "QUESTION";
        cardText.textContent = cards[currentIndex].question;
    }
}

flashcard.addEventListener("click", flipCard);

flashcard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        flipCard();
    }
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard();
});

showCard();
