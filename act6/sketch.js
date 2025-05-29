function setup() {
  createCanvas(800, 400);
  background(255); // White background
  noLoop();
}

function draw() {
  // colors
  let green = color(0, 106, 78);
  let red = color(210, 16, 52);
  
  // style font settings
  textFont('Impact'); // style font
  textSize(60);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  
  // "ONE TWO THREE" - 
  fill(green);
  text("ONE", 150, 100);
  
  fill(red);
  text("TWO", 400, 150); // 
  
  fill(green);
  text("THREE", 650, 100);
  
  // "VIVA L'ALGÉRIE" 
  textSize(70);
  fill(red);
  text("V", 200, 280);
  fill(green);
  text("I", 240, 280);
  fill(red);
  text("V", 280, 280);
  fill(green);
  text("A", 320, 280);
  
  fill(red);
  text("L'ALGÉRIE", 550, 280);
    
}