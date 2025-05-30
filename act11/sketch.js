let circles = []; // array 
let bgColor = 0; // background color that changes
let maze = []; //  maze walls!
let playerX = 100; // maze player position
let playerY = 100;
let showMessage = false; // some messages!
let messageTimer = 0;
let currentMessage = ""; // store the current message 
let inspiringMessages = [
  "Creative coding is FUN! ",
  "I LOVE creative coding! ", 
  "creative Coding is great! ",
  "This makes coding exciting! "
];

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100); //  colors 
  
  // maze walls 
  maze = [
    {x: 200, y: 150, w: 100, h: 20},
    {x: 400, y: 200, w: 20, h: 100},
    {x: 150, y: 350, w: 120, h: 20},
    {x: 500, y: 100, w: 80, h: 15},
    {x: 350, y: 400, w: 15, h: 80},
    {x: 600, y: 250, w: 15, h: 150}
  ];
}

function draw() {
  // Slowly changing background - this looks magical!
  bgColor = (bgColor + 0.5) % 360;
  background(bgColor, 20, 95);
  
  //  circles
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    
    // effect of circles 
    c.size += 2;
    c.alpha -= 3;
    
    // circle with rainbow colors
    fill(c.hue, 80, 90, c.alpha);
    noStroke();
    ellipse(c.x, c.y, c.size, c.size);
    
    // Remove circles when they fade out
    if (c.alpha <= 0) {
      circles.splice(i, 1);
      i--; // 
    }
  }
  
  //  maze walls effect!
  for (let i = 0; i < maze.length; i++) {
    let wall = maze[i];
    
    // Glowing outline
    fill((frameCount + i * 50) % 360, 70, 90, 50);
    rect(wall.x - 3, wall.y - 3, wall.w + 6, wall.h + 6);
    
    // Main wall
    fill((frameCount + i * 50) % 360, 90, 60);
    rect(wall.x, wall.y, wall.w, wall.h);
  }
  
  //  maze player
  fill((frameCount * 2) % 360, 80, 100);
  stroke(0, 0, 100);
  strokeWeight(3);
  ellipse(playerX, playerY, 25, 25);
  
  // Player glow effect
  fill((frameCount * 2) % 360, 60, 90, 30);
  noStroke();
  ellipse(playerX, playerY, 40, 40);
  for (let i = 0; i < 50; i++) {
    let x = (frameCount + i * 20) % width;
    let y = height/2 + sin(frameCount * 0.02 + i) * 100;
    fill((frameCount + i * 10) % 360, 60, 80, 30);
    ellipse(x, y, 8, 8);
  }
  
  // Instructions
  fill(0, 0, 0);
  textAlign(CENTER);
  textSize(18);
  text("Click the Arrow keys to move ! ", width/2, 50);
  text("Drag mouse for some trails! and SPACE for some surprises ", width/2, height - 30);
  
  // Show  message when space is pressed!
  if (showMessage && messageTimer > 0) {
    messageTimer--;
    
    //  message box
    fill(0, 0, 75, 100);
    rect(width/2 - 250, height/2 - 60, 500, 120, 20);
    
    //  border 
    noFill();
    strokeWeight(4);
    stroke((frameCount * 3) % 360, 80, 100);
    rect(width/2 - 250, height/2 - 60, 500, 120, 20);
    
    //  message 
    fill((frameCount * 2) % 360, 90, 100);
    textSize(24);
    text(currentMessage, width/2, height/2 - 20);
    
    // 
    for (let i = 0; i < 20; i++) {
      let sparkleX = width/2 + cos(frameCount * 0.1 + i) * 200;
      let sparkleY = height/2 + sin(frameCount * 0.08 + i) * 80;
      fill((frameCount + i * 20) % 360, 70, 90, 200);
      ellipse(sparkleX, sparkleY, 8, 8);
    }
  }
}

function mousePressed() {
  // Create explosion of circles at mouse position!
  for (let i = 0; i < 15; i++) {
    circles.push({
      x: mouseX + random(-20, 20), // spread them out a bit
      y: mouseY + random(-20, 20),
      size: random(10, 30),
      hue: random(360), // random rainbow color!
      alpha: 100
    });
  }
}

function mouseDragged() {
  // 
  circles.push({
    x: mouseX,
    y: mouseY,
    size: random(20, 40),
    hue: (frameCount * 3) % 360, // cycling rainbow
    alpha: 80
  });
}

function keyPressed() {
  // Arrow keys move maze player!
  let newX = playerX;
  let newY = playerY;
  let step = 15;
  
  if (keyCode === LEFT_ARROW) newX -= step;
  if (keyCode === RIGHT_ARROW) newX += step;
  if (keyCode === UP_ARROW) newY -= step;
  if (keyCode === DOWN_ARROW) newY += step;
  
  // 
  let hitWall = false;
  for (let wall of maze) {
    if (newX > wall.x - 12 && newX < wall.x + wall.w + 12 &&
        newY > wall.y - 12 && newY < wall.y + wall.h + 12) {
      hitWall = true;
      break;
    }
  }
  
  // Move if no wall hit
  if (!hitWall && newX > 20 && newX < width-20 && newY > 20 && newY < height-20) {
    playerX = newX;
    playerY = newY;
    
    // Create celebration circles when moving!
    for (let i = 0; i < 8; i++) {
      circles.push({
        x: playerX + random(-15, 15),
        y: playerY + random(-15, 15),
        size: random(5, 15),
        hue: (frameCount * 5) % 360,
        alpha: 70
      });
    }
  }
  
  // Space bar for inspiration 
  if (key === ' ' || key === ' ') {
    // Pick ONE message and keep it!
    currentMessage = inspiringMessages[Math.floor(Math.random() * inspiringMessages.length)];
    
    // Show inspiring message!
    showMessage = true;
    messageTimer = 180; // show for 3 seconds
    
    // Creating an explosion 
    for (let i = 0; i < 30; i++) {
      circles.push({
        x: width/2 + random(-100, 100),
        y: height/2 + random(-100, 100),
        size: random(20, 50),
        hue: random(360),
        alpha: 100
      });
    }
    
    // clearing old circles after showing message
    setTimeout(() => {
      circles = [];
    }, 1000);
  }
}