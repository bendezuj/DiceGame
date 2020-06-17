

var randomNumber1 = 0;
var randomNumber2 = 0;
while(randomNumber1 == randomNumber2){
  randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
  randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
}

var sourceA = "images/dice" + randomNumber1 + ".png";
var sourceB = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].src = sourceA;
document.querySelectorAll("img")[1].src = sourceB;

function winner(A, B){
  if(A > B){
    return "1";
  }
  else if (B > A){
    return "2";
  }
}

var winner =
document.querySelector("h1").textContent = "Player " + winner(randomNumber1, randomNumber2) + " wins!";
