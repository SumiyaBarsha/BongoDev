const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const comp = document.getElementById("compare");
const res = document.getElementById("result");


function setText(text){
    res.innerText=text;
}

function comparenum() {
  const number1 = num1.value;
  const number2 = num2.value;

  if (number1 == number2) {
    setText( "Number1 is equal to Number2!");
} else {
    if (number1 < number2) {
      setText( "Number2 is greater!");
  } 
    if (number1 > number2){
      setText( "Number1 is greater!");
    }
  }
  number1 =0;
  number2 =0;
}

comp.addEventListener("click", comparenum);
