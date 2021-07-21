var weights = [30,40,50,60,70];
var sprite = createSprite(200,200,30,30);

console.log (weights [0])
function setup() {
  createCanvas(1600,1200);
}

function draw() 
{
  drawSprites();
  background("yellow");
  average();

if (keyIsDown(DOWN_ARROW)){

  background("red")
}

if (keyIsDown(UP_ARROW)){

  background("green")
}

if (keyIsDown(LEFT_ARROW)){

  background("blue")
}

if (keyIsDown(RIGHT_ARROW)){

  background("orange")
}

}

function average()
{

var sum = weights [0] + weights [1] + weights [2] + weights [3] + weights [4];

var average = sum/5

console.log (average);

}



