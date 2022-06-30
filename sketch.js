var fortinaituolabbji
var cap, capimg, capimg2;
var solo, line;
var estado = "inicio"
var img;
var bl1, bl2, gpblocos, gppicole, gpsh;
var usparagaios;
var p1,p2,p3,p4, shimg;
var score=0;

function preload(){ // função que carregar todas as imagens e animações
  capimg = loadAnimation("assets/cp1.png", "assets/cp2.png","assets/cp3.png", "assets/cp4.png")
  capimg2 = loadAnimation("assets/c1.png", "assets/c2.png","assets/c3.png", "assets/c4.png")
  
  img = loadImage ("assets/cap1.png");

  fortinaituolabbji =loadAnimation ("assets/pp1.png","assets/pp2.png","assets/pp3.png")

  bl1 = loadImage("assets/b1.png");
  bl2 = loadImage("assets/b2.png");

  p1=loadImage("assets/pic1.png");
  p2=loadImage("assets/pic2.png");
  p3=loadImage("assets/pic3.png");
  p4=loadImage("assets/pic4.png");
  shimg = loadImage("assets/sh.png");
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(windowWidth,500);
  solo = createSprite(420,480,width+1000,100);
  //CAP
  cap = createSprite(50,244,20,20);
  cap.addAnimation("capivara",capimg);
  cap.addAnimation("capivara2",capimg2);
  cap.debug=true;
  gpblocos = new Group();
  usparagaios =new Group();
  gppicole =new Group();
  gpsh = new Group()
}

function draw(){
  background("#87CEFA");
  drawSprites(); 

  if (estado === "inicio"){
    inicio ();
  } else if (estado === "jogar"){
    jogar ();
    
  }else if (estado === "fim") {

  }
  text (mouseX + "," + mouseY, mouseX, mouseY);
}

function inicio(){
  stroke("Green");
  strokeWeight(5);
  textFont("Lime");
  fill ("LightPink");
  textSize(20);
  text("BEM VINDO AO GAME", 220,120);
  text("Pressione espaço para começar", 237,162);
  image (img, 420,5);
  if(keyIsDown(32)){
    estado = "jogar";
  }
}

function jogar(){
  //camera:
  text("PICOLES: "+score, cap.x+200, cap.y-200)
  cap.velocityY += 0.8;
  cap.collide(solo);
  camera.position.y = cap.position.y-100;
  camera.position.x = cap.position.x+400;
  solo.x = cap.x;
  
  controle ();
  blocos();
  cap.collide(gpblocos);
  bandodefavelado();
  picoles();
 
  if(score>=2){
    rain()
  }
}

function controle(){
  if(keyIsDown(32)){
    cap.velocityY =  -10;
  }
  if(keyIsDown(LEFT_ARROW)){
    cap.x-= 10;
    cap.changeAnimation("capivara2",capimg2)
  }
  if(keyIsDown(RIGHT_ARROW)){
    cap.x+= 10;
    cap.changeAnimation("capivara",capimg)
  }
}

function bandodefavelado(){
  if(frameCount%40===0){
    var paragaio = createSprite(cap.x+1100, random(cap.y-500,430),20,20);
    paragaio.lifetime = 1000;
    paragaio.scale=0.2;
    paragaio.addAnimation("ave", fortinaituolabbji)
    usparagaios.add(paragaio);
    paragaio.velocityX =2;
    paragaio.debug=true;
  }
}

function blocos(){
  if(frameCount%40===0){
    var bloco = createSprite(cap.x+1100, random(cap.y-500,430),20,20);
    bloco.lifetime = 1000;
    bloco.scale=0.2;
    var r = Math.round(random(1,2));
    switch (r) {
        case 1: bloco.addImage(bl1);
        break;
        case 2: bloco.addImage(bl2);
        break;
    }
    gpblocos.add(bloco);
    bloco.debug=true;
  }
}

function picoles(){
  if(frameCount%40===0){
    var picole = createSprite(cap.x+1100, random(cap.y-500,430),20,20);
    picole.lifetime = 1000;
    picole.scale=0.5;
    var r = Math.round(random(1,4));
    switch (r) {
        case 1: picole.addImage(p1);
        break;
        case 2: picole.addImage(p2);
        break;
        case 3: picole.addImage(p3);
        break;
        case 4: picole.addImage(p4);
        break;
    }
    gppicole.add(picole);
    picole.debug=true;
  }
}

function rain() {
  for (let index = 0; index < 4; index++) {
    var sh = createSprite(cap.x+400, cap.y-200,20,20)
    sh.addImage(shimg);
    sh.velocityX = random(-2,2);
    sh.velocityY = random(-2,2);
    sh.scale = 0.8
    score=0;
    sh.lifetime = 200
    gpsh.add(sh)

  }
}