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
    let stepX = random(-1, 1); // possible steps along x axis
    let stepY = random(-1, 1); // y axis

    this.posX += stepX;
    this.posY += stepY;
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
