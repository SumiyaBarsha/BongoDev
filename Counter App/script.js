let count = 0;

const displayElement = document.getElementById("counter");
const inc = document.getElementById("increment");
const dec = document.getElementById("decrement");

function incCount() {
  count += 1;
  displayElement.innerText = count;
}

function decCount() {
  if (count - 1 < 0) {
    alert("Count can not be negative");
  } else {
    count -= 1;
    displayElement.innerText = count;
  }
}

inc.addEventListener("click", incCount);
dec.addEventListener("click", decCount);
