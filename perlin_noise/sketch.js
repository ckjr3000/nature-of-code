let inc = 0.02;
let start = 0;

function setup() {
  createCanvas(400, 400);
  //background(220);
}

function draw() {
  background(220);

  stroke(0);
  noFill();
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x++) {
    y = noise(xoff) * height;
    vertex(x, y);
    xoff += inc;
  }
  endShape();
  start += inc;
  //noLoop();
}
