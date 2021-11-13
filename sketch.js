var background_img;

function preload(){
    background_image = loadImage("mydp2.jpg");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    background_img = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    background_img.addImage("back_ground",background_image);
    background_img.scale=1.7
}

function draw(){
    drawSprites();
    textSize(60);
    fill("black");
    text("Thankyou for using my website/app",windowWidth/6,windowHeight/4);
    text("I will try to reach you the earliest and help you",windowWidth/14,windowHeight/2.8);
}