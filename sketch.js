var car, wall;
var speed, weight;

function setup() {
  createCanvas(1400, 400);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = 10;
  wall = createSprite(1200, 200, 30, 250);
  speed = random(55, 90);
  weight = random(400, 1500);
}

function draw() {
  background("black");
  if (wall.x - car.x < wall.width/2 + car.width/2)  
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if (deformation > 180) 
    {
       car.shapeColor = "red";
    }
    if (deformation < 100) 
    {
       car.shapeColor = "green";
    }
    if (deformation > 100 && deformation < 180) 
    {
       car.shapeColor = "yellow";
    }
    
  }
  drawSprites();
}