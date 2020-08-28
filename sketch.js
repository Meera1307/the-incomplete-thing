var bird,ground,obstacles,clouds,r1

function preload(){
  birdie = loadImage("Bird.jpg");
  //Obimg = loadImage("ob.png");
  Ob1img = loadImage("ob1.png");
  Ob2img = loadImage("ob2.png");
  Ob3img = loadImage("ob3.png");
  g = loadImage("ground.png");
}

function setup() {
r1 = Math.round(random(50,100));

  createCanvas(1536,721);
 bird =  createSprite(400, 200, 50, 50);
 bird.addImage(birdie);


 ground = createSprite(620,850,1536,20);
 ground.addImage(g);
 ground.velocityX = -2;
 ground.scale = 6;


}

function draw() {
  background("black");
  Obstacle();  
if(keyDown(UP_ARROW)){


  bird.velocityY = -3
}

  if (ground.x < 60){
    ground.x = ground.width/2;
  }
  console.log(ground.x);


bird.velocityY = bird.velocityY+0.05

  drawSprites();
  
}
function Obstacle(){

  if(World.frameCount % r1 === 0){
  var obstacles = createSprite(1000,600,100,10);
  obstacles.velocityX = -3
  var rand =Math.round( random(1,3));
  //obstacles.addImage(ob+);
 switch(rand){
   case 1:obstacles.addImage(Ob1img);
   break;
   case 2:obstacles.addImage(Ob2img);
   break;
   case 3:obstacles.addImage(Ob3img);
   break;
 }
  //obstacles.height = rand;
  obstacles.scale = 0.5;
  }
}