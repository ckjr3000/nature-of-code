let xoff1 = 0;
let xoff2 = 10000;

function setup() {
  createCanvas(400, 400);
  //background(220);
}

function draw() {
  background(220);

  stroke(0);
  noFill();
  beginShape();
  for (let x = 0; x < width; x++) {
    vertex(x, map(noise(xoff2), 0, 1, 0, height));
    xoff2 += 0.02;
  }
  endShape();

  noLoop();
}
