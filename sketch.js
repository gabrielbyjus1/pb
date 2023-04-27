var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  function createApples() {
apleimg= createSprite(random(50, 350), 40, 10, 10);
apleimg.addImage(apleImg);
apleimg.scale= 0.07;
apleimg.velocityY = 3;
apleimg.lifetime = 150; 
  }
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 3) {
     createApples();
  
    createOrange();
  }else { 
    createRed();
  }
  }
  } 



  function createOrange() {
 orangeL= createSprite(random(50, 350), 40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale= 0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150; 
}
function createRed() {
redL= createSprite(random(50, 350), 40, 10, 10);
redL.addImage(redImg);
redL.scale= 0.06;
redL.velocityY = 3;
redL.lifetime = 150; 
    }



