// JavaScript file for "static-dice-game"

let diceArray = ["images/roll1.png", "images/roll2.png", "images/roll3.png", "images/roll4.png", "images/roll5.png", "images/roll6.png"];

let button = document.getElementById("rollButton");
button.onclick = function () {
    clickButton();
};

function clickButton() {

    let x = Math.floor(Math.random() * diceArray.length);
    let y = Math.floor(Math.random() * diceArray.length);

    document.getElementById("die1").setAttribute("src", diceArray[x]);
    document.getElementById("die2").setAttribute("src", diceArray[y]);

    if (x > y) {
        document.getElementById("greeting").innerText = "Player 1 Wins!";
    } else if (x === y) {
        document.getElementById("greeting").innerText = "Tie! Roll Again!";
    } else {
        document.getElementById("greeting").innerText = "Player 2 Wins!";
    }

}