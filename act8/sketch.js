let mic;
let fft;
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 150, 15);
  
  // Get microphone input
  mic = new p5.AudioIn();
  mic.start();
  
  // 
  fft = new p5.FFT(0.8, 64);
  fft.setInput(mic);
  
  noStroke();  N
}

function draw() {
  background(6, 8); // S
  
  // Analyze the audio frequencies
  let spectrum = fft.analyze();
  
  // Create particles based on audio energy
  if (frameCount % 2 === 0) { // Create particles every 2 frames
    let energy = fft.getEnergy(20, 200); // Get bass/mid energy
    if (energy > 50) {
      for (let i = 0; i < energy/20; i++) {
        particles.push(new Particle(energy));
      }
    }
  }
  
  //  display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update(spectrum);
    particles[i].display();
    if (particles[i].isDone()) {
      particles.splice(i, 1);
    }
  }
  
  // Visualize frequency spectrum 
  drawFrequencyBars(spectrum);
}

class Particle {
  constructor(energy) {
    this.pos = createVector(
      random(width),
      random(height)
    );
    this.size = energy/2 + random(10, 40);
    this.speed = createVector(
      random(-1, 1),
      random(-1, 1)
    );
    this.hue = (frameCount + random(60)) % 360;
    this.life = 100 + random(50);
    this.energy = energy;
  }
  
  update(spectrum) {
    this.pos.add(this.speed);
    this.life -= 1;
    this.size = max(5, this.size * 0.96);
    
    // React to different frequencies
    let midEnergy = fft.getEnergy(200, 1000);
    if (midEnergy > 60) {
      this.hue = (this.hue + 2) % 360;
    }
  }
  
  display() {
    let alpha = map(this.life, 100, 0, 0.8, 0);
    fill(this.hue, 250, 90, alpha);
    ellipse(this.pos.x, this.pos.y, this.size);
    
    // Glow effect
    fill(this.hue, 60, 100, alpha/3);
    ellipse(this.pos.x, this.pos.y, this.size * 1.5);
  }
  
  isDone() {
    return this.life <= 0;
  }
}

function drawFrequencyBars(spectrum) {
  let barWidth = width / spectrum.length;
  for (let i = 0; i < spectrum.length; i++) {
    let hue = map(i, 0, spectrum.length, 200, 400) % 360;
    let energy = spectrum[i];
    let barHeight = map(energy, 0, 255, 0, height/2);
    
    fill(hue, 0, 150, 10);
    rect(
      i * barWidth, 
      height - barHeight, 
      barWidth, 
      barHeight
    );
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  // Help users enable audio in browsers
  userStartAudio();
}