var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var dicePlayer1Image = "images/dice"+randomNumber1+".png";
var image = document.querySelectorAll("img")[0];

image.setAttribute("src", dicePlayer1Image);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var dicePlayer2Image = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", dicePlayer2Image);





if (randomNumber1 > randomNumber2)
    document.querySelector('h1[class="result"]').innerHTML = "Player 1 wins!";
else if (randomNumber1 < randomNumber2)
    document.querySelector('h1[class="result"]').innerHTML = "Player 2 wins!";
else document.querySelector('h1[class="result"]').innerHTML = "Tie!";

function refreshPage() {
  window.location.reload();
}

