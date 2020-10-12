
var wall1,wall2,wall3,wall4,thickness

var bullet1,bullet2,bullet3,bullet4,weight1,weight2,weight3,weight4,speed1,speed2,speed3,speed4


function preload(){

   thickness1=random(22,83);
   thickness2=random(22,83);
   thickness3=random(22,83);
   thickness4=random(22,83);
  speed1=random(223,321);
  speed2=random(223,321);
  speed3=random(223,321);
  speed4=random(223,321);
   weight1=random(30,52);
   weight2=random(30,52);
   weight3=random(30,52);
   weight4=random(30,52);
  }
  
  function setup() {
  
    createCanvas(1500,400);

    bullet1=createSprite(50, 50, 40, 20);
    bullet1.shapeColor="blue"
    bullet1.velocityX=speed1
    bullet2=createSprite(50, 150, 40, 20);
    bullet2.shapeColor="blue"
    bullet2.velocityX=speed2
    bullet3=createSprite(50, 250, 40, 20);
    bullet3.shapeColor="blue"
    bullet3.velocityX=speed3
    bullet4=createSprite(50, 350, 40, 20);
    bullet4.shapeColor="blue"
    bullet4.velocityX=speed4
    wall1=createSprite(1200,50,thickness,50);
    wall2=createSprite(1200,150,thickness,50);
    wall3=createSprite(1200,250,thickness,50);
    wall4=createSprite(1200,350,thickness,50);
  }
  
  function draw() {
    background(0); 

    
  if (wall1.x-bullet1.x<(bullet1.width+wall1.width)/2){
    bullet1.velocityX=0;
    var damage=0.5*weight1*speed1*speed1/(thickness1*thickness1*thickness1);
if(damage>10){
  wall1.shapeColor="red"
}

if(damage<10){
  wall1.shapeColor="green"
}

  }
  if (wall2.x-bullet2.x<(bullet2.width+wall2.width)/2){
    bullet2.velocityX=0;
    var damage=0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2);
if(damage>10){
  wall2.shapeColor="red"
}

if(damage<10){
  wall2.shapeColor="green"
}

  }
  if (wall3.x-bullet3.x<(bullet3.width+wall3.width)/2){
    bullet3.velocityX=0;
    var damage=0.5*weight3*speed3*speed3/(thickness3*thickness3*thickness3);
if(damage>10){
  wall3.shapeColor="red"
}

if(damage<10){
  wall3.shapeColor="green"
}
if (wall4.x-bullet4.x<(bullet4.width+wall4.width)/2){
  bullet4.velocityX=0;
  var damage=0.5*weight4*speed4*speed4/(thickness4*thickness4*thickness4);
if(damage>10){
wall4.shapeColor="red"
}

if(damage<10){
wall4.shapeColor="green"
}

}

  }
    drawSprites();
  }