var level1,level2,level3;
var Scooter1,PickUpTruck,superBike,superCar1;
var barricading,Cone1,finishLine1,Mud1,fuel,girl;
var ground;
var obstaclesGroup;
var gameState = 0;

//loading the images
function preload(){

    // background
    bg1 = loadImage("images/background.jpg");

   
    // levels a.k.a roads of different kinds
    Level1 = loadImage("images/roadlevel1Image.png");
    Level2 = loadImage("images/roadLevel2Image.png");
    Level3 = loadImage("images/roadLevel3Image.png");
    Level4 = loadImage("images/roadLevel4Image.png");

    // vehicles (levels)
    Scooter1 = loadImage("images/scooterImage.png");//level1
    PickUpTruck1 = loadImage("images/pickuptruckImage.png")//level2
    superBike1 = loadImage("images/superBikeImage.png")
    superCar1 = loadImage("images/superCarImage.png");

    //obstacles
    barricading1 = loadImage("images/barricaddingImage.png");
    Cone1 = loadImage("images/coneImage.png");
    girl1 = loadImage("images/girlImage.png");
    Mud1 = loadImage("images/mudImage.png");
    
    // finsih line and fuel recharge 
    finsihLine1 = loadImage("images/finsihlineImage.png");
    fuel1 = loadImage("images/petrolImage.png");
}
function setup(){
    canvas = createCanvas(2000,1200);
    
   

     ground = createSprite(1000,1200,1200,4000);
     ground.addImage(Level1);
     ground.velocityY = 5
     ground.scale=5
  
     

    car1 = createSprite(1000,600);
    car1.addImage("CarLevel1",Scooter1)
    car1.scale=0.2;

    invisibleBorder1 = createSprite(625,350,0,1200);
    invisibleBorder1.visible=false
    invisibleBorder2 = createSprite(1375,350,0,1200);
    invisibleBorder2.visible=false

    car1.bounceOff(invisibleBorder1);

    obstaclesGroup = new Group();
   
   
}
function draw(){
  background(Level1)
    
    car1.x=World.mouseX
    
    if (car1.isTouching(invisibleBorder1) && car1.isTouching(invisibleBorder2)){
      car1.collide("invisibleBorder1")
      car1.collide("invisibleBorder2")
    }
    
    if (ground.y > 1200) {
        ground.y = ground.width/2
      }
      if (gameState === 0) {


        obstaclesGroup.setVelocityXEach(0);
        car1.velocityX = 0;
        obstaclesGroup.setLifetimeEach(-1);
      }
      
    if (car1.isTouching(obstaclesGroup)) {
        gameState = 0
      }
    
      spawnObstacles();
      
drawSprites();
if (gameState === 0) {
    ground.velocityX = 0;
    stroke("red");
    textSize("18");
    fill("red");
    text("GAME OVER !! ", 250, 200);
  }
}
function spawnObstacles() {
    if (frameCount % 200 === 0) {
      Obstacle = createSprite(950,50);
      Obstacle.scale = 0.3;
      Obstacle.velocityY=6
      obstaclesGroup.add(Obstacle);
      Obstacle.lifetime = 600;
      Obstacle.x = Math.round(random(920,1300));
      var rand = Math.round(random(1, 4));
      switch (rand) {
        case 1:
          Obstacle.addImage(barricading1);
          break;
        case 2:
          Obstacle.addImage(Cone1);
          break;
        case 3:
          Obstacle.addImage(girl1)
          break;
        case 4:
          Obstacle.addImage(Mud1)
      }
    }
}

