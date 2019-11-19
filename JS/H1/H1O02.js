function setup() {
  canvas = createCanvas(450,450);
  background('orange');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('darkred');
  triangle(225,0,0,450,450,450);
  fill('pink');
  triangle(0,225,450,450,450,0);
  fill('purple');
  triangle(0,450,450,225,0,0);
}
