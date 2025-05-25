// Matrix background
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0ff";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

// Terminal output
const terminalLines = [
  "Initializing p0p network...",
  "Decrypting data packets...",
  "OS/2 node compromised.",
  "Access granted. Welcome, user.",
  "",
  ">>> CONNECTED TO GRID",
];

const terminal = document.getElementById("terminal-output");

let line = 0;
function typeLine() {
  if (line < terminalLines.length) {
    terminal.innerHTML += terminalLines[line] + "\n";
    line++;
    setTimeout(typeLine, 400);
  }
}
window.onload = typeLine;
