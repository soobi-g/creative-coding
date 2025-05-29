let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB); // color transitions
  noStroke();
}

function draw() {
  background(0, 0.1); //  background for trail effect

  // Adding psarticle
  if (mouseIsPressed) {
    // Extra particles when mouse is pressed
    for (let i = 0; i < 3; i++) {
      particles.push(new Particle(mouseX, mouseY));
    }
  } else {
    particles.push(new Particle(mouseX, mouseY));
  }

  //  display all particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isDone()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.size = random(30, 80); // Big circles!
    this.speed = createVector(random(-1, 1), random(-1, 1));
    this.hue = random(270, 330); // Purple-pink range
    this.alpha = 100;
    this.life = 100;
  }

  update() {
    this.pos.add(this.speed);
    this.life -= 1.5;
    this.size *= 0.98; // 
    this.alpha = map(this.life, 100, 0, 100, 0); // 
  }

  display() {
    fill(this.hue, 80, 90, this.alpha/100);
    ellipse(this.pos.x, this.pos.y, this.size);
    
    // Add glow effect 
    fill(this.hue, 60, 100, this.alpha/200);
    ellipse(this.pos.x, this.pos.y, this.size * 1.5);
  }

  isDone() {
    return this.life <= 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}