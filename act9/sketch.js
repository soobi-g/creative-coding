let deserts = [
  {country: "Antarctica", size: 14.0, flagColor: [200, 240, 255]},
  {country: "Algeria", size: 9.2, flagColor: [0, 106, 78]},
  {country: "Saudi Arabia", size: 2.3, flagColor: [0, 84, 48]},
  {country: "China", size: 1.3, flagColor: [238, 28, 37]},
  {country: "Botswana", size: 0.9, flagColor: [113, 178, 100]}
];

function setup() {
  createCanvas(800, 600);
  textSize(14);
  noStroke();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  
  // Title
  fill(245);
  textSize(24);
  text("Countries with Largest Deserts", width/2, 30);
  textSize(16);
  text("Desert superficy", width/2, 60);

  let barWidth = 80;
  let spacing = 100;
  let maxBarHeight = 400;
  let startX = 150;

  // Draw vertical bars
  for (let i = 0; i < deserts.length; i++) {
    let desert = deserts[i];
    let x = startX + i * spacing;
    let barHeight = map(desert.size, 0, 15, 0, maxBarHeight);
    
    // Flag-colored bar
    fill(desert.flagColor);
    rect(x, height - 100 - barHeight, barWidth, barHeight);
    
    // Country name below bar
    fill(245);
    text(desert.country, x + barWidth/2, height - 70);
    
    // Size label at top of bar
    fill(245);
    text(desert.size + "M km²", x + barWidth/2, height - 105 - barHeight);
    
    // Simple desert icon
    fill(210, 180, 140);
    ellipse(x + barWidth/2, height - 120 - barHeight, 30, 15);
  }
  
  // Y-axis label
  push();
  translate(70, height/2 - 200);
  rotate(-HALF_PI);
  text("Desert Size (million km²)", 0, 0);
  pop();
}