

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  background('silver');
  noLoop();
}

function draw() {
  noStroke();
  for( var n = 0; n <5 ; n++) {
      tekenCirkel();
      translate(70,0);
  }
  

}
function tekenCirkel() {
    push();
    fill('dodgerblue');
    ellipse(90,200,70);
    pop();
}