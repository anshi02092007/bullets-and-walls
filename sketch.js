var bullet, wall
var speed , weight , thickness
function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  car=createSprite(50,200,20,50);
car.velocityX=speed;
car.shapeColor="white"
thickness.random(23,80);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor="grey"
}




function draw() {
  if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22500;

  if(deformation>180)
{
  car.shapeColor=color(255,0,0);
}
if (deformation<180 && deformation>100)
{ 
  car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}
}
  background(255,255,255);  
  drawSprites();
}

function hasCollided(bullet , wall)
{
  bulletRight.edge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;

  }
  return false;
}
if (hasCollided()bullet,wall)
{}
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if damage>10)