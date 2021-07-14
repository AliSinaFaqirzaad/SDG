var ballImg;
var player1Img ,player2Img;
var soccerGroundImg ,welcomingImg;


function preload(){
    ballImg = loadImage("images/ball.png");
    player1Img = loadImage("images/player1.png");
    player2Img = loadImage("images/player2.png");
    soccerGroundImg = loadImage("images/soccerGround.jpeg");
    welcomingImg = loadImage("images/welcoming.jpeg");
}
function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    

    ball = createSprite(723,450,30,30);
    ball.addImage(ballImg);
    ball.scale = 0.1

    player1 = createSprite(1000,455,30,30);
    player1.addImage(player1Img);
    player1.scale = 0.2

    player2 = createSprite(400,454,30,30);
    player2.addImage(player2Img);
    player2.scale = 0.3
    player2.velocityY =10



}
function draw(){
    background(soccerGroundImg);

console.log(mouseX,mouseY);

if(keyDown ("UP_ARROW")){
    player1.y-=4
}
if(keyDown("DOWN_ARROW")){
    player1.y+=4
}
if(keyDown("RIGHT_ARROW")){
    player1.x+=4
}
if(keyDown("LEFT_ARROW")){
    player1.x-=4
}



    drawSprites();
}