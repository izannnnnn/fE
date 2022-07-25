var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
   pathimg =loadImage("path.png")
   boyimg =loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png")
 
}

function setup(){
  
  createCanvas(400,400);
 path= createSprite(200,200,400,300);
 path.addImage(pathimg);
 path.velocityY=4;
path.scale=1.2;



 boy= createSprite(180,340,100,100)
 boy.addAnimation("running",boyimg)
boy.scale=0.08;
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
