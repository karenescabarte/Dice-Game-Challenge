const randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

document
  .querySelector(".img1")
  .setAttribute("src", `images/dice${randomNumber1}.png`);

document
  .querySelector(".img2")
  .setAttribute("src", `images/dice${randomNumber2}.png`);

document.querySelector("h1").innerHTML = result();

function result() {
  if (randomNumber1 > randomNumber2) {
    var result = "Player 1 wins!";
  } else if (randomNumber2 > randomNumber1) {
    result = "Player 2 wins!";
  } else if (randomNumber1 == randomNumber2) {
    result = "Draw";
  }
  return result;
}

const btn = document.querySelector(".myButton");

btn.addEventListener("click", function () {
  window.location.reload(this);
});
