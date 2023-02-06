class Walker {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  show() {
    stroke(0);
    fill(255);
    ellipse(this.posX, this.posY, 25, 25);
  }

  step() {
    // Vary stepsize based on probability of a size is equal to the size itself
    let r1 = random(1);
    let p = r1;
    let r2 = random(1);

    let stepSize = 0.5;

    if (r2 < p) {
      stepSize = r2 * 10;
    }
    this.posX += random(-stepSize, stepSize);
    this.posY += random(-stepSize, stepSize);
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
