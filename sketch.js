var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var ground;

var persons, person1, person2;
var person1_Img, person2_Img;

function preload(){
  back_img = loadImage("Images/Background Image.jpg");
  ground = loadImage("images/ground2.jpg");
  person1_Img = loadAnimation("images/girl1.png", "images/girl2.png");
  //person2_Img = loadAnimation("images/girl11.png", "images/girl22.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(gameState === 0){
    background(back_img);
  }

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
