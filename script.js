document.getElementById("pl1").addEventListener("click", goPoint)
document.getElementById("pl2").addEventListener("click", goPoint2)
document.getElementById("newGame").addEventListener("click", reset)

var counter2 = 0;
var counter1 = 0;

var add = (function () {
  return function () {
    counter1 += 1;
    return counter1;
  }
})();


function goPoint() {
  var player1Score = 0
  document.getElementById("score1").textContent = add()
  if (Math.abs(counter1 - counter2) >= 2 && counter1 >= 11 && counter1 > counter2) {
    return counter1 = "WINNER"
  }

}

var add2 = (function () {
  return function () {
    counter2 += 1;
    return counter2;
  }
})();

function goPoint2() {
  var player2Score = 0
  document.getElementById("score2").textContent = add2()
  if (Math.abs(counter2 - counter1) >= 2 && counter2 >= 11 && counter2 > counter1) {

    return counter2 = "WINNER"
  }

}


function reset() {
  document.getElementById("score1").textContent = 0
  document.getElementById("score2").textContent = 0

  counter1 = 0
  counter2 = 0

}

var playerAdd = document.querySelector("#plBtn")
var player1Input = document.querySelector(".play1")
var player2Input = document.querySelector(".play2")
var player1 = document.querySelector("#player1")
var player2 = document.querySelector("#player2")


playerAdd.addEventListener("click", function () {
  var name1Play = player1.innerText = player1Input.value
  player2.innerText = player2Input.value

  



})

document.getElementById("resetName").addEventListener("click", resetPlayer)

function resetPlayer() {
  document.getElementById("player1").textContent = "Player 1"
  document.getElementById("player2").textContent = "Player 2"


}