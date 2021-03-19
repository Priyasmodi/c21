var fixedrect, movingrec, o1;

function setup() {
  createCanvas(800,400);
  fixedrect= createSprite(400, 200, 60, 60);
  movingrect= createSprite(600, 200, 40, 40);
  o1= createSprite(700, 300, 40, 40);

  fixedrect.shapeColor ="green";
  movingrect.shapeColor ="green";
  o1.shapeColor ="green";
}

function draw() {
  background(255,255,255); 

  movingrect.x= World.mouseX;
  movingrect.y= World.mouseY;

  if(isTouching(movingrect,fixedrect))
  {
    fixedrect.shapeColor ="red";
  movingrect.shapeColor ="red";

  }
  
  else if(isTouching(movingrect,o1))
  {
    movingrect.shapeColor ="red";
  o1.shapeColor ="red";

  }
  else{

    fixedrect.shapeColor ="green";
  movingrect.shapeColor ="green";
  o1.shapeColor= "green";
  }

  console.log(movingrect.x-fixedrect.x)
  console.log(fixedrect.width/2+ movingrect.width/2)



  drawSprites();
}




