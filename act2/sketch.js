let x = 100;
let y = 100;
let speed = 2;

function setup() {
  createCanvas(420, 420);
  rectMode(CORNER);
}

function draw() {
  background(255);

  // Add color
  fill(100, 150, 255);  // Light blue color
  stroke(0);            // Black border
  strokeWeight(2);

  // Draw the animated square
  rect(x, y, 200, 200);

  // Update position
  x += speed;
  y += speed;

  // Bounce back if it hits canvas edge
  if (x + 200 > width || x < 0) {
    speed *= -1;
  }
}