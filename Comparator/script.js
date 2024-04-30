const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const comp = document.getElementById("compare");
const res = document.getElementById("result");

function comparenum() {
  const number1 = num1.value;
  const number2 = num2.value;

  if (number1 > number2) {
    res.innerHTML = "<h1>Number1 is greater!</h1>";
  } else if (number1 < number2) {
    res.innerHTML = "<h1>Number2 is greater!</h1>";
  } else {
    res.innerHTML = "<h1>Number1 is equal to Number2!</h1>";
  }
}

comp.addEventListener("click", comparenum);
