
var cap, capimg;
var solo, line;
var estado = "inicio"
var img, pr1, pr2, pr3, pr4,pr5, pr6,pr7, pr8

function preload(){ // função que carregar todas as imagens e animações
  capimg = loadAnimation("assets/cp1.png", "assets/cp2.png","assets/cp3.png", "assets/cp4.png")
  img = loadImage ("assets/cap1.png");

  pr1 = loadImage("assets/cs1.jpg");
  pr2 = loadImage("assets/cs2.jpg");
  pr3 = loadImage("assets/cs3.jpg");
  pr4 = loadImage("assets/cs4.jpg");
  pr5 = loadImage("assets/cs5.jpg");
  pr6 = loadImage("assets/cs6.jpg");
  pr7 = loadImage("assets/cs7.jpg");
  pr8 = loadImage("assets/cs8.jpg");
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(800,500);
  solo = createSprite(420,420,900,200)
  line=createSprite(400,385,800,5)
  line.shapeColor="white"
  
  //CAP

}

function draw(){
  background("#87CEFA");
  drawSprites(); 

  if (estado === "inicio"){
    inicio ()
  } else if (estado === "jogar"){
    jogar ()
  }else if (estado === "fim") {

  }

  text (mouseX + "," + mouseY, mouseX, mouseY)
}

function inicio(){
  stroke("Green")
  strokeWeight(5)
  textFont("Lime");
  fill ("LightPink")
  textSize(20)
  text("BEM VINDO AO GAME", 220,120)
  text("Pressione espaço para começar", 237,162)
  image (img, 420,5)
  if(keyIsDown(32)){
    estado = "jogar" 
  }
}

function jogar (){
  criacasas()
}

function criacasas (){
  if(frameCount%40===0){
    var casa = createSprite(800,300,20,20)
    casa.velocityX = -2
    
    var r = Math.round(random(1,8))
    switch (r) {
      case 1: casa.addImage(pr1)
        break;
        case 2: casa.addImage(pr2)
        break;
        case 3: casa.addImage(pr3)
        break;
        case 4: casa.addImage(pr4)
        break;
        case 5: casa.addImage(pr5)
        break;
        case 6: casa.addImage(pr6)
        break;
        case 7: casa.addImage(pr7)
        break;
        case 8: casa.addImage(pr8)
        break;
    
     
    }
  }
}