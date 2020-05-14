var can1;
var can2;
var back1;
var back2;
var play;
var brush;
var colour;
var eraser;
var gameState;

function setup(){
can1 = createCanvas(1200,400);

    play = createSprite(600,200,20,20);
    brush = createSprite(100,100,20,20);
    brush.visible = false;
    colour = createSprite(100,200,20,20);
    colour.visible = false;
    eraser = createSprite(100,300,20,20);
    eraser.visible = false;

    gameState = "play";


}

function draw(){
    back1 = background("white");
    
drawSprites();
}


function playGame(){
if(gameState===play){
    
    textSize(40);
    text("WELCOME TO DRAW ANYTHING! PRESS PLAY TO START",10,100);
}

}


function gamePlay(){
if( mousePressed(play)){
   
    brush.visible = true;
    colour.visible = true;
    eraser.visible = true;
    play.visible = false;
    gameState="start";

}



}


/*function brushStart(){
    if(mousePressed(brush)){

    }
}*/


