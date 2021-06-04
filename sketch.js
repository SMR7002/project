var backgroundImg;
function preload() {
  backgroundImg = loadImage("snow1.jpg");
  spriteImg = loadImage("snow5.webp")
}

function setup() {
  createCanvas(800,400);

  snow1 = new Snow (200,200)

}

function draw() {
  background(backgroundImg);  
  snow1.display();
  drawSprites();
}