function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r} ${g} ${b})`;
}

function setRandomColor() {
  const color = getRandomColor();
  const colorBox = document.getElementById("colorBox");
  const colorValue = document.getElementById("colorValue");
  colorBox.style.backgroundColor = color;
  colorValue.textContent = color;
}

function copyToClipboard() {
  const colorValue = document.getElementById("colorValue").textContent;
  navigator.clipboard
    .writeText(colorValue)
    .then(() => {
      alert("Color copied to clipboard", +colorValue);
    })
    .catch((err) => {
      console.log("Failed to copy: ", err);
    });
}

setRandomColor();

document
  .getElementById("copyButton")
  .addEventListener("click", copyToClipboard);
