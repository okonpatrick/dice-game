// Player name
var player1 = prompt("Player 1 your name, please");
var player2 = prompt("Player 2: your name, please!");

var newplayer1 = player1.slice(0,1).toUpperCase() + player1.slice(1,player1.length).toLowerCase();
var newplayer2 = player2.slice(0,1).toUpperCase() + player2.slice(1,player2.length).toLowerCase();

document.querySelector("p.Player1").innerHTML = newplayer1;
document.querySelector("p.Player2").innerHTML = newplayer2;

// Function to roll the dice
function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "img/dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "img/dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!😉";
        }

        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML
                = (newplayer2 + " WINS!🏆");
        }

        else {
            document.querySelector("h1").innerHTML
                = (newplayer1 + " WINS!🏆");
        }
    }, 2500);
}