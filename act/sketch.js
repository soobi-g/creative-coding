function setup() {
  createCanvas(600, 200); //
}

function draw() {
  background(100, 200, 255); //  sky
  
  // Draw the road
  fill(50); // Dark gray
  rect(0, 150, width, 50); // Road 
  
  // Draw the car body
  fill(255, 0, 0); // Red car
  rect(mouseX - 50, 120, 100, 30); // Main body who follows mous
  
  // Draw the car top
  fill(200, 0, 0); // Darker red
  rect(mouseX - 30, 100, 60, 20); // Car roof
  
  // Draw the wheels
  fill(0); // Black wheels
  ellipse(mouseX - 30, 150, 30, 30); //  wheel 1
  ellipse(mouseX + 30, 150, 30, 30); //  wheel 2
  
  // Draw windows
  fill(300, 100, 0); // windows
  rect(mouseX - 25, 105, 20, 10); //  windo 1 
  rect(mouseX + 5, 105, 20, 10); //  window 2
  
  // Sun in the sky
  fill(255, 255, 0); // Yellow sun
  ellipse(50, 50, 60, 60); // Sun at top-left
}