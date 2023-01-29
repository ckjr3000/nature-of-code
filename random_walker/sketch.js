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
    let stepSizes = [1, 2, 2, 3, 3, 3, 4, 4, 5];

    let stepSize = floor(random(stepSizes.length));

    let stepX = random(-stepSize, stepSize); // possible steps along x axis
    let stepY = random(-stepSize, stepSize); // y axis

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
