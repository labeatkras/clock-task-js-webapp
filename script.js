// Digital Clock
function updateDigitalClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;

  digitalClock.textContent = time;
}

// Analog Clock
function drawAnalogClock() {
  const canvas = analogClock;
  const ctx = canvas.getContext("2d");
  const radius = canvas.width / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw clock face
  ctx.beginPath();
  ctx.arc(radius, radius, radius - 10, 0, 2 * Math.PI);
  ctx.fillStyle = "#f2f2f2";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.stroke();

  // Draw hour hand
  const now = new Date();
  const hours = now.getHours();
  const hourAngle = (hours % 12) * (Math.PI / 6) - Math.PI / 2;
  drawHand(ctx, hourAngle, radius * 0.5, 10, "#333333");

  // Draw minute hand
  const minutes = now.getMinutes();
  const minuteAngle = minutes * (Math.PI / 30) - Math.PI / 2;
  drawHand(ctx, minuteAngle, radius * 0.7, 5, "#555555");

  // Draw second hand
  const seconds = now.getSeconds();
  const secondAngle = seconds * (Math.PI / 30) - Math.PI / 2;
  drawHand(ctx, secondAngle, radius * 0.9, 2, "#FF0000");
}

function drawHand(ctx, angle, length, width, color) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
  ctx.lineTo(
    ctx.canvas.width / 2 + Math.cos(angle) * length,
    ctx.canvas.height / 2 + Math.sin(angle) * length
  );
  ctx.stroke();
}

// Store references to elements
const digitalClock = document.getElementById("digital-clock");
const analogClock = document.getElementById("analog-clock");

// Update clocks every second
setInterval(updateDigitalClock, 1000);
setInterval(drawAnalogClock, 1000);
