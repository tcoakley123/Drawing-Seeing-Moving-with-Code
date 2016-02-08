var angleVel=0.07; //sets how fast we are going around the circles
var angle=0; //angle variable
var offset = 2; //offsets to center point
var r = 1000; //r of oscillation

function setup(){
  createCanvas(400,400);
  background(255);
  smooth();
}

function draw(){
  stroke(100);
  noFill(0);
  rect(0,0,399,399); //edge rectangle

  fill(0);
  //generate x and y of each ellipse. You can also do this using offset and scalar rather than map.
  var x = offset + cos(angle) * r;
  var y = offset + sin(angle) * r;

  strokeWeight(1);
  stroke(237,34,93);
  fill(0,50);
  ellipse(x,y,10,10); //draw the ball at each value of x
  angle = angle+ angleVel; //increase the angle by the angular velocity (this will change the y for each ball)
}
