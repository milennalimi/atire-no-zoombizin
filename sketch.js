var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zoombie, zoombieImg
var zoombieGroup;

var heart1, heart2, heart3
var heart1Img, heart2Img, heart3Img
var  bullets = 10
var bulletGroup
var bullet

function preload(){
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zoombieImg = loadImage("assets/zombie.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//criando o sprite do jogador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   heart1 = createSprite(displayWidth -150, 40, 20, 20);
   heart1.addImage("heart1", heart1Img)
   heart1.scale = 0.4
   heart1.visible = false

   heart2 = createSprite(displayWidth -100, 40, 20, 20);
   heart2.addImage("heart2", heart2Img)
   heart2.scale = 0.4
   heart2.visible = false

   heart3 = createSprite(displayWidth -150, 40, 20, 20);
   heart3.addImage("heart3", heart3Img)
   heart3.scale = 0.4

 zoombieGroup = new Group()
 bulletGroup = new Group()
}


function draw() {
  background(0); 




  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
if(keyWentDown("space")){
  bullet = createSprite(displayWidth-1150,player.y-30,20,10)
   bullet.velocityX = 20 
   bulletGroup.add(bullet)
    player.depth = bullet.depth 
    player.depth = player.depth+2
     player.addImage(shooter_shooting)
      bullets = bullets-1 
}

//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if (zoombieGroup.isTouching(player)) {
 for (var i = 0; i < zoombieGroup.length; i++){
  if (zoombieGroup[i].isTouching(player)) {
   zoombieGroup[i].destroy
  }
 }
}
 enemy ()
drawSprites();

}
function enemy (){
  if (frameCount %50===0 ) {
  zoombie = createSprite(random(500,1100), random(400,700), 40, 40 );
  zoombie.addImage(zoombieImg);
  zoombie.scale = 0.15
  zoombie.velocityX = -3;
  zoombie.debug = true
   zoombie.setCollider("rectangle",0,0,400,400);
   zoombie.lifetime = 400;
  zoombieGroup.add(zoombie)
  }
}