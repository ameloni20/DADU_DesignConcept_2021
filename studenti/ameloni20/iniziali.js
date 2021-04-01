let w = 10
let p2 = 375
let p3 = p2 + 50

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(128);
  
  // lettera M
  
   stroke(220);
   fill(0,0,100);
   strokeWeight(w);
  beginShape();
    vertex(170,p2);
    vertex(170,250);
    vertex(230,310);
    vertex(290,250);
    vertex(290,p2);
    endShape();
  
        // lettera A 
  
  textSize(200);
  textStyle(BOLD);
  textFont('Helvetica');
  text('A', 10, p2);
}


function keyTyped(){
  // quando uso la tastiera
  
  console.log(key);
  w = random (3,20)
  p2 = random (125,500)
}