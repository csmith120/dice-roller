
let value = 20;

document.getElementById("display").addEventListener("click", diceRoll);

document.querySelector("html").addEventListener("keyup", (e) => {

    if (e.key === 'Enter') {
        setTimeout(diceRoll, 10);
    }
    
});

for (i = 0; i < document.getElementsByClassName("dice-option").length; i++) {
    document.getElementsByClassName("dice-option")[i].addEventListener("click", setDiceValue);
}

function setDiceValue(e) {
    value = Number(e.target.textContent.substring(1));
    document.getElementById("display").textContent = `1 - ${value}`;
}

function diceRoll() {
    document.getElementById("answer").textContent = Math.ceil(Math.random() * value);
}
