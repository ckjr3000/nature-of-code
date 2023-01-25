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
    let choice = floor(random(0, 4));
    switch (choice) {
      case 0:
        this.posX++;
        break;
      case 1:
        this.posX--;
        break;
      case 2:
        this.posY++;
        break;
      case 3:
        this.posY--;
        break;
    }
  }
}

let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker(width / 2, height / 2);
}

function draw() {
  background(220);
  walker.show();
  walker.step();
}
