var wall, thickness;
var bullet, speed, weight;

function setup()
{
  createCanvas();
 
  thickness = random(22,83);
 weight = random(30,52);
 speed = random(223,321);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet = createSprite(20,200,30,10);
  bullet.velocityX = 20;
}

function draw()
{
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var deformation  = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(deformation > 10){
      bullet.shapeColor = 'red';
    }
    if(deformation < 10){
      bullet.shapeColor = 'green';
    }
  }
  hasCollided();
  drawSprites();
}

function hasCollided(bullet,wall)
{
bullRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if (bulletRightEdge >= wallLeftEdge)
{
return true;
}
return false;
}