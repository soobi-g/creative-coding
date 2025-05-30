let sound, fft, particles = [];

function preload() {
  sound = loadSound('Amr Diab - Tamally Maak.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 250, 300, 0);
  
  fft = new p5.FFT();
  sound.play();
  
  // Create  particles
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(150, 0.1);
  
  let spectrum = fft.analyze();
  
  // Create particles2
  if (frameCount % 3 === 0) {
    particles.push(new Particle());
  }
  
  // display 
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
  
  // Remove old particles
  particles = particles.filter(p => !p.isDone());
  
  //  frequency bars
  let barWidth = width / spectrum.length;
  for (let i = 0; i < spectrum.length; i++) {
    let h = map(spectrum[i], 0, 255, 0, height/2);
    fill(i * 2 % 360, 300, 0);
    rect(i * barWidth, height - h, barWidth, h);
  }
    // instruction to start music
  fill(0);
  textSize(20);
  text("Click the mouse twice to play music", 90, 40);

}

function mousePressed() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.play();
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = height;
    this.size = random(5, 20);
    this.speed = random(1, 5);
    this.color = color(random(360), 100, 100);
  }
  
  update() {
    this.y -= this.speed;
  }
  
  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
  
  isDone() {
    return this.y < 0;
  }
}