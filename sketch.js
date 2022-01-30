var path;
var pathImage

function preload() {
  

  //pre-load images
  pathImage = loadImage("path.png");
  jake_running = loadImage("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  //moving ground
  path=createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY=4
  path.scale=1.2

  //creating jake()
  jake=createSprite(50,400,20,60)
  jake.addAnimation("running",jake_running)
  jake.scale=2.1
  jake.Y=50
}

function draw() {
  background(0);
   
  
  
   //code to resent the path
   if(path.Y > 400){
   path.Y = height/2;
   }
 

}
