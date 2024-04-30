const num = document.getElementById("score");
const calc = document.getElementById("calculate");
const res = document.getElementById("result");

function grade() {
  const number = num.value;

  if (number > 100 || number < 0 ) {
    res.innerHTML = "<h1>Invalid! Try Again!</h1>";
  } else if (number <= 100 && number >= 90 ) {
    res.innerHTML = "<h1>Grade: A+</h1>";
  } else if (number < 90 && number >= 85) {
    res.innerHTML = "<h1>Grade: A</h1>";
  } else if (number < 85 && number >= 80) {
    res.innerHTML = "<h1>Grade: A-</h1>";
  } else if (number < 80 && number >= 75) {
    res.innerHTML = "<h1>Grade: B+</h1>";
  } else if (number < 75 && number >= 70) {
    res.innerHTML = "<h1>Grade: B</h1>";
  } else if (number < 70 && number >= 65) {
    res.innerHTML = "<h1>Grade: B-</h1>";
  } else if (number < 65 && number >= 60) {
    res.innerHTML = "<h1>Grade: C+</h1>";
  } else if (number < 60 && number >= 55) {
    res.innerHTML = "<h1>Grade: C</h1>";
  } else if (number < 55 && number >= 50) {
    res.innerHTML = "<h1>Grade: C-<h1>";
  } else if (number < 50 && number >= 45) {
    res.innerHTML = "<h1>Grade: D+</h1>";
  } else if (number < 45 && number >= 40) {
    res.innerHTML = "<h1>Grade: D</h1>";
  } else if (number < 40 && number >= 0) {
    res.innerHTML = "<h1>Grade: F</h1>";
  }
}

calc.addEventListener("click", grade);

