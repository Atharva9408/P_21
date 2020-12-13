var bullet,wall;
var speed,weight;
var damage;
var thickness;

function setup()
{
createCanvas(1600,400);
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

damage=0.5*weight*speed*speed/thickness*thickness*thickness;

bullet=createSprite(50,200,80,20);
bullet.velocityX=speed;

wall=createSprite(1200,200,thickness,200);
wall.shapeColor=(80,80,80);

}
function draw()
{
  background("black");

  collide();
  drawSprites();
}

function collide(){
   if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    wall.velocityX=0;
    
  if (damage>10){
    wall.shapeColor="red"
  }
 
  if (damage<10){
    wall.shapeColor="green";
  }
  }
}

