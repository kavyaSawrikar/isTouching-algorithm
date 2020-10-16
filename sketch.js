var movingRect, fixedRect;
var trex, obstacle;
var object1, object2;

function setup() {
  createCanvas(800,600);

  fixedRect = createSprite(300, 200, 50, 50)
  movingRect = createSprite(400, 200, 100, 100);

  trex = createSprite(200,100,50,50);
  obstacle= createSprite(300,500,50,80);
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //function call inside if
  if(isTouching(movingRect, fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }

  if(isTouching(trex,obstacle)){
    trex.shapeColor="green";
    obstacle.shapeColor="green"
  }else{
    trex.shapeColor="lightgreen";
    obstacle.shapeColor="lightgreen"
  }

  obstacle.y=mouseY;
  obstacle.x=mouseX;


  drawSprites();
}

