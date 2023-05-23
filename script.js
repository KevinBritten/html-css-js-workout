console.log("Hello from Nerdbord!");

const colors = ["green", "red", "blue", "yellow"];

function changeColor(color) {
  const div = document.querySelector(".box");
  div.style.borderColor = color;
}

function colorIterator() {
  let i = 0;
  const interatorFunction = setInterval(() => {
    changeColor(colors[i]);
    i++;
    if (i == colors.length) clearInterval(interatorFunction);
  }, 3000);
}

colorIterator();
