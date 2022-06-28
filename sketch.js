var fortinaituolabbji
var cap, capimg;
var solo, line;
var estado = "inicio"
var img, pr1, pr2, pr3, pr4,pr5, pr6,pr7, pr8;
var bl1, bl2, gpblocos;
var usparagaios;

function preload(){ // função que carregar todas as imagens e animações
  capimg = loadAnimation("assets/cp1.png", "assets/cp2.png","assets/cp3.png", "assets/cp4.png")
  img = loadImage ("assets/cap1.png");

  fortinaituolabbji =loadImage ("assets/pp3.png")
  pr1 = loadImage("assets/cs1.jpg");
  pr2 = loadImage("assets/cs2.jpg");
  pr3 = loadImage("assets/cs3.jpg");
  pr4 = loadImage("assets/cs4.jpg");
  pr5 = loadImage("assets/cs5.jpg");
  pr6 = loadImage("assets/cs6.jpg");
  pr7 = loadImage("assets/cs7.jpg");
  pr8 = loadImage("assets/cs8.jpg");

  bl1 = loadImage("assets/b1.png");
  bl2 = loadImage("assets/b2.png");
  
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(windowWidth,500);
  solo = createSprite(420,480,width+1000,100)
  //CAP
  cap = createSprite(50,244,20,20)
  cap.addAnimation("capivara",capimg)
  cap.debug=true
  gpblocos = new Group()
  usparagaios =new Group()
 
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
  //camera:
  cap.velocityY += 0.8;
  cap.collide(solo)
  camera.position.y = cap.position.y-100;
  camera.position.x = cap.position.x+400
  solo.x = cap.x
  
  controle ();
  blocos()
  cap.collide(gpblocos)

  bandodefavelado()
}

function controle(){
  if(keyIsDown(32)){
    cap.velocityY =  -10
  }
  if(keyIsDown(LEFT_ARROW)){
    cap.x-= 10
  }
  if(keyIsDown(RIGHT_ARROW)){
    cap.x+= 10
  }
}
function bandodefavelado(){
  if(frameCount%40===0){
    var paragaio = createSprite(cap.x+1100, random(200,430),20,20);
    paragaio.lifetime = 1000
    paragaio.scale=0.2
    var r = Math.round(random(1,2))
    switch (r) {
        case 1: paragaio.addImage(fortinaituolabbji)
        break;
        case 2: paragaio.addImage(fortinaituolabbji)
        break;
    }
usparagaios.add(paragaio)
    paragaio.debug=true
  }





}




function blocos(){
  if(frameCount%40===0){
    var bloco = createSprite(cap.x+1100, random(200,430),20,20);
    bloco.lifetime = 1000
    bloco.scale=0.2
    var r = Math.round(random(1,2))
    switch (r) {
        case 1: bloco.addImage(bl1)
        break;
        case 2: bloco.addImage(bl2)
        break;
    }

    gpblocos.add(bloco)
    bloco.debug=true
  }

}

function criacasas (){
  if(frameCount%40===0){
    var casa = createSprite(800,300,20,20)
    casa.velocityX = -2
    
    // var r = Math.round(random(1,8))
    // switch (r) {
    //   case 1: casa.addImage(pr1)
    //     break;
    //     case 2: casa.addImage(pr2)
    //     break;
    //     case 3: casa.addImage(pr3)
    //     break;
    //     case 4: casa.addImage(pr4)
    //     break;
    //     case 5: casa.addImage(pr5)
    //     break;
    //     case 6: casa.addImage(pr6)
    //     break;
    //     case 7: casa.addImage(pr7)
    //     break;
    //     case 8: casa.addImage(pr8)
    //     break;
    
     
    // }
  }
}