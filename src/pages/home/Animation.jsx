// Sundanese alphabet characters
const sundaneseChars = [
  'ᮃ', 'ᮆ', 'ᮈ', 'ᮉ', 'ᮊ', 'ᮌ', 'ᮍ', 'ᮎ', 'ᮏ',
  'ᮒ', 'ᮓ', 'ᮔ', 'ᮕ', 'ᮘ', 'ᮙ', 'ᮚ', 'ᮛ', 'ᮜ',
  'ᮝ', 'ᮞ', 'ᮠ', 'ᮊ᮪', 'ᮌ᮪', 'ᮎ᮪', 'ᮏ᮪', 'ᮓ᮪', 'ᮔ᮪',
  'ᮕ᮪', 'ᮘ᮪', 'ᮙ᮪', 'ᮚ᮪', 'ᮛ᮪', 'ᮜ᮪', 'ᮝ᮪', 'ᮞ᮪', 'ᮠ᮪'
];

// Canvas setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas to full window size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Initial resize
resizeCanvas();

// Handle window resize
window.addEventListener('resize', resizeCanvas);

// Character class with varied movement patterns
class SundaneseChar {
  constructor() {
    this.char = sundaneseChars[Math.floor(Math.random() * sundaneseChars.length)];
    this.size = Math.random() * 30 + 20;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    
    // Different movement patterns
    this.type = Math.floor(Math.random() * 4);
    this.speed = Math.random() * 2 + 0.5;
    this.angle = Math.random() * Math.PI * 2;
    this.amplitude = Math.random() * 100 + 50;
    this.frequency = Math.random() * 0.02 + 0.01;
    this.timeOffset = Math.random() * 100;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.rotation = 0;
  }

  update(t) {
    this.timeOffset += 0.1;
    
    switch(this.type) {
      case 0: // Sine wave
        this.x += this.speed;
        this.y = canvas.height/2 + Math.sin(this.x * this.frequency) * this.amplitude;
        if (this.x > canvas.width) this.x = 0;
        break;
        
      case 1: // Circular
        this.angle += 0.01;
        this.x = canvas.width/2 + Math.cos(this.angle) * this.amplitude;
        this.y = canvas.height/2 + Math.sin(this.angle) * this.amplitude;
        break;
        
      case 2: // Diagonal with bounce
        this.x += this.speed;
        this.y += this.speed;
        if (this.x > canvas.width || this.x < 0) this.speed *= -1;
        if (this.y > canvas.height || this.y < 0) this.speed *= -1;
        break;
        
      case 3: // Lissajous curve
        this.x = canvas.width/2 + Math.sin(this.timeOffset * this.frequency) * this.amplitude;
        this.y = canvas.height/2 + Math.sin(this.timeOffset * this.frequency * 1.5) * this.amplitude;
        break;
    }
    
    this.rotation += this.rotationSpeed;
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.font = `${this.size}px sans-serif`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.char, 0, 0);
    ctx.restore();
  }
}

// Create characters with different movement patterns
const characters = [];
for (let i = 0; i < 25; i++) {
  characters.push(new SundaneseChar());
}

// Animation function
function animate(t) {
  requestAnimationFrame(animate);
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw characters
  characters.forEach(char => {
    char.update(t);
    char.draw();
  });
}

// Start animation
animate();
