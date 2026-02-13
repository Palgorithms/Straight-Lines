
let isShort = false;
let half = false;

let canvasHeight = document.body.clientHeight;
let canvasWidth = isShort ? half ? canvasHeight*9/8 : canvasHeight*9/16 : document.body.clientWidth;
let Debug = true;
let Drawing = false;
let i = -1;
let lines = [];

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  rectMode(CENTER);
}

function draw() {
  background(0);
  // noFill();
  stroke(255,0,0)
  strokeWeight(20)
  
  if(Drawing){
    lines[i].x2 = mouseX;
    lines[i].y2 = mouseY;
  }
  RenderLines()
}

function RenderLines(){
  
  lines.forEach((l)=>{
    noFill();
    stroke(255,0,0)
    strokeWeight(20)
    line(l.x1,l.y1,l.x2,l.y2)
  })
}

function mousePressed(e){
  if(e.button == 0){
    lines.push({x1:mouseX,y1:mouseY,
      x2:mouseX,y2:mouseY})
    i++;
    Drawing = true;
  }
}

function mouseReleased(e){
  if(e.button == 0){
    Drawing = false;
  }
}

function keyPressed(e){
  if(key === 'd'){
    Debug = !Debug;
  }
  if(e.key === 'q'){
    P1 = true;
  }
  if(e.key === 'w'){
    P2 = true;
  }
  if(e.key === 'e'){
    P3 = true;
  }
  if(e.key === 'r'){
    P4 = true;
  }
}

function keyReleased(e){
  if(e.key === 'q'){
    P1 = false;
  }
  if(e.key === 'w'){
    P2 = false;
  }
  if(e.key === 'e'){
    P3 = false;
  }
  if(e.key === 'r'){
    P4 = false;
  }
}

function drawArrow(x1,y1,x2,y2){
  fill(255,255,255)
  line(x1,y1,x2,y2)
  circle(x1,y1,5)
  let angle = Math.atan2(y2 - y1, x2 - x1);
  line(x2,y2,x2+cos(angle+Math.PI/4*3)*10,y2+sin(angle+Math.PI/4*3)*10)
  line(x2,y2,x2+cos(angle-Math.PI/4*3)*10,y2+sin(angle-Math.PI/4*3)*10)
}

function drawLine(x1,y1,x2,y2){
  fill(255,255,255)
  line(x1,y1,x2,y2)
  circle(x1,y1,5)
  circle(x2,y2,5)
}

function writeTxt(txt,x,y,isY){
  textSize(20)
  fill(255,255,255)
  if(isY){
    textAlign(LEFT,CENTER)
  }
  else{
    textAlign(CENTER,BOTTOM)
  }
  text(txt, x, y)
}
