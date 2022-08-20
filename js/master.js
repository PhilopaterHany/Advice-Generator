const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const dice = document.getElementById("dice");

function showQuote() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => data.slip)
        .then((data) => {
            adviceId.innerHTML = `ADVICE #${data.id}`;
            adviceText.innerHTML = data.advice;
        })
        .catch((error) => {
            alert(`Error: ${error}`);
        });
}

window.addEventListener("load", showQuote);
dice.addEventListener("click", showQuote);
