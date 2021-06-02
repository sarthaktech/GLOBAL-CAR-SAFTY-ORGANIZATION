var car,wall
var speed,weight


function setup() {

  createCanvas(1600,400);
  speed=random(50,100)
  weight=random(90,300)
  car=createSprite(100, 200, 30, 30);
  wall=createSprite(1000,200,40,height/2);
}

function draw() {
  background("black");  

  car.velocityX=speed;
  if(wall.x-car.x<car.width+wall.width){
    car.velocityX=0
   var deformation=0.5*weight*speed*speed/22500   
    if(deformation>180){
      car.shapeColor=("red")
      wall.shapeColor=("red")
    }
    if(deformation<180&&deformation>100){
      car.shapeColor=("yellow")
      wall.shapeColor=("yellow")
    }
    if(deformation<100){
      car.shapeColor=("green")
      wall.shapeColor=("green")
    }

  }

 









  drawSprites();
}