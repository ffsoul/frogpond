let speech = "welcome!";
let speech2 = "AAAAAAHHHHHUGUHGH";
let circleHover = false;
var cx = 110;
var cy = 115;
var cx1 = 240;
var cy1 = 80;
var cx2 = 200;
var cy2 = 40;
var cr = 13;
var speed = 5;
let counter = 0; // Variable to count number of frames
let counterSpeed = 0.5;
let pause = true;

let myColour, myColour2, myColour3; //Keep track of our random colour.


function windowResized() {
  resizeCanvas
}

function setup() {
  colorMode(HSB, 100);
  canvas = createCanvas(350,350);

  canvas.parent("autofroggy");

  // canvas.position(100,100);

  myColour = color(random(100), random(10, 25), random(220, 255));
  frameRate(30);

  myColour2 = color(random(0, 100), random(30, 70), random(100, 150));
  frameRate(30);

  myColour3 = color(random(150), random(150), random(150));
  frameRate(30);
}

function draw() {
  background(myColour);

  //when the counter reaches 30,
  if (counter > 19) {
    //switch the colour to a new random colour:
    myColour = color(random(100), random(10, 25), random(220, 255));
    myColour2 = color(random(0, 100), random(30, 70), random(100, 150));
    myColour3 = color(random(0, 100), random(30, 70), random(50, 80));

    //and reset the counter to zero:
    counter = 0;
  }

  //At the end of each frame increase the counter
  counter = counter + counterSpeed;

  //body
  stroke(myColour);
  strokeWeight(4);
  fill(myColour2);
  beginShape();
  vertex(80, 130);
  bezierVertex(80, 80, 140, 100, 200, 75);
  bezierVertex(240, 50, 240, 50, 300, 75);
  bezierVertex(340, 100, 360, 100, 410, 200);
  vertex(410, 410);
  vertex(80, 410);
  bezierVertex(50, 360, 50, 340, 80, 250);
  bezierVertex(40, 220, 40, 220, 20, 195);
  vertex(30, 190);
  bezierVertex(40, 160, 60, 160, 80, 130);
  endShape();

  //mouth
  noFill();
  stroke(myColour3);
  beginShape();
  vertex(25, 196);
  bezierVertex(160, 140, 200, 135, 300, 120);
  endShape();

  //shading
  noStroke();
  fill(myColour3);
  beginShape();
  vertex(410, 200);
  vertex(410, 410);
  vertex(80, 410);
  bezierVertex(300, 360, 360, 280, 410, 200);
  endShape();

  //eyes
  if (overCircle(cx, cy, cr)) {
    cx = cx + random(-speed, speed);
    cy = cy + random(-speed, speed);
  }

  ellipse(cx, cy, cr * 2, cr * 1.2);

  if (overCircle(cx1, cy1, cr)) {
    cx1 = cx1 + random(-speed, speed);
    cy1 = cy1 + random(-speed, speed);
  }

  if (overCircle(cx2, cy2, cr)) {
    cx2 = cx2 + random(-speed, speed);
    cy2 = cy2 + random(-speed, speed);
  }

  ellipse(cx1, cy1, cr * 2.5, cr * 1.5);

  textSize(15);
  textAlign(CENTER);

  textSize(32);
  if (!circleHover) {
    text(speech, cx2, cy2);
  } else {
    text(speech2, cx2, cy2);
  }

  if (!pause) {
    counterSpeed = 0;
  } else {
  }

  fill(myColour);
  textSize(15);
  text("rub my tummy", 140, 340);
}

function overCircle(x, y, r) {
  if (dist(200, 250, mouseX, mouseY) < r * 6) {
    circleHover = true;
    counterSpeed = 2;
    return true;
  } else {
    circleHover = false;
    counterSpeed = 0.5;

    cx = 110;
    cy = 115;
    cx1 = 240;
    cy1 = 80;
    cx2 = 175;
    cy2 = 40;

    return false;
  }
}

function mouseClicked(x, y, r) {
  if (dist(mouseX, mouseY, cx, cy) < 13) {
    pause = !pause;
  }

  // if (dist(mouseX, mouseY, cx1, cy1) < 13) {
  //   save("myFroggy.png");
  // }
}

// function keyTyped() {
//   if (key === "s") {
//     save("froggy.png");
//   }
// }
