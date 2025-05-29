let img;
let imgLoaded = false;

function preload() {
  img = loadImage("l1.jpg", 
    function() {
      console.log("Image loaded ");
      imgLoaded = true;
    },
    function() {
      console.log("Failed to load ");
    }
  );
}

function setup() {
  createCanvas(400, 400);
  noStroke();
  textSize(16);
}

function draw() {
  background(0);
  
  if (imgLoaded) {
    // Draw the image
    image(img, 0, 0, width, height);
    
    // Get color at mouse position
    let c = get(mouseX, mouseY);
    
    // Draw sampling circle
    fill(c);
    ellipse(mouseX, mouseY, 100, 100);
    
    // Add border to make circle visible
    stroke(255);
    noFill();
    ellipse(mouseX, mouseY, 102, 102);
    noStroke();
  } else {
    //  loading/error message
    fill(255);
    text("Loading image or image not found", 20, 30);
    text("Check console for errors (F12)", 20, 60);
  }
}