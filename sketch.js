  var garden,rabbit,edges;

  var gardenImg,rabbitImg;

  var apple,appleImg;

  var leaf,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");

  leafImg = loadImage("orangeLeaf.png")

}

  function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);
  garden.x = garden.width/2;
 
  //rabbit
  rabbit = createSprite(180,340,30,30);
  rabbit.addImage(rabbitImg);
 rabbit.scale = 0.09;

  var rand =  Math.round(random(1,100))

}


  function draw() {
    background(0);
  
    edges= createEdgeSprites();
    rabbit.collide(edges);

    rabbit.x = World.mouseX;


    spawnApples();


    spawnLeaves();


    drawSprites();
}


function spawnApples(){
  // write your code here 
 if (frameCount % 80 === 0 ){
   apple = createSprite (random(50,350),40,10,10);
   apple.addImage (appleImg);
   apple.x = Math.round(random(50,350));
   apple.velocityY = 4;
  apple.scale = 0.1;
 }
 
   
 }
 function spawnLeaves(){
  // write your code here 
 if (frameCount % 80 === 0 ){
   leaf = createSprite (random(70,400),40,10,10);
   leaf.addImage (leafImg);
   leaf.x = Math.round(random(70,400));
   leaf.velocityY = 4;
   leaf.scale = 0.1;
 }
  
 }


 