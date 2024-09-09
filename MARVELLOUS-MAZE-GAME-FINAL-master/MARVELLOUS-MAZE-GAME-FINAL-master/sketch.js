//creating variables of sprites
var canvas;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10,
wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21,
wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32;

var back, plyer, bx;

var gameState;

var bound1, bound2, bound3, bound4;

var box;

var coins = 0, life = 5 ;

var coin, coin2, coin3, coin4, coin5, coin6, cin;

var fruit, frut;

var bullet1, bullet2;

var player;

var moving_enemy1, moving_enemy2, moving_enemy3, moving_enemy4;

var invis_wall1, invis_wall2;

function preload(){
  plyer = loadImage("players.png");
  bg = loadImage("bg.jpg");
  bouncing_enemy = loadImage("bouncing_enemy.png");
  moving_enemy = loadImage("moving_enemy.png");
  enclosing_wall = loadImage("enclosing_wall.png");
  escape_image = loadImage("reward.png")
}

function setup() {
  //creating canvas
  canvas = createCanvas(displayWidth* (581/600), displayHeight * (546/600));
  
  //setting the gamestate to 0 
  gameState = 0;
  
  player = createSprite(displayWidth * (93/100), displayHeight * (86/100), displayWidth * (7/1000), displayHeight * (11/1000));
  player.addImage(plyer);
  player.scale = 0.1;

  bouncing_enemy1 = createSprite(displayWidth*(20/500), displayHeight * (20/500), 10, 10);
  bouncing_enemy2 = createSprite(displayWidth*(20 /500), displayHeight * (200/500), 10, 10);
  bouncing_enemy3 = createSprite(displayWidth*(20/500), displayHeight * (100/500), 10, 10);
  bouncing_enemy4 = createSprite(displayWidth*(20 /500), displayHeight * (150/500), 10, 10);

  bouncing_enemy1.addImage(bouncing_enemy);
  bouncing_enemy1.scale = 0.07;
  bouncing_enemy2.addImage(bouncing_enemy);
  bouncing_enemy2.scale = 0.07;
  bouncing_enemy3.addImage(bouncing_enemy);
  bouncing_enemy3.scale = 0.07;
  bouncing_enemy4.addImage(bouncing_enemy);
  bouncing_enemy4.scale = 0.07;
  
 
  //creating walls
  wall1 = createSprite(displayWidth*(2/5), displayHeight * (4/5), displayWidth * (8/10), displayHeight * (5/1000));
  wall2 = createSprite(displayWidth*(3/5), displayHeight * (36/50), displayWidth * (8/10), displayHeight * (5/1000));
  wall3 = createSprite(displayWidth*(1/50), displayHeight * (36/50), displayWidth * (2/10), displayHeight * (5/1000));
  wall4 = createSprite(displayWidth*(2/5), displayHeight * (32/50), displayWidth * (7/10), displayHeight * (5/1000));
  wall5 = createSprite(displayWidth*(47/50), displayHeight * (32/50), displayWidth * (3/10), displayHeight * (5/1000));
  wall6 = createSprite(5, displayHeight * (32/50), displayWidth * (1/33), displayHeight * (5/1000));
  wall7 = createSprite(displayWidth*(6/50), displayHeight * (270/500), displayWidth * (5/1000), displayHeight * (20/100));
  wall8 = createSprite(displayWidth*(1/50), displayHeight * (287/500), displayWidth * (13/100), displayHeight * (5/1000));
  wall9 = createSprite(displayWidth*(38/500), displayHeight * (255/500), displayWidth * (9/100), displayHeight * (5/1000));
  wall10 = createSprite(displayWidth*(18/500), displayHeight * (220/500), displayWidth * (3/10), displayHeight * (5/1000));
  wall11 = createSprite(displayWidth*(375/500), displayHeight * (300/500), displayWidth * (5/1000), displayHeight * (4/50));
  wall12 = createSprite(displayWidth*(395/500), displayHeight * (28/50), displayWidth * (4/50), displayHeight * (5/1000));
  wall13 = createSprite(displayWidth*(470/500), displayHeight * (28/50), displayWidth * (6/50), displayHeight * (5/1000));
  wall14 = createSprite(displayWidth*(470/500), displayHeight * (28/50), displayWidth * (6/50), displayHeight * (5/1000));
  wall15 = createSprite(displayWidth*(32/50), displayHeight * (220/500), displayWidth * (8/10), displayHeight * (5/1000));
  wall16 = createSprite(displayWidth*(175/500), displayHeight * (301/500), displayWidth * (5/1000), displayHeight * (39/500));
  wall17 = createSprite(displayWidth*(175/500), displayHeight * (239/500), displayWidth * (5/1000), displayHeight * (39/500));
  wall18 = createSprite(displayWidth*(415/500), displayHeight * (266/500), displayWidth * (5/1000), displayHeight * (28/500));
  wall19 = createSprite(displayWidth*(440/500), displayHeight * (252/500), displayWidth * (5/50), displayHeight * (5/1000));
  wall20 = createSprite(displayWidth*(375/500), displayHeight * (239/500), displayWidth * (5/1000), displayHeight * (39/500));
  wall21 = createSprite(displayWidth*(136/500), displayHeight * (263/500), displayWidth * (5/1000), displayHeight * (39/500));
  wall22 = createSprite(displayWidth*(1558/5000), displayHeight * (282/500), displayWidth * (39/500), displayHeight * (5/1000)); 
  wall23 = createSprite(displayWidth*(148/500), displayHeight * (239/500), displayWidth * (5/1000), displayHeight * (39/500));
  wall24 = createSprite(displayWidth*(162/500), displayHeight * (263/500), displayWidth * (5/1000), displayHeight * (39/500));
  wall25 = createSprite(displayWidth*(120/500), displayHeight * (261/500), displayWidth * (5/1000), displayHeight * (164/1000));
  wall26 = createSprite(displayWidth*(118/500), displayHeight * (302/500), displayWidth * (178/1000), displayHeight * (5/1000));
  wall27 = createSprite(displayWidth*(79/500), displayHeight * (280/500), displayWidth * (78/1000), displayHeight * (5/1000));
  wall28 = createSprite(displayWidth*(99/500), displayHeight * (270/500), displayWidth * (5/1000), displayHeight * (41/1000));
  wall29 = createSprite(displayWidth*(85/500), displayHeight * (260/500), displayWidth * (56/1000), displayHeight * (5/1000));
  wall30 = createSprite(displayWidth*(96/500), displayHeight * (240/500), displayWidth * (96/1000), displayHeight * (5/1000));
  wall31 = createSprite(displayWidth*(120/500), displayHeight * (123/500), displayWidth * (5/1000), displayHeight * (4/10));
  
  invis_wall1 = createSprite(displayWidth*(106/500), displayHeight * (220/500), displayWidth * (55/1000), displayHeight * (5/1000));
  invis_wall1.visible = false;

  invis_wall2 = createSprite(displayWidth*(120/500), displayHeight * (12/500), displayWidth * (5/1000), displayHeight * (44/1000));
  invis_wall2.visible = false;

  moving_enemy1 = createSprite(displayWidth*(21/50), displayHeight * (31/50), 10, 10);
  moving_enemy2 = createSprite(displayWidth*(24/50), displayHeight * (31/50), 10, 10);
  moving_enemy3 = createSprite(displayWidth*(29/50), displayHeight * (31/50), 10, 10);
  moving_enemy4 = createSprite(displayWidth*(35/50), displayHeight * (31/50), 10, 10);

  moving_enemy1.addImage(moving_enemy);
  moving_enemy1.scale = 0.2;
  moving_enemy2.addImage(moving_enemy);
  moving_enemy2.scale = 0.2;
  moving_enemy3.addImage(moving_enemy);
  moving_enemy3.scale = 0.2;
  moving_enemy4.addImage(moving_enemy);
  moving_enemy4.scale = 0.2;

  enclosing_wall1 = createSprite(displayWidth*(3517/5000), displayHeight * (2166/5000), displayWidth * (130/500), displayHeight * (1/100));
  enclosing_wall2 = createSprite(displayWidth*(2017/5000), displayHeight * (9/800), displayWidth * (130/500), displayHeight * (1/100));

  enclosing_wall1.addImage(enclosing_wall);
  enclosing_wall2.addImage(enclosing_wall);

  enclosing_wall1.scale = 0.5;
  enclosing_wall2.scale = 0.5;

  award = createSprite(displayWidth*(450/500), displayHeight * (112/500), displayWidth * (2/50), displayHeight * (2/50));
  award.addImage(escape_image);
  award.scale = 0.5;
  moving_enemy1.velocityY = 6;
  moving_enemy2.velocityY = 5;
  moving_enemy3.velocityY = 4;
  moving_enemy4.velocityY = 3;
        
  bouncing_enemy1.velocityX = 8;
  bouncing_enemy1.velocityY = 10;

  bouncing_enemy2.velocityX = -8;
  bouncing_enemy2.velocityY = 10;
  
  bouncing_enemy3.velocityX = -8;
  bouncing_enemy3.velocityY = -10;
  
  bouncing_enemy4.velocityX = 8;
  bouncing_enemy4.velocityY = -10;

  enclosing_wall1.velocityY = -3.45;
  enclosing_wall2.velocityY = 3.45;

  award.shapeColor = "red";
  //creating boundaries
  bound1 = createSprite(displayWidth/2, displayHeight*(545/600), displayWidth, 10);
  bound2 = createSprite(displayWidth/2, 0, displayWidth, 10);
  bound3 = createSprite(displayWidth * (58/60), displayHeight/2, 10, displayHeight);
  bound4 = createSprite(0, displayHeight/2, 10, displayHeight);

  enclosing_wall1.shapeColor = "green";
  enclosing_wall2.shapeColor = "green";

  bound1.shapeColor = "black";
  bound2.shapeColor = "black";
  bound3.shapeColor = "black";
  bound4.shapeColor = "black";

  wall1.shapeColor = "black";
  wall2.shapeColor = "black";
  wall3.shapeColor = "black";
  wall4.shapeColor = "black";
  wall5.shapeColor = "black";
  wall6.shapeColor = "black";
  wall7.shapeColor = "black";
  wall8.shapeColor = "black";
  wall9.shapeColor = "black";
  wall10.shapeColor = "black";
  wall11.shapeColor = "black";
  wall12.shapeColor = "black";
  wall13.shapeColor = "black";
  wall14.shapeColor = "black";
  wall15.shapeColor = "black";
  wall16.shapeColor = "black";
  wall17.shapeColor = "black";
  wall18.shapeColor = "black";
  wall19.shapeColor = "black";
  wall20.shapeColor = "black";
  wall21.shapeColor = "black";
  wall22.shapeColor = "black";
  wall23.shapeColor = "black";
  wall24.shapeColor = "black";
  wall25.shapeColor = "black";
  wall26.shapeColor = "black";
  wall27.shapeColor = "black";
  wall28.shapeColor = "black";
  wall29.shapeColor = "black";
  wall30.shapeColor = "black";
  wall31.shapeColor = "black";

}

function draw() {
  
  //setting background
  
  background(bg);

    //condition for gameState 0
    if(gameState === 0){
      player.velocityX = 0;
      player.velocityY = 0;

      fill(0);
      textAlign(CENTER);
      textSize(displayWidth / 40);
      text("Welcome to Marvellous Maze Game!!!", displayWidth /2, displayHeight * (3/50));
      textAlign(LEFT);
      textSize(displayWidth / 50);
      text("1. Press Space to start", displayWidth * (4/50), displayHeight * (10/50));
      text("2. Use Arrow keys to move around", displayWidth * (4/50), displayHeight * (17/50));
      text("3. Don't touch the hot walls or the moving enemies", displayWidth * (4/50), displayHeight * (24/50));
      text("4. Get to the end to win", displayWidth * (4/50), displayHeight * (31/50));

      wall1.visible = false;
      wall2.visible = false;
      wall3.visible = false;
      wall4.visible = false;
      wall5.visible = false;
      wall6.visible = false;
      wall7.visible = false;
      wall8.visible = false;
      wall9.visible = false;
      wall10.visible = false;
      wall11.visible = false;
      wall12.visible = false;
      wall13.visible = false;
      wall14.visible = false;
      wall15.visible = false;
      wall16.visible = false;
      wall17.visible = false;
      wall18.visible = false;
      wall19.visible = false;
      wall20.visible = false;
      wall21.visible = false;
      wall22.visible = false;
      wall23.visible = false;
      wall24.visible = false;
      wall25.visible = false;
      wall26.visible = false;
      wall27.visible = false;
      wall28.visible = false;
      wall29.visible = false;
      wall30.visible = false;
      wall31.visible = false;

      enclosing_wall1.visible = false;
      enclosing_wall2.visible = false;

      moving_enemy1.visible = false;
      moving_enemy2.visible = false;
      moving_enemy3.visible = false;
      moving_enemy4.visible = false;

      bouncing_enemy1.visible = false;
      bouncing_enemy2.visible = false;
      bouncing_enemy3.visible = false;
      bouncing_enemy4.visible = false;

      award.visible = false;

      player.visible = false;
    
  }
     //condition for gameState 1
     if(keyCode === 32){
       gameState = 1;

  }
   if(gameState === 1){
    wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    wall4.visible = true;
    wall5.visible = true;
    wall6.visible = true;
    wall7.visible = true;
    wall8.visible = true;
    wall9.visible = true;
    wall10.visible = true;
    wall11.visible = true;
    wall12.visible = true;
    wall13.visible = true;
    wall14.visible = true;
    wall15.visible = true;
    wall16.visible = true;
    wall17.visible = true;
    wall18.visible = true;
    wall19.visible = true;
    wall20.visible = true;
    wall21.visible = true;
    wall22.visible = true;
    wall23.visible = true;
    wall24.visible = true;
    wall25.visible = true;
    wall26.visible = true;
    wall27.visible = true;
    wall28.visible = true;
    wall29.visible = true;
    wall30.visible = true;
    wall31.visible = true;

    enclosing_wall1.visible = true;
    enclosing_wall2.visible = true;

    moving_enemy1.visible = true;
    moving_enemy2.visible = true;
    moving_enemy3.visible = true;
    moving_enemy4.visible = true;

    bouncing_enemy1.visible = true;
    bouncing_enemy2.visible = true;
    bouncing_enemy3.visible = true;
    bouncing_enemy4.visible = true;

    award.visible = true;

    player.visible = true;

        if(keyIsDown(UP_ARROW)){
        player.velocityX = 0;
        player.velocityY = -5;
        }
        else if(keyIsDown(DOWN_ARROW)){
          player.velocityX = 0;
          player.velocityY = 5;
        }  
        else if(keyIsDown(LEFT_ARROW)){
          player.velocityY = 0;
          player.velocityX = -5;
          
        }
          else if(keyIsDown(RIGHT_ARROW)){
          player.velocityY = 0;
          player.velocityX = 5;
        }
        else {
          player.velocityX = 0;
          player.velocityY = 0;
        }
      }

     //condition for gameState 2
    if(player.isTouching(award)){
      gameState = 2;

      player.velocityY = 0;
      player.velocityX = 0;

      textFont("Century Schoolbook");
      textSize(20);
      textAlign(CENTER);
      text("You win!! Press R to play again", displayWidth / 2, displayHeight / 2);
    }
    if (player.isTouching(moving_enemy1)||player.isTouching(moving_enemy2)||player.isTouching(moving_enemy3)||
        player.isTouching(moving_enemy4)||player.isTouching(bouncing_enemy1)||player.isTouching(bouncing_enemy2)||player.isTouching(bouncing_enemy3)||
        player.isTouching(bouncing_enemy4)||player.isTouching(bound1)||player.isTouching(bound2)||player.isTouching(bound3)||player.isTouching(bound4)||
        player.isTouching(enclosing_wall1)||player.isTouching(enclosing_wall2)){
          gameState = 2;

          player.velocityY = 0;
          player.velocityX = 0;

          wall1.visible = false;
          wall2.visible = false;
          wall3.visible = false;
          wall4.visible = false;
          wall5.visible = false;
          wall6.visible = false;
          wall7.visible = false;
          wall8.visible = false;
          wall9.visible = false;
          wall10.visible = false;
          wall11.visible = false;
          wall12.visible = false;
          wall13.visible = false;
          wall14.visible = false;
          wall15.visible = false;
          wall16.visible = false;
          wall17.visible = false;
          wall18.visible = false;
          wall19.visible = false;
          wall20.visible = false;
          wall21.visible = false;
          wall22.visible = false;
          wall23.visible = false;
          wall24.visible = false;
          wall25.visible = false;
          wall26.visible = false;
          wall27.visible = false;
          wall28.visible = false;
          wall29.visible = false;
          wall30.visible = false;
          wall31.visible = false;
    
          enclosing_wall1.visible = false;
          enclosing_wall2.visible = false;
    
          moving_enemy1.visible = false;
          moving_enemy2.visible = false;
          moving_enemy3.visible = false;
          moving_enemy4.visible = false;
    
          bouncing_enemy1.visible = false;
          bouncing_enemy2.visible = false;
          bouncing_enemy3.visible = false;
          bouncing_enemy4.visible = false;
    
          award.visible = false;
    
          player.visible = false;
    }

    if (gameState == 2){
      textFont("Century Schoolbook");
      textSize(40);
      stroke("black");
      text("You Lose!! Press R to play again", displayWidth * (140/500), displayHeight/2);
      if (keyCode == 82){
        gameState = 0;
        player.x = displayWidth * (93/100); 
        player.y = displayHeight * (86/100)
      }
  }

  //making player collide with the wall
  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall17);
  player.collide(wall18);
  player.collide(wall19);
  player.collide(wall20);
  player.collide(wall21);
  player.collide(wall22);
  player.collide(wall23);
  player.collide(wall24);
  player.collide(wall25);
  player.collide(wall26);
  player.collide(wall27);
  player.collide(wall28);
  player.collide(wall29);
  player.collide(wall30);
  player.collide(wall31);
  
  bouncing_enemy1.bounceOff(invis_wall1);
  bouncing_enemy1.bounceOff(invis_wall2);
  bouncing_enemy1.bounceOff(wall31);
  bouncing_enemy1.bounceOff(wall10);
  bouncing_enemy1.bounceOff(bound1);
  bouncing_enemy1.bounceOff(bound2);  
  bouncing_enemy1.bounceOff(bound3);
  bouncing_enemy1.bounceOff(bound4);
  
  
  bouncing_enemy2.bounceOff(invis_wall1);
  bouncing_enemy2.bounceOff(invis_wall2);
  bouncing_enemy2.bounceOff(wall31);
  bouncing_enemy2.bounceOff(wall10);
  bouncing_enemy2.bounceOff(bound1);
  bouncing_enemy2.bounceOff(bound2);
  bouncing_enemy2.bounceOff(bound3);
  bouncing_enemy2.bounceOff(bound4);

  bouncing_enemy3.bounceOff(invis_wall1);
  bouncing_enemy3.bounceOff(invis_wall2);
  bouncing_enemy3.bounceOff(wall31);
  bouncing_enemy3.bounceOff(wall10);
  bouncing_enemy3.bounceOff(bound1);
  bouncing_enemy3.bounceOff(bound2);
  bouncing_enemy3.bounceOff(bound3);
  bouncing_enemy3.bounceOff(bound4);

  bouncing_enemy4.bounceOff(invis_wall1);
  bouncing_enemy4.bounceOff(invis_wall2);
  bouncing_enemy4.bounceOff(wall31);
  bouncing_enemy4.bounceOff(wall10);
  bouncing_enemy4.bounceOff(bound1);
  bouncing_enemy4.bounceOff(bound2);
  bouncing_enemy4.bounceOff(bound3);
  bouncing_enemy4.bounceOff(bound4);
  
   //making player collide with the boundaries
   player.collide(bound1);
   player.collide(bound2);
   player.collide(bound3);
   player.collide(bound4);

   moving_enemy1.bounceOff(wall4);
   moving_enemy1.bounceOff(wall15);
   
   moving_enemy2.bounceOff(wall4);
   moving_enemy2.bounceOff(wall15);

   moving_enemy3.bounceOff(wall4);
   moving_enemy3.bounceOff(wall15);
   
   moving_enemy4.bounceOff(wall4);
   moving_enemy4.bounceOff(wall15);

   enclosing_wall1.bounceOff(wall15);
   enclosing_wall1.bounceOff(bound2);  
   enclosing_wall1.collide(player); 

   enclosing_wall2.bounceOff(wall15);
   enclosing_wall2.bounceOff(bound2);
   enclosing_wall2.collide(player);
  

  //drawing all the sprites
  allSprites.draw()
}