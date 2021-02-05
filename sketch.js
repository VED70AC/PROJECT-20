var cat,catImg;
var mouse,mouseImg;
var garden,gardenImg;
function preload() {
    //load the images here
    catImg=loadAnimation("cat1.png,cat2.png,cat3.png,cat4.png,");
}mouseImg=loadAnimation("mouse1.png,mouse2.png,mouse3.png,mouse4.png");
gardenImg=loadImage("garden.png");
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(700,700,100,100);
cat.addImage("cat",catImg);
mouse=createSprite(300,300,50,50);
mouse.addImage("mouse",mouseImg);
}

function draw() {

    background(garden.png);
    Text(mouseX + ',' + mouseY,10,45);
    //Write condition here to evalute if tom and jerry collide
if(cat.isTouching(mouse)){
    cat.changeAnimation("cat2.png");
    mouse.changeAnimation("mouse1.png");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === left_Arrow){
      cat.velocityX=-5;
      cat.addAnimation("cat2.png");
      cat.changeAnimation("cat2.png");
      mouse.addAnimation("mouse1.png");
      mouse.changeAnimation("mouse1.png");
  }


}
