const num = document.getElementById("score");
const calc = document.getElementById("calculate");
const res = document.getElementById("result");

function setGrade(text) {
  result.innerText = text;
}

function grade() {
  const number = parseFloat(num.value);

  if (number > 100 || number < 0 ) {
    setGrade ("Invalid! Try Again!");
  } else if (number <= 100 && number >= 90 ) {
    setGrade ("Grade: A+");
  } else if (number < 90 && number >= 85) {
    setGrade ("Grade: A");
  } else if (number < 85 && number >= 80) {
    setGrade ("Grade: A-");
  } else if (number < 80 && number >= 75) {
    setGrade ("Grade: B+");
  } else if (number < 75 && number >= 70) {
    setGrade ("Grade: B");
  } else if (number < 70 && number >= 65) {
    setGrade ("Grade: B-");
  } else if (number < 65 && number >= 60) {
    setGrade ("Grade: C+");
  } else if (number < 60 && number >= 55) {
    setGrade ("Grade: C");
  } else if (number < 55 && number >= 50) {
    setGrade ("Grade: C-");
  } else if (number < 50 && number >= 45) {
    setGrade ("Grade: D+");
  } else if (number < 45 && number >= 40) {
    setGrade ("Grade: D");
  } else if (number < 40 && number >= 0) {
    setGrade ("Grade: F");
  }
  else{
    setGrade("Please enter a score!");
  }
}

calc.addEventListener("click", grade);

