var zenia, deformation, wall1, awnser;
function setup() {
  createCanvas(800,400);
  zenia=createSprite(200, 200, 50, 50);
  wall1 = createSprite(600, 200, 25, 5000);
  zenia.speed=random(30,95);
  zenia.weight=random(400,1500);
  zenia.velocityX=zenia.speed;
}

function draw() {
  console.log(zenia.speed);
  background(255,255,255);
  if (zenia.collide(wall1)){
    deformation();
  }
  if (zenia.awnser>=181) {
      zenia.shapeColor="red"
  } 
  if (zenia.awnser<=180 && zenia.awnser<=80) {
      zenia.shapeColor="yellow"
  } 
  else {
    zenia.shapeColor="green"
  }
  drawSprites();
}
function deformation(){
  zenia.deformation=(1/2*zenia.weight*zenia.speed*zenia.speed)/22500
  console.log("HI");
  zenia.awnser=zenia.deformation
}