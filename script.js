const question = document.querySelector("#question");
const btnAsk = document.querySelector("#submit-question");
const answers = [
    "Ja, auf jeden Fall",
    "Nein, auf keinen Fall",
    "Ja, gute Idee",
    "Erst mal noch nicht",
    "Frag mich später noch mal",
    "Vielleicht, vielleicht auch nicht.",
    "Morgen bestimmt",
    "Hoffentlich nicht",
    "Hoffentlich",
    "42",
];

btnAsk.addEventListener("click", renderAnswer);

function renderAnswer() {
    const output = document.querySelector("#output");
    const index = getRandomIndex(0, answers.length - 1);
    const answer = answers[index];

    output.innerText = answer;
}

function getRandomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
