var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
  //loadImage de path (camino)
  pathImg = loadImage("path.png");

  //loadAnimation de boy (niño)
  boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png")
}

function setup(){
  createCanvas(400,400);

  //crear sprite de path (camino) 
  path = createSprite(200,200);
  //agregar imagen de path
  path.addImage("path",pathImg);


  //crear sprite de boy (niño)
  boy = createSprite(200,300,10,10);
  //agregar animación para boy
  boy.addAnimation("running", boyImg);
  boy.scale = 0.5;
  
  // crear  left Boundary (límite izquierdo)
  leftBoundary = createSprite(0,0,100,800);
  //establecer visibilidad como false (falso) para límite izquierdo
  leftBoundary.visible = false;

  //crear right Boundary (límite derecho)
  rightBoundary=createSprite(410,0,100,800);
  //establecer visibilidad como false (falso) para límite izquierdo
  rightBoundary.visible = false;
}

function draw() {
  background(0);

  //Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
  path.velocityY = 6;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX;


  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary);
  boy.collide(rightBoundary); 


  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
