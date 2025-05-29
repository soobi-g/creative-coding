function setup() {
  createCanvas(400, 400); //  drawing area
  background(255, 0, 0); // background
}

function draw() {
  background(255, 0, 100); //  background 
  
  //  alien body 
  fill(0); // Black color
  ellipse(200, 200, 150, 200); // body

  // Draw alien head
  ellipse(200, 100, 100, 120); // Head
  
  // Draw alien eyes (WHITE)
  fill(255); // White eyes
  ellipse(175, 90, 30, 40); //  eye
  ellipse(225, 90, 30, 40); //  eye
  
  // Draw pupils (RED to match background)
  fill(255, 0, 0); // Red pupils
  ellipse(175, 95, 15, 15); //  pupil
  ellipse(225, 95, 15, 15); //  pupil
  
  // Draw alien mouth 
  noFill(); // No color inside
  stroke(255); // White line
  strokeWeight(3); // Thick line
  arc(200, 120, 60, 30, 0, PI); // the shape
  
  // Draw alien arms (simple lines)
  line(130, 200, 80, 150); // arm
  line(270, 200, 320, 150); //arm
  
  // Draw alien legs (simple lines)
  line(180, 300, 160, 350); // leg
  line(220, 300, 240, 350); // leg
  
  // Adding antenna balls 
  fill(0); //  balls
  ellipse(200, 40, 15, 15); //  antenna 1
  ellipse(170, 30, 15, 15); //  antenna 2
  ellipse(230, 30, 15, 15); //  antenna 3
}