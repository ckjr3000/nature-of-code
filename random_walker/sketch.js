class Walker {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.posX, this.posY, 25, 25);
  }

  step() {
    let r = random(1);
    if (r < 0.4) {
      // 40% chance of moving to the right
      this.posX++;
    } else if (r < 0.6) {
      // 20% chance moving left
      this.posX--;
    } else if (r < 0.8) {
      // 20% chance of moving down
      this.posY++;
    } else {
      // 20% chance of moving up
      this.posY--;
    }
  }
}

let walker;

function setup() {
  createCanvas(400, 400);
  background(220);
  walker = new Walker(width / 2, height / 2);
}

function draw() {
  walker.step();
  walker.show();
}
