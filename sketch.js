var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(200, 200, 50, 80);
 fixedRect.shapeColor = "green";
 movingRect = createSprite(200,400,80,30);
 movingRect.shapeColor = "green";
 movingRect.debug=true;
 fixedRect.debug=true;

 fixedRect1 = createSprite(1000,100,50,80)
 fixedRect1.shapeColor = "green";
 movingRect1 = createSprite(1000,800,80,30);
 movingRect1.shapeColor = "green";
 movingRect1.velocityY=-5;
 fixedRect1.velocityY=5;
}

function draw() {
  background("black");  

movingRect.x=mouseX;
movingRect.y=mouseY;

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
  && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}


if(movingRect1.x-fixedRect1.x<fixedRect1.width/2+movingRect1.width/2
  && fixedRect1.x-movingRect1.x<fixedRect1.width/2+movingRect1.width/2){
  movingRect1.velocityX=movingRect1.velocityX*(-1);
  fixedRect1.velocityX=fixedRect1.velocityX*(-1)
}

if(movingRect1.y-fixedRect1.y<fixedRect1.height/2+movingRect1.height/2
  && fixedRect1.y-movingRect1.y<fixedRect1.height/2+movingRect1.height/2){
  movingRect1.velocityY=movingRect1.velocityY*(-1);
  fixedRect1.velocityY=fixedRect1.velocityY*(-1)
}

  drawSprites();
}