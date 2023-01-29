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
    //50% chance of moving in direction of mouse
    let r = random(1);
    if (r < 0.5) {
      if (mouseX > width / 2 && mouseY < height / 2) {
        // mouse is top right
        this.posX++;
        this.posY--;
      } else if (mouseX > width / 2 && mouseY > height / 2) {
        // mouse is bottom right
        this.posX++;
        this.posY++;
      } else if (mouseX < width / 2 && mouseY < height / 2) {
        // mouse is top left
        this.posX--;
        this.posY--;
      } else {
        // mouse is bottom left
        this.posX--;
        this.posY++;
      }
    } else {
      this.posX += random(-1, 1);
      this.posY += random(-1, 1);
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
