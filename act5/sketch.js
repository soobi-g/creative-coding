function setup() {
  createCanvas(400, 400); // 
  noStroke(); // 
}

function draw() {
  background(0); //  background
  
  let size = 40; // Size of  shape
  
  // Loop  draw rows and columns of shapes
  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      
      // Alternate between circles and squares
      if ((x + y) % (size * 2) == 0) {
        fill(0, 100, 300); // 
        ellipse(x + size/2, y + size/2, size, size); // Circle
      } else {
        fill(150, 100, 0); // 
        rect(x, y, size, size); // Square
      }
    }
  }
  
  noLoop(); // Stop the loop 
}