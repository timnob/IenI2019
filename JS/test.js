function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();
  fill('deepskyblue');
  ellipse(225,225,300);
  fill('aquamarine');
  rect(125,125,200,200);
  fill('skyblue');
  rect(135,135,175,175);
  fill('blue');
  rect(150,150,150,150)
}