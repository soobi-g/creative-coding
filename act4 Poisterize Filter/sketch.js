var img;

function preload() {
  img = loadImage("l3.jpg"); //image 
}

function setup() {
  createCanvas(400, 400);
  image(img, 0, 0, width, height); // Display 
  filter(POSTERIZE, 4); // the posterize effect
  noLoop(); // 
}