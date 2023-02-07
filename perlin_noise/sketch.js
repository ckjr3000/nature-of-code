let inc = 0.02;
let start = 0;

function setup() {
  createCanvas(200, 200);
  noiseDetail(16);
  //background(220);
}

function draw() {
  loadPixels();
  background(220);
  let yoff = start;

  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      //let r = random(255);
      let n = noise(xoff, yoff) * 255;
      pixels[index + 0] = n;
      pixels[index + 1] = n;
      pixels[index + 2] = n;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
  start += inc;
}
