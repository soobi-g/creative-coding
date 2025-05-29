var img;
var totalDots = 0;
var maxDots = 5000; // Total dots 

function preload() {
  img = loadImage("l2.jpg"); // file 
}

function setup() {
  createCanvas(400, 400);
  background(255); // 
  noStroke(); // 
  frameRate(60); // 
}

function draw() {
  // 
  for (var i = 0; i < 100; i++) {
    var x = random(width);
    var y = random(height);
    var c = img.get(x, y);
    
    fill(c[0], c[1], c[2], 150); // 
    ellipse(x, y, 15, 15); // 
    
    totalDots++;
    if (totalDots >= maxDots) {
      noLoop(); // Stop when done
      console.log("Pointillism finish ");
      return;
    }
  }
}